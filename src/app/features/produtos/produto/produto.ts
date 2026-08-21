import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UpperCasePipe, CurrencyPipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ItemCarrinho } from '../../../core/models/item-carrinho';

@Component({

  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe, MatButtonModule, MatCardModule],
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

  @Output() produtoAdicionado = new EventEmitter<ItemCarrinho>();

  adicionarAoCarrinho() {
    this.produtoAdicionado.emit({ 
      nome: this.nome,
      preco: this.preco,
    });
    
  }
  }
