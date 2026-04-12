package kr.hcnc.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("hcncMapper")
public interface HcncMapper {
	public String selectTest();
	public int insertTestData(HashMap<String, Object> param);
	List<Map<String, Object>> selectBoard(HashMap<String, Object> param);
	List<Map<String, Object>> selectBoardList(HashMap<String, Object> param);
	List<Map<String, Object>> selectBoardDetail(HashMap<String, Object> param);
	
	
	int insertBoard(HashMap<String, Object> param);
	int updateBoard(HashMap<String, Object> param);
	int deleteBoard(int boardNo);
}
