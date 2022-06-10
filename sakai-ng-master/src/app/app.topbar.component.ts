import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMainComponent } from './app.main.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items: MenuItem[];

    constructor(
        public appMain: AppMainComponent,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.verificaToken();
    }

    verificaToken() {
        if (localStorage.getItem('token')) {
            this.itensUsuarioLogado();
        }
        else {
            this.itemsUsuarioNaoLogado();
        }
    }

    private itemsUsuarioNaoLogado() {
        this.items = [
            {
                label: 'Usuário',
                icon: 'pi pi-user',
                items: [
                    { label: 'Entrar', command: () => this.login() }
                ]
            }
        ];
    }

    private itensUsuarioLogado() {
        this.items = [
            {
                label: 'Usuário',
                icon: 'pi pi-user',
                items: [
                    { label: 'Sair', command: () => this.logout() },
                ]
            }
        ];
    }

    logout() {
        localStorage.removeItem('token');
        window.location.reload();
    }

    login() {
        this.router.navigateByUrl('/login');
    }
}
