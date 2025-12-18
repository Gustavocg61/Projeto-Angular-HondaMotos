import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import {  MatIconModule } from "@angular/material/icon";
import { Banner } from "../banner/banner";

@Component({
  selector: 'app-layoutincial',
  imports: [MatIconModule, MatButtonModule, MatDividerModule, Banner],
  templateUrl: './layoutincial.html',
  styleUrl: './layoutincial.scss',
})
export class Layoutincial {
produto: any;


}
