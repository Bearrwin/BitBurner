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

	// the purpose of this script is to crack any servers you are able to crack but haven't
	// and report that to you and also the list of servers you can't yet crack.

	// How many crack programs do we have?
	// by using variables and increasing them like hasBrute++ turns that variable 
	// from its starting number to a 1, which we use later to report what crack
	// programs are available. At the same time increasing the total qty counter
	// which is used later to assess suitable servers.

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
	// noAccess variable is defined at the top as the entire server list but
	// filtering to only keep ones that meet the condition of not having root access.
	// we then filter that here by whether the number of ports required to nuke is 
	// less than our CrackQty the filtered list becomes the crackable variable.

	let crackable = noAccess.filter(a => (ns.getServerNumPortsRequired(a) <= haveCrackQty));

	// we then take the sorted list stored in the crackable variable run the for loop functin
	// which says for each entry(called the local variable "server") do all the actions
	// in the for loop then change to the next entry and do those actions on it.
	// here we are simply printing to the terminal the name of the server, and our text
	// that it is crackable as user friendly information and then we are increasing
	// a counter by 1 for each entry tin he list.

	for (let server of crackable) {
		ns.tprint(server + " Is crackable")
		serverCount++
	}
	// if crackable was empty the counter would not increase, and this will kick in.
	if (serverCount == 0) {
		ns.tprint("Sorry master I could not find any more servers we can crack.")
	} else {

		ns.tprint("Master, Master!, I found " + serverCount + " servers we can crack!")
	}

	// here we act on the same list stored in crackable, but now we are using a "try"
	// function which doesn't crash the script if you can't do the action, and with catch
	// being empty it doesn't take any action on failure.
	for (let server of crackable) {

		try {
			ns.brutessh(server)
			ns.ftpcrack(server)
			ns.relaysmtp(server)
			ns.httpworm(server)
			ns.sqlinject(server)
			ns.nuke(server)
		} catch { }


		// we now report to the user that this server has been cracked and nuked
		// (based on the numbers not actual success). or below in else if we could(and presumably did)
		// crack it but our hacking skill is too low to hack it.
		if (hackSkill < ns.getServerRequiredHackingLevel) {
			ns.tprint(server + " Has been cracked and nuked " + ns.hasRootAccess(server))
		} else {
			ns.tprint(server + " Has been cracked and nuked" + ns.hasRootAccess(server) + " but your hacking skill is too low "
				+ " Your hacking skill is " + hackSkill + " / " + ns.getServerRequiredHackingLevel(server))
		}

	}

	// after having applied the above cracks and nuke we create a new list of servers and 
	// filter it by what we don't have root access to and then using the for loop report 
	// that to the user, along with how many ports that server requires to be opened.

	let remainServ = serverList(ns).filter(a => !ns.hasRootAccess(a));

	for (let server of remainServ) {
		ns.tprint(server + " requires " + ns.getServerNumPortsRequired(server))

	}


}