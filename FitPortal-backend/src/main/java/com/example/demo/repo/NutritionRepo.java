package com.example.demo.repo;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Nutrition;

public interface NutritionRepo extends JpaRepository<Nutrition,Integer> {
}
