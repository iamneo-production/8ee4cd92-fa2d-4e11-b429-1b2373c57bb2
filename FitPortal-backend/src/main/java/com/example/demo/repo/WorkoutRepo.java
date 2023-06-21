package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Workout;

public interface WorkoutRepo extends JpaRepository<Workout,Integer>{

}
