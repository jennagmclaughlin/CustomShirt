import React, { useRef } from 'react';
// 3D model
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
// import valtio states
import { useSnapshot } from "valtio";
import state from "../store";

const CameraRig = ({ children }) => {
  const snap = useSnapshot(state);

  const group = useRef();

  useFrame((state, delta) => {
    // camera breakpoints
    const isBreakpoint = window.innerWidth <= 1280;
    const isMobile = window.innerWidth <= 1260;

    // set the initial position of the model
    let targetPosition = [-0.4, 0, 2];
    if(snap.intro) {
      if(isBreakpoint) targetPosition = [0, 0, 2];
      if(isMobile) targetPosition = [0, 0.6, 5];
    } else {
      if(isMobile) targetPosition = [0, 0, 2.5]
      else targetPosition = [0, 0, 2];
    }

    // set camera position
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // set the model rotation
    easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
    )
  })


  return <group ref={group}>{ children }</group>
}

export default CameraRig