const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const expPrevBtn = $('.exp-btn__prev');
const expNextBtn = $('.exp-btn__next');
const sectionExpContainer = $(".section-exp__list-container");
const expItems = $$('.section-exp__item');

let activeExp = 0;

let expItemsLength = expItems.length - 1;

const updateActiveItem = (newActiveIndex, item, container) => {
    if (item[activeExp].classList.contains('active')) {
        item[activeExp].classList.remove('active');
        activeExp = newActiveIndex;
        item[activeExp].classList.add('active');
        activeItem(item, container, activeExp);
    }
    else {
        activePics = newActiveIndex;
        activeItem(item, container, activePics);
    }
}

const activeItem = (item, container, active) => {
    let checkLeftItems = item[active].offsetLeft;
        
    container.style.left = `-${checkLeftItems}px`;
}

expNextBtn.onclick = () => {
    const index = (activeExp + 1) % (expItemsLength + 1);
    updateActiveItem(index, expItems, sectionExpContainer);
}

expPrevBtn.onclick = () => {
    const index = (activeExp - 1 + expItemsLength + 1) % (expItemsLength + 1);
    updateActiveItem(index, expItems, sectionExpContainer);
}

const picPrevBtn = $('.pictures-btn__prev');
const picNextBtn = $('.pictures-btn__next');
const picsCardList = $(".section-pictures__card-mobile-list");
const picItems = $$('.section-pictures__card-mobile-item');

let activePics = 0;
let picItemLength = picItems.length - 1;

picNextBtn.onclick = () => {
    const index = (activePics + 1) % (picItemLength + 1);
    updateActiveItem(index, picItems, picsCardList)
}

picPrevBtn.onclick = () => {
    const index = (activePics - 1 + picItemLength + 1) % (picItemLength + 1);

    updateActiveItem(index, picItems, picsCardList)
}

const aboutBtns = $$('.about-list__item');
const eduContainer = $('.about-section__edu-container');
const skillContainer = $('.about-section__skills-container');

aboutBtns.forEach((btn, index) => {
    btn.onclick = () => {
        if (index === 0) {
            eduContainer.style.display = 'block';
            skillContainer.style.display = 'none';
        }
        else {
            skillContainer.style.display = 'block';
            eduContainer.style.display = 'none';
        }
    }
})