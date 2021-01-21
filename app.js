// Changing case 
// Question No 01  
// var games = prompt("Enter Your Favourite Game")
// games = games.toUpperCase();
// var arr = ['CRICKET', 'FOOTBALL', 'BASKETBALL', 'VOLLYBALL', 'TENNIS']
// for (var i = 0; i<arr.length; i++){
//     if(arr[i] === games){
//         alert(games);
//     }
// }

// QUESTION NO 02

// var Personality = prompt("Enter Your Favourite Personality")
// var firstchar = Personality.slice(0,1);
// firstchar = firstchar.toUpperCase()
// var otherchar = Personality.slice(1)
// otherchar = otherchar.toLowerCase();
// var a = firstchar + otherchar;

// var arr = ['imran khan','allama iqbal',  'quaid-e-azam', 'shahid afridi', 'dr zakir naiq', 'molana tariq jameel']
// for (var i = 0; i<arr.length; i++){
//     if(arr[i] === Personality){
//         alert(a);
//     }
// }

// Strings: measuring length and extracting parts

//  QUESTION NO 01 

// var mobile = prompt("Enter Your Favourite Mobile Phone Model Name")
// var firstchar = mobile.slice(0,1);
// firstchar = firstchar.toUpperCase()
// var otherchar = mobile.slice(1)
// otherchar = otherchar.toLowerCase();
// var c = firstchar + otherchar;

// var arr = ['apple', 'huawei', 'samsung', 'nokia', 'sony', 'lenovo', 'oppo', 'motorola', 'htc', 'honor', 'vivo', 'infinix', 'asus']
// var a = mobile.length
// for (var i = 0; i<arr.length; i++){
//     if(arr[i] === mobile ){
//         alert(a + ')'+ "  " +c);
//     }
// }

// QUESTION NO 02

// var str=prompt("Enter some text");
// alert(str.slice(-1));

// Strings: finding segments

//  QUESTION NO 01

// var word = 'Pakistani'
// var indexnum = word.indexOf('n')
// console.log(indexnum)

//  QUESTION NO 02

// var username = prompt('Enter your Username')
// var specchar = ('@', '!', '.' , ',')
// if (username = specchar){
//     alert('Enter a valid user name')
// }else if(username != specchar){
//     alert('Hello' + " " + username )
// }

//  QUESTION NO 03

// var word = "The quick brown fox jumps over the lazy dog"
// var a = word.length
// for (var i = 0; i<a.length; i++){
//     if(a[i] === 'the' ){
//         console.log(a);
//     }
// }

// Strings: finding a character at a location

//  QUESTION NO 01

// var char = 'Pakistani'
// var a = char.charAt(3);
// console.log(a)

// QUESTION NO 02 

// var username = prompt("Enter your username")
// if (username.match(/)===null){
//   alert('Hello ' + username)
// }else{
//   alert('Enter valid username')
// }

// QUESTION N 03

// var str = "The quick brown fox jumps over the lazy dog."
// document.write("Occurance of word 'the' in given string is : ",str.match(/the/gi).length)


// Strings: replacing characters

// QUESTION NO 01

// var word = "Hyderabad"
// var firstchar = word.slice(0,'Hyder')
// var reptext = 'Islam';
// var secchar = word.slice(0+5)
// console.log(firstchar+reptext+secchar)

//  QUESTION NO 02

// var text = 'Ali and Sami are best friends. They play cricket and football together.'
// var char = text.replace(/and/g,"&")
// console.log(char)

// Rounding numbers
// QUESTION NO 01 A-D

// var num = 3.45214
// var round = Math.round(num)
// console.log(round)

// var num = 3.45214
// var floor = Math.floor(num)
// console.log(floor)

// var num = 3.45214
// var ceil = Math.ceil(num)
// console.log(ceil)

// QUESTION NO 02 A - D

// var num = -2.678
// var round = Math.round(num)
// console.log(round)

// var num = -2.678
// var floor = Math.floor(num)
// console.log(floor)

// var num = -2.678
// var ceil = Math.ceil(num)
// console.log(ceil)

// Generating random numbers

// QUESTION NO 01

// var a = Math.random()
// var b = a*6
// console.log(Math.ceil(b))

//  QUESTION NO 02 

// var headuser = prompt('Enter head username')
// var tailuser = prompt('Enter tail username')

// var toss = Math.random() * 2;
// var ceil = Math.ceil(toss)
// if (ceil === 1){
//   alert('Heads ' + headuser + ' Win the toss')
// }else {
//   alert('Tails ' + tailuser + ' Win the toss')
// }

// QUESTION NO 03

// var num = +prompt("Enter a number between 1 to 10")
// var randomsecretnum = Math.random()*10
// var ceil = Math.ceil(randomsecretnum)
// if (ceil == num){
//   alert("Congratulations number match")
// }
// else{
//   alert("Number not match")
// }

// Converting strings to integers and decimals

//  QUESTION NO 01

// var weight = prompt("Enter your weight")
// var weight1 = parseInt(weight)
// console.log(weight1+"kgs")

// Converting strings to numbers, numbers to strings

// QUESTION NO 01

// var num = "670"
// var a = parseInt(num)
// var b = typeof(a)
// console.log(a,b)

// QUESTION NO 02

// var num = 20.30
// var num1 = num.toString().replace(".","")
// console.log(num1)

// Controlling the length of decimals

// QUESTION NO 01
// var percentage = 30 / 50 * 100;
// var cont = percentage.toFixed(2);
// console.log(cont)