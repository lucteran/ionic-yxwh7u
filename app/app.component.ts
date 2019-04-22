import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { LoginComponent } from '../pages/login/login.component';
import { ListaComponent } from '../pages/lista/lista.component';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;

  constructor(platform: Platform, afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      afAuth.auth.onAuthStateChanged((user) => {
        if(user!=null){
          //usuário está logado
          this.rootPage = ListaComponent;
        }else{
          //usuário não está logado
          this.rootPage = LoginComponent;
        }
      })
    });
  }
}
