import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'src/app/shared/shared-modules.module';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { ManterAlunoRoutingModule } from './manter-aluno-routing.module';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';



@NgModule({
  declarations: [
    FormAlunoComponent,
    ListarAlunoComponent
  ],
  imports: [
    CommonModule,
    ManterAlunoRoutingModule,
    SharedModulesModule
  ]
})
export class ManterAlunoModule { }
