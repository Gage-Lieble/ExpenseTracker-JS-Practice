const itemName = document.querySelector('#item-input')
const itemCost = document.querySelector('#cost-input')
const buyDate = document.querySelector('#date-input')
const dataTable = document.querySelector('#data-table')
const saveInfo = document.querySelector('#save-info-btn')

saveInfo.addEventListener('click', addData)

function addData(){
    // Extracts users inputs
    const textName = itemName.value
    const textCost = itemCost.value
    const textDate = buyDate.value

    // Creates TR and TD elements
    const createTr = document.createElement('tr')
    const createTdOne = document.createElement('td')
    const createTdTwo = document.createElement('td')
    const createTdThr = document.createElement('td')
    
    // Fills TD with users inputs
    createTdOne.textContent = textName
    createTdTwo.textContent = `$${textCost}`
    createTdThr.textContent = textDate

    // Stores TD's inside TR's
    createTr.append(createTdOne)
    createTr.append(createTdTwo)
    createTr.append(createTdThr)
    
    // Fills TABLE with TR's
    dataTable.append(createTr)
    dataTable.append(createTr)
    dataTable.append(createTr)

    // Resets inputs
    itemName.value = ''
    itemCost.value = ''
    buyDate.value = ''



    // Delete Button
    const delBtn = document.createElement('button')
    delBtn.textContent = '✖'
    createTr.append(delBtn)
    delBtn.addEventListener('click', function(){
        dataTable.removeChild(delBtn.parentElement)
    })
}