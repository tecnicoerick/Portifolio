import React, { useEffect, useRef } from 'react';

export const AIProcessingBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Track mouse position for AI interactive connection ripples
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 180,
      active: false
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    // Particle / Neural Node Data
    const nodeCount = Math.min(Math.floor(width * 0.06), 75);
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      color: string;
      pulseSpeed: number;
      pulseOffset: number;
    }

    const colors = [
      'rgba(6, 182, 212, ',   // Cyan
      'rgba(16, 185, 129, ',  // Emerald
      'rgba(129, 140, 248, ', // Indigo
      'rgba(168, 85, 247, '   // Purple
    ];

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
baseAlpha: Math.random() * 0.4 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // AI Processing Beams / Waves
    interface SignalBeam {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
    }

    const beams: SignalBeam[] = [];
    const spawnBeam = () => {
      if (nodes.length < 2) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) {
        to = Math.floor(Math.random() * nodes.length);
      }
      beams.push({
        fromIndex: from,
        toIndex: to,
        progress: 0,
        speed: Math.random() * 0.02 + 0.015,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    };

    // Initial beam burst
    for (let i = 0; i < 6; i++) spawnBeam();

    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient AI processing grid overlay
      const gridSize = 60;
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = 'rgba(15, 23, 42, 0.25)';
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        // Bounce on borders
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        // Mouse gravity pull & push effect
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            node.x -= (dx / dist) * force * 1.5;
            node.y -= (dy / dist) * force * 1.5;
          }
        }

        // Breathing pulse size/alpha
        const alphaPulse = Math.sin(time * node.pulseSpeed * 60 + node.pulseOffset) * 0.2 + node.baseAlpha;
        const currentAlpha = Math.max(0.1, Math.min(0.9, alphaPulse));

        // Draw node aura
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = node.color + (currentAlpha * 0.3) + ')';
        ctx.fill();

        // Draw node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color + currentAlpha + ')';
        ctx.fill();

        // Connect nearby nodes with AI Neural threads
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 140;
          if (dist < maxDist) {
            const lineAlpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = node.color + lineAlpha + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect node to mouse if nearby
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const mouseLineAlpha = (1 - dist / mouse.radius) * 0.45;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = 'rgba(6, 182, 212, ' + mouseLineAlpha + ')';
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // 3. Render and animate AI Signal Beams travelling between nodes
      for (let i = beams.length - 1; i >= 0; i--) {
        const beam = beams[i];
        beam.progress += beam.speed;

        const from = nodes[beam.fromIndex];
        const to = nodes[beam.toIndex];

        if (from && to) {
          const currentX = from.x + (to.x - from.x) * beam.progress;
          const currentY = from.y + (to.y - from.y) * beam.progress;

          // Draw travelling glow particle
          ctx.beginPath();
          ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = beam.color + '0.9)';
          ctx.shadowColor = beam.color + '1)';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        }

        if (beam.progress >= 1) {
          beams.splice(i, 1);
          spawnBeam(); // Respawn new beam
        }
      }

      // Randomly spawn new beams occasionally
      if (Math.random() < 0.05 && beams.length < 10) {
        spawnBeam();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic AI Background Processing Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />

      {/* Atmospheric AI Processing Glow Orbs (Ambient Hues) */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none animate-pulseGlow" />
      <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full bg-emerald-500/10 blur-[140px] pointer-events-none animate-pulseGlow" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] max-w-[650px] max-h-[650px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none animate-pulseGlow" style={{ animationDelay: '4s' }} />

      {/* Processing Scanner Line (Subtle AI scanning effect) */}
      <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-scanLine pointer-events-none opacity-40" />
    </div>
  );
};
