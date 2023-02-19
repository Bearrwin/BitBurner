/** @param {NS} ns */
export async function main(ns) {
	let sName = ns.args[0];
	let dirlist = ns.ls("home");
	let shortlist = dirlist .filter(s =>  s.includes(".js"));
	
	
	ns.scp(shortlist, (sName));
	
}