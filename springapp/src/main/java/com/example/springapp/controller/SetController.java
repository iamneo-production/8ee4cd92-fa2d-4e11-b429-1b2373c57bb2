package com.example.springapp.controller;

import java.util.List;
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
import org.springframework.web.bind.annotation.RequestParam;

import com.example.springapp.model.Set;
import com.example.springapp.repository.SetRepository;

@CrossOrigin(origins="https://8081-deadefebdddbeefbebfbcddfdffccbebc.project.examly.io/")
@RestController
public class SetController {

	@Autowired
	SetRepository sr;
	
	
	@GetMapping("/set")
	public List<Set> getAllSet(){
		return sr.findAll();
	}
	
	
	@GetMapping("/set/{id}")
	public ResponseEntity<Set> getASet(@PathVariable Long id){
		Optional<Set> o=sr.findById(id);
		if(o.isPresent()) {
			return new ResponseEntity<>(o.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.OK);
		}
	}
	
	@PutMapping("/set/{id}")
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
			return new ResponseEntity<>(HttpStatus.OK);
		}
		
	}
	
	@DeleteMapping("/set")
	public ResponseEntity<Void> deleteSet(@RequestParam("id") String id) {
		try {
			Long setId = Long.parseLong(id);
			Optional<Set> o = sr.findById(setId);
			if (o.isPresent()) {
				sr.deleteById(setId);
				return new ResponseEntity<>(HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.OK);
			}
		} catch (NumberFormatException e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
}