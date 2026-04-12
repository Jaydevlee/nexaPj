package kr.co.hcnc;

public class Boxes {

	public int solution(int n, int w, int num) {
        int answer = 0;
        int box=1;
        int colNum=0;
        int rowNum=0;
        int cnt=0;
        int rows = (n%w == 0) ? (n / w) : (n / w + 1); ;
        
        int[][] boxes = new int[rows][w];
        // 상자 쌓기
        for(int i = 0; i < rows; i++) {
            if (i % 2 == 0) {
                // 왼쪽에서 오른쪽으로
                for(int j = 0; j < w; j++) {
                    if (box > n) break;
                    boxes[i][j] = box;
                    
                   
                    if (box == num) {
                        rowNum = i;
                        colNum = j;
                    }
                    box++;
                }
            } else {
                // 오른쪽에서 왼쪽으로 (역방향)
                for(int j = w - 1; j >= 0; j--) {
                    if (box > n) break; //
                    boxes[i][j] = box;
                    
                    if (box == num) {
                        rowNum = i;
                        colNum = j;
                    }
                    box++;
                }
            }
        }
        
        // 꺼내야 되는 상자의 갯수
        for(int k=rowNum; k<rows; k++) {
            if(boxes[k][colNum] != 0)
                cnt++;
        }
        answer = cnt;
        return answer;
    }

}
