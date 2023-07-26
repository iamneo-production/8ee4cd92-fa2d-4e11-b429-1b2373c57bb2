package com.example.demo.entity;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class WeightEntity {

    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private int user_id;
    private String date;
    @Column(precision = 10, scale = 2)
    private BigDecimal weight;

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
    public BigDecimal getWeight() {
        return weight;
    }
    public void setWeight(BigDecimal weight) {
        this.weight = weight;
    }

    public WeightEntity(int id, int user_id, String date, BigDecimal weight ) {
		super();
		this.id = id;
        this.user_id=user_id;
        this.date = date;
        this.weight=weight;
		
	}

	public WeightEntity(int user_id, String date, BigDecimal weight) {
		super();
		this.user_id=user_id;
        this.date = date;
        this.weight=weight;
	}

	public WeightEntity(){
		super();
	}

    

    
}
