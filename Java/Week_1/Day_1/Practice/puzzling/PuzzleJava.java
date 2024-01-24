import java.util.ArrayList;
import java.util.Random;

public class PuzzleJava{
    public ArrayList<Integer>getTenRolls(){

    ArrayList<Integer> randomTenRolls = new ArrayList<Integer>();
    for(int i=0;i<10;i++){
        Random roll = new Random();
        int x = roll.nextInt(20)+1;
        randomTenRolls.add(x);
    }
    return randomTenRolls;
    }

    public char getRandomLetter(){
        char[] lowerCaseAlphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        Random letter = new Random();
        int x = letter.nextInt(25);
        char rLetter =lowerCaseAlphabet[x];
        return rLetter;
    }
    
    public  String generatePassword(){
        String randomPassword = new String();
        for(int i=0;i<8;i++){
            randomPassword+=getRandomLetter();
        }
        return randomPassword;
    }
    public ArrayList<String> getNewPasswordSet(int Loop){
        ArrayList<String> randomPasswordSet = new ArrayList<String>();
        for (int i=0;i<8;i++){
            randomPasswordSet.add(generatePassword());
        }
        return randomPasswordSet;
    }

    }
    