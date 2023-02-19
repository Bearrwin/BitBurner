/** @param {NS} ns */
export async function main(ns) {

let servers = ns.getPurchasedServers();

ns.tail()

for (let serverName of servers) {

	ns.exec("/serv/serv.propagate.bought.js", "home", 1, serverName)

};


}