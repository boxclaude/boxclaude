<template>
    <section id="before-after">
        <div class="section-inner">
            <div class="section-header">
                <h2>What changes</h2>
            </div>
            <div class="ba-grid">
                <div class="ba-card before">
                    <div class="ba-label">Before</div>
                    <ul>
                        <li>Same function copied in multiple files</li>
                        <li>No clear source of truth</li>
                        <li>Fear of breaking things</li>
                    </ul>
                </div>
                <div class="ba-card after">
                    <div class="ba-label">After</div>
                    <ul>
                        <li>One clean reusable function</li>
                        <li>Clear ownership</li>
                        <li>Safe to modify</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
#before-after {
    padding: 80px 32px;
}

.ba-grid {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 48px;
}

.ba-card {
    border-radius: var(--radius);
    border: 1px solid var(--border);
    padding: 32px 28px;
}

.ba-card.before {
    background: var(--red-dim);
    border-color: rgba(248, 113, 113, 0.18);
}

.ba-card.after {
    background: var(--accent-dim);
    border-color: var(--accent-border);
}

.ba-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    margin-bottom: 20px;
    text-transform: uppercase;
}

.before .ba-label { color: var(--red); }
.after .ba-label  { color: var(--accent); }

.ba-card ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    list-style: none;
}

.ba-card li {
    color: var(--text);
    font-size: 15px;
    line-height: 1.5;
    padding-left: 18px;
    position: relative;
}

.before li::before {
    color: var(--red);
    content: '✕';
    font-size: 11px;
    left: 0;
    position: absolute;
    top: 3px;
}

.after li::before {
    color: var(--accent);
    content: '✓';
    font-size: 11px;
    left: 0;
    position: absolute;
    top: 3px;
}

@media (max-width: 800px) {
    .ba-grid {
        grid-template-columns: 1fr;
    }
}
</style>
