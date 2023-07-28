package com.example.springapp.model;
import java.util.*;
import java.util.stream.Collectors;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;


@Entity
public class Nutrition {


    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;

    private int user_id;
    private Date date;
    private  String breakfast;
    private  int breakfast_calories;
    private  String mid_morning_snack;
    private  int mid_morning_calories;
    private  String lunch;

    private  int lunch_calories;
    private  String evening_snack;

    private  int evening_calories;

    private  String dinner;
    private  int dinner_calories;
    private  int total_calories;

    private  String type;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getBreakfast() {
        return breakfast;
    }

    public void setBreakfast(String breakfast) {
        this.breakfast = breakfast;
    }

    public int getBreakfast_calories() {
        return breakfast_calories;
    }

    public void setBreakfast_calories(int breakfast_calories) {
        this.breakfast_calories = breakfast_calories;
    }

    public String getMid_morning_snack() {
        return mid_morning_snack;
    }

    public void setMid_morning_snack(String mid_morning_snack) {
        this.mid_morning_snack = mid_morning_snack;
    }

    public int getMid_morning_calories() {
        return mid_morning_calories;
    }

    public void setMid_morning_calories(int mid_morning_calories) {
        this.mid_morning_calories = mid_morning_calories;
    }

    public String getLunch() {
        return lunch;
    }

    public void setLunch(String lunch) {
        this.lunch = lunch;
    }

    public int getLunch_calories() {
        return lunch_calories;
    }

    public void setLunch_calories(int lunch_calories) {
        this.lunch_calories = lunch_calories;
    }

    public String getEvening_snack() {
        return evening_snack;
    }

    public void setEvening_snack(String evening_snack) {
        this.evening_snack = evening_snack;
    }

    public int getEvening_calories() {
        return evening_calories;
    }

    public void setEvening_calories(int evening_calories) {
        this.evening_calories = evening_calories;
    }

    public String getDinner() {
        return dinner;
    }

    public void setDinner(String dinner) {
        this.dinner = dinner;
    }

    public int getDinner_calories() {
        return dinner_calories;
    }

    public void setDinner_calories(int dinner_calories) {
        this.dinner_calories = dinner_calories;
    }

    public int getTotal_calories() {
        return total_calories;
    }

    public void setTotal_calories(int total_calories) {
        this.total_calories = total_calories;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Nutrition(Long id, int user_id, Date date, String breakfast, int breakfast_calories, String mid_morning_snack, int mid_morning_calories, String lunch, int lunch_calories, String evening_snack, int evening_calories, String dinner, int dinner_calories, int total_calories, String type) {
        super();
        this.id = id;
        this.user_id = user_id;
        this.date = date;
        this.breakfast = breakfast;
        this.breakfast_calories = breakfast_calories;
        this.mid_morning_snack = mid_morning_snack;
        this.mid_morning_calories = mid_morning_calories;
        this.lunch = lunch;
        this.lunch_calories = lunch_calories;
        this.evening_snack = evening_snack;
        this.evening_calories = evening_calories;
        this.dinner = dinner;
        this.dinner_calories = dinner_calories;
        this.total_calories = total_calories;
        this.type = type;
    }

    public Nutrition(int user_id, Date date, String breakfast, int breakfast_calories, String mid_morning_snack, int mid_morning_calories, String lunch, int lunch_calories, String evening_snack, int evening_calories, String dinner, int dinner_calories, int total_calories, String type) {
        super();
        this.user_id = user_id;
        this.date = date;
        this.breakfast = breakfast;
        this.breakfast_calories = breakfast_calories;
        this.mid_morning_snack = mid_morning_snack;
        this.mid_morning_calories = mid_morning_calories;
        this.lunch = lunch;
        this.lunch_calories = lunch_calories;
        this.evening_snack = evening_snack;
        this.evening_calories = evening_calories;
        this.dinner = dinner;
        this.dinner_calories = dinner_calories;
        this.total_calories = total_calories;
        this.type = type;
    }

    public Nutrition() {
        super();
    }


    
}