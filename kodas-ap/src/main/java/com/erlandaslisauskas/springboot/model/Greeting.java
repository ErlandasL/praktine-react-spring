package com.erlandaslisauskas.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.validator.constraints.Length;

@Entity
@Table(name = "greetings")
public class Greeting {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "firstName")
	private String firstName;
	
	@Column(name = "lastName")
	private String lastName;
	
	@Column(name = "text")
	@Length(min = 3)
	private String text;
		
	@Column(name = "imgUrl")
	private String imgUrl;
	
	@Column(name = "audioUrl")
	private String audioUrl;
	
	@Column(name = "dateAndTime")
	private String dateAndTime;
	
	public Greeting() {
		
	}
	
	

	public Greeting(String firstName, String lastName, String text, String imgUrl, String audioUrl, String dateAndTime) {
		this.dateAndTime = dateAndTime;
		this.firstName = firstName;
		this.lastName = lastName;
		this.text = text;
		this.imgUrl = imgUrl;
		this.audioUrl = audioUrl;
	}



	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}

	public String getAudioUrl() {
		return audioUrl;
	}

	public void setAudioUrl(String audioUrl) {
		this.audioUrl = audioUrl;
	}
	
	public String getDateAndTime() {
		return dateAndTime;
	}

	public void setDateAndTime(String dateAndTime) {
		this.dateAndTime = dateAndTime;
	}
	
	
}
