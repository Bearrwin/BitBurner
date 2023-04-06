/** @param {NS} ns */
export async function main(ns) {
	ns.tail()

	var playerFaction = ns.getPlayer().factions


	// ns.singularity.getFactionRep()

	// misc factions

	ns.tprint("")
	ns.tprint("Misc Factions")
	ns.tprint("")

	if (playerFaction.includes("NetBurners")) {
		var netburnersrep = ns.singularity.getFactionRep("NetBurners")
	} else {
		var netburnersrep = 0
	}
	ns.tprint("My reputation with NetBurners is currently... " + netburnersrep)
	ns.write("/savedVar/netburnersRep.txt", netburnersrep, "w")
	ns.clearPort(3001)
	ns.writePort(3001, netburnersrep)


	if (playerFaction.includes("Shadows of Anarchy")) {
		var soarep = ns.singularity.getFactionRep("Shadows of Anarchy")
	} else {
		var soarep = 0
	}
	ns.tprint("My reputation with Shadows of Anarchy is currently... " + soarep)
	ns.write("/savedVar/shadowsofanarchyRep.txt", soarep, "w")
	ns.clearPort(3002)
	ns.writePort(3002, soarep)


	if (playerFaction.includes("Tian Di Hui")) {
		var tianrep = ns.singularity.getFactionRep("Tian Di Hui")
	} else {
		var tianrep = 0
	}
	ns.tprint("My reputation with Tian Di Hui is currently... " + tianrep)
	ns.write("/savedVar/tiandihuiRep.txt", tianrep, "w")
	ns.clearPort(3003)
	ns.writePort(3003, tianrep)


	// // city factions

	ns.tprint("")
	ns.tprint("City Factions")
	ns.tprint("")


	if (playerFaction.includes("Aevum")) {
		var aevumrep = ns.singularity.getFactionRep("Aevum")
	} else {
		var aevumrep = 0
	}
	ns.tprint("My reputation with Aevum is currently... " + aevumrep)
	ns.write("/savedVar/aevumRep.txt", aevumrep, "w")
	ns.clearPort(3011)
	ns.writePort(3011, aevumrep)


	if (playerFaction.includes("Chongqing")) {
		var chongqingrep = ns.singularity.getFactionRep("Chongqing")
	} else {
		var chongqingrep = 0
	}
	ns.tprint("My reputation with Chongqing is currently... " + chongqingrep)
	ns.write("/savedVar/chongqingRep.txt", chongqingrep, "w")
	ns.clearPort(3012)
	ns.writePort(3012, chongqingrep)


	if (playerFaction.includes("Ishima")) {
		var ishimarep = ns.singularity.getFactionRep("Ishima")
	} else {
		var ishimarep = 0
	}
	ns.tprint("My reputation with Ishima is currently... " + ishimarep)
	ns.write("/savedVar/ishimaRep.txt", ishimarep, "w")
	ns.clearPort(3013)
	ns.writePort(3013, ishimarep)


	if (playerFaction.includes("New Tokyo")) {
		var newtokyorep = ns.singularity.getFactionRep("New Tokyo")
	} else {
		var newtokyorep = 0
	}
	ns.tprint("My reputation with New Tokyo is currently... " + newtokyorep)
	ns.write("/savedVar/newtokyoRep.txt", newtokyorep, "w")
	ns.clearPort(3014)
	ns.writePort(3014, newtokyorep)


	if (playerFaction.includes("Sector-12")) {
		var sector12rep = ns.singularity.getFactionRep("Sector-12")
	} else {
		var sector12rep = 0
	}
	ns.tprint("My reputation with Sector-12 is currently... " + sector12rep)
	ns.write("/savedVar/sector12Rep.txt", sector12rep, "w")
	ns.clearPort(3015)
	ns.writePort(3015, sector12rep)


	if (playerFaction.includes("Volhaven")) {
		var volhavenrep = ns.singularity.getFactionRep("Volhaven")
	} else {
		var volhavenrep = 0
	}
	ns.tprint("My reputation with Volhaven is currently... " + volhavenrep)
	ns.write("/savedVar/volhavenRep.txt", volhavenrep, "w")
	ns.clearPort(3016)
	ns.writePort(3016, volhavenrep)


	// // hacking groups

	ns.tprint("")
	ns.tprint("Hacking Groups")
	ns.tprint("")


	if (playerFaction.includes("CyberSec")) {
		var csecrep = ns.singularity.getFactionRep("CyberSec")
	} else {
		var csecrep = 0
	}
	ns.tprint("My reputation with CyberSec is currently... " + csecrep)
	ns.write("/savedVar/csecRep.txt", csecrep, "w")
	ns.clearPort(3021)
	ns.writePort(3021, csecrep)


	if (playerFaction.includes("NiteSec")) {
		var nitesecrep = ns.singularity.getFactionRep("NiteSec")
	} else {
		var nitesecrep = 0
	}
	ns.tprint("My reputation with NiteSec is currently... " + nitesecrep)
	ns.write("/savedVar/nitesecRep.txt", nitesecrep, "w")
	ns.clearPort(3022)
	ns.writePort(3022, nitesecrep)


	if (playerFaction.includes("The Black Hand")) {
		var blackhandrep = ns.singularity.getFactionRep("The Black Hand")
	} else {
		var blackhandrep = 0
	}
	ns.tprint("My reputation with The Black Hand is currently... " + blackhandrep)
	ns.write("/savedVar/blackhandRep.txt", blackhandrep, "w")
	ns.clearPort(3023)
	ns.writePort(3023, blackhandrep)


	if (playerFaction.includes("BitRunners")) {
		var bitrunnersrep = ns.singularity.getFactionRep("BitRunners")
	} else {
		var bitrunnersrep = 0
	}
	ns.tprint("My reputation with BitRunners is currently... " + bitrunnersrep)
	ns.write("/savedVar/bitrunnersRep.txt", bitrunnersrep, "w")
	ns.clearPort(3024)
	ns.writePort(3024, bitrunnersrep)


	// // megacorporations

	ns.tprint("")
	ns.tprint("Megacorporations")
	ns.tprint("")

	if (playerFaction.includes("Bachman & Associates")) {
		var bachmanrep = ns.singularity.getFactionRep("Bachman & Associates")
	} else {
		var bachmanrep = 0
	}
	ns.tprint("My reputation with Bachman & Associates is currently... " + bachmanrep)
	ns.write("/savedVar/bachmanRep.txt", bachmanrep, "w")
	ns.clearPort(3030)
	ns.writePort(3030, bachmanrep)


	if (playerFaction.includes("Blade Industries")) {
		var bladerep = ns.singularity.getFactionRep("Blade Industries")
	} else {
		var bladerep = 0
	}
	ns.tprint("My reputation with Blade Industries is currently... " + bladerep)
	ns.write("/savedVar/bladeRep.txt", bladerep, "w")
	ns.clearPort(3031)
	ns.writePort(3031, bladerep)


	if (playerFaction.includes("Clarke Incorporated")) {
		var clarkeincrep = ns.singularity.getFactionRep("Clarke Incorporated")
	} else {
		var clarkeincrep = 0
	}
	ns.tprint("My reputation with Clarke Incorporated is currently... " + clarkeincrep)
	ns.write("/savedVar/clarkeincRep.txt", clarkeincrep, "w")
	ns.clearPort(3032)
	ns.writePort(3032, clarkeincrep)


	if (playerFaction.includes("ECorp")) {
		var ecorprep = ns.singularity.getFactionRep("ECorp")
	} else {
		var ecorprep = 0
	}
	ns.tprint("My reputation with ECorp is currently... " + ecorprep)
	ns.write("/savedVar/ecorpRep.txt", ecorprep, "w")
	ns.clearPort(3033)
	ns.writePort(3033, ecorprep)


	if (playerFaction.includes("Four Sigma")) {
		var foursigmarep = ns.singularity.getFactionRep("Four Sigma")
	} else {
		var foursigmarep = 0
	}
	ns.tprint("My reputation with Four Sigma is currently... " + foursigmarep)
	ns.write("/savedVar/foursigmaRep.txt", foursigmarep, "w")
	ns.clearPort(3034)
	ns.writePort(3034, foursigmarep)


	if (playerFaction.includes("Fulcrum Secret Technologies")) {
		var fulcrumrep = ns.singularity.getFactionRep("Fulcrum Secret Technologies")
	} else {
		var fulcrumrep = 0
	}
	ns.tprint("My reputation with Fulcrum Secret Technologies is currently... " + fulcrumrep)
	ns.write("/savedVar/fulcrumRep.txt", fulcrumrep, "w")
	ns.clearPort(3035)
	ns.writePort(3035, fulcrumrep)


	if (playerFaction.includes("KuaiGong International")) {
		var kuaigongrep = ns.singularity.getFactionRep("KuaiGong International")
	} else {
		var kuaigongrep = 0
	}
	ns.tprint("My reputation with KuaiGong International is currently... " + kuaigongrep)
	ns.write("/savedVar/kuaigongRep.txt", kuaigongrep, "w")
	ns.clearPort(3036)
	ns.writePort(3036, kuaigongrep)


	if (playerFaction.includes("MegaCorp")) {
		var megacorprep = ns.singularity.getFactionRep("MegaCorp")
	} else {
		var megacorprep = 0
	}
	ns.tprint("My reputation with MegaCorp is currently... " + megacorprep)
	ns.write("/savedVar/megacorpRep.txt", megacorprep, "w")
	ns.clearPort(3037)
	ns.writePort(3037, megacorprep)


	if (playerFaction.includes("NWO")) {
		var nworep = ns.singularity.getFactionRep("NWO")
	} else {
		var nworep = 0
	}
	ns.tprint("My reputation with NWO is currently... " + nworep)
	ns.write("/savedVar/nwoRep.txt", nworep, "w")
	ns.clearPort(3038)
	ns.writePort(3038, nworep)


	if (playerFaction.includes("OmniTek Incorporated")) {
		var omnitekrep = ns.singularity.getFactionRep("OmniTek Incorporated")
	} else {
		var omnitekrep = 0
	}
	ns.tprint("My reputation with OmniTek Incorporated is currently... " + omnitekrep)
	ns.write("/savedVar/omnitekRep.txt", omnitekrep, "w")
	ns.clearPort(3039)
	ns.writePort(3039, omnitekrep)


	// // crime organisations

	ns.tprint("")
	ns.tprint("Criminal Factions")
	ns.tprint("")

	if (playerFaction.includes("The Dark Army")) {
		var darkarmyrep = ns.singularity.getFactionRep("The Dark Army")
	} else {
		var darkarmyrep = 0
	}
	ns.tprint("My reputation with The Dark Army is currently... " + darkarmyrep)
	ns.write("/savedVar/darkarmyRep.txt", darkarmyrep, "w")
	ns.clearPort(3041)
	ns.writePort(3041, darkarmyrep)


	if (playerFaction.includes("Slum Snakes")) {
		var slumsnakesrep = ns.singularity.getFactionRep("Slum Snakes")
	} else {
		var slumsnakesrep = 0
	}
	ns.tprint("My reputation with Slum Snakes is currently... " + slumsnakesrep)
	ns.write("/savedVar/slumsnakesRep.txt", slumsnakesrep, "w")
	ns.clearPort(3042)
	ns.writePort(3042, slumsnakesrep)


	if (playerFaction.includes("Silhouette")) {
		var silhouetterep = ns.singularity.getFactionRep("Silhouette")
	} else {
		var silhouetterep = 0
	}
	ns.tprint("My reputation with Silhouette is currently... " + silhouetterep)
	ns.write("/savedVar/silhouetteRep.txt", silhouetterep, "w")
	ns.clearPort(3043)
	ns.writePort(3043, silhouetterep)


	if (playerFaction.includes("Speakers for the Dead")) {
		var speakersrep = ns.singularity.getFactionRep("Speakers for the Dead")
	} else {
		var speakersrep = 0
	}
	ns.tprint("My reputation with Speakers for the Dead is currently... " + speakersrep)
	ns.write("/savedVar/speakersRep.txt", speakersrep, "w")
	ns.clearPort(3044)
	ns.writePort(3044, speakersrep)


	if (playerFaction.includes("The Syndicate")) {
		var syndicaterep = ns.singularity.getFactionRep("The Syndicate")
	} else {
		var syndicaterep = 0
	}
	ns.tprint("My reputation with The Syndicate is currently... " + syndicaterep)
	ns.write("/savedVar/syndicateRep.txt", syndicaterep, "w")
	ns.clearPort(3045)
	ns.writePort(3045, syndicaterep)


	if (playerFaction.includes("Tetrads")) {
		var tetradsrep = ns.singularity.getFactionRep("Tetrads")
	} else {
		var tetradsrep = 0
	}
	ns.tprint("My reputation with Tetrads is currently... " + tetradsrep)
	ns.write("/savedVar/tetradsRep.txt", tetradsrep, "w")
	ns.clearPort(3046)
	ns.writePort(3046, tetradsrep)


	// // end game factions

	ns.tprint("")
	ns.tprint("Super Secret Organisations that run the world!")
	ns.tprint("")


	if (playerFaction.includes("The Covenant")) {
		var convenantrep = ns.singularity.getFactionRep("The Covenant")
	} else {
		var convenantrep = 0
	}
	ns.tprint("My reputation The Covenant is currently... " + convenantrep)
	ns.write("/savedVar/covenantRep.txt", convenantrep, "w")
	ns.clearPort(3051)
	ns.writePort(3051, convenantrep)


	if (playerFaction.includes("Daedalus")) {
		var daedalusrep = ns.singularity.getFactionRep("Daedalus")
	} else {
		var daedalusrep = 0
	}
	ns.tprint("My reputation with Daedalus is currently... " + daedalusrep)
	ns.write("/savedVar/daedalusRep.txt", daedalusrep, "w")
	ns.clearPort(3052)
	ns.writePort(3052, daedalusrep)


	if (playerFaction.includes("Illuminati")) {
		var illuminatirep = ns.singularity.getFactionRep("Illuminati")
	} else {
		var illuminatirep = 0
	}
	ns.tprint("My reputation with Illuminati is currently... " + illuminatirep)
	ns.write("/savedVar/illuminatiRep.txt", illuminatirep, "w")
	ns.clearPort(3053)
	ns.writePort(3053, illuminatirep)




}