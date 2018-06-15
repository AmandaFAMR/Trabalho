import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ComentarioPage } from '../comentario/comentario';
import { Http, Headers, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-opniao',
  templateUrl: 'opniao.html',
})

  export class OpniaoPage {

    private url:string = "http://localhost:3000/comentario";
  
    public evento = {
  
      nome: "",
      tipo: "",
      email: "",
      comentario: ""

    };
  
    constructor(public navCtrl: NavController, 
                public navParams: NavParams,
                public http: Http,
                public toastCtrl: ToastController) {
    }

    Evento(evento){
      let headers = new Headers();
      headers.append('Content-type','application/json');
  
      let options = new RequestOptions({ headers: headers });
  
      this.http.post(this.url, evento, options)
              .map(res => res.json())
              .subscribe(data => {
                const toast = this.toastCtrl.create({
                  message: 'Mensagem Enviada com Sucesso!',
                  showCloseButton: true,
                  closeButtonText: 'Ok'
                });
                toast.present();
                this.navCtrl.push(ComentarioPage);
              });
  
        evento.nome = "";
        evento.tipo = "";
        evento.email = "";
        evento.comentario = "";
       
    } 
}
