import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { deta } from '../../model/deta';
import { Http } from '@angular/http';
import { OpniaoPage } from '../opniao/opniao';


@IonicPage()
@Component({
  selector: 'page-detals',
  templateUrl: 'detals.html',
})
export class DetalsPage {

  public id;
  public obg: any;
  public deta: deta;
  public data:any;

  getEpisodeById(id: number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http
        .get(`http://localhost:3000/detalhes/${id}`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http) {
                this.id = navParams.get("id");
                this.deta = new deta();
                console.log(this.id);
                this.getEpisodeById(this.id).then(data => {
                  this.obg = data;
                  this.deta.id = this.obg.id;
                  this.deta.src = this.obg.src;
                  this.deta.nome = this.obg.nome;
                  this.deta.detalhes = this.obg.detalhes;
                  this.deta.datadelancamento = this.obg.datadelancamento;
                  this.deta.direcao = this.obg.direcao;
                  this.deta.musica = this.obg.musica;
                  this.deta.roteiro = this.obg.roteiro;
                  console.log(this.deta);
                });
  }

  Coment(){
    this.navCtrl.push(OpniaoPage);
  }
}
