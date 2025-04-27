// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
// import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'

// // Enable shader debugging
// THREE.WebGLRenderer.prototype.debug = { checkShaderErrors: true };

// // Renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setPixelRatio(window.devicePixelRatio);
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.toneMapping = THREE.ACESFilmicToneMapping;
// renderer.outputEncoding = THREE.sRGBEncoding;
// document.body.appendChild(renderer.domElement);

// // Scene & Camera
// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.set(0, 1, 3);

// // Controls
// const controls = new OrbitControls(camera, renderer.domElement);

// // Instantiate a loader
// const loader = new GLTFLoader();

// // Optional: Provide a DRACOLoader instance to decode compressed mesh data
// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath( 'https://unpkg.com/three@0.176.0/examples/jsm/libs/draco/gltf/draco_decoder.js' );
// loader.setDRACOLoader( dracoLoader );

// // Load a glTF resource
// loader.load(
// 	// resource URL
// 	'./renders/veil.glb',
// 	// called when the resource is loaded
// 	function ( gltf ) {

// 		scene.add( gltf.scene );

// 		gltf.animations; // Array<THREE.AnimationClip>
// 		gltf.scene; // THREE.Group
// 		gltf.scenes; // Array<THREE.Group>
// 		gltf.cameras; // Array<THREE.Camera>
// 		gltf.asset; // Object

// 	},
// 	// called while loading is progressing
// 	function ( xhr ) {

// 		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// 	},
// 	// called when loading has errors
// 	function ( error ) {

// 		console.log( 'An error happened' );

// 	}
// );