/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/human.glb')
  const { actions } = useAnimations(animations, group)
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="Human_Armature" scale={69.18}>
            <primitive object={nodes.Hips} />
          </group>
          <skinnedMesh name="Human_Mesh" geometry={nodes.Human_Mesh.geometry} material={materials.Texture} skeleton={nodes.Human_Mesh.skeleton} scale={69.18} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/human.glb')
