import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {NgForm} from "@angular/forms";
import {AlertController, NavController} from 'ionic-angular';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public afAuth: AngularFireAuth, public alertCtrl: AlertController, public navCtrl: NavController) { 

  }

  public login(form: NgForm): void{
    
    let email = form.value.email;
    let senha = form.value.senha;

    this.afAuth.auth.signInWithEmailAndPassword(email, senha)
    .then((user) => { 
      this.navCtrl.setRoot(ListaComponent);
    })
    .catch((error) => { 
      this.showMessage(error.message);
    })
  }
  public cadastrar(): void{

  }
  private showMessage(texto: string): void{
    
    let alerta = this.alertCtrl.create({
      title: 'Falha no login',
      subTitle: texto,
      buttons: ['OK']
    });

    alerta.present();

  }
}