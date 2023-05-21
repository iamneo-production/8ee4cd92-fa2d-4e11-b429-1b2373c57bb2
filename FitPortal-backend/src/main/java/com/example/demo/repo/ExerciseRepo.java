package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Exercise;

public interface ExerciseRepo extends JpaRepository<Exercise,Integer>{

}
