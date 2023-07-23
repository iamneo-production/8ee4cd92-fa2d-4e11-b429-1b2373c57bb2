package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

// import java.util.Optional;

import com.example.springapp.model.User;

public interface UserRepository extends JpaRepository<User,Long>{
    // Optional<User> findByEmail(String email);
}