package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Goal;

public interface GoalRepository extends JpaRepository<Goal ,Integer>{

}
