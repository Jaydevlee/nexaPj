package kr.hcnc.web;

import java.util.HashMap;
import javax.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamVariable;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import kr.hcnc.service.HcncService;

@Controller
public class HcncController {
	@Resource(name = "hcncService")
	public HcncService hcncService;
	
	@RequestMapping(value="/selectList.do")
	public NexacroResult selectBoardList(@ParamVariable(name="searchCmb") String searchCmb,
									@ParamVariable(name="searchVal") String searchVal) {
		System.out.println("seachCmb=" + searchCmb);
		System.out.println("searchVal=" + searchVal);
		NexacroResult result = new NexacroResult();
        HashMap<String, Object> param = new HashMap<String, Object>();
        System.out.println(hcncService.selectBoardList(param));
        result.addDataSet("dsList", hcncService.selectBoardList(param));
		return result;
		}
	}