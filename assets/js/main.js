const InputOne = document.querySelector('.InputOne');
const InputTwo = document.querySelector('.InputTwo');
const ButtonBtn = document.querySelector('.ButtonBtn');
const endResult = document.querySelector('.end');

let action = '+';

ButtonBtn.onclick = function (){
    let sum = Number(InputOne.value) - Number(InputTwo.value)
    console.log(sum)
    if (InputOne.value > InputTwo.value){
        let result = '<div class="result"><p class="end-tit">Покупка прошла успешно, ваша сдача составляет ' +sum+' руб</p></div>'
        endResult.insertAdjacentHTML('beforeend', result)

    } if (InputOne.value === InputTwo.value){
        let result = '<div class="result"><p class="end-tit">Покупка прошла успешно, ваша сдача составляет ' +sum+' руб</p></div>'
        endResult.insertAdjacentHTML('beforeend', result)

    }else{
        let result = '<div class="result"><p class="end-tit">Покупка не прошла, объективно ты нищий и тебе не хватает ' +Math.abs(sum)+' руб</p></div>'
        endResult.insertAdjacentHTML('beforeend', result)

    }
}