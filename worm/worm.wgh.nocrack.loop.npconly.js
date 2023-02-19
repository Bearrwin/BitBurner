/** @param {NS} ns */

/**
 * Returns an array of servers dynamically
 */

// run worm.wgh.js silver-helix

function serverList(ns, current = "home", set = new Set()) {
    let connections = ns.scan(current)
    let next = connections.filter(c => !set.has(c))
    next.forEach(n => {
        set.add(n);
        return serverList(ns, n, set)
    })
        return Array.from(set.keys())

}

function threadCount(ns, hostname, scriptRam) {
    let threads = 1;
    let free_ram = ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname)

    threads = free_ram / scriptRam
    return Math.floor(threads)
}

export async function main(ns) {
    let target = ns.args[0];
    
    let servers = serverList(ns).filter(s => !ns.getPurchasedServers().includes(s) && s != "home");
        
    for (let server of servers) {
        await ns.scp("/loop/combo.wgh.nocrack.loop.js", server, "home")
        // ns.tprint("copying /loop/combo.wgh.nocrack.loop.js ", server)
    }
    

    // while (true) {
        for (let server of servers) {
            try {
                ns.brutessh(server)
                ns.ftpcrack(server)
                ns.relaysmtp(server)
                ns.httpworm(server)
                ns.sqlinject(server)
            } catch { }

            try {
                ns.nuke(server)
            } catch { }

            await ns.sleep(50)
            // divert all the threads to the most valuable command
            let available_threads = threadCount(ns, server, 2.8)
            if (available_threads >= 1) {
                ns.exec("/loop/combo.wgh.nocrack.loop.js", server, available_threads, (target))

            }

        }
        await ns.sleep(50)

        
    // }

}