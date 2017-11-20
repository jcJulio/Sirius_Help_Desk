import { Component } from '@angular/core';
import { NavParams, Nav, AlertController,NavController } from 'ionic-angular';
import { ChamadosPage } from '../chamados/chamados';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChamadosPage;
  tab3Root = ContactPage;

  dadosEmpresa;

  empresa: string;
  email: string;
  telefone: string;

  constructor(public navParams: NavParams, public navCtrl: NavController) {

     //recebendo os parametros 

     this.dadosEmpresa = {
      email: navParams.get("email"),
      empresa: navParams.get("empresa"),
      telefone: navParams.get("telefone")
    };

    //  console.log('Empresa ->' + this.empresa);
    //  console.log('Email ->' + this.email);
    //  console.log('Telefone ->' + this.telefone);

  }

home(){
  this.navCtrl.push(HomePage, {
    email: this.email,
    empresa: this.empresa,
    telefone: this.telefone
   });
}

}
