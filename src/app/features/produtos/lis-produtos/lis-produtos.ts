import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { signal} from '@angular/core';
import { computed } from '@angular/core';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { LiteralMapSpreadAssignment } from '@angular/compiler';
@Component({
  selector: 'app-lis-produtos',
  imports: [Produto, PrecoFormatadoPipe, UpperCasePipe],
  templateUrl: './lis-produtos.html',
  styleUrl: './lis-produtos.css',
})
export class LisProdutos {
  //lista com dados = Array ==========SIGNALS========
  produtos =  signal <{nome: string; preco: number}[]>([]);
  carregando = signal (true);


//Função para exibir produtos seleciondos pelo usuario no console
  exibirProduto(nome:string){
    console.log('Produto Selecionado:', nome);
    this.produtoSelecionado.set(nome);
  }
  //!função que adiciona produto usando metodo update ()
  adicionarProduto(){
    this.produtos.update(listaAtual => [
      ...listaAtual,
      {nome:'playstation 5', preco:3000},
    ]);
  }
  //!função que contabiliza a quantidade de produtos na lista com metodo computed()
  totalProdutos = computed(() => this.produtos().length);
  //!função que calcule o valor total dos produtos na lista com o metodo computed()
  valorTotal = computed(() =>
  {return this.produtos().reduce((total, item) =>
    total + item.preco,0)});
    //função que substitui a lista atual dusando o metodo set()
  substituirProdutos(){
    this.produtos.set([
      {nome:'Teclado', preco:50},
      {nome:'Mouse', preco:15},
      {nome:'Monitor', preco:500},
     {nome:'Desktop', preco:1500},
     {nome:'Headset', preco:30},
    ]);
  }
   carregarProdutos(){ 
    this.carregando.set(true);
    this.http.get<{title: string; price: number}[]>
    ('https://fakestoreapi.com/products').subscribe({
      next:(dados) => {
        const produtosFormatados = dados.map(p =>({
        nome: p. title,
        preco: p.price,
        }));
        this.produtos.set(produtosFormatados);
        this.carregando.set(false);
      },
      error: (erro) =>{
        console.error('Erro ao carregar produto:', erro);
      }
    });
   }

  //! Metodo para monitorar alterações em tempo real usando effect()
  constructor(private http: HttpClient){
    this.carregarProdutos();
  
    //!effects continuam iguais  - não mexer 
   effect(() => { 
    console.log('Lista de Produtos Alterada:', this.produtos());
    });
    effect(() => {
      console.log('Valor Total Atualizado:', this.valorTotal());
    });
    effect(() => {
      if(typeof document !== 'undefined'){
        document.title = `(${this.totalProdutos()}) - Loja da Liliani`;
      }
    });
}
//! Metodo para criar um estado de seleção com signal string | null
produtoSelecionado = signal <string | null>(null);
//! Metodo para criar um estado para carrinho com signal
carrinho = signal <{nome:string, preco:number}[]>([]);
adicionarAoCarrinho(produto:{nome:string, preco:number}){
   this.carrinho.update(listaAtual => [...listaAtual, produto]
   );
     }
//totalProdutos = computed(() => this.produtos().length);
//metodo para calcular  a quantidade total dos items no carrinho
quantidadeCarrinho = computed(() => this.carrinho().length);
//metodo para calcular o valor total dos items no carrinho
totalCarrinho = computed(() => {
  return this.carrinho().reduce((total, item) => 
  total + item.preco, 0)});

  //valorTotal = computed(() =>
  //{return this.produtos().reduce((total, item) =>
  //total + item.preco,0)});
}
