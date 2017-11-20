import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesChamadoPage } from './detalhes-chamado';

@NgModule({
  declarations: [
    DetalhesChamadoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesChamadoPage),
  ],
})
export class DetalhesChamadoPageModule {
  
}
