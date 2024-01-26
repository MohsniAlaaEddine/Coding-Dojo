public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
            BankAccount account1= new BankAccount(2252.5,231.5);
            BankAccount account2= new BankAccount(3552.5,330.5);
            BankAccount account3= new BankAccount(1452.5,445.5);

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        account1.depositCheckingBalance(210);
        account1.totalBalance();

        account2.depositSavingBalance(135.2);
        account2.totalBalance();

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        account3.withdrawCheckingBalance(1100);
        account3.totalBalance();
        
        account1.withdrawCheckingBalance(980);
        account1.totalBalance();
        


        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.printf("num of bank account is "+BankAccount.getAccount());
        System.out.printf("The total money is "+BankAccount.getTotalMoney());

    }
}
