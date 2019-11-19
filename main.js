'use strict';

const navinput = document.querySelectorAll('.navinput');
const navlabel = document.querySelectorAll('.navlabel')
const navlist = document.querySelector('.nav-list')
const navlistitem = document.querySelectorAll('.nav-list__item')
const navlistlink = document.querySelectorAll('.nav-list__link')
const navlistsubmenu = document.querySelectorAll('.nav-list__submenu')

  const hiddenListener = navIndex => {
    return () => {
        navlistitem.forEach((item, index) => {
            if (index !== navIndex) {
                item.hidden = true;
            }
        });
    }
}
    for (let i = 0; i < navlistitem.length; i++) {
    navlistitem[i].onclick = hiddenListener(i);
    }

    
