# 🚀 Sawala Learning Project

Repository ini berisi dokumentasi tugas, latihan harian, mini project, dan final project yang dikerjakan selama mengikuti program pembelajaran **Sawala Learning**.

---

## 📌 Rencana & Kurikulum Pembelajaran (10 Minggu)

| Milestone | Fokus Pembelajaran | Materi Utama | Output / Mini Project Wajib |
| :--- | :--- | :--- | :--- |
| **01-javascript-fundamentals** | Fondasi & JavaScript Modern (Minggu 1–2) | • Dasar ECMAScript (`let`/`const`, tipe data, kondisi, function)<br>• Struktur data: `object` & `array`<br>• Basic debugging (`console.log`, devtools)<br>• Looping & array methods (`map`, `filter`, `find`, `forEach`, `reduce`)<br>• Destructuring, spread operator, ES Modules | • Mini exercise: kalkulator sederhana & pengolahan data siswa<br>• Mini project: daftar produk/artikel lokal dengan filter & pencarian |
| **02-async-api-typescript** | Async JS, API & TypeScript (Minggu 3–4) | • `Promise` & `async/await`<br>• Fetch API untuk request data<br>• Dasar HTTP & format JSON<br>• Error handling<br>• TypeScript basic (`type` & `interface`) | • Mini project: konsumsi public API dengan state loading, error, & TypeScript |
| **03-nodejs-fundamentals** | Node.js Fundamentals (Minggu 5–6) | • Node.js runtime & event loop<br>• CommonJS & ES Modules<br>• `npm` & `package.json`<br>• Express.js server, routing, middleware<br>• REST API dasar (CRUD)<br>• Environment variable (`.env`) | • Mini project: REST API sederhana (CRUD data artikel)<br>• Pengujian API lewat Postman / Thunder Client |
| **04-react-fundamentals** | React Fundamentals (Minggu 7–8) | • JSX & Component<br>• Props & State<br>• Event handling<br>• Conditional & list rendering<br>• `useEffect` dasar | • Mini project: aplikasi artikel/dashboard sederhana berbasis React + TypeScript |
| **05-nextjs-strapi-final-project** | Next.js, Atomic Design & Strapi (Minggu 9–10) | • Next.js App Router (`page` & `layout`)<br>• Server vs Client Component<br>• Data fetching dasar<br>• Atomic Design (`atoms`/`molecules`/`organisms`)<br>• Integrasi Strapi CMS (Content Type & REST API)<br>• Basic deployment | • **Final Project**: Aplikasi web "ArtikelKu" (Strapi sebagai CMS, Next.js sebagai Frontend dengan struktur Atomic Design) |

---

## 📖 Penjelasan Rinci Tiap Materi Pembelajaran

### 📘 Milestone 1: Fondasi & JavaScript Modern (Minggu 1–2)
* **Dasar ECMAScript (`let`/`const`, Tipe Data, Kondisi, Function)**:
  * Perbedaan variabel modern (`let` & `const`) dibanding `var`.
  * Tipe data dasar (String, Number, Boolean, Array, Object), percabangan (`if/else`, `switch`), serta `function` biasa & `arrow function`.
* **Struktur Data Dasar (`object` & `array`)**:
  * Menyimpan dan mengelola sekumpulan data bertipe majemuk dalam bentuk daftar terurut (`array`) maupun pasangan kunci-nilai (`object`).
* **Basic Debugging (`console.log`, DevTools)**:
  * Menggunakan `console.log()` dan Developer Tools browser (F12) untuk melacak bug dan menganalisis error pada kode.
* **Looping & Array Methods (`map`, `filter`, `find`, `forEach`, `reduce`)**:
  * Teknik mengolah data array modern: `map` (mengubah elemen), `filter` (menyaring data), `find` (mencari data spesifik), dan `reduce` (menggabungkan data menjadi satu nilai).
* **Destructuring & Spread Operator**:
  * *Destructuring*: Mengambil nilai dari object/array secara langsung.
  * *Spread Operator (`...`)*: Menggabungkan atau menyalin isi array/object dengan ringkas.
* **ES Modules (`import`/`export`)**:
  * Memecah kode program menjadi beberapa file terpisah menggunakan `export` dan `import`.

### ⚡ Milestone 2: Async JavaScript, API & TypeScript (Minggu 3–4)
* **`Promise` & `async/await`**:
  * Penanganan proses *asynchronous* saat mengambil data tanpa membuat aplikasi membeku (*freeze*).
* **Fetch API**:
  * Fitur bawaan JavaScript untuk meminta (*request*) dan menerima data dari server/database luar.
* **Dasar HTTP & JSON**:
  * Memahami metode HTTP (`GET`, `POST`, `PUT/PATCH`, `DELETE`) dan format penukaran data standar web (**JSON**).
* **Error Handling (`try/catch`)**:
  * Menangkap dan menangani potensi kesalahan/error agar aplikasi tidak langsung *crash*.
* **TypeScript Basic (`type` & `interface`)**:
  * Menambahkan *static typing* pada JavaScript untuk memastikan struktur data selalu jelas dan mencegah bug tipe data.

### 🛠️ Milestone 3: Node.js Fundamentals & Express.js (Minggu 5–6)
* **Node.js Runtime & Event Loop**:
  * Menjalankan kode JavaScript di sisi server (luar browser).
* **Module System & NPM**:
  * Memahami pengimportan kode di Node.js serta penggunaan NPM (*Node Package Manager*) untuk mengunduh library pihak ketiga.
* **Express.js Server, Routing & Middleware**:
  * Membuat server dengan Express.js, menentukan *routing* endpoint URL, dan *middleware* sebagai fungsi perantara request.
* **REST API Dasar (CRUD)**:
  * Membuat endpoint API lengkap dengan fungsi **CRUD** (*Create, Read, Update, Delete*).
* **Environment Variable (`.env`)**:
  * Menyimpan rahasia aplikasi (seperti kunci API atau konfigurasi database) secara aman.

### ⚛️ Milestone 4: React Fundamentals (Minggu 7–8)
* **JSX & Component**:
  * Penulisan sintaks HTML di dalam JavaScript (JSX) dan pemecahan UI menjadi bagian-bagian kecil yang *reusable* (Component).
* **Props & State**:
  * *Props*: Data yang dikirim dari parent ke child component.
  * *State*: Data internal komponen yang jika berubah akan memicu *re-render* tampilan otomatis.
* **Event Handling & Rendering**:
  * Menangani interaksi pengguna (klik/ketik), menampilkan elemen bersyarat (*conditional rendering*), dan menampilkan daftar data (*list rendering*).
* **`useEffect` Dasar**:
  * Hook untuk menjalankan *side effects*, seperti mengambil data dari API saat komponen dimuat.

### 🚀 Milestone 5: Next.js, Atomic Design & Integrasi Fullstack (Minggu 9–10)
* **Next.js App Router (`page` & `layout`)**:
  * Sistem routing berbasis folder (`app/page.tsx` & `app/layout.tsx`) pada framework Next.js.
* **Server vs Client Component**:
  * *Server Component*: Diproses di server untuk performa dan SEO tinggi.
  * *Client Component (`"use client"`)*: Khusus menangani interaksi pengguna di browser (seperti modal/pop-up).
* **Atomic Design Structure**:
  * Metodologi penyusunan komponen UI: **Atoms** $\rightarrow$ **Molecules** $\rightarrow$ **Organisms**.
* **Strapi CMS Integration**:
  * Menggunakan Strapi sebagai *Headless CMS* untuk mengelola konten artikel dan menghubungkannya ke Next.js melalui REST API.
* **Basic Deployment**:
  * Konfigurasi environment variable dan prosedur publikasi aplikasi ke server hosting/cloud.

---

## 📂 Struktur Folder Repository

```text
.
└── sawala-learning-project/
    ├── README.md
    ├── .gitignore
    │
    ├── 01-javascript-fundamentals/            # Milestone 1: Fondasi & JavaScript Modern
    │   ├── 01-variabel-tipe-data/
    │   ├── 02-kondisi-function/
    │   ├── 03-object-array/
    │   ├── 04-looping-array-methods/
    │   ├── 05-destructuring-spread/
    │   ├── 06-es-modules/
    │   └── mini-project-produk-list/         # Output: Kalkulator, Data Siswa & Product List
    │
    ├── 02-async-api-typescript/              # Milestone 2: Async JS & TypeScript
    │   ├── 01-promise-async-await/
    │   ├── 02-fetch-api/
    │   ├── 03-error-handling/
    │   ├── 04-typescript-basic/
    │   └── mini-project-consume-api/         # Output: Consume Public API dengan TypeScript
    │
    ├── 03-nodejs-fundamentals/               # Milestone 3: Node.js & Express.js Backend
    │   ├── 01-module-system/
    │   ├── 02-npm-package-json/
    │   └── mini-project-rest-api/            # Output: REST API CRUD Artikel
    │
    ├── 04-react-fundamentals/                # Milestone 4: React.js Frontend
    │   └── mini-project-react-dashboard/     # Output: Dashboard Artikel React + TS
    │
    └── 05-nextjs-strapi-final-project/       # Milestone 5: Fullstack Next.js & Strapi
        ├── frontend-nextjs/                  # Frontend Next.js (App Router & Atomic Design)
        └── backend-strapi/                   # CMS Backend Strapi
```

---

## 💻 Panduan Menjalankan Project

### 1️⃣ Milestone 1: JavaScript Fundamentals
```bash
# Menjalankan Latihan Harian
node 01-javascript-fundamentals/01-variabel-tipe-data/index.js
node 01-javascript-fundamentals/02-kondisi-function/index.js
node 01-javascript-fundamentals/03-object-array/index.js
node 01-javascript-fundamentals/04-looping-array-methods/index.js
node 01-javascript-fundamentals/05-destructuring-spread/index.js
node 01-javascript-fundamentals/06-es-modules/index.js

# Menjalankan Mini Project
node 01-javascript-fundamentals/mini-project-produk-list/index.js
node 01-javascript-fundamentals/mini-project-produk-list/kalkulator.js
node 01-javascript-fundamentals/mini-project-produk-list/pengolahan-data-siswa.js
```

### 2️⃣ Milestone 2: Async API & TypeScript
```bash
cd 02-async-api-typescript/mini-project-consume-api
npm install
npm run dev
```

### 3️⃣ Milestone 3: Node.js & Express REST API
```bash
cd 03-nodejs-fundamentals/mini-project-rest-api
npm install
npm run dev
```

### 4️⃣ Milestone 4: React Dashboard
```bash
cd 04-react-fundamentals/mini-project-react-dashboard
npm install
npm run dev
```

### 5️⃣ Milestone 5: Final Project (Next.js & Strapi CMS)

#### Jalankan Backend (Strapi CMS):
```bash
cd 05-nextjs-strapi-final-project/backend-strapi
npm install
npm run develop
```
> Panel Admin Strapi dapat diakses di: `http://localhost:1337/admin`

#### Jalankan Frontend (Next.js):
```bash
cd 05-nextjs-strapi-final-project/frontend-nextjs
npm install
npm run dev
```
> Aplikasi web dapat diakses di: `http://localhost:3000`

---

## 👤 Penulis

- **Nama**: Imelda Novianti
- **Program**: Sawala Learning Program
- **Repository**: [sawala-learning-project](https://github.com/imeldawahyu051-lgtm/sawala-learning-project)