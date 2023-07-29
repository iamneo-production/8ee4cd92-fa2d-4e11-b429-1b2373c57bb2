package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.WeightEntity;

public interface WeightRepository extends JpaRepository<WeightEntity,Integer> {
	

}
