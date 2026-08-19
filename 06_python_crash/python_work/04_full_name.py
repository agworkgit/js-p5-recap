first_name = "ada"
last_name = "lovelace"
full_name = f"{first_name} {last_name}"
print(full_name)

# f is for format, because Python formats the string by replacing the name of any variable in braces with its value

message = f"Hello, {full_name.title()}!"
print(message)

# Formatting prior to f-strings
full_name = "{} {}".format(first_name, last_name)
print(full_name)