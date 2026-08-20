# Changing values

motorcycles = ['ducatti','honda','yamaha','suzuki']
print(motorcycles)

motorcycles[0] = 'bmw'
print(motorcycles)

# Adding elements (append)

motorcycles.append('vespa')
print(motorcycles)

### Starting off with an empty list

new_motorcycles = []
new_motorcycles.append('ducatti')
new_motorcycles.append('honda')
new_motorcycles.append('yamaha')
print(new_motorcycles)

# Inserting elements (insert)

new_motorcycles.insert(0, 'bwm')
print(new_motorcycles) # notice that everything else shifted right by one space to make room

# Removing elements from a list

### Using 'del' Statement, if you already know exactly where it is
### Will delete permanently, choose if you no longer wish to work with the value

del new_motorcycles[0]
print(new_motorcycles)

### Using the 'pop' Method (removes last item in a list)
### If you want to work with the removed value elsewhere

popped_motorcycle = new_motorcycles.pop()
print(popped_motorcycle)
print(new_motorcycles)

### Popping items from any position in a List

first_owned = motorcycles.pop(0)
print(f"The first motorcycle I owned was a {first_owned.upper()}.")

### Remove an item by Value
### If you only remember the value of a particular element, you can use the 'remove()' method

new_motorcycles.remove('honda')
print(new_motorcycles)

### You can also use 'remove()' to work with a value that's being removed from a List
### 'ducatti' gets removed from the List, but still accessible via variable 'too_expensive'

too_expensive = 'ducatti'
new_motorcycles.remove(too_expensive)
print(new_motorcycles)
print(f"\nA {too_expensive.title()} is too expensive for me.")

### remove() will only delete the first instance of the value you give it, to remove all instances a loop is required