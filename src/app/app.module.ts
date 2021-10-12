import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './shared/title/title.component';
import { CadastrarAlunoComponent } from './alunos/cadastrar-aluno/cadastrar-aluno.component';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent,
    NavComponent,
    TitleComponent,
    CadastrarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
