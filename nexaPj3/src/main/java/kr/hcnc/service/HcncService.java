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
	
	public String selectTest() {
		String result = hcncMapper.selectTest();
		System.out.println("result = " + result);
		return result;
	}
	
	@Transactional
	public int insertTestData(HashMap<String, Object> param) {
		System.out.println("HcncService > insertTestData");
		System.out.println("result = " + param);
		int result = hcncMapper.insertTestData(param);
		return result;
	}
	
	@Transactional
	public List<Map<String, Object>> selectBoardList(HashMap<String, Object> param){
		List<Map<String, Object>> list = hcncMapper.selectBoardList(param);
		return list;
	}
	
	@Transactional
	public List<Map<String, Object>> selectBoardDetail(HashMap<String, Object> param) {
		List<Map<String, Object>> result = hcncMapper.selectBoardDetail(param);
		return result;
	}
	
	@Transactional
	public int insertBoard(HashMap<String, Object> param){
		System.out.println("게시글 등록 시작");
		int result = hcncMapper.insertBoard(param);
		System.out.println("게시글 등록 완료");
		return result;
	}
	
	@Transactional
	public int updateBoard(HashMap<String, Object> param) {
		System.out.println("수정 시작");
		int result = hcncMapper.updateBoard(param);
		System.out.println("수정 끝");
		return result;
	}
	
	@Transactional
	public int deleteBoard(int boardNo) {
		System.out.println("삭제 시작");
		int result = hcncMapper.deleteBoard(boardNo);
		System.out.println("수정 끝");
		return result;
		}

}
