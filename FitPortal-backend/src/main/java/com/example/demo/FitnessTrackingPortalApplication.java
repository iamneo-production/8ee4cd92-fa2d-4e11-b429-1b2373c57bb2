package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.example.demo.apiconnect.ConnectApi;

@SpringBootApplication
public class FitnessTrackingPortalApplication {

	public static void main(String[] args) {
		System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>....");
		System.out.println(ConnectApi.api);
		System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>........");
		SpringApplication.run(FitnessTrackingPortalApplication.class, args);
	}

}
