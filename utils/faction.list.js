/** @param {NS} ns */
export async function main(ns) {
	var playerFaction = ns.getPlayer().factions
	ns.tprint(playerFaction)
}