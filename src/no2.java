public class no2 {
    public static int pyramidCharcter(int num) {
        if (num < 4 || num > 10) {
            System.out.println("Invalid number");
        } else {
            String string = "";
            String symbol = "";
            for (int i = 1; i <= num; i++) {
                string += "#";
            }
            for (int i = 1; i <= num - 2; i++) {
                for (int j = 1; j <= num - 2; j++) {
                    if (num % 2 == 0) {
                        if (j == num - num / 2) {
                            symbol += "||";
                        } else {
                            symbol += " ";
                        }
                    } else {
                        if (j == num - (num - 1) / 2) {
                            symbol += "|";
                        } else {
                            symbol += " ";
                        }
                    }
                }
                symbol += "\n";
            }
            System.out.print(string + "\n" + symbol + string + "\n");
        }
        return num;
    }

    public static void main(String[] args) {
        int num = 7;
        pyramidCharcter(num);
    }
}