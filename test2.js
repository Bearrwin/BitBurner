/** @param {NS} ns */
export async function main(ns) {
ns.ui.openTail()

		if (ns.singularity.checkFactionInvitations(ns.enums.FactionName.CyberSec)) {
		          ns.tprint("Invite")
          }

        while (!ns.singularity.checkFactionInvitations("ns.enums.FactionName.CyberSec")) {
        	ns.tprint("Waiting for an invitation to NiteSec")
			  await ns.sleep(5000)
    }


    
}