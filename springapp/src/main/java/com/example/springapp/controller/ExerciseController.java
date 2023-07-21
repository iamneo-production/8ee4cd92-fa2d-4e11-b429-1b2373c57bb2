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
import com.example.springapp.model.Set;
import com.example.springapp.repository.ExerciseRepository;
import com.example.springapp.repository.SetRepository;

@CrossOrigin(origins="https://8081-cabacffafefbebfbcddfdffccbebc.project.examly.io/")
@RestController
public class ExerciseController {

	@Autowired
	ExerciseRepository er;
	
	@Autowired
	SetRepository sr;
	
	
	
	@GetMapping("/exercise")
	public List<Exercise> getAllExercises(){
		return er.findAll();
	}
	

	@GetMapping("/exercise/{id}")
	public ResponseEntity<Exercise> getAnExercise(@PathVariable Long id){
		Optional<Exercise> o=er.findById(id);
		if(o.isPresent()) {
			return new ResponseEntity<>(o.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}
	
	@PutMapping("/exercise/{id}")
	public ResponseEntity<Exercise> updateExercise(@RequestBody Exercise u, @PathVariable Long id){
		Optional<Exercise> o=er.findById(id);
		
		if(o.isPresent()) {
			o.get().setDescription(u.getDescription());
			o.get().setName(u.getName());
			o.get().setWorkoutId(u.getWorkoutId());
			return new ResponseEntity<>(er.save(o.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
	}
	
	@DeleteMapping("/exercise/{id}")
	public ResponseEntity<Void> deleteExercise(@PathVariable Long id){
		Optional<Exercise> o=er.findById(id);
		if(o.isPresent()) {
			er.deleteById(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}
	
	@GetMapping("/exercise/{id}/sets")
	public List<Set> SetssOfSpecificExercise(@PathVariable Long id){
		Optional<Exercise> o=er.findById(id);
		if(o.isPresent()) {
			List<Set>l=sr.findAll();
			List<Set>l1=new ArrayList<>();
			for(int i=0;i<l.size();i++) {
				if(l.get(i).getExerciseId()==id) {
					l1.add(l.get(i));
				}
			}
			return l1;
		}return null;
	}
	
	@PostMapping("/exercise/{id}/sets")
	public ResponseEntity<Void> newSetForAnExercise(@PathVariable Long id,@RequestBody Set s){
		Optional<Exercise> o=er.findById(id);
		if(o.isPresent()) {
			s.setExerciseId(id);
			sr.save(s);
		}

		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}