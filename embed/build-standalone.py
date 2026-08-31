#!/usr/bin/env python3
"""
Build embed/hp-petrochemicals-standalone.html

A single, fully self-contained HTML file: the embeddable block wrapped in a
complete document, with every image from assets/ inlined as a data: URI.
No external files, no server, no fetch() - double-click it and it runs
(Google Fonts still needs internet; there is a system-font fallback).

    python3 embed/build-standalone.py
"""
import base64
import mimetypes
import pathlib
import re

HERE = pathlib.Path(__file__).parent
FRAGMENT = HERE / "hp-petrochemicals.html"
ASSETS = HERE / "assets"
OUT = HERE / "hp-petrochemicals-standalone.html"

html = FRAGMENT.read_text(encoding="utf-8")


def data_uri(filename: str) -> str:
    path = ASSETS / filename
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    b64 = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{b64}"


def inline(match: re.Match) -> str:
    attr, filename = match.group(1), match.group(2)
    return f'{attr}="{data_uri(filename)}"'


# src="assets/foo.jpg"  ->  src="data:image/jpeg;base64,..."
html = re.sub(r'(src)="assets/([^"]+)"', inline, html)

missing = re.findall(r'(?:src|href)="assets/[^"]+"', html)
if missing:
    raise SystemExit(f"Un-inlined asset refs left in output: {missing}")

doc = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>HP Petrochemicals - HP Durapol</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<style>html,body{{margin:0;background:#fff}}</style>
</head>
<body>
{html}
</body>
</html>
"""

OUT.write_text(doc, encoding="utf-8")
kb = OUT.stat().st_size / 1024
print(f"wrote {OUT.relative_to(HERE.parent)}  ({kb:.0f} KB)")
