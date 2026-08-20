wsr_string = "whitespace "
wsl_string = " whitespace"
wsb_string = " white space "
# notice how strip() removes left/right whitespace but not middle!

print(wsr_string.rstrip())
print(wsl_string.lstrip())
print(wsb_string.strip())

# doing the process like this only removes the whitespace temporarily
# if you want to do it permanently assign the expression to the variable name, like this

wsr_string = wsr_string.rstrip()
wsl_string = wsl_string.lstrip()
wsb_string = wsb_string.strip()

print(wsr_string)
print(wsl_string)
print(wsb_string)