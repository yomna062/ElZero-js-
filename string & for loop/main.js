document.getElementById("submit").addEventListener("click", function() {
    var text = document.getElementById("string-input").value;
    var resultHTML = ""; // Initialize an empty string to store the result
    for (char of text) {
        var lower = char.toLowerCase();
        if (lower != 'a' && lower != 'e' && lower != 'i' && lower != 'o' && lower != 'u') {
            resultHTML += `${char}<br>`; // Append each consonant to the result
        }
    }
    document.getElementById("result").innerHTML = resultHTML; // Update the innerHTML once after the loop
});
