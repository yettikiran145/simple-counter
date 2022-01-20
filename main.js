const value = document.querySelector('.value')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')

let count = 0;

// add events
increase.addEventListener('click', increment)
decrease.addEventListener('click', decrement)
reset.addEventListener('click', resetCount)

// functions

function resetCount(e){
    const actions = e.currentTarget.classList;
    if(actions.contains('reset')){
        count = 0;
    }
    value.textContent = count
}

function increment(e){
    const actions = e.currentTarget.classList;
    if(actions.contains('increase')){
        count++
    }
    value.textContent = count
}
 
function decrement(e){
   const actions = e.currentTarget.classList;
   if(actions.contains('decrease')){
       count--;
   }
   value.textContent = count
}




