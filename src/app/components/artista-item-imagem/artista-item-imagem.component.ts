import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-artista-item-imagem',
  templateUrl: './artista-item-imagem.component.html',
  styleUrl: './artista-item-imagem.component.scss'
})
export class ArtistaItemImagemComponent {

  @Input()
  imagemSrc = '';

  @Output()
  click = new EventEmitter<void>();

  onClick() {
    this.click.emit();
  }
}
