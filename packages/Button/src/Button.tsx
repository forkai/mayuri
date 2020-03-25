import { isIncludes } from '../../common/ts/index'
import '../../common/scss/reset.scss'
import './Button.scss'
import Vue from 'vue'

export default Vue.extend({
	name: 'vButton',
	props: {
		size: {
			validator(value: string) {
				return isIncludes(value, ['small', 'large', 'middle'])
			},
			default: 'middle',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	render() {
		return (
			<button
				class={['btn', 'btn-' + this.size]}
				disabled={this.disabled}
				onClick={alert('hello')}
			>
				{(this.$scopedSlots as any).default()}
			</button>
		)
	},
})
