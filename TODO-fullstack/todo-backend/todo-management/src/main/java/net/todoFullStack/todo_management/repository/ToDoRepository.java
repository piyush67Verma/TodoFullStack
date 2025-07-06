package net.todoFullStack.todo_management.repository;

import net.todoFullStack.todo_management.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ToDoRepository extends JpaRepository<Todo, Long> {
}
