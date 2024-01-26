public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney;


// CONSTRUCTOR
    public BankAccount(double checkingBalance,double savingsBalance){
    this.checkingBalance=checkingBalance;
    this.savingsBalance=savingsBalance;
    accounts++;
    totalMoney+=((this.savingsBalance)+(this.checkingBalance));
}


// Methods

public void depositCheckingBalance(double money){
    this.setCheckingBalance(money+getCheckingBalance());
}
public void depositSavingBalance(double money){
    this.setSavingBalance(money+getSavingBalance());
}


// withdraw
public void withdrawCheckingBalance(double money){
    if(getCheckingBalance()>money){
    this.setCheckingBalance(getCheckingBalance()-money);
    System.out.printf("Here is your money");

    }else{
        System.out.printf("There are insufficient funds!");
    }
}

public void withdrawSavingBalance(double money){
    if(getSavingBalance()>money){
    this.setSavingBalance(getSavingBalance()-money);
    System.out.printf("Here is your money");
    }else{
        System.out.printf("There are insufficient funds!");
    };
}

//getBalance
public void totalBalance(){
    System.out.printf("total checking balance: "+getCheckingBalance());
    System.out.printf("total saving balance: "+getSavingBalance());
}






// GETTERS
    public double getCheckingBalance(){
        return this.checkingBalance;
    } 
    public void setCheckingBalance(double newValue){
        this.checkingBalance=newValue;
    }

    public double getSavingBalance(){
        return this.savingsBalance;
    }
    public void setSavingBalance(double newValue){
        this.savingsBalance=newValue;
    }

    public static int getAccount(){
        return BankAccount.accounts;
    }
    public static double getTotalMoney(){
        return BankAccount.totalMoney;
    }
}