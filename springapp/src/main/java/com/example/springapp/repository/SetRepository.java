package com.example.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.springapp.model.Set;

public interface SetRepository extends JpaRepository<Set,Long>{

}