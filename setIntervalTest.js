g = (c,m) => {
	console.log(Date.now())
}

let day = 1000 * 60 * 60 * 24
console.log(day)

setInterval(() => g(),day)