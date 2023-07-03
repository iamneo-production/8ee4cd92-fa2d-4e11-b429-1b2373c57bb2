package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.Exercise;

public interface ExerciseServiceInterface {

	List<Exercise> getAllExercise();
	Exercise getExerciseById(Long id);
	List<Exercise> getExerciseByWorkoutId(Long id);
	
}
