javascript: (()=>{ const site = "https://sfrom.net/"; function download(){ setTimeout(async function() { let data; const text = await navigator.permissions.query({ name: "clipboard-read" }); if (text.state == "prompt" || text.state == "granted") { data = await navigator.clipboard.readText(); console.log(`${site}${data}`); location= `${site}${data}`; } console.log(data); }, 0);}; download();})();
