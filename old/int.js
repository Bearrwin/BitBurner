/** @param {NS} ns */
export async function main(ns) {

	while (true) {
		ns.singularity.travelToCity("Chongqing")
		await ns.sleep(1)
		ns.singularity.travelToCity("Sector-12")
		await ns.sleep(1)
	}


}