import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NavParams, Nav, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from 'ionic-angular/index';
import {Camera} from '@ionic-native/camera';
import { MediaPlugin } from 'ionic-native';
import { AudioRecorder, AudioRecorderState } from '../../services/audiorecorder';
import { NativeAudio } from '@ionic-native/native-audio';
import { Platform } from 'ionic-angular';
import { Base64 } from '@ionic-native/base64';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AudioRecorder]
})
export class HomePage {

  AudioRecorderState = AudioRecorderState;

  empresa: string = '';
  email: string = '';
  telefone: string = '';

  masks: any;

  constructor(public navCtrl: NavController,
    private http: Http, 
    public fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private camera: Camera,
    public audioRecorder: AudioRecorder,
    public alertCtrl: AlertController,
    private nativeAudio: NativeAudio,
      platform: Platform,
      public navParams: NavParams,
      private base64: Base64,
      private transfer: FileTransfer,
      
      
     
  ) {

     //recebendo os parametros vindo da pagina que solicitou os detalhes do produto
      this.empresa = navParams.get("empresa");
     this.email = navParams.get("email");
     this.telefone = navParams.get("telefone");    

     console.log('Empresa ->' + this.empresa);
     console.log('Email ->' + this.email);
     console.log('Telefone ->' + this.telefone);

  }

  converteAudio(){
   //this.audioRecorder.converteAudio();

  //  const fileTransfer: FileTransferObject = this.transfer.create();
   
  //    let options: FileUploadOptions = {
  //      fileKey: 'audio',
  //      fileName: 'audio.mp3',
  //      chunkedMode: false,
  //      mimeType: "audio/mp3",
  //      headers: {}
  //    }

  //    fileTransfer.upload(this., 'http://192.168.0.7:8080/api/uploadImage', options)
  //    .then((data) => {
  //    console.log(data+" Uploaded Successfully");
  //    //this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
  //  }, (err) => {
  //    console.log(err);

  //  });
  
  }
 

  maskTelefone(){
    
    if(this.telefone == null){
      this.showAlert('O telefone informado é inválido!', 'Atenção');
    }
    else{
      this.telefone = this.telefone.replace("(","");
      this.telefone = this.telefone.replace(")","");
      this.telefone = this.telefone.replace("-","");

      if(this.telefone.length != 11 && this.telefone.length != 10){
        this.showAlert('O telefone informado é inválido!', 'Atenção');
      }
      else{
        if(this.telefone.length == 11){
          this.telefone = '('+ this.telefone.substring(0,2) + ')'+ this.telefone.substring(2,7) + '-' + this.telefone.substring(7,11);
        }
        if(this.telefone.length == 10){
          this.telefone = '('+ this.telefone.substring(0,2) + ')'+ this.telefone.substring(2,6) + '-' + this.telefone.substring(6,10);
        }
      
      }
    }
  
   
        
     
    }

  gravarAudio(){

   
    this.nativeAudio.setVolumeForComplexAsset('sound',0.1);
    // this.nativeAudio.play('sound', () => this.startRecording());
    this.startRecording();
    
  
  }

  public base64Image: string;

  //toast que vai aparecer quando um audio estiver sendo gravado
  toast_recording;
  
  //toast que vai apareer quando um audio estiver sendo reproduzido
  toast_playback;

  chamadoForm = this.fb.group({
    empresa: ['', Validators.required],
    email: ['', Validators.required],
    telefone: ['', Validators.required],
    assunto: ['', Validators.required],
    nome: ['', Validators.required], 
    detalhes: ['', Validators.required]   
  });

  takePicture(){
    
        this.camera.getPicture({
          sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
      //      targetWidth: 1000,
      //      targetHeight: 1000
        }).then((imageData) => {
          // imageData is a base64 encoded string
            this.base64Image = "data:image/jpeg;base64," + imageData;
        }, (err) => {
            console.log(err);
        });
    
    
    }

    startRecording() {

      this.toast_recording = this.toastCtrl.create({
        message: 'Gravando....',
        cssClass: "toast-recording",
        position: 'top'
      });
      
          
    try {
      // this.audioRecorder.preparedRecord();
      this.audioRecorder.startRecording();
      this.toast_recording.present();
     
    }
    catch (e) {
      this.showAlert('Para gravar áudio e necessário segurar o botão vermelho!','Atenção');
      this.toast_recording.dismiss();
      console.log(e);
    }
  }

   

  stopRecording() {
    try {
      this.audioRecorder.stopRecording();
      this.toast_recording.dismiss();
    }
    catch (e) {
      this.showAlert('Para gravar áudio e necessário segurar o botão vermelho!','Atenção');
      console.log(e);
    }
  }

  startPlayback() {

    this.toast_playback = this.toastCtrl.create({
      message: 'Reproduzindo....',
      cssClass: "toast-playback",
      position: 'top'
    });
    try {
      this.audioRecorder.startPlayback();
      this.toast_playback.present();
    }
    catch (e) {
      this.showAlert('Para reproduzir áudio é necessário segurar o botão verde!','Atenção');
    }
  }

  stopPlayback() {
    try {
      this.audioRecorder.stopPlayback();
      this.toast_playback.dismiss();
    }
    catch (e) {
      this.showAlert('Para reproduzir áudio é necessário segurar o botão verde!','Atenção');
    }
  } 

  showAlert(message, title) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  abrirChamado(){

    
        
    
            let loading = this.loadingCtrl.create({
            content: 'Abrindo Chamado...'
            });

            loading.present();
 
          let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
          let options = new RequestOptions({headers: headers});
          let param = this.chamadoForm.value

          let url = 'http://goldsistemas.ddns.com.br/CHM_chamadosAcaoTicketNovo.asp?plataforma=app&nome='+
          this.chamadoForm.value.nome+'&email='+this.chamadoForm.value.email+'&telefone='+this.chamadoForm.value.telefone+
          '&assunto='+this.chamadoForm.value.assunto+'&detalhes='+this.chamadoForm.value.detalhes;

          //assunto detalhes

          console.log(url);
          

          console.log(param);

          this.http.get(url , options)
          //.map(res => res.json())
            .subscribe(data => {

              let retorno = data.text();

              console.log(retorno);



              // switch(retorno){

              //   case '0':
        
              //   break;
                
              //   case '1':
              //         this.exibeToast('Não digite caracteres especiais nos campos!');
              //   break;

              //   case '2':
              //         this.exibeToast('Usuário não encontrado!');
              //   break;

              //   case '3':
              //         this.exibeToast('Usuário e Senha não conferem!');
              //   break;

              //   case '4':
              //         this.exibeToast('Preencha todos os campos!');
              //   break;

              //   case '5':
              //         this.exibeToast('Senha incorreta!');
              //   break;

              //   case '6':
              //         this.exibeToast('Usuário desativado!');
              //   break;

              // }

              loading.dismiss();

              })


               


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
