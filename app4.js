console.log("Start");
new Array(6).fill("something").forEach((el, i) => {
	setTimeout(() => {
		console.log(el, i);
	}, 1000 * i);
});
setTimeout(() => {
	console.log("Second");
}, 1);
setTimeout(() => {
	console.log("Third");
}, 0);
console.log("End");
