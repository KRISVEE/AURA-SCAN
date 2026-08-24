# AURA-SCAN

An experimental AI-powered facial analysis web application that combines computer vision, Gemini-based image analysis, and a custom scoring system to generate a visual biometric profile.

## Overview

AURA-SCAN is a browser-based application designed to analyze a user's facial image and generate an interactive visual profile.

The application combines:

- AI-based image analysis using Google Gemini
- Browser-side face detection using TensorFlow.js and BlazeFace
- Custom facial and skin-related metrics
- Image quality evaluation
- Aesthetic scoring
- Interactive radar visualization
- Personalized visual feedback
- Responsive glassmorphism-based interface

> AURA-SCAN is an experimental software project and is not intended to provide medical diagnosis or professional dermatological advice.

## How It Works

```text
User Image
    │
    ▼
Browser Image Processing
    │
    ├──────────────► Face Detection
    │                 TensorFlow.js + BlazeFace
    │
    ▼
Image Resizing
    │
    ▼
Backend API
    │
    ▼
Google Gemini Vision Analysis
    │
    ▼
Structured Analysis Data
    │
    ▼
Custom Scoring Engine
    │
    ├── Symmetry
    ├── Facial Ratios
    ├── Skin Clarity
    ├── Skin Texture
    ├── Feature Definition
    └── Vitality
    │
    ▼
Technical Quality Adjustment
    │
    ├── Blur
    └── Lighting
    │
    ▼
Final Biometric Index
    │
    ▼
Interactive Result Dashboard
