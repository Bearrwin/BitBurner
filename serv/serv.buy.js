/** @param {NS} ns */
export async function main(ns) {
	var serverName = ns.args[0];
	var ram = ns.args[1];

	// fairly self-explanatory - use purchase server command with name and size 
	// arguments passed into script on launch.
	
	ns.purchaseServer(serverName, (ram));

}