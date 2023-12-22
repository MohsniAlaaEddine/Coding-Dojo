# - variable declaration
num1 = 42
num2 = 2.3

boolean = True
string = 'Hello World'
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
fruit = ('blueberry', 'strawberry', 'banana')
# - log statement
print(type(fruit))
print(pizza_toppings[1])
# add value
pizza_toppings.append('Mushrooms')
# - log statement
print(person['name'])
#  change value
person['name'] = 'George'
person['eye_color'] = 'blue'
# log statement
print(fruit[2])
# conditional
if num1 > 45:
    # - log statement
    print("It's greater")
# conditional
else:
    print("It's lower")
# conditional
if len(string) < 5:
    # - log statement
    print("It's a short word!")
elif len(string) > 15:
    # - log statement
    print("It's a long word!")
else:
    # - log statement
    print("Just right!")
# for loop
for x in range(5):
    # - log statement
    print(x)
for x in range(2,5):
    # - log statement
    print(x)
for x in range(2,10,3):
    # - log statement
    print(x)
x = 0
# while loop
while(x < 5):
    # - log statement   
    print(x)
    x += 1
# delete value
pizza_toppings.pop()
# delete value
pizza_toppings.pop(1)
# - log statement  
print(person)
# delete value
person.pop('eye_color')
# - log statement  
print(person)
# for loop
for topping in pizza_toppings:
    # conditional
    if topping == 'Pepperoni':
        continue
    # - log statement  
    print('After 1st if statement')
    if topping == 'Olives':
        break

def print_hello_ten_times():
    # for loop
    for num in range(10):
        # - log statement  
        print('Hello')

print_hello_ten_times()

def print_hello_x_times(x):
        # for loop
    for num in range(x):
        # - log statement 
        print('Hello')

print_hello_x_times(4)

def print_hello_x_or_ten_times(x = 10):
    # for loop
    for num in range(x):
        # - log statement 
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)


"""
Bonus section
"""

# print(num3)
# num3 = 72
# fruit[0] = 'cranberry'
# print(person['favorite_team'])
# print(pizza_toppings[7])
#   print(boolean)
# fruit.append('raspberry')
# fruit.pop(1)
