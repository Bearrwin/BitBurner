/** @param {NS} ns */
export async function main(ns) {
	var serverName = ns.args[0];
	var newName = ns.args[1];

	// self-explanatory
	ns.renamePurchasedServer(serverName, newName);

}