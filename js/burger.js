let headerBurger = document.querySelector('.header-burger');
let headerBlock = document.querySelector('.header-block');
let back = document.querySelector('body');

headerBurger.onclick = function(){
    headerBurger.classList.toggle('active');
    headerBlock.classList.toggle('active');
    back.classList.toggle('lock');
}




// обратный звонок
function openCallBack(){
    $('.modals-CallBack').addClass('modals-CallBack_active');
    $('.modals').addClass('modals_active');
    $('body').css('overflow-y', 'hidden');
    
}

function closeCallBack(){
    $('.modals-CallBack').removeClass('modals-CallBack_active');
    $('.modals-thanks').removeClass('modals-thanks_active');
    $('.modals').removeClass('modals_active');
    $('body').css('overflow-y', 'scroll');
};
// обратный звонок


function closeThanks(){
    $('.modals-thanks').removeClass('modals-thanks_active');
    $('.modals').removeClass('modals_active');
    $('body').css('overflow-y', 'scroll');

};
// email




// SEND MAIL
function sendFormOne(sendButton, inputName_Name, inputName_Phone) {
    $('[name = ' + sendButton + ']').on('click', function () {
        name2 = $(this).parents().siblings('[name = ' + inputName_Name + ']').val();
        console.log("🚀 ~ file: project.js ~ line 31 ~ name2", name2)
        phone = $(this).parents().siblings('[name = ' + inputName_Phone + ']').val();
        console.log("🚀 ~ file: project.js ~ line 33 ~ phone", phone)
  
  
        if (name2 == 0 || phone == 0) {
            alert('Заполните, пожалуйста, все поля');
            return false;
        } 
        else {
            $.ajax({
                type: 'POST',
                url: "/backend/mail.php",
                data: {
                    "name2": name2,
                    "phone": phone
                }
            }).done(function () {
                $('.modals-thanks').addClass('modals-thanks_active');
                $('.modals-CallBack').removeClass('modals-CallBack_active');
                $('.modals').addClass('modals_active');
  
                setTimeout(function () {
                    $('.modals-thanks').removeClass('modals-thanks_active');
                    $('.modals').removeClass('modals_active');
                    $('body').css('overflow-y', 'scroll');
  
                }, 2000);
            });
            return false;
        }
    });
  };
  
  sendFormOne('send', 'name2', 'phone');


  //mask input
$('.number-mask').mask('+7 (999) 999-9999'); 