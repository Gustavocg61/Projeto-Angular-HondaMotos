import { Component, Input } from '@angular/core';
import { ProdutoModel } from '../produto-model';



@Component({
    selector: 'app-produto-card',
  imports: [],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.scss',
})
export class ProdutoCard {
  @Input() produto! : ProdutoModel;
  imageUrl: any;
  titulo: any;
  preco: any;

  constructor(){
    console.log(this.produto)
}

}
