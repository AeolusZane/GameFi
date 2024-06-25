import './style.css'
// import './tailwind.css'
import * as THREE from 'three/build/three.module.js'
import vertexShader from './shaders/vertex.glsl'
import fragmentShader from './shaders/fragment.glsl'
import atmosphereVertexShader from './shaders/atmosphereVertex.glsl'
import atmosphereFragmentShader from './shaders/atmosphereFragment.glsl'
import gsap from 'gsap/gsap-core.js'
import { Float32BufferAttribute } from 'three/build/three.module.js'
import JPEG from '@assets/globe.jpeg'

export function renderEarth(){
    const loader = new THREE.TextureLoader();

    // Canvas
    const canvas = document.querySelector('#earth')
    const canvasContainer = document.querySelector('#canvasContainer');
    
    // Scene
    const scene = new THREE.Scene()
    
    // Objects
    const geometry = new THREE.SphereGeometry(5, 50, 50)
    const geometry2 = new THREE.SphereGeometry(5, 50, 50)
    const starGeometry = new THREE.BufferGeometry()
    // Materials
    
    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms:{
            globeTexture:{
                value: loader.load(JPEG)
            }
        }
    })
    
    const material2 = new THREE.ShaderMaterial({
        vertexShader: atmosphereVertexShader,
        fragmentShader: atmosphereFragmentShader,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
    })
    
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff
    })
    
    // Mesh
    const sphere = new THREE.Mesh(geometry,material)
    
    const atmosphere = new THREE.Mesh(geometry2, material2)
    
    const stars = new THREE.Points(starGeometry,starMaterial)
    atmosphere.scale.set(1.2, 1.2, 1.2)
    
    const starVertices = [];
    for(let i = 0; i < 10000; i++){
        const x = (Math.random() - 0.5) * 2000;
        const y = (Math.random() - 0.5) * 2000;
        const z = -Math.random() * 2000;
        starVertices.push(x, y, z);
    }
    
    starGeometry.setAttribute(
        'position', 
        new Float32BufferAttribute(
            starVertices, 3))
    scene.add(stars)
    scene.add(atmosphere)
    
    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    
    /**
     * Camera
     */
    // Base camera
    const camera = new THREE.PerspectiveCamera(75, canvasContainer.offsetWidth / canvasContainer.offsetHeight, 0.1, 1000)
    
    camera.position.z = 15
    
    /**
     * Renderer
     */
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true
    })
    renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    /**
     * Animate
     */
    
    const clock = new THREE.Clock()
    
    const group = new THREE.Group()
    group.add(sphere)
    scene.add(group)
    
    const mouse = {
        x: undefined,
        y: undefined
    }
    const mouseMove = (e)=>{
        mouse.x = (e.clientX / sizes.width) * 2 - 1;
        mouse.y = -(e.clientY / sizes.height) * 2 + 1;
    }
    let clean = false;
    
    addEventListener('mousemove', mouseMove);


    const animate = () =>
    {
    
        const elapsedTime = clock.getElapsedTime()
    
        // Update objects
        sphere.rotation.y = 0.3 * elapsedTime
        gsap.to(group.rotation, {
            x: -mouse.y * 0.3,
            y: mouse.x * 2,
            duration: 2
        })

        if(clean){
            return;
        }
        // Call tick again on the next frame
        window.requestAnimationFrame(animate)
    
        // Render
        renderer.render(scene, camera)
    }
    const clear = () => {
        scene.remove(stars)
        scene.remove(atmosphere)
        scene.remove(sphere)
        scene.remove(group)
        removeEventListener('mousemove', mouseMove);
        clean = true;
    }

    return {
        animate,
        clear
    }
}


