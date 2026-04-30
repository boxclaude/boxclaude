<template>
    <nav class="navbar">
        <div class="nav-inner">
            <div class="nav-logo">
                <div class="logo-box">
                    <span class="star s1">✦</span>
                    <span class="star s2" style="top: calc(50% + 2px)">*</span>
                    <span class="star s3">✧</span>
                    <span class="star s4">✱</span>
                    <span class="star s5">✺</span>
                </div>
                <span>BoxClaude</span>
            </div>
            <a
                class="btn-install"
                href="https://marketplace.visualstudio.com/items?itemName=RockieYang.BoxClaude"
                target="_blank"
            >
                <i class="codicon codicon-extensions" />
                Install VSCode Extension for Free
            </a>
        </div>
    </nav>
</template>

<script setup>
</script>

<style>
nav.navbar {
    backdrop-filter: blur(12px);
    background: rgba(13, 13, 16, 0.85);
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 100;
}

.nav-inner {
    align-items: center;
    display: flex;
    height: 56px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1120px;
    /* padding: 0 32px; */
}

.nav-logo {
    align-items: center;
    display: flex;
    font-size: 15px;
    font-weight: 600;
    gap: 8px;
    letter-spacing: -0.01em;
}

.logo-box {
    border: 1px solid var(--primary);
    border-radius: 3px;
    height: 20px;
    position: relative;
    width: 20px;
}

.star {
    animation: star-seq 4s infinite;
    color: #d97757;
    font-size: 15px;
    left: 50%;
    line-height: 1;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) rotate(180deg) scale(0.3);
}

.s1 { animation-delay: 0s; }
.s2 { animation-delay: 0.8s; font-size: 17px; }
.s3 { animation-delay: 1.6s; }
.s4 { animation-delay: 2.4s; font-size: 12px; }
.s5 { animation-delay: 3.2s; font-size: 16px; }

@media (max-width: 800px) {
    .nav-inner {
        /* padding: 0 20px; */
    }
}

@keyframes star-seq {
    0%   { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
    10%  { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    20%  { opacity: 1; transform: translate(-50%, -50%) scale(1); }
    30%  { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
    100% { opacity: 0; transform: translate(-50%, -50%) scale(0.3); }
}
</style>
