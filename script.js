/**
 * Data Dummy Jasa Mahasiswa
 */
const dataJasa = [
    { id: 1, nama: "Desain Logo & Branding", mhs: "Budi Santoso", jurusan: "DKV", rating: 4.8, harga: 150000, kategori: "desain", img: "bx-palette", univ: "Universitas Indonesia", semester: 6, exp: "2 tahun freelance", skill: "Illustrator, Photoshop" },
    { id: 2, nama: "Editing Video YouTube", mhs: "Siti Aminah", jurusan: "Ilmu Komunikasi", rating: 4.9, harga: 200000, kategori: "video", img: "bx-video", univ: "Universitas Padjadjaran", semester: 4, exp: "Editor di Kampus TV", skill: "Premiere Pro, After Effects" },
    { id: 3, nama: "Jasa Pengetikan & Format Makalah", mhs: "Rina Wati", jurusan: "Sastra Indonesia", rating: 4.5, harga: 25000, kategori: "admin", img: "bx-file", univ: "Universitas Gadjah Mada", semester: 2, exp: "Terbiasa membuat jurnal", skill: "Ms Word, Mendeley" },
    { id: 4, nama: "Pembuatan Website Landing Page", mhs: "Andi Saputra", jurusan: "Teknik Informatika", rating: 5.0, harga: 500000, kategori: "web", img: "bx-code-alt", univ: "Institut Teknologi Bandung", semester: 8, exp: "Mengerjakan 10+ project klien", skill: "HTML, CSS, JS, React" },
    { id: 5, nama: "Admin Social Media", mhs: "Dewi Lestari", jurusan: "Manajemen", rating: 4.7, harga: 300000, kategori: "admin", img: "bx-mobile", univ: "Universitas Brawijaya", semester: 5, exp: "Admin akun BEM Kampus", skill: "Copywriting, Canva" },
    { id: 6, nama: "Fotografi Produk", mhs: "Rio Dewanto", jurusan: "Fotografi", rating: 4.9, harga: 250000, kategori: "desain", img: "bx-camera", univ: "ISI Yogyakarta", semester: 7, exp: "Freelance fotografer UMKM", skill: "Photography, Lightroom" },
    { id: 7, nama: "Penerjemah Jurnal Inggris-Indo", mhs: "Putri Dian", jurusan: "Sastra Inggris", rating: 4.8, harga: 50000, kategori: "admin", img: "bx-world", univ: "Universitas Diponegoro", semester: 6, exp: "Toefl 600", skill: "Translation, Proofreading" },
    { id: 8, nama: "Tutor Matematika & Fisika", mhs: "Fajar Siddiq", jurusan: "Fisika Murni", rating: 4.6, harga: 100000, kategori: "tutor", img: "bx-math", univ: "Institut Teknologi Sepuluh Nopember", semester: 5, exp: "Tutor bimbel swasta", skill: "Matematika, Fisika" }
];

/**
 * Data Dummy Lowongan Magang
 */
const dataMagang = [
    { id: 1, perusahaan: "PT Telkom Indonesia", posisi: "Digital Marketing Intern", lokasi: "Jakarta", tipe: "Hybrid", durasi: "3 Bulan", gaji: 2500000, deadline: "2026-06-15", desc: "Membantu campaign digital, SEO, dan social media perusahaan.", syarat: "Mahasiswa aktif S1 semua jurusan, passion di marketing.", benefit: "Mentoring, Sertifikat BUMN, Uang Saku." },
    { id: 2, perusahaan: "Shopee", posisi: "UI UX Intern", lokasi: "Jakarta", tipe: "Onsite", durasi: "6 Bulan", gaji: 3000000, deadline: "2026-05-30", desc: "Riset pengguna, membuat wireframe dan mockup high fidelity.", syarat: "Mahasiswa DKV/IT, portfolio required.", benefit: "MacBook dipinjamkan, Makan Siang, Sertifikat." },
    { id: 3, perusahaan: "Gojek", posisi: "Data Analyst Intern", lokasi: "Jakarta", tipe: "Hybrid", durasi: "3 Bulan", gaji: 4000000, deadline: "2026-05-20", desc: "Membantu tim data dalam query SQL dan visualisasi di Tableau.", syarat: "Bisa SQL, Python dasar, mahasiswa semester 6+.", benefit: "Exposure data besar, Mentoring eksklusif." },
    { id: 4, perusahaan: "Tokopedia", posisi: "Business Dev Intern", lokasi: "Jakarta", tipe: "WFH", durasi: "3 Bulan", gaji: 2000000, deadline: "2026-06-01", desc: "Riset market dan approach partner potensial UMKM.", syarat: "Komunikasi bagus, negosiasi, Ms Excel.", benefit: "Flexible working hours, Sertifikat." },
    { id: 5, perusahaan: "TechStartup", posisi: "Web Developer Intern", lokasi: "Bandung", tipe: "WFH", durasi: "6 Bulan", gaji: 1500000, deadline: "2026-05-15", desc: "Ikut mengembangkan dashboard admin intern menggunakan React.", syarat: "Paham JS, HTML, CSS, punya project referensi.", benefit: "Sertifikat, Peluang diangkat fulltime." },
    { id: 6, perusahaan: "Unilever", posisi: "HR Intern", lokasi: "Tangerang", tipe: "Onsite", durasi: "3 Bulan", gaji: 3500000, deadline: "2026-06-10", desc: "Support proses rekrutmen dan screening CV.", syarat: "Mahasiswa Psikologi/Manajemen SDM.", benefit: "Free lunch, fasilitas gym, mentoring." },
    { id: 7, perusahaan: "Ruangguru", posisi: "Content Writer Intern", lokasi: "Jakarta", tipe: "Hybrid", durasi: "3 Bulan", gaji: 2000000, deadline: "2026-05-25", desc: "Menulis artikel edukasi untuk blog Ruangguru.", syarat: "Suka menulis, paham dasar SEO.", benefit: "Sertifikat, Akses kelas gratis." },
    { id: 8, perusahaan: "Traveloka", posisi: "Graphic Design Intern", lokasi: "Jakarta", tipe: "Hybrid", durasi: "3 Bulan", gaji: 2500000, deadline: "2026-06-05", desc: "Membuat aset visual untuk banner aplikasi.", syarat: "Menguasai AI dan PS, kreatif.", benefit: "Sertifikat, Mentoring." },
    { id: 9, perusahaan: "Bank Mandiri", posisi: "Finance Intern", lokasi: "Jakarta", tipe: "Onsite", durasi: "6 Bulan", gaji: 3500000, deadline: "2026-05-10", desc: "Membantu rekap laporan keuangan harian.", syarat: "Mahasiswa Akuntansi/Finance semester akhir.", benefit: "Uang saku, Sertifikat BUMN." },
    { id: 10, perusahaan: "AgriTech", posisi: "Field Operation Intern", lokasi: "Bogor", tipe: "Onsite", durasi: "3 Bulan", gaji: 1500000, deadline: "2026-07-01", desc: "Support operasional logistik di gudang.", syarat: "Fisik prima, cekatan.", benefit: "Uang makan, Sertifikat." }
];

const dataArtikel = [
    { title: "Cara Bikin CV ATS Friendly 2026", cat: "Tips Karier", img: "bx-file" },
    { title: "Rahasia Lolos Interview Magang Startup", cat: "Interview", img: "bx-conversation" },
    { title: "Skill Wajib Mahasiswa di Era AI", cat: "Skill", img: "bx-brain" },
    { title: "Cara Dapet Client Pertama di Freelance", cat: "Freelance", img: "bx-briefcase" },
    { title: "Personal Branding Gila-gilaan di LinkedIn", cat: "Branding", img: "bxl-linkedin-square" },
    { title: "Tips Manajemen Waktu Kuliah Sambil Kerja", cat: "Tips Karier", img: "bx-time-five" }
];

const dataTestimoni = [
    { nama: "Rizky Firmansyah", univ: "Universitas Brawijaya", rating: 5, text: "Awalnya iseng tawar jasa desain, bulan pertama langsung dapet 3 klien lokal! Sistem ordernya gampang banget di MahasiswaHub." },
    { nama: "Nadia Utami", univ: "Universitas Indonesia", rating: 5, text: "Berkat MahasiswaHub saya diterima magang UI/UX intern di startup unicorn. Proses lamarnya cepat dan transparan." },
    { nama: "Faisal", univ: "Telkom University", rating: 4.5, text: "Portofolio builder-nya kerennn! Ga nyangka generate CV gampang banget dan langsung dipakai melamar magang sukses." },
    { nama: "Sarah", univ: "ITB", rating: 5, text: "Sangat direkomendasikan untuk mahasiswa yang mau cari uang tambahan tanpa ganggu jadwal kuliah." },
    { nama: "Budi", univ: "UGM", rating: 4.8, text: "UI website-nya sangat modern dan mudah dimengerti. Saya menemukan banyak freelancer berbakat untuk tugas akhir saya." }
];

/**
 * Format Rupiah
 */
function formatRupiah(angka) {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
}

/**
 * Render Cards
 */
function renderJasa(data) {
    const grid = document.getElementById("jasaGrid");
    grid.innerHTML = data.map(j => `
        <div class="action-card">
            <div class="card-header">
                <div class="card-avatar"><i class='bx ${j.img}'></i></div>
                <div class="card-title-group">
                    <h4>${j.nama}</h4>
                    <p>${j.mhs} - ${j.jurusan}</p>
                </div>
            </div>
            <div class="card-body">
                <div class="badge-group">
                    <span class="badge"><i class='bx bxs-star'></i> ${j.rating}</span>
                    <span class="badge" style="text-transform: capitalize;">${j.kategori}</span>
                </div>
                <p class="card-price">${formatRupiah(j.harga)}</p>
            </div>
            <div class="card-footer">
                <button class="btn-secondary" onclick="openJasaDetail(${j.id})">Detail</button>
                <button class="btn-primary" onclick="openPesanJasa(${j.id}, '${j.nama}')">Pesan</button>
            </div>
        </div>
    `).join("");
}

function renderMagang(data) {
    const grid = document.getElementById("magangGrid");
    grid.innerHTML = data.map(m => `
        <div class="action-card">
            <div class="card-header">
                <div class="card-avatar"><i class='bx bxs-buildings'></i></div>
                <div class="card-title-group">
                    <h4>${m.posisi}</h4>
                    <p>${m.perusahaan}</p>
                </div>
            </div>
            <div class="card-body">
                <div class="badge-group">
                    <span class="badge"><i class='bx bx-map'></i> ${m.lokasi}</span>
                    <span class="badge"><i class='bx bx-briefcase'></i> ${m.tipe}</span>
                    <span class="badge"><i class='bx bx-time'></i> ${m.durasi}</span>
                </div>
                <p><strong>Gaji:</strong> ${formatRupiah(m.gaji)}</p>
                <p class="text-small text-muted mt-2">Deadline: ${new Date(m.deadline).toLocaleDateString('id-ID')}</p>
            </div>
            <div class="card-footer">
                <button class="btn-secondary" onclick="openMagangDetail(${m.id})">Detail</button>
                <button class="btn-primary" onclick="openModal('modalApply')">Lamar</button>
            </div>
        </div>
    `).join("");
}

function renderArtikel() {
    const grid = document.getElementById("artikelGrid");
    grid.innerHTML = dataArtikel.map(a => `
        <div class="card text-center">
            <div class="icon" style="font-size: 3rem; color: var(--primary-color); margin-bottom: 1rem;"><i class='bx ${a.img}'></i></div>
            <span class="badge mb-2 d-inline-block">${a.cat}</span>
            <h4 class="mt-2">${a.title}</h4>
            <a href="#" class="btn-secondary mt-4 w-100">Baca Artikel</a>
        </div>
    `).join("");
}

function renderTestimoni() {
    const container = document.getElementById("testimoniContainer");
    container.innerHTML = dataTestimoni.map(t => {
        let stars = "";
        for(let i=0; i<Math.floor(t.rating); i++) stars += "<i class='bx bxs-star'></i>";
        return `
        <div class="testimoni-card">
            <div class="rating">${stars}</div>
            <p>"${t.text}"</p>
            <div class="mt-4" style="display:flex; gap:10px; align-items:center;">
                <div class="card-avatar"><i class='bx bxs-user'></i></div>
                <div>
                    <h4>${t.nama}</h4>
                    <span class="text-muted text-small">${t.univ}</span>
                </div>
            </div>
        </div>
    `}).join("");
}

/**
 * Filter and Sort Handlers
 */
document.getElementById("searchJasa").addEventListener("input", (e) => filterJasa());
document.getElementById("filterKategori").addEventListener("change", (e) => filterJasa());
document.getElementById("sortJasa").addEventListener("change", (e) => filterJasa());

function filterJasa() {
    let q = document.getElementById("searchJasa").value.toLowerCase();
    let c = document.getElementById("filterKategori").value;
    let s = document.getElementById("sortJasa").value;

    let filtered = dataJasa.filter(j => 
        j.nama.toLowerCase().includes(q) && (c === "all" || j.kategori === c)
    );

    if(s === "murah") filtered.sort((a,b) => a.harga - b.harga);
    else if(s === "rating") filtered.sort((a,b) => b.rating - a.rating);

    renderJasa(filtered);
}

document.getElementById("searchMagang").addEventListener("input", (e) => filterMagang());
document.getElementById("filterTipe").addEventListener("change", (e) => filterMagang());
document.getElementById("sortMagang").addEventListener("change", (e) => filterMagang());

function filterMagang() {
    let q = document.getElementById("searchMagang").value.toLowerCase();
    let t = document.getElementById("filterTipe").value;
    let s = document.getElementById("sortMagang").value;

    let filtered = dataMagang.filter(m => 
        (m.posisi.toLowerCase().includes(q) || m.perusahaan.toLowerCase().includes(q)) && 
        (t === "all" || m.tipe === t)
    );

    if(s === "deadline") filtered.sort((a,b) => new Date(a.deadline) - new Date(b.deadline));
    else if(s === "gaji") filtered.sort((a,b) => b.gaji - a.gaji);

    renderMagang(filtered);
}

/**
 * Modals
 */
function openModal(id) {
    document.getElementById(id).classList.add("show");
}
function closeModal(id) {
    document.getElementById(id).classList.remove("show");
}

function openJasaDetail(id) {
    const j = dataJasa.find(x => x.id === id);
    const html = `
        <div class="text-center mb-4">
            <div class="card-avatar" style="width: 80px; height: 80px; font-size: 3rem; margin: 0 auto 10px;"><i class='bx ${j.img}'></i></div>
            <h2>${j.nama}</h2>
            <p class="text-muted">${j.mhs} - ${j.univ} (Semester ${j.semester})</p>
        </div>
        <hr style="border-color: var(--border-color); margin: 20px 0;">
        <div style="display:grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div>
                <h4>Pengalaman</h4>
                <p>${j.exp}</p>
            </div>
            <div>
                <h4>Skill Utama</h4>
                <p>${j.skill}</p>
            </div>
        </div>
        <div class="mt-4 p-3 bg-light rounded" style="border-radius:8px">
            <h3 class="text-center" style="color:var(--primary-color)">${formatRupiah(j.harga)}</h3>
        </div>
        <button class="btn-primary w-100 mt-4" onclick="closeModal('modalJasa'); openPesanJasa(${j.id}, '${j.nama}')">Pesan Jasa Ini Sekarang</button>
    `;
    document.getElementById("modalJasaBody").innerHTML = html;
    openModal('modalJasa');
}

function openPesanJasa(id, nama) {
    document.getElementById("bookingJasaName").value = nama;
    openModal("modalBooking");
}

function openMagangDetail(id) {
    const m = dataMagang.find(x => x.id === id);
    const html = `
        <div class="text-center mb-4">
            <div class="card-avatar" style="width: 80px; height: 80px; font-size: 3rem; margin: 0 auto 10px;"><i class='bx bxs-buildings'></i></div>
            <h2>${m.posisi}</h2>
            <p class="text-muted">${m.perusahaan} (${m.lokasi})</p>
        </div>
        <div class="badge-group justify-content-center">
            <span class="badge">${m.tipe}</span>
            <span class="badge">${m.durasi}</span>
            <span class="badge">Deadline: ${new Date(m.deadline).toLocaleDateString()}</span>
        </div>
        <hr style="border-color: var(--border-color); margin: 20px 0;">
        <div class="mb-3">
            <h4>Deskripsi Kerja</h4>
            <p>${m.desc}</p>
        </div>
        <div class="mb-3">
            <h4>Persyaratan</h4>
            <p>${m.syarat}</p>
        </div>
        <div class="mb-3">
            <h4>Benefit/Uang Saku</h4>
            <p>${m.benefit} (<strong>${formatRupiah(m.gaji)}</strong>)</p>
        </div>
        <button class="btn-primary w-100 mt-4" onclick="closeModal('modalMagang'); openModal('modalApply')">Apply Magang Ini Sekarang</button>
    `;
    document.getElementById("modalMagangBody").innerHTML = html;
    openModal('modalMagang');
}

/**
 * Toast Notification
 */
function showToast(message) {
    const container = document.getElementById("toast-container");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<i class='bx bx-check-circle' style='color:#22c55e; font-size:1.5rem'></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add("hide");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function submitForm(event, successMsg, modalIdToClose) {
    event.preventDefault();
    showToast(successMsg);
    if(modalIdToClose) closeModal(modalIdToClose);
    event.target.reset();
}

/**
 * Chat Simulation
 */
function sendMessage() {
    const input = document.getElementById("chatInput");
    const val = input.value.trim();
    if(val) {
        const body = document.getElementById("chatBody");
        body.innerHTML += `<div class="message sent">${val}</div>`;
        input.value = "";
        body.scrollTop = body.scrollHeight;
        
        // Auto reply
        setTimeout(() => {
            body.innerHTML += `<div class="message received">Baik, saya sedang proses ya. Harap tunggu sebentar. 😊</div>`;
            body.scrollTop = body.scrollHeight;
        }, 1500);
    }
}

/**
 * Portofolio Builder
 */
document.getElementById("portfolioForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const inputs = this.querySelectorAll("input, textarea");
    document.getElementById("cvName").innerText = inputs[0].value;
    document.getElementById("cvJurusan").innerText = inputs[1].value;
    document.getElementById("cvSkills").innerText = inputs[2].value;
    document.getElementById("cvExp").innerText = inputs[3].value;
    
    let links = "";
    if(inputs[4].value) links += `<a href="${inputs[4].value}" target="_blank">GitHub</a> | `;
    if(inputs[5].value) links += `<a href="${inputs[5].value}" target="_blank">LinkedIn/Behance</a>`;
    document.getElementById("cvLinks").innerHTML = links;
    
    openModal("cvModal");
    showToast("CV Digital berhasil dibuat!");
});

/**
 * FAQ Accordion
 */
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        const isActive = item.classList.contains("active");
        
        document.querySelectorAll(".accordion-item").forEach(i => i.classList.remove("active"));
        if(!isActive) item.classList.add("active");
    });
});

/**
 * Dark Mode Toggle
 */
const themeToggle = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
}

themeToggle.addEventListener("click", () => {
    let theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        themeToggle.innerHTML = "<i class='bx bx-moon'></i>";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        themeToggle.innerHTML = "<i class='bx bx-sun'></i>";
    }
    // Re-render charts for color visibility if implemented
});

/**
 * Scroll Functionality & Animations
 */
window.addEventListener("scroll", () => {
    // Sticky Navbar
    const navbar = document.getElementById("navbar");
    if(window.scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");

    // Back to top button
    const backBtn = document.getElementById("backToTop");
    if(window.scrollY > 500) backBtn.style.display = "flex";
    else backBtn.style.display = "none";

    // Scroll Reveal
    document.querySelectorAll(".section-reveal").forEach(sec => {
        const secTop = sec.getBoundingClientRect().top;
        if(secTop < window.innerHeight - 100) {
            sec.classList.add("active");
        }
    });

    // Active Nav Links
    let current = "";
    document.querySelectorAll("section[id]").forEach(sec => {
        if(window.scrollY >= sec.offsetTop - 150) {
            current = sec.getAttribute("id");
        }
    });
    document.querySelectorAll(".nav-links a").forEach(li => {
        li.classList.remove("active");
        if(li.getAttribute("href") === "#" + current) li.classList.add("active");
    });
});

document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mobile menu toggle
document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("navMenu").classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => {
        document.getElementById("navMenu").classList.remove("active");
    });
});

/**
 * Chart.js Initialization
 */
function initCharts() {
    const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    const bgAlt = getComputedStyle(document.documentElement).getPropertyValue('--bg-alt').trim();

    // User Chart
    const ctx1 = document.getElementById('userChart').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
            datasets: [{
                label: 'Pertumbuhan Pengguna Baru',
                data: [120, 190, 300, 500, 800, 1200],
                borderColor: primary,
                tension: 0.4,
                fill: true,
                backgroundColor: 'rgba(37, 99, 235, 0.1)'
            }]
        },
        options: { responsive: true }
    });

    // Kategori Chart
    const ctx2 = document.getElementById('kategoriChart').getContext('2d');
    new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Desain', 'Admin', 'Web Dev', 'Tutor', 'Video'],
            datasets: [{
                data: [35, 25, 20, 10, 10],
                backgroundColor: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd', '#bfdbfe']
            }]
        },
        options: { responsive: true }
    });

    // Lowongan Chart
    const ctx3 = document.getElementById('lowonganChart').getContext('2d');
    new Chart(ctx3, {
        type: 'bar',
        data: {
            labels: ['Tech', 'Marketing', 'Data', 'Finance', 'Desain'],
            datasets: [{
                label: 'Lowongan Tersedia',
                data: [65, 45, 30, 25, 40],
                backgroundColor: primary,
                borderRadius: 4
            }]
        },
        options: { responsive: true }
    });
}

/**
 * Counter Animation
 */
function runCounters() {
    document.querySelectorAll('.counter').forEach(counter => {
        counter.innerText = '0';
        const target = +counter.getAttribute('data-target');
        const updateCounter = () => {
            const c = +counter.innerText;
            const increment = target / 200;
            if (c < target) {
                counter.innerText = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

/**
 * Initialize all functions
 */
window.addEventListener("load", () => {
    setTimeout(() => {
        const loader = document.getElementById("loading");
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
        
        // Trigger reveal animations and counters
        document.querySelectorAll(".section-reveal").forEach(sec => {
            if(sec.getBoundingClientRect().top < window.innerHeight) {
                sec.classList.add("active");
            }
        });
        runCounters();
        initCharts();
    }, 1500); // 1.5s loading time for realistic effect

    renderJasa(dataJasa);
    renderMagang(dataMagang);
    renderArtikel();
    renderTestimoni();
});

// Contact Form submission dummy
document.getElementById("contactForm").addEventListener("submit", function(e) {
    submitForm(e, "Pesan Anda berhasil dikirim ke tim MahasiswaHub!");
});
