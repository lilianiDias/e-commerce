import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
// adicionando a classe Produto com as propriedades.
export class Produto {
  produto = "Notebook Game";
  preco = 5000;
  mostrarProduto = true;
  mostrarPreco = true;
produtos =[
{nome: 'Teclado', preco:49.99},
{nome: 'Mouse', preco:29.99},
{nome: 'Monitor', preco:149.99}
];
}
