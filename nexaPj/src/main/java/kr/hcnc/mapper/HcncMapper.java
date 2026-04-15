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
	List<Map<String, Object>> selectCode();
	List<Map<String, Object>> selectCodeList(HashMap<String, Object> param);
	List<Map<String, Object>> selectCodeListDtl(HashMap<String, Object> param);
	
	int insertBoard(Map<String, Object> param);
	int insertCode(Map<String, Object> param);
	int updateBoard(Map<String, Object> param);
	int updateCode(Map<String, Object> param);
	int deleteBoard(int boardNo);
	int deleteBoardList(List<String> boardNoList);
}
