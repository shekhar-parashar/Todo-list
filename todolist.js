var container = document.querySelector('.container')
var value1 = document.querySelector('.input')
var add1 = document.querySelector('.add')
class item {
    constructor(name) {
        this.create(name)
    }
    create(name) {
        var I1 = document.createElement('div');
        I1.classList.add('item')
        var input = document.createElement('input')
        input.type = "text"
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');
        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = '<i class="fas fa-trash"></i>';
        remove.addEventListener('click', () => this.remove(I1));
        container.appendChild(I1);
        I1.appendChild(input);
        I1.appendChild(remove);

    }
    remove(I1) {
        container.removeChild(I1);
    }


}
add1.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})

function check() {
    if (value1.value != "") {
        new item(value1.value);
        value1.value = ""
    }
}

function removeAll() {
    document.querySelector('.container').innerHTML = "";
}