const paineis = document.querySelectorAll(".painel")

paineis.forEach(painel => {
    painel.addEventListener("click", () => {
        removeCardsAtivos()
        painel.classList.add("ativo")
    })
})

function removeCardsAtivos() {
    paineis.forEach (painel => {
        painel.classList.remove("ativo")
    })
}