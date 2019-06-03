function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    return 'This one is on me!'
  } else if (ride > 2000 && ride < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  let decision;
  city === 'NYC' ? (decision = 'Ok, sounds good.') : (decision = 'No go.');
  return decision
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response
  switch (tip) {
    case 'generous' :
      response = 'Thank you so much.'
      return response
    case 'not as generous' :
      response = 'Thank you.'
      return response
    default:
      response = 'Bye.'
      return response
  }

}
