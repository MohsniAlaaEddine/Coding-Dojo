class BankAccount:
    bank=[]

    def __init__(self,int_rate,balance) :
        self.int_rate=int_rate
        self.balance=balance
        BankAccount.bank.append (self)
    

    def deposit(self,amount):
        self.balance+=amount
        return self

    def withdraw(self,amount):
        if self.balance<amount:
            print("Insufficient funds: Charging a $5 fee")
            self.balance-=5
        else:
            self.balance-=amount
        return self

    def display_account_info(self):
        print (f"{self.balance}$")
        return self
    
    def yield_interest(self):
        self.balance=self.balance+(self.balance*self.int_rate)
        return self
    
    @classmethod
    def bankinfo(cls):
        for i in BankAccount.bank:
            print(f"the interest rate is {i.int_rate}and the balance is {i.balance}$")

    

# acc1=BankAccount(0.01,0)  
# acc2=BankAccount(0.01,500)      

# acc1.deposit(60).withdraw(20).display_account_info().yield_interest()
# acc2.deposit(20).withdraw(800).display_account_info().yield_interest()

# BankAccount.bankinfo()  