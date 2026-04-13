package kr.hcnc.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kr.hcnc.service.HcncService;

@Controller
public class HcncController {
	@Resource(name = "hcncService")
	public HcncService hcncService;
		// 게시판 목록
	@RequestMapping(value="/selectList.do")
	public NexacroResult selectList(@ParamVariable(name="searchCmb", required=false) String searchCmb,
									@ParamVariable(name="searchVal", required=false) String searchVal,
									@ParamVariable(name="boardNo", required=false) String boardNo,
									@ParamDataSet(name="dsSearch", required=false) Map<String, Object> dsSearch) {
		
	System.out.println("searchCmb=" + searchCmb);
	System.out.println("searchVal=" + searchVal);
	System.out.println("boardNo =  " + boardNo);
	System.out.println("dsSearch=" + dsSearch);
	NexacroResult result = new NexacroResult();
	HashMap<String, Object> param = new HashMap<String, Object>();
	
	// param에 값 추하여 호출
//    	param.put("searchCmb", searchCmb);
//    	param.put("searchVal", searchVal);
	
	param.put("searchCmb", searchCmb);
	param.put("searchVal", searchVal);
	param.put("boardNo", boardNo);
	//param.putAll(dsSearch); // 잘 사용하지 않는다.
	
	//param = (HashMap)dsSearch;
    System.out.println(hcncService.selectBoardList(param));
    result.addDataSet("dsList", hcncService.selectBoardList(param));
	return result;
	}

	// insertBoard
	@RequestMapping(value="/insertBoard.do")
	public NexacroResult insertBoard(@ParamDataSet(name="dsBoardDetail") Map<String, Object> dsBoardDetail) {
		
		System.out.println("insertBoard :: ");
		System.out.println("dsBoardDetail :: " + dsBoardDetail);
		
		NexacroResult result = new NexacroResult();
		String title = (String)dsBoardDetail.get("TITLE");
		if (title == null || title.trim().isEmpty() || title.length() > 1000) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "제목은 1000자 이내여야 합니다");
	        return result;
	    }
		
		String cont = (String)dsBoardDetail.get("CONT");
		if (cont == null || cont.trim().isEmpty() || cont.length() > 1000) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "내용은 1000자 이내여야 합니다");
	        return result;
	    }
	    
		String writer = (String)dsBoardDetail.get("WRITER");
		if (writer == null || writer.trim().isEmpty() || writer.length() > 100) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "작성자는  100자 이내여야 합니다");
	        return result;
	    }
		
		String modifier = (String)dsBoardDetail.get("MODIFIER");
		if (modifier == null || modifier.trim().isEmpty() || modifier.length() > 100) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "수정자는  100자 이내여야 합니다");
	        return result;
	    }
	    // Map<String, Object> param = new HashMap<String, Object>();
		// param.put("TITLE", dsBoardDetail.get("TITLE");
		// param.put("CONT", dsBoardDetail.get("CONT");
		// param.put("WRITER", dsBoardDetail.get("WRITER");
		// param.put("MODIFIER", dsBoardDetail.get("MODIFIER");
		int insertResult = hcncService.insertBoard(dsBoardDetail);
		
		if(insertResult > 0 ) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "게시글 등록이 완료되었습니다.");
		}
		return result;
	};
	
//	@RequestMapping(value="/updateBoard.do")
//	public void updateBoard(@RequestParam("boardNo") int boardNo, HttpServletRequest request, HttpServletResponse response) {
//		String title = request.getParameter("title");
//		if (title == null || title.trim().isEmpty() || title.length() > 1000) {
//	        try {
//				response.sendRedirect("errorPage.do?msg=제목은 필수이면서 1000자 이내여야 합니다.");
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//	        return;
//	    }
//		
//		String cont = request.getParameter("cont");
//		if (cont == null || cont.trim().isEmpty() || cont.length() > 1000) {
//	        try {
//				response.sendRedirect("errorPage.do?msg= 내용은 필수이면서 1000자 이내여야 합니다.");
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//	        return;
//	    };
//		
//		String modifier = request.getParameter("modifier");
//		if (modifier == null || modifier.trim().isEmpty() || modifier.length() > 100) {
//	        try {
//				response.sendRedirect("errorPage.do?msg=수정자는 필수이면서 100자 이내여야 합니다.");
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//	        return;
//	    };
//		HashMap<String, Object> param = new HashMap<String, Object>();
//		param.put("boardNo", request.getParameter("boardNo"));
//		param.put("title", title);
//		param.put("cont", cont);
//		param.put("modifier", modifier);
//		int result = hcncService.updateBoard(param);
//		
//		if(result > 0) {
//			try {
//				response.sendRedirect("selectBoardDetail.do?BOARD_NO=" + param.get("boardNo"));
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		}
//	}
	
//	@RequestMapping(value="/deleteBoard.do")
//	public void deleteBoard(@RequestParam("BOARD_NO") int boardNo, HttpServletResponse response) {
//		int result = hcncService.deleteBoard(boardNo);
//		if(result > 0) {
//			try {
//				System.out.println("게시글 삭제 완료");
//				response.sendRedirect("selectBoardList.do");
//			} catch (IOException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
//	}
};