import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  titulo = 'Professores';
  professores: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.buscarProfessores();
  }

  buscarProfessores(){
    this.professores = [
      {
        nome: 'Margarida',
        dataNascimento: '25/11/1987',
        sexo: 'F',
        email: 'kiosa09@gmail.com',
        cpf: '23936907862',
        contratado: 'sim'
      },
      {
        nome: 'Alberto',
        dataNascimento: '02/12/1977',
        sexo: 'F',
        email: 'alber09@gmail.com',
        cpf: '23936907123',
        contratado: 'não'
      }
    ];
  }
}
