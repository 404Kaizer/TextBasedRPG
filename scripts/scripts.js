const button1 = document.querySelector(".inventoryBtn");
const button2 = document.querySelector(".campBtn");
const button3 = document.querySelector(".storeBtn");
const button4 = document.querySelector(".exploreBtn");
const button5 = document.querySelector(".arenaBtn");
let consoleText = document.querySelector(".consoleText");
let consoleInput = document.querySelector(".consoleInput");
let consoleSubmit = document.querySelector(".consoleSubmit");
let charNameSpan = document.querySelector(".nameSpan");
let hp = document.querySelector(".hpBar");
let mana = document.querySelector(".manaBar");
let san = document.querySelector(".sanBar");
let xp = document.querySelector(".xpBar");

button1.onclick = goInventory;
button2.onclick = goCamp;
button3.onclick = goStore;
button4.onclick = goExplore;
button5.onclick = goArena;

window.onload = function characterCreation() {
    consoleText.innerHTML = "- Bem-vindo a Eroda! Dê um nome ao seu personagem para continuar. Você pode clicar em NOME para editar. Digite OK para continuar."
    consoleSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (consoleInput.value === "OK" || consoleInput.value === "ok") {
            hp.innerHTML = "100";
            mana.innerHTML = "100";
            san.innerHTML = "100";
            xp.innerHTML = "1";
            startScreen();
        }
        consoleInput.value = "";
    });
}

function startScreen() {
    consoleText.innerHTML = "- Você decidiu ser um aventureiro no mundo de Eroda. No painel do lado esquerdo você pode ver seu nome e seu XP, assim como seu HP, sua MANA e sua SANIDADE, que são alguns recursos que podem diminuir ou aumentar conforme você se aventura. Também existem alguns botões que você pode clicar: Inventário, Acampamento, Loja, Explorar, Arena."
}

function goInventory() {
    consoleText.innerHTML = "- Você abre sua mochila. Nela há:";
}

function goCamp() {
    consoleText.innerHTML = "- Você para sua aventura por um momento e monta um acampamento para se recompor. O que você quer fazer? -Descansar -Relaxar -Cozinhar";
}

function goStore() {
    consoleText.innerHTML = "- Você agora está no mercado da cidade.";
}

function goExplore() {
    consoleText.innerHTML = "- Você agora está explorando";
}

function goArena() {
    consoleText.innerHTML = "- You are now in the Arena";
}

consoleInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        consoleSubmit.click();
        consoleInput.value = "";
    }
});