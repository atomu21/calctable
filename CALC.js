function calc(cmd){
    const element = document.getElementById('display')
    const value = element.value

    if(cmd === '='){
        element.value = eval(value)
    }else if(cmd === 'AC'){
        element.value = '0'
    }else if(value === '0') {
        element.value = cmd
    }else{
        element.value += cmd
    }
}