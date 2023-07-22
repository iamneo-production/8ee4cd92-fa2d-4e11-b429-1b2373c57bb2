package com.example.demo.controller;

import java.util.List;

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

import com.example.demo.entity.Goal;
import com.example.demo.repo.GoalRepository;

@RestController
@CrossOrigin("https://8081-bbbefecfaaefbebfbcddfeaeaadbdbabf.project.examly.io/")
public class GoalController {
	
	@Autowired
	private GoalRepository goalRepository;
	
	@GetMapping("/goals")
	public List<Goal> getGoals() {
		return goalRepository.findAll();
	}
	
	@GetMapping("/goal/{id}")
	public Goal getGoal(@PathVariable int id) {
		return goalRepository.findById(id).orElse(null);
	}
	
	@PostMapping("/goal")
	public Goal addGoal(@RequestBody Goal goal) {
		return goalRepository.save(goal);
	}
	
	@DeleteMapping("/goal/{id}")
    public ResponseEntity<String> deleteGoal(@PathVariable int id) {
        if (!goalRepository.existsById(id)) {
            return new ResponseEntity<>("Goal not found", HttpStatus.NOT_FOUND);
        }

        goalRepository.deleteById(id);
        return new ResponseEntity<>("Goal deleted successfully", HttpStatus.OK);
    }
	
	// @PutMapping("/goal/{id}")
    // public ResponseEntity<String> updateGoal(@PathVariable int id,@RequestBody Goal goal){
    //     if (!goalRepository.existsById(id)) {
    //         return new ResponseEntity<>("Goal not found", HttpStatus.NOT_FOUND);
    //     }

    //     Goal exGoal = goalRepository.findById(id).get();
        
    //     exGoal.setApproval(goal.isApproval());
    //     goalRepository.save(exGoal);
    //     return new ResponseEntity<>("Goal updated successfully", HttpStatus.OK);
	// }

}
