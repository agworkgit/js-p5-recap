## The blank screen problem

- Let's say you have a specification of the problem
- But no insight of what the program might look like

## Getting started

- Sample problem: Text Editor
- Feature: find-and-replace
  - data structure: text stored as array-of-chars (or similar)
  - "whole word" match
  - so if the word is "cat" it won't match with "catalog" or "concatenation" etc...
  - the word to be searched is an array of its own, along with the replacement word

## High level

- Replace every occurrence of word A with word B
- Original: "This film is the best film of the year."
- Find: "film"
- Replace With: "movie"
- New: "This movie is the best movie of the year."
- Can't use existing string-manipulation functions!

## Difficulty

- Your initial guess will most likely be off, until you gain the experience.
- For example just identifying where words begin and end might be tricky.
- If the words are separated by spaces, it might be easy.
- But all additional punctuation complicates things.

## Let's say you don't know where to start with this problem and blank screen, what to do?

### Bad ideas:

1. Give up (self explanatory)
2. Dive right in to coding without a plan (wasted effort)
3. Find some similar program and modify it
    - Probably won't work (if you can't write the program, you don't understand it, therefore can't modify it)
    - Don't you want to learn to code on your own?
4. Find someone else to write the program for you

### Good ideas:

Find something in the problem that you can do...and do that.

Program with tasks in stages:

A. Mysterious initial processing
B. Elaborate data-mining operation that results in an ordered array of values in range 1,000 - 1,999
C. Final processing (only stage you are confident about doing)

Propositions:

1. Maybe hard code an array to represent the expected data in your step C
2. Keep reducing the problem until you find steps at which you can tackle it, then add on top the parts that you removed
3. Try to look at replacing only the first occurence of something until you can approach replacing all occurrences.
4. Or maybe you don't replace anything yet, but only try to find it
5. Or parse the text and see if we can output each word on a separate line, if that's too touch, output just the first word

There's always a way to make a problem simpler so you just have to make the problem simple enough until it is possible to solve. Then you start adding back in the other direction, always looking to add the smallest bit of functionality that you can.

