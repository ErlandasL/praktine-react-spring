package com.erlandaslisauskas.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.validator.constraints.Length;

@Entity
public class GreetingPlaceAttributes {

	@Id
	@Length(min = 4)
	private String name;
	
	@Column
	private String address;
	
	@Column
	private String logoUrl;
	
	
	
}
