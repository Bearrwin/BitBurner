/** @param {NS} ns */
export async function main(ns) {


	try {
		ns.corporation.expandIndustry("Software", "MegaSoft")
	} catch { }



	await ns.sleep(1000)

	ns.corporation.expandCity("MegaSoft", "Aevum")
	ns.corporation.expandCity("MegaSoft", "Chongqing")
	ns.corporation.expandCity("MegaSoft", "Ishima")
	ns.corporation.expandCity("MegaSoft", "New Tokyo")
	ns.corporation.expandCity("MegaSoft", "Volhaven")

	await ns.sleep(1000)

	ns.corporation.upgradeOfficeSize("MegaSoft", "Aevum", 3)
	ns.corporation.upgradeOfficeSize("MegaSoft", "Chongqing", 3)
	ns.corporation.upgradeOfficeSize("MegaSoft", "Ishima", 3)
	ns.corporation.upgradeOfficeSize("MegaSoft", "New Tokyo", 3)
	ns.corporation.upgradeOfficeSize("MegaSoft", "Sector-12", 12)
	ns.corporation.upgradeOfficeSize("MegaSoft", "Volhaven", 3)

	await ns.sleep(1000)

	ns.corporation.hireEmployee("MegaSoft", "Aevum", "Operations")
	ns.corporation.hireEmployee("MegaSoft", "Aevum", "Engineer")
	ns.corporation.hireEmployee("MegaSoft", "Aevum", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Aevum", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Aevum", "Management")
	ns.corporation.hireEmployee("MegaSoft", "Aevum", "Research & Development")

	ns.corporation.hireEmployee("MegaSoft", "Chongqing", "Operations")
	ns.corporation.hireEmployee("MegaSoft", "Chongqing", "Engineer")
	ns.corporation.hireEmployee("MegaSoft", "Chongqing", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Chongqing", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Chongqing", "Management")
	ns.corporation.hireEmployee("MegaSoft", "Chongqing", "Research & Development")

	ns.corporation.hireEmployee("MegaSoft", "Ishima", "Operations")
	ns.corporation.hireEmployee("MegaSoft", "Ishima", "Engineer")
	ns.corporation.hireEmployee("MegaSoft", "Ishima", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Ishima", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Ishima", "Management")
	ns.corporation.hireEmployee("MegaSoft", "Ishima", "Research & Development")

	ns.corporation.hireEmployee("MegaSoft", "New Tokyo", "Operations")
	ns.corporation.hireEmployee("MegaSoft", "New Tokyo", "Engineer")
	ns.corporation.hireEmployee("MegaSoft", "New Tokyo", "Business")
	ns.corporation.hireEmployee("MegaSoft", "New Tokyo", "Business")
	ns.corporation.hireEmployee("MegaSoft", "New Tokyo", "Management")
	ns.corporation.hireEmployee("MegaSoft", "New Tokyo", "Research & Development")

	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Operations")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Engineer")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Engineer")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Engineer")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Engineer")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Management")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Management")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Management")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Management")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Research & Development")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Research & Development")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Research & Development")
	ns.corporation.hireEmployee("MegaSoft", "Sector-12", "Research & Development")

	ns.corporation.hireEmployee("MegaSoft", "Volhaven", "Operations")
	ns.corporation.hireEmployee("MegaSoft", "Volhaven", "Engineer")
	ns.corporation.hireEmployee("MegaSoft", "Volhaven", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Volhaven", "Business")
	ns.corporation.hireEmployee("MegaSoft", "Volhaven", "Management")
	ns.corporation.hireEmployee("MegaSoft", "Volhaven", "Research & Development")

	ns.corporation.purchaseWarehouse("MegaSoft", "Aevum")
	ns.corporation.purchaseWarehouse("MegaSoft", "Chongqing")
	ns.corporation.purchaseWarehouse("MegaSoft", "Ishima")
	ns.corporation.purchaseWarehouse("MegaSoft", "New Tokyo")
	ns.corporation.purchaseWarehouse("MegaSoft", "Volhaven")

	await ns.sleep(1000)

	ns.corporation.upgradeWarehouse("MegaSoft", "Aevum", 2)
	ns.corporation.upgradeWarehouse("MegaSoft", "Chongqing", 2)
	ns.corporation.upgradeWarehouse("MegaSoft", "Ishima", 2)
	ns.corporation.upgradeWarehouse("MegaSoft", "New Tokyo", 2)
	ns.corporation.upgradeWarehouse("MegaSoft", "Sector-12", 4)
	ns.corporation.upgradeWarehouse("MegaSoft", "Volhaven", 2)

	await ns.sleep(1000)

	try {
		ns.corporation.unlockUpgrade("Smart Supply")
	} catch { }

	try {
		ns.corporation.levelUpgrade("DreamSense")
		await ns.sleep(100)
		ns.corporation.levelUpgrade("DreamSense")
		await ns.sleep(100)
		ns.corporation.levelUpgrade("DreamSense")
		await ns.sleep(100)
		ns.corporation.levelUpgrade("ABC SalesBots")
		await ns.sleep(100)
		ns.corporation.levelUpgrade("ABC SalesBots")
		await ns.sleep(100)
		ns.corporation.levelUpgrade("ABC SalesBots")
		await ns.sleep(100)
		// ns.corporation.levelUpgrade("Nuoptimal Nootropic Injector Implants")
		// await ns.sleep(100)
		// ns.corporation.levelUpgrade("Speech Processor Implants")
		// await ns.sleep(100)
		// ns.corporation.levelUpgrade("Neural Accelerators")
		// await ns.sleep(100)
		// ns.corporation.levelUpgrade("FocusWires")
		// await ns.sleep(100)
		// ns.corporation.levelUpgrade("Project Insight")
		// // await ns.sleep(100)
		// ns.corporation.levelUpgrade("Project Insight")


	} catch { }

	await ns.sleep(1000)

	ns.corporation.setSmartSupply("MegaSoft", "Aevum", true)
	ns.corporation.setSmartSupply("MegaSoft", "Chongqing", true)
	ns.corporation.setSmartSupply("MegaSoft", "Ishima", true)
	ns.corporation.setSmartSupply("MegaSoft", "New Tokyo", true)
	ns.corporation.setSmartSupply("MegaSoft", "Sector-12", true)
	ns.corporation.setSmartSupply("MegaSoft", "Volhaven", true)

	await ns.sleep(1000)

	ns.corporation.sellMaterial("MegaSoft", "Aevum", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "Chongqing", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "Ishima", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "New Tokyo", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "Sector-12", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "Volhaven", "AI Cores", "Max", "MP")

	let partyCounter = 0

	while (partyCounter < 2) {
		ns.corporation.buyCoffee("MegaSoft", "Aevum")
		ns.corporation.buyCoffee("MegaSoft", "Chongqing")
		ns.corporation.buyCoffee("MegaSoft", "Ishima")
		ns.corporation.buyCoffee("MegaSoft", "New Tokyo")
		ns.corporation.buyCoffee("MegaSoft", "Sector-12")
		ns.corporation.buyCoffee("MegaSoft", "Volhaven")

		ns.corporation.throwParty("MegaSoft", "Aevum", 1000000)
		ns.corporation.throwParty("MegaSoft", "Chongqing", 1000000)
		ns.corporation.throwParty("MegaSoft", "Ishima", 1000000)
		ns.corporation.throwParty("MegaSoft", "New Tokyo", 1000000)
		ns.corporation.throwParty("MegaSoft", "Sector-12", 1000000)
		ns.corporation.throwParty("MegaSoft", "Volhaven", 1000000)
		partyCounter++
		await ns.sleep(20000)
	}


	ns.corporation.makeProduct("MegaSoft", "Sector-12", "OS", 1000000, 1000000)
	// ns.corporation.makeProduct("MegaSoft", "Sector-12", "Office", 1000000, 1000000)
	// ns.corporation.makeProduct("MegaSoft", "Sector-12", "Spreadsheet", 1000000, 1000000)


	ns.clearPort(1)
	ns.writePort(1, 4)
	ns.clearPort(2)
	ns.writePort(2, "Exchange for Corporation Research")
	ns.clearPort(3)
	ns.writePort(3, "")



}