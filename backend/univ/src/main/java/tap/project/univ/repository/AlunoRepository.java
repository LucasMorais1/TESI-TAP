package tap.project.univ.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tap.project.univ.entity.Aluno;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
