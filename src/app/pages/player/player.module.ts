import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { MenuComponent } from '../../components/menu/menu.component';
import { BotaoMenuComponent } from '../../components/botao-menu/botao-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeMenuComponent } from '../../components/rodape-menu/rodape-menu.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistaComponent } from '../../components/top-artista/top-artista.component';

@NgModule({
  declarations: [
    PlayerComponent,
    MenuComponent,
    BotaoMenuComponent,
    RodapeMenuComponent,
    HomeComponent,
    TopArtistaComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
