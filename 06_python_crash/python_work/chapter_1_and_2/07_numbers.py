# Integers
# Operations: +, -, *, /, ** (exponents)

print(2 + 3)
print(3 - 2)
print(2 * 3)
print(3 / 2)
print(2 ** 3)
print(2 + 3 * 4)

# Floats (Real numbers, Floating point)

print(0.1 + 0.1)
print(2 * 0.3)
print(0.2 + 0.1) # 0.30000000000000004 (arbitrary number of decimals in some instances)
# What we see in the line above happens in all languages

# Divisions will always result in a float

print(4 / 2) # 2.0

# Mixing integer and float in any operation, you'll get a float as well

print(1 + 2.0)
print(2 * 3.0)
print(2.0 ** 3)
# Python defaults to a float in any operation that uses a float, even if the output is a whole number