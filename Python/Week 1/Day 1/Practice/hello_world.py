# # 1. TASK: print "Hello World"
# print ("Hello World") 
# # 2. print "Hello Noelle!" with the name in a variable
# name = "Noelle"
# print('Hello',name,'!' )	# with a comma
# print('Hello '+name+' !' )	# with a +
# # 3. print "Hello 42!" with the number in a variable
# name = 42
# print( 'Hello',name,'!' )	# with a comma
# print( 'Hello '+ str(name)+' !')	# with a +	-- this one should give us an error!
# # 4. print "I love to eat sushi and pizza." with the foods in variables
# fave_food1 = "sushi"
# fave_food2 = "pizza"
# print( 'I Love to eat {} and {}.'.format(fave_food1,fave_food2)) # with .format()
# print(f'I Love to eat {fave_food1} and {fave_food2}.')# print( your code here ) # with an f string

# play around with the drawers!
drawers = ['documents', 'envelopes', 'pens']

# Print the second value from the list (envelopes)
print(drawers[1])

# Change "pens" to "useless manuals"
drawers['pens']='useless manuals'

# Change the first value to whatever is the second value
drawers[0]=drawers[1]
# What should the list look like now?
# ['envelopes','envelopes','pens']
# Print the list! Does it match your prediction?
print(drawers)