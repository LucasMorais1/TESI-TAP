import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from './../../../domains/aluno';
import { AlunoService } from './../../../shared/aluno.service';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.scss']
})
export class ListarAlunoComponent implements OnInit {

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) { }

  alunos: Aluno[] = []

  ngOnInit(): void {
    this.buscarAlunos();
  }

  private buscarAlunos() {
    this.alunoService.buscarAlunos().subscribe(res => this.alunos = res);
  }

  excluir(id: number) {
    this.alunoService.excluir(id).subscribe();
    this.buscarAlunos();
  }

  editar(id: number) {
    this.router.navigateByUrl(`/alunos/atualizar/${id}`)
  }

  toCadastrar() {
    this.router.navigateByUrl('/alunos/cadastrar')
  }
}
