guestScore = document.getElementById("guest-score")
/* I don't recall if JS used camelCase simply for functions or also
for variables */
homeScore = document.getElementById("home-score")

function addOnePoint(html_tag){
    current_score = html_tag.textContent
    /* While I imagine that the operators that update a value of a 
    variable with a numeric value (I don't know how to call them. I 
    am talking about +=, -=. *=, /=, etc) exist in javascript 
    even when I update it with the variable name itself it still
    isn't working as I expect it to. */
    current_score = current_score * 1
    /* This might be dirty, but as I don't recall the function to 
    transform  text to integer, if I recall well simply by multiplying
    I will get an automatic truncation that transforms the text 
    to integer. */
    html_tag.innerText = current_score + 1
}

function addTwoPoints(html_tag){
    current_score = html_tag.textContent
    current_score *= 1
    /* This might be dirty, but as I don't recall the function to 
    transform  text to integer, if I recall well simply by multiplying
    I will get an automatic truncation that transforms the text 
    to integer. */
    html_tag.innerText = current_score + 2
}

function addThreePoints(html_tag){
    current_score = html_tag.textContent
    current_score *= 1
    /* This might be dirty, but as I don't recall the function to 
    transform  text to integer, if I recall well simply by multiplying
    I will get an automatic truncation that transforms the text 
    to integer. */
    html_tag.innerText = current_score + 3
}

homeOneButton = document.getElementById("home-plus-one")
homeTwoButton = document.getElementById("home-plus-two")
homeThreeButton = document.getElementById("home-plus-three")

guestOneButton = document.getElementById("guest-plus-one")
guestTwoButton = document.getElementById("guest-plus-two")
guestThreeButton = document.getElementById("guest-plus-three")

homeOneButton.addEventListener("click", addOnePoint(homeScore))
homeTwoButton.addEventListener("click", addTwoPoints(homeScore))
homeThreeButton.addEventListener("click", addThreePoints(homeScore))

guestOneButton.addEventListener("click", addOnePoint(guestScore))
guestTwoButton.addEventListener("click", addTwoPoints(guestScore))
guestThreeButton.addEventListener("click", addThreePoints(guestScore))
/* As I did "general" the functions of adding points to modifiy whatever
tag is being attatched I imagine this should work cleanly... but now 
I see the problem! I didn't really created buttons, I created header
tags that look like buttons! While it would be cleaner to specify
that those tags should act like buttons, I don't know how to do so, so
I will simply change the tags of the HTML file. */
