package com.example.springapp.controller;

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

import com.example.springapp.model.Exercise;
import com.example.springapp.model.User;
import com.example.springapp.model.Workout;
import com.example.springapp.repository.ExerciseRepository;
import com.example.springapp.repository.WorkoutRepository;

@RestController
public class WorkoutController {

	@Autowired
	WorkoutRepository wr;
	
	@Autowired
	ExerciseRepository er;
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/workout")
	public List<Workout> getAWorkout(){
		return wr.findAll();
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/workout/{id}")
	public ResponseEntity<Workout> getAWorkout(@PathVariable Long id){
		Optional<Workout> o=wr.findById(id);
		if(o.isPresent()) {
			return new ResponseEntity<>(o.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}
	@CrossOrigin(origins="http://localhost:3000")
	@PutMapping("/workouts/{id}")
	public ResponseEntity<Workout> updateWorkout(@RequestBody Workout u, @PathVariable Long id){
		Optional<Workout> o=wr.findById(id);
		
		if(o.isPresent()) {
			o.get().setUser_id(u.getUser_id());
			o.get().setLocalDate(u.getLocalDate());
			o.get().setDuration(u.getDuration());
			o.get().setNotes(u.getNotes());
			return new ResponseEntity<>(wr.save(o.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
	}
	@CrossOrigin(origins="http://localhost:3000")
	@DeleteMapping("/workout/{id}")
	public ResponseEntity<Void> deleteWorkout(@PathVariable Long id){
		Optional<Workout> o=wr.findById(id);
		if(o.isPresent()) {
			wr.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}
	
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/workouts/{id}/exercises")
	public List<Exercise> exercisesOfSpecificWorkout(@PathVariable Long id){
		Optional<Workout> o=wr.findById(id);
		if(o.isPresent()) {
			List<Exercise>l=er.findAll();
			List<Exercise>l1=new ArrayList<>();
			for(int i=0;i<l.size();i++) {
				if(l.get(i).getWorkoutId()==id) {
					l1.add(l.get(i));
				}
			}
			return l1;
		}
		return null;
	}
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/workouts/{id}/exercises")
	public ResponseEntity<Void> exercisesOfSpecificWorkout(@PathVariable Long id,@RequestBody Exercise e){
		Optional<Workout> o=wr.findById(id);
		System.out.println(e);
		if(o.isPresent()) {
			e.setWorkoutId(id);
			er.save(e);
//			return new ResponseEntity<>(HttpStatus.OK);
		}

		return new ResponseEntity<>(HttpStatus.OK);
	}
}