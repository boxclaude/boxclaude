#!/usr/bin/env python3
from PIL import Image
import os
from collections import deque

SCREENSHOTS_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'screenshots')


def color_dist(c1, c2):
    return sum(abs(int(a) - int(b)) for a, b in zip(c1[:3], c2[:3]))


def flood_fill_transparent(pixels, w, h, sx, sy, tolerance):
    seed = pixels[sx, sy][:3]
    visited = set()
    q = deque([(sx, sy)])
    while q:
        x, y = q.popleft()
        if (x, y) in visited:
            continue
        if not (0 <= x < w and 0 <= y < h):
            continue
        if color_dist(pixels[x, y][:3], seed) > tolerance:
            continue
        visited.add((x, y))
        pixels[x, y] = (0, 0, 0, 0)
        q.extend([(x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)])


def find_toolbar_height(pixels, w):
    # find bottommost traffic-light pixel (yellow/red/green) in top 200 rows
    bottom = 0
    for y in range(0, 200):
        for x in range(0, min(300, w)):
            r, g, b = pixels[x, y][:3]
            if r > 220 and g > 150 and b < 100:  # yellow
                bottom = max(bottom, y)
            if r > 200 and g < 120 and b < 120:  # red
                bottom = max(bottom, y)
    return bottom + 30 if bottom > 0 else 68


def process(path):
    img = Image.open(path).convert('RGBA')
    w, h = img.size
    pixels = img.load()

    toolbar_h = find_toolbar_height(pixels, w)

    # flood-fill transparent from corners where the corner pixel differs
    # significantly from the typical dark window content
    win_bg = (25, 26, 27)
    for cx, cy in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
        if color_dist(pixels[cx, cy][:3], win_bg) > 50:
            flood_fill_transparent(pixels, w, h, cx, cy, tolerance=50)

    cropped = img.crop((0, toolbar_h, w, h))
    cropped.save(path)
    print(f'  {os.path.basename(path)}: {w}x{h} -> {cropped.width}x{cropped.height} (toolbar={toolbar_h}px)')


if __name__ == '__main__':
    files = sorted(f for f in os.listdir(SCREENSHOTS_DIR) if f.endswith('.png'))
    print(f'Processing {len(files)} screenshots...')
    for fname in files:
        process(os.path.join(SCREENSHOTS_DIR, fname))
    print('Done.')
