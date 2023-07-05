package com.example.springapp.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Component
public interface UserServiceInterface extends UserDetailsService {
    // Define your custom methods here
}
