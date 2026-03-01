/**
 * Script to auto solve contract (.cct)
 * @param {NS} ns
 */
import { SOLVERS } from "/ScorpionOS/tools/solver.js";
import { scanAll } from "/ScorpionOS/tools/utils.js";

export async function main(ns) {
  ns.disableLog("ALL");
  ns.ui.openTail()
  ns.clearLog();
  const servers = scanAll(ns);

  while (true) {
    for (const host of servers) {
      const files = ns.ls(host, ".cct");

      for (const file of files) {
        const type = ns.codingcontract.getContractType(file, host);
        const solver = SOLVERS[type];

        if (!solver) {
          ns.print(`❔ No solver for : ${type} (${file} sur ${host})`,"info",10000);
          continue;
        }

        const data = ns.codingcontract.getData(file, host);

        try {
          const answer = solver(data);
          const success = ns.codingcontract.attempt(answer, file, host);
          ns.print(success);

          if (!success) ns.print(`⚠️ Wrong answer for ${type} (${file} on ${host})`,"warning",10000)
        } catch (e) {
          ns.print(`❌ Solver error ${type} : ${e}`, "error",10000);
        }
      }
    }
    await ns.sleep(60000);
  }
}