package kr.hcnc.web;

import java.io.IOException;
import java.util.HashMap;
import javax.annotation.Resource;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import kr.hcnc.VO.HcncVO;
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
		
		System.out.println("P1 " + request.getParameter("P1"));
		System.out.println("P2 " + request.getParameter("P2"));
		System.out.println("P3 " + request.getParameter("P3"));
		
		request.setAttribute("A", "ABC");
		System.out.println(result);
		return "test01";
	}
		
		@RequestMapping(value="/insertTestData.do")
		public void insertTestData(HcncVO vo) {
			System.out.println(vo.getTITLE());
			System.out.println(vo.getCONT());
			System.out.println(vo.getWRITER());
		}
		
		// 게시판 목록
		@RequestMapping(value="/selectBoardList.do")
		public String selectBoardList(HttpServletRequest request, HttpServletResponse response) {
			System.out.println("HcncController > selectBoardList()");
			try {
		        HashMap<String, Object> param = new HashMap<String, Object>();
		        request.setAttribute("list", hcncService.selectBoardList(param));
		    } catch (Exception e) {
		        System.out.println("====== 게시판 조회 중 에러 발생 ======");
		        e.printStackTrace(); // 이클립스 콘솔에 빨간 에러의 진짜 원인을 찍어줍니다.
		    }
			return "selectBoardList";
		}
		
		// 게시글 보기
		@RequestMapping(value="/selectBoardDetail.do")
		public String selectBoardDetail(HttpServletRequest request) {
			try {
			HashMap<String, Object> param = new HashMap<String, Object>();
			param.put("boardNo", request.getParameter("BOARD_NO"));
			request.setAttribute("list", hcncService.selectBoardDetail(param));
			} catch (Exception e) {
		        System.out.println("====== 게시판 조회 중 에러 발생 ======");
		        e.printStackTrace(); // 이클립스 콘솔에 빨간 에러의 진짜 원인을 찍어줍니다.
		    }
			return "selectBoardDetail";
		}
		
		// 게시글 추가 페이지로 이동
		@RequestMapping(value="/insertPage.do")
		public String insertPage() {
			return "insertPage";
		}
		
		// 게시글 추가
		@RequestMapping(value="/insertBoard.do")
		public void insertBoard(HttpServletRequest request, HttpServletResponse response) {
			String title = request.getParameter("title");
			if (title == null || title.trim().isEmpty() || title.length() > 1000) {
		        try {
					response.sendRedirect("errorPage.do?msg=제목은 필수이면서 1000자 이내여야 합니다.");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		        return;
		    }
			
			String cont = request.getParameter("cont");
			if (cont == null || cont.trim().isEmpty() || cont.length() > 1000) {
		        try {
					response.sendRedirect("errorPage.do?msg= 내용은 필수이면서 1000자 이내여야 합니다.");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		        return;
		    };
		    
			String writer = request.getParameter("writer");
			if (writer == null || writer.trim().isEmpty() || writer.length() > 100) {
		        try {
					response.sendRedirect("errorPage.do?msg=작성자는 필수이면서 100자 이내여야 합니다.");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		        return;
		    };
		    
			HashMap<String, Object> param = new HashMap<String, Object>();
			param.put("title", title);
			param.put("cont", cont);
			param.put("writer", writer);
			int result = hcncService.insertBoard(param);
			if(result > 0 ) {
				try {
					response.sendRedirect("selectBoardDetail.do?BOARD_NO=" + param.get("boardNo"));
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		
		
		// 수정페이지로 이동
		@RequestMapping(value="/updatePage.do")
		public String updatePage(HttpServletRequest request) {
			HashMap<String, Object> param = new HashMap<String, Object>();
			param.put("boardNo", request.getParameter("BOARD_NO"));
			request.setAttribute("list", hcncService.selectBoardDetail(param));
			return "updatePage";
		}
		
		@RequestMapping(value="/updateBoard.do")
		public void updateBoard(@RequestParam("boardNo") int boardNo, HttpServletRequest request, HttpServletResponse response) {
			String title = request.getParameter("title");
			if (title == null || title.trim().isEmpty() || title.length() > 1000) {
		        try {
					response.sendRedirect("errorPage.do?msg=제목은 필수이면서 1000자 이내여야 합니다.");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		        return;
		    }
			
			String cont = request.getParameter("cont");
			if (cont == null || cont.trim().isEmpty() || cont.length() > 1000) {
		        try {
					response.sendRedirect("errorPage.do?msg= 내용은 필수이면서 1000자 이내여야 합니다.");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		        return;
		    };
			
			String modifier = request.getParameter("modifier");
			if (modifier == null || modifier.trim().isEmpty() || modifier.length() > 100) {
		        try {
					response.sendRedirect("errorPage.do?msg=수정자는 필수이면서 100자 이내여야 합니다.");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
		        return;
		    };
			HashMap<String, Object> param = new HashMap<String, Object>();
			param.put("boardNo", request.getParameter("boardNo"));
			param.put("title", title);
			param.put("cont", cont);
			param.put("modifier", modifier);
			int result = hcncService.updateBoard(param);
			
			if(result > 0) {
				try {
					response.sendRedirect("selectBoardDetail.do?BOARD_NO=" + param.get("boardNo"));
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		
		@RequestMapping(value="/deleteBoard.do")
		public void deleteBoard(@RequestParam("BOARD_NO") int boardNo, HttpServletResponse response) {
			int result = hcncService.deleteBoard(boardNo);
			if(result > 0) {
				try {
					System.out.println("게시글 삭제 완료");
					response.sendRedirect("selectBoardList.do");
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
}