const InputOne = document.querySelector('.InputOne');
const InputTwo = document.querySelector('.InputTwo');
const ButtonBtn = document.querySelector('.ButtonBtn');
const endResult = document.querySelector('.end');
InputOne.style.width = "250px"
InputTwo.style.width = "250px"

let action = '+';

ButtonBtn.onclick = function (){
    let sum = Number(InputOne.value) - Number(InputTwo.value)
    console.log(sum)
    if (InputOne.value > InputTwo.value){
        let result = '<div class="result"><p class="end-tit">Покупка прошла успешно, ваша сдача составляет ' +sum+' руб</p></div>'
        endResult.innerHTML = result
    } else if (InputOne.value == InputTwo.value){
        let result = '<div class="result"><p class="end-tit">Покупка прошла успешно, ваша сдача составляет ' +sum+' руб</p></div>'
        endResult.innerHTML = result

    }
    else if (InputOne.value < InputTwo.value)
    {
            let result = '<div class="result"><p class="end-tit">Покупка не прошла, объективно ты нищий и тебе не хватает ' +Math.abs(sum)+' руб</p></div>'
            endResult.innerHTML = result
    }
}