#!/bin/bash
# ════════════════════════════════════════════
# IRVSG — Descarga de fotos de stock (Pexels)
# Todas las fotos son CC0 - uso libre comercial
# ════════════════════════════════════════════

IMGDIR="$HOME/Projects/irvsg-website/assets/img"
mkdir -p "$IMGDIR"

echo "Descargando fotos de stock para IRVSG..."
echo ""

echo "Descargando foto 1: business team..."
curl -L "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" \
  -o "$IMGDIR/hero-team.jpg" --silent --show-error
echo "hero-team.jpg OK"

echo "Descargando foto 2: technology dashboard..."
curl -L "https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1200" \
  -o "$IMGDIR/tech-dashboard.jpg" --silent --show-error
echo "tech-dashboard.jpg OK"

echo "Descargando foto 3: small business..."
curl -L "https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1200" \
  -o "$IMGDIR/bakery-business.jpg" --silent --show-error
echo "bakery-business.jpg OK"

echo "Descargando foto 4: Houston TX..."
curl -L "https://images.pexels.com/photos/1146928/pexels-photo-1146928.jpeg?auto=compress&cs=tinysrgb&w=1200" \
  -o "$IMGDIR/houston-skyline.jpg" --silent --show-error
echo "houston-skyline.jpg OK"

echo ""
echo "Todas las fotos descargadas en: $IMGDIR/"
ls -lh "$IMGDIR/"*.jpg
