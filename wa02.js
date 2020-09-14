// npm install cheerio

var fs = require('fs');
var cheerio = require('cheerio');

// load the thesis text file into a variable, `content`
// this is the file that we created in the starter code from last week
var content = fs.readFileSync('data/0.txt');

// load `content` into a cheerio object
var $ = cheerio.load(content);

// print (to the console) names of thesis students
// $('[width="260"]').each(function(i, elem) {
//     console.log($(elem).text());
// });

// write the project titles to a text file
var meetings = ''; // this variable will hold the lines of text

$("td[style='border-bottom:1px solid #e3e3e3; width:260px']").each(function(i, elem) {
    meetings += ($(elem).html()).trim() + '\n';
});
meetings.match(/<b(.)>.*?<\/b\1>/g);
// function removeBreaks(){
//     $("br").remove();
// };
// removeBreaks(meetings);
// var cleanMeetings = meetings.split('br').join("");
// var cleanerMeetings = cleanMeetings.split(',').join('\n');
// var cleanerMeetings = cleanMeetings.replace(/(\r\n|\n|\r)/gm," ");
// var cleanerMeetings = cleanMeetings.split('\n').join(',');
fs.writeFileSync('data/zone9.html', meetings);

// function removeBreaks(){
//     var breaks = document.getElementsByTagName("br");
//     breaks.remove();
// }
// removeBreaks('data/zone9.html');