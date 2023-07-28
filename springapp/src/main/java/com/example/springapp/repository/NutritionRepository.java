package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Nutrition;

public interface NutritionRepository extends JpaRepository<Nutrition,Long>{
    
}