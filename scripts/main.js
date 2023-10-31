//fecha o menu mobile quando chega a 1000px
function getResize(){
    window.addEventListener('resize', () => {
        const windowWidth = window.innerWidth;
        if(windowWidth >= 1000){
            
        }
    })
}
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

