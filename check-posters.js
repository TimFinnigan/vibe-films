#!/usr/bin/env node

/**
 * Script to check all movie poster URLs and identify 404s
 * Run with: node check-posters.js
 */

const https = require('https');
const fs = require('fs');

// Read the script.js file
const scriptContent = fs.readFileSync('./script.js', 'utf8');

// Extract all poster URLs using regex
const posterRegex = /poster:\s*"(https:\/\/[^"]+)"/g;
const matches = [...scriptContent.matchAll(posterRegex)];

console.log(`Found ${matches.length} poster URLs to check...\n`);

// Track results
const results = {
    valid: [],
    invalid: [],
    total: 0
};

// Function to check if URL returns 200
function checkUrl(url, title) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            if (res.statusCode === 200) {
                results.valid.push({ url, title, status: res.statusCode });
                console.log(`✓ ${res.statusCode} - ${title || url}`);
            } else {
                results.invalid.push({ url, title, status: res.statusCode });
                console.log(`✗ ${res.statusCode} - ${title || url}`);
            }
            resolve();
        }).on('error', (err) => {
            results.invalid.push({ url, title, error: err.message });
            console.log(`✗ ERROR - ${title || url}: ${err.message}`);
            resolve();
        });
    });
}

// Extract movie titles for better logging
const movieRegex = /{\s*title:\s*"([^"]+)"[^}]*poster:\s*"(https:\/\/[^"]+)"/g;
const movieMatches = [...scriptContent.matchAll(movieRegex)];
const urlToTitle = {};
movieMatches.forEach(match => {
    urlToTitle[match[2]] = match[1];
});

// Check all URLs
async function checkAllUrls() {
    const uniqueUrls = [...new Set(matches.map(m => m[1]))];
    results.total = uniqueUrls.length;
    
    console.log('Checking poster URLs...\n');
    
    // Check URLs in batches to avoid overwhelming the server
    const batchSize = 10;
    for (let i = 0; i < uniqueUrls.length; i += batchSize) {
        const batch = uniqueUrls.slice(i, i + batchSize);
        await Promise.all(batch.map(url => checkUrl(url, urlToTitle[url])));
        
        // Small delay between batches
        if (i + batchSize < uniqueUrls.length) {
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
    
    // Print summary
    console.log('\n' + '='.repeat(60));
    console.log('SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total URLs checked: ${results.total}`);
    console.log(`Valid (200): ${results.valid.length}`);
    console.log(`Invalid/404: ${results.invalid.length}`);
    
    if (results.invalid.length > 0) {
        console.log('\n' + '='.repeat(60));
        console.log('INVALID POSTERS (to fix):');
        console.log('='.repeat(60));
        results.invalid.forEach(item => {
            console.log(`\nMovie: ${item.title || 'Unknown'}`);
            console.log(`URL: ${item.url}`);
            console.log(`Status: ${item.status || item.error}`);
        });
        
        // Write to file for easy reference
        fs.writeFileSync(
            './invalid-posters.json',
            JSON.stringify(results.invalid, null, 2)
        );
        console.log('\n✓ Invalid posters saved to invalid-posters.json');
    }
}

checkAllUrls().catch(console.error);
