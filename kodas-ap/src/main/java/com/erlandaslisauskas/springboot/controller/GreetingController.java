package com.erlandaslisauskas.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.erlandaslisauskas.springboot.exception.ResourceNotFoundException;
import com.erlandaslisauskas.springboot.model.Greeting;
import com.erlandaslisauskas.springboot.repository.GreetingRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class GreetingController {
	
	@Autowired
	private GreetingRepository greetingRepository;
	
	// get all greetings
	@RequestMapping(path = "/greetings", method = RequestMethod.GET)
//	@GetMapping("/greeting")
	public List<Greeting> getAllGreetings() {
		return greetingRepository.findAll();
	}

	// create product rest api
	@CrossOrigin(origins = "http://localhost:3000/admin/add-greeting")
	@RequestMapping(path = "/greetings", method = RequestMethod.PUT)
	public Greeting createGreeting(@RequestBody Greeting greeting) {
		return greetingRepository.save(greeting);
	}
	
	//get product rest api
	@CrossOrigin(origins = "http://localhost:3000/details/product")
	@GetMapping("products/{id}")
	public ResponseEntity<Greeting> getGreetingById(@PathVariable Long id) {
		
		Greeting greeting = greetingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Greeting not found with id: " + id));
		return ResponseEntity.ok(greeting);
	}
	
	// update greeting rest api	
	@CrossOrigin(origins = "http://localhost:3000/admin/update-greeting")
	@PutMapping("/greetings/{id}")
	public ResponseEntity<Greeting> updateProduct(@PathVariable Long id, @RequestBody Greeting greetingDetails) {
		
		Greeting greeting = greetingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));
		
		greeting.setFirstName(greetingDetails.getFirstName());
		greeting.setLastName(greetingDetails.getLastName());
		greeting.setImgUrl(greetingDetails.getImgUrl());
		greeting.setText(greetingDetails.getText());
		greeting.setAudioUrl(greetingDetails.getAudioUrl());
		
		Greeting updatedProduct = greetingRepository.save(greeting);
		return ResponseEntity.ok(updatedProduct);
	}
	
	// delete greeting rest api
	@CrossOrigin(origins = "http://localhost:3000/admin")
	@DeleteMapping("/greetings/{id}")
	public ResponseEntity <Map<String, Boolean>> deleteProduct(@PathVariable Long id) {
		Greeting product = greetingRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Greeting not found with id: " + id));
		
		greetingRepository.delete(product);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
