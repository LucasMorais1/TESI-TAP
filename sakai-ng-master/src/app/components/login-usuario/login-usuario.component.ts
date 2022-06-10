import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { AppConfig } from 'src/app/api/appconfig';
import { User } from 'src/app/domains/user';
import { ConfigService } from 'src/app/service/app.config.service';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent implements OnInit {

  valCheck: string[] = ['remember'];

  user: User = new User();

  config: AppConfig;

  subscription: Subscription;

  registro: boolean = false;

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    username: new FormControl(null, Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl(null, Validators.email)
  });

  constructor(
    public configService: ConfigService,
    private loginService: LoginService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/');
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setRegistro() {
    this.registro = !this.registro;
  }

  signUp() {
    if (this.form.valid) {
      this.loginService.signup(this.user).subscribe(() => {
        this.messageService.add(
          {
            severity: 'success', summary: 'Sucesso', detail: 'Usuário salvo com sucesso'
          }
        );
      });
    } else {
      this.mensagemCamposObrigatorios();
    }
  }

  private mensagemCamposObrigatorios() {
    this.messageService.add({
      severity: 'error', summary: 'Erro', detail: 'Campos obrigatórios não preenchidos'
    });
  }

  login() {
    if (this.form.valid) {
      this.loginService.login(this.user).subscribe(res => {
        localStorage.setItem('token', res);
        this.router.navigateByUrl('/');
        window.location.reload();
      });
    } else {
      this.mensagemCamposObrigatorios();
    }
  }

}
