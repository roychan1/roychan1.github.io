import '../css/Hero.css';
import { useMemo } from 'react';
import * as THREE from 'three';

import Stats from 'three/addons/libs/stats.module.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const GLB_BYTE_SIZE = 77801908;


const ModelPureJS = ({ setLoadPercentage, setReady }) => {

    let mixer;
  
    const clock = new THREE.Clock();
    const stats = new Stats();
  
    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.outputEncoding = THREE.sRGBEncoding;
  
    const pmremGenerator = new THREE.PMREMGenerator( renderer );
  
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xEFEAD8 );
    scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 0.04 ).texture;
  
    const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 100 );
    camera.position.set( 0, 1.5, 6 );
  
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( 'jsm/libs/draco/gltf/' );
  
    const loader = new GLTFLoader();
    loader.setDRACOLoader( dracoLoader );
    loader.load( 'models/roy.glb', function ( gltf ) {
  
        const model = gltf.scene;
        model.position.set( -0.7, 0, -1 );
        model.rotation.y += -0.8;
        model.scale.set( 2, 2, 2 );
        scene.add( model );
  
        mixer = new THREE.AnimationMixer( model );
        mixer.clipAction( gltf.animations[ 1 ] ).play();
  
        animate();

        setReady(true);
    }, 
    (xhr) => {
        const percent = Math.trunc( (xhr.loaded / GLB_BYTE_SIZE) * 100 );
        console.log( percent + "% loaded.");
        setLoadPercentage(percent);
    }, function ( e ) {
  
        console.error( e );
  
    } );
  
    window.onresize = function () {
  
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );
    
    };
    
    function animate() {
    
        requestAnimationFrame( animate );

        const delta = clock.getDelta();

        mixer.update( delta );

        stats.update();

        renderer.render( scene, camera );
    
    }
  
    return <div ref={(nodeElement) => { nodeElement && nodeElement.appendChild(renderer.domElement) }} /> 
}

const MemoizedModel = ({setLoadPercentage, setReady}) => useMemo(() => <ModelPureJS setLoadPercentage={setLoadPercentage} setReady={setReady}/>, [setLoadPercentage, setReady]);

export const Hero = ({ setLoadPercentage, setReady }) => {
    return (
        <div className="hero">
            <div className="hero-titles-left">
                <h4>I am a </h4>
                <div className="words">
                    <span><h2>Learner</h2></span>
                    <span><h2>Software Engineer</h2></span>
                    <span><h2>React Developer</h2></span>
                    <span><h2>React Native Developer</h2></span>
                    <span><h2>Learner</h2></span>
                </div>
            </div>
            <div className="hero-titles-right">
                <img alt="arrow" className="arrow" src={'images/arrow.png'} />
                <h3>Hi! My name is Roy!</h3>
            </div>
            {/* memoized ModelPureJS so it doesn't rerender with state change */}
            {/* <MemoizedModel setLoadPercentage={setLoadPercentage} setReady={setReady}/> */}
        </div>
    );
}