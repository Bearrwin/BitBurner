/** @param {NS} ns */
export async function main(ns) {


	ns.corporation.sellMaterial("MegaSoft", "Aevum", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "Chongqing", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "Ishima", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "New Tokyo", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "Sector-12", "AI Cores", "Max", "MP")
	ns.corporation.sellMaterial("MegaSoft", "Volhaven", "AI Cores", "Max", "MP")

	try {
		ns.corporation.setMaterialMarketTA2("MegaSoft", "Aevum", "AI Cores", "Max", "MP")
		ns.corporation.setMaterialMarketTA2("MegaSoft", "Chongqing", "AI Cores", "Max", "MP")
		ns.corporation.setMaterialMarketTA2("MegaSoft", "Ishima", "AI Cores", "Max", "MP")
		ns.corporation.setMaterialMarketTA2("MegaSoft", "New Tokyo", "AI Cores", "Max", "MP")
		ns.corporation.setMaterialMarketTA2("MegaSoft", "Sector-12", "AI Cores", "Max", "MP")
		ns.corporation.setMaterialMarketTA2("MegaSoft", "Volhaven", "AI Cores", "Max", "MP")

	} catch { }

	ns.corporation.sellProduct("MegaSoft", "Sector-12", "OS", "Max", "MP", true)
	// ns.corporation.sellProduct("MegaSoft", "Sector-12", "Office", "Max", "MP", true)
	// ns.corporation.sellProduct("MegaSoft", "Sector-12", "Spreadsheet", "Max", "MP", true)
	// ns.corporation.sellProduct("MegaSoft", "Sector-12", "Game", "Max", "MP", true)

	try {

		ns.corporation.setProductMarketTA2("MegaSoft", "OS", true)
		// ns.corporation.setProductMarketTA2("MegaSoft", "Office", true)
		// ns.corporation.setProductMarketTA2("MegaSoft", "Spreadsheet", true)
		// ns.corporation.setProductMarketTA2("MegaSoft", "Game", true)



	} catch { }



}