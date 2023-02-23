/** @param {NS} ns */
export async function main(ns) {

	let currentWork = ns.singularity.getCurrentWork()
	ns.tprint(currentWork)
	if (Object.values(currentWork).includes("BitRunners")) {
		ns.tprint("It worked")
	} else {
		ns.tprint("It didn't work")
	}




	// let currentWork = ns.singularity.getCurrentWork()
	// ns.tprint(currentWork)

	// ns.tail()
	// ns.moveTail(50,50)
	// ns.resizeTail(500,150)
	// const name = "Bit";
	// const age = 4;
	// ns.printf("My name is %s.", name);
	// ns.printf("I'm %d seconds old.", age);
	// ns.printf("My age in binary is %b.", age);
	// ns.printf("My age in scientific notation is %e.", age);
	// ns.printf("In %d seconds, I'll be %s.", 6, "Byte");
	// ns.printf("Am I a nibble? %t", (4 == age));





	// let server = ns.args[0]
	// let csb = ns.getServer(server).backdoorInstalled
	// ns.tprint(csb)
	// // let bitNode = ns.getPlayer().bitNodeN
	// ns.tprint(bitNode)

	// var stageOne = ns.read("/savedVar/stageOne.txt") === "true" ? true : false;


	// if (stageOne == true) {

	// 	ns.tprint(stageOne + " is a boolean")
	// }

	// if (stageOne == "true") {

	// ns.tprint(stageOne + " is a string")

	// }
	// let purchServList = ns.getPurchasedServers()
	// let purchServCount = 0
	// for (let server of purchServList) {
	// 	purchServCount++
	// }
	// ns.tprint(purchServCount + " servers")




}