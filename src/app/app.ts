import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';//renove a importação do RouteOutlet, pois não é necessário para este componente
//import {Produto} from './components/produto/produto';//importando a classe produto do arquivo produto,ts para ser usado no componente ap
import { LisProdutos } from './features/produtos/lis-produtos/lis-produtos';
@Component({
  selector: 'app-root',
  imports: [LisProdutos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
}
