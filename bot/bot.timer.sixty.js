/** @param {NS} ns */
export async function main(ns) {
	let time = 0
	while (true) {
		await ns.sleep(60000)
		time++
		if (time > 1) {
			ns.tprint(time + " Minutes has elapsed since start.")
		} else {
			ns.tprint(time + " Minute has elapsed since start.")
		}


	}


}