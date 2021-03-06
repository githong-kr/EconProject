package com.bale.econproject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(
        scanBasePackages = {"com.bale.econproject", "com.bale.fwk"}
)
public class EconProjectApplication {

    public static void main(String[] args) {
        SpringApplication.run(EconProjectApplication.class, args);
    }

}
