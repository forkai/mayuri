import { isIncludes } from '../../utils/index'
import '../../common/scss/reset.scss'
import './Button.scss'

export default {
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
			>
				<slot>点击</slot>
			</button>
		)
	},
}
