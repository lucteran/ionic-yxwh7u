import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { LoginComponent } from '../pages/login/login.component';
import { ListaComponent } from '../pages/lista/lista.component';
import { CadastroComponent } from '../pages/cadastro/cadastro.component';
import {FormsModule} from '@angular/forms';

const config = {
    apiKey: "AIzaSyDIsfqK8UqcHcxcRay1im8KfLGuZPy-5SM",
    authDomain: "tarefasapp-1fadf.firebaseapp.com",
    databaseURL: "https://tarefasapp-1fadf.firebaseio.com",
    projectId: "tarefasapp-1fadf",
    storageBucket: "tarefasapp-1fadf.appspot.com",
    messagingSenderId: "844515639211"
  };

@NgModule({
  declarations: [
    MyApp,
    ListaComponent,
    CadastroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListaComponent,
    CadastroComponent,
    LoginComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
