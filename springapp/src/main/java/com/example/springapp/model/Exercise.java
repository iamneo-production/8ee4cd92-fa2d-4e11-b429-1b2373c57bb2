package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Exercise {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private Long workoutId;
	private String name;
	private String description;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getWorkoutId() {
		return workoutId;
	}
	public void setWorkoutId(Long workoutId) {
		this.workoutId = workoutId;
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
	public Exercise(Long id, Long workoutId, String name, String description) {
		super();
		this.id = id;
		this.workoutId = workoutId;
		this.name = name;
		this.description = description;
	}
	public Exercise() {
		super();
	}
	public Exercise(Long workoutId, String name, String description) {
		super();
		this.workoutId = workoutId;
		this.name = name;
		this.description = description;
	}
	
	
	

}
