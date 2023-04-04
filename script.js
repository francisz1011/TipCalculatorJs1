/* 
🌟 APP: Tip Calculator
*/
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
let perPersonTotalDiv = document.getElementById('perPersonTotal')


let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {

 const bill = Number(billInput.value)  

  tipPercentage = Number(tipInput.value) / 100

  // get the total tip amount
  tipAmount = bill * tipPercentage
  console.log({tipAmount})

  // calculate the total (tip amount + bill)
  total = tipAmount + bill 
  
  // calculate the per person total (total divided by number of people)
   const perPersonTotal = total / numberOfPeople
  console.log({perPersonTotal})

  // update the perPersonTotal on DOM & show it to user
perPersonTotalDiv.innerText= `₹${perPersonTotal.toLocaleString('en-IN')}`
}

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople+=1


  // update the DOM with the new number of people
  numberOfPeopleDiv.innerHTML = numberOfPeople


  // calculate the bill based on the new number of people
  calculateBill()

}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  
  
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (numberOfPeople<=1){
    throw 'Hey!, you cannot have less than one person '
    return 
  }
  
  

  
  // decrement the amount of people
  numberOfPeople-=1


  // update the DOM with the new number of people
  numberOfPeopleDiv.innerHTML = numberOfPeople
  


  // calculate the bill based on the new number of people
calculateBill()
}