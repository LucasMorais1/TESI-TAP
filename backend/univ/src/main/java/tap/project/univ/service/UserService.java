package tap.project.univ.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tap.project.univ.entity.User;
import tap.project.univ.repository.UserRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository repository;

    public List<User> listar() {
        return this.repository.findAll();
    }

    public User obterPorId(Long id){
        return repository.findById(id).get();
    }

    public User adicionar(User user) {
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        return repository.save(user);
    }

    public void remover(Long id) {
        User userParaRemover = this.obterPorId(id);
        repository.delete(userParaRemover);
    }

    public User findByUsername(String username) {
        return repository.findByUsername(username);
    }
}