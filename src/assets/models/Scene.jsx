/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: Denys Almaral (https://sketchfab.com/denysalmaral)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/low-poly-style-earth-3d-model-flatshaded-a80f6a01678c4b528efdddb37b730ffc
Title: Low Poly Style Earth 3D Model Flatshaded
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model(props) {
    const bakedTexture = useTexture(
        'src/assets/models/textures/lpEarthMat_diffuse.png'
    )
    const specularTexture = useTexture(
        'src/assets/models/textures/lpEarthMat_specularGlossiness.png'
    )
    const groupRef = useRef()

    useFrame((state, delta) => {
        groupRef.current.rotation.y += delta * 0.5
    })

    const { nodes, materials } = useGLTF('src/assets/models/scene.gltf')
    return (
        <group {...props} dispose={null}>
            <group rotation={[0, 0, 0]} scale={1.38}>
                <group ref={groupRef} rotation={[0, 1, 0]} scale={0.01}>
                    <mesh
                        // water
                        geometry={nodes.flatEarth_sea_lpEarthMat_0.geometry}
                        material={materials.lpEarthMat}
                    >
                        <meshBasicMaterial
                            map={bakedTexture}
                            specularMap={specularTexture}
                            map-flipY={false}
                        />
                    </mesh>
                    <mesh
                        // land
                        geometry={nodes.flatEarth_lands_lpEarthMat_0.geometry}
                        material={materials.lpEarthMat}
                    >
                        <meshBasicMaterial
                            map={bakedTexture}
                            specularMap={specularTexture}
                            map-flipY={false}
                        />
                    </mesh>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('src/assets/models/scene.gltf')
