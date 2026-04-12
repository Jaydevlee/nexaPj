package kr.co.hcnc;

public class HouseDog extends Dog{
	// 오버라이딩
	public void sleep() {
		System.out.println(name + " is sleep in house");
	}
	
	// 오버로딩
	public void sleep(int hour) {
		System.out.println(name + " is sleep in house " + hour + " hours");
	}
	public void sleep_super() {
		super.sleep();
	}
}
