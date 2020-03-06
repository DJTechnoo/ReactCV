import React, {useRef, useEffect} from 'react';


const Canvas = () => {
    let ref = useRef();
    let x = 200;
    
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
        <div>
            <canvas ref={ref} width={640} height={425} />
        </div>
    )
  }
  export default Canvas