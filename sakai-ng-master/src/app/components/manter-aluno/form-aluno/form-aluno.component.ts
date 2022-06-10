import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
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
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    idade: new FormControl(null, Validators.required)
  });

  constructor(
    private alunoService: AlunoService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buscarParametrosRota();
  }

  salvar() {
    if (this.form.valid) {
      if (this.form.get('id').value) {
        this.alunoService.update(this.form.value).subscribe();
      } else {
        this.alunoService.salvar(this.form.value).subscribe();
      }
    } else {
      this.messageService.add({
        severity: 'error', summary: 'Erro', detail: 'Campos obrigatórios não preenchidos'
      });
    }
  }

  buscarParametrosRota() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      if (id) {
        this.alunoService.buscarPorId(id).subscribe(res => this.form.setValue(res));
      }
    });
  }
}
