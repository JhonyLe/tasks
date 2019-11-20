def merge_sort(arr):
    arr_length = len(arr)
    if arr_length > 1:
        center = int(arr_length / 2)
        first_part = merge_sort(arr[0:center])
        second_part = merge_sort(arr[center:arr_length])

        result = []
        first_index = 0
        second_index = 0
        while first_index != len(first_part) and second_index != len(second_part):
            if first_part[first_index] < second_part[second_index]:
                result.append(first_part[first_index])
                first_index += 1
            else:
                result.append(second_part[second_index])
                second_index += 1
        if first_index != len(first_part):
            result = result + first_part[first_index:len(first_part)]
        elif second_index != len(second_part):
            result = result + second_part[second_index:len(second_part)]
        return result
    else:
        return arr

print(merge_sort([3,4,6,1,8,9,0]))
