$("#add_button").on("click", function(e){
	getLink();
})

var getLink = function(){
	var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
	var givenStr = $("#add_task").val(); // mm/dd/yyyy
	var month = givenStr.slice(0, 2); // /dd/yyyy
	var day = givenStr.slice(3, 5); // //yyyy
	var year = givenStr.slice(6);
	var cdate = new Date ('"' + month + '/' + day + '/' + year + '"');
	// var cdate = new Date("12/30/1950");
	var start = 18264;
	var bDay = JSDateToExcelDate(cdate);
	var numb = bDay - start + 9
	var linkT = "http://www.thehoroscope.co/birthday-analyser/" + monthNames[Number(month) - 1] + "-" + Number(day) + "-" + year + "-horoscope-and-zodiac-sign-meanings-" + numb + ".html";
	console.log(linkT);

};

function JSDateToExcelDate(inDate) {

var returnDateTime = 25569.0 + ((inDate.getTime() - (inDate.getTimezoneOffset() * 60 * 1000)) / (1000 * 60 * 60 * 24));
return returnDateTime.toString().substr(0,20);

}

var display_horoscope = function() {
//pull horoscope from api
//display fun fact
// http://widgets.fabulously40.com/horoscope.json?sign=aries&date=2009-05-03
var fixed = "http://widgets.fabulously40.com/horoscope.json?sign=";
var sign = zodiac();
var givenStr = $("#add_task").val(); // mm/dd/yyyy
var month = givenStr.slice(0, 2); // /dd/yyyy
var day = givenStr.slice(3, 5); // //yyyy
var date = "&date=2009-" + Number(month) + "-" + Number(day);
console.log(fixed + date);
}

//reason for conception???

function zodiac() {

	var givenStr = $("#add_task").val(); // mm/dd/yyyy
	var month = givenStr.slice(0, 2); // /dd/yyyy
	var day = givenStr.slice(3, 5); // //yyyy
	var numerical_month = Number(month);
	var numerical_day = Number(day);

	var signs = ["Carpricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

	if((numerical_month == 1 && numerical_day <= 20) || (numerical_month == 12 && numerical_day >=22)) {
    return signs[0];
  } else if ((numerical_month == 1 && numerical_day >= 21) || (numerical_month == 2 && numerical_day <= 18)) {
    return signs[1];
  } else if((numerical_month == 2 && numerical_day >= 19) || (numerical_month == 3 && numerical_day <= 20)) {
    return signs[2];
  } else if((numerical_month == 3 && numerical_day >= 21) || (numerical_month == 4 && numerical_day <= 20)) {
    return signs[3];
  } else if((numerical_month == 4 && numerical_day >= 21) || (numerical_month == 5 && numerical_day <= 20)) {
    return signs[4];
  } else if((numerical_month == 5 && numerical_day >= 21) || (numerical_month == 6 && numerical_day <= 20)) {
    return signs[5];
  } else if((numerical_month == 6 && numerical_day >= 22) || (numerical_month == 7 && numerical_day <= 22)) {
    return signs[6];
  } else if((numerical_month == 7 && numerical_day >= 23) || (numerical_month == 8 && numerical_day <= 23)) {
    return signs[7];
  } else if((numerical_month == 8 && numerical_day >= 24) || (numerical_month == 9 && numerical_day <= 23)) {
    return signs[8];
  } else if((numerical_month == 9 && numerical_day >= 24) || (numerical_month == 10 && numerical_day <= 23)) {
    return signs[9];
  } else if((numerical_month == 10 && numerical_day >= 24) || (numerical_month == 11 && numerical_day <= 22)) {
    return signs[10];
  } else if((numerical_month == 11 && numerical_day >= 23) || (numerical_month == 12 && numerical_day <= 21)) {
    return signs[11];
  }
}