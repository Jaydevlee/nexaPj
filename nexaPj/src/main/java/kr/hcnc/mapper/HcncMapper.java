package kr.hcnc.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("hcncMapper")
public interface HcncMapper {
	public String selectTest();
	public int insertTestData(HashMap<String, Object> param);
	
	// 조회
	List<Map<String, Object>> selectBoard(HashMap<String, Object> param);
	List<Map<String, Object>> selectBoardList(HashMap<String, Object> param);
	List<Map<String, Object>> selectBoardDetail(HashMap<String, Object> param);
	List<Map<String, Object>> selectCode();
	List<Map<String, Object>> selectCodeList(HashMap<String, Object> param);
	List<Map<String, Object>> selectCodeListDtl(HashMap<String, Object> param);
	
	// 작성
	int insertBoard(Map<String, Object> param);
	int insertCode(Map<String, Object> param);
	int insertCodeDtl(Map<String, Object> param);
	
	// 수정
	int updateBoard(Map<String, Object> param);
	int updateCode(Map<String, Object> param);
	int updateCodeDtl(Map<String, Object> param);
	
	// 삭제
	int updateDelYN(int boardNo);
	int updateDelYNlist(List<String> boardNoList);
	int deleteBoard(int boardNo);
	int deleteBoardList(List<String> boardNoList);
	int deleteCode(String code);
	int deleteCodeDtl(HashMap<String, Object> param);
}
