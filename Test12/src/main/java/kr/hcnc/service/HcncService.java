package kr.hcnc.service;

import java.util.HashMap;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;
import kr.hcnc.mapper.HcncMapper;

@Service("hcncService")
public class HcncService extends EgovAbstractServiceImpl{
	@Resource(name = "hcncMapper")
	private HcncMapper hcncMapper;
	
	public String selectTest() {
		String result = hcncMapper.selectTest();
		System.out.println("result = " + result);
		return result;
	}
	
	public int insertTestData(HashMap<String, Object> param) {
		System.out.println("HcncService > insertTestData");
		System.out.println("result = " + param);
		int result = hcncMapper.insertTestData(param);
		return result;
	}
}
