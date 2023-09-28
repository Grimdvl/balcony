const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true, heightSelector, widthSelector, checkboxSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = modal.querySelector(closeSelector),
              windows = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll(),
              width = document.querySelectorAll(widthSelector),
              height = document.querySelectorAll(heightSelector),
              checkbox = document.querySelectorAll(checkboxSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                if (!height.value && !width.value) {
                    console.log('input width & height pls');
                    return;
                }
        
                // if (!checkbox.checked) {
                //     console.log('select warm or cold pls');
                //     return;
                // }

                windows.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'block';
                // document.body.style.overflow = 'hidde1n';
                document.body.classList.add('modal-open');
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            });

            modal.style.display = 'none';
            // document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
            document.body.style.marginRight = '0px';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                modal.style.display = 'none';
                // document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
                document.body.style.marginRight = '0px';
            }
        });


    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.classList.remove('modal-open');
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflow = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false, '#height', '#width');
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false, '.checkbox');
    // showModalByTime('.popup', 60000);
};

export default modals;