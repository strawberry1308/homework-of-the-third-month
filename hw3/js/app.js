const tabs = document.querySelectorAll('.tabheader__item');
const tabsParent = document.querySelector('.tabheader__items');
const tabsContent = document.querySelectorAll('.tabcontent');

const tabHide = () => {
    tabsContent.forEach((item) => {
        item.style.display = 'none';
    });
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active');
    });
};
const tabShow = (i = 0) => {
    tabsContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
};
tabHide()
tabShow()

tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target.classList.contains('tabheader__item')) {
        tabs.forEach((items, i) => {
            if (items === target) {
                tabHide()
                tabShow(i);
            }
        });
    }
});

const slider = document.querySelector('.offer__slider-wrapper')
const sliderPrev = document.querySelector('.offer__slider-prev')
const sliderNext = document.querySelector('.offer__slider-next')
let offset = 0;
sliderNext.addEventListener('click', function () {
   offset = offset + 650;
   if (offset > 1950) {
       offset = 0;
   }
   slider.style.left = offset + 'px';
});

sliderPrev.addEventListener('click', function () {
    offset = offset - 650;
    if (offset < 0) {
        offset = 1950;
    }
    slider.style.left = offset + 'px';
});
const modalOpen = document.querySelector('.btn_white')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }
});
const openModal = () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
};

modalOpen.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);