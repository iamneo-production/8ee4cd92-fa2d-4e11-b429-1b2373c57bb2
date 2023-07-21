package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Weight_;

public interface WeightRepository extends JpaRepository<Weight_,Integer> {
	

}
