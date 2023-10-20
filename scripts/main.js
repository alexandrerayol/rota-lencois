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
