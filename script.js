function randomIntGenerator(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

// let string_value = random_value + 'px'
function shiftPos(){
    let random_value_top = randomIntGenerator(-20, 200)
    let random_value_left = randomIntGenerator(-20, 200)
    document.getElementById("nobutt").style.top = `${random_value_top.toString()}`+`px`;
    document.getElementById("nobutt").style.left = `${random_value_left.toString()}`+`px`;
}

function thatsRight(){
    document.getElementById("replycontainer").style.visibility = "visible";
}