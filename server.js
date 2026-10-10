/**
 * Server Aplikasi Laporan Keuangan & Neraca Bengkel Shop&Drive 2025
 * Menggunakan Node.js native http/fs tanpa ketergantungan external (Zero Dependency).
 * Siap dijalankan langsung di server (VPS, Docker, Cloud) dengan `node server.js` atau `npm start`.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.csv': 'text/csv; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml'
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

  // Logging request
  console.log(`[${new Date().toISOString()}] ${req.method} ${pathname}`);

  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // REST API Endpoints
  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', service: 'LAPKEU_2025', timestamp: new Date().toISOString() }));
    return;
  }

  if (pathname === '/api/penjualan' || pathname === '/api/laporan') {
    const filePath = path.join(__dirname, 'data', 'data_penjualan_2025.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Gagal membaca data penjualan' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(data);
    });
    return;
  }

  if (pathname === '/api/neraca') {
    const filePath = path.join(__dirname, 'data', 'data_neraca_2025.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Gagal membaca data neraca' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(data);
    });
    return;
  }

  // Static File Serving
  let filePath = pathname === '/' ? path.join(__dirname, 'index.html') : path.join(__dirname, pathname);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1><p>Halaman tidak ditemukan.</p><p><a href="/">Kembali ke Beranda</a></p>');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, HOST, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Aplikasi Laporan Keuangan & Neraca 2025`);
  console.log(`🏢 Shop&Drive Grand Wisata Baru, Bekasi (Outlet 0681)`);
  console.log(`🌐 Server aktif di: http://localhost:${PORT}`);
  console.log(`📊 API Penjualan:   http://localhost:${PORT}/api/penjualan`);
  console.log(`⚖️ API Neraca:      http://localhost:${PORT}/api/neraca`);
  console.log(`=======================================================`);
});
