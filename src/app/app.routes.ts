import { Routes } from "@angular/router";
import { authGuard } from "./core/auth.guard";

export const routes: Routes = [
    {
        path: '', //!router para raiz Localhost:4200/
        loadComponent: () =>
            import('./features/home/home/home') 
        .then((m) => m.Home),
            
    },
    {
        path: 'produtos', 
        loadComponent: () =>
            import('./features/produtos/lis-produtos/lis-produtos')
        .then((m) => m.LisProdutos),      
    },
    {
        path:'carrinho',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./features/carrinho/carrinho/carrinho')
        .then((m) => m.Carrinho),
    },
    {
        path:'**',
        redirectTo: '',
    },
];
