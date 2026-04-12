package kr.hcnc.mapper;

import java.util.HashMap;

import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("hcncMapper")
public interface HcncMapper {
	public String selectTest();

	public int insertTestData(HashMap<String, Object> param);
}
