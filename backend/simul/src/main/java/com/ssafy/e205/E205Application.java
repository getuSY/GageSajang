package com.ssafy.e205;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.context.ServletWebServerApplicationContext;
import org.springframework.boot.web.servlet.context.ServletWebServerInitializedEvent;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.ApplicationListener;

@EnableDiscoveryClient
@SpringBootApplication
public class E205Application implements ApplicationListener<ServletWebServerInitializedEvent> {

	public int portnum;

	public static void main(String[] args) {
		SpringApplication.run(E205Application.class, args);
	}

	@Override
	public void onApplicationEvent(ServletWebServerInitializedEvent servletWebServerInitializedEvent) {
		ServletWebServerApplicationContext applicationContext = servletWebServerInitializedEvent.getApplicationContext();
		portnum = applicationContext.getWebServer().getPort();
		System.out.println(applicationContext.getWebServer().getPort());
	}
}
