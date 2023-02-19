/** @param {NS} ns */

/**
 * Returns an array of servers dynamically
 */

// run worm.wgh.js silver-helix

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

	// ns.tail()
	let servers = serverList(ns);

            for (let server of servers) {
                try {
                    ns.brutessh(server)
                    ns.ftpcrack(server)
                    ns.relaysmtp(server)
                    ns.httpworm(server)
                    ns.sqlinject(server)
                } catch { }

                try {
                    ns.nuke(server)
                } catch { }

                await ns.sleep(50)
                
                

            }
            await ns.sleep(50)
    if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel("CSEC") && ns.fileExists("BruteSSH.exe", "home")) {
        await ns.exec("/utils/backdoor.js", "home", 1, "CSEC")
    await ns.sleep(15000)
    }

    if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel("avmnite-02h") && ns.fileExists("BruteSSH.exe", "home")) {
        await ns.exec("/utils/backdoor.js", "home", 1, "avmnite-02h")
        await ns.sleep(15000)
    }
    if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel("I.I.I.I") ) {
        await ns.exec("/utils/backdoor.js", "home", 1, "I.I.I.I")
        await ns.sleep(15000)
    }
    if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel("run4theh111z") ) {
        await ns.exec("/utils/backdoor.js", "home", 1, "run4theh111z")
        await ns.sleep(15000)
    }
}