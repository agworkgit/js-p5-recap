# Partition
# An iterative algorithm which is used in the **quick sort** algorithm.
# It selects the first element as the **pivot**.
# Then, we should **reorder the list** so that elements **smaller** than the pivot are placed **before the pivot** and elements with **greater values** than the pivot are placed **after the pivot**.

unordered_list = [8, 12, 6, 9, 4, 10, 3, 11]

print(unordered_list)

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


# print(practice_algo(unordered_list))

# The correct implementation (in-place with i and j)
# Beware that starting index is 0, in the pseudocode it's 1-indexed

def partition_algo(list):
    pivot = list[0]
    i = 1
    j = len(list) - 1

    while i < j:
        # while list[i](12) <= list[0](8) && i(1) < j(7)
        while list[i] <= pivot:
            # i is now 2
            i += 1
        # while list[j](3) <= list[0](8) && i(1) < j(7)
        while list[j] >= pivot:
            # j is now 6
            j -= 1
        if i < j:
        # i(2) < j(6)
            # swap i with j and j with i
            # i(6) and j(2)
            list[i], list[j] = list[j], list[i]
    # end of loop swap list[0] with list[j] and vice versa
    list[0], list[j] = list[j], list[0]
    # the current pivot position
    return j

pivot_position = partition_algo(unordered_list)

print(unordered_list)
print(pivot_position)