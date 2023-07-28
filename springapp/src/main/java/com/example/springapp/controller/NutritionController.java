package com.example.springapp.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.springapp.model.Nutrition; 
import com.example.springapp.model.User; // Import the Nutrition class
import com.example.springapp.repository.NutritionRepository;
import com.example.springapp.repository.UserRepository;

@RestController
@CrossOrigin(origins="*")
public class NutritionController {

    @Autowired
    NutritionRepository nr;
    
    @Autowired
    UserRepository ur;

    @PostMapping("/nutritionWeightloss/{id}/insert")
    public ResponseEntity<Void> dietOfSpecificUser(@PathVariable Long id, @RequestBody Nutrition n) {
        Optional<User> o = ur.findById(id);
        if (o.isPresent()) {
            n.setUser_id(id.intValue()); // Convert Long to int
            nr.save(n);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/nutritionWeightloss/{id}/{date}/read")
    public List<Nutrition> dietOfSpecificUser(@PathVariable Long id,@PathVariable String date){
        Optional<User> o=ur.findById(id);
        if(o.isPresent() ) {
            List<Nutrition>l=nr.findAll();

            List<Nutrition>l1=new ArrayList<>();
            for(int i=0;i<l.size();i++) {
                String dateString = l.get(i).getDate().toString();

                if(l.get(i).getUser_id()==id) {

                    if((dateString.equals(date)) &&(l.get(i).getType().equals("WeightLoss"))) {

                        l1.add(l.get(i));
                    }

                }
            }
            
            return l1;
        }
        return null;
    }

   
    @GetMapping("/nutritionWeightgain/{id}/{date}/read")
    public List<Nutrition> dietOfSpecificUserGain(@PathVariable Long id,@PathVariable String date){
        Optional<User> o=ur.findById(id);
        if(o.isPresent() ) {
            List<Nutrition>l=nr.findAll();

            List<Nutrition>l1=new ArrayList<>();
            for(int i=0;i<l.size();i++) {
                String dateString = l.get(i).getDate().toString();

                if(l.get(i).getUser_id()==id) {

                    if(dateString.equals(date)){
                        if(l.get(i).getType().equals("WeightGain")){
                            l1.add(l.get(i));
                        }

                    }

                }
            }
            
            return l1;
        }
        return null;
    }


    @GetMapping("/nutritionWeightlossWeek/{id}/{week0}/{week1}/{week2}/{week3}/{week4}/{week5}/{week6}/read")
    public List<Nutrition> dietOfSpecificUserWeek(@PathVariable Long id,@PathVariable String week0
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
    public List<Nutrition> dietOfSpecificUserWeekgain(@PathVariable Long id,@PathVariable String week0
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