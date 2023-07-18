const quotes = [

    "We cannot solve problems with the kind of thinking we employed when we came up with them. - Albert Einstein",
    "Learn as if you will live forever, live like you will die tomorrow. - Mahatma Gandhi",
    "When you change your thoughts, remember to also change your world. - Norman Vincent Peale", 
    "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. - Dale Carnegie", 
    "Success is not final; failure is not fatal: It is the courage to continue that counts. - Winston S. Churchill",

]

const quotesContainer = document.querySelector(".quotes")
const quotesList = document.getElementById("quotesList")
function renderQuote() {
    quotesContainer.innerHTML = quotes[randomizer()]
}

function renderQuotes() {
    quotesList.innerHTML = ""
    for (let i = 0; i < quotes.length; i++) {
        let p = document.createElement("p")
        p.innerHTML = quotes[i]
        quotesList.appendChild(p)
    }
}
renderQuotes()

function randomizer() {
    const randomNum = Math.random() * quotes.length
    return Math.floor(randomNum) 
}

// renderQuote()
// setInterval(renderQuote, 5000)

function render(fn) { // fn = renderQuote
    fn() // renderQuote()
    setInterval(fn, 5000) // setInterval(renderQuote, 5000)
}
render(renderQuote)

function addQuote(event) {
    if (event.keyCode === 13) {
      let quoteInput = document.getElementById("quoteInput");
      let quoteDescription = quoteInput.value.trim();

      quoteDescription = quoteDescription.charAt(0).toUpperCase() + quoteDescription.slice(1)

      if (quoteDescription === "") {
        quoteInput.value = "";
        quoteInput.focus();
        return;
      }
  
      quotes.push(quoteDescription);
      renderQuotes();
  
      quoteInput.value = "";
    }
  }

const quotesModal = document.querySelector(".quotesModal")
const quotesBtn = document.querySelector("#quotesBtn")
  
quotesBtn.addEventListener("click", () => {
    if (quotesModal.classList.contains("show")){
        quotesModal.classList.remove("show")
    } else {
        quotesModal.classList.add("show");
    }
})

