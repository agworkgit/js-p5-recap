# Assume the first item is the maximum, call it the current max
# Compare the second item with the current max, if the second item is greater then it becomes the current max
# We continue this process until we reach the end of the list

num_list = [3, 55, 67, 12, 1, 32, 73]

# Get max

def get_max(numbers):
    current_max = numbers[0]
    compare = 0
    while compare < len(numbers):
        if current_max < numbers[compare]:
            current_max = numbers[compare]
        compare = compare + 1
    return current_max

print(get_max(num_list)) # 73

# Get min

def get_min(numbers):
    current_min = numbers[0]
    compare = 0
    while compare < len(numbers):
        if current_min > numbers[compare]:
            current_min = numbers[compare]
        compare = compare + 1
    return current_min

print(get_min(num_list)) # 1