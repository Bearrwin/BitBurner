/** @param {NS} ns */
export async function main(ns) {

  ns.ui.openTail()

  ns.run ("/utils/darkweb.auto.goalOne.js")
await ns.sleep(1000)
  ns.run ("/utils/cracknuke.single.js", 1, "n00dles")
  await ns.sleep(1000)
  ns.run ("/init/init.batcher.pservPool.js", 1, "n00dles", 1, 1, 10, 10)
  await ns.sleep(100)
  ns.singularity.travelToCity("Volhaven")
  await ns.sleep(1000)
  ns.singularity.universityCourse("ZB Institute of Technology", "Algorithms")
  //ns.run ("work/uni.rothman.hack.js")
  //ns.singularity.destroyW0r1dD43m0n()
  ns.run ("/worm/worm.nuke.js")
  await ns.sleep(10000)
  ns.run ("/worm/worm.wgh.nocrack.loop.npconly.js", 1, "n00dles")





}