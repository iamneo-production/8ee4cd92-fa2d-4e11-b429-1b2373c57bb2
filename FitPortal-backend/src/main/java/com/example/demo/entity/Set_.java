package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Set_ {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int exerciseId;
	private int reps;
	private double weight;
	private int duration;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getExerciseId() {
		return exerciseId;
	}

	public void setExerciseId(int exerciseId) {
		this.exerciseId = exerciseId;
	}

	public int getReps() {
		return reps;
	}

	public void setReps(int reps) {
		this.reps = reps;
	}

	public double getWeight() {
		return weight;
	}

	public void setWeight(double weight) {
		this.weight = weight;
	}

	public int getDuration() {
		return duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}

	public Set_(int id, int exerciseId, int reps, double weight, int duration) {
		super();
		this.id = id;
		this.exerciseId = exerciseId;
		this.reps = reps;
		this.weight = weight;
		this.duration = duration;
	}

	public Set_(int exerciseId, int reps, double weight, int duration) {
		super();
		this.exerciseId = exerciseId;
		this.reps = reps;
		this.weight = weight;
		this.duration = duration;
	}

	public Set_() {
		super();
	}

}
