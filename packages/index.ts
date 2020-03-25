import components from './components'
// 定义 install 方法，接收 Vue 作为参数
const install = (Vue: any) => {
	// 判断是否安装，安装过就不继续往下执行
	if ((install as any).installed) return
	;(install as any).installed = true
	// 遍历注册所有组件
	components.map(component => Vue.use(component))
}

// 检测到 Vue 才执行，毕竟我们是基于 Vue 的
if (typeof window !== 'undefined' && (window as any).Vue) {
	install((window as any).Vue)
}

export default {
	install,
}
