import React, { useEffect, useRef, useState } from 'react';
import {Canvas, useThree, useLoader, useFrame} from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { TextureLoader } from "three";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { extend } from '@react-three/fiber';
import gsap from "gsap";
import { Water } from "three/examples/jsm/objects/Water.js";
import {Html, Sky} from "@react-three/drei";
import {useNavigate} from "react-router-dom";
extend({ OrbitControls });

import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';

extend({OutlinePass})


function FBXModel({xpos,ypos,zpos, path, ...props }) {


    const handleClick = () => {
        console.log("halo");

        const targetPosition = {
            x: fbxRef.current.position.x + xpos,
            y: fbxRef.current.position.y + ypos,
            z: fbxRef.current.position.z + zpos,

        };

        console.log(fbxRef.current.position.x);

        const targetRotation = {
            x: fbxRef.current.rotation.x,
            y: fbxRef.current.rotation.y,
            z: fbxRef.current.rotation.z
        };

        gsap.fromTo(
            camera.position,
            {opacity: 0}, // mulai dengan opacity 0
            {
                ...targetPosition,
                opacity: 1, // akhir dengan opacity 1
                duration: 1,
                ease: "power2.inOut"
            }
        );

        gsap.fromTo(
            camera.rotation,
            {opacity: 0}, // mulai dengan opacity 0
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

    let {camera} = useThree();

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


    return (
        <>
            <primitive
                ref={fbxRef}
                {...props}
                object={fbx}
                onPointerOver={() => setIsHovered(true)}
                onPointerOut={() => setIsHovered(false)}
            />
            {isHovered && (
                <Html position={[fbxRef.current.position.x, fbxRef.current.position.y + 50, fbxRef.current.position.z]}>
                    <div className="floating-text">
                        Pulau {
                        <>
                            {props.index + 1 == 1 && "coming soon"}
                            {props.index + 1 == 2 && "coming soon"}
                            {props.index + 1 == 3 && "coming soon"}
                            {props.index + 1 == 5 && "jawa"}
                            {props.index + 1 == 4 && "coming soon"}
                        </>
                    }
                    </div>
                </Html>
            )}
        </>
    );
}



function Explorer() {

    return (
        <div className={'w-full h-screen '}>
            <Canvas className={'w-full h-full'}>

                <ambientLight intensity={2} />
                <Sky
                    distance={450000} // Sets the sky sphere's distance from the center of the scene
                    sunPosition={[100, 1, 0]} // Position of the sun [x, y, z]
                    // inclination={0} // Sun elevation
                    // azimuth={0.25} // Sun rotation
                    // turbidity={1} // Sun brightness
                />
                {/*<WaterEffect />*/}
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/1.fbx'} index={0} xpos={-100} ypos={60} zpos={70}/>
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/2.fbx'} index={1} xpos={-100} ypos={60} zpos={70}/>
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/3.fbx'} index={2} xpos={100} ypos={60} zpos={140}/>
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/4.fbx'} index={3} />
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/5.fbx'} index={4} xpos={-100} ypos={60} zpos={250}/>

                {/*<Controls />*/}
            </Canvas>
        </div>
    );
}

export default Explorer;
