#!/usr/bin/env node
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(process.env.SERVE_DIR || path.join(HERE, '..', 'site'));
const PORT = Number(process.env.PORT || 4173);
const HOST = process.env.HOST || '127.0.0.1';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf',
};

const server = http.createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent((request.url || '/').split('?')[0]);
  } catch {
    response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Bad request');
    return;
  }

  let relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  if (!path.extname(relative)) relative = `${relative}.html`;

  const full = path.resolve(ROOT, relative);
  if (!full.startsWith(`${ROOT}${path.sep}`) && full !== ROOT) {
    response.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Forbidden');
    return;
  }

  fs.readFile(full, (error, data) => {
    if (error) {
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(
        '<!doctype html><meta charset="utf-8"><title>Not found</title><p>Not found. <a href="/">Go home</a>.</p>'
      );
      return;
    }
    const type = TYPES[path.extname(full).toLowerCase()] || 'application/octet-stream';
    response.writeHead(200, {
      'Content-Type': type,
      'Cache-Control': 'no-store',
      'Referrer-Policy': 'no-referrer',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(data);
  });
});

server.listen(PORT, HOST, () => {
  const address = server.address();
  const port = address && typeof address === 'object' ? address.port : PORT;
  console.log(`Serving ${ROOT} at http://${HOST}:${port}`);
  console.log('Press Ctrl+C to stop.');
});

const shutdown = () => {
  server.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
