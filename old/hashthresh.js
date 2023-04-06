/** @param {NS} ns */
function serverList(ns, current = "home", set = new Set()) {
	let connections = ns.scan(current)
	let next = connections.filter(c => !set.has(c))
	next.forEach(n => {
		set.add(n);
		return serverList(ns, n, set)

	})
	set.delete("home")
	return Array.from(set.keys())

}

export async function main(ns) {

let servers = serverList(ns).filter(s => !ns.getPurchasedServers().includes(s) && s != "home");


	const hashThresh = await ns.prompt("Please enter the number of hashes to save before selling?", { type: "text" });

	const hashType = await ns.prompt("What would you like to buy", {
		type: "select",
		choices: ["Sell for Money", "Sell for Corporation Funds", "Reduce Minimum Security", "Increase Maximum Money", "Improve Studying", "Improve Gym Training", "Exchange for Corporation Research", "Exchange for Bladeburner Rank", "Exchange for Bladeburner SP", "Generate Coding Contract"]
	});
		const hashTarget = await ns.prompt("Please choose your target", {
		type: "select",
		choices: [...servers]
	});



	// const hashTarget = await ns.prompt("Please enter the name of your target server", { type: "text" });

	ns.clearPort(1)
	ns.writePort(1, hashThresh)
	ns.clearPort(2)
	ns.writePort(2, hashType)
	ns.clearPort(3)
	ns.writePort(3, hashTarget)

	let printThresh = ns.peek(1)
	let printType = ns.peek(2)
	let printTarget = ns.peek(3)
	ns.tprint(printThresh)
	ns.tprint(printType)
	ns.tprint(printTarget)
}