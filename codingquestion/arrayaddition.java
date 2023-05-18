// Have the function ArrayAdditionI(arr) take the array of numbers stored in arrand return the string trueif any combination of numbers in the array (excluding the largest number) can be added up to equal the largest numberin the array, otherwise return the string false. For example: if arrcontains [4, 6, 23, 10, 1, 3] the output should return truebecause 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers.
// Examples
// Input: [5,7,16,1,2]
// Output: falseInput: [3,5,-1,8,12]
// Output: true



import java.util.*;
public class arrayaddition {
    public static void main(String args[]){

    
    Scanner in = new Scanner(System.in);
    System.out.println("Enter array length");
    int len = in.nextInt();
    System.out.println("Enter array elements");
    int arr[]=new int[len];
    for(int i=0;i<len;i++){
        arr[i]=in.nextInt();               //taking input
    }
    System.out.println(arraddition(arr));
    in.close();
    }
    public static boolean arraddition(int arr[]){        //function will return boolean value
        int max=Integer.MIN_VALUE;                       //taking the minimum value first and will update and check with all values
        int sum=0;
        for(int i=0;i<arr.length;i++){
           if(arr[i]>max)
           max=arr[i];
        }                                                 // till here we will get our maximum or largest number
        for(int i=0;i<arr.length;i++){
            if(arr[i] != max)
            sum+=arr[i];                                 //calculating sum excluding largest number
        }
        int diff = sum - max;                           //calculating the difference between the sum and largest number
        for(int i=0;i<arr.length;i++){                  //we will check if that difference value is present in the array or not if present it will return true else false
            if(arr[i] == diff)
            return true;
        }
        return false;
    }
}
