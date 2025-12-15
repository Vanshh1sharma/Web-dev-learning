// accesing the childhren 
// means accessing the direct child or child ke siblings or child ke child ko

// for example
// html code me head or body direct child hote hai

/* <html> 
<head>
<title> vansh sharma </title>
</head>
<body> 
<div>  </div>
<span> </span>

// NOTE 
div and span are siblings of each other   

</body>


*/


// childnodes = element that are direct children
 // for example - head and body are direct children of html tag 

//  descendent nodes = all the nested element , children aur unke childrens and so on..


// -------how to access the firstchild , last child and childnodes---------------------

// -----------firstchild----------------

console.log(document.body.firstChild)

// ------NOte------------
// if you have to access the firstchild after body tag agr aap HTML code me body ke baaad enter marte ho and uske baad wala child ko call karte ho toh Woh apko element nahi dekhaega woh text dictionary dekhaega  

// solutions for this is ki aap body tag ke baad space mat do direct likhna suru kardo


// --------------lastchild -------------------


// console.log(document.body.lastChild) //= this shows script tag kuuyki body se pahale wahi hai


// -------------------childnodes -------------------

// console.log(document.body.childNodes)
// childnodes will list the childs used in the code 
// and it's looks like an array but it is not a array it is a node list

// to make it a array  u have to use  array.form command
// let vansh = Array.from(document.body.childNodes)
// console.log(vansh)

// More ways to call or acces the first child and last child

// Element.childNodes[0] === element.firstchild

// Element.childnodes[element.childnodes.length-1] === element.lastchild 


// to check if file have childnodes or not 
// we can use 

// Element.haschildnodes()






