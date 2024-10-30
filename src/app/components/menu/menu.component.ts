import { IPlaylist } from './../../interfaces/IPlaylist';
import { Component, OnInit } from '@angular/core';
import { faGuitar, faHome, faMusic, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SpotifyService } from '../../services/spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  menuSelecionado = 'Home';

  playlists: IPlaylist[] = [];

  homeIcone = faHome;
  pesquisarIcone = faSearch;
  artistaIcone = faGuitar;
  playlistIcone = faMusic;

  constructor(private spotifyService: SpotifyService, private router: Router) { }

  ngOnInit(): void {
    this.buscarPlaylists();
  }

  botaoClick(botao: string) {
    this.menuSelecionado = botao;
    this.router.navigateByUrl('player/home');
  }

  async buscarPlaylists() {
    this.playlists = await this.spotifyService.buscarPlaylistUsuario();
  }

  irParaPlaylist(playlistId: string) {
    this.menuSelecionado = playlistId;
    this.router.navigateByUrl(`player/lista/playlist/${playlistId}`);
  }
}
