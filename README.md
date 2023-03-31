# React-HTML-Form-Autofill
Show autofill results from a form in HTML with React!

# How to use:
Build the JSX files, then put the built folder in the node folder and name it "build". Then simply run  
`npm i express cors axios`  
`node index.cjs`  
And the server will be running on port 5000 by default, you can change this with an enviornment variable named "port".

Todo: Cache queries to the API to avoid being ratelimited and stop it from making more queries if characters are added on an input with no results, for the same reason.
