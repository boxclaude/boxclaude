<template>
    <svg class="boxes-cluster" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" fill="none" viewBox="0 0 304 281">
        <!-- center box (main) -->
        <path fill="#08090A" class="accent-path" stroke-width="0.5"
            d="M148.534 1.068a7.75 7.75 0 0 1 6.932 0l50.211 25.106a3.75 3.75 0 0 1 2.073 3.354v125.056c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.21-25.105a3.75 3.75 0 0 1-2.074-3.354V29.528a3.75 3.75 0 0 1 2.073-3.354z"/>
        <path stroke="#2E2E32" stroke-linecap="round" stroke-width="0.5"
            d="m102 30.056 46.422 23.21a8 8 0 0 0 7.156 0L202 30.057"/>

        <!-- dim boxes (background/inactive) -->
        <g filter="url(#bc-f0)">
            <path fill="#08090A" stroke="#2E2E38" stroke-width="0.5"
                d="M84.534 139.068a7.76 7.76 0 0 1 6.932 0l50.211 25.106a3.75 3.75 0 0 1 2.073 3.353v19.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.21-25.105a3.75 3.75 0 0 1-2.074-3.354v-19.057a3.75 3.75 0 0 1 2.073-3.353z"/>
            <path stroke="#252530" stroke-linecap="round" stroke-width="0.5"
                d="m38 168.056 46.422 23.211a8 8 0 0 0 7.156 0L138 168.056"/>
        </g>

        <!-- highlighted left box -->
        <g filter="url(#bc-f1)">
            <path fill="#08090A" class="accent-path" stroke-width="0.5"
                d="M84.534 53.069a7.75 7.75 0 0 1 6.932 0l50.211 25.105a3.75 3.75 0 0 1 2.073 3.353v73.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.21-25.105a3.75 3.75 0 0 1-2.074-3.354V81.528a3.75 3.75 0 0 1 2.073-3.354z"/>
            <path stroke="#2E2E32" stroke-linecap="round" stroke-width="0.5"
                d="m38 82.056 46.422 23.211a8 8 0 0 0 7.156 0L138 82.056"/>
        </g>

        <!-- highlighted right box (tall) -->
        <g filter="url(#bc-f2)">
            <path fill="#08090A" class="accent-path" stroke-width="0.5"
                d="M212.534 97.069a7.75 7.75 0 0 1 6.932 0l50.211 25.105a3.75 3.75 0 0 1 2.073 3.353v61.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.211-25.105a3.75 3.75 0 0 1-2.073-3.354v-61.057a3.75 3.75 0 0 1 2.073-3.353z"/>
            <path stroke="#2E2E32" stroke-linecap="round" stroke-width="0.5"
                d="m166 126.056 46.422 23.211a8 8 0 0 0 7.156 0L266 126.056"/>
        </g>

        <!-- dim right-top box -->
        <g filter="url(#bc-f3)">
            <path fill="#08090A" stroke="#2E2E38" stroke-width="0.5"
                d="M212.534 64.069a7.75 7.75 0 0 1 6.932 0l50.211 25.105a3.75 3.75 0 0 1 2.073 3.353v19.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.211-25.105a3.75 3.75 0 0 1-2.073-3.354V92.528a3.75 3.75 0 0 1 2.073-3.354z"/>
            <path stroke="#252530" stroke-linecap="round" stroke-width="0.5"
                d="m166 93.056 46.422 23.211a8 8 0 0 0 7.156 0L266 93.056"/>
        </g>

        <!-- bottom center box -->
        <g filter="url(#bc-f4)">
            <path fill="#08090A" class="accent-path" stroke-width="0.5"
                d="M148.534 145.068a7.76 7.76 0 0 1 6.932 0l50.211 25.106a3.75 3.75 0 0 1 2.073 3.353v45.057c0 1.42-.803 2.718-2.073 3.354l-50.211 25.105a7.75 7.75 0 0 1-6.932 0l-50.21-25.105a3.75 3.75 0 0 1-2.074-3.354v-45.057a3.75 3.75 0 0 1 2.073-3.353z"/>
            <path stroke="#2E2E32" stroke-linecap="round" stroke-width="0.5"
                d="m102 174.056 46.422 23.211a8 8 0 0 0 7.156 0L202 174.056"/>
        </g>

        <!-- rolling 3-wide window: stagger=2s, active=6s(2f+2s+2f), cycle=12s -->
        <!-- at any moment: 1 fading-in + 1 stable + 1 fading-out = 2 fade + 1 unfade -->
        <g class="bc-star" style="animation-delay: 0s">
            <animateMotion dur="3s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#bc-mp0"/>
            </animateMotion>
            <text text-anchor="middle" dominant-baseline="middle" font-size="10">✦</text>
        </g>
        <g class="bc-star" style="animation-delay: 2s">
            <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#bc-mp1"/>
            </animateMotion>
            <text text-anchor="middle" dominant-baseline="middle" font-size="10">✧</text>
        </g>
        <g class="bc-star" style="animation-delay: 4s">
            <animateMotion dur="3.5s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#bc-mp3"/>
            </animateMotion>
            <text text-anchor="middle" dominant-baseline="middle" font-size="10">*</text>
        </g>
        <g class="bc-star" style="animation-delay: 6s">
            <animateMotion dur="2.8s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#bc-mp5"/>
            </animateMotion>
            <text text-anchor="middle" dominant-baseline="middle" font-size="10">✦</text>
        </g>
        <g class="bc-star" style="animation-delay: 8s">
            <animateMotion dur="3s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#bc-mp2"/>
            </animateMotion>
            <text text-anchor="middle" dominant-baseline="middle" font-size="10">✱</text>
        </g>
        <g class="bc-star" style="animation-delay: 10s">
            <animateMotion dur="2.5s" repeatCount="indefinite" calcMode="linear">
                <mpath href="#bc-mp4"/>
            </animateMotion>
            <text text-anchor="middle" dominant-baseline="middle" font-size="10">✺</text>
        </g>

        <defs>
            <!-- motion paths: inset top-face rhombus for each box -->
            <path id="bc-mp0" d="M152,13 L190,30 L152,44 L114,30 Z"/>
            <path id="bc-mp1" d="M88,63 L128,82 L88,96 L48,82 Z"/>
            <path id="bc-mp2" d="M216,107 L256,126 L216,140 L176,126 Z"/>
            <path id="bc-mp3" d="M88,149 L128,168 L88,182 L48,168 Z"/>
            <path id="bc-mp4" d="M216,74 L256,93 L216,107 L176,93 Z"/>
            <path id="bc-mp5" d="M152,155 L192,174 L152,188 L112,174 Z"/>

            <filter id="bc-f0" width="176" height="144" x="0" y="105.056" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feGaussianBlur stdDeviation="16"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0.031 0 0 0 0 0.035 0 0 0 0 0.039 0 0 0 1 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1"/>
                <feBlend in="SourceGraphic" in2="effect1" result="shape"/>
            </filter>
            <filter id="bc-f1" width="176" height="198" x="0" y="19.056" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feGaussianBlur stdDeviation="16"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0.031 0 0 0 0 0.035 0 0 0 0 0.039 0 0 0 1 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1"/>
                <feBlend in="SourceGraphic" in2="effect1" result="shape"/>
            </filter>
            <filter id="bc-f2" width="176" height="210" x="128" y="39.056" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feGaussianBlur stdDeviation="16"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0.031 0 0 0 0 0.039 0 0 0 0 0.039 0 0 0 1 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1"/>
                <feBlend in="SourceGraphic" in2="effect1" result="shape"/>
            </filter>
            <filter id="bc-f3" width="176" height="144" x="128" y="30.056" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feGaussianBlur stdDeviation="16"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0.031 0 0 0 0 0.035 0 0 0 0 0.039 0 0 0 1 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1"/>
                <feBlend in="SourceGraphic" in2="effect1" result="shape"/>
            </filter>
            <filter id="bc-f4" width="176" height="170" x="64" y="111.056" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feGaussianBlur stdDeviation="16"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0.031 0 0 0 0 0.035 0 0 0 0 0.039 0 0 0 1 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1"/>
                <feBlend in="SourceGraphic" in2="effect1" result="shape"/>
            </filter>
        </defs>
    </svg>
</template>

<script setup>
defineProps({
    width: { type: Number, default: 304 },
    height: { type: Number, default: 281 },
})
</script>

<style>
.accent-path {
    stroke: var(--primary);
}

svg.boxes-cluster {
    animation: float 5s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* stagger 2s, active 6s (2f+2s+2f), cycle 12s → always 3 visible: 2 fading + 1 stable */
.bc-star {
    animation: bc-star-show 12s infinite both;
    opacity: 0;
}

.bc-star text {
    fill: #d97757;
    pointer-events: none;
}

@keyframes bc-star-show {
    0%    { opacity: 0; }
    16.7% { opacity: 1; }
    33.3% { opacity: 1; }
    50%   { opacity: 0; }
    100%  { opacity: 0; }
}
</style>
