public class no1 {
    public static String reverse(String word) {
        char str[] = word.toCharArray();
        int n = str.length;
        int start = 0, end = n - 1;
        while (start <= end) {
            char temp = str[start];
            str[start] = str[end];
            str[end] = temp;
            start++;
            end--;
        }
        String reversedString = String.valueOf(str);
        return reversedString;
    }

    public static String pyramidCharacter(String kata) {
        String array[] = new String[kata.length()];
        for (int i = 0; i < kata.length(); i++) {
            String words = reverse(kata).substring(0, i + 1);
            words = i % 2 == 0 ? reverse(words) : words;
            array[i] = words;
            for (int j = kata.length(); words.length() <= j; j--) {
                System.out.print(" ");
            }
            System.out.println(array[i]);
        }
        return kata;
    }

    public static void main(String[] args) {
        String kata = "3oz4spoon";
        pyramidCharacter(kata);
    }
}
