from pets import Pet
from ninja import Ninja 
from cat import Cat
# ninja1=Ninja("alaa","mohsni","xxx","croquettes",Pet("mimi","cat","yyy"))
# ninja1.info()

boyka=Pet("boyka","dog","attack")
anis=Ninja("Anis","laghmani","thamer","meat",boyka)
anis.feed().walk().bathe()
gatitos=Cat("Gattous","sleep")
gatitos.noise()