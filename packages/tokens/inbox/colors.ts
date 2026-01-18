import fs from 'fs';
import tokens from './colors.json' with { type: 'json' };

let css = ':root {\n';

// Find the color tokens section (000 Color Tokens)
const colorTokens = tokens.find(section => section.name === '000 Color Tokens');
if (colorTokens && colorTokens.values[0]) {
    colorTokens.values[0].color.forEach(token => {
        css += `  --${token.name}: ${token.value};\n`;
    });
}

css += '}\n';

// Find the semantic tokens section (001 Semantic Tokens)
const semanticTokens = tokens.find(section => section.name === '001 Semantic Tokens');
if (semanticTokens) {
    // Light theme
    const lightMode = semanticTokens.values.find(v => v.mode.name === 'Light');
    if (lightMode) {
        css += ':root[data-theme="light"] {\n';
        lightMode.color.forEach(token => {
            css += `  --${token.name}: ${token.value};\n`;
        });
        css += '}\n';
    }

    // Dark theme
    const darkMode = semanticTokens.values.find(v => v.mode.name === 'Dark');
    if (darkMode) {
        css += ':root[data-theme="dark"] {\n';
        darkMode.color.forEach(token => {
            css += `  --${token.name}: ${token.value};\n`;
        });
        css += '}\n';
    }
}

fs.writeFileSync('./inbox/colors.css', css);
console.log('✓ Generated colors.css');