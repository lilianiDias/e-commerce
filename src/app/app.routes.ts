import { Routes } from '@angular/router';
import { LisProdutos } from './features/produtos/lis-produtos/lis-produtos';
import { Carrinho } from './features/carrinho/carrinho/carrinho';

export const routes: Routes = [
{
    path: '',
    component: LisProdutos,
},
{
    path: 'carrinho',
    component: Carrinho,
},
];
