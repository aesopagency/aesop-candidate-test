import React, { Component } from 'react'

import './style.scss'

const COLORS = {
  NORMAL: 0xffffff, // WHITE
  LIGHT_1: 0xff34b3, // PURPLE (255,52,179)
  LIGHT_2: 0x201148, // DEEPBLUE (32,17,72)
}

const CUBE = {
  ROTATION: true,
}

export default class TroubleshootExercise extends Component {
  constructor(props) {
    super(props)
    this.renderer = null
    this.gui = null
  }

  componentDidMount() {
    const THREE = require('three')
    const { TrackballControls } = require('three/examples/jsm/controls/TrackballControls')
    const { EffectComposer } = require('three/examples/jsm/postprocessing/EffectComposer')
    const { RenderPass } = require('three/examples/jsm/postprocessing/RenderPass')
    const { UnrealBloomPass } = require('three/examples/jsm/postprocessing/UnrealBloomPass')

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )

    camera.position.x = 350
    camera.position.z = 350
    camera.position.y = 350
    this.renderer = new THREE.WebGLRenderer()
    this.renderer.setClearColor(0x222222, 0)

    this.renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(this.renderer.domElement)

    const controls = new TrackballControls(camera)
    controls.target = scene.position
    controls.minDistance = 250
    controls.maxDistance = 350

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
    const light = new THREE.AmbientLight(0x333333)
    scene.add(light)

    const l1 = new THREE.PointLight(COLORS.LIGHT_1, 0.5)
    l1.position.set(0, -200, -200)
    scene.add(l1)

    const l2 = new THREE.PointLight(COLORS.LIGHT_2, 1.5)
    l2.position.set(0, 200, 200)
    scene.add(l2)

    // Cube mesh
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(100, 100, 100),
      new THREE.MeshStandardMaterial({
        color: COLORS.NORMAL,
      }),
    )
    scene.add(cube)

    // Visual helpers
    const box = new THREE.BoxHelper(cube, 0xffff00)
    scene.add(box)
    const axesHelper = new THREE.AxesHelper(120)
    scene.add(axesHelper)

    // Post processing
    const renderPass = new RenderPass(scene, camera)
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85,
    )

    bloomPass.threshold = 0
    bloomPass.strength = 0.5
    bloomPass.radius = 1

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
    const dat = require('dat.gui')

    this.gui = new dat.GUI({
      width: 340,
    })
    this.gui.useLocalStorage = true

    this.gui.add(cube.rotation, 'x', 0, 360).step(0.1).name('X axis').listen()
    this.gui.add(cube.rotation, 'y', 0, 360).step(0.1).name('Y axis').listen()
    this.gui.add(cube.rotation, 'z', 0, 360).step(0.1).name('Z axis').listen()
    this.gui.add(CUBE, 'ROTATION').name('Animate rotation')
    this.gui.open()
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
