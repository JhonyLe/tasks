def insertion_sort(lst):
    i = 1
    insertion_index = 0
    while i < len(lst):
        elem = lst[i]
        insertion_index = i
        while insertion_index > 0:
            if elem < lst[insertion_index - 1]:
                lst[insertion_index] = lst[insertion_index - 1]
            else:
                break
            insertion_index -= 1
        lst[insertion_index] = elem
        i += 1

    return lst;


lst = [1, 4, 7, -3, 99, 55, 6, 1, 4, 6, 13, -200, 100, 101]
print(lst)
insertion_sort(lst)
print(lst)
