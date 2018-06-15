import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetalsPage } from '../detals/detals';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
  
export class HomePage {

  private url:string = "http://localhost:3000/detalhes";
  public dados: Array<{}>;

  constructor(public navCtrl: NavController, public http:Http) {
    this.http.get(this.url).map(res => res.json()).subscribe(data => { this.dados = data;});
  }
  
  Pagina(id:number){
    this.navCtrl.push(DetalsPage, {
      id:id
    });
  }
}


