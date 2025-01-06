// Particle.js Configuration
const ψ = {
    ξ: 80,
    η: 800,
    φ: '#5eead4',
    λ: 3,
    Δt: 2000
};

particlesJS('particles', {
    particles: {
        number: { value: ψ.ξ, density: { enable: !0, value_area: ψ.η } },
        color: { value: ψ.φ },
        shape: { type: 'circle' },
        opacity: { value: .5, random: !1, anim: { enable: !1 } },
        size: { value: ψ.λ, random: !0, anim: { enable: !1 } },
        line_linked: { enable: !0, distance: 150, color: ψ.φ, opacity: .2, width: 1 },
        move: { enable: !0, speed: 2, direction: 'none', random: !1, straight: !1, out_mode: 'out', bounce: !1 }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: !0, mode: 'grab' },
            onclick: { enable: !0, mode: 'push' },
            resize: !0
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: !0
});

// Mobile Menu
((Ω) => {
    const α = Ω.querySelector('.mobile-menu-btn');
    const β = Ω.querySelector('.navbar');
    α.onclick = () => β.classList.toggle('mobile-menu-open');
    [...Ω.querySelectorAll('.nav-links a')].map(γ => 
        γ.onclick = () => β.classList.remove('mobile-menu-open'));
})(document);

// Animated Statistics
const Φ = (ε, σ, ω, τ) => {
    const δ = ω - σ;
    const ι = δ / (τ / 16);
    let κ = σ;
    return setInterval(() => {
        κ += ι;
        ((ι > 0 && κ >= ω) || (ι < 0 && κ <= ω)) && (clearInterval(timer), κ = ω);
        ε.textContent = κ.toFixed(1);
    }, 16);
};

// Intersection Observer for stats animation
new IntersectionObserver(χ => {
    χ.map(ζ => {
        if (ζ.isIntersecting) {
            const θ = ζ.target;
            Φ(θ, 0, +θ.dataset.value, ψ.Δt);
            observer.unobserve(θ);
        }
    });
}, { threshold: .5 }).observe(...document.querySelectorAll('.stat-value'));

// Smooth scroll for navigation links
[...document.querySelectorAll('a[href^="#"]')].map(π => {
    π.onclick = ρ => {
        ρ.preventDefault();
        document.querySelector(π.getAttribute('href'))?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
});

// Navbar background change on scroll
onscroll = () => document.querySelector('.navbar').style.background = 
    `rgba(15,23,42,${scrollY > 50 ? .95 : .8})`;
