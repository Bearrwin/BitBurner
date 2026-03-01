/** @param {NS} ns */

function serverList(ns, current = "home", set = new Set()) {
	let connections = ns.scan(current)
	let next = connections.filter(c => !set.has(c))
	next.forEach(n => {
		set.add(n);
		return serverList(ns, n, set)

	})
	set.delete("home")
	return Array.from(set.keys())

}

// This is the main script that I use for my "WoodChipper (tm)" it allows you to analyze and sort
// servers and set parameters such as qty of weaken, grow and hack threads to feed to the 
// bots that will keep spawning those scripts indefinitely.  It also has system to list all
// of your purchased servers and their available and max ram to allow you to more selectively 
// setup your cycles.

export async function main(ns) {
	let serverCount = 0
	let purchasedServers = ns.getPurchasedServers()
	let happy = false
	let moneyMin = 0
	let moneyMax = 0
	// goldilocks is the variable I use to store the refined list of servers that I want to target
	// after applying various filters later on, but it defined here using the entire list of servers
	// so that it is ready when it needs to be called later, but before it is actually used
	// it will be updated by the filtering
	let goldilocks = serverList(ns)

	// this while loop allows you to keep choosing your min/max money desired to filter the server
	// list so you can choose your targets, when you respond you are happy the variable happy
	// is changed to true and then this while loop ends and the script moves on.
	while (happy == false) {

		const moneyMininput = await ns.prompt("Please enter the minimum money to accept on server (in $M) eg 3000 = 3b", { type: "text" });
		moneyMin = moneyMininput
		const moneyMaxinput = await ns.prompt("Please enter the maximum money to accept on server (in $M) enter 10000000 (10,000,000) for all ", { type: "text" });
		moneyMax = moneyMaxinput

		// this script needs to be updated to use the money formatting code I am using in other 
		// scripts that I found on the official github, these variables are to allow the user to
		// enter in numbers more easily by dealing in $m and removing the need to enter a lot of 0's
		let desiredMoneyMin = moneyMininput * 1000000;
		let desiredMoneyMax = moneyMaxinput * 1000000;
		let hackSkill = ns.getHackingLevel()
		ns.tprint("Your hacking skill is  " + hackSkill + " and is high enough to hack these servers")

		// this first variable sets hackable to the entire list of servers filtered to only keep
		// servers whose required hacking skill is lower than your hacking skill.
		let hackable = serverList(ns).filter(a => ns.getServerRequiredHackingLevel(a) < (hackSkill));
		// this second variable takes the previous variable, now a filtered version of the full
		// server list and applies a second filter, being that the servers maximum money is greater
		// than 0 so that servers that arent worth hacking for money like CSEC are filtered out of
		// the list
		let hasmoney = hackable.filter(a => ns.getServerMaxMoney(a) > 0);
		// as per previous futher filtering to allow you to reduce the list to the ones you want
		let hasenough = hasmoney.filter(a => ns.getServerMaxMoney(a) > desiredMoneyMin);
		// this is the final filtered list and the variable goldilocks contains the list of servers
		// that later parts of the script act on so you can setup batches of servers to be targeted
		// in the one process.
		goldilocks = hasenough.filter(a => ns.getServerMaxMoney(a) < desiredMoneyMax);

		// a for loop means: for each item in this list, do the following actions......
		// let establishes a variable, so here we are saying establish a variable that will only
		// apply to this for loop, so a local variable, call it server, and treat it as being an
		// item from the set of data in the goldilocks variable which we established earlier as
		// as a multi-filtered list of all servers in the game.  So this section will step through 
		// list of servers stored in goldilocks one at a time as perform the commands listed within
		// the for loop on each one in sequence, by saying "let server" it means the commands within
		// can all use the server variable and they translate that to whatever list item from goldilocks
		// is in that variable for this cycle of the for loop.  This loop is about printing to the
		// terminal a list of the servers whose names are stored in the goldilocks variable, one at a time
		// and adding the useful information, so we use variables inside the for loop.
		// let maxMoney = ..... will round down(Mathh.floor) the maximum amount of money that 
		// the server(variable) in this cycle has, and divide it by 1000000 to make the out put ore
		// readable to human eyes.  Then get it gets and stores other information as seen below in the
		// other variables and then uses the in the ns.tprint section to format this information and
		// print it out in a more human readable fashion, the + joins together parts for the ns.tprint
		// function and the extra spaces in between " " are to space out the output of the variables.
		// For every server in the set of goldilocks that this is done for the serverCount++ adds 1 to
		// that variable each time to count the number of servers for you.
		// It then puts up a yes/no buttons style prompt, if you say no, it starts again, if you say yes
		// it sets the variable happy to true and proceeds through the script.
		for (let server of goldilocks) {
			let maxMoney = Math.floor(ns.getServerMaxMoney(server) / 1000000);
			let minsecurity = ns.getServerMinSecurityLevel(server);
			let currSecurity = Math.floor(ns.getServerSecurityLevel(server))
			let hackreq = ns.getServerRequiredHackingLevel(server);
			let growrate = ns.getServerGrowth(server);

			ns.tprint(server + " Has Max $" + maxMoney + " Mil / " + growrate + " Grow Rate / "
				+ currSecurity + " Current Sec / " + minsecurity + " Min Sec / " + hackreq + " Req Hack Skill")
			serverCount++
		}
		ns.tprint(" ")
		const queryHappy = "Are you happy with this list of servers?";
		const resultHappy = await ns.prompt(queryHappy);
		happy = resultHappy

	}

	ns.tprint("I found " + serverCount + " servers that have between $" + moneyMin + "m and $" + moneyMax + "m")
	ns.tprint("---------------------------------------------------------------------------------------")
	ns.tprint(" ")


	// in a very similar fashion to above we step through a list of puchased servers we stored
	// in the variable "purchasedServers" and calculate the free ram by getting their max and used
	// ram and calculating the difference, as the game doesn't give you a get free ram function.
	// we then print out that information line by line so the user can see all of their
	// purchased servers, and assess which ones you use for the list of targets to hack.
	for (let pServer of purchasedServers) {
		let totalRam = ns.getServerMaxRam(pServer)
		let freeRam = Math.floor(ns.getServerMaxRam(pServer) - ns.getServerUsedRam(pServer))

		ns.tprint(pServer + " has " + freeRam + " / " + totalRam + " Gb available.")
	}
	await ns.sleep(1000)

	// if you say no to this prompt the script exits, otherwise it  moves down to the next section.
	const queryA = "Do you want to hack all these servers?";
	const resultA = await ns.prompt(queryA);
	ns.tprint(`${queryA} ${resultA}`);


// this is the check to see if to continue based on the question just answered.
	if (resultA == true) {

		// setting up variables to be used later to spawn the bots, by giving the user boxes to type
		// their answers into
		const wThreads = await ns.prompt("How many weaken threads to use on these servers ", { type: "text" });
		const gThreads = await ns.prompt("How many grow threads to use on these servers ", { type: "text" });
		const hThreads = await ns.prompt("How many hack threads to use on these servers ", { type: "text" });
		const cycleDelay = await ns.prompt("How long should I wait between batches for these servers (in seconds)", { type: "text" });
		const hStartDelay = await ns.prompt("How long should I wait to start hacks on these servers (in seconds", { type: "text" });

		// a check to see if the user wants to "prep" the servers first or just start the batchers
		// this argument is then passed through to the subscript which will either use or bypass
		// a section of code accordingly.

		const queryA = "Do you want to break these servers first? (Large WGW batch first, with delay to start woodchipper";
		const needsBreaking = await ns.prompt(queryA);

	// again we use the goldilocks refined list we setup earlier, this time to start the batching
	// scripts, one for each target and as part of the for each of the entries in goldilocks for
	// loop we will provide the user a box in which to type the name of the sever to use as a host
	// for all of the scripts it will generate.  In later parts of a Bnode cycle, you will copy
	// home  into the clipboard and simply use ctrl+c to paste it in for every entry in the list.
		for (let hackTarget of goldilocks) {
			const hostServer = await ns.prompt("Name of server to hack " + hackTarget, { type: "text" });

			ns.exec("/init/init.batcher.js", "home", 1, hostServer, hackTarget, cycleDelay * 1000, hStartDelay * 1000, wThreads, gThreads, hThreads, 3000, needsBreaking)
			ns.tprint("Master, I am hacking (" + hackTarget + ") every (" + cycleDelay + " seconds), and waiting for (" + hStartDelay + " seconds) to start hacking, using these thread counts ("
				+ wThreads + " Weaken) (" + gThreads + " Grow) and (" + hThreads + " Hack). Using (" + hostServer + ") and we are breaking the server security first (" + needsBreaking + ")")
		}
	}
	// a message to confirm that you said no to hacking the servers.
	else ns.tprint("Ok Master, we will not hack these servers!")


}