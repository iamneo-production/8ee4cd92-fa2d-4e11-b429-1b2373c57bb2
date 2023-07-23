package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.apiconnect.ConnectApi;
import com.example.demo.entity.Weight_;
import com.example.demo.repo.WeightRepository;

@RestController
@CrossOrigin("https://8081-bbbefecfaaefbebfbcddfeaeaadbdbabf.project.examly.io/")
public class WeightController {
	
	@Autowired
	private WeightRepository weightRepository;
	
	@PostMapping("/addWeight")
	public Weight_ addWeight(@RequestBody Weight_ weight) {
		return weightRepository.save(weight);
	}
	
	@GetMapping("/weights")
	public List<Weight_> getWeights(){
		return weightRepository.findAll();
	}

}
