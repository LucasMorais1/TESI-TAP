import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAlunoComponent } from './form-aluno/form-aluno.component';
import { ListarAlunoComponent } from './listar-aluno/listar-aluno.component';

const routes: Routes = [
    {
        path: 'cadastrar', component: FormAlunoComponent,
    },
    {
        path: '', component: ListarAlunoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManterAlunoRoutingModule {
}
