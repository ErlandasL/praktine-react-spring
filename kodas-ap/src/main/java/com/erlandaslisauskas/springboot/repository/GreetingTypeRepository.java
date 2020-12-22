package com.erlandaslisauskas.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.erlandaslisauskas.springboot.model.GreetingType;

public interface GreetingTypeRepository extends JpaRepository<GreetingType, String>{

}
