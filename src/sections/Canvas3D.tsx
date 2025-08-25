import { useEffect, useRef } from "react";
import * as THREE from "three";

const Canvas3D = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    console.log("Canvas3D mounted", mountRef.current); // Debug log

    if (!mountRef.current) {
      console.error("Mount ref is null");
      return;
    }

    try {
      const mount = mountRef.current;
      const scene = new THREE.Scene();

      // Debug - log scene creation
      console.log("Scene created");

      // Subtle gradient background
      // const colorTop = new THREE.Color(0x0b1220);
      const colorBottom = new THREE.Color(0x0a0f1a);
      scene.background = colorBottom;

      const camera = new THREE.PerspectiveCamera(
        55,
        mount.clientWidth / mount.clientHeight,
        0.1,
        1000
      );
      camera.position.set(0, 0, 28);

      // Create renderer first
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: mount.querySelector("canvas") || undefined,
      });

      // Set size to match container
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Append canvas if it doesn't exist
      if (!mount.querySelector("canvas")) {
        mount.appendChild(renderer.domElement);
      }

      // Lights
      const ambient = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambient);
      const dir = new THREE.DirectionalLight(0xffffff, 0.8);
      dir.position.set(5, 10, 7);
      scene.add(dir);

      // Particles
      const particles = new THREE.BufferGeometry();
      const count = 6000;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 120;
      }
      particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const pMat = new THREE.PointsMaterial({
        size: 0.06,
        color: 0x77e4c8,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
      });
      const points = new THREE.Points(particles, pMat);
      scene.add(points);

      // Floating wireframe sphere
      const wireGeo = new THREE.SphereGeometry(8, 32, 32);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x7dd3fc,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      const wireSphere = new THREE.Mesh(wireGeo, wireMat);
      scene.add(wireSphere);

      const clock = new THREE.Clock();

      const animate = () => {
        const t = clock.getElapsedTime();
        points.rotation.y = t * 0.02;
        points.rotation.x = Math.sin(t * 0.1) * 0.05;
        wireSphere.rotation.y = t * 0.1;
        wireSphere.position.y = Math.sin(t * 0.8) * 0.6;

        renderer.render(scene, camera);
        frameRef.current = requestAnimationFrame(animate);
      };
      animate();

      const handleResize = () => {
        if (!mountRef.current) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      window.addEventListener("resize", handleResize);

      const handleMouseMove = (event: MouseEvent) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        
        scene.rotation.y = mouseX * 0.1;
        scene.rotation.x = mouseY * 0.1;
      };

      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        if (frameRef.current) {
          cancelAnimationFrame(frameRef.current);
        }
        mount.removeChild(renderer.domElement);
        renderer.dispose();
        wireGeo.dispose();
        pMat.dispose();
        particles.dispose();
      };
    } catch (error) {
      console.error("Error in Canvas3D:", error);
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 w-full h-full"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        background: "#0f172a", // Dark background to see if component renders
      }}
    />
  );
};

export default Canvas3D;
