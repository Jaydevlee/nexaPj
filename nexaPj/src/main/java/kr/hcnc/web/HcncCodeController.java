package kr.hcnc.web;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;


import kr.hcnc.service.HcncService;
@Controller
public class HcncCodeController {
	@Resource(name = "hcncService")
	public HcncService hcncService;
	
	@RequestMapping(value="/selectCodeList.do")
	public NexacroResult selectCodeList(@ParamVariable(name="searchCmb", required=false) String searchCmb,
										@ParamVariable(name="searchVal", required=false) String searchVal,
										@ParamDataSet(name="dsSearch", required=false) Map<String, Object> dsSearch) {
		System.out.println("searchCmb=" + searchCmb);
		System.out.println("searchVal=" + searchVal);
		System.out.println("dsSearch=" + dsSearch);
		NexacroResult result = new NexacroResult();
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("searchCmb", searchCmb);
		param.put("searchVal", searchVal);
		System.out.println(hcncService.selectCodeList(param));
	    result.addDataSet("dsCodeList", hcncService.selectCodeList(param));
		return result;
		
	}
	
	@RequestMapping(value="/selectCodeListDtl.do")
	public NexacroResult selectCodeListDtl(@ParamVariable(name="searchCmbDtl", required=false) String searchCmbDtl,
										@ParamVariable(name="searchValDtl", required=false) String searchValDtl,
										@ParamVariable(name="ptCode", required=false) String ptCode,
  										@ParamDataSet(name="dsSearchDtl", required=false) Map<String, Object> dsSearchDtl) {
		System.out.println("searchCmbDtl=" + searchCmbDtl);
		System.out.println("searchValDtl=" + searchValDtl);
		System.out.println("ptCode=" + ptCode);
		System.out.println("dsSearch=" + dsSearchDtl);
		NexacroResult result = new NexacroResult();
		HashMap<String, Object> param = new HashMap<String, Object>();
		param.put("searchCmbDtl", searchCmbDtl);
		param.put("searchValDtl", searchValDtl);
		param.put("ptCode", ptCode);
		System.out.println(hcncService.selectCodeListDtl(param));
	    result.addDataSet("dsCodeListDtl", hcncService.selectCodeListDtl(param));
		return result;
		
	}
	
	@RequestMapping(value="/insertCode.do")
	public NexacroResult insertCode(@ParamDataSet(name="dsCodeList") Map<String, Object> dsCodeList) {
		NexacroResult result = new NexacroResult();
		String code = (String) dsCodeList.get("CODE");
		if(code == "" || code == null || code.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드를 작성해주세요.");
	        return result;
		}
		String codeNm = (String) dsCodeList.get("CODE_NM");
		if(codeNm == "" || codeNm == null || codeNm.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드명을 작성해주세요.");
	        return result;
		}
		
		int insertResult = hcncService.insertCode(dsCodeList);
		if(insertResult > 0 ) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "코드 등록이 완료되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드가 등록되지 않았습니다.");
		}
		return result;
	}
	
	@RequestMapping(value="/insertCodeDtl.do")
	public NexacroResult insertCodeDtl(@ParamDataSet(name="dsCodeListDtl") Map<String, Object> dsCodeListDtl) {
		NexacroResult result = new NexacroResult();
		
		String code = (String) dsCodeListDtl.get("CODE");
		if(code == "" || code == null || code.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드를 작성해주세요.");
	        return result;
		}
		String codeNm = (String) dsCodeListDtl.get("CODE_NM");
		if(codeNm == "" || codeNm == null || codeNm.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드명을 작성해주세요.");
	        return result;
		}
		
		System.out.println("받은 데이터 전체: " + dsCodeListDtl);
		
		int insertResult = hcncService.insertCodeDtl(dsCodeListDtl);
		if(insertResult > 0 ) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "코드 등록이 완료되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드가 등록되지 않았습니다.");
		}
		return result;
	}
	
	@RequestMapping(value="/updateCode.do")
	public NexacroResult updateCode(@ParamDataSet(name="dsCodeList") Map<String, Object> dsCodeList) {
		NexacroResult result = new NexacroResult();
		
		String code = (String) dsCodeList.get("CODE");
		if(code == "" || code == null || code.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드를 작성해주세요.");
	        return result;
		}
		String codeNm = (String) dsCodeList.get("CODE_NM");
		if(codeNm == "" || codeNm == null || codeNm.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드명을 작성해주세요.");
	        return result;
		}
		
		int updateResult = hcncService.updateCode(dsCodeList);
		if(updateResult > 0 ) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "코드명이 수정되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드명이 수정되지 않았습니다.");
		}
		return result;
	}
	
	@RequestMapping(value="/updateCodeDtl.do")
	public NexacroResult updateCodeDtl(@ParamDataSet(name="dsCodeListDtl") Map<String, Object> dsCodeListDtl) {
		NexacroResult result = new NexacroResult();
		
		String code = (String) dsCodeListDtl.get("CODE");
		if(code == "" || code == null || code.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드를 작성해주세요.");
	        return result;
		}
		String codeNm = (String) dsCodeListDtl.get("CODE_NM");
		if(codeNm == "" || codeNm == null || codeNm.trim().isEmpty()) {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드명을 작성해주세요.");
	        return result;
		}
		
		int updateResult = hcncService.updateCodeDtl(dsCodeListDtl);
		if(updateResult > 0 ) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "코드명이 수정되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드명이 수정되지 않았습니다.");
		}
		return result;
	}
	
	@RequestMapping(value="/deleteCode.do")
	public NexacroResult deleteCode(@ParamVariable(name="code") String code) {
		NexacroResult result = new NexacroResult();
		int deleteResult = hcncService.deleteCode(code);
		if(deleteResult > 0 ) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "코가 삭제 되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드가 삭제되지 않았습니다.");
		}
		return result;
	}
	
	@RequestMapping(value="/deleteCodeDtl.do")
	public NexacroResult deleteCodeDtl(@ParamVariable(name="ptCode") String ptCode,
										@ParamVariable(name="code") String code) {
		NexacroResult result = new NexacroResult();
		
		HashMap<String, Object> param = new HashMap<String, Object>();
		
		param.put("ptCode", ptCode);
		param.put("code", code);
		int deleteResult = hcncService.deleteCodeDtl(param);
		if(deleteResult > 0 ) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "코드명이 삭제되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "코드명이 삭제되지 않았습니다.");
		}
		return result;
	}
}
