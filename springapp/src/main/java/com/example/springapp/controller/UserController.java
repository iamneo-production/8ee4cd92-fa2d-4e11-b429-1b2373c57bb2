package com.example.springapp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
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

import com.example.springapp.model.User;
import com.example.springapp.model.Workout;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.repository.WorkoutRepository;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;



@RestController
@CrossOrigin(origins="https://8081-cabacffafefbebfbcddfdffccbebc.project.examly.io/")
public class UserController {

	// @Autowired
	// private PasswordEncoder passwordEncoder;

	@Autowired
	UserRepository ur;
	
	@Autowired
	WorkoutRepository wr;
	
	
	@GetMapping("/user")
	public List<User> getAllUsers() {
		return ur.findAll();
	}
	
	@PostMapping("/user/register")
	public ResponseEntity<User> addUser(@RequestBody User u){
		// String encodedPassword = passwordEncoder.encode(u.getPassword());
		// u.setPassword(encodedPassword);
		return new ResponseEntity<>(ur.save(u),HttpStatus.CREATED);
	}
	
	@GetMapping("/user/{id}")
	public ResponseEntity<User> getAnUser(@PathVariable Long id){
		Optional<User> o=ur.findById(id);
		if(o.isPresent()) {
			return new ResponseEntity<>(o.get(),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/user")
	public ResponseEntity<User> updateUser(@RequestBody User u){
		Optional<User> o=ur.findById(u.getId());
		
		if(o.isPresent()) {
			o.get().setAge(u.getAge());
			o.get().setEmail(u.getEmail());
			o.get().setGender(u.getGender());
			o.get().setHeight(u.getHeight());
			o.get().setName(u.getName());
			o.get().setPassword(o.get().getPassword());
			o.get().setWeight(u.getWeight());
			return new ResponseEntity<>(ur.save(o.get()),HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}

	@DeleteMapping("/user/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id){
		Optional<User> o=ur.findById(id);
		if(o.isPresent()) {
			ur.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/users/{id}/workouts")
	public List<Workout> workoutsOfSpecificUser(@PathVariable Long id){
		Optional<User> o=ur.findById(id);
		if(o.isPresent()) {
			List<Workout>l=wr.findAll();
			List<Workout>l1=new ArrayList<>();
			for(int i=0;i<l.size();i++) {
				if(l.get(i).getUser_id()==id) {
					l1.add(l.get(i));
				}
			}
			return l1;
		}
		return null;
	}
	
	@PostMapping("/users/{id}/workouts")
	public ResponseEntity<Void> workoutsOfSpecificUser(@PathVariable Long id,@RequestBody Workout w){
		Optional<User> o=ur.findById(id);
		if(o.isPresent()) {
			w.setUser_id(id);
			wr.save(w);
			return new ResponseEntity<>(HttpStatus.OK);
		}

		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	// @Bean
	// public PasswordEncoder appPasswordEncoder() {
	// 	return new BCryptPasswordEncoder();
	// }
}