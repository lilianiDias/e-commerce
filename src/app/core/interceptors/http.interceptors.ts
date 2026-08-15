import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from "rxjs"; 
import { catchError } from "rxjs";
import { throwError } from "rxjs";
import{ inject} from "@angular/core"
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
    console.log('Requisição:', req.url);
    //! Adiciona lógica para modificar o requisição
   const authService = inject(AuthService); 
   const router = inject(Router);
   const token = authService.obterToken(); 
   
   const novaReq = token ?
   req.clone({
        setHeaders: {
            Authorization: 'Bearer ${token}',

        },
}):req;
    return next(novaReq).pipe(
    tap({
        next: (event) => {console.log('Respomde:', event)},
        error: (error) => {console.error('Erro na Requisição:', error)}
    }),
    catchError((error) => {

        console.error('Erro de Requisição Global:', error);

        if (error.status === 401) {

            console.error('Erro de autenticação de Usuário:', error);
            authService.logout();
            router.navigateByUrl('/login')

        }
        if (error.status === 500) {

            console.warn('Erro interno do servidor !', error);
        }
        if(error.status === 403){
            console.warn('Acesso proibido, Usuário sem permissão.');
            router.navigateByUrl('/produtos');
        }
        return throwError(() => error);
    }),
);
};
