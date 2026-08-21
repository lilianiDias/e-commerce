import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facades';
import { AuthFacade } from '../../../core/facades/auth.facades';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';

@Component({
  selector: 'app-carrinho',
  imports: [MatButtonModule, RouterLink, PrecoFormatadoPipe],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {

  public router = inject(Router);
  public CarrinhoFacade = inject(CarrinhoFacade);
  private authFacade = inject(AuthFacade);


  removerItem(rmvItem: number){
    this.CarrinhoFacade.removerItem(rmvItem);
  }
limparCarrinho(){
  this.CarrinhoFacade.limparCarrinho();
}
cancelarCompra(){
  this.CarrinhoFacade.limparCarrinho();
this.authFacade.sair();
this.router.navigateByUrl('/login');
}

}
