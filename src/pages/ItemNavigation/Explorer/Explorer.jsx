import React, { useEffect, useRef, useState } from 'react';
import {Canvas, useThree, useLoader, useFrame} from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { TextureLoader } from "three";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend } from '@react-three/fiber';
import gsap from "gsap";
import { Water } from "three/examples/jsm/objects/Water.js";
import {Html} from "@react-three/drei";
extend({ OrbitControls });



function Controls() {
    const controlsRef = useRef();
    const { camera, gl } = useThree();

    useEffect(() => {
        controlsRef.current.update();
    });

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, gl.domElement]}
            minDistance={480}
            maxDistance={450}
            maxPolarAngle={100}
            dampingFactor={0.05}
            maxPolarAngle={Math.PI / 5}
        />
    );
}

function FBXModel({xpos,ypos,zpos, path, ...props }) {

    const islandColors = [
        0xff0000,
        0x00ff00,
        0x0000ff,
        0x0000ff,
        0x0000ff,
    ];
    const colorIndex = props.index % islandColors.length;
    const color = islandColors[colorIndex];

    const handleClick = () => {
        console.log("halo");

        const targetPosition = {
            x: fbxRef.current.position.x + xpos,
            y: fbxRef.current.position.y + ypos,
            z: fbxRef.current.position.z + zpos
        };

        console.log(fbxRef.current.position.x);

        const targetRotation = {
            x: fbxRef.current.rotation.x,
            y: fbxRef.current.rotation.y,
            z: fbxRef.current.rotation.z
        };

        gsap.fromTo(
            camera.position,
            { opacity: 0 }, // mulai dengan opacity 0
            {
                ...targetPosition,
                opacity: 1, // akhir dengan opacity 1
                duration: 1,
                ease: "power2.inOut"
            }
        );

        gsap.fromTo(
            camera.rotation,
            { opacity: 0 }, // mulai dengan opacity 0
            {
                ...targetRotation,
                opacity: 1, // akhir dengan opacity 1
                duration: 1,
                ease: "power2.inOut"
            }
        );
    };



    const fbxRef = useRef();
    const fbx = useLoader(FBXLoader, path);
    const [isHovered, setIsHovered] = useState(false);
    const texture = new TextureLoader().load('/src/assets/images/tanah.jpg');

    let { camera } = useThree();

    useEffect(() => {
        camera.position.set(0, 500, 0);
        camera.lookAt(fbxRef.current.position);
        fbx.traverse((child) => {
            if (child.isMesh) {
                child.material.map = texture;
                child.material.needsUpdate = true;
            }
        });
    }, [fbx]);

    useEffect(() => {
        const originalColors = new Map();

        fbx.traverse((child) => {
            if (child.isMesh) {
                if (!originalColors.has(child)) {
                    originalColors.set(child, child.material.color.clone());
                }

                const colorIndex = props.index % islandColors.length;
                const color = islandColors[colorIndex];

                if (isHovered) {
                    child.material.color.set(color);
                } else {
                    child.material.color.copy(originalColors.get(child));
                }
                child.material.needsUpdate = true;
            }
        });

        return () => {
            originalColors.forEach((color, child) => {
                child.material.color.copy(color);
                child.material.needsUpdate = true;
            });
        };
    }, [fbx, isHovered, props.index]);


    return (
        <>
            <primitive
                // className={'cursor-pointer'}
                onClick={handleClick}
                ref={fbxRef}
                {...props}
                object={fbx}
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
            />
            {isHovered && (
                <Html position={[fbxRef.current.position.x, fbxRef.current.position.y + 50, fbxRef.current.position.z]}>
                    <div style={{ color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px 10px', borderRadius: '5px' }}>
                        Pulau {props.index + 1}
                    </div>
                </Html>
            )}
        </>
    );
}

function WaterEffect() {
    const { scene } = useThree();
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    const waterNormals = new THREE.TextureLoader().load('/src/assets/images/waternormals.jpg', function (texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    });

    useFrame(state => {

        water.material.uniforms[ 'time' ].value += 1.0 / 60.0;
    })

    const water = new Water(
        waterGeometry,
        {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals,
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: scene.fog !== undefined
        }
    );

    water.rotation.x = -Math.PI / 2;

    return <primitive object={water} />;
}

function Explorer() {

    return (
        <div className={'w-full h-screen '}>
            <Canvas className={'w-full h-full'}>
                <ambientLight intensity={2} />
                <WaterEffect />
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/1.fbx'} index={0} xpos={-100} ypos={60} zpos={70}/>
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/2.fbx'} index={1} xpos={-100} ypos={60} zpos={70}/>
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/3.fbx'} index={2} xpos={100} ypos={60} zpos={140}/>
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/4.fbx'} index={3} />
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/5.fbx'} index={4} xpos={-100} ypos={60} zpos={250}/>

                <Controls />
            </Canvas>
        </div>
    );
}

export default Explorer;