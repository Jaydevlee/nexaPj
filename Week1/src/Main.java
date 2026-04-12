import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("Hello world");
		
		int a;
		a = 1; // 2진수로 표현 01111111 1111111 11111111 11111111 
		
		long b = 1;
		System.out.println("int a = " + a);
		System.out.println("long b = " + b);
		
		float c = 0.1f; //float는 f를 붙여야 한다
		double d = 0.0;
		
		System.out.println("float c = " + c);
		System.out.println("double d = " + d);
		
		int e = 05; //8 진수 5 
		e = 075; // 61
		
		int f = 0xAC; //172
		System.out.println("int(octal) e = " + e);
		System.out.println("int(hex) f = " + f);
		
		
		// 사직연산 연산자 + - * / % ++ --
		// a = int b = long
		System.out.println("a+b = " + (a + b));	// 정수와 정수
		System.out.println("a+d = " + (a + d)); // 정수와 실수
		System.out.println("a+f = " + (a + f)); // 정수와 16진수 덧셈
		System.out.println("a-b = " + (a - b)); 
		System.out.println("a-b = " + (a - b));
		System.out.println("a-f = " + (a - f)); 
		
		a = 7;
		b = 4;
		
		System.out.println("a % b = " + (a % b));
		System.out.println("b % a = " + (b % a));
		
		// --, ++ 의 위치에 따른 차이
		System.out.println("++a = " + ++a);
		System.out.println("a = " + a);
		
		boolean g;
		g= a < b; // 8 > 4 true
		System.out.println(g);
		
		char h;
		h = 'a';
		System.out.println("char h = " + h);
		h = 97;
		System.out.println("char h = " + h);
		h = '\u0061';
		System.out.println("char h = " + h);
		
		String i = "abc";
		String j = "abc";
		
		System.out.println("String i = " + i);
		System.out.println("String j = " + j);
		
		g =  i == j;
		System.out.println(g);
		
		g = i.equals(j);
		System.out.println(g);
		// == 문자열 주소 비교, equals = 값을 비교
		
		j = "abc";
		j += "def";
		System.out.println("String j = " + j);
		
		StringBuffer k = new StringBuffer();
		k.append("abc");
		k.append("def");
		k.insert(0, "0");
		System.out.println("StringBuffer k = " + k);
		
		j = k.toString(); //StringBuffer자료형을 String으로 표현
		System.out.println("String j = " + j);
		
		// 배열 [] [][] [][][] 3차원 배열까지 존재
		int[] l = {0, 1, 2, 3, 4, 5};
		int [] m = new int[6];

		System.out.println("int[] l = " + l); // 해당 구문은 배열의 주소를 출력한다.
		System.out.println("int[] m = " + m);
		
		System.out.println("int[] l[0] = " + l[0]);
		System.out.println("int[] l.length = " + l.length);
		
		// 맵
		// 키 => 값
		Map<String, Object> n; //object를 사용한 이유는 어떤 자료형의 값이 올 지 알 수 없기 때문이다.
		n = new HashMap<String, Object>();
		n.put("key1", a);
		n.put("key2", h);
		n.put("key3", j);
		
		System.out.println("Map n = " + n);
		System.out.println("Map n.get(\"key3\") = " + n.get("key3"));
		
		final int o = 10;
		System.out.println("final int o = " + o);

		ArrayList<Map<String, Object>> p;
		p = new ArrayList<Map<String, Object>>();
		
		System.out.println("Arraylist p = " + p);
		p.add(n);
		p.add(n);
		p.add(n);
		p.add(n);
		System.out.println("Arraylist p = " + p);
		System.out.println("Arraylist p.get(0) = " + p.get(0));
		
		
		//조건문
		// & && | ||의 차이
		// || > OR 일 경우 비교할 때 맨 앞의 조건이 true이면, 뒤 조건은 연산하지 않음
		// && > AND일 경우 맨 앞의 조건이 false라면, 뒤 조건은 연산하지 않음
		if(1 != 1) {
			System.out.println("1==1");
		} else if(1 == 2) {
			System.out.println("1==2");
		} else {
			System.out.println("else");
		}
		
		if(1 == 1 && false) {
			System.out.println("1==1 && false");
		} else {
			System.out.println("1==1 && false > else");
		}
		
		String a1  = null;
		String a2 = "";
		if(true || a1.equals(a2)) {
			System.out.println("!!!!!");
		}
		if(false && a1.equals(a2)) {
			System.out.println("!!!!1");
		} else {
			System.out.println("!!!!2");
		}
	}

}
