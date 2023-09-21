import { Canvas, useThree } from '@react-three/fiber'
import {
    PresentationControls,
    Stage,
    Environment,
    OrbitControls,
} from '@react-three/drei'
import Scene from '../../assets/models/Scene'
import { Suspense, useEffect, useRef } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Height } from '@mui/icons-material'

export default function CanvasComponent() {
    return (
        <Canvas
            camera={{ fov: 35, position: [4.5, 0, 2] }}
            style={{
                maxWidth: '500px',
                height: '500px',
            }}
        >
            <Suspense fallback={null}>
                <Scene scale={1.5} position={[0, -1, 0]} />
                <pointLight position={[0, 20, 10]} intensity={1.5} />
                {/* <ambientLight color="#101010" intensity={1} /> */}
            </Suspense>
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                enableRotate={true}
                minPolarAngle={1}
                maxPolarAngle={1}
            />
        </Canvas>
    )
}
