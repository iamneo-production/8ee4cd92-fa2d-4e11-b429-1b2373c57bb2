package com.example.springapp.service;

import com.example.springapp.model.Strike;
import com.example.springapp.repository.StrikeRepository;
import org.springframework.stereotype.Service;

@Service
public class StrikeService {

    private final StrikeRepository strikeRepository;

    public StrikeService(StrikeRepository strikeRepository) {
        this.strikeRepository = strikeRepository;
    }

    public Strike getStrikeByUserId(Long userId) {
        return strikeRepository.findByUserId(userId);
    }

    public Strike updateStrikeByUserId(Long userId, Strike newStrike) {
        Strike existingStrike = strikeRepository.findByUserId(userId);
        if (existingStrike != null) {
            existingStrike.setCurrentStrike(newStrike.getCurrentStrike());
            existingStrike.setMaxStrike(newStrike.getMaxStrike());
            existingStrike.setPreviousDate(newStrike.getPreviousDate());
            return strikeRepository.save(existingStrike);
        }
        return null; // Handle user not found scenario
    }

    public Strike addStrikeByUserId(Long userId, Strike strike) {
        strike.setUserId(userId);
        return strikeRepository.save(strike);
    }
}