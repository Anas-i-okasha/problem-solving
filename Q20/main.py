print("problem-solving Q20-python ")

''' Q1 '''
# function take string as input then return reversed string 
text = "this is not a reversed text"

def reverse(x):
    #  complete this function so that it takes string x as an input and returns its reverse
     x=input("Enter your text ")
     return x[::-1]

# print("the reversed text is: "+reverse(text))



#=========================================================================

''' Q2 '''

#Given a year, determine whether it is a leap year. If it is a leap year, 
# return the Boolean True, otherwise return False.

#In the Gregorian calendar, three conditions are used to identify leap years:
#The year can be evenly divided by 4, is a leap year, unless:
#The year can be evenly divided by 100, it is NOT a leap year, unless:
#The year is also evenly divisible by 400. Then it is a leap year


def leapYear(n):
    if n%4 ==0  and n%400==0:
        print (True)
    elif n%100==0:
        print (False)
    else:
        print (False)
leapYear(1800)




