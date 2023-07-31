package com.example.springapp.repository;

import com.example.springapp.model.Strike;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StrikeRepository extends JpaRepository<Strike, Long> {
    Strike findByUserId(Long userId);
}