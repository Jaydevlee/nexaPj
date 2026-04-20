package kr.hcnc.web;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
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
									@ParamVariable(name="searchBoardType", required=false) String searchBoardType,
									@ParamVariable(name="searchCategory", required=false) String searchCategory,
									@ParamDataSet(name="dsSearch", required=false) Map<String, Object> dsSearch) {
		
	System.out.println("searchCmb=" + searchCmb);
	System.out.println("searchVal=" + searchVal);
	System.out.println("boardNo =  " + boardNo);
	System.out.println("searchBoardType =  " + searchBoardType);
	System.out.println("searchCategory =  " + searchCategory);
	System.out.println("dsSearch=" + dsSearch);
	NexacroResult result = new NexacroResult();
	HashMap<String, Object> param = new HashMap<String, Object>();
	
	param.put("searchCmb", searchCmb);
	param.put("searchVal", searchVal);
	param.put("boardNo", boardNo);
	param.put("searchBoardType", searchBoardType);
	param.put("searchCategory", searchCategory);
	//param.putAll(dsSearch);
	
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
		
		String boardType = (String)dsBoardDetail.get("BOARD_TYPE_NM");
		if (boardType == null || boardType.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "게시물 종류를 선택해주세요");
	        return result;
	    }
		
		String category = (String)dsBoardDetail.get("CATEGORY_NM");
		if (category == null || category.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "카테고리를 선택해주세요.");
	        return result;
	    }
	    // Map<String, Object> param = new HashMap<String, Object>();
		// param.put("TITLE", dsBoardDetail.get("TITLE");
		// param.put("CONT", dsBoardDetail.get("CONT");
		// param.put("WRITER", dsBoardDetail.get("WRITER");
		// param.put("MODIFIER", dsBoardDetail.get("MODIFIER");
		// param.put("BOARD_TYPE", dsBoardDetail.get("BOARD_TYPE");
		// param.put("CATEGORY", dsBoardDetail.get("CATEGORY");
		// int insertReusult = hcncService.insertBoard(param);
		int insertResult = hcncService.insertBoard(dsBoardDetail);
		
		if(insertResult > 0 ) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "게시글 등록이 완료되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "게시글이 생성되지 않았습니다.");
		};
		return result;
	};
	
	//selectCode
	@RequestMapping(value="/selectCode.do")
	public NexacroResult selectCode() {
		NexacroResult result = new NexacroResult();
		
		List<Map<String, Object>> dsAllCode = hcncService.selectCode();
		result.addDataSet("dsAllCode", dsAllCode);
		return result;
	}
	
	@RequestMapping(value="/updateBoard.do")
	public NexacroResult updateBoard(@ParamDataSet(name="dsBoardDetail") Map<String, Object> dsBoardDetail) {
		NexacroResult result =  new NexacroResult();
		
		String title = (String)dsBoardDetail.get("TITLE");
		if (title == null || title.trim().isEmpty() || title.length() > 1000) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "제목은 1000자 이내여야 합니다");
	        return result;
	    }
		
		String cont =(String)dsBoardDetail.get("CONT");
		if (cont == null || cont.trim().isEmpty() || cont.length() > 1000) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "내용은 1000자 이내여야 합니다");
	        return result;
	    };
		
		String modifier = (String)dsBoardDetail.get("MODIFIER");
		if (modifier == null || modifier.trim().isEmpty() || modifier.length() > 100) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "수정자는 100자 이내여야 합니다");
	        return result;
	    };
	    
	    String boardType = (String)dsBoardDetail.get("BOARD_TYPE_NM");
		if (boardType == null || modifier.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "게시물 종류를 선택해주세요");
	        return result;
	    };
	    
	    String category = (String)dsBoardDetail.get("CATEGORY_NM");
	    if (category == null || category.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "카테고리를 선택해주세요.");
	        return result;
	    };
//		HashMap<String, Object> param = new HashMap<String, Object>();
//		param.put("TITLE", title);
//		param.put("CONT", cont);
//		param.put("Modifier", modifier);
//		int updateResult = hcncService.updateBoard(param);
		int updateResult = hcncService.updateBoard(dsBoardDetail);
		
		if(updateResult > 0 ) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "게시글 수정이 완료되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "게시글이 수정되지 않았습니다.");
		};
		return result;
	};
	
	
	@RequestMapping(value="/deleteBoard.do")
	public NexacroResult deleteBoard(@ParamVariable(name="boardNo") int boardNo) {
		NexacroResult result = new NexacroResult();
		int deleteResult = hcncService.deleteBoard(boardNo);
		if(deleteResult > 0) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "게시글이 삭제되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "게시글이 삭제되지 않았습니다.");
		};
		return result;
	}
	
	
	
	
	@RequestMapping(value="/deleteBoardList.do")
	public NexacroResult deleteBoard(@ParamVariable(name="boardNo") String boardNo) {
		List<String> boardNoList = Arrays.asList(boardNo.split(","));
		System.out.println(boardNoList);
		NexacroResult result = new NexacroResult();
		
		int deleteResult = hcncService.deleteBoardList(boardNoList);
		if(deleteResult > 0) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "게시글이 삭제되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "게시글이 삭제되지 않았습니다.");	
		};
		return result;
	}
	

	
	// deleteBoard 과장님 로직
//		@RequestMapping(value="/deleteBoard.do")
//		public NexacroResult deleteBoard(@ParamVariable(name="boardNo")  Map<String, Object> dsBoardDetail) {
//			NexacroResult result = new NexacroResult();
//			Map<String, Object> param = new HashMap<>();
//			param.put("BOARD_NO", dsBoardDetail.get("BOARD_NO");
//			int deleteResult = hcncService.deleteBoard(param);
//			if(deleteResult > 0) {
//				result.addVariable("ErrorCode", 0);
//				result.addVariable("ErrorMsg", "게시글이 삭제되었습니다.");
//			} else {
//				result.addVariable("ErrorCode", -1);
//				result.addVariable("ErrorMsg", "게시글이 삭제되지 않았습니다.");
//			};
//			return result;
//		}
	
	
	// 과장님 update 로직
//	@RequestMapping(value="/updateBoard.do")
//	public NexacroResult updateBoard(@ParamDataSet(name="dsBoardDetail") Map<String, Object> dsBoardDetail) {
//		NexacroResult result =  new NexacroResult();
//		
//		String title = (String)dsBoardDetail.get("TITLE");
//		if (title == null || title.trim().isEmpty() || title.length() > 1000) {
//			result.addVariable("ErrorCode", -1);
//			result.addVariable("ErrorMsg", "제목은 1000자 이내여야 합니다");
//	        return result;
//	    }
//		
//		String cont =(String)dsBoardDetail.get("CONT");
//		if (cont == null || cont.trim().isEmpty() || cont.length() > 1000) {
//			result.addVariable("ErrorCode", -1);
//			result.addVariable("ErrorMsg", "내용은 1000자 이내여야 합니다");
//	        return result;
//	    };
//		
//		String modifier = (String)dsBoardDetail.get("MODIFIER");
//		if (modifier == null || modifier.trim().isEmpty() || modifier.length() > 100) {
//			result.addVariable("ErrorCode", -1);
//			result.addVariable("ErrorMsg", "수정자는 100자 이내여야 합니다");
//	        return result;
//	    };
////		HashMap<String, Object> param = new HashMap<String, Object>();
//			param.put("BOARD_NO", dsBoardDetail.get("BOARD_NO");
////		param.put("TITLE", title);
////		param.put("CONT", cont);
////		param.put("Modifier", modifier);
//		int updateResult = hcncService.updateBoard(dsBoardDetail);
//		
//		if(updateResult > 0 ) {
//			result.addVariable("ErrorCode", 0);
//			result.addVariable("ErrorMsg", "게시글 수정이 완료되었습니다.");
//		} else {
//			result.addVariable("ErrorCode", -1);
//			result.addVariable("ErrorMsg", "게시글이 수정되지 않았습니다.");
//		};
//		return result;
//	};
	
	
	
	
	
//	@RequestMapping(value="/deleteBoardList.do")
//	public NexacroResult deleteBoard(@ParamVariable(name="boardNo") List<Map<String, Object>> dsList) {
//		List<String> boardNoList = Arrays.asList(boardNo.split(","));
//		System.out.println(boardNoList);
	
//		NexacroResult result = new NexacroResult();
//		
//		for(Map<String, Object> map: dsList) {
//		if("0"== (int)map.get("CHK")) continue;
//			HashMap<String, Object> param = new HashMap<String, Object>();
//			param.put("BOARD_NO", map.get("BOARD_NO");
//			hcncService.deleteBoard(param);
//		}
//		return result;
//	}
};