/** @param {NS} ns */
export async function main(ns) {

	
	if (!ns.hasTorRouter()) {
		ns.singularity.purchaseTor()
	}


	if (!ns.fileExists("BruteSSH.exe", "home") && ns.getServerMoneyAvailable("home") > ns.singularity.getDarkwebProgramCost("BruteSSH.exe")) {
		ns.singularity.purchaseProgram("BruteSSH.exe");
	}
	
// BruteSSH.exe - $500.000k - Opens up SSH Ports.

// FTPCrack.exe - $1.500m - Opens up FTP Ports.

// relaySMTP.exe - $5.000m - Opens up SMTP Ports.

// HTTPWorm.exe - $30.000m - Opens up HTTP Ports.

// SQLInject.exe - $250.000m - Opens up SQL Ports.

// ServerProfiler.exe - $500.000k - Displays detailed information about a server.

// DeepscanV1.exe - $500.000k - Enables 'scan-analyze' with a depth up to 5.

// DeepscanV2.exe - $25.000m - Enables 'scan-analyze' with a depth up to 10.

// AutoLink.exe - $1.000m - Enables direct connect via 'scan-analyze'.

// Formulas.exe - $5.000b - Unlock access to the formulas API.








}