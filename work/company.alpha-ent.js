/** @param {NS} ns */
export async function main(ns) {
	// Self-explanatory
	ns.singularity.applyToCompany("Alpha Enterprises", "Software")
	await ns.sleep(1000)
	ns.singularity.workForCompany("Alpha Enterprises")
	// ns.singularity.workForCompany("Alpha Enterprises", false)
	ns.tprint("Starting work at Alpha Enterprises")
	ns.tprint("")
	await ns.sleep(1000)

}