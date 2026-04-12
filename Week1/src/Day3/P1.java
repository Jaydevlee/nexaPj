package Day3;

import java.util.Scanner;

public class P1 {
	public int cal (int storage, int usage, int[] change) {
		int total = 0;
		int i = 0;
		for(; i < change.length;) {
			usage += usage * (change[i] / 100);
			total += usage;
			if(total > storage) {
				return i;
			}
		} return -1;
	}

	public static void Main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int storage = Integer.parseInt(sc.nextLine());
		int usage = Integer.parseInt(sc.nextLine());
		int[] change = new int[10];
		for(int i = 0; i < change.length; i++) {
			change[i] = Integer.parseInt(sc.nextLine());
		}
		
		P1 solution = new P1();
		int result = solution.cal(storage, usage, change);
		System.out.println(result);
		sc.close();
	}
}
