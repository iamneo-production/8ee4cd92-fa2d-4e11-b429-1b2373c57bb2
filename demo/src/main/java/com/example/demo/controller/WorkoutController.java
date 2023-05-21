package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Exercise;
import com.example.demo.entity.User;
import com.example.demo.entity.Workout;
import com.example.demo.repo.ExerciseRepo;
import com.example.demo.repo.WorkoutRepo;

@RestController
public class WorkoutController {

	@Autowired
	WorkoutRepo wr;
	
	@Autowired
	ExerciseRepo er;
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/workouts/{id}")
	public ResponseEntity<Workout> getAWorkout(@PathVariable int id){
		Optional<Workout> o=wr.findById(id);
		if(o.isPresent()) {
			return new ResponseEntity<>(o.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@CrossOrigin(origins="http://localhost:3000")
	@PutMapping("/workouts/{id}")
	public ResponseEntity<Workout> updateWorkout(@RequestBody Workout u, @PathVariable int id){
		Optional<Workout> o=wr.findById(id);
		
		if(o.isPresent()) {
			o.get().setUser_id(u.getUser_id());
			o.get().setDate(u.getDate());
			o.get().setDuration(u.getDuration());
			o.get().setNotes(u.getNotes());
			return new ResponseEntity<>(wr.save(o.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@CrossOrigin(origins="http://localhost:3000")
	@DeleteMapping("/workouts/{id}")
	public ResponseEntity<Void> deleteWorkout(@PathVariable int id){
		Optional<Workout> o=wr.findById(id);
		if(o.isPresent()) {
			wr.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/workouts/{id}/exercises")
	public List<Exercise> exercisesOfSpecificWorkout(@PathVariable int id){
		Optional<Workout> o=wr.findById(id);
		if(o.isPresent()) {
			List<Exercise>l=er.findAll();
			List<Exercise>l1=new ArrayList<>();
			for(int i=0;i<l.size();i++) {
				if(l.get(i).getWorkout_id()==id) {
					l1.add(l.get(i));
				}
			}
			return l1;
		}
		return null;
	}
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/workouts/{id}/exercises")
	public ResponseEntity<Void> exercisesOfSpecificWorkout(@PathVariable int id,@RequestBody Exercise e){
		Optional<Workout> o=wr.findById(id);
		if(o.isPresent()) {
			e.setWorkout_id(id);
			er.save(e);
			return new ResponseEntity<>(HttpStatus.OK);
		}

		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
