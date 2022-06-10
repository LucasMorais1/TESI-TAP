import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './app.main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginUsuarioModule } from './components/login-usuario/login-usuario.module';
import { ManterAlunoModule } from './components/manter-aluno/manter-aluno.module';
import { LogadoGuard } from './guard/logado.guard';

const routes: Routes = [
    {
        path: '', component: AppMainComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'alunos', loadChildren: () => ManterAlunoModule, canActivate: [LogadoGuard] }
        ],
    },
    {
        path: 'login', loadChildren: () => LoginUsuarioModule
    },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
