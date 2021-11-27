print("Q21 problem-solving python")

''' Q21 '''
# print("Function ")
# Write a function print list number of integer as string without spaces 
# Ex: n=3   ::: output = 123
def listNum(n):
    st= ""
    for x in range(n+1):
        st=st+str(x)    #we can't concatenate string with number in python direct so , using str() method to achive it.
    print(st[1:])
listNum(3)

# ====================================================================

''' Q2 '''
# You are given three integers x,y and z representing the dimensions of a cuboid along with an integer n. 
# Print a list of all possible coordinates given by (i,j,k) on a 3D grid where the sum of i+j+k is not equal to n . 
# Please use list comprehensions rather than multiple loops, as a learning exercise.

def listComprehensions():
 x=int(input("Enter first"))
 y=int(input("enter sec"))
 z=int(input("Enter th"))
 n=int(input("N"))
 result = [[i, j, k] for i in range(x + 1) for j in range(y + 1) for k in range(z + 1) if i + j + k != n]
 print (result)
listComprehensions()