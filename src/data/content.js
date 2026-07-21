export const content = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      contact: "Kontak"
    },
    hero: {
      greeting: "Halo, saya",
      name: "Mitha Dwi Pranindya",
      tagline: "Mahasiswa Sains Data Terapan di Politeknik Elektronika Negeri Surabaya (PENS) dengan fokus pada Data Analytics, Data Science, Machine Learning, dan Business Intelligence. Saya senang mengubah data menjadi solusi yang bermanfaat melalui analisis, pengembangan model machine learning, visualisasi data, serta perancangan dan pengembangan website yang menyajikan insight secara interaktif untuk mendukung pengambilan keputusan.",
      resumeBtn: "Resume",
      contactBtn: "Hubungi Saya"
    },
    about: {
      title: "Tentang Saya",
      bioTitle: "Bio",
      bio: [
        "Seorang penggemar data yang fokus mengubah dataset kompleks menjadi solusi yang dapat langsung diterapkan. Saya memiliki pengalaman langsung dalam merancang alur data (data pipeline) dan mengimplementasikan model machine learning untuk menyelesaikan permasalahan nyata melalui riset dan proyek kolaboratif."
      ],
      education: {
        title: "Pendidikan",
        degree: "Sarjana Terapan Sains Data",
        institution: "Politeknik Elektronika Negeri Surabaya",
        period: "Agustus 2023 - Sekarang",
        gpa: "IPK: 3.64/4.00"
      },
      certifications: {
        title: "Sertifikasi",
        items: [
          "Advanced Data Visualization in Tableau (2024)",
          "Advanced Dashboard Design in Power BI (2024)",
          "Advanced Metrics & Monitoring in Grafana (2024)"
        ]
      },
      tools: {
        title: "Tools & Stack",
        items: ["Python", "TensorFlow", "YOLO", "Pandas", "NumPy", "Scikit-learn", "PostgreSQL", "MySQL", "Tableau", "Power BI", "Grafana", "Git"]
      },
      skills: {
        sectionTitle: "Keahlian",
        categories: [
          {
            key: "cv",
            title: "Computer Vision",
            tags: ["YOLO v8/v11", "TensorFlow", "Deteksi Objek", "Pelacakan Objek", "Pengolahan Citra"]
          },
          {
            key: "ml",
            title: "Machine Learning & AI",
            tags: ["Regresi", "Klasifikasi", "Klasterisasi", "Predictive Modeling", "Feature Engineering"]
          },
          {
            key: "lang",
            title: "Bahasa & Framework",
            tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "SQL", "PostgreSQL", "MySQL"]
          },
          {
            key: "viz",
            title: "Visualisasi Data",
            tags: ["Tableau", "Power BI", "Grafana", "Recharts"]
          },
          {
            key: "tools",
            title: "Tools & DevOps",
            tags: ["Git", "GitHub", "Model Deployment", "Jupyter", "VS Code"]
          },
          {
            key: "soft",
            title: "Soft Skill",
            tags: ["Berpikir Analitis", "Pemecahan Masalah", "Kerja Tim", "Kepemimpinan", "Koordinasi Proyek", "Komunikasi Teknis"]
          }
        ]
      },
      experience: {
        title: "Pengalaman",
        work: [
          {
            role: "Magang Data Scientist",
            org: "PT. PLN (Persero) UP3 Surabaya Utara",
            period: "Januari 2026 - Mei 2026",
            desc: "Berkontribusi dalam pengembangan sistem deteksi anomali berbasis web untuk pemantauan penggunaan listrik dan identifikasi kecurangan. Menerapkan teknik machine learning untuk menganalisis pola konsumsi yang tidak wajar serta membangun dashboard real-time guna mendukung pemantauan operasional dan pengambilan keputusan berbasis data."
          }
        ],
        orgs: [
          {
            role: "Kepala Divisi Hubungan Masyarakat",
            org: "IEEE PENS",
            period: "Januari 2026 - Sekarang",
            desc: "Mengelola divisi Hubungan Masyarakat, menangani komunikasi dan media relations. Menyelenggarakan dan mempromosikan acara teknis, seminar, serta workshop."
          },
          {
            role: "Perencanaan & Koordinasi Misi",
            org: "ESPYRO TEAM - KRTI ROBOTICS",
            period: "Februari 2024 - Februari 2026",
            desc: "Berkontribusi dalam perancangan, pengembangan, dan pengujian sistem UAV untuk kompetisi tingkat nasional. Membantu perencanaan misi, dokumentasi, dan koordinasi untuk keberhasilan partisipasi kompetisi."
          },
          {
            role: "Kementerian Sosial",
            org: "BEM PENS",
            period: "November 2024 - November 2025",
            desc: "Merencanakan dan melaksanakan program sosial untuk pemberdayaan masyarakat dan kesejahteraan mahasiswa. Mengelola inisiatif outreach dan mendorong partisipasi aktif mahasiswa."
          },
          {
            role: "Petugas Hubungan Masyarakat",
            org: "CT Arsa Foundation Surabaya",
            period: "Mei 2024 - Mei 2025",
            desc: "Mengelola komunikasi dan hubungan masyarakat dengan mitra dan pemangku kepentingan. Menyelenggarakan acara komunitas dan mempromosikan inisiatif sosial."
          }
        ]
      },
      achievements: {
        title: "Pencapaian",
        items: [
          {
            title: "Juara 4 — Kontes Robot Terbang Indonesia (KRTI), Divisi Fixed Wing",
            period: "November 2025",
            desc: "Mewakili Politeknik Elektronika Negeri Surabaya dalam Kontes Robot Terbang Indonesia (KRTI) tingkat nasional, sebuah program inovasi kedirgantaraan yang diselenggarakan pemerintah. Berkontribusi sebagai panitia dengan mengelola koordinasi dan memastikan kepatuhan aturan untuk mendukung keberhasilan partisipasi tim UAV fixed-wing."
          }
        ]
      }
    },
    projects: {
      title: "Proyek",
      viewProject: "Lihat Proyek",
      viewCode: "Lihat Kode",
      items: [
        {
          id: "pln",
          title: "PLN Anomaly Detection",
          org: "PT. PLN (Persero) UP3 Surabaya Utara",
          period: "Januari 2026 - Mei 2026",
          desc: "Mengembangkan sistem deteksi anomali berbasis web untuk memantau penggunaan listrik, mengidentifikasi pola tidak wajar, dan potensi kecurangan pelanggan. Menerapkan model machine learning untuk mendeteksi konsumsi abnormal dan menghasilkan insight yang dapat ditindaklanjuti oleh tim operasional. Membangun dashboard interaktif untuk pemantauan real-time, mendukung pengambilan keputusan berbasis data dan meningkatkan efisiensi respons.",
          tech: ["Python", "Machine Learning", "Web Dashboard", "Data Visualization"],
          image: "/assets/projects/pln-ads.png",
          demo: null,
          repo: null,
          isPrivate: true
        },
        {
          id: "capsai",
          title: "CAPSAI — Chili Analytics Platform Supported by IoT and Artificial Intelligence",
          period: "November 2025",
          desc: "Merancang dan mengimplementasikan sistem pemantauan cerdas berbasis IoT untuk budidaya cabai, mengintegrasikan sensor lingkungan dan analitik cloud. Mengembangkan model prediktif untuk estimasi hasil panen dan deteksi penyakit menggunakan teknik machine learning guna meningkatkan produktivitas pertanian. Membangun dashboard visualisasi data interaktif untuk memberikan insight real-time, mendukung pertanian presisi dan pengambilan keputusan yang lebih tepat.",
          tech: ["IoT", "Machine Learning", "Data Visualization", "Cloud Analytics"],
          image: "/assets/projects/capsai.png",
          demo: "https://capsay.vercel.app",
          repo: "https://github.com/mithadp/capsay"
        },
        {
          id: "stylemate",
          title: "STYLEMATE — Website Mix and Match Outfit With Realtime Weather",
          period: "Februari 2025 - Juni 2025",
          desc: "Mengintegrasikan data cuaca real-time untuk menghasilkan rekomendasi pakaian yang sesuai konteks. Membangun aplikasi web full-stack menggunakan Next.js dan PostgreSQL untuk penyajian rekomendasi dan manajemen produk. Meningkatkan personalisasi dengan mencocokkan preferensi pengguna terhadap atribut pakaian dan kondisi lingkungan.",
          tech: ["Next.js", "PostgreSQL", "API Integration"],
          image: "/assets/projects/stylemate.png",
          demo: null,
          repo: "https://github.com/mithadp/style_mate"
        },
        {
          id: "xanalytics",
          title: "XAnalytics",
          desc: "Dashboard analitik untuk memantau engagement dan performa konten di platform X. Menampilkan tren keterlibatan per jam, distribusi bahasa konten, dan performa top posts.",
          tech: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
          image: "/assets/projects/xanalytics.png",
          demo: "https://x-analytic.vercel.app",
          repo: "https://github.com/mithadp/xanalytics"
        },
        {
          id: "avistore",
          title: "AVISTORE — Computer Vision Based Smart Retail Checkout System",
          period: "November 2025",
          desc: "Solusi checkout berbasis AI yang memanfaatkan deteksi objek YOLO dan model deep learning TensorFlow untuk pengenalan produk otomatis. Mengimplementasikan deteksi dan klasifikasi produk secara real-time dari camera stream untuk mempercepat proses checkout retail.",
          tech: ["YOLO", "TensorFlow", "Computer Vision", "Python"],
          image: "/assets/projects/avistore.png",
          demo: null,
          repo: "https://github.com/mithadp/Vistore"
        }
      ]
    },
    contact: {
      title: "Kontak",
      subtitle: "Mari terhubung! Saya terbuka untuk diskusi tentang data science, machine learning, atau peluang kolaborasi.",
      email: "mithadwipranindya@gmail.com",
      linkedin: "linkedin.com/in/mithadwipranindya",
      form: {
        name: "Nama",
        email: "Email",
        message: "Pesan",
        send: "Kirim"
      }
    },
    footer: {
      copyright: "© 2026 Mitha Dwi Pranindya. All rights reserved.",
      builtWith: "Dibangun dengan React + Tailwind CSS"
    }
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Mitha Dwi Pranindya",
      tagline: "Applied Data Science student at Politeknik Elektronika Negeri Surabaya (PENS) focused on Data Analytics, Data Science, Machine Learning, and Business Intelligence. I enjoy transforming data into meaningful solutions through analysis, machine learning model development, data visualization, and building websites that present insights interactively to support decision-making.",
      resumeBtn: "Resume",
      contactBtn: "Contact Me"
    },
    about: {
      title: "About Me",
      bioTitle: "Bio",
      bio: [
        "A data-driven enthusiast focused on transforming complex datasets into actionable solutions. I have hands-on experience designing data pipelines and implementing machine learning models to solve real-world problems through research and collaborative projects."
      ],
      education: {
        title: "Education",
        degree: "Bachelor of Applied Data Science",
        institution: "Politeknik Elektronika Negeri Surabaya",
        period: "August 2023 - Present",
        gpa: "GPA: 3.64/4.00"
      },
      certifications: {
        title: "Certifications",
        items: [
          "Advanced Data Visualization in Tableau (2024)",
          "Advanced Dashboard Design in Power BI (2024)",
          "Advanced Metrics & Monitoring in Grafana (2024)"
        ]
      },
      tools: {
        title: "Tools & Stack",
        items: ["Python", "TensorFlow", "YOLO", "Pandas", "NumPy", "Scikit-learn", "PostgreSQL", "MySQL", "Tableau", "Power BI", "Grafana", "Git"]
      },
      skills: {
        sectionTitle: "Skills",
        categories: [
          {
            key: "cv",
            title: "Computer Vision",
            tags: ["YOLO v8/v11", "TensorFlow", "Object Detection", "Object Tracking", "Image Processing"]
          },
          {
            key: "ml",
            title: "Machine Learning & AI",
            tags: ["Regression", "Classification", "Clustering", "Predictive Modeling", "Feature Engineering"]
          },
          {
            key: "lang",
            title: "Languages & Frameworks",
            tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "SQL", "PostgreSQL", "MySQL"]
          },
          {
            key: "viz",
            title: "Data Visualization",
            tags: ["Tableau", "Power BI", "Grafana", "Recharts"]
          },
          {
            key: "tools",
            title: "Tools & DevOps",
            tags: ["Git", "GitHub", "Model Deployment", "Jupyter", "VS Code"]
          },
          {
            key: "soft",
            title: "Soft Skills",
            tags: ["Analytical Thinking", "Problem-Solving", "Teamwork", "Leadership", "Project Coordination", "Technical Communication"]
          }
        ]
      },
      experience: {
        title: "Experience",
        work: [
          {
            role: "Data Scientist Internship",
            org: "PT. PLN (Persero) UP3 Surabaya Utara",
            period: "January 2026 - May 2026",
            desc: "Contributed to the development of a web-based anomaly detection system for electricity usage monitoring and fraud identification. Applied machine learning techniques to analyze abnormal consumption patterns and built real-time dashboards to support operational monitoring and data-driven decision making."
          }
        ],
        orgs: [
          {
            role: "Head of Public Relations Division",
            org: "IEEE PENS",
            period: "January 2026 - Present",
            desc: "Managed the Public Relations division, handling communications and media outreach. Organized and promoted technical events, seminars, and workshops."
          },
          {
            role: "Mission Planning & Coordination",
            org: "ESPYRO TEAM - KRTI ROBOTICS",
            period: "February 2024 - February 2026",
            desc: "Contributed to the design, development, and testing of UAV systems for national competitions. Assisted in mission planning, documentation, and coordination for successful contest participation."
          },
          {
            role: "Ministry of Social Affairs",
            org: "BEM PENS",
            period: "November 2024 - November 2025",
            desc: "Planned and executed social programs for community empowerment and student welfare. Managed outreach initiatives and promoted active student participation."
          },
          {
            role: "Public Relations Officer",
            org: "CT Arsa Foundation Surabaya",
            period: "May 2024 - May 2025",
            desc: "Managed communications and public relations with partners and stakeholders. Organized community events and promoted social initiatives."
          }
        ]
      },
      achievements: {
        title: "Achievements",
        items: [
          {
            title: "4th Runner-Up — Indonesian Flying Robot Contest (KRTI), Fixed Wing Division",
            period: "November 2025",
            desc: "Represented the Electronic Engineering Polytechnic Institute of Surabaya in the national Indonesian Flying Robot Contest (KRTI), a government-organized aerospace innovation program. Contributed as an official by managing coordination and ensuring compliance to support the fixed-wing UAV team's successful participation."
          }
        ]
      }
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      viewCode: "View Code",
      items: [
        {
          id: "pln",
          title: "PLN Anomaly Detection",
          org: "PT. PLN (Persero) UP3 Surabaya Utara",
          period: "January 2026 - May 2026",
          desc: "Developed a web-based anomaly detection system to monitor electricity usage, identifying irregular patterns and potential customer fraud. Applied machine learning models to detect abnormal consumption and generate actionable insights for operational teams. Built interactive dashboards for real-time monitoring, enabling data-driven decisions and improving response efficiency.",
          tech: ["Python", "Machine Learning", "Web Dashboard", "Data Visualization"],
          image: "/assets/projects/pln-ads.png",
          demo: null,
          repo: null,
          isPrivate: true
        },
        {
          id: "capsai",
          title: "CAPSAI — Chili Analytics Platform Supported by IoT and Artificial Intelligence",
          period: "November 2025",
          desc: "Designed and implemented an IoT-based smart monitoring system for chili cultivation, integrating environmental sensors and cloud analytics. Developed predictive models for yield estimation and disease detection using machine learning techniques to enhance agricultural productivity. Built an interactive data visualization dashboard to provide real-time insights, supporting precision agriculture and informed decision-making.",
          tech: ["IoT", "Machine Learning", "Data Visualization", "Cloud Analytics"],
          image: "/assets/projects/capsai.png",
          demo: "https://capsay.vercel.app",
          repo: "https://github.com/mithadp/capsay"
        },
        {
          id: "stylemate",
          title: "STYLEMATE — Website Mix and Match Outfit With Realtime Weather",
          period: "February 2025 - June 2025",
          desc: "Integrated real-time weather data to generate context-aware clothing recommendations. Built a full-stack web application using Next.js and PostgreSQL for recommendation delivery and product management. Improved personalization by matching user preferences with clothing attributes and environmental conditions.",
          tech: ["Next.js", "PostgreSQL", "API Integration"],
          image: "/assets/projects/stylemate.png",
          demo: null,
          repo: "https://github.com/mithadp/style_mate"
        },
        {
          id: "xanalytics",
          title: "XAnalytics",
          desc: "Analytics dashboard to monitor engagement and content performance on X platform. Displays hourly engagement trends, content language distribution, and top post performance.",
          tech: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
          image: "/assets/projects/xanalytics.png",
          demo: "https://x-analytic.vercel.app",
          repo: "https://github.com/mithadp/xanalytics"
        },
        {
          id: "avistore",
          title: "AVISTORE — Computer Vision Based Smart Retail Checkout System",
          period: "November 2025",
          desc: "AI-powered checkout solution utilizing YOLO object detection and TensorFlow deep learning models for automated product recognition. Implemented real-time product detection and classification from camera streams to streamline retail checkout processes.",
          tech: ["YOLO", "TensorFlow", "Computer Vision", "Python"],
          image: "/assets/projects/avistore.png",
          demo: null,
          repo: "https://github.com/mithadp/Vistore"
        }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect! I'm open to discussions about data science, machine learning, or collaboration opportunities.",
      email: "mithadwipranindya@gmail.com",
      linkedin: "linkedin.com/in/mithadwipranindya",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send"
      }
    },
    footer: {
      copyright: "© 2026 Mitha Dwi Pranindya. All rights reserved.",
      builtWith: "Built with React + Tailwind CSS"
    }
  }
};

export const profile = {
  name: "Mitha Dwi Pranindya",
  email: "mithadwipranindya@gmail.com",
  phone: "+62 812 3432 5310",
  linkedin: "https://linkedin.com/in/mithadwipranindya",
  github: "https://github.com/mithadp",
  location: "Surabaya, Jawa Timur",
  photo: "/assets/profile/mitha.jpg",
  heroPhoto: "/api/profile-photo",
  cv: "/assets/cv/CV_MITHA_DWI_PRANINDYA.pdf"
};