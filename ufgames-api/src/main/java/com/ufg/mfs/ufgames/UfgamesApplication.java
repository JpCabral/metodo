package com.ufg.mfs.ufgames;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"com.ufg.mfs.ufgames.model"})
public class UfgamesApplication {

    public static void main(String[] args) {
        SpringApplication.run(UfgamesApplication.class, args);
    }

}
