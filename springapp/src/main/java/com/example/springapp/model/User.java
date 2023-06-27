package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
    
	private String name;
	private String email;
	private String password;
	private String height;
	private String weight;
	private Long age;
	private String gender;
    private String role;
    private String goals;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public Long getAge() {
		return age;
	}
	public void setAge(Long age) {
		this.age = age;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}

    public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}

    public String getGoals() {
		return goals;
	}
	public void setGoals(String goals) {
		this.goals = goals;
	}
	public User(Long id, String name, String email, String password, String height, String weight, Long age,
			String gender,String role, String goals) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.height = height;
		this.weight = weight;
		this.age = age;
		this.gender = gender;
        this.role=role;
        this.goals=goals;
	}
	public User(String name, String email, String password, String height, String weight, Long age,
    String gender,String role, String goals) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.height = height;
		this.weight = weight;
		this.age = age;
		this.gender = gender;
        this.role=role;
        this.goals=goals;
	}
	public User() {
		super();
	}

}