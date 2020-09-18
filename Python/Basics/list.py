list = ['one', 'two', 'three']
list[0] = 'ONE CAPS'


list.append('four')

four = list.pop()

print(list) #prints ['ONE', 'two', 'three']
print(four) #prints 'four'

print(list.pop(2))
