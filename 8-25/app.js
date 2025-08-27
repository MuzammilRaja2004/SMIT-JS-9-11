
// var 
// for (var i = 1; i <= 10; i++){
//     console.log(i)
// }



// var cleanestCities = ["Karachi",
//     "Lahore",
//     "Faisalabad",
//     "Rawalpindi",
//     "Islamabad",
//     "Multan",
//     "Gujranwala",
//     "Peshawar",
//     "Quetta",
//     "Hyderabad",
//     "Sialkot",
//     "Bahawalpur",
//     "Sargodha",
//     "Sukkur",
//     "Larkana",
//     "Sheikhupura",
//     "Rahim Yar Khan",
//     "Mardan",
//     "Abbottabad",
//     "Gwadar",
//     "Turbat",
//     "Mirpur Khas",
//     "Dera Ghazi Khan",
//     "Kohat",
//     "Bannu",
//     "Mansehra",
//     "Muzaffarabad",
//     "Mirpur",
//     "Skardu",
//     "Gilgit",
//     "Chaman"];
// var cityToCheck = prompt("Enter your city Name")

// if (cityToCheck.toLowerCase() === cleanestCities[0].toLowerCase()) {
//     alert("It's one of the cleanest cities")
// }
// else if (cityToCheck === cleanestCities[1]) {
//     alert("It's one of the cleanest cities")
// }
// else if (cityToCheck === cleanestCities[2]) {
//     alert("It's one of the cleanest cities")
// }
// else if (cityToCheck === cleanestCities[3]) {
//     alert("It's one of the cleanest cities")
// }
// else if (cityToCheck === cleanestCities[4]) {
//     alert("It's one of the cleanest cities")
// } else {
//     alert("It's not on the list")
// }



var cleanestCities = ["Karachi",
    "Lahore",
    "Faisalabad",
    "Rawalpindi",
    "Islamabad",
    "Multan",
    "Gujranwala",
    "Peshawar",
    "Quetta",
    "Hyderabad",
    "Sialkot",
    "Bahawalpur",
    "Sargodha",
    "Sukkur",
    "Larkana",
    "Sheikhupura",
    "Rahim Yar Khan",
    "Mardan",
    "Abbottabad",
    "Gwadar",
    "Turbat",
    "Mirpur Khas",
    "Dera Ghazi Khan",
    "Kohat",
    "Bannu",
    "Mansehra",
    "Muzaffarabad",
    "Mirpur",
    "Skardu",
    "Gilgit",
    "Chaman"];
var cityToCheck = prompt("Enter your city Name")
var matchFound = false;
for (var i = 0; i <= cleanestCities.length; i++) {
    if (cityToCheck.toLowerCase() === cleanestCities[i].toLowerCase()) {
        alert("It's one of the cleanest cities");
        matchFound = true
        break
    }
}
// else {

// }

if (!matchFound) {
    alert("It's not on the list");
}
