import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { NavParams, Nav, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular/index';


import { TabsPage } from '../tabs/tabs';

import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map'


/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {

  constructor(public navCtrl: NavController,
     public toastCtrl: ToastController, 
     public statusBar: StatusBar, 
     private navParam: NavParams, 
     public nav: Nav, 
     private http: Http, 
     public fb: FormBuilder,
     public loadingCtrl: LoadingController,
    ) { 

  }

  loginForm = this.fb.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required]
  });


  // Our translated text strings
  private loginErrorString: string;

  // Attempt to login in through our User service
  doLogin() {
   // 
        // Unable to log in

        // if (this.loginForm.value.usuario == 0 || this.loginForm.value.senha == 0) {
        //   this.exibeToast('Digite seu usúario e senha!');
    
        // } else {
    
        //     let loading = this.loadingCtrl.create({
        //     content: 'Autenticando...'
        //     });

        //     loading.present();
 
        //     let headers = new Headers({'Content-type': 'application/json'})
        //     let options = new RequestOptions({headers: headers})
        //   let param = this.loginForm.value

        //   let url = 'http://goldsistemas.ddns.com.br/check.asp?plataforma=app&usuario='+this.loginForm.value.usuario+'&senha='+this.loginForm.value.senha;

        //   console.log(url);
          

        //   console.log(param);

          

          

        //   this.http.get(url).timeout(6000)
        //   .map(response => response.json()) 
        //     .subscribe(data => {

        //       let retorno;

        //       retorno = data;
             
        //       console.log(retorno);
        //       console.log( retorno.email);
        //       console.log( retorno.telefone);
        //       console.log( retorno.empresa);

           
              

        //       switch(retorno.retorno){

        //         case '0':
                  
                       this.navCtrl.push(TabsPage);
                    //  retorno.telefone= this.aplicaMaskTelefone(retorno.telefone)
            //            this.navCtrl.push(TabsPage, retorno);
            //     break;
                
            //     case '1':
            //           this.exibeToast('Não digite caracteres especiais nos campos!');
            //     break;

            //     case '2':
            //           this.exibeToast('Usuário não encontrado!');
            //     break;

            //     case '3':
            //           this.exibeToast('Usuário e Senha não conferem!');
            //     break;

            //     case '4':
            //           this.exibeToast('Preencha todos os campos!');
            //     break;

            //     case '5':
            //           this.exibeToast('Senha incorreta!');
            //     break;

            //     case '6':
            //           this.exibeToast('Usuário desativado!');
            //     break;

            //   }

            //  loading.dismiss();

            //   },
            //   error => {
            //       console.log(error)
            //       loading.dismiss();
            //   } )


            // }   

  }

  aplicaMaskTelefone(telefone){
    if(telefone.length == 11){
      telefone = '('+ telefone.substring(0,2) + ')'+ telefone.substring(2,7) + '-' + telefone.substring(7,11);
    }
    if(telefone.length == 10){
     telefone = '('+ telefone.substring(0,2) + ')'+ telefone.substring(2,6) + '-' + telefone.substring(7,10);
    }
   return telefone;
  }

  exibeToast(mensagem: string){
    
          let toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000,
            position: 'top'
          });
          toast.present();
    
        }
}