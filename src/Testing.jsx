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




function FBXModel({xpos,ypos,zpos, path, ...props }) {


    const handleClick = () => {

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

        </>
    );
}



function Testing() {

    return (
        <div className={'w-full h-screen '}>
            <Canvas className={'w-full h-full'}>
                <ambientLight intensity={2} />
                <FBXModel position={[0, 0, 0]} path={'/src/assets/model/2.fbx'} index={1} xpos={-100} ypos={60} zpos={70}/>

            </Canvas>
        </div>
    );
}

export default Testing;