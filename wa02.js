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
// Felix: While a string is a possible solution to collect your results, 
// there’s a data type that’ll make it easier to work with the indivual results you’re
// retrieving from cheerio
var meetings = ''; // this variable will hold the lines of text

// Felix: Perfect, that you identified the style attribute that identifies the td elments you need!
$("td[style='border-bottom:1px solid #e3e3e3; width:260px']").each(function(i, elem) {
    // Felix: If assign your elem(ent) to a variable you can process it further.
    // It might also help to console.log the elements you get inside this loop.
    
    // Regular expressions are a good idea, but could be a steeper learning curve.
    // You could paste your elements in a tool like this: https://regexr.com/
    // And see if you can come up with an expression that gets you all addresses
    // Regex can be the most stable solution accross all zones, if you have a very solid search term.
    // It’s a bit more advanced, and I only attempted it later in the class.
    
    // You can also continue with JavaScript string methods: https://www.w3schools.com/js/js_string_methods.asp 
    // or: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    // I recommend you look into the .split-method and see if you can find a pattern inside the element that allows you to 
    // split it up into more manageable pieces.
    // Be aware that the split method returns an array and that you need to access the desired part of your split accordingly
    meetings += ($(elem).html()).trim() + '\n';
    
   // When you like your element variable you should be able add it to the other data type variable (think of a list)
   // you defined before the loop.
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

// In the end you might want to safe it in another format, maybe .txt for now
// Later you’ll definitely want to switch to JSON format which is handier to read again into JavaScript
// https://www.w3schools.com/js/js_json_intro.asp
fs.writeFileSync('data/zone9.html', meetings);

// function removeBreaks(){
//     var breaks = document.getElementsByTagName("br");
//     breaks.remove();
// }
// removeBreaks('data/zone9.html');
