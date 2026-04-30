<template>
    <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" fill="none" :viewBox="`0 0 265 262`" class="box-svg">
        <path stroke="#2A2A32" stroke-linecap="round" stroke-width="0.5" d="m19.107 186.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"/>
        <path stroke="#2A2A32" stroke-linecap="round" stroke-width="0.5" d="m19.107 168.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"/>
        <path stroke="#2A2A32" stroke-linecap="round" stroke-width="0.5" d="m19.107 150.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"/>
        <path stroke="#2A2A32" stroke-linecap="round" stroke-width="0.5" d="m19.107 132.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"/>
        <path stroke="#2A2A32" stroke-linecap="round" stroke-width="0.5" d="m19.107 114.583 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"/>
        <!-- main box outline -->
        <path class="accent-path" stroke-width="0.5" d="M250.355 107.636a3.43 3.43 0 0 1 1.895 3.067v88.333a3.43 3.43 0 0 1-1.895 3.067l-111.972 55.985a13.71 13.71 0 0 1-12.266 0L14.145 202.103a3.43 3.43 0 0 1-1.895-3.067v-88.333c0-1.299.734-2.486 1.895-3.067l115.038-57.52a6.86 6.86 0 0 1 6.134 0z"/>
        <!-- top lid -->
        <g :filter="`url(#bsvg-filter)`">
            <path fill="#08090A" d="M250.355 66.493a3.43 3.43 0 0 1 1.895 3.067v9.476a3.43 3.43 0 0 1-1.895 3.067L136.85 138.855a10.29 10.29 0 0 1-9.2 0L14.145 82.103a3.43 3.43 0 0 1-1.895-3.067V69.56c0-1.299.734-2.486 1.895-3.067L129.183 8.974a6.86 6.86 0 0 1 6.134 0z"/>
            <path class="accent-path" stroke-width="0.5" d="M250.355 66.493a3.43 3.43 0 0 1 1.895 3.067v9.476a3.43 3.43 0 0 1-1.895 3.067L136.85 138.855a10.29 10.29 0 0 1-9.2 0L14.145 82.103a3.43 3.43 0 0 1-1.895-3.067V69.56c0-1.299.734-2.486 1.895-3.067L129.183 8.974a6.86 6.86 0 0 1 6.134 0z"/>
        </g>
        <!-- inner stripe -->
        <path stroke="#2A2A32" stroke-linecap="round" stroke-width="0.5" d="m19.107 71.726 108.543 54.272a10.29 10.29 0 0 0 9.2 0l108.543-54.272"/>
        <!-- pixel art character -->
        <g fill="#D4705A">
            <rect x="117" y="51" width="5"  height="5"/>
            <rect x="142" y="51" width="5"  height="5"/>
            <rect x="117" y="56" width="30" height="5"/>
            <rect x="112" y="61" width="40" height="20"/>
            <rect x="117" y="81" width="10" height="10"/>
            <rect x="137" y="81" width="10" height="10"/>
        </g>
        <rect fill="#1a0a06" x="117" y="61" width="5" height="5"/>
        <rect fill="#1a0a06" x="142" y="61" width="5" height="5"/>
        <!-- dashed guide lines -->
        <path stroke="#2A2A32" stroke-dasharray="1 3" stroke-linecap="round" d="M12.679 84.584v20.142M132.25 144.583v20.143M251.821 84.584v20.142"/>
        <defs>
            <filter :id="`bsvg-filter`" width="264.5" height="156.191" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix values="0 0 0 0 0.031 0 0 0 0 0.035 0 0 0 0 0.039 0 0 0 0.6 0"/>
                <feBlend in2="BackgroundImageFix" result="effect1"/>
                <feBlend in="SourceGraphic" in2="effect1" result="shape"/>
            </filter>
        </defs>
    </svg>
</template>

<script setup>
defineProps({
    width: { type: Number, default: 265 },
    height: { type: Number, default: 262 },
})
</script>

<style scoped>
.accent-path {
    stroke: var(--primary);
}

.box-svg {
    animation: float 4s ease-in-out infinite;
    filter: drop-shadow(0 0 30px rgba(var(--primary-rgb), 0.15));
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-8px); }
}
</style>
