import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';//!renove a importação do RouteOutlet, pois não é necessário para este componente
import { UpperCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Header } from './shared/layout/header/header'; 
//!import {Produto} from './components/produto/produto';//!importando a classe produto do arquivo produto,ts para ser usado no componente ap

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  MatButtonModule,  Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
