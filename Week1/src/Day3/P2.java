 package Day3;

public class P2 {
	public int solution (int seat, String[][] passengers) {
		int takeOn = 0;
		int takeOff = 0;
		
		for(int i = 0; i < passengers.length; i++) {
			takeOn = func1(passengers[i]);
			takeOff = func2(passengers[i]);
		}
		
		int passenger = takeOn - takeOff;
		int result  = seat - passenger;
		return result;
	}

	int func1 (String[] station) {
		int num = 0;
		for(int i = 0; i < station.length; i++) {
			if(station[i].equals("On")) {
				num += 1;
			}
		} return num;
	}
	
	int func2 (String[] station) {
		int num = 0;
		for(int i = 0; i < station.length; i++) {
			if(station[i].equals("Off")) {
				num += 1;
			}
		} return num;
	}
	
	int result;
}
