#!/usr/bin/env node

/**
 * Script to remove all movies with 404 poster URLs from the database
 * Run with: node remove-404s.js
 */

const fs = require('fs');

// Read the invalid posters list
const invalidPosters = JSON.parse(fs.readFileSync('./invalid-posters.json', 'utf8'));
const invalidUrls = new Set(invalidPosters.map(p => p.url));

console.log(`Found ${invalidUrls.size} invalid poster URLs to remove\n`);

// Read the script.js file
let scriptContent = fs.readFileSync('./script.js', 'utf8');

// Extract movie database section
const dbStart = scriptContent.indexOf('const movieDatabase = {');
const dbEnd = scriptContent.indexOf('};', dbStart) + 2;
const dbSection = scriptContent.substring(dbStart, dbEnd);

// Parse and filter movies
let removedCount = 0;
const movieCategories = ['happy', 'sad', 'anxious', 'melancholic', 'energetic', 'nostalgic', 'contemplative', 'weird', 'cozy'];

// For each category, remove movies with 404 posters
movieCategories.forEach(category => {
    const categoryRegex = new RegExp(`${category}:\\s*\\[([\\s\\S]*?)\\](?=,\\s*\\w+:|\\s*})`);
    const match = dbSection.match(categoryRegex);
    
    if (match) {
        const moviesSection = match[1];
        
        // Extract all movie objects
        const movieRegex = /{\s*title:\s*"([^"]+)"[^}]*poster:\s*"([^"]*)"[^}]*}/g;
        const movies = [...moviesSection.matchAll(movieRegex)];
        
        movies.forEach(movieMatch => {
            const posterUrl = movieMatch[2];
            if (invalidUrls.has(posterUrl)) {
                const title = movieMatch[1];
                console.log(`Removing: ${title} (${category})`);
                removedCount++;
            }
        });
    }
});

// Now actually remove the movies
movieCategories.forEach(category => {
    const categoryRegex = new RegExp(`(${category}:\\s*\\[)([\\s\\S]*?)(\\](?=,\\s*\\w+:|\\s*}))`, 'g');
    
    scriptContent = scriptContent.replace(categoryRegex, (match, start, moviesSection, end) => {
        // Split movies and filter out 404s
        const movieRegex = /({\s*title:\s*"[^"]+"\s*,\s*year:\s*\d+\s*,\s*director:\s*"[^"]+"\s*,\s*poster:\s*"[^"]*"\s*,\s*description:\s*"[^"]+"\s*})/g;
        const movies = [...moviesSection.matchAll(movieRegex)];
        
        const validMovies = movies.filter(movieMatch => {
            const posterMatch = movieMatch[0].match(/poster:\s*"([^"]*)"/);
            const posterUrl = posterMatch ? posterMatch[1] : '';
            return !invalidUrls.has(posterUrl);
        });
        
        // Reconstruct the category section
        const moviesStr = validMovies.map((m, idx) => {
            const comma = idx < validMovies.length - 1 ? ',' : '';
            return `        ${m[0]}${comma}`;
        }).join('\n');
        
        return `${start}\n${moviesStr}\n    ${end}`;
    });
});

// Write the updated file
fs.writeFileSync('./script.js', scriptContent, 'utf8');

console.log(`\n✓ Removed ${removedCount} movies with 404 posters`);
console.log('✓ Updated script.js saved');
