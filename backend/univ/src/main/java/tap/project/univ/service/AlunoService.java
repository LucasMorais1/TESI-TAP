package tap.project.univ.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import tap.project.univ.entity.Aluno;
import tap.project.univ.repository.AlunoRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AlunoService {

    private final AlunoRepository repository;

    public List<Aluno> listar() {
        return this.repository.findAll();
    }

    public Aluno obterPorId(Long id){
        return repository.findById(id).get();
    }

    public Aluno adicionar(Aluno aluno) {
        return repository.save(aluno);
    }

    public void remover(Long id) {
        Aluno alunoParaRemover = this.obterPorId(id);
        repository.delete(alunoParaRemover);
    }
}