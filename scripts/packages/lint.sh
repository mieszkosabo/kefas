#!/usr/bin/env bash
echo "┏━━━ 🕵️‍♀️ LINT: eslint src --ext ts,js,tsx,jsx ━━━━━━━"
yarn eslint src --ext ts,js,tsx,jsx
yarn eslint tests --ext ts,js,tsx,jsx
