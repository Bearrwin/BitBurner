function range(size, startAt = 0) {
	return [...Array(size).keys()].map(i => i + startAt);
}
/** @param {NS} ns */


export async function main(ns) {
	var baseTarget = ns.args[0];
	var hackperc = ns.args[1];
	var person = ns.getPlayer()


	var hTarget = ns.getServer(baseTarget)
	hTarget.moneyAvailable = hTarget.moneyMax


	var hedPerc = ns.formulas.hacking.hackPercent(hTarget, person)
	var hThreadsDec = hackperc / hedPerc
	var hThreads = Math.ceil(hThreadsDec)

	var hedTarget = hTarget
	hedTarget.moneyAvailable = hedTarget.moneyMax * (1 - (hackperc/100))
	var mMoney = hedTarget.moneyMax
	ns.tprint(mMoney)
	var gThreads = Math.ceil(ns.formulas.hacking.growThreads(hedTarget, person, mMoney))


	ns.tprint("One thread will hack..." + ns.formatNumber(hedPerc))
	ns.tprint("Dec Threads. " + hThreadsDec)
	ns.tprint("Threads. " + hThreads)

	ns.tprint("Money available is.. " + hedTarget.moneyAvailable)
	ns.tprint("Threads. " + gThreads)













}







	// ns.clearPort(2001)
	// ns.writePort(2001, 4)
	// let threshHashes = ns.peek(2001);
	// if (threshHashes){
	// 	ns.tprint("Port data is null.... " + threshHashes)
	// } else {
	// 	ns.tprint(threshHashes)
	// 	ns.tprint("")
	// }

	// let bn = ns.getPlayer().bitNodeN
	// ns.tprint(bn)


	// ns.singularity.destroyW0r1dD43m0n(12)
	// let size = ns.args[0];

	// let cost = ns.getPurchasedServerCost(size)
	// ns.tprint(ns.formatNumber(cost))

	// let playerInfo = ns.getPlayer()

	// ns.tprint(playerInfo)
	// 	ns.tprint(ns.heart.break())


// let serverSize = ns.args[0]
// let serverCost = ns.getPurchasedServerCost(serverSize)
// ns.tprint(serverSize + " Costs " + ns.formatNumber(serverCost))

// let purchServList = ns.getPurchasedServers()
// ns.tprint(purchServList)
// for (let server of purchServList) {
// ns.killall(server)
// }

// let scripts = ns.ps("home")
// ns.tprint(scripts)









	// let nodeStats = ns.hacknet.getNodeStats(0)
	// ns.tprint(nodeStats)


	// let number_of_nodes = ns.hacknet.numNodes()
	// let totalLevels = range(number_of_nodes).reduce((a, b) => a + ns.hacknet.getNodeStats(b).level, 0)
	// ns.tprint(number_of_nodes)
	// ns.tprint(totalLevels)






// ns.singularity.destroyW0r1dD43m0n(9)



	// // Declare 2 variables first is the array of server names that we will use to count our servers.
	// // 2. is the starting server count.
	// // using a for (for every item in this list do these actions) loop we increment our counter for each server in the array
	// // If our counter is still at 0 it means ther are no purchased servers, so call our newservname s1
	// // otherwise make our new server name = to the string S and then without adding spaces, append to the end of it 
	// //a number which is the servcount +1


	// var serverList = ns.getPurchasedServers()
	// var servCount = 0

	// for (let server of serverList) {
	// 	servCount++
	// 	ns.tprint(server)
	// }
	// if (servCount == 0) {
	// 	var newServName = "s1"
	// } else {
	// 	var newServName = ("s" + (servCount + 1))
	// }
	// ns.tprint(newServName)


	// var lastNameUsed = ns.args[0]
	// var newName = "s1";
	// switch (lastNameUsed) {
	// 	case "s1":
	// 		newName = "s2";
	// 		break;
	// 	case "s2":
	// 		newName = "s3";
	// 		break;
	// 	case "s3":
	// 		newName = "s4";
	// 		break;
	// 	case "s4":
	// 		newName = "s5";
	// 		break;

	// }
	// ns.tprint(newName)
	// let sHome = ns.getServer("home").cpuCores
	// ns.tprint(sHome)



	// let strStat = ns.getPlayer().skills.strength
	// ns.tprint("Your Str is " + strStat)

	// let nowCity = ns.getPlayer().city
	// ns.tprint(nowCity)

	// let currentWork = ns.singularity.getCurrentWork()
	// ns.tprint(currentWork)
	// if (Object.values(currentWork).includes("BitRunners")) {
	// 	ns.tprint("It worked")
	// } else {
	// 	ns.tprint("It didn't work")
	// }

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