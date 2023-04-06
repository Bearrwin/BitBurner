/** @param {NS} ns */
export async function main(ns) {

	// Here we establish some basic parameters for use in scripts
	
	// reset tracking flags

	ns.run("resetFlags.js")
	ns.tprint("Resetting tracking flags")

	await ns.sleep(1000)

	const currentBitNode = ns.getPlayer().bitNodeN
	ns.write("/savedVar/currentBitNode.txt", currentBitNode, "w")

	const purchServerLimit = ns.getPurchasedServerLimit()
	ns.write("/savedVar/purchServerLimit.txt", purchServerLimit, "w")


	// initialize ports

	ns.run("initports.js")
	ns.tprint("Initialising ports")

	await ns.sleep(1000)


	ns.run("TheFatController.js")
	ns.tprint("Kicks the Fat Controller in the backside and yells get moving you lazy fat........")


	



}