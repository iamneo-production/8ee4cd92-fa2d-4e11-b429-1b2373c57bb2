package com.example.springapp.service; 

import org.springframework.security.core.userdetails.UserDetailsService;

import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import com.example.springapp.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserService implements UserDetailsService{

    @Autowired
    private UserRepository UserRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        User user= this.UserRepository.findByEmail(username).orElseThrow(()-> new ResourceNotFoundException("User "," email : "+username, 0));
        return user;
    }
}
