const menuBtn = document.querySelector('.menu-btn')
const menuBurger = document.querySelector('.burger-menu');
const mainItem = document.querySelector('.main-item');
const progects = document.querySelector('#progects')

menuBtn.addEventListener('click', (e)=>{
    e.preventDefault;
    if(menuBtn.classList.value == 'menu-btn menu-btn-active'){
        menuBtn.classList.remove('menu-btn-active')
        menuBurger.classList.remove('burger-menu-active')

    }else{
        menuBtn.classList.add('menu-btn-active')
        menuBurger.classList.add('burger-menu-active')
    }
})

const projectArr = [
    {
        img: '../../img/item3.jpg',
        title: 'Qests room',
        description: 'The project was created on React. Data was received from the server, filters were applied, a map with a marker and a form with validation were created.',
        using: ['react-router-dom', 'leaflet', 'axios', 'formik', 'json-server', 'mobx],
        linkShow :'https://qests-build.vercel.app/',
        linkCode :'https://github.com/evelinavegas/Qests-app',
    },
    {
        img: '../../img/item4.jpeg',
        title: 'Convertor',
        description: 'The project was created on React. The program converts currency, saves previous conversions with the current date',
        using: ['react-router-dom', 'new Date'],
        linkShow :'https://convertor-build.vercel.app/',
        linkCode :'https://github.com/evelinavegas/Convertor/tree/main',
    },
    {        
        img: '../../img/item1.jpg',
        title: 'Tattoo salon',
        description: 'The project was created in JavaScript and jQuery. This is my first project :) although it is very simple',
        using: ['jQuery'],
        linkShow :'https://tatto-salon.vercel.app/',
        linkCode :'https://github.com/evelinavegas/Tatto_salon',
    },
    {
        img: '../../img/item2.jpg',
        title: 'Festival',
        description: 'The project was created on Vue',
        using: [],
        linkShow :'https://fest-hczh8rlov-evelinavegas.vercel.app/',
        linkCode :'https://github.com/evelinavegas/Rock_fest',
    },
    
]

function creatUsing(data){
    const ul = document.createElement('ul')
    data.forEach((e) => {
        const li = document.createElement('li')
        li.innerText = e
        ul.appendChild(li)
    })
    return ul
}
const documentFragment = new DocumentFragment()

function createItem(data) {
    const mainItemNode =  mainItem.cloneNode(true);

    mainItemNode.querySelector('.item-img').src = data.img;
    mainItemNode.querySelector('.item-title').innerText = data.title;
    mainItemNode.querySelector('.item-description').innerText = data.description;
    mainItemNode.querySelector('.item-link-show').href = data.linkShow;
    mainItemNode.querySelector('.item-link-code').href = data.linkCode;
    mainItemNode.querySelector('.item-using').append(creatUsing(data.using))
    documentFragment.append(mainItemNode);
}
function createItemsBlock(array) {

    array.forEach((data) => createItem(data))
    progects.innerHTML =('')

    progects.append(documentFragment)    
}
createItemsBlock(projectArr)
