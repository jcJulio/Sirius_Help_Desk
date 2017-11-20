import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {DetalhesChamadoPage} from '../detalhes-chamado/detalhes-chamado';
import {FiltrosPage} from '../filtros/filtros';



@Component({
  selector: 'page-chamados',
  templateUrl: 'chamados.html'
})
export class ChamadosPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    }

    presentProfileModal() {
      let profileModal = this.modalCtrl.create(FiltrosPage, { userId: 8675309 });
      profileModal.present();
    }

    chamados: Array<{num_chamado: string, assunto: string, solicitante: string, status: string}> = [
      {num_chamado: "2587", assunto: 'Erro em borderô', solicitante: "MIC MONTAGEM", 
      status: "Em Análise"},
      {num_chamado: "2684", assunto: 'Erro ao abrir o colosso', solicitante: "MIC MONTAGEM", 
      status: "Em Análise"},
      {num_chamado: "2545", assunto: 'Erro ao emitir nota fiscal', solicitante: "MIC MONTAGEM", 
      status: "Em Análise"},
      {num_chamado: "2468", assunto: 'Dúvida para estornar título', solicitante: "MIC MONTAGEM", 
      status: "Em Análise"},
      {num_chamado: "2357", assunto: 'Adicionar novo campo em um relatório', solicitante: "MIC MONTAGEM", 
      status: "Em Análise"}
      
  ];

    detalhes(){
      this.navCtrl.push(DetalhesChamadoPage, {
      });
    }
  

  }



