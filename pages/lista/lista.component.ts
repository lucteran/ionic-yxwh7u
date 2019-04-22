import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { NavController } from 'ionic-angular';
import { CadastroComponent } from '../cadastro/cadastro.component';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent {
  
  lista: Observable<any[]>;
  
  constructor(public db: AngularFirestore, public navCtrl: NavController) {
    this.lista = db.collection('tarefas').valueChanges();
  }

  public adicionar(): void{
    this.navCtrl.push(CadastroComponent);
  }
  
  public apagar(id:string): void{
    this.db.collection('tarefas').doc(id).delete();
  }

  public concluir(id: string, concluida: boolean): void{
    var valor:boolean;
    if(concluida==true)
      valor=false;
    else
      valor=true;
    this.db.collection('tarefas').doc(id).update({concluida: valor});
  }
}