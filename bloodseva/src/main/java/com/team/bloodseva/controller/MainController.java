package com.team.bloodseva.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {
	@RequestMapping("/")
	public String index() {
		System.out.println("in main ctr index ");
		return "welcome";
	}
}
