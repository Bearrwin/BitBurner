/** @param {NS} ns */
export async function main(ns) {
	let server = ns.args[0];

	// self-explanatory
	ns.deleteServer(server)

}