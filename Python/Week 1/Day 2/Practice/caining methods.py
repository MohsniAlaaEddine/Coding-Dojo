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
        return self


    
    def enroll(self):
        self.is_rewards_member=True
        self.gold_card_points=200
        return self

    def spend_points(self,amount):
        if amount>self.gold_card_points:
            print("error")
        else:
            self.gold_card_points-=amount
            print(f"gold_card_points: {self.gold_card_points}")
        return self




user2 =User("joe","doe","joedoe@gmail.com",30)
user1 = User("alaa","mohsni","alaamohsni05@gmail.com",23)
user3 =User("sam","kal","samkal@gmail.com",80)

user1.display_info().enroll().spend_points(50).display_info()
user2.enroll().spend_points(80).display_info()
