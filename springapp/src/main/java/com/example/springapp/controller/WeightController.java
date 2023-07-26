package com.example.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//import com.example.demo.apiconnect.ConnectApi;
import com.example.springapp.model.WeightEntity;
import com.example.springapp.repository.WeightRepository;

@RestController
@CrossOrigin("https://8081-bbbefecfaaefbebfbcddfdffccbebc.project.examly.io/")
public class WeightController {
	
	@Autowired
	private WeightRepository weightRepository;
	
	@PostMapping("/addWeight")
	public WeightEntity addWeight(@RequestBody WeightEntity weight) {
		return weightRepository.save(weight);
	}
	
	@GetMapping("/weights")
	public List<WeightEntity> getWeights(){
		return weightRepository.findAll();
	}

}
