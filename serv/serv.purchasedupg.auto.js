/** @param {NS} ns */
export async function main(ns) {
	var ram = ns.args[0];

	let purchServers = ns.getPurchasedServers();

	for (let server of purchServers){

	ns.upgradePurchasedServer(server, (ram));

	}


}