/** @param {NS} ns */
export async function main(ns) {

  function serverList(ns, current = "home", set = new Set()) {
    let connections = ns.scan(current)
    let next = connections.filter(c => !set.has(c))
    next.forEach(n => {
      set.add(n);
      return serverList(ns, n, set)
    })
    return Array.from(set.keys())

  }

  ns.ui.openTail()
  //let servers = serverList(ns).filter(s => !ns.getPurchasedServers().includes(s))
  let servers = serverList(ns).filter(s => !ns.getPurchasedServers().includes(s) && !s.startsWith("hacknet"))

  for (let server of servers) {
    ns.print(` ${server} `)
  }
}


    //await ns.scp("/loop/combo.wgh.nocrack.loop.js", server, "home")
    // ns.tprint("copying /loop/combo.wgh.nocrack.loop.js ", server)
//  }



//}