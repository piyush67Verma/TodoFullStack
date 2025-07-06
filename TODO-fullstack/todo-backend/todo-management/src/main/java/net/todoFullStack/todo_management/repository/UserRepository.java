package net.todoFullStack.todo_management.repository;

import net.todoFullStack.todo_management.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;



public interface UserRepository extends JpaRepository<User, Long> {
    // Below stuffs are custom query methods whose implementation
    // is provided by Spring Data JPA

    //At runtime Spring Data JPA, generates a query and runs it on the database
    Optional<User> findByUsername(String username);

    Boolean existsByEmail(String email);

    Optional<User>findByUsernameOrEmail(String username, String email);

    Boolean existsByUsername(String username);
}
