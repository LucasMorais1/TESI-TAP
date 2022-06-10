import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../environments/environment.prod';
import { Aluno } from "../domains/aluno";

@Injectable()
export class AlunoService {

    path = environment.apiUrl + '/alunos'

    constructor(private http: HttpClient) {
    }

    salvar(aluno: Aluno) {
        return this.http.post(`${this.path}`, aluno, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });
    }

    buscarAlunos(): Observable<Aluno[]> {
        return this.http.get<Aluno[]>(`${this.path}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });
    }

    excluir(id: number) {
        return this.http.delete(`${this.path}/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });
    }

    buscarPorId(id: number) {
        return this.http.get(`${this.path}/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });
    }

    update(aluno: Aluno) {
        return this.http.put(`${this.path}`, aluno, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        });
    }

}