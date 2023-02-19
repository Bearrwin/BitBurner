/** @param {NS} ns */
export async function main(ns) {
	var serverName = ns.args[0];
	var ram = ns.args[1];

	ns.purchaseServer(serverName, (ram));

}