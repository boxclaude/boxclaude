<template>
    <section id="features">
        <div class="section-inner">
            <div class="section-header">
                <div class="section-label">Features</div>
                <h2>Everything you need to stay in control</h2>
            </div>

            <div class="features-wrap">
                <div class="features-illustration">
                    <GridDots />
                    <BoxesCluster :width="280" :height="258" />
                </div>
                <div class="features-grid">
                    <div v-for="f in features" :key="f.icon" class="feature-card">
                        <i :class="`codicon codicon-${f.icon}`" class="feature-icon" />
                        <h4>{{ f.title }}</h4>
                        <p>{{ f.desc }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import BoxesCluster from './BoxesCluster.vue'
import GridDots from './GridDots.vue'

const features = [
    {
        icon: 'package',
        title: 'Box by folder or file',
        desc: 'Set your scope at any granularity — an entire module, a handful of files, or one single source file.',
    },
    {
        icon: 'type-hierarchy-sub',
        title: 'Dependency graph',
        desc: 'Visualize folder and file-level import relationships as an interactive graph. Pan, zoom, explore before you decide what Claude sees.',
    },
    {
        icon: 'list-flat',
        title: 'Call hierarchy',
        desc: 'Inspect function-level call chains within your codebase. Understand who calls what before Claude starts editing.',
    },
    {
        icon: 'sync-ignored',
        title: 'Cyclic dependency detection',
        desc: 'Cycles are highlighted in red using DFS coloring. Understand your architecture before Claude starts editing.',
    },
    {
        icon: 'lock',
        title: 'Private to your machine',
        desc: 'Scope saves to CLAUDE.local.md which is gitignored. Your working context never leaks to teammates or CI.',
    },
    {
        icon: 'list-tree',
        title: 'Context menu integration',
        desc: 'Right-click any file or folder in the VSCode Explorer. Add, remove, or reset your Box in one click.',
    }
    
]
</script>

<style>
#features {
    background: linear-gradient(to bottom, var(--bg), #080810);
    border-top: 1px solid var(--border);
}

.features-wrap {
    align-items: flex-start;
    display: grid;
    gap: 64px;
    grid-template-columns: 300px 1fr;
}

.features-illustration {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 12px;
    position: sticky;
    top: 80px;
}

.features-grid {
    background: var(--border);
    border: 1px solid var(--border);
    border-radius: 14px;
    display: grid;
    gap: 1px;
    grid-template-columns: repeat(2, 1fr);
    overflow: hidden;
}

.feature-card {
    background: var(--bg-card);
    min-height: 140px;
    padding: 28px;
    transition: background 0.2s;
}

.feature-card:hover {
    background: var(--bg-card-2);
}

.feature-icon {
    color: var(--accent);
    display: block;
    font-size: 22px;
    margin-bottom: 12px;
}

.feature-card h4 {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.01em;
    margin-bottom: 6px;
}

.feature-card p {
    color: var(--text-muted);
    font-size: 13px;
    line-height: 1.6;
}

@media (max-width: 800px) {
    .features-wrap {
        grid-template-columns: 1fr;
    }

    .features-illustration {
        display: none;
    }

    .features-grid {
        grid-template-columns: 1fr;
    }
}
</style>
