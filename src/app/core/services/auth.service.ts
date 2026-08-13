import { Injectable, signal, computed} from "@angular/core";

type Usuario={
    email: string;
    perfil: string;
}
@Injectable({
    providedIn: "root"
})
export class AuthService{
    private usuario = signal <Usuario | null> (null);
    private tokenJwT = signal <string | null> (null);

    //! computed 
    usuarioAtual = computed(()=> this.usuario());
    usuarioLogado = computed (()=> this.usuario() ! == null);

    login(){}

    logout(){
        this.usuario.set(null);
        this.tokenJwT.set(null);
    }

    obterToken(): string | null {
        return this.tokenJwT();
 }
}