async function fetchStats() {
  const res = await fetch("/api/stats");
  const data = await res.json();
  document.getElementById("stats").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

async function fetchCommands() {
  const res = await fetch("/api/commands");
  const data = await res.json();
  document.getElementById("commands").innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

setInterval(() => {
  fetchStats();
  fetchCommands();
}, 5000);

fetchStats();
fetchCommands();
