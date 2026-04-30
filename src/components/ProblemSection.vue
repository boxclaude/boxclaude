<template>
    <section id="problem">
        <div class="section-inner">
            <div class="section-header">
                <div class="section-label error" style="color: var(--red);">The Problem</div>
                <h2>Developers are losing control of Claude Code</h2>
				
                <p class="section-sub">Bill, climbing</p>
                <p class="section-sub">Architecture, getting messier</p>
                <p class="section-sub">New features in big projects, running in circles</p>
				<p class="section-sub">The codebase, growing like a snowball rolling downhill</p>
            </div>

            <Carousel :items="problems" :interval="5000" track-height="380px">
                <template #default="{ item }">
                    <div class="quote-card">
                        <div class="card-top">
                            <span class="badge">
                                <i class="codicon codicon-warning" />
                                {{ item.badge }}
                            </span>
                            <span class="quote-deco">"</span>
                        </div>
                        <!-- eslint-disable-next-line vue/no-v-html -->
                        <blockquote v-html="item.quote" />
                        <div class="quote-meta">
                            <div class="author">
                                <div class="avatar">{{ item.initials }}</div>
                                <div class="author-info">
                                    <strong>{{ item.name }}</strong>
                                    <span>{{ item.role }}</span>
                                </div>
                            </div>
                            <span class="source">{{ item.source }}</span>
                        </div>
                    </div>
                </template>
            </Carousel>
        </div>
    </section>
</template>

<script setup>
import Carousel from './Carousel.vue'
import { problems } from '../data/problems.js'
</script>

<style>
#problem {
    background: linear-gradient(to bottom, var(--bg), #080810 50%, var(--bg));
}



.quote-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 14px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
    max-width: 760px;
    overflow: hidden;
    padding: 36px 44px;
    position: relative;
    width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.quote-card::before {
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    content: '';
    height: 1px;
    left: 0;
    opacity: 0.4;
    position: absolute;
    right: 0;
    top: 0;
}

.card-top {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
}

.badge {
    align-items: center;
    background: var(--red-dim);
    border: 1px solid rgba(248, 113, 113, 0.18);
    border-radius: 4px;
    color: var(--red);
    display: inline-flex;
    font-size: 11px;
    font-weight: 600;
    gap: 5px;
    letter-spacing: 0.06em;
    padding: 3px 9px;
    text-transform: uppercase;
}

.quote-deco {
    color: var(--accent);
    font-family: Georgia, serif;
    font-size: 64px;
    line-height: 0.7;
    opacity: 0.2;
}

blockquote {
    color: var(--text);
    font-size: 18px;
    font-style: italic;
    line-height: 1.7;
    margin-bottom: 28px;
}

blockquote em {
    color: var(--red);
    font-style: normal;
}

.quote-meta {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: space-between;
}

.author {
    align-items: center;
    display: flex;
    gap: 10px;
}

.avatar {
    align-items: center;
    background: var(--accent-dim);
    border: 1px solid var(--accent-border);
    border-radius: 50%;
    color: var(--accent);
    display: flex;
    font-size: 13px;
    font-weight: 700;
    height: 36px;
    justify-content: center;
    width: 36px;
}

.author-info strong {
    display: block;
    font-size: 14px;
    font-weight: 600;
}

.author-info span {
    color: var(--text-muted);
    font-size: 12px;
}

.source {
    background: var(--bg-card-2);
    border: 1px solid var(--border);
    border-radius: 999px;
    color: var(--text-dim);
    font-size: 12px;
    padding: 4px 10px;
}

@media (max-width: 800px) {
    .quote-card {
        padding: 24px 20px;
    }
}

@media (max-width: 600px) {
    .quote-card {
        padding: 24px 20px;
    }
}
</style>
