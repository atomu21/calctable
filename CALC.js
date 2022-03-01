'use strict'
{
  const outputTotal = document.getElementById('outputTotal');
  let total = 0;
  let state = 'start';  
  let mode = 'integerMode';

  const oneNine = document.querySelectorAll('.oneNine');
  oneNine.forEach(index => {     
    index.addEventListener('click', () => {
      if(state === 'start') {
        total = index.dataset.indexId;         
      }else if(state === 'numericState'||state === 'operatorState'){
        total += index.dataset.indexId;
      }else if(state === 'finish') {
        return;
      }     
      outputTotal.textContent = total;
      state = 'numericState'
    })   
  })

  const zero = document.getElementById('zero');
  zero.addEventListener('click', () => {
    if(state === 'numericState') {
      total += zero.dataset.indexId;
    }else{
      return;
    }      
    outputTotal.textContent = total;
    state = 'numericState'
  }) 
  
  const wZero = document.getElementById('wZero');
  wZero.addEventListener('click', () => {
    if(state === 'numericState') {
      total += wZero.dataset.indexId;
    }else{
      return;
    }
    outputTotal.textContent = total;
    state = 'numericState'
  })

  const point = document.getElementById('point');
  point.addEventListener('click', () => {
    console.log(point.dataset.indexId)
    if(mode === 'decimalMode'){
      return;
    }      
    if(state === 'start'){
      total = 0;
    }else if(state === 'operatorState'){
      total += 0;
    }else if(state === 'finish'){
      return;
    }
    total += point.dataset.indexId;
    outputTotal.textContent = total;
    state = 'numericState'
    mode = 'decimalMode';
  })

  const operator = document.querySelectorAll('.operator');
  operator.forEach(index => {     
    index.addEventListener('click', () => {
      if(state === 'start') {
        return;
      }else if(state === 'numericState'){
        total += index.dataset.indexId;
      }else if(state ==='operatorState') {
        total = total.slice(0, -1)
        total += index.dataset.indexId;
      }else if(state === 'finish'){
        total = outputTotal.textContent;
        total += index.dataset.indexId;
        outputTotal.textContent = 0
      }
      outputTotal.textContent = total;
      state = 'operatorState'
      mode ='integerMode'
    })
  })

  const equalBtn = document.getElementById('equalBtn');
  equalBtn.addEventListener('click',() =>{
    console.log(eval(total));
    outputTotal.textContent = digitNum(eval(total));
    state = 'finish'
    mode ='integerMode'
  });

  const clear = document.getElementById('clear')
  clear.addEventListener('click', () => {
    reset();
  })

  function reset(){
    total = 0; 
    outputTotal.textContent = 0;
    mode ='integerMode'
    state ='start';
  }

  function digitNum(num){
    return Math.round(num*1000)/1000;
  }
}
