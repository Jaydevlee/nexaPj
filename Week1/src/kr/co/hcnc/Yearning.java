package kr.co.hcnc;

import java.util.HashMap;
import java.util.Map;

public class Yearning {

	 public int[] solution(String[] name, int[] yearning, String[][] photo) {
	        int[] answer = new int[photo.length];
	        Map<String, Integer> mapper = new HashMap<>();
	        
	        for(int i=0; i<name.length; i++){
	            mapper.put(name[i], yearning[i]);
	        }
	        
	        for(int i=0; i<photo.length; i++){
	            int score = 0;
	            for(String people:photo[i]){
	                score += mapper.getOrDefault(people, 0);
	            }
	            answer[i] = score;
	        }
	        return answer;
	    }

}
