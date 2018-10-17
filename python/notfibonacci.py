def fibonacci():
    yield 0
    yield 1

    lst = [0, 1]
    while True:
        lst.append(lst[len(lst) - 1] + lst[len(lst) - 2])
        yield lst[len(lst) - 1]

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

f = notfibonacci();

lst = []
for i in range(30):
    lst.append(next(f))
print(lst)