package kr.hcnc.controller;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.security.auth.message.callback.PrivateKeyCallback.Request;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.hcnc.service.HcncService;

@Controller
public class HcncController {
	@Resource(name = "hcncService")
	public HcncService hcncService;
	
	@RequestMapping(value="/test01.do")
	public String test01(HttpServletRequest request, HttpServletResponse response) {
		System.out.println("HcncController > test01()");
		String result = hcncService.selectTest();
		// get / post
		
		//request.getQueryString(); GET
		//request.getAttribute(name); GET/POST
		//request.getParameter(name);
		
		System.out.println(request.getQueryString());
		System.out.println(request.getParameter("A"));
		
		System.out.println("p1 " + request.getParameter("P1"));
		System.out.println("p2 " + request.getParameter("P2"));
		System.out.println("p3 " + request.getParameter("P3"));
		
		request.setAttribute("A", "ABC");
		System.out.println(result);
		return "test01";
	}
		
		@RequestMapping(value="/insertTestData.do")
		public void insertTestData(HttpServletRequest request) {
			HashMap<String, Object> param = new HashMap<String, Object>();
			
			
			param.put("p1", request.getParameter("P1"));
			param.put("p2", request.getParameter("P2"));
			param.put("p3", request.getParameter("P3"));
			System.out.println("param = " + param);
			int result = hcncService.insertTestData(param);
			System.out.println("result = " + result);
		}
}
	


