function scuberGreetingForFeet(f){
  // Write your code here!
    if (f <= 400) {
      return 'This one is on me!'
    } else if(f > 2500) {
      return 'No can do.'
    } else if (f > 2000 ) {
      return 'I will gladly take your thirty bucks.'

  }
}


function ternaryCheckCity(isCity){
  // Write your code here!
  return (isCity === 'NYC'? 'Ok, sounds good.' : 'No go.')

}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (true) {
    case tip === 'generous':
      return 'Thank you so much.';
    case tip === 'not as generous':
      return 'Thank you.';
    case tip === 'thanks for everything':
      return 'Bye.';

      
  }
}