'use strict'
{
  const num_btn = document.querySelectorAll('.num_btn');
  const output_total = document.getElementById('output_total');
  let total = 0;
  let state = 'start';  
  let mode = 'integer_mode';

  const one_nine = document.querySelectorAll('.one_nine');
  one_nine.forEach(index => {     
    index.addEventListener('click', () => {
      if(state === 'start') {
        total = index.dataset.indexId;         
      }else if(state === 'numeric_state'||state === 'operator_state'){
        total += index.dataset.indexId;
      }else if(state === 'finish') {
        return;
      }     
      output_total.textContent = total;
      state = 'numeric_state'
      changeOutput()
    })   
  })

  const zero = document.getElementById('zero');
  zero.addEventListener('click', () => {
    if(state === 'numeric_state') {
      total += zero.dataset.indexId;
    }else{
      return;
    }      
    output_total.textContent = total;
    changeOutput()
    state = 'numeric_state'
  }) 
  
  const w_zero = document.getElementById('w_zero');
  w_zero.addEventListener('click', () => {
    if(state === 'numeric_state') {
      total += w_zero.dataset.indexId;
    }else{
      return;
    }
    output_total.textContent = total;
    changeOutput()
    state = 'numeric_state'
  })

  const point = document.getElementById('point');
  point.addEventListener('click', () => {
    console.log(point.dataset.indexId)
    if(mode === 'decimal_mode'){
      return;
    }      
    if(state === 'start'){
      total = 0;
    }else if(state === 'operator_state'){
      total += 0;
    }else if(state === 'finish'){
      return;
    }
    total += point.dataset.indexId;
    output_total.textContent = total;
    state = 'numeric_state'
    mode = 'decimal_mode';
    changeOutput()
  })

  const operator = document.querySelectorAll('.operator');
  operator.forEach(index => {     
    index.addEventListener('click', () => {
      if(state === 'start') {
        return;
      }else if(state === 'numeric_state'){
        total += index.dataset.indexId;
      }else if(state ==='operator_state') {
        total = total.slice(0, -1)
        total += index.dataset.indexId;
      }else if(state === 'finish'){
        total = output_total.textContent;
        total += index.dataset.indexId;
        output_total.textContent = 0
      }
      output_total.textContent = total;
      state = 'operator_state'
      mode ='integer_mode'
      changeOutput()
    })
  })

  const equal_btn = document.getElementById('equal_btn');
  equal_btn.addEventListener('click',() =>{
    console.log(eval(total));
    output_total.textContent = digitNum(eval(total));
    state = 'finish'
    mode ='integer_mode'
    changeOutput()
  });

  const clear = document.getElementById('clear')
  clear.addEventListener('click', () => {
    reset();
  })

  function reset() {
    total = 0; 
    output_total.textContent = 0;
    mode ='integer_mode'
    state ='start';
    changeOutput()
  }

  function digitNum(num) {
    return Math.round(num*1000)/1000;
  }
}
