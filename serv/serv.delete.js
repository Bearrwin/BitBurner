/** @param {NS} ns */
export async function main(ns) {
	let server = ns.args[0];
	ns.deleteServer(server)

}