import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../produto-model';
import { ProdutoCard } from "../produto-card/produto-card";
import { PRODUTOS_MOCK } from '../../mock';

@Component({
  selector: 'app-lista-card',
  imports: [ProdutoCard],
  templateUrl: './lista-card.html',
  styleUrl: './lista-card.scss',
})
export class ListaCard implements OnInit {

  listacard: ProdutoModel[] ;

  constructor() {
    this.listacard = PRODUTOS_MOCK
  }
  ngOnInit(): void { }

}
