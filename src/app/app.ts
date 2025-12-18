import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Layoutincial } from "./components/layoutincial/layoutincial";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatButtonModule, MatIconModule, MatFormFieldModule,
    MatInputModule, Footer, Layoutincial ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('catalogo');
}
