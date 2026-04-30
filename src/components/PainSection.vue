<template>
    <section id="pain">
        <div class="section-inner pain-inner">
            <div class="pain-stack">
                <p class="pain-line">You didn't write this code — but now you own it.</p>
                <p class="pain-line indent-1">The same logic is duplicated across files.</p>
                <p class="pain-line indent-2">You're afraid to delete anything.</p>
                <p class="pain-line indent-3">Refactoring feels risky, so you avoid it.</p>
                <p class="pain-line indent-4">The mess keeps growing.</p>
            </div>
            <div class="pain-scenario">
                <p>You fix a bug in one file.</p>
                <p>Two days later — it appears again.</p>
                <p>Because another version of the same logic still exists.</p>
            </div>
        </div>
    </section>
</template>

<style>
#pain {
    padding: 80px 32px;
}

.pain-inner {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    gap: 48px;
    max-width: 680px;
}

.pain-stack {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.pain-line {
    color: var(--text);
    font-size: clamp(18px, 2.2vw, 24px);
    font-weight: 500;
    line-height: 1.4;
}

.indent-1 { padding-left: 20px; }
.indent-2 { padding-left: 40px; }
.indent-3 { padding-left: 60px; }
.indent-4 { padding-left: 80px; color: var(--text-muted); }

.pain-scenario {
    border-left: 3px solid var(--primary);
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 20px 24px;
    background: var(--bg-card);
    border-radius: 0 var(--radius) var(--radius) 0;
}

.pain-scenario p {
    color: var(--text-muted);
    font-size: 16px;
    font-style: italic;
    line-height: 1.6;
}

@media (max-width: 800px) {
    .indent-1 { padding-left: 12px; }
    .indent-2 { padding-left: 24px; }
    .indent-3 { padding-left: 36px; }
    .indent-4 { padding-left: 48px; }
}
</style>
