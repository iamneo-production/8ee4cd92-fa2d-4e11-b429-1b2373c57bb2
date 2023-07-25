package com.example.springapp.model;

import javax.persistence.*;

@Entity
public class Strike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;
    private String previousDate;
    private int currentStrike;
    private int maxStrike;

    // Constructors, getters, and setters

    public Strike() {
    }

    public Strike(Long userId, String previousDate, int currentStrike, int maxStrike) {
        this.userId = userId;
        this.previousDate = previousDate;
        this.currentStrike = currentStrike;
        this.maxStrike = maxStrike;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getPreviousDate() {
        return previousDate;
    }

    public void setPreviousDate(String previousDate) {
        this.previousDate = previousDate;
    }

    public int getCurrentStrike() {
        return currentStrike;
    }

    public void setCurrentStrike(int currentStrike) {
        this.currentStrike = currentStrike;
    }

    public int getMaxStrike() {
        return maxStrike;
    }

    public void setMaxStrike(int maxStrike) {
        this.maxStrike = maxStrike;
    }
}