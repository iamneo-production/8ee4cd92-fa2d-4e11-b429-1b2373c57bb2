package com.example.demo.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Workout {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int user_id;
	private Date date;
	private int duration;
	private String notes;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public Workout(int id, int user_id, Date date, int duration, String notes) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.date = date;
		this.duration = duration;
		this.notes = notes;
	}
	public Workout(int user_id, Date date, int duration, String notes) {
		super();
		this.user_id = user_id;
		this.date = date;
		this.duration = duration;
		this.notes = notes;
	}
	public Workout() {
		super();
	}
	
	
	
}
