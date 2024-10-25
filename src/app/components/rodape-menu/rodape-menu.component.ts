import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from '../../interfaces/IUsuario';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-rodape-menu',
  templateUrl: './rodape-menu.component.html',
  styleUrl: './rodape-menu.component.scss'
})
export class RodapeMenuComponent implements OnInit {

  usuario: IUsuario = null;

  sairIcone = faSignOutAlt;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.usuario = this.spotifyService.usuario;
  }

  logout() {
    this.spotifyService.logout();
  }
}
