/** @param {NS} ns */
export async function main(ns) {


	ns.corporation.sellMaterial("MegaSoft", "Aevum", "AI Cores", 0, "MP")
	ns.corporation.sellMaterial("MegaSoft", "Chongqing", "AI Cores", 0, "MP")
	ns.corporation.sellMaterial("MegaSoft", "Ishima", "AI Cores", 0, "MP")
	ns.corporation.sellMaterial("MegaSoft", "New Tokyo", "AI Cores", 0, "MP")
	ns.corporation.sellMaterial("MegaSoft", "Sector-12", "AI Cores", 0, "MP")
	ns.corporation.sellMaterial("MegaSoft", "Volhaven", "AI Cores", 0, "MP")

	try {

		ns.corporation.sellProduct("MegaSoft", "Sector-12", "OS", 0, "MP", true)
		ns.corporation.sellProduct("MegaSoft", "Sector-12", "Office", 0, "MP", true)
		ns.corporation.sellProduct("MegaSoft", "Sector-12", "Spreadsheet", 0, "MP", true)
		ns.corporation.sellProduct("MegaSoft", "Sector-12", "Game", 0, "MP", true)

	} catch { }


}