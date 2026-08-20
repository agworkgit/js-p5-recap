# Partition
# An iterative algorithm which is used in the **quick sort** algorithm.
# It selects the first element as the **pivot**.
# Then, we should **reorder the list** so that elements **smaller** than the pivot are placed **before the pivot** and elements with **greater values** than the pivot are placed **after the pivot**.

unordered_list = [8, 12, 6, 9, 4, 10, 3, 11]
# [6, 4, 3, 8, 12, 9, 10, 11]
#           ↑
#         pivot

# Practice implementation

def practice_algo(list):
    pivot = list[0]
    smaller = []
    greater = []
    i = 0
    while i < len(list):
        if list[i] < pivot:
            smaller.append(list[i])
        elif list[i] > pivot:
            greater.append(list[i])
        i = i + 1
    return smaller + [pivot] + greater


print(practice_algo(unordered_list))

# The correct implementation (in-place)

def partition_algo(list):
    i = 1
    j = len(list) - 1
    pivot = list[0]

    while i < j:
        while list[i] <= pivot and i < j:
            i += 1
        while list[j] >= pivot and i < j:
            j -= 1
        if i < j:
            list[i], list[j] = list[j], list[i]
    list[0], list[j] = list[j], list[0]
    print(list)
    return j

print(partition_algo(unordered_list))