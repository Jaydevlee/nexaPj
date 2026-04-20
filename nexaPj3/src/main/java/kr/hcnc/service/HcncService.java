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
	

}
