import React, { useRef, useEffect} from 'react';


const Canvas = () => {
    let ref = useRef();
    let x = 200;

    const mouseMove = e => {
        console.log(e.clientX + "  " + e.clientY);
    }
    
    useEffect(() => {
            const render = () => {
            let canvas = ref.current;
            let c = canvas.getContext('2d');
            x++;
            c.clearRect(0, 0, canvas.width, canvas.height);
            c.fillStyle = "cyan";
            c.fillRect(x, 200, 20, 20);

            requestAnimationFrame(render);
        }
        render();
    });
    
 
    return(
        <div className="Nanvas" onMouseMove={mouseMove}>
            <canvas ref={ref} width={640} height={425} />
        </div>
    )
  }
  export default Canvas