package com.erlandaslisauskas.springboot.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import org.hibernate.validator.constraints.Length;

@Entity
public class GreetingType {

	@Id
	@Length(min = 3)
	private String type;
	
	@OneToOne 
	private GreetingPlaceAttributes greetingPlaceAttributes;

	public GreetingType(@Length(min = 3) String type) {
		super();
		this.type = type;
	}

	public GreetingType() {
		super();
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public GreetingPlaceAttributes getGreetingPlaceAttributes() {
		return greetingPlaceAttributes;
	}

	public void setGreetingPlaceAttributes(GreetingPlaceAttributes greetingPlaceAttributes) {
		this.greetingPlaceAttributes = greetingPlaceAttributes;
	}
	
	
	
}
