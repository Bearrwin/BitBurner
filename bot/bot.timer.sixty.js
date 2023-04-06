/** @param {NS} ns */
export async function main(ns) {
	let time = 0

	// this simple script has a while loop which will never end, as no condition is changed
	// to be false, it increments a variable by one each cycle and waits 60 secs to do it again
	// and each cycle prints to the terminal.
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