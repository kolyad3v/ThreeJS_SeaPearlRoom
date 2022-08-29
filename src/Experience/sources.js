export default [
	{
		name: 'environmentMapTexture',
		type: 'cubeTexture',
		path: [
			'textures/environmentMap/px.jpg',
			'textures/environmentMap/nx.jpg',
			'textures/environmentMap/py.jpg',
			'textures/environmentMap/ny.jpg',
			'textures/environmentMap/pz.jpg',
			'textures/environmentMap/nz.jpg',
		],
	},
	{
		name: 'baseModel',
		type: 'gltfModel',
		path: 'models/merged.glb',
	},
	{
		name: 'baseModelBaked',
		type: 'texture',
		path: 'textures/baked/bakedSeaPearl.jpg',
	},
	// Sub Items
	{
		name: 'beachBallLeft',
		type: 'gltfModel',
		path: 'models/beachBallLeft.glb',
	},
	{
		name: 'beachBallRight',
		type: 'gltfModel',
		path: 'models/beachBallRight.glb',
	},
	{
		name: 'fairyLights',
		type: 'gltfModel',
		path: 'models/fairyLights.glb',
	},
	{
		name: 'openSign',
		type: 'gltfModel',
		path: 'models/openSign.glb',
	},
]
