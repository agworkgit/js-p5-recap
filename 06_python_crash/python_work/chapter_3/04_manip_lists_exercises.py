invited_to_dinner = ['bob ross', 'dina katabi', 'ada lovelace', 'anya taylor-joy', 'steve wozniak', 'radia perlman', 'albert einstein', 'alan turing']

message_invitee = "you are invited to a special dinner party with a pool of diverse famous people from all walks of life."
message_notification = "Unfortunately, the dinner won't include"

print(f"Dear {invited_to_dinner[0].title()}, {message_invitee}\n")

wont_make_it = 'bob ross'
invited_to_dinner.remove(wont_make_it)

print(f"{message_notification} {wont_make_it.title()}.\n")

invited_to_dinner.insert(0, 'christopher walken')

print(f"Dear {invited_to_dinner[0].title()}, {message_invitee}\n")

print("We just found a bigger dinner table, invite 3 more guests.\n")

new_invitees = ['john von neuman', 'deadmau5', 'hans zimmerman']

print(f"{new_invitees[0].title()}, {new_invitees[1].title()}, {new_invitees[2].title()}, are now invited to the dinner.\n")

invited_to_dinner.insert(0, new_invitees[0])
invited_to_dinner.insert(1, new_invitees[1])
invited_to_dinner.insert(2, new_invitees[2])

print(f"Our full guest list is {invited_to_dinner}.\n")

print("We have only 2 of the 3 promised spaces available.\n")

must_be_removed = 'albert einstein'
invited_to_dinner.remove(must_be_removed)

print(f"Unfortunately, we will have no space to fit {must_be_removed.title()} this time.\n")

print("del statement:\n")

print(new_invitees) # list with 3 invitees
del new_invitees[0]
del new_invitees[1]
del new_invitees[-1] # index 2 will throw an out of bounds error
print(new_invitees) # empty list