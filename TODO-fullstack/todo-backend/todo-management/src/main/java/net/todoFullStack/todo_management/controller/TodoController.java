package net.todoFullStack.todo_management.controller;

import lombok.AllArgsConstructor;
import net.todoFullStack.todo_management.dto.TodoDto;
import net.todoFullStack.todo_management.entity.Todo;
import net.todoFullStack.todo_management.service.TodoService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:5173")
@AllArgsConstructor
@RestController
@RequestMapping("/api/todos")
public class TodoController {
    TodoService todoService;

    //Build Add todo rest api
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<TodoDto> addTodo(@RequestBody TodoDto todoDto){
        TodoDto savedtodoDto  = todoService.addTodo(todoDto);
        return new ResponseEntity<>(savedtodoDto, HttpStatus.CREATED);
    }

    // Build getTodo rest api
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping("{id}")
    public ResponseEntity<TodoDto> getTodo(@PathVariable Long id){
        TodoDto todoDto = todoService.getTodo(id);
        return ResponseEntity.ok(todoDto);
    }

    //Build get all todos Rest api
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @GetMapping
    public ResponseEntity<List<TodoDto>>getAllTodo(){
        List<TodoDto> allDtos = todoService.getAllTodos();
        return ResponseEntity.ok(allDtos);
    }

    //Build update todo Rest api
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("{id}")
    public ResponseEntity<TodoDto>updateTodo(@PathVariable Long id, @RequestBody TodoDto updatedTodoDto){
        TodoDto todoDto = todoService.updateTodo(id, updatedTodoDto);
        return ResponseEntity.ok(todoDto);
    }

    //Build delete todo rest api
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTodo(@PathVariable Long id){
        todoService.deleteTodo(id);
        return ResponseEntity.ok("Todo deleted Successfully");
    }

    //Build complete todo rest api
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PatchMapping("{id}/complete")
    public ResponseEntity<TodoDto> completeDto(@PathVariable Long id){
        TodoDto todoDto = todoService.completeTodo(id);
        return ResponseEntity.ok(todoDto);
    }

    //Build complete todo rest api
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    @PatchMapping("{id}/in-complete")
    public ResponseEntity<TodoDto> incompleteDto(@PathVariable Long id){
        TodoDto todoDto = todoService.incompleteTodo(id);
        return ResponseEntity.ok(todoDto);
    }
}
