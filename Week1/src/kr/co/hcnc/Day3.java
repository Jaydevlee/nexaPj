package kr.co.hcnc;
import java.io.IOException;
import java.util.ArrayList;

public class Day3 {

	public static void main(String[] args) {
		// switch case
		// switch()
		String a  = "2";
		switch (a) {
		case "1" :
			System.out.println("a=1");
			break;
		case "2" : 
			System.out.println("a=2");
			break;
		default : 
			System.out.println("a!=1 and a!=2");
			break;
		}
		// for
		// for(변수선언/ 조건부 /실행부)
		int i = 0;
		for(; i < 10; ) {
			//if(i==7) continue; //continue 뒤 코드를 실행하지 않고 다시 반복문을 실행
			//if(i==8) break; // 뒤 코드를 실행하지 않고 반복문 탈출
			System.out.println("i = " + i);
			i++;
		}
		System.out.println(i);
		// for each
		// for(내가 사용할 변수 : 기준이 되는 변수)
		int[] b = new int[10];
		for(int j = 0; j < b.length; j++) {
			b[j] = j;
			System.out.println("b[j] = " + b[j]);
		}
		for(int c : b) {
			System.out.println(c);
		}
		
		ArrayList<String> e =new ArrayList<String>();
		e.add("a");
		e.add("b");
		e.add("c");
		e.add("d");
		e.add("e");
		for(String f : e) {
			System.out.println(f);
		}
		
		// while(조건문) true는 무한반복, 특정 조건일 때 break를 거는 조건이 필요하다.
		int g = 0;
		while(true) {
			System.out.println("g = " + g);
			g++;
			if(g == 3) break;
		}	
			System.out.println("-----");
			// 접근제어자
			Day3_2 h = new Day3_2();
			System.out.println("outpout1 = " + h.output1());
			System.out.println("outpout1 = " + h.output2());
			System.out.println("outpout1 = " + h.output3());
			System.out.println("output1(true) = " + h.output1(true));
			System.out.println("output1(false) = " + h.output1(false));
			System.out.println("-----");
			
			// 상속 / 생성자
			Day3_B day3_b = new Day3_B();
			day3_b.setString("a", "b", "c", "d", "e");
			day3_b.output();
			
			Day3_B day3b2 = new Day3_B("1", "2", "3", "4", "5");
			day3b2.output();
			System.out.println("-----");
			
			
			Day3_CImpl day3c = new Day3_CImpl();
			day3c.output();
			System.out.println(day3c.sum(10,  5));
			System.out.println(day3c.concat("asd", "zxc"));
			
			System.out.println("-----");
			String a1 = null;
			String a2 = "";
			
			try {
				// 실행할 코드
			 if(a1.equals(a2)) {
				 System.out.println("a1 equals a2");
			 } else {
				 System.out.println("a1 not equals a2");
			 }
				
			} catch (Exception ee) {
				System.out.println(ee);
				ee.printStackTrace();
				System.out.println("오류가 발생했습니다.");
			} finally {
				// 코드 실행이 끝난 후 무조건 실행
				System.out.println("finally 실행부로, 성공여부에 상관업시 무조건 실행됩니다.");
			}
			
			//오버로딩 / 오버라이딩
			HouseDog houseDog = new HouseDog();
			houseDog.setName("강아지");
			houseDog.sleep();
			houseDog.sleep(1);
			houseDog.sleep_super();
			
			// 다형성
			Animal dog = new Dog(); // new Animal() 대신 new Dog()로 선언 가능 -> Dog라는 클래스가 Animal이라는 클래스를 상속받고 있기 때문
			Dog buldog = new HouseDog();
			buldog.setName("buldog");
			buldog.sleep();
			
	}

}
