package com.example.springapp.service;

import java.util.List;

import com.example.springapp.model.Set;



public interface SetServiceInterface {
	
	List<Set> getAllSet();
	Set getSetById(long id);
	List<Set> getSetByExerciseId(long id);

}
	