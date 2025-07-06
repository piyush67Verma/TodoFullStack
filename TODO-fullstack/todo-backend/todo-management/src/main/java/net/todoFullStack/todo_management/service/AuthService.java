package net.todoFullStack.todo_management.service;

import net.todoFullStack.todo_management.dto.JwtAuthResponse;
import net.todoFullStack.todo_management.dto.LoginDto;
import net.todoFullStack.todo_management.dto.RegisterDto;

public interface AuthService {
    String register (RegisterDto registerDto);
    JwtAuthResponse login(LoginDto loginDto);

}
