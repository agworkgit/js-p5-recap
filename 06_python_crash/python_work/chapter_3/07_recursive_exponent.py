# This function returns 2^n

def rec_fun(n):
	if n == 1:
		return 2
	elif n == 0:
		return 1
	else:
		return 2 * rec_fun(n - 1)

print(rec_fun(5)); # 32

# Call trace
# rec_fun(5):
# goes to else 2 * rec_fun(5 - 1)
# rec_fun(4) calls rec_fun(3) calls rec_fun(2) calls rec_fun(1) which returns 2
# why? n = 1 and r == 1 returns 2
# we use the value
# and walk back up through each function
# rec_fun(1) = 2
# rec_fun(2) = 2 * 2
# rec_fun(3) = 4 * 2
# rec_fun(4) = 8 * 2
# rec_fun(5) = 16 * 2 = 32

# This function calculates and returns a^n

def rec_g(a, n):
	if n == 1:
		return a
	elif n == 0:
		return 1
	else:
		# Python will do float point division with /
		# Use // for integer division!
		return rec_g(a,(n//2)) * rec_g(a,((n+1)//2))

print(rec_g(2,3)) # should give 8

#              rec_g(2, 3)
#            /             \
#           /               \
#  rec_g(2, 1)    *     rec_g(2, 2)
#       |                /          \
#       |               /            \
#   return 2      rec_g(2, 1)  *  rec_g(2, 1)
#                       |              |
#                   return 2       return 2

