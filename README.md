# 🚆 AI-Powered Railway Block Planner

An AI-assisted railway maintenance block planning platform designed to help railway operations teams plan maintenance blocks while considering asset availability, train schedules, maintenance priorities, timetable constraints, and operational conflicts.

## 📌 Project Overview

The AI-Powered Railway Block Planner combines a React-based frontend with a Python backend, AI modules, and an optimization engine.

### Main capabilities

- Asset management
- Maintenance request management
- Train and timetable management
- Block planning
- Conflict detection
- Simulation
- AI-based risk scoring
- Maintenance duration prediction
- Compatibility analysis
- Block optimization
- Admin and user authentication
- Role-based dashboards

## 🎯 Problem Statement

Railway maintenance activities require carefully planned traffic blocks. Manual planning can make it difficult to balance maintenance requirements with train schedules, corridor availability, asset priorities, and operational constraints.

This project aims to support AI-assisted automatic block planning by analyzing maintenance and operational information and generating suitable maintenance block plans.

## 🧠 AI Components

### Risk Scoring

Analyzes maintenance and asset-related information to assign priorities to maintenance requirements.

### Duration Prediction

Estimates the expected duration of maintenance activities to support more realistic block planning.

### Compatibility Analysis

Checks whether proposed maintenance blocks are compatible with train schedules and operational requirements.

### Block Optimization

Generates optimized maintenance block plans using maintenance priorities and operational constraints.

## 🏗️ System Architecture

```text
┌──────────────────────────────┐
│        React + Vite          │
│          Frontend            │
└──────────────┬───────────────┘
               │ REST API
               ▼
┌──────────────────────────────┐
│       Python Backend         │
│      API / Business Logic    │
└──────────────┬───────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌──────────────┐  ┌───────────────┐
│ AI Modules   │  │ Optimization  │
│ Risk Score   │  │ Block Planner │
│ Duration     │  │ Conflicts     │
│ Compatibility│  │ Simulation    │
└──────────────┘  └───────────────┘
