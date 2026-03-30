'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function DottedSurface({ className, children, ...props }) {
	const { theme, resolvedTheme } = useTheme();

	const canvasContainerRef = useRef(null);

	useEffect(() => {
		if (!canvasContainerRef.current) return;
        
        // Guarantee no "phantom" canvases from Vite hot-reloads get stuck
        canvasContainerRef.current.innerHTML = '';

		const SEPARATION = 150;
		const AMOUNTX = 40;
		const AMOUNTY = 60;

		// Scene setup
		const scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0xffffff, 2000, 10000);

		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			1,
			10000,
		);
		camera.position.set(0, 800, 1800);
		camera.lookAt(0, 0, 0);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(scene.fog.color, 0);

		canvasContainerRef.current.appendChild(renderer.domElement);

		// Create particles
		const particles = [];
		const positions = [];
		const colors = [];

		// Create geometry for all particles
		const geometry = new THREE.BufferGeometry();
		
		const isDark = theme === 'dark' || resolvedTheme === 'dark';

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 0; // Will be animated
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

				positions.push(x, y, z);
				if (isDark) {
					colors.push(1.0, 1.0, 1.0); // White dots for dark mode
				} else {
					colors.push(0.0, 0.0, 0.0); // Black dots for light mode
				}
			}
		}

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		// Create material
		const material = new THREE.PointsMaterial({
			size: 8,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			sizeAttenuation: true,
		});

		// Create points object
		const points = new THREE.Points(geometry, material);
		scene.add(points);

		let animationId;
        const startTime = Date.now();

		// Animation function
		const animate = () => {
			animationId = requestAnimationFrame(animate);

            // Using deterministic time guarantees continuous movement and ignores closure traps
            const elapsed = (Date.now() - startTime) * 0.003; 

			const positionAttribute = geometry.attributes.position;
			const positions = positionAttribute.array;

			let i = 0;
			for (let ix = 0; ix < AMOUNTX; ix++) {
				for (let iy = 0; iy < AMOUNTY; iy++) {
					const index = i * 3;

					// Animate Y position with sine waves
					positions[index + 1] =
						Math.sin((ix + elapsed) * 0.3) * 250 +
						Math.sin((iy + elapsed) * 0.5) * 250;

					i++;
				}
			}

			positionAttribute.needsUpdate = true;

			// Add a slow rotation to the scene for more visual movement
			scene.rotation.y = elapsed * 0.2;

			renderer.render(scene, camera);
		};

		// Handle window resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener('resize', handleResize);

		// Start animation
		animate();

		// Cleanup function
		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationId);

            // Clean up Three.js objects to avoid memory leaks
            scene.traverse((object) => {
                if (object instanceof THREE.Points) {
                    object.geometry.dispose();
                    if (Array.isArray(object.material)) {
                        object.material.forEach((material) => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });

            renderer.dispose();

            if (canvasContainerRef.current) {
                canvasContainerRef.current.innerHTML = '';
            }
		};
	}, [theme, resolvedTheme]);

	return (
		<div className={cn('pointer-events-none fixed inset-0 -z-10', className)} {...props}>
            <div ref={canvasContainerRef} className="absolute inset-0" />
            {children}
		</div>
	);
}
