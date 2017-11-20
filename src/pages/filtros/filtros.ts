import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavParams, Nav, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { ChamadosPage } from '../chamados/chamados';

/**
 * Generated class for the FiltrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filtros',
  templateUrl: 'filtros.html',
})
export class FiltrosPage {

  filtroForm = this.fb.group({
    id_chamado: ['', Validators.required],
    dt_inicial: ['', Validators.required],
    dt_final: ['', Validators.required],
    status: ['', Validators.required]
    });


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fb: FormBuilder) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FiltrosPage');
  }

  pesquisar(){

    this.navCtrl.popTo(ChamadosPage);

    console.log(this.filtroForm.value);

  }

}
