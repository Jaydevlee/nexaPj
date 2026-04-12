
public class P3 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// https://school.programmers.co.kr/learn/courses/30/lessons/340205
		int number = 29;
		int answer = 0;
		
		for(int i = 0; i<number; i++) {
			answer += number % 100;
			number /= 100; 
	
		}
		System.out.println(answer);
		
		int number2 = 981208;
		int answer2 = 0;
		
		for(int i = 0; i<number2; i++) {
			answer2 += number2 % 1000;
			number2 /= 1000; 
		}
		System.out.println(answer2);
	}

}
