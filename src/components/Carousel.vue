<template>
    <div class="carousel" @mouseenter="pause" @mouseleave="resume">
        <div class="carousel-track" :style="{ height: trackHeight }">
            <div
                v-for="(item, i) in items"
                :key="i"
                class="slide"
                :class="{ active: i === current }"
            >
                <slot :item="item" :index="i" />
            </div>
        </div>
        <div class="carousel-nav">
            <button class="nav-btn" @click="retreat" aria-label="Previous">
                <i class="codicon codicon-chevron-left" />
            </button>
            <div class="dots">
                <button
                    v-for="(_, i) in items"
                    :key="i"
                    class="dot"
                    :class="{ active: i === current }"
                    @click="show(i)"
                />
            </div>
            <button class="nav-btn" @click="advance" aria-label="Next">
                <i class="codicon codicon-chevron-right" />
            </button>
            <button v-if="isLocalhost" class="nav-btn stop-btn" @click="toggleStop" :aria-label="stopped ? 'Resume' : 'Stop'">
                <i :class="stopped ? 'codicon codicon-play' : 'codicon codicon-debug-stop'" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
    items: Array,
    interval: { type: Number, default: 5000 },
    trackHeight: { type: String, default: 'auto' },
})

const emit = defineEmits(['change'])

const current = ref(0)
const stopped = ref(false)
const isLocalhost = location.hostname === 'localhost' || location.hostname === '127.0.0.1'
let timer = null

function show(i) {
    current.value = i
    emit('change', i)
}

function advance() {
    current.value = (current.value + 1) % props.items.length
    emit('change', current.value)
}

function retreat() {
    current.value = (current.value - 1 + props.items.length) % props.items.length
    emit('change', current.value)
}

function pause() {
    clearInterval(timer)
}

function resume() {
    if (!stopped.value) {
        timer = setInterval(advance, props.interval)
    }
}

function toggleStop() {
    if (stopped.value) {
        stopped.value = false
        timer = setInterval(advance, props.interval)
    } else {
        stopped.value = true
        clearInterval(timer)
    }
}

onMounted(() => {
    timer = setInterval(advance, props.interval)
})

onUnmounted(() => {
    clearInterval(timer)
})
</script>

<style>
.carousel {
    position: relative;
}

.carousel-track {
    position: relative;
}

.slide {
    height: 100%;
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transition: opacity 400ms ease;
    width: 100%;
}

.slide.active {
    opacity: 1;
    pointer-events: auto;
}

.carousel-nav {
    align-items: center;
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-top: 32px;
}

.nav-btn {
    align-items: center;
    background: var(--bg-card);
    border: 1px solid var(--border-bright);
    border-radius: 50%;
    color: var(--text-muted);
    cursor: pointer;
    display: flex;
    height: 36px;
    justify-content: center;
    transition: border-color 0.15s, color 0.15s, background 0.15s;
    width: 36px;
}

.nav-btn:hover {
    background: var(--accent-dim);
    border-color: var(--accent);
    color: var(--accent);
}

.dots {
    display: flex;
    gap: 6px;
}

.dot {
    background: var(--border-bright);
    border: none;
    border-radius: 3px;
    cursor: pointer;
    height: 6px;
    transition: background 0.2s, width 0.2s;
    width: 6px;
}

.dot.active {
    background: var(--accent);
    width: 18px;
}

.stop-btn {
    margin-left: 8px;
    opacity: 0.6;
}

.stop-btn:hover {
    opacity: 1;
}
</style>
