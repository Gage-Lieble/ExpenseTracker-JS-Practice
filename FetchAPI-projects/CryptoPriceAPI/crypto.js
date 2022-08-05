
let btcWrap = document.getElementById('btc')
let ethWrap = document.getElementById('eth')
let dogeWrap = document.getElementById('doge')
let ltcWrap = document.getElementById('ltc')


let dollarFormat = Intl.NumberFormat('un-US', {style: 'currency', currency: 'USD'})
const dataCall = async () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3d1a0dc009mshf76f2e33c4f1d17p1576acjsnc3a97be24047',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    let result = await fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
    let data = await result.json()


    let bitCoinPrice = data.data.coins[0].price
    let etheriumPrice = data.data.coins[1].price
    let dogePrice = data.data.coins[11].price
    let liteCoinPrice = data.data.coins[24].price
    

    let bitCoinIcon = data.data.coins[0].iconUrl
    let etheriumIcon = data.data.coins[1].iconUrl
    let dogeIcon = data.data.coins[11].iconUrl
    let liteCoinIcon = data.data.coins[24].iconUrl

    btcWrap.innerHTML = `<img style='width: 75px' src='${bitCoinIcon}'> <h2>${dollarFormat.format(parseFloat(bitCoinPrice).toFixed(2))}</h2>`
    ethWrap.innerHTML = `<img style='width: 75px' src='${etheriumIcon}'> <h2>${dollarFormat.format(parseFloat(etheriumPrice).toFixed(2))}</h2>`
    dogeWrap.innerHTML = `<img style='width: 75px' src='${dogeIcon}'> <h2>${dollarFormat.format(parseFloat(dogePrice).toFixed(2))}</h2>`
    ltcWrap.innerHTML = `<img style='width: 75px' src='${liteCoinIcon}'> <h2>${dollarFormat.format(parseFloat(liteCoinPrice).toFixed(2))}</h2>`

    console.log(data.data.coins)
}
dataCall()