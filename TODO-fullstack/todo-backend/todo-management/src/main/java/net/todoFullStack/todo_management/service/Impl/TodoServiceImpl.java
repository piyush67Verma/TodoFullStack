package net.todoFullStack.todo_management.service.Impl;

import lombok.AllArgsConstructor;
import net.todoFullStack.todo_management.dto.TodoDto;
import net.todoFullStack.todo_management.entity.Todo;
import net.todoFullStack.todo_management.exception.ResourceNotFoundException;
import net.todoFullStack.todo_management.repository.ToDoRepository;
import net.todoFullStack.todo_management.service.TodoService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {
    private  ToDoRepository todoRepository;
    private ModelMapper modelMapper;

    @Override
    public TodoDto addTodo(TodoDto todoDto) {
        //convert TodoDto into Todo JPA entity
//        Todo todo = new Todo();
//        todo.setId(todoDto.getId());
//        todo.setTitle(todoDto.getTitle());
//        todo.setDescription(todoDto.getDescription());
//        todo.setCompleted(todoDto.isCompleted());

        Todo todo = modelMapper.map(todoDto, Todo.class);

        //save Todo JPA entity into database
        Todo savedTodo = todoRepository.save(todo);

        //Convert Todo JPA entity into TodoDto object
//        TodoDto savedTodoDto = new TodoDto();
//        savedTodoDto.setId(savedTodo.getId());
//        savedTodoDto.setTitle(savedTodo.getTitle());
//        savedTodoDto.setDescription(savedTodo.getDescription());
//        savedTodoDto.setCompleted(savedTodo.isCompleted());
        TodoDto savedTodoDto = modelMapper.map(savedTodo, TodoDto.class);
        return savedTodoDto;

    }

    @Override
    public TodoDto getTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("todo with id:"+id+"does not exists"));
        return modelMapper.map(todo, TodoDto.class);
    }

    @Override
    public List<TodoDto> getAllTodos() {
        List<Todo> todos = todoRepository.findAll();
        return todos.stream().map((todo)->modelMapper.map(todo, TodoDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public TodoDto updateTodo(Long id, TodoDto updatedtodoDto) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("todo with id:"+id+"does not exists"));
        todo.setTitle(updatedtodoDto.getTitle());
        todo.setDescription(updatedtodoDto.getDescription());
        todo.setCompleted(updatedtodoDto.isCompleted());
        Todo savedTodo = todoRepository.save(todo);
        return modelMapper.map(savedTodo, TodoDto.class);

    }

    @Override
    public void deleteTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("todo with id:"+id+"does not exists"));
        if(todo!=null) todoRepository.deleteById(id);
    }

    @Override
    public TodoDto completeTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("todo with id:"+id+"does not exists"));
        todo.setCompleted(Boolean.TRUE);
        Todo savedTodo =  todoRepository.save(todo);
        return modelMapper.map(savedTodo, TodoDto.class);
    }

    @Override
    public TodoDto incompleteTodo(Long id) {
        Todo todo = todoRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("todo with id:"+id+"does not exists"));
        todo.setCompleted(Boolean.FALSE);
        Todo savedTodo =  todoRepository.save(todo);
        return modelMapper.map(savedTodo, TodoDto.class);
    }
}
