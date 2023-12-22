import {useEffect, useRef, useState} from 'react'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import { shaderMaterial, Plane, useTexture } from '@react-three/drei'

import {useNavigate} from "react-router-dom";
import sound from '/src/assets/Video/test.wav'
import  {gsap} from "gsap";

import Lottie, { useLottie } from "lottie-react";
import loadingAnimation from "/src/assets/images/loading.json";

export const Intro = () => {
    const [currentScene, setCurrentScene] = useState('introl1');
    let navigate = useNavigate()

    useEffect(() => {
        if (currentScene === 'introl1') {
            gsap.to(canvas, { scale: 1.2 });
            gsap.to(bg, { opacity: 0, duration: 1.5, delay: 0.8, display: 'none' });
        } else if(currentScene === 'intro2'){
            gsap.to(bg, { opacity: 0, duration: 1, delay: 1, display: 'none' });
            gsap.to(canvas, { scale: 1.2 });
        } else if(currentScene === 'intro3'){
            gsap.to(bg, { opacity: 0, duration: 1, delay: 1, display: 'none' });
            gsap.to(canvas, { scale: 1.2 });
        } else if(currentScene === 'intro4'){
            gsap.to(bg, { opacity: 0, duration: 1, delay: 1, display: 'none' });
            gsap.to(canvas, { scale: 1.2 });
        }
    }, [currentScene]);

    function onZoom() {
        if (currentScene === 'introl1') {
            // setCurrentScene('intro2'); // Ganti scene saat terjadi klik
            // gsap.to(canvas, { scale: 1 });

            const tl = gsap.timeline({
                onComplete: () => {
                    setCurrentScene('intro2');
                }
            });
            tl.to(canvas, { scale: 1 })
            tl.to(bg, { duration:1.5,opacity:1,display:"block" })
                // .to(bg, { opacity:0,duration:1,delay:1,display:"none" })

        }else if(currentScene === 'intro2'){



            const tl = gsap.timeline({
                onComplete: () => {
                    setCurrentScene('intro3');
                }
            });
            tl.to(canvas, { scale: 1 })
            tl.to(bg, { duration:1.5,opacity:1,display:"block" })
            // .to(bg, { opacity:0,duration:1,delay:1,display:"none" })

        }else if(currentScene === 'intro3'){



            const tl = gsap.timeline({
                onComplete: () => {
                    setCurrentScene('intro4');
                }
            });
            tl.to(canvas, { scale: 1 })
            tl.to(bg, { duration:1.5,opacity:1,display:"block" })
            // .to(bg, { opacity:0,duration:1,delay:1,display:"none" })

        }else if(currentScene === 'intro4'){



            const tl = gsap.timeline({
                onComplete: () => {
                    // setCurrentScene('intro4');

                    navigate('/loading')
                }
            });
            tl.to(canvas, { scale: 1 })
            tl.to(bg, { duration:1.5,opacity:1,display:"block" })
            // .to(bg, { opacity:0,duration:1,delay:1,display:"none" })

        }
    }

    let canvas = useRef(null);
    let bg = useRef(null);

    return (
        <div className={'w-screen h-screen bg-black flex justify-center items-center'}>
            <div  ref={el => bg = el}  className={'bg-black w-full h-full absolute z-50'}></div>
            <Canvas ref={el => canvas = el} onClick={() => onZoom()}>
                {currentScene === 'introl1' && <Model1 />}
                {currentScene === 'intro2' && <Model2 />}
                {currentScene === 'intro3' && <Model3 />}
                {currentScene === 'intro4' && <Model4 />}
            </Canvas>
        </div>
    );

}


function Model1() {
    const depthMaterial = useRef()
    const texture = useTexture('/src/assets/pixel.jpg')
    const depthMap = useTexture('/src/assets/pixel.jpg')
    const { viewport } = useThree()
    useFrame((state) => (depthMaterial.current.uMouse = [state.mouse.x * 0.01, state.mouse.y * 0.01]))



    return (
        <Plane args={[1, 1]} scale={[viewport.width, viewport.height, 1]} >
            <pseudo3DMaterial ref={depthMaterial} uImage={texture} uDepthMap={depthMap} />
        </Plane>
    )
}

function Model2() {
    const depthMaterial = useRef()
    const texture = useTexture('/src/assets/pixelimage.jpg')
    const depthMap = useTexture('/src/assets/pixelimage.jpg')
    const { viewport } = useThree()
    useFrame((state) => (depthMaterial.current.uMouse = [state.mouse.x * 0.01, state.mouse.y * 0.01]))



    return (
        <Plane args={[1, 1]} scale={[viewport.width, viewport.height, 1]} >
            <pseudo3DMaterial ref={depthMaterial} uImage={texture} uDepthMap={depthMap} />
        </Plane>
    )
}
function Model3() {
    const depthMaterial = useRef()
    const texture = useTexture('/src/assets/mountpiixel.jpg')
    const depthMap = useTexture('/src/assets/mountpiixel.jpg')
    const { viewport } = useThree()
    useFrame((state) => (depthMaterial.current.uMouse = [state.mouse.x * 0.01, state.mouse.y * 0.01]))



    return (
        <Plane args={[1, 1]} scale={[viewport.width, viewport.height, 1]} >
            <pseudo3DMaterial ref={depthMaterial} uImage={texture} uDepthMap={depthMap} />
        </Plane>
    )
}
function Model4() {
    const depthMaterial = useRef()
    const texture = useTexture('/src/assets/forestpixel.jpg')
    const depthMap = useTexture('/src/assets/forestpixel.jpg')
    const { viewport } = useThree()
    useFrame((state) => (depthMaterial.current.uMouse = [state.mouse.x * 0.01, state.mouse.y * 0.01]))



    return (
        <Plane args={[1, 1]} scale={[viewport.width, viewport.height, 1]} >
            <pseudo3DMaterial ref={depthMaterial} uImage={texture} uDepthMap={depthMap} />
        </Plane>
    )
}

extend({
    Pseudo3DMaterial: shaderMaterial(
        { uMouse: [0, 0], uImage: null, uDepthMap: null },
        `
    varying vec2 vUv;
    void main() {
      vec4 modelPosition = modelMatrix * vec4(position, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectionPosition = projectionMatrix * viewPosition;
      gl_Position = projectionPosition;
      vUv = uv;
    }`,
        `
    precision mediump float;

    uniform vec2 uMouse;
    uniform sampler2D uImage;
    uniform sampler2D uDepthMap;

    varying vec2 vUv;
  
    vec4 linearTosRGB( in vec4 value ) {
      return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
    }
    
    
    void main() {
       vec4 depthDistortion = texture2D(uDepthMap, vUv);
       float parallaxMult = depthDistortion.r;

       vec2 parallax = (uMouse) * parallaxMult;

       vec4 original = texture2D(uImage, (vUv + parallax));
       gl_FragColor = linearTosRGB(original);
    }
    `,
    ),
})
export default Intro;