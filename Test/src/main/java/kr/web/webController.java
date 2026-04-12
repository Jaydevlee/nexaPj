package kr.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class webController {
	
	//get
	@RequestMapping(value="home.do", method=RequestMethod.GET)
	public String homeget() {
		System.out.println("home.do is called");
		return "home_get";
	}
	
	// post
	@RequestMapping(value="home.do", method=RequestMethod.POST)
	public String homepost() {
		System.out.println("home.do is called");
		return "home_post";
	}

}
