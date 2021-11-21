print("Problem solving Python ")


# Python program to check if two number in the list to get unique values from list

no_list = [22,22,2,1,11,11,2,2,3,3,3,4,5,5,5,55,55,66]

def unique_list(l):
    total=[]
    for x in l:
        if(x not in total):
            total.append(x)
    return total

# check the result in terminal 
print(unique_list(no_list))