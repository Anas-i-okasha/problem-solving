print ("problem -solving Q19 Python ")

''' Q1 '''
# Division The provided code stub reads two integers,  and , from STDIN.

# Add logic to print two lines. The first line should contain the result of integer division,  // . The second line should contain the result of float division,  / .

# No rounding or formatting is necessary.

# Example
# The result of the integer division 3//5 =0 .The result of the float division is 3//5 =0.6 .
# Print: 0
     # 0.6

''' The Solution '''

def divi():
    a=input("Enter firat number: ")
    b=input("Enter the second number: ")
    result=(int(a)/int(b))
    result1=(float(a)//float(b))
    print(result1)
    print(result)
divi()

#============================================================================
'''  Q2 '''
## Foor Loop problem solving 

#The list of non-negative integers that are less than n=3 is[0,1,2] . Print the square of each number on a separate line
# the output is : 0 1 4
'''The solution'''
def numList(n):
    result=[]
    for x in range(n):
        result.append(x)
    for y in result:
        print(y*y)
numList(5)

