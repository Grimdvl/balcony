const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            //Старая проверка которая используеться если нельзя проверить typeOf инпута например если имеем дело с дивом
            item.value = item.value.replace(/\D/, '');
        });
    }); 
};

export default checkNumInputs;