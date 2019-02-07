
const printToDom = (whatHTMLToPrint, whereToPrintIt) => {
    const itGoesHere = document.querySelector(whereToPrintIt)

    itGoesHere.innerHTML += whatHTMLToPrint
}

export default printToDom