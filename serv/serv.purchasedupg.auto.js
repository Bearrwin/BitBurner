/** @param {NS} ns */
export async function main(ns) {
	var ram = ns.args[0];

	// create a list of purchased servers, and then use that list in a for loop to upgrade
	// each one to the specified amount of ram.
	let purchServers = ns.getPurchasedServers();

	for (let server of purchServers){

	ns.upgradePurchasedServer(server, (ram));

	}


}