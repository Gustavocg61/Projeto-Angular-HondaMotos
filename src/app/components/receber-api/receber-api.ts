import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-receber-api',
  imports: [CommonModule, RouterModule],
  templateUrl: './receber-api.html',
  styleUrl: './receber-api.scss',
})
export class ReceberApiComponent implements OnInit {

  clientes: any[] = [];

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {

    this.http.get<any[]>('https://694452477dd335f4c36000ec.mockapi.io/clientes/clientes')
      .subscribe(dados => {
        this.clientes = dados;
      });
  }
}