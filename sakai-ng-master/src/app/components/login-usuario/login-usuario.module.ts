import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModulesModule } from 'src/app/shared/shared-modules.module';

import { LoginUsuarioRoutingModule } from './login-usuario-routing.module';
import { LoginUsuarioComponent } from './login-usuario.component';


@NgModule({
  declarations: [
    LoginUsuarioComponent
  ],
  imports: [
    CommonModule,
    LoginUsuarioRoutingModule,
    SharedModulesModule
  ]
})
export class LoginUsuarioModule { }
