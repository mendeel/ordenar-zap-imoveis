// Gerar array com todos os cards
Array.from(document.querySelectorAll(".card-container")).forEach(card => {
    try {
        // Preço por mês
        let monthPrice = parseInt(card.querySelector(".js-price").textContent.trim().replace(/\./gi, "").match(/([0-9]+)/gi)[0]) ?? 0;

        // Preço do condomínio
        let condoPrice = parseInt(card.querySelector(".prices--regular .condominium").textContent.replace(/\./gi, "").trim().match(/([0-9]+)/gi)[0]) ?? 0;

        // Preço total
        let totalPrice = monthPrice + condoPrice;

        // Criar elemento para inserir o preço total no card
        let totalPriceEl = document.createElement("li");

        // Colocar preço total como atributo do card para usar na hora de ordenar os resultados
        card.setAttribute("totalPrice", totalPrice);

        // Ajustar as classes do elemento novo
        totalPriceEl.classList = "card-price__item totalPrice text-regular";

        // Inserir conteúdo do elemento novo
        totalPriceEl.innerHTML = `<span class="card-price__value"><b>TOTAL R$ ${totalPrice}</b></span>`;
        card.querySelector("ul.prices.prices--regular").appendChild(totalPriceEl);
    } catch (ex) {}
})

// Ordenação
var div = document.querySelector('#app > section > div > div.js-results > section > div'),
    para = document.querySelectorAll('#app > section > div > div.js-results > section > div div.card-container');
var paraArr = [].slice.call(para).sort(function(a, b) {
    return parseInt(a.getAttribute("totalPrice")) > parseInt(b.getAttribute("totalPrice")) ? 1 : -1;
});
paraArr.forEach(function(p) {
    div.appendChild(p);
});
