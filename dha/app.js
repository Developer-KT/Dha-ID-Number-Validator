const idInput = document.getElementById('id-input')
const submitBtn = document.getElementById('submit')
const form = document.querySelector('.form')

const error1 = document.querySelector('.error-text1')
const error2 = document.querySelector('.error-text2')
const error3 = document.querySelector('.error-text3')
const error4 = document.querySelector('.error-text4')
const success = document.querySelector('.success')


submitBtn.addEventListener('click', () => {

    let number =  idInput.value
    let sequence = number.split("")


    let sequence2 = sequence.map(function(str) {                        // array converted into numbers
        return parseInt(str)
    })

    console.log(sequence2)

    if (sequence2.length !== 13) {                                          //length
        error1.classList.add('active')
        error1.classList.remove('inactive')
    } else {
        error1.classList.add('inactive')
        error1.classList.remove('active')
    }

    if (sequence2[4] > 3 || sequence2[5] > 1 && sequence2[4] == 3) {                                                                //day
        error4.classList.add('active')
        error4.classList.remove('inactive')
    } else {
        error4.classList.add('inactive')
        error4.classList.remove('active')
    }

    if (sequence2[2] > 1 || sequence2[3] > 2  && sequence2[2] == 1) {                                                 //month
        error3.classList.add('active')
        error3.classList.remove('inactive')
    } else {
        error3.classList.add('inactive')
        error3.classList.remove('active')
    }

    for (let i=0; i<sequence2.length; i++) {                                //if string
        if (isNaN(sequence2[i]) === true) {
            error2.classList.add('active')
            error2.classList.remove('inactive')
        } else {
            error2.classList.add('inactive')
            error2.classList.remove('active')
        }
    }

    if (error1.classList.contains('inactive') && error2.classList.contains('inactive') && error3.classList.contains('inactive') && error4.classList.contains('inactive')) 
    {
        success.classList.add('active')
        success.classList.remove('inactive')
    } else {
        success.classList.add('inactive')
        success.classList.remove('active')
    }

})



















// var myInput = document.getElementById('psw');

// var letter = document.getElementById('letter');

// var capital = document.getElementById('capital');

// var number = document.getElementById('number');

// var length = document.getElementById('lengt')

// myInput.onfocus = function() {

//   document.getElementById('message').style.display = 'block';

// }

// myInput.onblur = function() {

//   document.getElementById('message').style.display = 'none';

// }

// myInput.onkeyup = function() {

//     var lowerCaseLetters = /[a-z]/g;

//   if(myInput.value.match(lowerCaseLetters)) {

//     letter.classList.remove('invalid');

//     letter.classList.add('valid');

//   } else {

//     letter.classList.remove('valid');

//     letter.classList.add('invalid');

// }

// var upperCaseLetters = /[A-Z]/g;

//   if(myInput.value.match(upperCaseLetters)) {

//     capital.classList.remove('invalid');

//     capital.classList.add('valid')

//   } else {

//     capital.classList.remove('valid');

//     capital.classList.add('invalid');

//   }

//   var numbers = /[0-9]/g;

//   if(myInput.value.match(numbers)) {

//     number.classList.remove('invalid');

//     number.classList.add('valid');

//   } else {

//     number.classList.remove('valid');

//     number.classList.add('invalid');

//   }

//   if(myInput.value.length >= 8) {

//     length.classList.remove('invalid');

//     length.classList.add('valid');

//   } else {

//     length.classList.remove('valid');

//     length.classList.add('invalid');

//   }

// }