const yellowButton = document.querySelector("button.yellow")
// yellowButton.style.height = "100px"
yellowButton.style.color = "darkgoldenrod"
yellowButton.addEventListener("click", function() {
	if(yellowButton.style.color == "darkgoldenrod") {
		yellowButton.style.color = "silver"
	} else if(yellowButton.style.color == "silver") {
		yellowButton.style.color = "darkgoldenrod"
	}
})

function addingTen(num) {
	return num + 10 
}


function MinusTwenty(num) {
	return num - 20
}

function TimesFiveThousand(num) {
	return num * 5000
}

function minusTwoTimesSeven(num) {
	return (num - 2) * 7 
}

let myNumber = 19

function UpperCase(i) {
	let result = i.toUpperCase()
	console.log(result)
}
UpperCase("just anything it can really have anything")
UpperCase("different sentence")
document.querySelector("h1").innerText = document.querySelector("h1").innerText.toUpperCase() 
// let heading = document.querySelector("h1")
// const head = document.querySelector("h1")
// console.log(heading)
// heading = heading.innerText
// console.log(heading)
// head.innerText = heading.toUpperCase()
document.querySelector("body").style.opacity = "1"