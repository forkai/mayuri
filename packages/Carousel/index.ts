// 为组件提供 install 方法，供组件对外按需引入
import Carousel from './src/Carousel'
;(Carousel as any).install = (Vue: any) => {
	console.log(Carousel)
	Vue.component(Carousel.name, Carousel)
}
export default Carousel
