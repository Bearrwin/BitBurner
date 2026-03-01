/** @param {NS} ns */
export async function main(ns) {
	let dirlist = ns.ls("home")
	let shortlist = dirlist .filter(s =>  s.includes(".js"));
	let vshortlist = shortlist .filter(s =>  !s.includes("ServerScripts"));
	ns.tail()
	//ns.tprint(vshortlist)
	ns.print(vshortlist)
	//ns.scp(shortlist, "Serv", "home")
}