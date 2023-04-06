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
    // set.delete("home")
    return Array.from(set.keys())

}

function threadCount(ns, hostname, scriptRam) {
    let threads = 1;
    let free_ram = ns.getServerMaxRam(hostname) - ns.getServerUsedRam(hostname)

    threads = free_ram / scriptRam
    return Math.floor(threads)
}

export async function main(ns) {
    // ns.tail()
    let servers = serverList(ns).filter(s => s != "home");


    for (let server of servers) {
        ns.killall(server)

    }


}