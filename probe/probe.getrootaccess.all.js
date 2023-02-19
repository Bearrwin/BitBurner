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
	let hasBrute = 0
	let hasFTP = 0
	let hasHTTP = 0
	let hasSMTP = 0
	let hasSQL = 0
	let haveCrackQty = 0

	let hackSkill = ns.getHackingLevel()
	let serverCount = 0
	let noAccess = serverList(ns).filter(a => !ns.hasRootAccess(a));


	// How many crack programs do we have?
	if (ns.fileExists("BruteSSH.exe", "home")) {
		haveCrackQty++
		hasBrute++
		ns.tprint('"I have found BruteSSH.exe master, and a total of ' + haveCrackQty + " crack programs")
	}
	if (ns.fileExists("FTPCrack.exe", "home")) {
		haveCrackQty++
		hasFTP++
		ns.tprint('"I have found FTPCrack.exe master, and a total of ' + haveCrackQty + " crack programs")
	}
	if (ns.fileExists("HTTPWorm.exe", "home")) {
		haveCrackQty++
		hasHTTP++
		ns.tprint('"I have found HTTPWorm.exe master, and a total of ' + haveCrackQty + " crack programs")
	}
	if (ns.fileExists("relaySMTP.exe", "home")) {
		haveCrackQty++
		hasSMTP++
		ns.tprint('"I have found relaySMTP.exe master, and a total of ' + haveCrackQty + " crack programs")
	}
	if (ns.fileExists("SQLInject.exe", "home")) {
		haveCrackQty++
		hasSQL++
		ns.tprint('"I have found a SQLInject.exe master, and a total of ' + haveCrackQty + " crack programs")
	}
	if (hasBrute == 0) {
		ns.tprint("You do not have BruteSSH.exe")
	}
	if (hasFTP == 0) {
		ns.tprint("You do not have FTPCrack.exe")
	}
	if (hasHTTP == 0) {
		ns.tprint("You do not have HTTPWorm.exe")
	}
	if (hasSMTP == 0) {
		ns.tprint("You do not have relaySMTP.exe")
	}
	if (hasSQL == 0) {
		ns.tprint("You do not have SQLInject.exe")
	}
	ns.tprint(" ")
	ns.tprint(" ")

	let crackable = noAccess.filter(a => (ns.getServerNumPortsRequired(a) <= haveCrackQty));


	for (let server of crackable) {
		ns.tprint(server + " Is crackable")
		serverCount++
	}
	if (serverCount == 0) {
		ns.tprint("Sorry master I could not find any more servers we can crack.")
	} else {

		ns.tprint("Master, Master!, I found " + serverCount + " servers we can crack!")
	}


	for (let server of crackable) {

		try {
			ns.brutessh(server)
			ns.ftpcrack(server)
			ns.relaysmtp(server)
			ns.httpworm(server)
			ns.sqlinject(server)
			ns.nuke(server)
		} catch { }

		if (hackSkill < ns.getServerRequiredHackingLevel) {
			ns.tprint(server + " Has been cracked and nuked " + ns.hasRootAccess(server))
		} else {
			ns.tprint(server + " Has been cracked and nuked" + ns.hasRootAccess(server) + " but your hacking skill is too low "
				+ " Your hacking skill is " + hackSkill + " / " + ns.getServerRequiredHackingLevel(server))
		}

	}

	let remainServ = serverList(ns).filter(a => !ns.hasRootAccess(a));

	for (let server of remainServ) {
		ns.tprint(server + " requires " + ns.getServerNumPortsRequired(server))

	}


}