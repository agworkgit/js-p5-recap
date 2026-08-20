message = "One of Python's strengths is its diverse community."
print(message)

# The wrong way of dealing with apostrophes
# message = 'One of Python's strengths is its diverse community.'
# Notice that all quotes are single quotes and the apostrophe gets the interpretere confused
# It will interpret the apostrophe as the end of a string and throw and error!
# SyntaxError: invalid syntax

author = " albert einstein "
quote = '"A person who never made a mistake never tried anything new."'
message = f'{author.strip().title()} once said, \n\t{quote}'
print(message)