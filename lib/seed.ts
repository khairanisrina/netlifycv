export interface Profile {
  user_id: number;
  nama: string;
  quote: string;
  judul_about: string;
  deskripsi: string;
  deskripsi_2: string;
  deskripsi_3: string;
  pekerjaan: string;
  pendidikan: string;
  lokasi: string;
  email: string;
  telepon: string;
  ketersediaan: string;
  foto_profil_url: string;
  sosial_twitter: string;
  sosial_facebook: string;
  sosial_instagram: string;
  sosial_linkedin: string;
}

export interface Skill {
  skill_id: number;
  user_id: number;
  nama_keahlian: string;
  persen_keahlian: number;
}

export interface Service {
  layanan_id: number;
  nama_layanan: string;
  deskripsi_layanan: string;
  ikon_layanan: string;
  link_layanan: string;
  featured: number;
}

export interface Experience {
  pengalaman_id: number;
  user_id: number;
  jabatan: string;
  nama_perusahaan: string;
  tahun_mulai: number;
  tahun_selesai: number | null;
  deskripsi: string;
}

export interface Education {
  pendidikan_id: number;
  user_id: number;
  tingkat_gelar: string;
  nama_gelar: string;
  nama_institusi: string;
  tahun_mulai: number;
  tahun_selesai: number | null;
  deskripsi: string;
}

export interface Certificate {
  sertifikat_id: number;
  user_id: number;
  nama_sertifikasi: string;
  tahun: number;
}

export interface PortfolioItem {
  project_id: number;
  nama_proyek: string;
  kategori_proyek: string;
  tahun_proyek: number;
  deskripsi_proyek: string;
  gambar_proyek_url: string;
}

export const profile: Profile = {
  user_id: 1,
  nama: "Khansa Nisrina",
  quote:
    "setiap ide adalah medan untuk menyatukan logika dan imajinasi, mengubahnya menjadi sesuatu yang nyata dan bermakna",
  judul_about: "Insan Anomali dengan Semangat Polymath",
  deskripsi:
    "Saya adalah seorang mahasiswa Teknik Informatika Universitas Muhammadiyah Sukabumi yang memiliki minat besar dalam desain grafis, video editing, ilustrasi digital dan pengembangan web. Saya menikmati proses mengekspresikan ide dan kreatifitas menjadi realita digital yang efisien dan fungsional.",
  deskripsi_2:
    "Selama berkuliah, saya aktif terlibat dalam berbagai proyek teknologi, mulai dari proyek kelas seperti website booking online, aplikasi Android rental kendaraan, hinga sistem informasi sekolah. Saya juga memiliki pengalaman menjadi Project Manager dan kontributor pelatilah digital untuk organisasi masyarakat, yang memperkuat kemampuan saya dalam leadership, manajemen proyek, serta komunikasi lintas bidang.",
  deskripsi_3:
    "Di luar dunia teknologi, saya memiliki ketertarikan mendalam terhadap sejarah, musik metal, bahasa, dan seni digital. Minat-minat tersebut membentuk saya menjadi karakter yang berfikir reflektif, analitis, sekaligus kreatif. Bagi saya, setiap ide adalah medan untuk menyatukan logika dan imajinasi, mengubahnya menjadi sesuatu yang nyata dan bermakna.",
  pekerjaan: "Mahasiswa / Freelancer",
  pendidikan: "S1 Teknik Informatika - UMMI",
  lokasi: "Sukabumi, Jawa Barat",
  email: "khairanisrina@gmail.com",
  telepon: "+6281946824832",
  ketersediaan: "Terbuka untuk magang, proyek freelance, dan kolaborasi kreatif.",
  foto_profil_url: "/assets/img/profile/bubub.jpg",
  sosial_twitter: "",
  sosial_facebook: "https://www.facebook.com/khnzzzz/",
  sosial_instagram: "https://www.instagram.com/khns6113/",
  sosial_linkedin: "https://www.linkedin.com/in/khansa-nisrina-5aaa55281",
};

export const skills: Skill[] = [
  { skill_id: 1, user_id: 1, nama_keahlian: "Ilustrasi Digital", persen_keahlian: 85 },
  { skill_id: 2, user_id: 1, nama_keahlian: "Photoshop", persen_keahlian: 65 },
  { skill_id: 3, user_id: 1, nama_keahlian: "UI/UX & Figma", persen_keahlian: 75 },
  { skill_id: 4, user_id: 1, nama_keahlian: "Canva", persen_keahlian: 85 },
  { skill_id: 5, user_id: 1, nama_keahlian: "CapCut", persen_keahlian: 75 },
];

export const services: Service[] = [
  {
    layanan_id: 1,
    nama_layanan: "Desain Grafis",
    deskripsi_layanan:
      "Menciptakan visual yang menarik dan profesional untuk berbagai kebutuhan branding dan marketing.",
    ikon_layanan: "bi-palette",
    link_layanan: "#",
    featured: 0,
  },
  {
    layanan_id: 2,
    nama_layanan: "UI/UX Design",
    deskripsi_layanan:
      "Merancang antarmuka pengguna yang intuitif dan pengalaman pengguna yang optimal.",
    ikon_layanan: "bi-layout-text-window-reverse",
    link_layanan: "#",
    featured: 1,
  },
  {
    layanan_id: 3,
    nama_layanan: "Web Development",
    deskripsi_layanan:
      "Mengembangkan website responsif dan fungsional menggunakan teknologi terkini.",
    ikon_layanan: "bi-code-slash",
    link_layanan: "#",
    featured: 0,
  },
  {
    layanan_id: 4,
    nama_layanan: "Mobile Development",
    deskripsi_layanan: "Membuat aplikasi mobile yang user-friendly dan performa tinggi.",
    ikon_layanan: "bi-phone",
    link_layanan: "#",
    featured: 0,
  },
  {
    layanan_id: 5,
    nama_layanan: "Video Editing",
    deskripsi_layanan:
      "Mengedit dan memproduksi konten video berkualitas tinggi untuk berbagai platform.",
    ikon_layanan: "bi-film",
    link_layanan: "#",
    featured: 0,
  },
  {
    layanan_id: 6,
    nama_layanan: "Ilustrasi Digital",
    deskripsi_layanan:
      "Membuat ilustrasi dan artwork digital yang unik dan menarik.",
    ikon_layanan: "bi-image",
    link_layanan: "#",
    featured: 0,
  },
];

export const experiences: Experience[] = [
  {
    pengalaman_id: 1,
    user_id: 1,
    jabatan: "Project Manager & Content Designer",
    nama_perusahaan: "Program Literasi Digital Komunitas Sukabumi",
    tahun_mulai: 2023,
    tahun_selesai: 2024,
    deskripsi:
      "Mengelola tim kecil untuk merancang materi literasi digital, membuat desain grafis kampanye, serta mengoordinasikan pelaksanaan workshop daring dan luring.",
  },
  {
    pengalaman_id: 2,
    user_id: 1,
    jabatan: "Front-End Developer (Freelance)",
    nama_perusahaan: "Website Booking Online Homestay Sukabumi",
    tahun_mulai: 2023,
    tahun_selesai: 2023,
    deskripsi:
      "Membangun antarmuka website booking online menggunakan HTML, CSS, dan JavaScript dengan fokus pada kemudahan pemesanan dan tampilan yang responsif.",
  },
  {
    pengalaman_id: 3,
    user_id: 1,
    jabatan: "Android Developer (Tim Proyek)",
    nama_perusahaan: "Aplikasi Rental Kendaraan Android",
    tahun_mulai: 2022,
    tahun_selesai: 2022,
    deskripsi:
      "Mengembangkan fitur pemesanan dan manajemen data kendaraan pada aplikasi Android untuk usaha rental, termasuk integrasi form pemesanan dan validasi data.",
  },
  {
    pengalaman_id: 4,
    user_id: 1,
    jabatan: "Full Stack Developer (Project Based Learning)",
    nama_perusahaan: "Sistem Informasi Sekolah",
    tahun_mulai: 2022,
    tahun_selesai: 2022,
    deskripsi:
      "Mendesain dan mengimplementasikan sistem informasi sederhana untuk pengelolaan data guru, siswa, dan jadwal, dengan stack berbasis PHP dan MySQL.",
  },
];

export const educations: Education[] = [
  {
    pendidikan_id: 1,
    user_id: 1,
    tingkat_gelar: "Sarjana (S1)",
    nama_gelar: "Teknik Informatika",
    nama_institusi: "Universitas Muhammadiyah Sukabumi (UMMI)",
    tahun_mulai: 2023,
    tahun_selesai: null,
    deskripsi:
      "Fokus pada pengembangan perangkat lunak, pemrograman web, dan pengembangan aplikasi dengan ketertarikan khusus pada desain antarmuka dan multimedia.",
  },
  {
    pendidikan_id: 2,
    user_id: 1,
    tingkat_gelar: "SMA",
    nama_gelar: "Ilmu Pengetahuan Alam (IPA)",
    nama_institusi: "SMA Al Umanaa Boarding School",
    tahun_mulai: 2019,
    tahun_selesai: 2022,
    deskripsi:
      "Mempelajari dasar-dasar sains dan logika yang kemudian menjadi landasan untuk melanjutkan studi ke bidang Teknik Informatika. Belajar 5 bahasa asing; Jepang, Jerman, Arab, Mandarin, dan Inggris.",
  },
];

export const certificates: Certificate[] = [
  { sertifikat_id: 1, user_id: 1, nama_sertifikasi: "Sertifikat Kompetisi Bahasa Jerman A1", tahun: 2021 },
  { sertifikat_id: 2, user_id: 1, nama_sertifikasi: "Sertifikat Kompetisi Bahasa Jerman A2", tahun: 2022 },
  { sertifikat_id: 3, user_id: 1, nama_sertifikasi: "Olimpiade IPA tingkat Provinsi Jawa Barat ", tahun: 2019 },
  { sertifikat_id: 5, user_id: 1, nama_sertifikasi: "Sertifikat Kompetisi English Debate", tahun: 2021 },
];

export const portfolioItems: PortfolioItem[] = [
  {
    project_id: 1,
    nama_proyek: "Jojo & Kiki - Ilustrasi Novel Romcom Pribadi",
    kategori_proyek: "illustration",
    tahun_proyek: 2022,
    deskripsi_proyek:
      "Ilustrasi dua karakter utama, Jojo dan Kiki, dari novel fiksi pribadi. Fokus pada ekspresi, dinamika hubungan, dan suasana malam di latar kota.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-1.webp",
  },
  {
    project_id: 2,
    nama_proyek: "Nahida - Genshin Impact Fanart",
    kategori_proyek: "illustration",
    tahun_proyek: 2023,
    deskripsi_proyek:
      "Fanart karakter Nahida dari game Genshin Impact, dengan penekanan pada ekspresi lembut, detail rambut, dan nuansa warna hijau cerah yang khas.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-2.webp",
  },
  {
    project_id: 3,
    nama_proyek: "Schmidt von Dietrich - Ilustrasi Novel Histori Fiksi",
    kategori_proyek: "illustration",
    tahun_proyek: 2023,
    deskripsi_proyek:
      "Ilustrasi sosok jenderal Jerman dari novel histori fiksi pribadi, menonjolkan detail seragam militer, gestur tubuh tegas, dan nuansa dramatis.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-3.webp",
  },
  {
    project_id: 4,
    nama_proyek: "Kageyama - Haikyuu!! Fanart",
    kategori_proyek: "illustration",
    tahun_proyek: 2021,
    deskripsi_proyek:
      "Fanart karakter Kageyama dari anime Haikyuu!! dengan gaya ilustrasi lembut, menonjolkan ekspresi tenang dan nuansa warna biru yang kalem.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-4.webp",
  },
  {
    project_id: 5,
    nama_proyek: "Avatar MBTI INTP - Ilustrasi Pribadi",
    kategori_proyek: "illustration",
    tahun_proyek: 2022,
    deskripsi_proyek:
      "Ilustrasi avatar karakter MBTI INTP yang merepresentasikan kepribadian pemilik CV. Fokus pada gaya kasual, warna lembut, dan ekspresi santai intelektual.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-5.webp",
  },
  {
    project_id: 6,
    nama_proyek: "Aiden - Ilustrasi Novel Office Modern Pribadi",
    kategori_proyek: "illustration",
    tahun_proyek: 2023,
    deskripsi_proyek:
      "Ilustrasi karakter lelaki berjas dari novel pribadi bertema office modern, menonjolkan gaya formal, ekspresi percaya diri, dan nuansa profesional.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-6.webp",
  },
  {
    project_id: 7,
    nama_proyek: "Karya favorit",
    kategori_proyek: "illustration",
    tahun_proyek: 2023,
    deskripsi_proyek:
      "Ilustrasi duo karakter berdasarkan tipe kepribadian MBTI dan Enneagram, menampilkan sosok ENTJ 8w7 berwibawa dengan garis tegas biru serta INTP 5w4 yang lembut dan pemalu dalam sketsa tinta magenta. Karya ini mengeksplorasi dinamika hubungan dua kepribadian kontras melalui ekspresi, bahasa tubuh, dan komposisi warna yang merepresentasikan kontras shadow function.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-7.webp",
  },
  {
    project_id: 8,
    nama_proyek: "Katakura Kojūrō – Sengoku Basara Fanart",
    kategori_proyek: "illustration",
    tahun_proyek: 2022,
    deskripsi_proyek:
      "Fanart Katakura Kojūrō dari Sengoku Basara, digambar dengan detail gaya semi-realistic anime dan nuansa samurai klasik. Karya ini menonjolkan ekspresi tegas, anatomi karakter yang kuat, serta detail kostum dan pedang yang menjadi ciri khas karakter dalam game PS2.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-14.webp",
  },
  {
    project_id: 9,
    nama_proyek: "Friendship Cultural Illustration – Indonesia & Germany",
    kategori_proyek: "illustration",
    tahun_proyek: 2021,
    deskripsi_proyek:
      "Ilustrasi bertema persahabatan yang menggambarkan dua pen pal dari Indonesia dan Jerman, masing-masing mengenakan pakaian tradisional khas negara mereka. Dibuat untuk teman pena bernama Gabi di Dresden, karya ini memadukan gaya anime yang lembut, detail kostum budaya, dan kesan visual yang hangat.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-9.webp",
  },
  {
    project_id: 11,
    nama_proyek: "History Sista – Blog Analisis Sejarah & Musik Sabaton",
    kategori_proyek: "webdev",
    tahun_proyek: 2024,
    deskripsi_proyek:
      "History Sista adalah blog bertema sejarah yang menganalisis lirik-lirik lagu Sabaton dan menghubungkannya dengan peristiwa sejarah asli. Proyek ini dibuat untuk mata kuliah IMK dengan fokus pada desain yang mudah dibaca, navigasi yang sederhana, dan tampilan bertema militer-historis. Konten disajikan secara storytelling sehingga pengguna dapat memahami kisah sejarah melalui pendekatan yang lebih menarik.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-23.webp",
  },
  {
    project_id: 12,
    nama_proyek: "TI CUP 2025 Poster",
    kategori_proyek: "graphic",
    tahun_proyek: 2025,
    deskripsi_proyek:
      "Desain poster untuk TI CUP 2025, turnamen futsal antar prodi oleh HMIF UMMI. Menggunakan elemen modern sporty dengan tipografi tegas dan warna biru–kuning, poster ini menyampaikan informasi acara secara jelas dan menarik.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-12.webp",
  },
  {
    project_id: 14,
    nama_proyek: "Logo Angkatan SMA (AU - Sabda 22)",
    kategori_proyek: "graphic",
    tahun_proyek: 2022,
    deskripsi_proyek:
      "Logo simbol untuk Angkatan SMA di Pondok Pesantren Al Umanaa (AU), menggambarkan semangat dengan elemen lebah sebagai ikon pesantren, dan simbol AU & S2 yang merujuk pada Sabda 22.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-19.webp",
  },
  {
    project_id: 15,
    nama_proyek: "Logo PGW (Pengabdian Masyarakat Workshop Google Workspace 2024)",
    kategori_proyek: "graphic",
    tahun_proyek: 2024,
    deskripsi_proyek:
      "Logo untuk kegiatan Pengabdian Masyarakat Workshop Google Workspace (PGW), proyek penelitian dosen yang berfokus pada teknologi dan kolaborasi melalui Google Workspace.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-16.webp",
  },
  {
    project_id: 16,
    nama_proyek: "Stiker Maskot Masfak Saintek 2025",
    kategori_proyek: "graphic",
    tahun_proyek: 2025,
    deskripsi_proyek:
      "Desain stiker maskot untuk acara orientasi mahasiswa Masfak Saintek 2025, dengan gaya kartun futuristik yang mencerminkan tema sains dan teknologi.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-10.webp",
  },
  {
    project_id: 17,
    nama_proyek: "Maskot Resmi Masfak Saintek 2025",
    kategori_proyek: "graphic",
    tahun_proyek: 2025,
    deskripsi_proyek:
      "Ilustrasi maskot resmi untuk acara orientasi mahasiswa Masfak Saintek 2025, dengan gaya kartun futuristik yang menampilkan karakter serangga-robotik bertema sains dan teknologi.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-13.webp",
  },
  {
    project_id: 18,
    nama_proyek: "Fanart William James Moriarty – Self Insert",
    kategori_proyek: "illustration",
    tahun_proyek: 2021,
    deskripsi_proyek:
      "Fanart karakter William James Moriarty dari anime Moriarty the Patriot dengan self-insert pribadi, digambar dengan gaya semi-realistis dan tone warna lembut.",
    gambar_proyek_url: "/assets/img/portfolio/portfolio-18.webp",
  },
];