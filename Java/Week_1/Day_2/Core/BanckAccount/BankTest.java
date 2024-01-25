public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
            Account account1= new Account(2252.5,231.5);
            Account account2= new Account(3552.5,330.5);
            Account account3= new Account(1452.5,445.5);

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
        System.out.printf("num of bank account is "+Account.getAccount());
        System.out.printf("The total money is "+Account.getTotalMoney());

    }
}
