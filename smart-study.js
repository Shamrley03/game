#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting Study Smart Application...\n');

// Check if node_modules exists
const nodeModulesPath = path.join(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
    console.log('📦 Installing dependencies...');
    
    const npm = spawn('npm', ['install'], {
        stdio: 'inherit',
        shell: true,
        cwd: __dirname
    });
    
    npm.on('close', (code) => {
        if (code === 0) {
            console.log('✅ Dependencies installed successfully!\n');
            startServer();
        } else {
            console.error('❌ Failed to install dependencies');
            process.exit(1);
        }
    });
} else {
    startServer();
}

function startServer() {
    console.log('🔧 Starting server...');
    
    const server = spawn('node', ['server.js'], {
        stdio: 'inherit',
        shell: true,
        cwd: __dirname
    });
    
    server.on('error', (error) => {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
    });
    
    server.on('close', (code) => {
        console.log(`\n🛑 Server stopped with code ${code}`);
    });
    
    // Handle graceful shutdown
    process.on('SIGINT', () => {
        console.log('\n🛑 Shutting down gracefully...');
        server.kill('SIGINT');
        process.exit(0);
    });
}
