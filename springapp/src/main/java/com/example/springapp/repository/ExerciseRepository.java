package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise,Long>{

}