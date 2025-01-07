import { useEffect, useRef } from 'react';

const HexBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const hexSize = 20;
    const hexWidth = hexSize * 2;
    const hexHeight = Math.sqrt(3) * hexSize;
    const columns = Math.ceil(canvas.width / (hexWidth * 0.75)) + 1;
    const rows = Math.ceil(canvas.height / hexHeight) + 1;

    const drawHex = (x: number, y: number, time: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const noise = Math.sin(time + x * 0.05 + y * 0.05) * 2;
        const px = x + (hexSize + noise) * Math.cos(angle);
        const py = y + (hexSize + noise) * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(0, 255, 0, ${0.1 + Math.sin(time + x * 0.02 + y * 0.02) * 0.05})`;
      ctx.stroke();
    };

    let time = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      for (let col = 0; col < columns; col++) {
        for (let row = 0; row < rows; row++) {
          const x = col * hexWidth * 0.75;
          const y = row * hexHeight + (col % 2) * (hexHeight / 2);
          drawHex(x, y, time);
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-20"
    />
  );
};

export default HexBackground;
