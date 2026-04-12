package kr.co.hcnc;

public class Day3_B extends Day3_A{
	Day3_B(){
		
	}
	
	Day3_B(String a, String b, String c, String d, String e){
		setString(a, b, c, d, e);
	}
	
	
	
	// 동일한 변수명을 사용할 경우, this.을 사용하여 매개변수와 실제 변수를 구분
	public void setString (String a, String b, String c, String d, String e) {
		this.a = a;
		this.b = b;
		this.c = c;
		this.d = d;
		this.e = e;
	}
	
	// 상속 받은 Day3_A의 protected 변수에 대하여 출력
	public void output() {
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);
		System.out.println(d);
		System.out.println(e);
		
	}
}
