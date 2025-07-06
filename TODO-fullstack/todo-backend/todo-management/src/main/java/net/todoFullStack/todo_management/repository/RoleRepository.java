package net.todoFullStack.todo_management.repository;

import net.todoFullStack.todo_management.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Role findByName(String name);
}
