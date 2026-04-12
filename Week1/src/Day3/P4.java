package Day3;

import java.util.*;

public class P4 {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int year = s.nextInt();
		s.nextLine();
		String age_type = s.nextLine();
		int age = 0;
		if(age_type.equals("Korean")) {
			age = 2026 - year + age;
		} else if (age_type.equals("Year")) {
			age = 2026- year;
		}
		

	}

}
