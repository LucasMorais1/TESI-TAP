package tap.project.univ.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tap.project.univ.entity.Aluno;
import tap.project.univ.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
