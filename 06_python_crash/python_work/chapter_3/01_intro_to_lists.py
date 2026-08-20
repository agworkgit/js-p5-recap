# Lists

bicycles = ['trek', 'cannondale', 'redline', 'specialised']
print(bicycles)
# Output: ['trek', 'cannondale', 'redline', 'specialised']

# Accessing elements in Lists (0-indexed)

print(bicycles[0].title()) # 'Trek'

# Accessing the last element in a List
# Positive = access from the left
# Negative = access from the end (right)

print(bicycles[-1]) # 'specialised'

# Using individual values from a List

message = f"My first bicycle was a {bicycles[0].title()}."
print(message)