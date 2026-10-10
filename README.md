# 📊 Sistem Laporan Keuangan, Laba Rugi & Neraca 2025
### 🏢 0681 - SHOP&DRIVE • Grand Wisata Baru, Bekasi

Aplikasi laporan keuangan, laba rugi komprehensif, dan neraca keuangan terstruktur untuk unit bisnis **Bengkel & Ritel Otomotif Shop&Drive (Astra Otoparts)** periode buku **01 Januari 2025 – 31 Desember 2025**.

Dilengkapi database data riil penjualan bulanan, perincian persediaan stok suku cadang & aki, aset tetap mesin bengkel, simulator interaktif (*what-if analysis*), serta server mandiri siap migrasi (*production-ready*).

---

## 🚀 Fitur Utama

1. **Ringkasan Eksekutif & KPI Dashboard**:
   - Total Penjualan Bersih (DPP): **Rp 3.777.067.106**
   - Total Bruto (+ PPN 11%): **Rp 4.192.544.490**
   - Laba Kotor Bengkel (24%): **Rp 906.496.105**
   - Potongan Management Fee (3%): **Rp 125.776.335**
   - Laba Bersih Setelah Pajak (EAT): **Rp 65.834.434**
   - Imbal Hasil Modal (ROE): **13,17% per tahun**
   - Pertumbuhan Modal: Modal Awal **Rp 500 Juta** $\rightarrow$ Modal Akhir **Rp 565,8 Juta**.

2. **Jendela Neraca Keuangan (Balance Sheet)**:
   - Format standar akuntansi SAK EMKM (*Scontro*).
   - Pos Aset Lancar: Kas Operasional, Piutang EDC/QRIS, Stok Aki GS Astra/Incoe, Stok Oli Shell/Castrol, Shock KYB, Ban, dan Sewa Dibayar Dimuka.
   - Pos Aset Tetap: Car Lift 2-Post hidrolik, Mesin Spooring 3D, Wheel Balancer, Tyre Changer, Kompresor 5HP, dan Akumulasi Penyusutan.
   - Pos Liabilitas: Utang Usaha ke Astra Otoparts, Utang Pajak PPN/PPh, dan Beban Akrual.
   - Status Keseimbangan: **Balance 100% (Total Aset = Total Liabilitas + Ekuitas = Rp 790.834.434)**.
   - Analisis Rasio Likuiditas: *Current Ratio* (2,58×), *DER* (39,76%), *Inventory Turnover* (8,97×).

3. **Simulator Keuangan Dinamis (*What-If Analysis*)**:
   - Pengaturan *real-time* slider Margin Kotor, Management Fee (Gross Bruto vs DPP), Modal Awal, dan pos pengeluaran operasional. Seluruh grafik, tabel, dan neraca langsung tersinkronisasi otomatis.

4. **Rekapitulasi 12 Bulan & Ekspor Data**:
   - Rincian performa bulanan (Januari s/d Desember 2025).
   - Fitur ekspor data instan ke file **CSV / Microsoft Excel**.

5. **Format Laporan Resmi Siap Cetak (*Print-Ready*)**:
   - Tampilan cetak profesional dengan kop toko dan kolom tanda tangan administrasi serta Kepala Toko / Area Coordinator.

---

## 📁 Struktur Direktori & Data Real

```text
LAPKEU_2025/
├── data/                                         # Direktori Data Riil Lokal
│   ├── data_penjualan_2025.json                  # Data omzet, DPP, PPN, HPP, fee 12 bulan
│   ├── data_neraca_2025.json                     # Data neraca, aset, liabilitas & ekuitas
│   └── laporan_keuangan_2025.csv                 # Data tabel siap buka di Excel
├── index.html                                    # Aplikasi Web Dashboard Interaktif
├── server.js                                     # Server native Node.js (Zero Dependency)
├── package.json                                  # Konfigurasi package & start script
├── Dockerfile                                    # Docker container image
├── docker-compose.yml                            # Orchestrasi deployment satu perintah
├── Buka_Aplikasi.bat                             # Shortcut klik ganda di Windows
├── Laporan_Laba_Rugi_Shop_and_Drive_2025.csv     # Backup CSV data real
├── Laporan_Laba_Rugi_Shop_and_Drive_2025.md      # Laporan dokumen teks lengkap
├── .gitignore
└── README.md                                     # Panduan penggunaan & dokumentasi
```

---

## 💻 Cara Menjalankan di Komputer Lokal

### Opsi A (Langsung Tanpa Server):
1. Buka folder proyek di komputer Anda.
2. Klik ganda file **`Buka_Aplikasi.bat`** atau klik ganda **`index.html`** untuk langsung membuka di peramban web (Chrome, Edge, Firefox).

### Opsi B (Menggunakan Node.js):
```bash
npm start
```
Buka peramban di `http://localhost:3000`.

---

## 🌐 Cara Migrasi & Deployment ke Server

Semua data lokal riil telah dibungkus ke dalam format yang mandiri (*self-contained*), sehingga saat dipindahkan ke server Linux/VPS/Cloud, aplikasi **langsung jalan tanpa perlu konfigurasi tambahan**.

### Opsi 1: Deployment Menggunakan Docker (Direkomendasikan)
Di server tujuan, jalankan:
```bash
git clone https://github.com/giginswanto-ship-it/lapkeu_2025.git
cd lapkeu_2025
docker compose up -d
```
Aplikasi akan langsung berjalan di port `3000`.

### Opsi 2: Deployment Menggunakan Node.js / PM2
```bash
git clone https://github.com/giginswanto-ship-it/lapkeu_2025.git
cd lapkeu_2025

# Jalankan langsung
npm start

# Atau jalankan dengan process manager (PM2) agar berjalan di latar belakang:
npm install -g pm2
pm2 start server.js --name "lapkeu-2025"
pm2 save
```

### Opsi 3: Deployment Web Statis (Nginx / Apache / Caddy)
Cukup arahkan `root` web server Anda ke folder ini (dengan file utama `index.html`).

---

## 🔌 REST API Endpoints

Server menyediakan REST API bawaan untuk integrasi sistem:
* `GET /api/health` — Status kesehatan server
* `GET /api/penjualan` — Data real omzet bulanan, HPP, margin kotor, dan management fee
* `GET /api/neraca` — Data real posisi neraca, aktiva, pasiva, dan rasio keuangan

---

**Shop&Drive Grand Wisata Baru, Bekasi • 2025**
