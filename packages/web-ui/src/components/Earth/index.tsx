import { useEffect } from "react"
import styled from "styled-components"
// @ts-ignore
import { renderEarth } from './main.js'

const CanvasContainer = styled.div`
  width:100%;
  height:100%;
  position:absolute;
  inset:0;
  background: #000;
  z-index: -1;
`
export function Earth() {
    useEffect(() => {
        const { clear, animate } = renderEarth();
        animate();
        return () => {
            console.log('destroy');
            clear();
        }
    }, [])
    return <CanvasContainer id="canvasContainer">
        <canvas id="earth"></canvas>
    </CanvasContainer>
}