/**
 * Main script : Handle the UI and launching sub-script
 * @param {NS} ns
 */
import { scanAll } from "ScorpionOS/tools/utils.js";

export async function main(ns) {
  ns.disableLog("ALL");

  const doc = eval("document");
  const PANEL_ID = "scorpion-os";

  const old = doc.getElementById(PANEL_ID);
  if (old) old.remove();

  let actionQueue = [];

  /** Panel */
  const panel = doc.createElement("div");
  panel.id = PANEL_ID;
  panel.style = `
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 9999;
    background: rgba(10,10,20,0.95);
    border: 1px solid #444;
    border-radius: 8px;
    padding: 0;
    color: #ddd;
    font-family: monospace;
    font-size: 12px;
    max-height: 90vh;
    overflow: hidden;
    min-width: 50px;
    box-shadow: 0 0 10px #000;
    resize: both;
    width: 125px;
    height 200px;
  `;
  doc.body.appendChild(panel);

  /** Header */
  const header = doc.createElement("div");
  header.style = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #111;
    padding: 6px 8px;
    border-bottom: 1px solid #333;
    cursor: move;
  `;

  const title = doc.createElement("span");
  title.style = "color:#7fd1ff; font-weight:bold;";
  title.innerHTML = `<img src="https://raw.githubusercontent.com/UpsilonScorpi/ScorpionOS/main/img/scorpion.png"style="height:18px; vertical-align:middle; margin-right:6px;"> Scorpion OS`;
  header.appendChild(title);

  panel.appendChild(header);

  /** Header buttons */
  const btnContainer = doc.createElement("div");

  const toggleBtn = doc.createElement("span");
  toggleBtn.textContent = "🔽";
  toggleBtn.style = "cursor:pointer; margin-right:8px;";
  btnContainer.appendChild(toggleBtn);

  const closeBtn = doc.createElement("span");
  closeBtn.textContent = "❌";
  closeBtn.style = "cursor:pointer;";
  btnContainer.appendChild(closeBtn);

  header.appendChild(btnContainer);

  /** Content (4 modules) */
  const content = doc.createElement("div");
  content.style = `
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 8px;
    max-height: 80vh;
    overflow: auto;
  `;
  panel.appendChild(content);

  /** Module 1 : Control Pad */
  const col1 = doc.createElement("div");
  col1.style = `
    flex: 1;
    line-height: 1.2;
  `;
  col1.innerHTML = `
    <h3 style="color:#7fd1ff; margin:0; padding:0;">Control Pad</h3>
    //<h4 style="color:#7fd1ff; margin-bottom:2px; margin-top:2px; padding:0;">UI</h4>

    
    <h4 style="color:#7fd1ff; margin-bottom:2px; margin-top:2px; padding:0;">Script</h4>

    <button id="btn-scr1" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%;
    ">
      <span id="icon-scr1">🔴</span> Contract
    </button>

    <button id="btn-scr2" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%;
    ">
      <span id="icon-scr2">🔴</span> Hacknet
    </button>

    <button id="btn-scr3" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%;
    ">
      <span id="icon-scr3">🔴</span> Hacking Simple
    </button>

    <button id="btn-scr4" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%;
    ">
      <span id="icon-scr4">🔴</span> Hacking Batch
    </button>

    <button id="btn-scr5" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%;
    ">
      <span id="icon-scr5">🟡</span> Stocks
    </button>

    <button id="btn-scr6" style="
      background:#222; border:1px solid #555; color:#7fd1ff;
      padding:4px 8px; margin:0; cursor:pointer; width:100%;
    ">
      <span id="icon-scr6">🟡</span> IPvGO
    </button>
  `;


  content.appendChild(col1);

  /** Control Pad buttons logic */

  let runScript1 = false;
  let runScript2 = false;
  let runScript3 = false;
  let runScript4 = false;
  let runScript5 = false;
  let runScript6 = false;


  doc.getElementById("btn-scr1").onclick = () => {
    runScript1 = !runScript1;
    actionQueue.push({ type: "contract", enable: runScript1 });
    doc.getElementById("icon-scr1").textContent = runScript1 ? "🟢" : "🔴";
  };

  doc.getElementById("btn-scr2").onclick = () => {
    runScript2 = !runScript2;
    actionQueue.push({ type: "hacknet", enable: runScript2 });
    doc.getElementById("icon-scr2").textContent = runScript2 ? "🟢" : "🔴";
  };

  doc.getElementById("btn-scr3").onclick = () => {
    runScript3 = !runScript3;
    actionQueue.push({ type: "hacking-simple", enable: runScript3 });
    doc.getElementById("icon-scr3").textContent = runScript3 ? "🟢" : "🔴";
  };

  doc.getElementById("btn-scr4").onclick = () => {
    runScript4 = !runScript4;
    actionQueue.push({ type: "hacking-batch", enable: runScript4 });
    doc.getElementById("icon-scr4").textContent = runScript4 ? "🟢" : "🔴";
  };

  doc.getElementById("btn-scr5").onclick = () => {
    runScript5 = !runScript5;
    actionQueue.push({ type: "stock", enable: runScript5 });
    doc.getElementById("icon-scr5").textContent = runScript5 ? "🟢" : "🔴";
  };

  doc.getElementById("btn-scr6").onclick = () => {
    runScript6 = !runScript6;
    actionQueue.push({ type: "ipvgo", enable: runScript6 });
    doc.getElementById("icon-scr6").textContent = runScript6 ? "🟢" : "🔴";
  };

  /** Collapse */
  let collapsed = false;

  toggleBtn.onclick = () => {
    collapsed = !collapsed;
    content.style.display = collapsed ? "none" : "flex";
    toggleBtn.textContent = collapsed ? "🔼" : "🔽";
  };

  closeBtn.onclick = () => panel.remove();


document.addEventListener("mouseup", () => {
    isResizing = false;
});

  /** Draggable */
  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  header.onmousedown = (e) => {
    isDragging = true;
    offsetX = e.clientX - panel.offsetLeft;
    offsetY = e.clientY - panel.offsetTop;
  };

  doc.onmouseup = () => isDragging = false;

  doc.onmousemove = (e) => {
    if (!isDragging) return;
    panel.style.left = (e.clientX - offsetX) + "px";
    panel.style.top = (e.clientY - offsetY) + "px";
    panel.style.right = "auto";
  };



  /** Main loop */
  while (true) {
    if (!collapsed) {
      //if (showModule4) col4.innerHTML = `${buildTree()}`;
      //if (showModule2) renderServerTable();
      //if (showModule3) renderPrivServerTable();
    }

    const SCRIPT_MAP = {
  "contract": "ScorpionOS/functions/contract.js",
  "hacknet": "hacknet.js"
}
/**
 * Toggle simple
 */
function toggleSimple(ns, action, argument) {
  const script = SCRIPT_MAP[action.type];

  if (!script) {
    ns.toast(`❗ Error : script ${action.type}`, "error", 10000);
    return;
  }

  if (action.enable) {
    if (argument) ns.exec(script, "home", 1, argument);
    else ns.exec(script, "home", 1);
  }
  else for (const p of ns.ps("home")) if (p.filename === script) ns.kill(p.pid);
}


    /** Process queued action */
    while (actionQueue.length > 0) {
      const action = actionQueue.shift();

      switch (action.type) {
        case ("hacknet"): toggleSimple(ns, action, 10); break;
        case ("hacking-simple"): tHackingSimple(ns, action); break;
        case ("hacking-batch"): tHackingBatch(ns, action); break;
        default: toggleSimple(ns, action); break;
      }
    }

    await ns.sleep(1500);
  }
}

