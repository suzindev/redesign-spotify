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
import { PainelInfoComponent } from '../../components/painel-info/painel-info.component';
import { BuscasRecentesComponent } from '../../components/buscas-recentes/buscas-recentes.component';
import { FormsModule } from '@angular/forms';
import { TopFiveArtistasComponent } from '../../components/top-five-artistas/top-five-artistas.component';
import { ArtistaItemImagemComponent } from '../../components/artista-item-imagem/artista-item-imagem.component';
import { PlayerCardComponent } from '../../components/player-card/player-card.component';
import { ListaMusicaComponent } from '../lista-musica/lista-musica.component';
import { BannerComponent } from '../../components/banner/banner.component';

@NgModule({
  declarations: [
    PlayerComponent,
    ListaMusicaComponent,
    MenuComponent,
    BotaoMenuComponent,
    RodapeMenuComponent,
    HomeComponent,
    TopArtistaComponent,
    PainelInfoComponent,
    BuscasRecentesComponent,
    TopFiveArtistasComponent,
    ArtistaItemImagemComponent,
    PlayerCardComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forChild(PlayerRotas)
  ]
})
export class PlayerModule { }
