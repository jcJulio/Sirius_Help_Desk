import { Injectable } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media';
import { Base64 } from '@ionic-native/base64';
import { File } from '@ionic-native/file';
import { Platform } from 'ionic-angular';


export enum AudioRecorderState {
    Ready,
    Recording,
    Recorded,
    Playing
}

@Injectable()
export class AudioRecorder {


  private fileName: string;
  
    constructor(private media: Media, private file: File, private base64: Base64, private platform: Platform) {

      this.platform.ready().then(() => {
        if (!this.platform.is('cordova')) {
          return false;
        }
  
        if (this.platform.is('ios')) {
          this.fileName = file.documentsDirectory.replace(/file:\/\//g, '') + 'record.m4a';
        }
        else if (this.platform.is('android')) {
          this.fileName = file.externalDataDirectory.replace(/file:\/\//g, '') + 'record.3gp';
        }
        else {
          // future usage for more platform support
          return false;
        }
      });
           
    
    }
  

//   mediaPlugin: MediaPlugin = null;
//   state: AudioRecorderState = AudioRecorderState.Ready;
//   private base64: Base64;
//   mediaSrc = 'file:///storage/emulated/recording.mp3';

//   get MediaPlugin(): MediaPlugin {

//     return this.mediaPlugin;
//   }
//   preparedRecord(){    
//     // const fileName: string = 'myfile2.mp3';
    

//     this.mediaPlugin = new MediaPlugin('audio.mp3');

//     // let m = this.mediaPlugin.create(fileName, (status) => {
//     //   console.log('Status updated. ', status, (status === 4 && ++stopCount === 2 && m.getDuration()) || '');
//     // }, x => console.log('Success: ',  x), e => console.log('Error: ',  e));

//  }
 
 audioObject: MediaObject;
 

  startRecording() {

    let audioObject: MediaObject = this.media.create(this.fileName);
    
        audioObject.startRecord();
        console.log('cache dir: ' + this.file.cacheDirectory);
        console.log('start recording' + this.fileName);

        this.audioObject = audioObject;

        
  
  }


  converteAudio(){
    let filePath: string = this.fileName;
    this.base64.encodeFile(filePath).then((base64File: string) => {
      console.log('audio'+base64File);
    }, (err) => {
      console.log(err);
    });


  
  }

  conversor(){
    
  }




  stopRecording() {
    // this.MediaPlugin.stopRecord();
    // this.state = AudioRecorderState.Recorded;

      this.audioObject.stopRecord();
      this.audioObject.release();
      this.converteAudio();
      /** Do something with the record file and then delete */
      // this.file.removeFile(this.file.tempDirectory, 'record.m4a');

  }

  startPlayback() {
    // this.MediaPlugin.play();
    // this.state = AudioRecorderState.Playing;

    this.audioObject.play();


  }

  stopPlayback() {
    this.audioObject.stop();
    // this.state = AudioRecorderState.Ready;
  }
}