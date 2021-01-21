let input_text = document.querySelector(".add-text");
let btn_text = document.querySelector(".btn-text");

//добавление новой задачи

btn_text.addEventListener('click', function (e){
    e.preventDefault();

    let text = input_text.value;
    if(text !== ''){
        document.querySelector("#error").style.display = 'none';
        let elem = document.createElement('li');
        elem.draggable = true;
        elem.classList.add('item');
        elem.classList.add('list-border');
        elem.innerHTML = text;
        input_text.value = '';
        document.querySelector('#list').appendChild(elem);
    } else{
        document.querySelector("#error").style.display = 'block';
    }
})

//очищение корзины 2

let clear_bn = document.querySelector('.clear-btn');
clear_bn.addEventListener('click', function (e){
    e.preventDefault();
    document.querySelector('#cart').innerHTML = '';
})



//реализация drag and drop

let active, current; // в active помещается конкретный активнй элемент li

let allLi =  document.querySelectorAll('.item');
allLi.forEach(function (item){
    item.draggable = true;
})

let allDiv = document.querySelectorAll('.row-list');
allDiv.forEach(function (item){
    item.addEventListener('dragstart', function (e){
        //проверка, что перетаскиваю элемент li
        let target = e.target;
        if(target.classList.contains('item')){
            active = target;
            target.classList.add('active-li');
        }
    })

    item.addEventListener('dragend', function (e){
        //проверка, что перетаскиваю элемент li
        let target = e.target;
        if(target.classList.contains('item')){
            target.classList.remove('active-li');
        }
    })

    item.addEventListener('dragover', function (e){
        e.preventDefault();
        current = e.target;
        if(current.classList.contains('item') && !current.classList.contains('active-li')) {
            let nextElement = (current === active.nextElementSibling) ?
                current.nextElementSibling :
                current;
            this.firstElementChild.nextElementSibling.insertBefore(active, nextElement);
            active.className = 'item';
            let elemClass = this.firstElementChild.nextElementSibling.id + '-border';
            active.classList.add(elemClass);
        }
        else {
             if (current.classList.contains('row-list')) {
                 current.firstElementChild.nextElementSibling.appendChild(active);
                 active.className = 'item';
                 let elemClass = current.firstElementChild.nextElementSibling.id + '-border';
                 active.classList.add(elemClass);
                 console.log(active.classList);

             }
        }
    })
})

