import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMusica } from '../../interfaces/IMusica';
import { newMusica } from '../../common/factories';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpotifyService } from '../../services/spotify.service';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-lista-musica',
  templateUrl: './lista-musica.component.html',
  styleUrl: './lista-musica.component.scss'
})
export class ListaMusicaComponent implements OnInit, OnDestroy {
  bannerImagemUrl = '';
  bannerTexto = '';
  titulo = '';

  musicas: IMusica[] = [];
  subs: Subscription[] = [];
  musicaAtual: IMusica = newMusica();

  playIcone = faPlay;

  constructor(
    private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
    private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    this.obterMusicas();
    this.obterMusicaAtual();
  }

  ngOnDestroy(): void {
    this.subs.forEach(i => i.unsubscribe());
  }

  obterMusicaAtual() {
    const sub = this.playerService.musicaAtual.subscribe(musica => {
      this.musicaAtual = musica;
    });

    this.subs.push(sub);
  }

  obterMusicas() {
    const sub = this.activatedRoute.paramMap.subscribe(async params => {
      const tipo = params.get('tipo');
      const id = params.get('id');

      await this.obterDadosPagina(tipo, id);
    });

    this.subs.push(sub);
  }

  async obterDadosPagina(tipo: string, id: string) {
    if (tipo == 'playlist')
      await this.obterDadosPlaylist(id);
    else
      await this.obterDadosArtista(id);
  }

  async obterDadosPlaylist(playlistId: string) {
    const playlistMusicas = await this.spotifyService.buscarMusicasPlaylist(playlistId);

    this.definirDadosPagina(playlistMusicas.nome, playlistMusicas.imagemUrl, playlistMusicas.musicas);
    this.titulo = 'Músicas Playlist: ' + playlistMusicas.nome;
  }

  async obterDadosArtista(artistaId: string) {

  }

  definirDadosPagina(bannerTexto: string, bannerImage: string, musicas: IMusica[]) {
    this.bannerImagemUrl = bannerImage;
    this.bannerTexto = bannerTexto;
    this.musicas = musicas;
  }

  async executarMusica(musica: IMusica) {
    await this.spotifyService.executarMusica(musica.id);
    this.playerService.definirMusicaAtual(musica);
  }

  obterArtistas(musica: IMusica) {
    return musica.artistas.map(m => m.nome).join(', ');
  }
}
