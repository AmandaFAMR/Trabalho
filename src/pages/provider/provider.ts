import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-provider',
  templateUrl: 'provider.html',
})
export class ProviderPage {
 data: any;
 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http) {
  }
  load(){
    if(this.data){
      return Promise.resolve(this.data);
    }
    return new Promise(resolve =>{
      this.http
      .get('http://localhost:3000/detalhes')
      .map(res=> res.json())
      .subscribe(data =>{
      this.data = data;
      resolve(this.data);
      });
    }); 
  }
  getdeteById(id: number){
    return new Promise(resolve =>{
      this.http
      .get
  })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProviderPage');
  }

}
