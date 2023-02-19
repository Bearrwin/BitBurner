/** @param {NS} ns */
export async function main(ns) {


// set the following variable "servers" to = a list of your purchased servers
let servers = ns.getPurchasedServers();

// open the log window
ns.tail()

// for every entry in the variable servers, run the below script which copies all scripts from home
// to the target server.
for (let serverName of servers) {

	ns.exec("/serv/serv.propagate.bought.js", "home", 1, serverName)

};


}