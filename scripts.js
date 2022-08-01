const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const dolar = 5.2
const euro = 5.9
const bitcoin = 0.0000084

const convertvalues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currecyValueText = document.getElementById('currrecy-value-text')

    realValueText.innerHTML = inputReais

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "UD$ Dólar americano")
        currecyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)

    if (select.value === "€ Euro")
        currecyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)

        if (select.value === "Ƀ Bitcoin")
        currecyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits:8,
        }).format(inputReais * bitcoin)
}
changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currendyImg = document.getElementById('currendy-img')

    if (select.value === 'UD$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currendyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currendyImg.src = "./assets/euro.png"
    }

    if (select.value === 'Ƀ Bitcoin') {
        currencyName.innerHTML = "Bitcoin"
        currendyImg.src = "./assets/bitcoin.png"
    }

    convertvalues()
}


button.addEventListener('click', convertvalues)
select.addEventListener('change', changeCurrency)