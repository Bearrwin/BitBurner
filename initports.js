/** @param {NS} ns */
export async function main(ns) {

	// ns.clearPort(1)
	// ns.writePort(1,)

	//	// Static variables set by the game - Ports 100 - 199

	// What bitnode are we in?

	var currentBitNode = ns.read("/savedVar/currentBitNode.txt")
	ns.tprint("Our current BitNode is... " + currentBitNode)
	ns.tprint(" ")
	ns.clearPort(101)
	ns.writePort(101, currentBitNode)

	// What is the maximum number of purchased servers we are allowed in this bitnode?

	var purchServerLimit = ns.read("/savedVar/purchServerLimit.txt")
	ns.tprint("Our maximum number of purchased servers is... " + purchServerLimit)
	ns.tprint(" ")
	ns.clearPort(102)
	ns.writePort(102, purchServerLimit)

	//	// variables to store the current state of various things - ports 200 - 299

	// How many purchased servers do we currently own?


	// port 103 updated via subscript stores our count of purchased servers

	ns.run("/utils/isexists.purchServ.js")
	await ns.sleep(1000)




	//	// batching variables - ports 1000 - 1999

	// weakthreads set 1
	ns.clearPort(1011)
	ns.writePort(1011, 1)

	// growthreads set 1
	ns.clearPort(1012)
	ns.writePort(1012, 1)

	// hackthreads set 1
	ns.clearPort(1013)
	ns.writePort(1013, 1)

	// cycledelay set 1
	ns.clearPort(1014)
	ns.writePort(1014, 25)

	// weakthreads set 2
	ns.clearPort(1011)
	ns.writePort(1011, 1)

	// growthreads set 2
	ns.clearPort(1012)
	ns.writePort(1012, 1)

	// hackthreads set 2
	ns.clearPort(1013)
	ns.writePort(1013, 1)

	// cycledelay set 2
	ns.clearPort(1014)
	ns.writePort(1014, 25)

	// weakthreads set 3
	ns.clearPort(1011)
	ns.writePort(1011, 1)

	// growthreads set 3
	ns.clearPort(1012)
	ns.writePort(1012, 1)

	// hackthreads set 3
	ns.clearPort(1013)
	ns.writePort(1013, 1)

	// cycledelay set 3
	ns.clearPort(1014)
	ns.writePort(1014, 25)


	// Autocalc batcher using formulas.exe

	// cycledelay
	ns.clearPort(1104)
	ns.writePort(1104, 25)

	// Hackpercent

	ns.clearPort(1105)
	ns.writePort(1105, .05)


	//	// hashes sales variables

	// number of hashes to save before selling
	ns.clearPort(2001)
	ns.writePort(2001, 4)
	var threshHashes = ns.peek(2001);
	ns.tprint("I will save this many hashes before I spend them... " + threshHashes)


	// what to buy with hashes
	ns.clearPort(2002)
	ns.writePort(2002, "Sell for Money")
	var hashType = ns.peek(2002);
	ns.tprint("I will... " + hashType)

	// target
	ns.clearPort(2003)
	ns.writePort(2003, "")
	var hashTarget = ns.peek(2003);
	ns.tprint("This will be my target... " + hashTarget)


	//	// Reputation levels - ports 3000-3999

	// ns.clearPort(3001)
	// ns.writePort(3001, "")




}