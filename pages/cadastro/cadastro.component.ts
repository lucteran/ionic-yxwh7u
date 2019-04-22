import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AngularFirestore} from '@angular/fire/firestore';
import {NavController} from 'ionic-angular';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent{

  constructor(public bd: AngularFirestore, public navCtrl: NavController) {}

  public salvar(form: NgForm): void{
    let nome = form.value.nome;

    let tarefa = {
      nome: nome,
      concluida:false
    };

    this.bd.collection('tarefas').add(tarefa)
    .then((ref) => {
      let id = ref.id;
      this.bd.collection('tarefas').doc(id).update({id: id});  
    });
    this.navCtrl.pop();

  }

}