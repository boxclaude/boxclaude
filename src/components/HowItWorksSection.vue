<template>
    <section id="how-it-works">
        <div class="section-inner">
            <div class="section-header">
                <div class="section-label">How it works</div>
                <h2>BoxClaude maps your codebase before Claude touches it</h2>
            </div>
            <div class="steps-grid">
                <div class="step" v-for="(step, i) in steps" :key="i">
                    <span class="step-num">{{ i + 1 }}</span>
                    <div class="step-body">
                        <strong>{{ step.title }}</strong>
                        <p>{{ step.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const steps = [
    {
        title: 'Scan your codebase',
        desc: 'Reads every file and its imports to build a complete dependency map.',
    },
    {
        title: 'Detect duplicated logic',
        desc: 'Flags functions with the same shape appearing across multiple files.',
    },
    {
        title: 'Show where inconsistencies exist',
        desc: 'Highlights divergent versions side by side so you can see what drifted.',
    },
    {
        title: 'Scope Claude to the clean version',
        desc: 'Pins Claude to the canonical file — it sees one version, not four.',
    },
]
</script>

<style>
#how-it-works {
    padding: 80px 32px;
    background: var(--bg-card);
}

.steps-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 48px;
}

.step {
    align-items: flex-start;
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    display: flex;
    gap: 20px;
    padding: 28px 24px;
}

.step-num {
    color: var(--primary);
    flex-shrink: 0;
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    opacity: 0.5;
}

.step-body strong {
    color: var(--text);
    display: block;
    font-size: 16px;
    margin-bottom: 8px;
}

.step-body p {
    color: var(--text-muted);
    font-size: 14px;
    line-height: 1.6;
}

@media (max-width: 800px) {
    .steps-grid {
        grid-template-columns: 1fr;
    }
}
</style>
