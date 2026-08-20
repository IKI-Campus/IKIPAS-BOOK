import fs from 'fs';
import path from 'path';

// Generate SVG for logo-ikipas
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <linearGradient id="gradFire" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ff4500" />
      <stop offset="50%" stop-color="#ff7b00" />
      <stop offset="100%" stop-color="#ffb703" />
    </linearGradient>
    <linearGradient id="gradWater" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00b4d8" />
      <stop offset="50%" stop-color="#0077b6" />
      <stop offset="100%" stop-color="#023e8a" />
    </linearGradient>
    <linearGradient id="gradEarth" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#70e000" />
      <stop offset="50%" stop-color="#38b000" />
      <stop offset="100%" stop-color="#007200" />
    </linearGradient>
    <linearGradient id="gradSpirit" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#c77dff" />
      <stop offset="50%" stop-color="#9d4edd" />
      <stop offset="100%" stop-color="#5a189a" />
    </linearGradient>
    <linearGradient id="gradGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffe066" />
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000" flood-opacity="0.15" />
    </filter>
  </defs>

  <rect width="800" height="800" fill="#ffffff" rx="40" />

  <!-- Outer Circle Mandala -->
  <g transform="translate(400, 320)" filter="url(#shadow)">
    <!-- Main outer circle -->
    <circle r="240" fill="#1e293b" />
    
    <!-- Quadrant 1: Fire (Top/Orange) -->
    <path d="M 0 0 L 0 -235 A 235 235 0 0 1 235 0 Z" fill="url(#gradFire)" />
    <!-- Fire Elements -->
    <path d="M 90 -160 Q 110 -110 70 -90 Q 130 -100 110 -50 Q 80 -70 50 -60 Q 60 -110 90 -160 Z" fill="#ffffff" opacity="0.9" />
    <circle cx="150" cy="-140" r="28" fill="#ffd166" opacity="0.85" />
    <path d="M 150 -180 L 150 -100 M 110 -140 L 190 -140 M 122 -168 L 178 -112 M 122 -112 L 178 -168" stroke="#ffffff" stroke-width="4" opacity="0.8" />

    <!-- Quadrant 2: Water (Right/Blue) -->
    <path d="M 0 0 L 235 0 A 235 235 0 0 1 0 235 Z" fill="url(#gradWater)" />
    <!-- Waves and Fuji -->
    <path d="M 40 180 Q 90 120 140 170 Q 180 130 220 170 L 220 220 L 40 220 Z" fill="#ffffff" opacity="0.25" />
    <path d="M 130 180 L 165 110 L 200 180 Z" fill="#ffffff" opacity="0.9" />
    <path d="M 150 140 L 165 110 L 180 140 Q 165 150 150 140 Z" fill="#0077b6" />
    <!-- Wave crests -->
    <path d="M 60 50 Q 100 20 130 60 Q 160 30 190 70" fill="none" stroke="#ffffff" stroke-width="6" stroke-linecap="round" opacity="0.85" />
    <path d="M 80 85 Q 120 55 150 95" fill="none" stroke="#ffffff" stroke-width="5" stroke-linecap="round" opacity="0.7" />

    <!-- Quadrant 3: Spirit / Wisdom (Bottom/Purple) -->
    <path d="M 0 0 L 0 235 A 235 235 0 0 1 -235 0 Z" fill="url(#gradSpirit)" />
    <!-- Floral / Mandala petals -->
    <path d="M -90 60 C -120 90 -140 140 -120 180 C -80 170 -60 120 -90 60 Z" fill="#ffffff" opacity="0.8" />
    <path d="M -50 110 C -80 140 -80 190 -50 210 C -20 180 -20 140 -50 110 Z" fill="#ffffff" opacity="0.6" />
    <circle cx="-130" cy="90" r="14" fill="#ffffff" opacity="0.8" />
    <circle cx="-160" cy="130" r="10" fill="#ffffff" opacity="0.6" />

    <!-- Quadrant 4: Earth / Nature (Left/Green) -->
    <path d="M 0 0 L -235 0 A 235 235 0 0 1 0 -235 Z" fill="url(#gradEarth)" />
    <!-- Branch & Sakura Blossoms -->
    <path d="M -40 -40 Q -100 -100 -170 -130" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" opacity="0.85" />
    <circle cx="-120" cy="-140" r="16" fill="#ffffff" opacity="0.9" />
    <circle cx="-120" cy="-140" r="6" fill="#ffd166" />
    <circle cx="-160" cy="-100" r="14" fill="#ffffff" opacity="0.9" />
    <circle cx="-160" cy="-100" r="5" fill="#ffd166" />
    <circle cx="-80" cy="-90" r="15" fill="#ffffff" opacity="0.9" />
    <circle cx="-80" cy="-90" r="5" fill="#ffd166" />
    <path d="M -150 -160 Q -170 -190 -130 -180 Z" fill="#ffffff" opacity="0.75" />

    <!-- Central Gold Sacred Emblem -->
    <circle r="85" fill="#ffffff" />
    <circle r="78" fill="url(#gradGold)" />
    <circle r="68" fill="#ffffff" />
    <!-- 4-petal central rosette -->
    <path d="M 0 -60 C 25 -30 25 30 0 60 C -25 30 -25 -30 0 -60 Z" fill="url(#gradGold)" />
    <path d="M -60 0 C -30 25 30 25 60 0 C 30 -25 -30 -25 -60 0 Z" fill="url(#gradGold)" />
    <circle r="34" fill="#ffffff" />
    <circle r="26" fill="url(#gradGold)" />
    <!-- Triquetra / Mitsudomoe center -->
    <circle cx="0" cy="-8" r="7" fill="#ffffff" />
    <circle cx="-7" cy="5" r="7" fill="#ffffff" />
    <circle cx="7" cy="5" r="7" fill="#ffffff" />
  </g>

  <!-- Brand Typography -->
  <g transform="translate(400, 650)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, Montserrat, sans-serif" font-size="88" font-weight="900" letter-spacing="4">
      <tspan fill="#0f2b5c">I</tspan>
      <tspan fill="#0f2b5c">K</tspan>
      <tspan fill="#7c3aed">I</tspan>
      <tspan fill="#e11d48">P</tspan>
      <tspan fill="#ea580c">A</tspan>
      <tspan fill="#16a34a">S</tspan>
    </text>
  </g>

  <!-- Slogan Divider -->
  <line x1="180" y1="695" x2="620" y2="695" stroke="#cbd5e1" stroke-width="2.5" />

  <!-- Slogan -->
  <g transform="translate(400, 735)" text-anchor="middle">
    <text font-family="system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" font-size="24" font-weight="800" fill="#1e293b" letter-spacing="6">
      LE PREMIER PAS VERS VOTRE PASSION
    </text>
  </g>
</svg>`;

// Generate Math book SVG
const mathSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 900" width="100%" height="100%">
  <defs>
    <linearGradient id="bgM" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f1f5f9" />
    </linearGradient>
    <linearGradient id="ribbon1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6d28d9" />
      <stop offset="100%" stop-color="#9333ea" />
    </linearGradient>
    <linearGradient id="ribbon2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ea580c" />
      <stop offset="100%" stop-color="#f97316" />
    </linearGradient>
    <linearGradient id="ribbon3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
  </defs>

  <rect width="600" height="900" fill="url(#bgM)" stroke="#cbd5e1" stroke-width="4" rx="16" />
  
  <!-- Mini Logo -->
  <circle cx="300" cy="90" r="45" fill="#f8fafc" stroke="#e2e8f0" stroke-width="3" />
  <circle cx="300" cy="90" r="38" fill="#2563eb" opacity="0.15" />
  <text x="300" y="98" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#2563eb" text-anchor="middle">IKIPAS</text>

  <!-- Titles -->
  <text x="300" y="195" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#581c87" text-anchor="middle">Mathématiques:</text>
  <text x="300" y="245" font-family="system-ui, sans-serif" font-size="36" font-weight="900" fill="#ea580c" text-anchor="middle">Préparation au Bac</text>
  <text x="300" y="290" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Par IKIPAS</text>

  <!-- Math Graph & Formulas -->
  <g transform="translate(300, 480)" text-anchor="middle">
    <!-- Axes -->
    <line x1="-160" y1="0" x2="160" y2="0" stroke="#0284c7" stroke-width="3" />
    <line x1="0" y1="-140" x2="0" y2="120" stroke="#0284c7" stroke-width="3" />
    <!-- Parabola Curve -->
    <path d="M -130 -120 Q 0 100 130 -120" fill="none" stroke="#2563eb" stroke-width="4" />
    <!-- Trig circle -->
    <circle cx="-160" cy="80" r="50" fill="none" stroke="#7c3aed" stroke-width="2.5" />
    <line x1="-160" y1="30" x2="-160" y2="130" stroke="#7c3aed" stroke-width="1.5" />
    <line x1="-210" y1="80" x2="-110" y2="80" stroke="#7c3aed" stroke-width="1.5" />
    <line x1="-160" y1="80" x2="-120" y2="50" stroke="#ea580c" stroke-width="2.5" />

    <!-- Math symbols -->
    <text x="-210" y="-80" font-family="serif" font-size="38" font-weight="bold" fill="#0284c7">∑</text>
    <text x="-210" y="0" font-family="serif" font-size="38" font-weight="bold" fill="#ea580c">∫ f(x)</text>
    <text x="180" y="-80" font-family="monospace" font-size="18" font-weight="bold" fill="#dc2626">x = -b±√Δ / 2a</text>
    <text x="170" y="20" font-family="monospace" font-size="16" font-weight="bold" fill="#475569">det(A) ≠ 0</text>
    <text x="0" y="140" font-family="serif" font-size="32" font-weight="bold" fill="#7c3aed">∑∞  ∫Δ  lim f(x)</text>
  </g>

  <!-- Bottom Ribbons -->
  <g transform="translate(30, 710)">
    <rect width="540" height="42" fill="url(#ribbon1)" rx="8" />
    <text x="270" y="27" font-family="system-ui, sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">SYLLABUS COMPLET</text>
  </g>
  <g transform="translate(30, 762)">
    <rect width="540" height="42" fill="url(#ribbon2)" rx="8" />
    <text x="270" y="27" font-family="system-ui, sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">THÉORIE &amp; EXERCICES</text>
  </g>
  <g transform="translate(30, 814)">
    <rect width="540" height="42" fill="url(#ribbon3)" rx="8" />
    <text x="270" y="27" font-family="system-ui, sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">SUJETS DE BAC</text>
  </g>
</svg>`;

// Generate Physics book SVG
const physicsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 900" width="100%" height="100%">
  <defs>
    <linearGradient id="bgP" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f8fafc" />
    </linearGradient>
    <linearGradient id="ribbonP1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ea580c" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="ribbonP2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7c3aed" />
      <stop offset="100%" stop-color="#9333ea" />
    </linearGradient>
    <linearGradient id="ribbonP3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#dc2626" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
  </defs>

  <rect width="600" height="900" fill="url(#bgP)" stroke="#cbd5e1" stroke-width="4" rx="16" />
  
  <!-- Mini Logo -->
  <circle cx="300" cy="90" r="45" fill="#f8fafc" stroke="#e2e8f0" stroke-width="3" />
  <circle cx="300" cy="90" r="38" fill="#ea580c" opacity="0.15" />
  <text x="300" y="98" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#ea580c" text-anchor="middle">IKIPAS</text>

  <!-- Titles -->
  <text x="300" y="195" font-family="system-ui, sans-serif" font-size="34" font-weight="900" fill="#581c87" text-anchor="middle">Physique-Chimie:</text>
  <text x="300" y="245" font-family="system-ui, sans-serif" font-size="36" font-weight="900" fill="#ea580c" text-anchor="middle">Préparation au Bac</text>
  <text x="300" y="290" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Par IKIPAS</text>

  <!-- Physics & Chemistry Graphics -->
  <g transform="translate(300, 480)" text-anchor="middle">
    <!-- Atom in center -->
    <ellipse cx="0" cy="0" rx="90" ry="35" fill="none" stroke="#0284c7" stroke-width="3" transform="rotate(30)" />
    <ellipse cx="0" cy="0" rx="90" ry="35" fill="none" stroke="#7c3aed" stroke-width="3" transform="rotate(-30)" />
    <ellipse cx="0" cy="0" rx="90" ry="35" fill="none" stroke="#16a34a" stroke-width="3" transform="rotate(90)" />
    <!-- Nucleus -->
    <circle cx="0" cy="0" r="16" fill="#ea580c" />
    <circle cx="-5" cy="-5" r="7" fill="#dc2626" />
    <circle cx="6" cy="5" r="6" fill="#f59e0b" />
    <!-- Electrons -->
    <circle cx="70" cy="-40" r="6" fill="#0284c7" />
    <circle cx="-60" cy="50" r="6" fill="#7c3aed" />
    <circle cx="0" cy="85" r="6" fill="#16a34a" />

    <!-- Prism left -->
    <polygon points="-220,10 -160,-70 -140,10" fill="#e2e8f0" stroke="#64748b" stroke-width="2" />
    <line x1="-250" y1="-30" x2="-180" y2="-30" stroke="#f59e0b" stroke-width="3" />
    <!-- Rainbow output -->
    <line x1="-150" y1="-30" x2="-100" y2="-60" stroke="#dc2626" stroke-width="2" />
    <line x1="-150" y1="-30" x2="-100" y2="-45" stroke="#16a34a" stroke-width="2" />
    <line x1="-150" y1="-30" x2="-100" y2="-30" stroke="#0284c7" stroke-width="2" />
    <line x1="-150" y1="-30" x2="-100" y2="-15" stroke="#7c3aed" stroke-width="2" />

    <!-- Formulas -->
    <text x="-180" y="80" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#0284c7">E = mc²</text>
    <text x="180" y="-40" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#16a34a">V = I·R</text>
    <text x="180" y="30" font-family="system-ui, sans-serif" font-size="26" font-weight="900" fill="#7c3aed">PV = nRT</text>
    <text x="0" y="145" font-family="system-ui, sans-serif" font-size="24" font-weight="900" fill="#ea580c">λ = h / p  |  pH = -log[H3O+]</text>
  </g>

  <!-- Bottom Ribbons -->
  <g transform="translate(30, 710)">
    <rect width="540" height="42" fill="url(#ribbonP1)" rx="8" />
    <text x="270" y="27" font-family="system-ui, sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">SYLLABUS COMPLET</text>
  </g>
  <g transform="translate(30, 762)">
    <rect width="540" height="42" fill="url(#ribbonP2)" rx="8" />
    <text x="270" y="27" font-family="system-ui, sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">THÉORIE &amp; EXERCICES</text>
  </g>
  <g transform="translate(30, 814)">
    <rect width="540" height="42" fill="url(#ribbonP3)" rx="8" />
    <text x="270" y="27" font-family="system-ui, sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">SUJETS DE BAC PHYSIQUE</text>
  </g>
</svg>`;

// Generate SVT book SVG
const svtSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 900" width="100%" height="100%">
  <defs>
    <linearGradient id="bgS" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f0fdf4" />
    </linearGradient>
    <linearGradient id="ribbonS1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#16a34a" />
      <stop offset="100%" stop-color="#22c55e" />
    </linearGradient>
    <linearGradient id="ribbonS2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <linearGradient id="ribbonS3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6d28d9" />
      <stop offset="100%" stop-color="#ea580c" />
    </linearGradient>
  </defs>

  <rect width="600" height="900" fill="url(#bgS)" stroke="#cbd5e1" stroke-width="4" rx="16" />
  
  <!-- Mini Logo -->
  <circle cx="300" cy="90" r="45" fill="#f8fafc" stroke="#e2e8f0" stroke-width="3" />
  <circle cx="300" cy="90" r="38" fill="#16a34a" opacity="0.15" />
  <text x="300" y="98" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#16a34a" text-anchor="middle">IKIPAS</text>

  <!-- Titles -->
  <text x="300" y="195" font-family="system-ui, sans-serif" font-size="38" font-weight="900" fill="#581c87" text-anchor="middle">SVT:</text>
  <text x="300" y="245" font-family="system-ui, sans-serif" font-size="36" font-weight="900" fill="#ea580c" text-anchor="middle">Préparation au Bac</text>
  <text x="300" y="290" font-family="system-ui, sans-serif" font-size="20" font-weight="700" fill="#334155" text-anchor="middle">Par IKIPAS</text>

  <!-- SVT Graphics: DNA, Cell, Geology -->
  <g transform="translate(300, 480)">
    <!-- DNA Strand Left -->
    <g transform="translate(-180, -50)">
      <path d="M 0 -80 Q 20 -40 0 0 Q -20 40 0 80 Q 20 120 0 160" fill="none" stroke="#0284c7" stroke-width="4" />
      <path d="M 30 -80 Q 10 -40 30 0 Q 50 40 30 80 Q 10 120 30 160" fill="none" stroke="#ea580c" stroke-width="4" />
      <line x1="5" y1="-60" x2="25" y2="-60" stroke="#16a34a" stroke-width="3" />
      <line x1="0" y1="-20" x2="30" y2="-20" stroke="#7c3aed" stroke-width="3" />
      <line x1="-5" y1="20" x2="35" y2="20" stroke="#0284c7" stroke-width="3" />
      <line x1="0" y1="60" x2="30" y2="60" stroke="#f59e0b" stroke-width="3" />
      <line x1="10" y1="100" x2="20" y2="100" stroke="#16a34a" stroke-width="3" />
    </g>

    <!-- Biological Cell in Center -->
    <g transform="translate(0, 0)">
      <ellipse cx="0" cy="0" rx="75" ry="60" fill="#dcfce7" stroke="#16a34a" stroke-width="4" />
      <ellipse cx="0" cy="0" rx="35" ry="30" fill="#c084fc" stroke="#7c3aed" stroke-width="3" />
      <circle cx="-5" cy="-5" r="14" fill="#6b21a8" />
      <ellipse cx="40" cy="-25" rx="14" ry="7" fill="#4ade80" stroke="#15803d" stroke-width="2" />
      <ellipse cx="-40" cy="25" rx="14" ry="7" fill="#fb923c" stroke="#c2410c" stroke-width="2" />
      <circle cx="20" cy="30" r="5" fill="#38bdf8" />
      <circle cx="-30" cy="-25" r="5" fill="#38bdf8" />
    </g>

    <!-- Earth / Geology Right -->
    <g transform="translate(160, 0)">
      <!-- Earth slice -->
      <circle cx="0" cy="0" r="50" fill="#0284c7" />
      <path d="M 0 -50 A 50 50 0 0 1 50 0 L 0 0 Z" fill="#ea580c" />
      <path d="M 0 -50 A 50 50 0 0 1 0 0 Z" fill="#eab308" />
      <circle cx="0" cy="0" r="18" fill="#facc15" />
      <!-- Wave -->
      <path d="M -40 70 Q -10 50 10 70 Q 30 50 50 70" fill="none" stroke="#0284c7" stroke-width="4" />
    </g>
  </g>

  <!-- Bottom Ribbons -->
  <g transform="translate(30, 710)">
    <rect width="540" height="42" fill="url(#ribbonS1)" rx="8" />
    <text x="270" y="27" font-family="system-ui, sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">SYLLABUS COMPLET</text>
  </g>
  <g transform="translate(30, 762)">
    <rect width="540" height="42" fill="url(#ribbonS2)" rx="8" />
    <text x="270" y="27" font-family="system-ui, sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">THÉORIE &amp; EXERCICES</text>
  </g>
  <g transform="translate(30, 814)">
    <rect width="540" height="42" fill="url(#ribbonS3)" rx="8" />
    <text x="270" y="27" font-family="system-ui, sans-serif" font-size="19" font-weight="900" fill="#ffffff" text-anchor="middle" letter-spacing="2">SUJETS DE BAC SVT</text>
  </g>
</svg>`;

// Generate Team Avatar SVG templates
function generateAvatarSvg(name, role, bgGrad1, bgGrad2, initial) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="100%" height="100%">
    <defs>
      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgGrad1}" />
        <stop offset="100%" stop-color="${bgGrad2}" />
      </linearGradient>
    </defs>
    <rect width="600" height="600" fill="url(#avatarGrad)" />
    <!-- Background subtle circles -->
    <circle cx="300" cy="200" r="180" fill="#ffffff" opacity="0.08" />
    <circle cx="300" cy="550" r="260" fill="#ffffff" opacity="0.12" />
    
    <!-- Stylized Head & Shoulders Silhouette -->
    <circle cx="300" cy="230" r="95" fill="#ffffff" opacity="0.9" />
    <path d="M 120 540 C 120 400 200 370 300 370 C 400 370 480 400 480 540 Z" fill="#ffffff" opacity="0.9" />
    
    <!-- Center Initial/Badge -->
    <circle cx="300" cy="230" r="60" fill="${bgGrad1}" />
    <text x="300" y="252" font-family="system-ui, sans-serif" font-size="64" font-weight="900" fill="#ffffff" text-anchor="middle">${initial}</text>
    
    <!-- Text Badge -->
    <rect x="100" y="500" width="400" height="60" rx="30" fill="#ffffff" />
    <text x="300" y="538" font-family="system-ui, sans-serif" font-size="26" font-weight="800" fill="#1e293b" text-anchor="middle">${name}</text>
  </svg>`;
}

const samirSvg = generateAvatarSvg('أستاذ سمير', 'دكتوراه في التوجيه', '#1e3a8a', '#3b82f6', 'س');
const mehdiSvg = generateAvatarSvg('المهدي', 'عضو فريق IKIPAS', '#0f766e', '#14b8a6', 'م');
const saadSvg = generateAvatarSvg('سعد', 'عضو فريق IKIPAS', '#701a75', '#a855f7', 'س');

// Save files into root, images/, and public/
const files = [
  { path: 'logo-ikipas.jpg', content: logoSvg },
  { path: 'public/logo-ikipas.jpg', content: logoSvg },
  { path: 'mehdi-photo.jpg', content: mehdiSvg },
  { path: 'images/mathematiques.jpg', content: mathSvg },
  { path: 'public/images/mathematiques.jpg', content: mathSvg },
  { path: 'images/physique-chimie.jpg', content: physicsSvg },
  { path: 'public/images/physique-chimie.jpg', content: physicsSvg },
  { path: 'images/svt.jpg', content: svtSvg },
  { path: 'public/images/svt.jpg', content: svtSvg },
  { path: 'images/samir.jpg', content: samirSvg },
  { path: 'public/images/samir.jpg', content: samirSvg },
  { path: 'images/mehdi.jpg', content: mehdiSvg },
  { path: 'public/images/mehdi.jpg', content: mehdiSvg },
  { path: 'images/saad.jpg', content: saadSvg },
  { path: 'public/images/saad.jpg', content: saadSvg }
];

for (const file of files) {
  const dir = path.dirname(file.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(file.path, file.content, 'utf8');
}

console.log('Successfully written all image fallbacks and vector assets!');
