export default {
	install(Vue, options) {
		const components = require.context('../packages', true, /index\.vue$/)
		components.keys().forEach(fileName => {
			// 获取组件配置
			const componentConfig = components(fileName)['default']
			// 全局注册组件
			Vue.component(componentConfig.name, componentConfig)
		})

	}
}