package kr.hcnc.web;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kr.hcnc.service.HcncService;

@Controller
public class HcncController {
	@Resource(name="hcncService")
	public HcncService hcncService;
	
	@RequestMapping("/selectLoans.do")
	public NexacroResult selectLoans (@ParamVariable(name="LOAN_ID", required=false) String LOAN_ID,
									@ParamDataSet(name="dsSearch", required=false) Map<String, Object> dsSearch) {
		NexacroResult result =  new NexacroResult();
		HashMap<String, Object> param = new HashMap<String, Object>();
		if(dsSearch != null) {
			param.put("searchCmb", dsSearch.get("searchCmb"));
			param.put("searchVal", dsSearch.get("searchVal"));
		}
		param.put("LOAN_ID", LOAN_ID);
		System.out.println(hcncService.selectLoans(param));
		result.addDataSet("dsLoanList", hcncService.selectLoans(param));
		return result;
	}
	
	@RequestMapping("/selectName.do")
	public NexacroResult selectName () {
		System.out.println("이름 가져오기");
		NexacroResult result =  new NexacroResult();
		System.out.println(hcncService.selectName());
		result.addDataSet("dsListName", hcncService.selectName());
		return result;
	}
	
	@RequestMapping("/selectBook.do")
	public NexacroResult selectBook () {
		NexacroResult result =  new NexacroResult();
		System.out.println(hcncService.selectBook());
		result.addDataSet("dsListBook", hcncService.selectBook());
		return result;
	}
	
	@RequestMapping("/selectMembers.do")
	public NexacroResult selectMembers() {
		NexacroResult result =  new NexacroResult();
		System.out.println(hcncService.selectMembers());
		result.addDataSet("dsListMem", hcncService.selectMembers());
		return result;
	}
	
	@RequestMapping("/insertLoan.do")
	public NexacroResult insertLoans(@ParamDataSet(name="dsLoan") Map<String, Object> dsLoan) {
		NexacroResult result = new NexacroResult();
		System.out.println(dsLoan);
		int insertResult = hcncService.insertLoan(dsLoan);
		if(insertResult > 0) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "대출되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "대출실패!");
		}
		return result;
	}
	
	@RequestMapping("/insertMember.do")
	public NexacroResult insertMembmer(@ParamDataSet(name="dsMember") Map<String, Object> dsMember) {
		NexacroResult result = new NexacroResult();
		int insertResult = hcncService.insertMem(dsMember);
		if(insertResult > 0) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "회원가입되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "회원가입실패 관리자에게 문의해주세요.");
		}
		return result;
	}
	
	@RequestMapping("/updateStatus.do")
	public NexacroResult updateStatus(@ParamDataSet(name="dsLoan") Map<String, Object> dsLoan) {
		NexacroResult result = new NexacroResult();
		int updateResult = hcncService.updateStauts(dsLoan);
		if(updateResult > 0) {
			result.addVariable("ErrorCode", 0);
			result.addVariable("ErrorMsg", "반납되었습니다.");
		} else {
			result.addVariable("ErrorCode", -1);
			result.addVariable("ErrorMsg", "반납실패 관리자에게 문의해주세요.");
		}
		return result;
	}
}
