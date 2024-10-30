import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMusica } from '../../interfaces/IMusica';
import { newMusica } from '../../common/factories';
import { PlayerService } from '../../services/player.service';
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss'
})
export class PlayerCardComponent implements OnInit, OnDestroy {

  musica: IMusica = newMusica();
  subs: Subscription[] = [];

  anteriorIcone = faStepBackward;
  proximoIcone = faStepForward;

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.obterMusicaTocando();
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  obterMusicaTocando() {
    const sub = this.playerService.musicaAtual.subscribe(s => {
      this.musica = s;
    });

    this.subs.push(sub);
  }

  voltarMusica() {
    this.playerService.voltarMusica();
  }

  proximaMusica() {
    this.playerService.proximaMusica();
  }
}
