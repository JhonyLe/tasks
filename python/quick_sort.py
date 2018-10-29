def quick_sort(lst, *args):
    start_position = args[0] if len(args) > 0 else 0
    end_position = args[1] if len(args) >= 1 else len(lst) - 1

    if end_position - start_position <= 1:
        return

    support_position = start_position
    start_position += 1

    start_index = start_position
    end_index = end_position

    while start_index <= end_index:
        if lst[start_index] > lst[support_position] and lst[end_index] <= lst[support_position]:
            lst[start_index], lst[end_index] = lst[end_index], lst[start_index]
            start_index += 1
            end_index -= 1
        elif lst[start_index] <= lst[support_position]:
            start_index += 1
        elif lst[end_index] > lst[support_position]:
            end_index -= 1

    lst[support_position], lst[end_index] = lst[end_index], lst[support_position]
    support_position = end_index

    quick_sort(lst, start_position - 1, support_position)
    quick_sort(lst, support_position + 1, end_position)


lst = [99, 4, 6, 1, 18, 23, 77, 1, 13, 22, 100, 8, 3, 15, 140]
print(lst)
quick_sort(lst)
print(lst)