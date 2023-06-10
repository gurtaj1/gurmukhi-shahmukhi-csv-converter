# gurmukhi-shahmukhi-csv-converter
## The Goal
This Repo was created to convert a deck of anki cards (as csv) I was planning to use.
It was the 3000 most common Punjabi words as flash cards:
- Each card had the Punjabi word in Gurmukhi on the front, and the english translation on the back
- Punjabi can be written in both Gurmukhi and Shamukhi, I therefore wanted the Punjabi side of each card to include the word in both written forms.
## The process
- I used 'gurmukhi-utils' to get the Shahmukhi form of each word.
- I used csvtojson to read the original csv, and also edit it.
- I used 'json2csv' to write all the changes to a new csv file
