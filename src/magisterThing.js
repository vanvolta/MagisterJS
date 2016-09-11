import _ from 'lodash'
import { Magister } from './magister'

/**
 * @private
 */
class MagisterThing {
	/**
	 * @param {Magister} magister
	 * @throws Error when `magister` isn't an {@link Magister} instance.
	 */
	constructor(magister) {
		if (!(magister instanceof Magister)) {
			throw new Error('`magister` must be an `Magister` instance')
		}

		/**
		 * @type Magister
		 * @private
		 * @readonly
		 */
		this._magister = magister
	}

	toJSON() {
		// REVIEW: do we want to omit all keys starting with '_'?
		return _.omit(this, [ '_magister' ])
	}
}

export default MagisterThing
