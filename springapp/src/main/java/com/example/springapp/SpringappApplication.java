package com.example.springapp;

import org.springframework.boot.SpringApplication;
// import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.beans.factory.annotation.Autowired;
import jdk.jfr.DataAmount;
// import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class SpringappApplication {
	// public class SpringappApplication implements CommandLineRunner

	// @Autowired
	// private PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(SpringappApplication.class, args);
	}

	// @Override
	// public void run(String... args) throws Exception{
	// 	System.out.println(this.passwordEncoder.encode("123"));
	// }

}