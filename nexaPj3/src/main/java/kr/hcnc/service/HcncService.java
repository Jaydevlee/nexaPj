package kr.hcnc.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.transaction.Transactional;


import org.springframework.stereotype.Service;

import kr.hcnc.mapper.HcncMapper;

@Service("hcncService")
public class HcncService {
	@Resource(name = "hcncMapper")
	public HcncMapper hcncMapper;
	
	public List<Map<String,Object>> selectLoans(HashMap<String, Object> param) {
		List<Map<String, Object>> list = hcncMapper.selectLoans(param);
		return list;
	}
	
	
	public List<Map<String,Object>> selectName() {
		List<Map<String, Object>> list = hcncMapper.selectName();
		return list;
	}
	
	public List<Map<String,Object>> selectBook() {
		List<Map<String, Object>> list = hcncMapper.selectBook();
		return list;
	}
	
	public List<Map<String,Object>> selectMembers(){
		List<Map<String, Object>> list = hcncMapper.selectMembers();
		return list;
	}
	
	public int insertLoan(Map<String, Object> param) {
		int result = hcncMapper.insertLoan(param);
		return result;
	}
	
	public int insertMem(Map<String, Object> param) {
		int result = hcncMapper.insertMem(param);
		return result;
	}
	
	public int updateStauts(Map<String, Object> param) {
		int result = hcncMapper.updateStatus(param);
		return result;
	}
}	
