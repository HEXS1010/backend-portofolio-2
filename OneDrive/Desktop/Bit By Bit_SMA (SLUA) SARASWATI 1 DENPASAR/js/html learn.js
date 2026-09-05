// navbar, login & sign up
const navItem = document.querySelectorAll(".navbar-group > .navbar-item");

navItem.forEach((nav) => {
    const navDown = nav.querySelector(".navbar-down");
    if (navDown) {
        nav.addEventListener("mouseenter", () => {
            navDown.classList.add("navbar-expand");
        });
        nav.addEventListener("mouseleave", () => {
            navDown.classList.remove("navbar-expand");
        });
    }
});



const menuToggle = document.querySelector(".burger");
const navbarGroup = document.querySelector(".navbar-group");
const navbarAction = document.querySelector(".navbar-action");

menuToggle.addEventListener("click", () => {
    navbarGroup.classList.toggle("navbar-expand");
    navbarAction.classList.toggle("navbar-expand");

    menuToggle.classList.toggle("toggle-burger");
});














document.addEventListener('DOMContentLoaded', () => {
    
    // Accordion logic
        const chapterCards = document.querySelectorAll(".chapter-card");
        chapterCards.forEach(card => {
            const header = card.querySelector('.chapter-header');
            if (header) {
                header.addEventListener('click', () => {
                    const wasActive = card.classList.contains('active');
                    chapterCards.forEach(c => {
                        if (c !== card) c.classList.remove('active');
                    });
                    card.classList.toggle('active', !wasActive);
                });
            }
        });

        // Dynamic hero button logic
        const completedExercises = document.querySelectorAll('.exercise-item[data-status="completed"]');
        const learningButton = document.querySelector('.hero-button');
        if (completedExercises.length > 0 && learningButton) {
            learningButton.textContent = 'Resume Learning';
        }

        // Sequential Exercise Logic
        function updateExerciseState() {
            const allExercises = document.querySelectorAll('.exercise-item');
            let previousCompleted = true;

            allExercises.forEach(exercise => {
                const currentStatus = exercise.getAttribute('data-status');
                if (currentStatus === 'completed') {
                    previousCompleted = true;
                } else {
                    if (previousCompleted) {
                        exercise.setAttribute('data-status', 'available');
                        previousCompleted = false;
                    } else {
                        exercise.setAttribute('data-status', 'locked');
                    }
                }
            });
            // Panggilan ke addStartButtonListeners() 
        }

        // SELURUH FUNGSI addStartButtonListeners() DIHAPUS

        // Initial setup on page load
        updateExerciseState();
    });


// lab
 document.addEventListener('DOMContentLoaded', () => {
        const UIElements = {
            codeEditor: document.getElementById('code-editor'),
            outputFrame: document.getElementById('output-frame'),
            runBtn: document.getElementById('run-btn'),
            submitBtn: document.getElementById('submit-btn'),
            refreshBtn: document.getElementById('refresh-btn'),
            lineNumbers: document.getElementById('line-numbers'),
            instructionsPanel: document.getElementById('instructions-panel'),
            breadcrumb: document.getElementById('breadcrumb'),
            progressFill: document.getElementById('progress-fill'),
            progressPercent: document.getElementById('progress-percent'),
            logMessage: document.getElementById('log-message'),
            nextBtn: document.getElementById('next-btn'),
            backBtn: document.getElementById('back-btn'),
            feedbackModal: document.getElementById('feedback-modal'),
            modalContent: document.getElementById('modal-content'),
            modalTitle: document.getElementById('modal-title'),
            modalCloseBtn: document.getElementById('modal-close-btn'),
        };

        const commentText = '<!-- Tulis kode di bawah ini ❤️ -->';
        
        const allExercises = [
             { id: 1, chapter: 1, chapterName: "Elemen HTML", name: "Bintang Jatuh", solution: [{ tag: 'h1', count: 1 }], content: { title: "01. Bintang Jatuh", h2: "Apa itu HTML?", paragraphs: ["Selamat datang di awal perjalanan pengembangan web Anda!","Bahasa yang kita pelajari adalah <code>HTML</code>, atau HyperText Markup Language. Diciptakan oleh seorang pengembang bernama Tim Berners-Lee pada tahun 1991.","Seperti namanya, HTML adalah bahasa markup. Ia menandai setiap bagian konten di halaman untuk memberi tahu browser apa itu."], instructions: "Untuk menyelesaikan latihan pertama ini, buat sebuah elemen <code>&lt;h1&gt;</code>. Teks di dalamnya belum penting untuk saat ini."}},
             { id: 2, chapter: 1, chapterName: "Elemen HTML", name: "Dasar Elemen", solution: [{ tag: 'h2', count: 1 }, { tag: 'p', count: 1 }], content: { title: "02. Dasar Elemen", h2: "Judul & Paragraf", paragraphs: ["Selain judul utama, halaman web membutuhkan struktur. Tag <code>&lt;h2&gt;</code> digunakan untuk sub-judul, dan tag <code>&lt;p&gt;</code> untuk paragraf teks biasa.","Tag ini membantu mengatur konten, membuatnya lebih mudah dipahami oleh pengguna dan mesin pencari."], instructions: "Buat sebuah tag <code>&lt;h2&gt;</code> dan, di bawahnya, sebuah tag <code>&lt;p&gt;</code>."}},
             { id: 3, chapter: 1, chapterName: "Elemen HTML", name: "Surat Kabar", solution: [{ tag: 'p', count: 3 }], content: { title: "03. Surat Kabar", h2: "Paragraf Ganda", paragraphs: ["Sama seperti di surat kabar, konten web sering dipecah menjadi beberapa paragraf agar mudah dibaca.","Setiap tag <code>&lt;p&gt;</code> membuat blok teks baru, dengan spasi ditambahkan secara otomatis di antara mereka."], instructions: "Buat tiga tag <code>&lt;p&gt;</code> terpisah di dalam editor."}},
             { id: 4, chapter: 1, chapterName: "Elemen HTML", name: "Penekanan Teks", solution: [{ tag: 'p', count: 1 }, { tag: 'em', count: 1 }, { tag: 'strong', count: 1 }], content: { title: "04. Penekanan Teks", h2: "Emphasis & Importance", paragraphs: ["Terkadang Anda perlu membuat teks menonjol. Tag <code>&lt;em&gt;</code> digunakan untuk penekanan (biasanya ditampilkan sebagai miring), dan tag <code>&lt;strong&gt;</code> untuk teks penting (biasanya ditampilkan sebagai tebal)."], instructions: "Buat sebuah paragraf yang berisi tag <code>&lt;em&gt;</code> dan tag <code>&lt;strong&gt;</code> di dalamnya."}},
             { id: 5, chapter: 1, chapterName: "Elemen HTML", name: "Daftar Belanja", solution: [{ tag: 'ul', count: 1 }, { tag: 'li', count: 3 }], content: { title: "05. Daftar Belanja", h2: "Daftar Tak Berurut", paragraphs: ["Daftar sangat cocok untuk mengelompokkan item terkait. Daftar tak berurut, dibuat dengan <code>&lt;ul&gt;</code>, adalah daftar berpoin.","Setiap item dalam daftar dibuat dengan tag <code>&lt;li&gt;</code> (list item)."], instructions: "Buat sebuah <code>&lt;ul&gt;</code> yang berisi setidaknya tiga tag <code>&lt;li&gt;</code> di dalamnya."}},
             { id: 6, chapter: 1, chapterName: "Elemen HTML", name: "Hewan Hilang", solution: [{ tag: 'img', attributes: ['src', 'alt'] }], content: { title: "06. Hewan Hilang", h2: "Gambar", paragraphs: ["Gambar membuat halaman menjadi hidup. Tag <code>&lt;img&gt;</code> digunakan untuk menampilkan gambar. Ini adalah tag yang menutup sendiri.","Ia membutuhkan dua atribut utama: <code>src</code> (URL sumber gambar) dan <code>alt</code> (teks alternatif untuk pembaca layar atau jika gambar gagal dimuat)."], instructions: "Tambahkan tag <code>&lt;img&gt;</code> ke editor. Pastikan ia memiliki atribut <code>src</code> dan <code>alt</code>."}},
             { id: 7, chapter: 1, chapterName: "Elemen HTML", name: "Elemen Terakhir", solution: [{ tag: 'a', attributes: ['href'] }], content: { title: "07. Elemen Terakhir", h2: "Tautan", paragraphs: ["Elemen penting terakhir adalah tag jangkar, <code>&lt;a&gt;</code>, yang membuat hyperlink.", "Ia menggunakan atribut <code>href</code> untuk menentukan tujuan tautan. Tanpa tautan, tidak akan ada 'web' di World Wide Web!"], instructions: "Buat sebuah tautan dengan menambahkan tag <code>&lt;a&gt;</code> dengan atribut <code>href</code>."}},
             { id: 8, chapter: 2, chapterName: "Struktur", name: "Cetak Biru", solution: [{ tag: 'html', count: 1 }], content: { title: "08. Cetak Biru", h2: "Dokumen HTML", paragraphs: ["Setiap halaman HTML memiliki struktur dasar. Selalu dimulai dengan <code>&lt;!DOCTYPE html&gt;</code>, yang memberi tahu browser bahwa ini adalah dokumen HTML5.", "Semua konten kemudian dibungkus di dalam tag <code>&lt;html&gt;</code>."], instructions: "Buat sebuah tag <code>&lt;html&gt;</code>. Jangan khawatir tentang doctype untuk saat ini."}},
             { id: 9, chapter: 2, chapterName: "Struktur", name: "Kepala & Badan", solution: [{ tag: 'head', count: 1 }, { tag: 'body', count: 1 }], content: { title: "09. Kepala & Badan", h2: "Head & Body", paragraphs: ["Sebuah dokumen HTML dibagi menjadi dua bagian utama: <code>&lt;head&gt;</code> dan <code>&lt;body&gt;</code>.", "Bagian head berisi meta-informasi (data tentang halaman), sedangkan body berisi konten yang terlihat."], instructions: "Di dalam tag <code>&lt;html&gt;</code> Anda, buat tag <code>&lt;head&gt;</code>, diikuti oleh tag <code>&lt;body&gt;</code>."}},
             { id: 10, chapter: 2, chapterName: "Struktur", name: "Judul Halaman", solution: [{ tag: 'title', count: 1 }], content: { title: "10. Judul Halaman", h2: "Title", paragraphs: ["Tag <code>&lt;title&gt;</code>, ditempatkan di dalam <code>&lt;head&gt;</code>, mendefinisikan judul yang ditampilkan di tab atau jendela browser.", "Ini sangat penting untuk mesin pencari dan pengalaman pengguna."], instructions: "Tambahkan tag <code>&lt;title&gt;</code> di dalam bagian <code>&lt;head&gt;</code>."}},
             { id: 11, chapter: 2, chapterName: "Struktur", name: "Info Meta", solution: [{ tag: 'meta', attributes: ['charset']}], content: { title: "11. Info Meta", h2: "Tag Meta", paragraphs: ["Tag <code>&lt;meta&gt;</code> menyediakan metadata tentang dokumen HTML. Tag ini menutup sendiri dan berada di dalam head.", "Salah satu yang umum adalah <code>&lt;meta charset=\"UTF-8\"&gt;</code>, yang menentukan pengkodean karakter untuk dokumen."], instructions: "Tambahkan tag <code>&lt;meta&gt;</code> dengan atribut <code>charset</code> di dalam head."}},
             { id: 12, chapter: 2, chapterName: "Struktur", name: "Komentar", solution: [{ type: 'comment', count: 1 }], content: { title: "12. Komentar", h2: "Komentar HTML", paragraphs: ["Komentar digunakan untuk menjelaskan kode dan diabaikan oleh browser. Mereka dimulai dengan <code>&lt;!--</code> dan diakhiri dengan <code>--&gt;</code>."], instructions: "Tulis sebuah komentar HTML di mana saja di editor."}},
             { id: 13, chapter: 2, chapterName: "Struktur", name: "Div & Span", solution: [{ tag: 'div', count: 1 }, { tag: 'span', count: 1 }], content: { title: "13. Div & Span", h2: "Wadah Generik", paragraphs: ["<code>&lt;div&gt;</code> adalah wadah tingkat-blok yang digunakan untuk mengelompokkan bagian konten yang lebih besar.", "<code>&lt;span&gt;</code> adalah wadah in-line, sering digunakan untuk mengelompokkan potongan kecil teks di dalam elemen yang lebih besar."], instructions: "Buat satu elemen <code>&lt;div&gt;</code> dan satu elemen <code>&lt;span&gt;</code>."}},
             { id: 14, chapter: 2, chapterName: "Struktur", name: "Struktur Lengkap", solution: [{ tag: 'html', count: 1 }, { tag: 'head', count: 1 }, { tag: 'body', count: 1 }, { tag: 'title', count: 1 }], content: { title: "14. Struktur Lengkap", h2: "Menyatukan Semuanya", paragraphs: ["Mari gabungkan apa yang telah Anda pelajari untuk membuat kerangka dasar dari setiap halaman HTML."], instructions: "Buat struktur HTML lengkap dengan <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>, dan <code>&lt;title&gt;</code> di dalam head."}},
             { id: 15, chapter: 3, chapterName: "Formulir", name: "Wadah Formulir", solution: [{ tag: 'form', count: 1 }], content: { title: "15. Wadah Formulir", h2: "Form Container", paragraphs: ["Formulir digunakan untuk mengumpulkan input pengguna. Semua elemen formulir harus dibungkus di dalam tag <code>&lt;form&gt;</code>."], instructions: "Buat sebuah tag <code>&lt;form&gt;</code> kosong."}},
             { id: 16, chapter: 3, chapterName: "Formulir", name: "Input Teks", solution: [{ tag: 'input', count: 1 }], content: { title: "16. Input Teks", h2: "Input Fields", paragraphs: ["Elemen formulir yang paling umum adalah tag <code>&lt;input&gt;</code>. Ini bisa berupa kolom teks, kata sandi, kotak centang, dll.", "Secara default, tipenya adalah 'text'."], instructions: "Tambahkan tag <code>&lt;input&gt;</code> di dalam formulir."}},
             { id: 17, chapter: 3, chapterName: "Formulir", name: "Beri Label", solution: [{ tag: 'label', attributes: ['for'] }, { tag: 'input', attributes: ['id'] }], content: { title: "17. Beri Label", h2: "Labels", paragraphs: ["Label sangat penting untuk aksesibilitas. Tag <code>&lt;label&gt;</code> memberikan deskripsi untuk kontrol formulir.", "Gunakan atribut 'for' pada label untuk menghubungkannya dengan 'id' dari sebuah input."], instructions: "Buat sebuah <code>&lt;label&gt;</code> dan <code>&lt;input&gt;</code>. Berikan input sebuah atribut id dan hubungkan dengan atribut for label."}},
             { id: 18, chapter: 3, chapterName: "Formulir", name: "Area Teks", solution: [{ tag: 'textarea', count: 1 }], content: { title: "18. Area Teks", h2: "Input Multibaris", paragraphs: ["Untuk input teks yang lebih panjang, seperti komentar atau pesan, gunakan tag <code>&lt;textarea&gt;</code>."], instructions: "Tambahkan elemen <code>&lt;textarea&gt;</code> ke formulir Anda."}},
             { id: 19, chapter: 3, chapterName: "Formulir", name: "Kotak Pilihan", solution: [{ tag: 'select', count: 1 }, { tag: 'option', count: 2 }], content: { title: "19. Kotak Pilihan", h2: "Daftar Dropdown", paragraphs: ["Elemen <code>&lt;select&gt;</code> membuat daftar dropdown.", "Setiap item dalam daftar adalah tag <code>&lt;option&gt;</code> yang disarangkan di dalamnya."], instructions: "Buat kotak <code>&lt;select&gt;</code> dengan setidaknya dua elemen <code>&lt;option&gt;</code> di dalamnya."}},
             { id: 20, chapter: 3, chapterName: "Formulir", name: "Jenis Input", solution: [{ tag: 'input', attributes: ['type="password"'] }, { tag: 'input', attributes: ['type="checkbox"'] }], content: { title: "20. Jenis Input", h2: "Input Lainnya", paragraphs: ["Tag <code>&lt;input&gt;</code> sangat serbaguna. Ubah atribut <code>type</code>-nya untuk membuat kontrol yang berbeda.", "<code>type=\"password\"</code> menyembunyikan input, dan <code>type=\"checkbox\"</code> membuat kotak centang."], instructions: "Buat dua input: satu dengan tipe <code>password</code> dan satu dengan tipe <code>checkbox</code>."}},
             { id: 21, chapter: 3, chapterName: "Formulir", name: "Tombol Kirim", solution: [{ tag: 'button', count: 1 }], content: { title: "21. Tombol Kirim", h2: "Tombol", paragraphs: ["Formulir tidak berguna kecuali Anda bisa mengirimkannya. Tag <code>&lt;button&gt;</code> digunakan untuk ini.", "Tombol dengan tipe 'submit' akan mengirimkan data formulir."], instructions: "Tambahkan <code>&lt;button&gt;</code> dengan teks 'Kirim' di dalam formulir Anda."}},
             { id: 22, chapter: 4, chapterName: "HTML Semantik", name: "Header", solution: [{ tag: 'header', count: 1 }], content: { title: "22. Header", h2: "Header", paragraphs: ["Tag semantik memberikan makna pada konten Anda. Tag <code>&lt;header&gt;</code> digunakan untuk konten pengantar, seperti logo situs, judul, dan navigasi."], instructions: "Buat sebuah elemen <code>&lt;header&gt;</code>."}},
             { id: 23, chapter: 4, chapterName: "HTML Semantik", name: "Navigasi", solution: [{ tag: 'nav', count: 1 }, { tag: 'a', count: 1 }], content: { title: "23. Navigasi", h2: "Navigasi", paragraphs: ["Tag <code>&lt;nav&gt;</code> digunakan untuk mendefinisikan satu set tautan navigasi."], instructions: "Buat elemen <code>&lt;nav&gt;</code> dengan setidaknya satu tautan (<code>&lt;a&gt;</code>) di dalamnya."}},
             { id: 24, chapter: 4, chapterName: "HTML Semantik", name: "Konten Utama", solution: [{ tag: 'main', count: 1 }], content: { title: "24. Konten Utama", h2: "Main", paragraphs: ["Tag <code>&lt;main&gt;</code> menentukan konten utama dan dominan dari sebuah dokumen. Seharusnya hanya ada satu per halaman."], instructions: "Buat sebuah elemen <code>&lt;main&gt;</code>."}},
             { id: 25, chapter: 4, chapterName: "HTML Semantik", name: "Seksi", solution: [{ tag: 'section', count: 1 }, { tag: 'h2', count: 1 }], content: { title: "25. Seksi", h2: "Sections", paragraphs: ["Tag <code>&lt;section&gt;</code> mendefinisikan pengelompokan tematik konten, biasanya dengan sebuah judul."], instructions: "Buat <code>&lt;section&gt;</code> dengan judul <code>&lt;h2&gt;</code> di dalamnya."}},
             { id: 26, chapter: 4, chapterName: "HTML Semantik", name: "Artikel", solution: [{ tag: 'article', count: 1 }, { tag: 'h3', count: 1 }], content: { title: "26. Artikel", h2: "Articles", paragraphs: ["Tag <code>&lt;article&gt;</code> adalah untuk konten mandiri yang dapat didistribusikan secara independen, seperti posting blog atau berita."], instructions: "Buat <code>&lt;article&gt;</code> dengan judul <code>&lt;h3&gt;</code> di dalamnya."}},
             { id: 27, chapter: 4, chapterName: "HTML Semantik", name: "Konten Samping", solution: [{ tag: 'aside', count: 1 }], content: { title: "27. Konten Samping", h2: "Aside", paragraphs: ["Elemen <code>&lt;aside&gt;</code> merepresentasikan konten yang terkait secara tangensial dengan konten di sekitarnya, seperti sidebar atau kotak info."], instructions: "Buat sebuah elemen <code>&lt;aside&gt;</code>."}},
             { id: 28, chapter: 4, chapterName: "HTML Semantik", name: "Footer", solution: [{ tag: 'footer', count: 1 }], content: { title: "28. Footer", h2: "Footer", paragraphs: ["Tag <code>&lt;footer&gt;</code> merepresentasikan footer dari sebuah halaman atau bagian, biasanya berisi info hak cipta, detail kontak, atau tautan terkait."], instructions: "Buat sebuah elemen <code>&lt;footer&gt;</code>."}},
             { id: 29, chapter: 5, chapterName: "Projek Sederhana", name: "Struktur Halaman", solution: [{ tag: 'header', count: 1 }, { tag: 'main', count: 1 }, { tag: 'footer', count: 1 }], content: { title: "29. Proyek: Struktur", h2: "Struktur Portofolio", paragraphs: ["Mari kita mulai membangun halaman portofolio sederhana. Langkah pertama adalah menyusun bagian-bagian semantik utama."], instructions: "Buat elemen <code>&lt;header&gt;</code>, <code>&lt;main&gt;</code>, dan <code>&lt;footer&gt;</code> secara berurutan."}},
             { id: 30, chapter: 5, chapterName: "Projek Sederhana", name: "Header & Judul", solution: [{ tag: 'header', count: 1 }, { tag: 'h1', count: 1 }, { tag: 'p', count: 1 }], content: { title: "30. Proyek: Header", h2: "Header Portofolio", paragraphs: ["Header harus memperkenalkan Anda. Biasanya berisi judul utama dan tagline singkat."], instructions: "Di dalam <code>&lt;header&gt;</code> Anda, tambahkan <code>&lt;h1&gt;</code> dengan nama Anda dan <code>&lt;p&gt;</code> dengan jabatan (mis., Pengembang Web)."}},
             { id: 31, chapter: 5, chapterName: "Projek Sederhana", name: "Tambah Gambar", solution: [{ tag: 'main', count: 1 }, { tag: 'img', attributes: ['src', 'alt'] }], content: { title: "31. Proyek: Gambar", h2: "Foto Profil", paragraphs: ["Sentuhan pribadi! Mari tambahkan foto profil ke bagian utama."], instructions: "Di dalam tag <code>&lt;main&gt;</code> Anda, tambahkan <code>&lt;img&gt;</code> dengan atribut <code>src</code> dan <code>alt</code>."}},
             { id: 32, chapter: 5, chapterName: "Projek Sederhana", name: "Deskripsi Diri", solution: [{ tag: 'section', count: 1 }, { tag: 'h2', count: 1 }, { tag: 'p', count: 1 }], content: { title: "32. Proyek: Deskripsi", h2: "Tentang Saya", paragraphs: ["Mari tambahkan bagian untuk mendeskripsikan diri Anda. Ini membantu pengunjung mengenal Anda."], instructions: "Di <code>&lt;main&gt;</code>, buat <code>&lt;section&gt;</code> dengan <code>&lt;h2&gt;</code> berjudul 'Tentang Saya' dan <code>&lt;p&gt;</code> dengan deskripsi singkat."}},
             { id: 33, chapter: 5, chapterName: "Projek Sederhana", name: "Daftar Keahlian", solution: [{ tag: 'section', count: 1 }, { tag: 'ul', count: 1 }, { tag: 'li', count: 3 }], content: { title: "33. Proyek: Keahlian", h2: "Tunjukkan Keahlianmu", paragraphs: ["Daftar adalah cara yang bagus untuk menampilkan keahlian Anda."], instructions: "Buat <code>&lt;section&gt;</code> lain di <code>&lt;main&gt;</code> untuk keahlian Anda. Di dalamnya, tambahkan <code>&lt;ul&gt;</code> dengan setidaknya tiga item <code>&lt;li&gt;</code>."}},
             { id: 34, chapter: 5, chapterName: "Projek Sederhana", name: "Formulir Kontak", solution: [{ tag: 'section', count: 1 }, { tag: 'form', count: 1 }, { tag: 'input', count: 1 }], content: { title: "34. Proyek: Kontak", h2: "Hubungi Saya", paragraphs: ["Mari tambahkan cara sederhana bagi orang untuk menghubungi Anda."], instructions: "Buat <code>&lt;section&gt;</code> terakhir dengan <code>&lt;form&gt;</code>. Di dalam formulir, tambahkan <code>&lt;input&gt;</code> untuk alamat email."}},
             { id: 35, chapter: 5, chapterName: "Projek Sederhana", name: "Info Footer", solution: [{ tag: 'footer', count: 1 }, { tag: 'p', count: 1 }], content: { title: "35. Proyek: Footer", h2: "Sentuhan Akhir", paragraphs: ["Footer sangat cocok untuk informasi hak cipta atau tautan media sosial."], instructions: "Di dalam <code>&lt;footer&gt;</code> Anda, tambahkan <code>&lt;p&gt;</code> dengan teks hak cipta (mis., © 2025 Nama Anda)."}},
        ];
        let currentExerciseIndex = 0;
        let progress = {};

        function saveProgress() {
            localStorage.setItem('htmlLabProgress', JSON.stringify(progress));
        }

        function loadProgress() {
            progress = JSON.parse(localStorage.getItem('htmlLabProgress')) || {};
        }

        function updateSystemLog(message) {
            UIElements.logMessage.textContent = `[Log Sistem]: ${message}`;
        }
        
        function updateChapterProgress() {
            const currentChapter = allExercises[currentExerciseIndex].chapter;
            const exercisesInChapter = allExercises.filter(ex => ex.chapter === currentChapter);
            const completedInChapter = exercisesInChapter.filter(ex => progress[ex.id]?.isCompleted).length;
            
            const chapterProgress = (completedInChapter / exercisesInChapter.length) * 100;
            
            UIElements.progressFill.style.width = `${chapterProgress}%`;
            UIElements.progressPercent.textContent = `${Math.round(chapterProgress)}%`;
        }
        
        function loadExercise(index) {
            currentExerciseIndex = index;
            const exercise = allExercises[index];
            
            UIElements.breadcrumb.textContent = `HTML / ${exercise.chapterName}`;
            UIElements.instructionsPanel.innerHTML = `<h1>${exercise.content.title}</h1><h2>${exercise.content.h2}</h2>${exercise.content.paragraphs.map(p => `<p>${p}</p>`).join('')}<h2>Instruksi</h2><p>${exercise.content.instructions}</p>`;
            
            UIElements.codeEditor.value = progress[exercise.id]?.userCode || commentText;
            
            updateChapterProgress();
            runCode();
            updateLineNumbers();

            UIElements.backBtn.disabled = index === 0;
            const isLastExercise = index === allExercises.length - 1;
            const isCompleted = progress[exercise.id]?.isCompleted || false;
            
            UIElements.nextBtn.disabled = !isLastExercise && !isCompleted;
            
            if (isLastExercise && isCompleted) {
                UIElements.nextBtn.textContent = "Selesai";
            } else {
                UIElements.nextBtn.textContent = "Lanjut";
            }
            
            updateSystemLog(`Memuat Latihan ${exercise.id}: ${exercise.name}.`);
        }

        function updateLineNumbers() {
            const lines = UIElements.codeEditor.value.split('\n').length;
            UIElements.lineNumbers.innerHTML = Array.from({ length: lines }, (_, i) => `<div>${i + 1}</div>`).join('');
        }

        function validateCode(userInput) {
            const userCodeOnly = userInput.replace(/<!--.*?-->/gs, '').trim();
            if (!userCodeOnly) return false;
            const solutionRules = allExercises[currentExerciseIndex].solution;

            return solutionRules.every(rule => {
                const { tag, count = 1, attributes, type } = rule;
                
                if (type === 'comment') {
                    return /<!--.*?-->/.test(userInput);
                }

                const openTagRegex = new RegExp(`<${tag}[^>]*>`, 'gi');
                const openMatches = userCodeOnly.match(openTagRegex) || [];
                if (openMatches.length < count) return false;
                
                if (tag !== 'img' && tag !== 'input' && tag !== 'meta') {
                    const closeTagRegex = new RegExp(`</${tag}>`, 'gi');
                    const closeMatches = userCodeOnly.match(closeTagRegex) || [];
                    if (closeMatches.length < count) return false;
                }

                if (attributes) {
                    return openMatches.some(match => {
                       return attributes.every(attr => new RegExp(`\\s${attr}\\s*=\\s*".*?"`, 'i').test(match) || new RegExp(`\\s${attr}[\\s>]`, 'i').test(match) );
                    });
                }
                
                return true;
            });
        }

        function runCode() {
            const userCodeOnly = UIElements.codeEditor.value.replace(commentText, '');
            UIElements.outputFrame.srcdoc = userCodeOnly;
        }
        
        function submitAnswer() {
            const currentId = allExercises[currentExerciseIndex].id;
            progress[currentId] = { ...progress[currentId], userCode: UIElements.codeEditor.value };

            if (validateCode(UIElements.codeEditor.value)) {
                progress[currentId].isCompleted = true;
                showFeedbackModal("Benar!", true);
                updateSystemLog("Jawaban benar. Kerja bagus!");
                if (currentExerciseIndex < allExercises.length - 1) {
                    UIElements.nextBtn.disabled = false;
                }
                if(currentExerciseIndex === allExercises.length - 1) {
                   UIElements.nextBtn.textContent = "Selesai";
                   UIElements.nextBtn.disabled = false;
                }
            } else {
                progress[currentId].isCompleted = false;
                showFeedbackModal("Kurang Tepat", false);
                updateSystemLog("Jawaban kurang tepat. Coba lagi.");
            }
            updateChapterProgress();
            saveProgress();
        }
        
        function showFeedbackModal(message, isSuccess) {
            UIElements.modalTitle.textContent = message;
            UIElements.modalContent.className = 'feedback-modal-content ' + (isSuccess ? 'success' : 'error');
            UIElements.feedbackModal.style.display = 'flex';
        }

        function navigate(direction) {
            progress[allExercises[currentExerciseIndex].id] = { ...progress[allExercises[currentExerciseIndex].id], userCode: UIElements.codeEditor.value };
            saveProgress();

            const newIndex = direction === 'next' ? currentExerciseIndex + 1 : currentExerciseIndex - 1;

            if (newIndex >= 0 && newIndex < allExercises.length) {
                loadExercise(newIndex);
            } else if (newIndex === allExercises.length) {
                window.location.href = "belajar-html.html";
            }
        }

        // --- Event Listeners ---
        UIElements.runBtn.addEventListener('click', runCode);
        UIElements.submitBtn.addEventListener('click', submitAnswer);
        UIElements.refreshBtn.addEventListener('click', runCode);
        UIElements.nextBtn.addEventListener('click', () => navigate('next'));
        UIElements.backBtn.addEventListener('click', () => navigate('back'));
        UIElements.codeEditor.addEventListener('input', updateLineNumbers);
        UIElements.codeEditor.addEventListener('scroll', () => { UIElements.lineNumbers.scrollTop = UIElements.codeEditor.scrollTop; });
        UIElements.modalCloseBtn.addEventListener('click', () => { UIElements.feedbackModal.style.display = 'none'; });
        
        // --- Initial Load ---
        loadProgress(); 
        const urlParams = new URLSearchParams(window.location.search);
        const exerciseId = parseInt(urlParams.get('exercise')) || 1;
        const startIndex = allExercises.findIndex(e => e.id === exerciseId);
        
        loadExercise(startIndex !== -1 ? startIndex : 0);
    });