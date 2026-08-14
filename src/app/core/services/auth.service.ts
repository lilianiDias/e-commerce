import { Injectable, signal, computed} from "@angular/core";

type PerfilUsuario = 'usuario' | 'admin';


type Usuario={
    email: string;
    perfil: PerfilUsuario ;
}
@Injectable({
    providedIn: "root"
})
export class AuthService{
    private usuario = signal <Usuario | null> (null);
    private tokenJwT = signal <string | null> (null);

    //! computed 
    usuarioAtual = computed(()=> this.usuario());
    usuarioLogado = computed (()=> this.usuario() !== null);
    token = computed (()=> this.tokenJwT() );
    admin =computed(()=> this.usuario()?.perfil === 'admin');

    login( email: string, senha: string): boolean{

        if(!email || !senha){
            return false;
        }

const tokenSimulado =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
'eyJzdWIiOiJhbHVub0B0ZXN0ZS5jb20iLCJwZXJmaWwiOiJ1c3VhcmlvIn0.' 
+'assinatura-simulada';

this.usuario.set({
    email,
    perfil: 'usuario'
});
this.tokenJwT.set(tokenSimulado);
return true;

    }

    logout(){
        this.usuario.set(null);
        this.tokenJwT.set(null);
    }

    obterToken(): string | null {
        return this.tokenJwT();
 }
}