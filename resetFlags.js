/** @param {NS} ns */
export async function main(ns) {

// reset faction flags

// misc factions

ns.write("/savedVar/netburnersDone.txt", "false", "w")
ns.write("/savedVar/shadowsofanarchyDone.txt", "false", "w")
ns.write("/savedVar/tiandihuiDone.txt", "false", "w")

// city factions

ns.write("/savedVar/aevumDone.txt", "false", "w")
ns.write("/savedVar/chongqingDone.txt", "false", "w")
ns.write("/savedVar/ishimaDone.txt", "false", "w")
ns.write("/savedVar/newtokyoDone.txt", "false", "w")
ns.write("/savedVar/stwelveDone.txt", "false", "w")
ns.write("/savedVar/volhaven.txt", "false", "w")

// hacking groups

ns.write("/savedVar/csecDone.txt", "false", "w")
ns.write("/savedVar/nitesecDone.txt", "false", "w")
ns.write("/savedVar/blackhandDone.txt", "false", "w")
ns.write("/savedVar/bitrunnersDone.txt", "false", "w")

// megacorporations

ns.write("/savedVar/bachmanDone.txt", "false", "w")
ns.write("/savedVar/bladeDone.txt", "false", "w")
ns.write("/savedVar/clarkeincDone.txt", "false", "w")
ns.write("/savedVar/ecorpDone.txt", "false", "w")
ns.write("/savedVar/foursigmaDone.txt", "false", "w")
ns.write("/savedVar/fulcrumDone.txt", "false", "w")
ns.write("/savedVar/kuaigongDone.txt", "false", "w")
ns.write("/savedVar/megacorpDone.txt", "false", "w")
ns.write("/savedVar/nwoDone.txt", "false", "w")
ns.write("/savedVar/omnitekDone.txt", "false", "w")


// crime organisations


ns.write("/savedVar/darkarmyDone.txt", "false", "w")
ns.write("/savedVar/slumsnakesDone.txt", "false", "w")
ns.write("/savedVar/silhouetteDone.txt", "false", "w")
ns.write("/savedVar/speakersDone.txt", "false", "w")
ns.write("/savedVar/syndicateDone.txt", "false", "w")
ns.write("/savedVar/tetradsDone.txt", "false", "w")

// end game factions

ns.write("/savedVar/covenantDone.txt", "false", "w")
ns.write("/savedVar/daedalusDone.txt", "false", "w")
ns.write("/savedVar/illuminatiDone.txt", "false", "w")




// reset stage progression flags


ns.write("/savedVar/stageOneDone.txt", "false", "w")
ns.write("/savedVar/stageOne.txt", "true", "w")
ns.write("/savedVar/stageTwoDone.txt", "false", "w")
ns.write("/savedVar/stageThreeDone.txt", "false", "w")
ns.write("/savedVar/stageFourDone.txt", "false", "w")
ns.write("/savedVar/stageFiveDone.txt", "false", "w")
ns.write("/savedVar/stageSixDone.txt", "false", "w")
ns.write("/savedVar/stageSevenDone.txt", "false", "w")
ns.write("/savedVar/stageEightDone.txt", "false", "w")


// reset misc flags


ns.write("/savedVar/currentBitNode.txt", "", "w")
ns.write("/savedVar/newTarget.txt", "false", "w")
ns.write("/savedVar/purchServerLimit.txt", "", "w")
ns.write("/savedVar/purchServCount.txt", "", "w")
ns.write("/savedVar/purchServList.txt", "", "w")




}