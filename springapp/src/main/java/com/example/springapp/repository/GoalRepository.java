package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import com.example.springapp.model.Goal;

public interface GoalRepository extends JpaRepository<Goal ,Integer>{
    List<Goal> findByUserId(int userId);

}