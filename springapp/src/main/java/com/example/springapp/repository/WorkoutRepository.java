package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Workout;

public interface WorkoutRepository extends JpaRepository<Workout,Long>{

}