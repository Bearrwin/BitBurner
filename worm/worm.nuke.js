/** @param {NS} ns */

/**
 * Returns an array of servers dynamically
 */

function serverList(ns, current = "home", set = new Set()) {
    let connections = ns.scan(current)
    let next = connections.filter(c => !set.has(c) && (c) != "home")
    next.forEach(n => {
        set.add(n);
        return serverList(ns, n, set)

    })

    return Array.from(set.keys())

}


export async function main(ns) {
    ns.disableLog("sleep")
    ns.tail()
    await ns.sleep(1000)
    ns.moveTail(50, 50)
    ns.resizeTail(500, 150)

    // let serverCounter = 0        
    let servers = serverList(ns).filter(s => !ns.hasRootAccess(s));
    // let servers = serverList(ns).filter(s => !ns.getPurchasedServers().includes(s) && s != "home");
    // let noRoot = servers.filter(s => !ns.hasRootAccess(s));
    for (let server of servers) {
        // ns.tprint(server)
        // serverCounter++
        try {
            ns.brutessh(server)
            ns.ftpcrack(server)
            ns.relaysmtp(server)
            ns.httpworm(server)
            ns.sqlinject(server)
        } catch { }
        await ns.sleep(50)
        try {
            ns.nuke(server)
        } catch { }
        await ns.sleep(50)



    }
    // ns.tprint(serverCounter)
    let csecBackdoored = ns.getServer("CSEC").backdoorInstalled
    await ns.sleep(50)
    if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel("CSEC") && ns.hasRootAccess("CSEC") && csecBackdoored == false) {
        await ns.exec("/utils/backdoor.js", "home", 1, "CSEC")
        await ns.sleep(15000)
    }
    let avmBackdoored = ns.getServer("avmnite-02h").backdoorInstalled
    if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel("avmnite-02h") && ns.hasRootAccess("avmnite-02h") && avmBackdoored == false) {
        await ns.exec("/utils/backdoor.js", "home", 1, "avmnite-02h")
        await ns.sleep(15000)
    }
    let iiiiBackdoored = ns.getServer("I.I.I.I").backdoorInstalled
    if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel("I.I.I.I") && ns.hasRootAccess("I.I.I.I") && iiiiBackdoored == false) {
        await ns.exec("/utils/backdoor.js", "home", 1, "I.I.I.I")
        await ns.sleep(15000)
    }
    let run4Backdoored = ns.getServer("run4theh111z").backdoorInstalled
    if (ns.getHackingLevel() > ns.getServerRequiredHackingLevel("run4theh111z") && ns.hasRootAccess("run4theh111z") && run4Backdoored == false) {
        await ns.exec("/utils/backdoor.js", "home", 1, "run4theh111z")
        await ns.sleep(15000)
    }
}