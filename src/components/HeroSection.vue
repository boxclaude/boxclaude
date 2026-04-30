<template>
    <section id="hero">
        <div class="hero-grid" />
        <div class="hero-content">
            <div class="hero-left">
                <!-- <div class="hero-badge">
                    <span class="badge-dot" />
                    VSCode Extension
                </div> -->
                <h1>
					<span style="font-size: 0.5em; word-spacing: 2px; display: block;">in the middle of implement a core feature</span>
					<span style="word-spacing: 2px; display: block;">
						<span style="color: var(--red); margin-right: 20px; text-transform: uppercase;"> Suddenly</span> 
						<span style="font-size: 0.5em; word-spacing: 2px;">you get</span>
					</span>
					<span class="accent" style="color: var(--red)"> You've hit your limit</span>
				</h1>

                <h1>
					<span style="font-size: 0.5em; word-spacing: 2px; display: block;">Search a function. You get a 5 slightly</span>
					<span style="word-spacing: 2px; display: block;">
						<span style="color: var(--red); margin-right: 20px; text-transform: uppercase;">  different</span>
						<span>copy</span>
					</span>
				</h1>
                <h1>
					<span style="font-size: 0.5em; word-spacing: 2px; display: block;">Even I did not write the code</span>
					<span style="word-spacing: 2px; display: block;">
						<span style="font-size: 0.5em; word-spacing: 2px;">Now I have to </span>
						<span style="color: var(--red); margin-right: 20px; text-transform: uppercase;">  OWN</span>
						<span>it</span>
					</span>
					<!-- <span style="word-spacing: 2px; display: block;">
						<span style="font-size: 0.5em; word-spacing: 2px;">The codebase is </span>
					<span style="color: var(--red); margin-right: 20px; text-transform: uppercase;">  exploding</span>
					</span> -->
				</h1>				
   
                <div class="hero-cta">
                    <a
                        class="btn-install large"
                        href="https://marketplace.visualstudio.com/items?itemName=RockieYang.BoxClaude"
                        target="_blank"
                    >
                        <i class="codicon codicon-extensions" />
                        Box your Claude to the way you wish
                    </a>
                </div>
                <div class="hero-dots">
                    <GridDots />
                </div>
            </div>
            <div class="hero-right">
                <div class="glow-ring" />
                <BoxesCluster :width="340" :height="315" />
            </div>
        </div>
        <a class="hero-scroll" href="#problem" ref="$scroll">
            <span style="color: var(--red)">↓</span>
            <span class="scroll-label" style="color: var(--red)">See the problems ?</span>
        </a>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BoxesCluster from './BoxesCluster.vue'
import GridDots from './GridDots.vue'

const $scroll = ref(null)
let observer = null

onMounted(() => {
    const $problem = document.getElementById('problem')
    if ($problem) {
        observer = new IntersectionObserver(([entry]) => {
            $scroll.value.style.opacity = entry.isIntersecting ? '0' : ''
            $scroll.value.style.pointerEvents = entry.isIntersecting ? 'none' : ''
        }, { threshold: 0.1 })
        observer.observe($problem)
    }
})

onUnmounted(() => {
    if (observer) observer.disconnect()
})
</script>

<style>
#hero {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 60px);
    overflow: hidden;
    padding: 80px 32px;
    position: relative;
}

.hero-grid {
    background-image:
        radial-gradient(ellipse 60% 60% at 70% 40%, rgba(var(--primary-rgb), 0.12), transparent 70%),
        linear-gradient(rgba(34, 34, 44, 0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34, 34, 44, 0.5) 1px, transparent 1px);
    background-size: 100%, 52px 52px, 52px 52px;
    inset: 0;
    mask-image: radial-gradient(ellipse 100% 90% at 50% 0%, black 20%, transparent 100%);
    position: absolute;
}

.hero-content {
    align-items: center;
    display: flex;
    gap: 64px;
    justify-content: center;
    margin: 0 auto;
    max-width: 1120px;
    position: relative;
    width: 100%;
}

.hero-left {
    flex: 3;
    /* max-width: 520px; */
}

.hero-badge {
    align-items: center;
    background: var(--accent-dim);
    border: 1px solid var(--accent-border);
    border-radius: 999px;
    color: var(--accent);
    display: inline-flex;
    font-size: 13px;
    gap: 7px;
    margin-bottom: 28px;
    padding: 5px 13px;
}

.badge-dot {
    background: var(--accent);
    border-radius: 50%;
    display: block;
    height: 6px;
    width: 6px;
}

#hero h1 {
    font-size: clamp(44px, 6vw, 72px);
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.08;
    margin-bottom: 20px;
}

.hero-sub {
    /* color: var(--text-muted); */
    font-size: clamp(16px, 2vw, 19px);
    line-height: 1.65;
    margin-bottom: 36px;
}

.hero-cta {
    align-items: center;
    display: flex;
    gap: 12px;
    margin-bottom: 40px;
}

.hero-dots {
    opacity: 0.6;
}

.hero-right {
    align-items: center;
    display: flex;
    flex: 2;
    justify-content: center;
    position: relative;
}

.glow-ring {
    background: radial-gradient(circle, rgba(var(--primary-rgb), 0.15) 0%, transparent 70%);
    border-radius: 50%;
    height: 400px;
    left: 50%;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
}

.hero-scroll {
    align-items: center;
    bottom: 28px;
    color: var(--text-dim);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    gap: 4px;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    transition: opacity 0.3s ease;
}

.scroll-label {
    animation: fadeUpDown 2s ease-in-out infinite;
}

@keyframes fadeUpDown {
    0%, 100% { opacity: 0.4; transform: translateY(0); }
    50% { opacity: 0.8; transform: translateY(3px); }
}

@media (max-width: 800px) {
    .hero-content {
        gap: 40px;
    }
    
    .hero-right {
        opacity: 0.8;
        position: absolute;
        width: 80%;
		z-index: -1;
		right: 0;
    }
}
</style>
