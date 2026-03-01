/** @param {NS} ns */
export async function main(ns) {
	let hasBrute = 0
	let hasFTP = 0
	let hasHTTP = 0
	let hasSMTP = 0
	let hasSQL = 0

	let haveCrackQty = 0




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
	if (hasBrute == 0){
		ns.tprint("You do not have BruteSSH.exe")
	}
	if (hasFTP == 0){
		ns.tprint("You do not have FTPCrack.exe")
	}
	if (hasHTTP == 0){
		ns.tprint("You do not have HTTPWorm.exe")
	}
	if (hasSMTP == 0){
		ns.tprint("You do not have relaySMTP.exe")
	}
	if (hasSQL == 0){
		ns.tprint("You do not have SQLInject.exe")
	}
}