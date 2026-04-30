<template>
    <section id="cta">
        <div class="section-inner">
            <BoxSvg :width="80" :height="78" />
            <h2>Stop inheriting the mess. Own the code.</h2>
            <p>BoxClaude scopes Claude to exactly what you're working on — nothing it didn't need to touch.</p>
            <a
                class="btn-install large"
                href="https://marketplace.visualstudio.com/items?itemName=RockieYang.BoxClaude"
                target="_blank"
            >
                <i class="codicon codicon-extensions" />
                Install BoxClaude — Free
            </a>
            <p class="note">Free · VSCode Extension</p>
        </div>
    </section>
</template>

<script setup>
import BoxSvg from './BoxSvg.vue'
</script>

<style>
#cta {
    background: radial-gradient(ellipse 60% 80% at 50% 100%, var(--accent-dim), transparent 70%);
    border-top: 1px solid var(--border);
    text-align: center;
}

#cta .section-inner {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

#cta h2 {
    font-size: clamp(28px, 4vw, 44px);
    font-weight: 700;
    letter-spacing: -0.025em;
    margin-top: 8px;
}

#cta p {
    color: var(--text-muted);
    font-size: 18px;
}

#cta .note {
    color: var(--text-dim);
    font-size: 13px;
    margin-top: -4px;
}
</style>
