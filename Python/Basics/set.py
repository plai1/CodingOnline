myset = set()

myset.add(1)
myset.add(2)
myset.add(3)
myset.add(1)

print(myset)
# print {1, 2, 3}

mylist = [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3]
print(set(mylist))
# will turn mylist to a set
# returns {1, 2, 3}

#can turn string with repeating letters into set of unique characters


print(set('Parallel'))
print(set('Mississippi'))
#prints {'P', 'a', 'e', 'l', 'r'}
