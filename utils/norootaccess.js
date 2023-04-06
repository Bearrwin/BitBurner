/** @param {NS} ns */

function serverList(ns, current = "home", set = new Set()) {
	let connections = ns.scan(current)
	let next = connections.filter(c => !set.has(c))
	next.forEach(n => {
		set.add(n);
		return serverList(ns, n, set)

	})
	set.delete("home")
	return Array.from(set.keys())

}

export async function main(ns) {

	let remainServ = serverList(ns).filter(a => !ns.hasRootAccess(a));

	for (let server of remainServ) {
		ns.tprint(server + " requires " + ns.getServerNumPortsRequired(server) + " ports cracked open to be able to nuke.")

	}



}