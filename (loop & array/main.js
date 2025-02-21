var school = ["yomna", "gehad", "nour", "ali"];


document.getElementById("search").addEventListener("click", function() {
    var name = document.getElementById("student-input").value.toLowerCase();
    var isFound = false;
    
    for (var student in school) {
        var lowerMember = school[student].toLowerCase();  // Accessing the student name
        if (name === lowerMember) {
            isFound = true;
            break;  // No need to continue once the student is found
        }
    }

    if (isFound) {
        document.getElementById("result").innerHTML = `${name} is in the school`;
    } else {
        document.getElementById("result").innerHTML = `${name} is not in the school`;
    }
});

