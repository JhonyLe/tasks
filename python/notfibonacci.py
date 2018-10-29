def fibonacci():
    yield 0
    yield 1

    two_value_ago = 0
    one_value_ago = 1

    while True:
        new_value = two_value_ago + one_value_ago
        two_value_ago, one_value_ago = one_value_ago, new_value
        yield new_value

def notfibonacci():
    num = 1
    f = fibonacci();
    next(f)
    next(f)
    fibonacci_num = next(f)

    while True:
        if num != fibonacci_num:
            yield num
        else:
            fibonacci_num = next(f)
        num += 1


print('Fibonacci: ')

fFibonacci = fibonacci();
lstFibonacci = []
for i in range(30):
    lstFibonacci.append(next(fFibonacci))
print(lstFibonacci)

print('Not fibonacci: ')
f = notfibonacci();

lst = []
for i in range(30):
    lst.append(next(f))
print(lst)