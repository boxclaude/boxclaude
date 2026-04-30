<template>
    <div class="grid-dots-wrap">
        <svg
            :width="cols * spacing"
            :height="rows * spacing"
            :viewBox="`0 0 ${cols * spacing} ${rows * spacing}`"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
        >
            <circle
                v-for="(dot, i) in dots"
                :key="i"
                :cx="dot.cx"
                :cy="dot.cy"
                r="1.5"
                class="dot"
                opacity="0.4"
            />
        </svg>
    </div>
</template>

<script setup>
const cols = 12
const rows = 7
const spacing = 14

const dots = []
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        dots.push({
            cx: col * spacing + spacing / 2,
            cy: row * spacing + spacing / 2,
        })
    }
}
</script>

<style>
@property --blob-x {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 10%;
}

@property --blob-rx {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 28%;
}

@property --blob-ry {
    syntax: '<percentage>';
    inherits: false;
    initial-value: 36%;
}

.dot {
    fill: var(--primary);
}

.grid-dots-wrap {
    animation: blobGrow 4s ease-in-out infinite;
    display: block;
    mask-image: radial-gradient(ellipse var(--blob-rx) var(--blob-ry) at var(--blob-x) 50%, black 10%, transparent 85%);
}

@keyframes blobGrow {
    0%   { --blob-x: 10%; --blob-rx: 28%; --blob-ry: 36%; }
    55%  { --blob-x: 82%; --blob-rx: 55%; --blob-ry: 72%; }
    100% { --blob-x: 10%; --blob-rx: 28%; --blob-ry: 36%; }
}
</style>
