import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useEffect, useRef } from "react";

export default function TestComponent() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    canvasRef.current && canvasRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x0000ff, 1); // soft white light
    scene.add(ambientLight);
    const dl = new THREE.DirectionalLight(0x0000ff, 1.5);
    dl.position.set(0, 10, 10);
    scene.add(dl);
    const dlBack = new THREE.DirectionalLight(0x0000ff, 1.5);
    dlBack.position.set(0, 10, -10);
    scene.add(dlBack);

    renderer.setClearColor(0xffffff, 0);
    // scene.background = new THREE.Color(0xffffff);
    // scene.add(light);
    // scene.add(sphere);

    camera.position.z = 5;

    const loader = new GLTFLoader();
    let loadedModel;
    loader.load("/models/Computer.glb", function (gltf) {
      loadedModel = gltf.scene;
      loadedModel.rotation.x = 0.5;
      loadedModel.position.set(0, -0.5, 0);
      scene.add(loadedModel);
    });

    //const controls = new OrbitControls(camera, renderer.domElement);

    function animate() {
      if (loadedModel) {
        loadedModel.rotation.y -= 0.001;
      }
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();
  }, []);

  return (
    <div className="test">
      <div id="canvas" ref={canvasRef}></div>
      <div className="content">
        <h1 className="fancy">Content Goes Here</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          error eligendi nihil eius, possimus temporibus aut blanditiis ipsam
          quidem, quos esse magnam, corporis velit quae dolorum enim repudiandae
          debitis adipisci?
        </p>
      </div>
    </div>
  );
}
