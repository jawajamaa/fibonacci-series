def fibonacci(num):
    
    if num < 2:
        return num

    else:
        fib = [0, 1]

        for _ in range(num -1):
            d = fib[len(fib)-2] + fib[len(fib)-1]
            fib.append(d)

        return fib[int(f"{num}")]


# my original working solution passing all test cases
# def fibonacci(num):
    
#     if num == 0:
#         return 0
    
#     elif num == 1 or num == 2:
#         return 1
    
#     else:
#         a = 0
#         b = 1
#         c = 1
#         fib = [a, b, c]
#         print("Line 14, fib:", fib)

#         for n in range(num -2):
#             d = fib[len(fib)-2] + fib[len(fib)-1]
#             fib.append(d)
        
#         print("Line 20, fib:", fib)
#         ans = fib[int(f"{num}")]
#         print("Line 21, ans:", ans)

#         return ans
    
    # given solution

# def fibonacci(num):

#     if num < 2:
#         return num
    
#     last_two = (0, 1)

#     for i in range(0, num - 1, 1):
#         sum = last_two[0] + last_two[1]
#         last_two = (last_two[1], sum)

#     return last_two[1]

print(fibonacci(7))
