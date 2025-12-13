window.addEventListener('load', () => {
    const bar = document.getElementById('loader-bar');
    const loader = document.getElementById('loader');
    const canvas = document.getElementById('canvas-container');
    
    setTimeout(() => { bar.style.width = '70%'; }, 300);
    setTimeout(() => { bar.style.width = '100%'; }, 800);
    
    setTimeout(() => {
        gsap.to(loader, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
                canvas.style.opacity = '1';
                initAnimations();
            }
        });
    }, 1200);
});


function initThreeJS() {
    const container = document.getElementById('canvas-container');
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.002);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50; 
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
        size: 0.04,
        color: 0x3366ff,
        transparent: true,
        opacity: 0.8,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, material);
    scene.add(particlesMesh);

    const geometry = new THREE.IcosahedronGeometry(10, 1);
    const materialGeo = new THREE.MeshBasicMaterial({ 
        color: 0x06b6d4, 
        wireframe: true,
        transparent: true,
        opacity: 0.05
    });
    const sphere = new THREE.Mesh(geometry, materialGeo);
    scene.add(sphere);

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (event) => {
        mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
        mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    });

    const animate = () => {
        sphere.rotation.y += 0.002;
        sphere.rotation.x += 0.002;
        scene.rotation.y = mouseX * 0.5;
        scene.rotation.x = mouseY * 0.5;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}
initThreeJS();


const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});


gsap.registerPlugin(ScrollTrigger);

function initAnimations(){
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const raw = el.innerText;
            const numberMatch = raw.match(/[\d\.]+/);
            
            if(numberMatch) {
                const targetNum = parseFloat(numberMatch[0]);
                const suffix = raw.replace(numberMatch[0], '');
                let current = 0;
                const increment = targetNum / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if(current >= targetNum) {
                        el.innerText = raw;
                        clearInterval(timer);
                    } else {
                        const formatted = targetNum % 1 === 0 ? Math.round(current) : current.toFixed(1);
                        el.innerText = formatted + suffix;
                    }
                }, 30);
                observer.unobserve(el);
            }
        }
    });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-number').forEach(stat => observer.observe(stat));
