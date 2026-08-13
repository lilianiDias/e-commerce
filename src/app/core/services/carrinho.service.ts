import { Injectable,signal,computed } from '@angular/core';

type ItemCarrinho = {
    nome: string;
    preco: number;
};  

@Injectable({ 
    providedIn: 'root'
})

export class CarrinhoService {

    //! Estado GlobalCriado com sussseso
    private carrinho = signal<ItemCarrinho[]>([]);

//? Seleção 
 itens = computed(() => this.carrinho());
 quantidadeItens = computed(() => this.carrinho().length);
 totalItens = computed(() => this.carrinho().reduce((total, item) => total + item.preco, 0));
carrinhoVazio = computed(() => this.carrinho().length === 0);

// TODO: ação Adicionar produtos
adicionar(produto: {nome: string; preco: number}){
    this.carrinho.update(lista => [...lista, produto]);
}
// TODO:Ação de limpeza
limpar(){
    this.carrinho.set([]);
}
}