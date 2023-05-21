package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Exercise {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int workout_id;
	private String name;
	private String description;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getWorkout_id() {
		return workout_id;
	}
	public void setWorkout_id(int workout_id) {
		this.workout_id = workout_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Exercise(int id, int workout_id, String name, String description) {
		super();
		this.id = id;
		this.workout_id = workout_id;
		this.name = name;
		this.description = description;
	}
	public Exercise() {
		super();
	}
	public Exercise(int workout_id, String name, String description) {
		super();
		this.workout_id = workout_id;
		this.name = name;
		this.description = description;
	}
	
	
	

}
