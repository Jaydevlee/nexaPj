package kr.hcnc.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("hcncMapper")
public interface HcncMapper {
	List<Map<String, Object>> selectLoans(HashMap<String, Object> param);
	List<Map<String, Object>> selectBook();
	List<Map<String, Object>> selectName();

	
	int insertMem(Map<String, Object> param);
	int insertLoan(Map<String, Object> param);
	
	int updateLoans(Map<String, Object> param);
	int updateStatus(Map<String, Object> param);
}
