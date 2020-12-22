package com.erlandaslisauskas.springboot.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.erlandaslisauskas.springboot.model.Greeting;

@Repository
public interface GreetingRepository extends JpaRepository<Greeting, Long> {
}
