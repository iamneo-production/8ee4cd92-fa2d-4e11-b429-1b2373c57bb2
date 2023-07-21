package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Weight_ {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private int user_id;
	private String date;
	private int weight;
	
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
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getWeight() {
		return weight;
	}
	public void setWeight(int weight) {
		this.weight = weight;
	}

    public Weight_(int id, int user_id, String date, int weight) {
		super();
		this.id = id;
		this.user_id = user_id;
		this.date = date;
		this.weight = weight;
	}
	public Weight_() {
		super();
	}
	public Weight_(int user_id, String date, int weight) {
		super();
		this.user_id = user_id;
		this.date = date;
		this.weight = weight;
	}

}