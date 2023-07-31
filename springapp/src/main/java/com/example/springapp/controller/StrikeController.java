package com.example.springapp.controller;

import com.example.springapp.model.Strike;
import com.example.springapp.service.StrikeService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/strike")
@CrossOrigin(origins="*")
public class StrikeController {

    private final StrikeService strikeService;

    public StrikeController(StrikeService strikeService) {
        this.strikeService = strikeService;
    }

    @GetMapping("/{userId}")
    public Strike getStrikeByUserId(@PathVariable("userId") Long userId) {
        return strikeService.getStrikeByUserId(userId);
    }

    @PutMapping("/{userId}")
    public Strike updateStrikeByUserId(@PathVariable("userId") Long userId, @RequestBody Strike strike) {
        return strikeService.updateStrikeByUserId(userId, strike);
    }

    @PostMapping("/{userId}")
    public Strike addStrikeByUserId(@PathVariable("userId") Long userId, @RequestBody Strike strike) {
        return strikeService.addStrikeByUserId(userId, strike);
    }
}