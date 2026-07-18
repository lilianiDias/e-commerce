import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
// adicionando a classe Produto com as propriedades.
export class Produto {
  //Entrada dados da lista produto em lis-produto
  @Input() nome: string ='';
  @Input() preco: number = 0;
  //saida de dados de produtos selecionados para a lis-produtos
  @Output() produtoSelecionado= new EventEmitter<string>();
  selecionarProduto(){
     this.produtoSelecionado.emit(this.nome);
  }
}
