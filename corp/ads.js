/** @param {NS} ns */
export async function main(ns) {

	ns.tail()

	while (true) {


		try {
			ns.corporation.unlockUpgrade("Shady Accounting")
		} catch { }

		try {
			ns.corporation.unlockUpgrade("Government Partnership")
		} catch { }

		try {
			ns.corporation.levelUpgrade("Wilson Analytics")
		} catch { }

		try {
			ns.corporation.hireAdVert("MegaSoft")
		} catch { }

		try {
			ns.corporation.levelUpgrade("ABC SalesBots")
		} catch { }

		

		await ns.sleep(100)
	}





	// Smart Storage
	// Smart Factories
	// DreamSense
	// Wilson Analytics
	// ABC SalesBots
	// Nuoptimal Nootropic Injector Implants
	// Speech Processor Implants
	// Neural Accelerators
	// FocusWires
	// Project Insight

}