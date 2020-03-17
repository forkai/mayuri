import Vue from '../../main'
import { isIncludes } from '../../utils/index'

export default Vue.extend({
	name: 'Button',
	props: {
		size: {
			validator(value) {
				return isIncludes(value, ['small', 'large', 'default'])
			},
			default: 'default',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	render() {
		return (
			<button class={'btn-' + this.size} disabled="disabled">
				<slot></slot>
			</button>
		)
	},
})
