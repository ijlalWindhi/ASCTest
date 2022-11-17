public class no3 {
    public static int pyramidXOX(int num) {
        String string = "";
        for (int i = 1; i <= num; i++) {
            for (int j = 1; j <= num - i; j++) {
                string += " ";
            }
            for (int k = 0; k < 2 * i - 1; k++) {
                if (k % 2 == 0) {
                    string += "X";
                } else {
                    string += "0";
                }
            }
            string += "\n";
        }
        System.out.print(string);
        return num;
    }

    public static void main(String[] args) {
        int num = 10;
        pyramidXOX(num);
    }
}
