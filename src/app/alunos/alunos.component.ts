import { AlunoService } from './aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  titulo = 'Alunos';
  alunos: any = [];

  constructor(private service: AlunoService) {}

  ngOnInit(): void {
    this.buscarAlunos();
  }

  buscarAlunos(){
    this.alunos = this.service.buscarAlunos()
    .subscribe(
      response => {
        this.alunos = response;
      },
      error => {
        console.log(error);
      });
  }
}
