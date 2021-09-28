var character = "";

function countCharacter() {
    let input = document.getElementById("input").value;
    let result = document.getElementById("counter");

    count = input.length;

    if (count <= 1) {
        result.innerHTML = "You have written " + count + " character" + ". Remaining " + (160 - count) + " characters";

    } else {
        result.innerHTML = "You have written " + count + " characters" + ". Remaining " + (160 - count) + " characters.";

    }
    if ((160 - count) <= 1) {
        result.innerHTML = "You have written " + count + " character" + ". Remaining " + (160 - count) + " character.";

    }

    // result.innerHTML = "You have written " + count + character + ". Remaining " + (160 - count) + " characters.";
}