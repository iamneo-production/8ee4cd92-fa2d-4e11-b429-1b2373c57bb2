package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.Workout;

public interface WorkoutServiceInterface {

	List<Workout> getAllWorkout();
	Workout getWorkoutById(Long id);
	List<Workout> getWorkOutByUserId(Long id);
	
}
