package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Goal {
	
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int userId;
	private String goalName;
	private String date;
	private String duration;
	private String description;
	private int targetWeight;
	private String status="pending";
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGoalName() {
		return goalName;
	}
	public void setGoalName(String goalName) {
		this.goalName = goalName;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	
	public int getTargetWeight() {
		return targetWeight;
	}
	public void setTargetWeight(int targetWeight) {
		this.targetWeight = targetWeight;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Goal(int id, int userId, String goalName, String description,String duration,int targetWeight, String date, String status) {
		super();
		this.id = id;
		this.userId=userId;
		this.goalName = goalName;
		this.date = date;
		this.description = description;
		this.duration = duration;
		this.targetWeight= targetWeight;
		this.status = status;
	}
	
	public Goal(int userId, String goalName, String description,String duration,int targetWeight, String date,String status) {
		super();
		this.userId=userId;
		this.goalName = goalName;
		this.date=date;
		this.description = description;
		this.duration = duration;
		this.targetWeight= targetWeight;
		this.status=status;
	}
	
	public Goal() {
		super();
	}

}