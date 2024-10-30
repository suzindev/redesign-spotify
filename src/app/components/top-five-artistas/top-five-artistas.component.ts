import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { IArtista } from '../../interfaces/IArtista';

@Component({
  selector: 'app-top-five-artistas',
  templateUrl: './top-five-artistas.component.html',
  styleUrl: './top-five-artistas.component.scss'
})
export class TopFiveArtistasComponent implements OnInit {

  artistas: IArtista[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarTopArtistas();
  }

  async buscarTopArtistas() {
    this.artistas = await this.spotifyService.buscarTopArtistas(5);
  }
}
