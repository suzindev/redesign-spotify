import { Component } from '@angular/core';

@Component({
  selector: 'app-buscas-recentes',
  templateUrl: './buscas-recentes.component.html',
  styleUrl: './buscas-recentes.component.scss'
})
export class BuscasRecentesComponent {

  pesquisasRecentes = ['Top Brasil', 'Top Global', 'Esquenta Sertanejo', 'Pagodeira', 'Funk Hits'];
  campoPesquisa = '';

  definirPesquisa(pesquisa: string) {
    this.campoPesquisa = pesquisa;
  }

  buscar() {
    console.log('Buscando...', this.campoPesquisa);
  }
}
