import * as THREE from 'three'
import Experience from '../Experience'
import Raycaster from '../Utils/Raycaster'
import RoomBakes from './RoomBakes'

export default class Room {
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		this.debug = this.experience.debug

		// Scene
		this.resource = this.resources.items.baseModel
		this.subItems = [
			(this.beachBallLeft = this.resources.items.beachBallLeft.scene),
			(this.beachBallRight = this.resources.items.beachBallRight.scene),
			(this.fairyLights = this.resources.items.fairyLights.scene),
			(this.openSign = this.resources.items.openSign.scene),
		]

		// Scene Textures (bakedTextures)
		this.roomBakes = new RoomBakes()

		this.model = this.resource.scene

		// -> Shaders

		// -> Animations
		this.clock = new THREE.Clock()
		// Find specific item for animating
		// this.item = this.model.children.find(
		// 	(child) => child.name === 'item name'
		// )

		// Debug
		if (this.debug.active) {
			this.debugFolder = this.debug.ui.addFolder('Room Master')
		}

		// -> Animation time of day dependent
		// this.dayOrNight = new Date()
		// this.hour = this.dayOrNight.getHours()

		// -> Raycaster
		// this.raycaster = new Raycaster(
		// 	this.resource,
		// 	this.experience.camera.controls.object.position
		// )

		// this.setDebug()
		this.setModel()
	}

	setModel() {
		this.model.traverse((c) => {
			c.material = this.roomBakes.baked.readyMateral
		})

		this.subItems.forEach((subItem) => {
			// subItem.traverse((c) => {
			// 	c.material = this.roomBakes.baked.readyMateral
			// })
			this.scene.add(subItem)
		})

		console.log(this.model, 'room group')
		this.scene.add(this.model)
	}

	// If different.
	// setModelSunset() {}

	setDebug() {}

	update() {
		// this.elapsed = this.clock.getElapsedTime()
		// this.raycaster.update()
	}
}
