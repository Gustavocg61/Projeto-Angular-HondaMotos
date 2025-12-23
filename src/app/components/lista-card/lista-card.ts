import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../produto-model';
import { ProdutoCard } from "../produto-card/produto-card";
import { PRODUTOS_MOCK } from '../../mock';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-lista-card',
  imports: [ProdutoCard, RouterModule, MatButtonModule, MatDividerModule, MatIconModule],
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
