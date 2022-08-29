import Experience from '../Experience'
import TextureHelper from './TextureHelper'

export default class RoomBakes {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		// Pass in name of the file in sources to load. Then call this property.readyMateral to use as the baked material.
		// -> Day
		this.baked = new TextureHelper('baseModelBaked')

		// -> Night

		// this. = new TextureHelper('')
		// this. = new TextureHelper('')
		// this. = new TextureHelper('')
		// this. = new TextureHelper('')
	}
}
