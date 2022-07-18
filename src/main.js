import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const animItems = document.querySelectorAll('._anim-items')		/*объявляем переменные */
if (animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {								
		for (let index = 0; index<animItems.length; index++){
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;								/*коэффицент регулирования старта анимации*/

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight){								/*на случай если высота объекта выше высоты окна*/
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight))	{			/*добавление класса при условиях */	
				animItem.classList.add('_active');
			}	
			else {
				if(!animItem.classList.contains('_anim-no-hide')) {
				animItem.classList.remove('_active');
			}									
		}
	} 
}
	function offset(el) {										/*скрипт с инета начался */
		const rect = el.getBoundingClientRect(),
			scrollleft = window.scrollX || document.documentElement.scrollLeft,
			scrollTop = window.scrollY || document.documentElement.scrollTop;
		return {top: rect.top + scrollTop, left: rect.left + scrollleft}	
	}															/*скрипт с инета закончился */
	animOnScroll();
    setTimeout(() => {
        
    }, 300);
}