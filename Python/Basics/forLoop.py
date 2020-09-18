list = [1,2,3,4,5,6,7,8]
count = 0

letter = 'Hello World'
nest_list = [(1,2), (2, 3), (3, 4), (4, 5)]
dict = {'k1':1, 'k2':2, 'k3':3, 'k4':4}

#for num in list:
#    print(count)
#    count += num

#print('-----')
#print(count)
#print('-----')

# prints every character in letter
#for char in letter:
#    print(char)


#---------------NESTED TUPLES--------------

#print every tuple in list
for a in nest_list:
    print(a)

# print second element in every tuple in list
for a,b in nest_list:
    print(b)


#-------DICTIONARIES------------

# prints every value in dictionary
for k in dict.values():
    print(k)

#prints every key in dictionary
for k in dict:
    print(k)

#prints every value in dictioinary
for key,v in dict:
    print(v)
