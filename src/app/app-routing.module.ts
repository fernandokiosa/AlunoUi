import { CadastrarAlunoComponent } from './alunos/cadastrar-aluno/cadastrar-aluno.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { ProfessoresComponent } from './professores/professores.component';

const routes: Routes = [
  { path: 'alunos', component: AlunosComponent },
  { path: 'cadastrar-aluno', component: CadastrarAlunoComponent},
  { path: 'professores', component: ProfessoresComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
