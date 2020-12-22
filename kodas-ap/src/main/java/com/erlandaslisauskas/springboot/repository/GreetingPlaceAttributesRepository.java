package com.erlandaslisauskas.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erlandaslisauskas.springboot.model.GreetingPlaceAttributes;

public interface GreetingPlaceAttributesRepository extends JpaRepository<GreetingPlaceAttributes, String>{

}
