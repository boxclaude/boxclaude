<template>
    <section id="solution" ref="sectionRef">
        <div class="section-inner">
            <div class="section-header">
                <div class="section-label">The Solution</div>
                <h2>BoxClaude puts you back in control</h2>
                <p class="section-sub">Define exactly what Claude Code can see. Nothing more.</p>
            </div>

            <Carousel :items="items" :interval="6000" track-height="480px" @change="onSlideChange">
                <template #default="{ item }">
                    <div class="solution-slide">
                        <div class="slide-img-wrap">
                            <img :src="item.screenshot" :alt="item.alt">
                            <div class="mag-lens-border" :style="lensStyle(item)">
                                <div class="mag-lens" :style="lensMaskStyle(item)">
                                    <img :src="item.screenshot" :alt="item.alt" class="mag-lens-img" :style="lensImgStyle(item)" />
                                </div>
                            </div>
                        </div>
                        <div class="slide-text" :style="{ transform: item.transform }">
                            <!-- <div class="slide-num">{{ item.num }}</div> -->
                            <h3>{{ item.title }}</h3>
                            <div class="tag-block pain">
                                <span class="tag-label">
                                    <i class="codicon codicon-error" />
                                    The Pain
                                </span>
                                <p>{{ item.pain }}</p>
                            </div>
                            <div class="tag-block fix">
                                <span class="tag-label">
                                    <i class="codicon codicon-pass" />
                                    The Fix
                                </span>
                                <p>{{ item.fix }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </Carousel>

            <div v-if="isDev" class="mag-dev-panel">
                <label>size <input type="range" v-model.number="devSize" min="20" max="150" /> {{ devSize }}</label>
                <label>clip x <input type="range" v-model.number="devCx" min="0" max="100" /> {{ devCx }}</label>
                <label>clip y <input type="range" v-model.number="devCy" min="0" max="100" /> {{ devCy }}</label>
                <label>place x <input type="range" v-model.number="devPx" min="0" max="100" /> {{ devPx }}</label>
                <label>place y <input type="range" v-model.number="devPy" min="0" max="100" /> {{ devPy }}</label>
                <code>size:{{ devSize }}, cx:{{ devCx }}, cy:{{ devCy }}, px:{{ devPx }}, py:{{ devPy }}</code>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick, watch } from 'vue'
import Carousel from './Carousel.vue'
import { solutions } from '../data/solutions.js'

// const isDev = window.location.hostname === 'localhost'
const isDev = false

const items = reactive(solutions)

const sectionRef = ref(null)
const wrapW = ref(0)
const wrapH = ref(0)

const currentIdx = ref(0)
const devSize = ref(0)
const devCx = ref(0)
const devCy = ref(0)
const devPx = ref(0)
const devPy = ref(0)

const syncSliders = (i) => {
    const item = items[i]
    devSize.value = item.size
    devCx.value = item.cx
    devCy.value = item.cy
    devPx.value = item.px
    devPy.value = item.py
}

const onSlideChange = (i) => {
    currentIdx.value = i
    syncSliders(i)
}

// slider moves → mutate the item directly so lensStyle etc. react
watch([devSize, devCx, devCy, devPx, devPy], ([size, cx, cy, px, py]) => {
    const item = items[currentIdx.value]
    item.size = size
    item.cx = cx
    item.cy = cy
    item.px = px
    item.py = py
})

onMounted(async () => {
    await nextTick()
    syncSliders(0)
    const img = sectionRef.value?.querySelector('.slide-img-wrap img')
    if (img) {
        if (img.complete) {
            wrapW.value = img.clientWidth
            wrapH.value = img.clientHeight
        } else {
            img.addEventListener('load', () => {
                wrapW.value = img.clientWidth
                wrapH.value = img.clientHeight
            }, { once: true })
        }
    }
})

const lensStyle = (item) => ({
    height: `${item.size * 2}px`,
    left: `${item.px}%`,
    top: `${item.py}%`,
    width: `${item.size * 2}px`,
})

const lensMaskStyle = (item) => {
    const edgePct = ((item.size - 3) / item.size * 100).toFixed(1)
    const mask = `radial-gradient(circle closest-side at 50% 50%, black ${edgePct}%, transparent 100%)`
    return { maskImage: mask, webkitMaskImage: mask }
}

const lensImgStyle = (item) => {
    const scale = 2.5
    const L = item.size - (item.cx / 100) * wrapW.value * scale
    const T = item.size - (item.cy / 100) * wrapH.value * scale
    return {
        height: `${wrapH.value}px`,
        left: `${L}px`,
        top: `${T}px`,
        transform: `scale(${scale})`,
        transformOrigin: '0 0',
        width: `${wrapW.value}px`,
    }
}
</script>

<style>
#solution {
    border-top: 1px solid var(--border);
}

.solution-slide {
    align-items: center;
    display: grid;
    gap: 52px;
    grid-template-columns: 1fr clamp(280px, 33%, 380px);
}

.slide-img-wrap {
    border: 1px solid var(--border-bright);
    border-radius: var(--radius);
    box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255,255,255,0.03);
    overflow: hidden;
    position: relative;
}

.mag-lens-border {
    /* border: 2px solid rgba(74, 222, 128, 0.7); */
    border-radius: 50%;
    pointer-events: none;
    position: absolute;
    transform: translate(-50%, -50%);
}

.mag-lens {
    border-radius: 50%;
    height: 100%;
    overflow: hidden;
    position: relative;
    width: 100%;
}

.mag-lens-img {
    position: absolute;
}

.slide-img-wrap img {
    display: block;
    height: auto;
    width: 100%;
}

.slide-num {
    color: var(--accent);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 16px;
}

.slide-text h3 {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.25;
    margin-bottom: 20px;
}


.tag-block {
    border-radius: 8px;
    margin-bottom: 14px;
    padding: 14px 16px;
	position: relative;
}


.tag-block.pain {
    background: var(--red-dim);
    border: 1px solid rgba(248, 113, 113, 0.15);
}

.tag-block.fix {
    background: rgba(74, 222, 128, 0.06);
    border: 1px solid rgba(74, 222, 128, 0.15);
}

.tag-label {
    align-items: center;
    display: flex;
    font-size: 11px;
    font-weight: 700;
    gap: 5px;
    letter-spacing: 0.08em;
    margin-bottom: 7px;
    text-transform: uppercase;
}

.pain .tag-label { color: var(--red); }
.fix .tag-label { color: var(--accent); }

.tag-block p {
    color: var(--text-muted);
    font-size: 14px;
    line-height: 1.6;
}

.mag-dev-panel {
    background: rgba(0, 0, 0, 0.7);
    border: 1px solid var(--border);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    position: absolute;
    left: -300px;
    top: 250px;
    z-index: 9999;
}

.mag-dev-panel label {
    align-items: center;
    color: var(--text-muted);
    display: flex;
    font-size: 12px;
    gap: 8px;
}

.mag-dev-panel input[type="range"] {
    flex: 1;
}

.mag-dev-panel code {
    color: var(--accent);
    font-size: 11px;
    margin-top: 4px;
}

.slide-text {
    padding: 16px 4px 4px;
    position: relative;
}

@media (max-width: 800px) {
    #solution .carousel-track { height: auto !important; }

    #solution .slide {
        height: 0 !important;
        opacity: 0 !important;
        overflow: hidden !important;
        pointer-events: none !important;
        position: relative !important;
    }

	.slide-num {
		display: none;
	}
    #solution .slide.active {
        height: auto !important;
        opacity: 1 !important;
        pointer-events: auto !important;
    }

    .solution-slide {
        grid-template-columns: 1fr;
		    gap: 2px;
    }


    .slide-text h3 { font-size: 18px; }
    .tag-block p { font-size: 13px; }
}
</style>
