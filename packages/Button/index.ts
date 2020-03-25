// 为组件提供 install 方法，供组件对外按需引入
import Button from './src/Button'
;(Button as any).install = (Vue: any) => {
	console.log(Button)
	Vue.component(Button.name, Button)
}
export default Button
