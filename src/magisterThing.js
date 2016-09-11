import _ from 'lodash'
import { Magister } from './magister'

/**
 * @class MagisterThing
 * @constructor
 * @private
 * @param {Magister} magister
 */
export default class MagisterThing {
	constructor(magister) {
		if (!(magister instanceof Magister)) {
			throw new Error('`magister` must be an `Magister` instance')
		}

		/**
		 * @property _magister
		 * @private
		 * @final
		 * @type Magister
		 */
		this._magister = magister
	}

	toJSON() {
		// REVIEW: do we want to omit all keys starting with '_'?
		return _.omit(this, [ '_magister' ])
	}
}
