//fecha o menu mobile quando chega a 1000px
function getResize(){
    const mobileMenu = document.querySelector('#mobile-menu');
    window.addEventListener('resize', () => {
        const windowWidth = window.innerWidth;
        if(windowWidth >= 1001){
            mobileMenu.style.display = 'none';
        }else{
            mobileMenu.style.display = 'flex';
        }
    })
}
window.addEventListener('resize', getResize)
//responsavel por mostrar e remover o menu mobile.
function showMobileMenu(boolean){
    const mobileMenu = document.querySelector('#mobile-menu');
    const isTrueOpen = mobileMenu.classList.contains('open');

    if(isTrueOpen || boolean){
        mobileMenu.classList.add('close')
        mobileMenu.classList.remove('open')
        //document.querySelector('.icon').src = 'styles/assets/menu-icon.svg'
    }else{
        mobileMenu.classList.add('open')
        mobileMenu.classList.remove('close')
        //document.querySelector('.icon').src = '../styles/assets/closed-icon.svg'
    }
}
//Movimenta o slide principal
function showSlide() {
    const slideImages = document.querySelectorAll('.slider-container img');
    const slideBox = document.querySelector('.slider-container');
    const buttons = document.querySelectorAll('.slider-control div');
    const pauseButton = document.querySelector('#pauseButton');

    let counter = 0;
    let moveImages;
    let isPaused = false;

    function MoveSlide() {
        moveImages = setInterval(() => {
            counter++;
            if (counter >= slideImages.length) {
                counter = 0;
            }
            slideBox.style.transform = `translateX(-${counter * 100}%)`;
        }, 4000);
    }

    MoveSlide();

    function pause(Boolean){
        if(isPaused){
            pauseButton.src = 'styles/assets/slide-images/pause_circle_white_24dp.svg';
            MoveSlide();
            isPaused = false;
        }else{
            clearInterval(moveImages);
            pauseButton.src = 'styles/assets/slide-images/play_circle_white_24dp.svg';
            isPaused = true;
        }
    }
    //se for para a direita number == 1
    //se for para a esquerda number == -1
    function controlImages(number){
        if(isPaused){
            if(number == 1){
                counter++
                if (counter >= slideImages.length) {
                    counter = 0;
                }
            }else if(number == -1){
                counter--
                if(counter <= 0){
                    counter = 0
                }
            }

            slideBox.style.transform = `translateX(-${counter * 100}%)`;
        }else{
            pause();
            if(number == 1){
                counter++
            }else if(number == -1){
                counter--
            }
            if (counter >= slideImages.length) {
                counter = 0;
            }
            slideBox.style.transform = `translateX(-${counter * 100}%)`;
        }
    }

    buttons[0].addEventListener('click', () => controlImages(-1))

    buttons[1].addEventListener('click', pause);

    buttons[2].addEventListener('click',() =>  controlImages(1))
}
showSlide();

//Whatsapp icon 

function showDialogWhatsapp(){
    const dialogBox = document.querySelector('.dialog-box');
    const isOpen = dialogBox.classList.contains('open');

    if(isOpen){
        dialogBox.classList.add('close');
        dialogBox.classList.remove('open');
    }else{
        dialogBox.classList.remove('close');
        dialogBox.classList.add('open');
    }
}

//Gerar números diferentes
const numberLink = document.querySelector('#number-link');
window.addEventListener('load', getNewNumber);

function getNewNumber(){

    const numeroAleatorio = Math.floor(Math.random() * 6);
    console.log(numeroAleatorio);
    const numberList = [
    {
        id: 1,
        number: '9830421800'
    },
    {
        id: 2,
        number: '9830422029'
    },
    {
        id: 3,
        number: '9884018572'
    },
    {
        id: 4,
        number: '9884024390'
    },
    {
        id: 5,
        number: '9891508966'
    }
    ]

    numberLink.href = `https://api.whatsapp.com/send/?phone=55${numberList[numeroAleatorio].number}&text=Ol%C3%A1%21+Quero+marcar+uma+viagem%21&type=phone_number&app_absent=0`
}

