class User:
    def __init__(self,first_name,last_name,email,age):
        self.first_name=first_name
        self.last_name=last_name
        self.email=email
        self.age=age
        self.is_rewards_member=False
        self.gold_card_points=0

    def display_info(self):
        print(f"first name: {self.first_name}\nsecond name: {self.last_name}\nemail: {self.email}\nage: {self.age}")
        print(f"Points : {self.gold_card_points}")


    
    def enroll(self):
        self.is_rewards_member=True
        self.gold_card_points=200
    

    def spend_points(self,amount):
        if amount>self.gold_card_points:
            print("error")
        else:
            self.gold_card_points-=amount
            print(f"gold_card_points: {self.gold_card_points}")




user2 =User("joe","doe","joedoe@gmail.com",30)
user1 = User("alaa","mohsni","alaamohsni05@gmail.com",23)
user3 =User("sam","kal","samkal@gmail.com",80)

user1.display_info()
user1.enroll()
user1.spend_points(50)
user1.display_info()
print("--------------------------")
user2.display_info()
user2.enroll()
user2.spend_points(80)
user2.display_info()
print("--------------------------")
user3.display_info()
user3.enroll()
user3.spend_points(40)
user3.display_info()

if user1.is_rewards_member==False:
    user1.enroll()
