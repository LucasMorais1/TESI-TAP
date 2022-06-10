import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AlunoService } from './../../../shared/aluno.service';

@Component({
  selector: 'app-form-aluno',
  templateUrl: './form-aluno.component.html',
  styleUrls: ['./form-aluno.component.scss']
})
export class FormAlunoComponent implements OnInit {


  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl(null, Validators.required),
    sobrenome: new FormControl('', Validators.required),
    idade: new FormControl(null, Validators.required)
  });

  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }

  cadastrar() {
    if (this.form.valid) {
      this.alunoService.salvar(this.form.value).subscribe();
    } else {
      this.messageService.add({
        severity: 'error', summary: 'Erro', detail: 'Campos obrigatórios não preenchidos'
      });
    }
  }

}
