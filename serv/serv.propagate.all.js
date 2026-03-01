/** @param {NS} ns */
import { serverList } from "/func/func.js";


export async function main(ns) {


// set the following variable "servers" to = a list of your purchased servers
let servers = ns.getPurchasedServers();
let hnetServ = serverList(ns).filter(s => s.startsWith("hacknet"))


ns.print(hnetServ)

// open the log window
// ns.tail()
ns.ui.openTail()
// for every entry in the variable servers, run the below script which copies all scripts from home
// to the target server.
for (let serverName of servers) {

	ns.exec("/serv/serv.propagate.bought.js", "home", 1, serverName)
await ns.sleep(100);
};

for (let serverName of hnetServ) {

ns.exec("/serv/serv.propagate.bought.js", "home", 1, serverName)
await ns.sleep(100);

};




}