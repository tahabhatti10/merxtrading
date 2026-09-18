// Main JavaScript Entry Point for Vite
import '../merx-layout-fixes.css';
import '../merx-layout-fixes.js';
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Vercel Speed Insights
injectSpeedInsights();

console.log('Merx Trading Vite App Initialized');
