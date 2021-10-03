import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  titulo = 'Alunos';
  alunos: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.buscarAlunos();
  }

  buscarAlunos(){
    this.alunos = [
      {
        nome: 'Fernando Kiosa', 
        dataNascimento: '12/12/2021', 
        sexo: 'M', 
        email: 'fekiosa@gmail.com', 
        cpf: '23936907862',
        matriculado: 'Sim',
      },
      {
        nome: 'Inocencio Cardoso', 
        dataNascimento: '25/02/2011', 
        sexo: 'M', 
        email: 'inocard@gmail.com', 
        cpf: '23936123456',
        matriculado: 'Sim',
      },
      {
        nome: 'Adré Alfredo', 
        dataNascimento: '30/07/1998', 
        sexo: 'M', 
        email: 'aafred@gmail.com', 
        cpf: '23936912457',
        matriculado: 'Não',
      }
    ];
  }

}
