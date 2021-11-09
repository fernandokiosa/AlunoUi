import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  baseUrl = 'https://localhost:44344/Aluno/'
  alunos: any = [];

  constructor(private http: HttpClient) { }

    buscarAlunos (){
      return this.http.get(`${this.baseUrl}buscar-alunos`);
    }
}
