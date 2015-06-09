//Problem 1. Reverse string
//
//Write a JavaScript function that reverses a string and returns it.
//    Example:
//
//input	output
//sample	elpmas
if (!String.prototype.reverse) {
    String.prototype.reverse = function () {
        var i,
            len,
            reverse = [];

        if (this == null) {
            throw new TypeError('String.prototype.reverse called on null or undefined');
        }

        for (i = 0, len = this.length; i < len; i += 1) {
            reverse[i] = this[len - 1 - i];
        }

        return reverse.join('');
    };
}

console.log('Problem 1. Reverse string');
console.log("I'm reversed!".reverse());

//Problem 2. Correct brackets
//
//Write a JavaScript function to check if in a given expression the brackets are put correctly.
//    Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).
function areBracketsCorrect(expression) {
    var i,
        len,
        c,
        openingBrackets = [];

    for (i = 0, len = expression.length; i < len; i += 1) {
        c = expression[i];

        if (c === '(' || c === '[' || c === '{') {
            openingBrackets.push(c);
        } else if (c === ')') {
            if (openingBrackets.pop() !== '(') return false;
        } else if (c === ']') {
            if (openingBrackets.pop() !== '[') return false;
        } else if (c === '}') {
            if (openingBrackets.pop() !== '{') return false;
        }
    }

    return !openingBrackets.length; // If there are opening brackets left unclosed, the expression is incorrect
}

console.log('Problem 2. Correct brackets');
console.log('[(()()){()}]', areBracketsCorrect('[(()()){()}]'));
console.log('[(()()){()}])(', areBracketsCorrect('[(()()){()}])('));

//Problem 3. Sub-string in text
//
//Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
//Example:
//
//    The target sub-string is in
//
//The text is as follows: We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.
//
//The result is: 9
function countMatches(string, substring) {
    var i,
        j,
        lenString = string.length,
        lenSubstring = substring.length,
        count = 0;

    string = string.toLowerCase();
    substring = substring.toLowerCase();

    for (i = 0, j = 0; i < lenString; i += 1) {
        if (string[i] === substring[j]) j += 1;
        else j = 0;

        if (j === lenSubstring) {
            count += 1;
            j = 0;
        }
    }

    return count;
}
var substring = 'in',
    string = 'We are living in an yellow submarine. We don\'t have anything else.\
inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';
console.log('Problem 3. Sub-string in text');
console.log('"' + substring + '" in "' + string + '"');
console.log(countMatches(string, substring));
//Problem 4. Parse tags
//
//You are given a text. Write a function that changes the text in all regions:
//
//    <upcase>text</upcase> to uppercase.
//<lowcase>text</lowcase> to lowercase
//<mixcase>text</mixcase> to mix casing(random)
//Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.
//
//The expected result:
//    We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.
//
//Note: Regions can be nested.
function parseCases(text) {
    var i,
        len,
        regex = /<\/?(?:mix|up|low)case>/g,
        tags = text.match(regex),
        splits = text.split(regex),
        result = splits[0],
        actions = [],
        indexOfLastAction;

    for (i = 1, len = splits.length; i < len; i += 1) {
        if (/<(?:mix|up|low)case>/.test(tags[i - 1])) {
            actions.push(tags[i - 1]);
        } else {
            indexOfLastAction = actions.lastIndexOf(tags[i - 1].replace('/', ''));
            if (indexOfLastAction !== -1) {
                actions.splice(indexOfLastAction, 1);
            }
        }

        switch (actions[actions.length - 1]) {
            case '<upcase>':
                result += splits[i].toUpperCase();
                break;
            case '<lowcase>':
                result += splits[i].toLowerCase();
                break;
            case '<mixcase>':
                result += toMixCase(splits[i]);
                break;
            default :
                result += splits[i];
        }
    }

    return result;
}

function toMixCase(text) {
    var i,
        len,
        result = '';

    for (i = 0, len = text.length; i < len; i += 1) {
        if (Math.random() < 0.5) {
            result += text[i].toLowerCase();
        } else {
            result += text[i].toUpperCase();
        }
    }

    return result;
}

var text = "We are <mixcase>living</mixcase> in <upcase>a <lowcase>yellow</lowcase> submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.";
console.log('Problem 4. Parse tags');
console.log(text);
console.log(parseCases(text));
//    Problem 5. nbsp
//
//Write a function that replaces non breaking white-spaces in a text with &nbsp;
function replaceAll(text, toReplace, replacement) {
    var regex = new RegExp(toReplace, 'gi');
    return text.replace(regex, replacement);
}

text = 'We are   living in a yellow submarine. We don\'t have anything   else.';
console.log('Problem 5. nbsp');
console.log(text);
console.log(replaceAll(text, ' ', '&nbsp;'));

//Problem 6. Extract text from HTML
//
//Write a function that extracts the content of a html page given as text.
//    The function should return anything that is in a tag, without the tags.
//    Example:
//
//<html>
//<head>
//<title>Sample site</title>
//</head>
//<body>
//<div>text
//<div>more text</div>
//and more...
//</div>
//in body
//</body>
//</html>
//Result: Sample sitetextmore textand more...in body
function extractHTMLText(html) {
    return html.split(/<.+?>/g).join('');
}

var html = '<html>\
<head>\
<title>Sample site</title>\
</head>\
<body>\
<div>text\
<div>more text</div>\
and more...\
</div>\
in body\
</body>\
</html>';

console.log('Problem 6. Extract text from HTML');
console.log(html);
console.log(extractHTMLText(html));

//Problem 7. Parse URL
//
//Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
//Return the elements in a JSON object.
//    Example:
//
//URL	result
//http://telerikacademy.com/Courses/Courses/Details/239	{ protocol: http,
//    server: telerikacademy.com
//resource: /Courses/Courses/Details/239
function parseURL(URL) {
    var parser = document.createElement('a');
    parser.href = URL;
    return {
        protocol: parser.protocol,
        server: parser.hostname,
        resource: parser.pathname
    };
}

console.log('Problem 7. Parse URL');
var url = 'http://telerikacademy.com/Courses/Courses/Details/239';
console.log(url);
console.log(parseURL(url));

//Problem 8. Replace tags
//
//Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with corresponding tags [URL=…]…/URL].
//Example:
//
//    input	output
//<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>	<p>Please visit [URL=http://academy.telerik.com]our site[/URL] to choose a training course. Also visit [URL=www.devbg.org]our forum[/URL] to discuss the courses.</p>
function replaceLinkTags(text) {
    var regex = /<\s*a\s+href\s*=\s*"(.*?)"\s*>(.*?)<\s*\/a\s*>/gi;

    return text.replace(regex, function (tag, url, content) {
        return '[URL=' + url + ']' + content + '[\/URL]';
    });
}

console.log('Problem 8. Replace tags');
html = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>	<p>Please visit [URL=http://academy.telerik.com]our site[/URL] to choose a training course. Also visit [URL=www.devbg.org]our forum[/URL] to discuss the courses.</p>';
console.log(html);
console.log(replaceLinkTags(html));

//Problem 9. Extract e-mails
//
//Write a function for extracting all email addresses from given text.
//    All sub-strings that match the format @… should be recognized as emails.
//    Return the emails as array of strings.
function getEmails(text) {
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
}

console.log('Problem 9. Extract e-mails');
text = 'sdabhikagathara@rediffmail.com, "assdsdf" <dsfassdfhsdfarkal@gmail.com>, "rodnsdfald ferdfnson" <rfernsdfson@gmal.com>, ' +
    '"Affdmdol Gondfgale" <gyfanamosl@gmail.com>, "truform techno" <pidfpinfg@truformdftechnoproducts.com>, "NiTsdfeSh ThIdfsKaRe" ' +
    '<nthfsskare@ysahoo.in>, "akasdfsh kasdfstla" <akashkatsdfsa@yahsdfsfoo.in>, "Bisdsdfamal Prakaasdsh" <bimsdaalprakash@live.com>,; ' +
    '"milisdfsfnd ansdfasdfnsftwar" <dfdmilifsd.ensfdfcogndfdfatia@gmail.com>';
console.log(text);
console.log(getEmails(text));

//    Problem 10. Find palindromes
//
//Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
function extractPalindromes(text) {
    var i,
        palindromes = [],
        words = text.match(/\b\w+\b/g);

    for (i in words) {
        if (words.hasOwnProperty(i) && isPalindrome(words[i])) {
            palindromes.push(words[i]);
        }
    }

    return palindromes;
}

function isPalindrome(word) {
    var i,
        len;
    for (i = 0, len = word.length; i < len / 2; i++) {
        if (word[i] !== word[len - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log('Problem 10. Find palindromes');
text = '"ABBA", "lamal", "exe", "sos", "not", "palindrome", "test"';
console.log(text);
console.log(extractPalindromes(text));

//    Problem 11. String format
//
//Write a function that formats a string using placeholders.
//    The function should work with up to 30 placeholders and all types.
//    Examples:
//
//var str = stringFormat('Hello {0}!', 'Peter');
////str = 'Hello Peter!';
//
//var frmt = '{0}, {1}, {0} text {2}';
//var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
////str = '1, Pesho, 1 text Gosho'
function stringFormat() {
    var args = arguments,
        string = args[0],
        placeholder;

    for (var ind = 1; ind < args.length; ind++) {
        placeholder = '{' + (ind - 1) + '}';

        while (string.indexOf(placeholder) > -1) {
            string = string.replace(placeholder, args[ind]);
        }
    }

    return string;
}

console.log('Problem 11. String format');
var frmt = '{0}, {1}, {0} text {2}';
var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');

console.log(frmt);
console.log(str);

//Problem 12. Generate list
//
//Write a function that creates a HTML <ul> using a template for every HTML <li>.
//The source of the list should be an array of elements.
//    Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.
//    Example: HTML:
//
//    <div data-type="template" id="list-item">
//    <strong>-{name}-</strong> <span>-{age}-</span>
///div>
//JavaScript:
//
//var people = [{name: 'Peter', age: 14},…];
//var tmpl = document.getElementById('list-item').innerHtml;
//var peopleList = generateList(people, template);
////peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'
var people = [
        {name: 'Pesho', age: 42},
        {name: 'Gosho', age: 5},
        {name: 'Ivan', age: 52},
        {name: 'Ico', age: 10},
        {name: 'Spas', age: 43}],
    template = document.getElementById('list-item').innerHTML;

function generateList() {
    var i,
        li,
        ul = document.createElement('ul');

    for (i in people) {
        li = document.createElement('li');
        li.innerHTML = format(template, people[i]);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
}

function format(string, person) {
    return string.replace(/\-{(\w+)}-/g, function (match, prop) {
        return person[prop] || '';
    });
}

document.getElementById('button').addEventListener('click', generateList);