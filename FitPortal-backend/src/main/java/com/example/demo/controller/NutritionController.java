package com.example.demo.controller;

import com.example.demo.entity.Nutrition;
import com.example.demo.entity.User;

import com.example.demo.entity.Workout;
import com.example.demo.repo.NutritionRepo;
import com.example.demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Date;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import com.example.demo.apiconnect.ConnectApi;

@CrossOrigin(origins=ConnectApi.api)
@RestController
public class NutritionController {

    @Autowired
    NutritionRepo nr;
    @Autowired
    UserRepo ur;

    
    @PostMapping("/nutritionWeightloss/{id}/insert")


    public ResponseEntity<Void> deitOfSpecificUser(@PathVariable int id, @RequestBody Nutrition n){
        Optional<User> o=ur.findById(id);
        if(o.isPresent()) {

            n.setUser_id(id);
            nr.save(n);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.OK);
    }

   
    @GetMapping("/nutritionWeightloss/{id}/{date}/read")
    public List<Nutrition> dietOfSpecificUser(@PathVariable int id,@PathVariable String date){
        Optional<User> o=ur.findById(id);
        if(o.isPresent() ) {
            List<Nutrition>l=nr.findAll();

            List<Nutrition>l1=new ArrayList<>();
            for(int i=0;i<l.size();i++) {
                String dateString = l.get(i).getDate().toString();

                if(l.get(i).getUser_id()==id) {

                    if(dateString.equals(date) &&(l.get(i).getType().equals("WeightLoss"))) {
                        l1.add(l.get(i));
                    }

                }
            }
            
            return l1;
        }
        return null;
    }


    @GetMapping("/nutritionWeightgain/{id}/{date}/read")
    public List<Nutrition> dietgainOfSpecificUser(@PathVariable int id,@PathVariable String date){
        Optional<User> o=ur.findById(id);
        if(o.isPresent() ) {
            List<Nutrition>l=nr.findAll();

            List<Nutrition>l1=new ArrayList<>();
            for(int i=0;i<l.size();i++) {
                String dateString = l.get(i).getDate().toString();

                if(l.get(i).getUser_id()==id) {

                    if(dateString.equals(date) &&(l.get(i).getType().equals("WeightGain"))) {
                        l1.add(l.get(i));
                    }

                }
            }
            
            return l1;
        }
        return null;
    }


    @GetMapping("/nutritionWeightlossWeek/{id}/{week0}/{week1}/{week2}/{week3}/{week4}/{week5}/{week6}/read")
    public List<Nutrition> dietOfSpecificUserWeek(@PathVariable int id,@PathVariable String week0
            ,@PathVariable String week1,@PathVariable String week2,@PathVariable String week3,
             @PathVariable String week4,@PathVariable String week5,@PathVariable String week6){
        Optional<User> o=ur.findById(id);
        if(o.isPresent() ) {
            List<Nutrition>l=nr.findAll();
            List<Nutrition>l1=new ArrayList<>();
            for(int i=0;i<l.size();i++) {
                String dateString = l.get(i).getDate().toString();
                if(l.get(i).getUser_id()==id) {
                    if(l.get(i).getType().equals("WeightLoss")){
                        if((dateString.equals(week1)) ||(dateString.equals(week2)) ||
                            (dateString.equals(week3)) ||(dateString.equals(week4)) ||(dateString.equals(week5)) ||
                            (dateString.equals(week6)) || (dateString.equals(week0))) {
                                    
                                    l1.add(l.get(i));

                    }
                    }

                }
            }
            return l1;
        }
        return null;
    }

    @GetMapping("/nutritionWeightgainWeek/{id}/{week0}/{week1}/{week2}/{week3}/{week4}/{week5}/{week6}/read")
    public List<Nutrition> dietOfSpecificUserWeekgain(@PathVariable int id,@PathVariable String week0
            ,@PathVariable String week1,@PathVariable String week2,@PathVariable String week3,
            @PathVariable String week4,@PathVariable String week5,@PathVariable String week6){
                
        Optional<User> o=ur.findById(id);
        if(o.isPresent() ) {
            List<Nutrition>l=nr.findAll();
            List<Nutrition>l1=new ArrayList<>();
            for(int i=0;i<l.size();i++) {
                String dateString = l.get(i).getDate().toString();

                if(l.get(i).getUser_id()==id) {

                    if(l.get(i).getType().equals("WeightGain")){
                        if((dateString.equals(week1)) ||(dateString.equals(week2)) ||
                                (dateString.equals(week3)) ||(dateString.equals(week4)) ||(dateString.equals(week5)) ||
                                (dateString.equals(week6)) || (dateString.equals(week0))) {
                            
                            l1.add(l.get(i));

                        }
                    }

                }
            }
            
            return l1;
        }
        return null;
    }
}
