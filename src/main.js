
let textarea = document.querySelector('textarea');

let msgTo = '';
let msgFrom = '';

let messages = document.querySelector('.messages');
let friends = document.querySelectorAll('.friend');

let friendsA = Array.from(friends);


friendsA.forEach(friend => {
    friend.addEventListener('click', event => {
        let name = '';
        let node;

        if (event.target.parentNode.className == 'friend') {
            node = event.target.parentNode;
        } else {
            node = event.target;
        }

        name = node.querySelector('span').textContent;
        msgTo = name;

    });
});

textarea.addEventListener('change', event => {
    let currentUser = document.querySelector('#userName');
    let name = currentUser.querySelector('span').textContent;

    msgFrom = name;

    let msg = event.target.value;
    let msgObj = {msgFrom, msgTo, msg};

    if (msgTo.length == 0) {
        let show = document.querySelector('#show');
        show.style.display = 'block';

        setTimeout(() => {
            show.style.display = 'none';
        }, 2000);

    } else {
        applyMsg(messages, msgObj);
    }
    
});

function applyEvent(el, fun) {
    el.fun;
}

let settings = document.querySelector('.settings');
let divs = settings.querySelectorAll('div');

let usersDivs = Array.from(divs);

let users = usersDivs.filter(user => {
    return user.id != 'apply' && user.id != 'find';
});

function applyMsg(el, msgObj) {
    let keys = Object.keys(msgObj);
    let str = document.createElement('div');

    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let div = document.createElement('div');
        div.textContent = msgObj[key];
        str.appendChild(div);
    }

    el.appendChild(str);
    messages.scrollTop = str.offsetTop;

}

let search = document.querySelector('#search');

search.addEventListener('input', event => {
    let value = event.target.value;
    if (value.length != 0) {
        friendsA.forEach(friend => {
            let name = friend.querySelector('span').textContent;
            if (!name.includes(value)) {
                friend.style.display = 'none';
            }
        });
    } else {
        friendsA.forEach(friend => {
            friend.style.display = '';
        });
    }
});

users.forEach(user => {
    user.addEventListener('click', event => {
        let name = event.target.textContent;
        let currentUser = document.querySelector('#userName');
        let span = currentUser.querySelector('span');

        span.textContent = name;       
    });
});

let faq = document.querySelector('#faq');
let info = document.querySelector('.info');

faq.addEventListener('click', event => { 
    info.style.display = '';
});

let close = document.querySelector('#close');

close.addEventListener('click', event => {
    info.style.display = 'none';
});

let apply = document.querySelector('#apply');
let find = document.querySelector('#find');

apply.addEventListener('click', event => {
    alert('apply');
});

find.addEventListener('click', event => {
    alert('find');
});

let main = document.querySelector('.main');
main.style.height = window.innerHeight;