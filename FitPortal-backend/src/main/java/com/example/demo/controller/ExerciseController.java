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
import com.example.demo.entity.Set_;
import com.example.demo.entity.User;
import com.example.demo.entity.Workout;
import com.example.demo.repo.ExerciseRepo;
import com.example.demo.repo.SetRepo;

@RestController
public class ExerciseController {

	@Autowired
	ExerciseRepo er;
	
	@Autowired
	SetRepo sr;
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/exercises/{id}")
	public ResponseEntity<Exercise> getAnExercise(@PathVariable int id){
		Optional<Exercise> o=er.findById(id);
		if(o.isPresent()) {
			return new ResponseEntity<>(o.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@CrossOrigin(origins="http://localhost:3000")
	@PutMapping("/exercises/{id}")
	public ResponseEntity<Exercise> updateExercise(@RequestBody Exercise u, @PathVariable int id){
		Optional<Exercise> o=er.findById(id);
		
		if(o.isPresent()) {
			o.get().setDescription(u.getDescription());
			o.get().setName(u.getName());
			o.get().setWorkout_id(u.getWorkout_id());
			return new ResponseEntity<>(er.save(o.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@CrossOrigin(origins="http://localhost:3000")
	@DeleteMapping("/exercises/{id}")
	public ResponseEntity<Void> deleteExercise(@PathVariable int id){
		Optional<Exercise> o=er.findById(id);
		if(o.isPresent()) {
			er.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/exercises/{id}/sets")
	public List<Set_> SetssOfSpecificExercise(@PathVariable int id){
		Optional<Exercise> o=er.findById(id);
		if(o.isPresent()) {
			List<Set_>l=sr.findAll();
			List<Set_>l1=new ArrayList<>();
			for(int i=0;i<l.size();i++) {
				if(l.get(i).getExerciseId()==id) {
					l1.add(l.get(i));
				}
			}
			return l1;
		}
		return null;
	}
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/exercises/{id}/sets")
	public ResponseEntity<Void> newSetForAnExercise(@PathVariable int id,@RequestBody Set_ s){
		Optional<Exercise> o=er.findById(id);
		if(o.isPresent()) {
			s.setExerciseId(id);
			sr.save(s);
			return new ResponseEntity<>(HttpStatus.OK);
		}

		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
}
