// Have the function ArithGeo(arr) take the array of numbers stored in arrand return the string "Arithmetic"if the sequence follows an arithmetic pattern or return "Geometric"if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
// Examples
// Input: [5,10,15]
// Output: ArithmeticInput: [2,4,16,24]
// Output: -1

import java.util.*;

class apgp {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter array length");
        int len = in.nextInt();
        int arr[] = new int[len];
        System.out.println("Enter array elements");
        for (int i = 0; i < len; i++) {
            arr[i] = in.nextInt();
        }
        Arrays.sort(arr);                       //sorting the array first
        System.out.println(ArithGeo1(arr));
        System.out.println(ArithGeo2(arr));
        // for checking aritmetic pattern --> an = a0 + (n-1)d;
        // int n = len;
        // int a = arr[0];
        // int d = (arr[n-1]-arr[0]) / (n-1);
        // for(int i=0;i<len;i++){
        // if(arr[0] != d)

        in.close();
    }

    public static String ArithGeo1(int arr[]) {
        int n = arr.length;
        int a = arr[0];
        int d = (arr[n - 1] - arr[0]) / (n - 1);         //trying to solve with mathematics concepts 
        for (int i = 0; i < arr.length; i++) {
            int val = arr[i];
            int calval = a + i * d;                      //check if original value and calculated value are equal or not
            if (val != calval)
                return "-1";
        }
        return "Arithmetic";
    }

    public static String ArithGeo2(int arr[]) {
        // int n = arr.length;
        int a = arr[0];
        // formula = > an = a0 * r^n-1
        int r = arr[1] / arr[0];                      //trying to find common ratio
        // int r = (int)Math.pow(quo,1/(n-1));
        for (int i = 0; i < arr.length; i++) {
            int val = arr[i];
            int calval = a * (int) Math.pow(r, i);      //calculating value with its mathematical formula
            // System.out.println(calval);
            if (val != calval)
                return "-1";
        }
        return "Geometric";

    }

}
