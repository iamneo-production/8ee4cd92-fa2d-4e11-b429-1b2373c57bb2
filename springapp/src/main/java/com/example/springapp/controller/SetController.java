package com.example.springapp.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Set;
import com.example.springapp.model.User;
import com.example.springapp.repository.SetRepository;

@RestController
public class SetController {

	@Autowired
	SetRepository sr;
	@CrossOrigin(origins="http://localhost:3000")
	@GetMapping("/sets/{id}")
	public ResponseEntity<Set> getASet(@PathVariable Long id){
		Optional<Set> o=sr.findById(id);
		if(o.isPresent()) {
			return new ResponseEntity<>(o.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	@CrossOrigin(origins="http://localhost:3000")
	@PutMapping("/sets/{id}")
	public ResponseEntity<Set> updateSet(@RequestBody Set u, @PathVariable Long id){
		Optional<Set> o=sr.findById(id);
		
		if(o.isPresent()) {
			o.get().setDuration(u.getDuration());
			o.get().setExerciseId(u.getExerciseId());
			o.get().setReps(u.getReps());
			o.get().setWeight(u.getWeight());
			return new ResponseEntity<>(sr.save(o.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	@CrossOrigin(origins="http://localhost:3000")
	@DeleteMapping("/set/{id}")
	public ResponseEntity<Void> deleteSet(@PathVariable Long id){
		Optional<Set> o=sr.findById(id);
		if(o.isPresent()) {
			sr.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
}