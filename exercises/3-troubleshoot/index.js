import React, { Component } from 'react'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'

let gui = null

const GUI = {
  mount: () => {
  },

  unmount: () => {
    // Flush GUI
    if (gui !== null) {
      gui = null
    }
  },

  interface: () => gui,
}

export default GUI

const COLORS = {
  NORMAL: 0xffffff, // WHITE
  LIGHT_1: 0xff34b3, // PURPLE (255,52,179)
  LIGHT_2: 0x201148, // DEEPBLUE (32,17,72)  
}

const BLOOM = {
  ANIMATE: true,
  EXP: 1,
  STR: 1,
  THRES: 0,
  RAD: 0.2,
}

export default class Troubleshoot extends Component {
  constructor(props) {
    super(props)
    this.renderer = null
    this.gui = null
  }

  componentDidMount() {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      5000,
    )

    camera.position.x = -1500
    camera.position.z = 1500
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setClearColor(0x222222, 0)

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)

    const controls = new TrackballControls(camera, this.renderer.domElement)
    controls.target = scene.position
    controls.minDistance = 800
    controls.maxDistance = 2000

    // Background
    const background = new THREE.Mesh(
      new THREE.SphereGeometry(350, 32, 32),
      new THREE.MeshStandardMaterial({
        color: COLORS.LIGHT_2,
        side: THREE.BackSide,
      }),
    )
    scene.add(background)

    // Lights
    const light = new THREE.AmbientLight(0x8)
    scene.add(light)

    const l1 = new THREE.PointLight(COLORS.LIGHT_1, 0.5)
    l1.position.set(0, -200, -200)
    scene.add(l1)

    const l2 = new THREE.PointLight(COLORS.LIGHT_2, 1.5)
    l2.position.set(0, 200, 200)
    scene.add(l2)

    camera.position.z = -120

    // Cube mesh
    const cube = new THREE.Mesh(
      new THREE.CubeGeometry(350),
      new THREE.MeshStandardMaterial({
        color: COLORS.LIGHT_2,
      }),
    )
    scene.add(cube)

  
    // Post processing
    const renderPass = new RenderPass(scene, camera)
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85,
    )

    bloomPass.threshold = BLOOM.THRES
    bloomPass.strength = BLOOM.STR
    bloomPass.radius = BLOOM.RAD

    const composer = new EffectComposer(this.renderer)

    composer.addPass(renderPass)
    composer.addPass(bloomPass)

    const render = () => {
      const time = performance.now() / 2000

      l1.position.x = Math.sin(Math.sin(time)) * 2000
      l1.position.y = Math.sin(Math.cos(time)) * 2000
      l1.position.z = Math.sin(time) * 2000

      l2.position.x = Math.sin(time) * -2000
      l2.position.y = Math.cos(time) * -2000
      l2.position.z = Math.cos(Math.sin(time)) * -2000

      if (arc170 && arc170.rotation) {
        arc170.rotation.y = Math.cos(time) / 2
      }

      controls.update()
      composer.render()

      this.raf = requestAnimationFrame(render)
    }

    render()


    // Mouse and resize events
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)

      composer.reset()
    }
    window.addEventListener('resize', onWindowResize, false)

    // Adds GUI stuff
    this.gui = new dat.GUI({
      width: 340,
    })
    this.gui.useLocalStorage = true

    const guiBloom = this.gui.addFolder('Rotation')
    guiBloom.add(this.renderer, 'toneMappingExposure', 0, 1).step(0.001).name('Exposure').listen()
    guiBloom.add(bloomPass, 'threshold', 0, 2).step(0.001).name('Cut threshold')
    guiBloom.add(bloomPass, 'strength', 0, 2).step(0.1).name('Strength').listen()
    guiBloom.add(bloomPass, 'radius', 0, 2).step(0.1).name('Radius').listen()
    guiBloom.add(BLOOM, 'ANIMATE').name('Animate rotation')
    guiBloom.open()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf)
    this.renderer.domElement.remove()
    this.gui.destroy()
  }

  render() {
    return <></>
  }
}
