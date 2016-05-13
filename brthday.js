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