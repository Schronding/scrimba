guestScore = document.getElementById("guest-score")
homeScore = document.getElementById("home-score")

function addOnePoint(html_tag){
    current_score = Number(html_tag.innerText)
    html_tag.innerText = current_score + 1
    return current_score
}

function addTwoPoints(html_tag){
    current_score = Number(html_tag.textContent)
    html_tag.innerText = current_score + 2
}

function addThreePoints(html_tag){
    current_score = Number(html_tag.textContent)
    html_tag.innerText = current_score + 3
}

homeOneButton = document.getElementById("home-plus-one")
homeTwoButton = document.getElementById("home-plus-two")
homeThreeButton = document.getElementById("home-plus-three")

guestOneButton = document.getElementById("guest-plus-one")
guestTwoButton = document.getElementById("guest-plus-two")
guestThreeButton = document.getElementById("guest-plus-three")

homeOneButton.addEventListener("click", () => addOnePoint(homeScore));
homeTwoButton.addEventListener("click", () => addTwoPoints(homeScore));
homeThreeButton.addEventListener("click", () => addThreePoints(homeScore));

guestOneButton.addEventListener("click", () => addOnePoint(guestScore));
guestTwoButton.addEventListener("click", () => addTwoPoints(guestScore));
guestThreeButton.addEventListener("click", () => addThreePoints(guestScore));