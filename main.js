function random (){
    count = Math.random();
    count = count * 21;
    count = Math.floor(count);
    return count
}

function creator() {
    let number = random();
    let container = $('#container');
    let element = `<div class="element">${number}</div>`;
    console.log(element);
    container.append(element);
}

let create = setInterval(creator, 5000);
setTimeout(function(){clearInterval(create)}, 25000);
