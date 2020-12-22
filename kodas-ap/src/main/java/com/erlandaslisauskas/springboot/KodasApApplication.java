package com.erlandaslisauskas.springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.erlandaslisauskas.springboot.model.Greeting;
import com.erlandaslisauskas.springboot.repository.GreetingRepository;

@SpringBootApplication
public class KodasApApplication implements CommandLineRunner {

	@Autowired
	private GreetingRepository greetingRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(KodasApApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		greetingRepository.save(new Greeting("Hello", "World", "Merry Christmas and a Happy New Year", 
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bOWvrpHlxes_b8qDTxGa_B0guiPf-iqugw&usqp=CAU",
				"https://www.youtube.com/watch?v=Idl-K8s1GYo&ab_channel=ChristmasSongs05",
				"12/22/2020 11:22"));
		greetingRepository.save(new Greeting("Hello", "World", "Merry Christmas and a Happy New Year", 
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bOWvrpHlxes_b8qDTxGa_B0guiPf-iqugw&usqp=CAU",
				"https://www.youtube.com/watch?v=Idl-K8s1GYo&ab_channel=ChristmasSongs05",
				"12/22/2020 11:22"));
		greetingRepository.save(new Greeting("Hello", "World", "Merry Christmas and a Happy New Year", 
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9bOWvrpHlxes_b8qDTxGa_B0guiPf-iqugw&usqp=CAU",
				"https://www.youtube.com/watch?v=Idl-K8s1GYo&ab_channel=ChristmasSongs05",
				"12/22/2020 11:22"));
	}

}
