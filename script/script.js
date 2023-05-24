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
        description: 'Lorem, ipsum dolor sit amet',
        linkShow :'https://qests-build.vercel.app/',
        linkCode :'https://github.com/evelinavegas/Qests-app',
    },
    {        
        img: '../../img/item1.jpg',
        title: 'Tattoo salon',
        description: 'Lorem, ipsum dolor sit amet',
        linkShow :'https://tatto-salon.vercel.app/',
        linkCode :'https://github.com/evelinavegas/Tatto_salon',
    },
    {
        img: '../../img/item2.jpg',
        title: 'Festival',
        description: 'Lorem, ipsum dolor sit amet',
        linkShow :'https://fest-hczh8rlov-evelinavegas.vercel.app/',
        linkCode :'https://github.com/evelinavegas/Rock_fest',
    },
    
]

const documentFragment = new DocumentFragment()

function createItem(data) {
    const mainItemNode =  mainItem.cloneNode(true);

    mainItemNode.querySelector('.item-img').src = data.img;
    mainItemNode.querySelector('.item-title').innerText = data.title;
    mainItemNode.querySelector('.item-description').innerText = data.description;
    mainItemNode.querySelector('.item-link-show').href = data.linkShow;
    mainItemNode.querySelector('.item-link-code').href = data.linkCode;

    documentFragment.append(mainItemNode);
}
function createItemsBlock(array) {

    array.forEach((data) => createItem(data))
    progects.innerHTML =('')

    progects.append(documentFragment)    
}
createItemsBlock(projectArr)
