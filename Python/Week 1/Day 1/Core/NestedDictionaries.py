# # Challenge yourself!

# person = {"first_name": "Ada", "last_name": "Lovelace", "age": 42, "is_organ_donor": True}
# # Create a another person dictionary called person_2 and print it to the terminal

# capitals = {}
# capitals["svk"] = "Bratislava"
# capitals["deu"] = "Berlin"
# capitals["dnk"] = "Copenhagen"
# # Add 2 key-value pairs to this dictionary.
# person['first_name']="alaa"
# # print the capitals dictionary to see how it changed!
# print(person)

# ---------------EX1--------------

# x = [ [5,2,3], [10,8,9] ] 
# students = [
#     {'first_name':  'Michael', 'last_name' : 'Jordan'},
#     {'first_name' : 'John', 'last_name' : 'Rosales'}
# ]
# sports_directory = {
#     'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
#     'soccer' : ['Messi', 'Ronaldo', 'Rooney']
# }
# z = [ {'x': 10, 'y': 20} ]

# x[1][0]=15
# print(x)
# students[1]['first_name']="Bryant"
# print(students)
# sports_directory["soccer"][0]="Andres"
# print(sports_directory)
# z[0]['y']=30
# print(z)
# ----------------EX2--------------
# students = [
#         {'first_name':  'Michael', 'last_name' : 'Jordan'},
#         {'first_name' : 'John', 'last_name' : 'Rosales'},
#         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#         {'first_name' : 'KB', 'last_name' : 'Tonel'}
#     ]
# # for i in students:
#     # print("first_name - "+i["first_name"]+", last_name - "+i["last_name"])
# for i in students:
#     for key,val in i.items():
#         print(key,'-',val)
# -----------------------EX3----------------
# def iterateDictionary2(key_name, some_list) :
#     for i in some_list:
#         print(i[key_name])
# iterateDictionary2('first_name',students)
# iterateDictionary2('last_name',students)
# ------------------EX4------------------
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}


def printInfo(some_dict):
    for i in some_dict:
        print(len(some_dict[i]),i)
        
        for j in some_dict[i]:
            print(j)
        
printInfo(dojo)
