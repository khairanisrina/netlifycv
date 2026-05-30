"use client";

import { services } from "@/lib/seed";

export default function Services() {
  return (
    <section id="services" data-aos="fade-left" className="services section">
      <div className="container section-title">
        <span className="subtitle">Services</span>
        <h2>Layanan Saya</h2>
        <p>
          Berbagai layanan profesional yang saya tawarkan untuk membantu
          mewujudkan visi dan misi bisnis Anda.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.length === 0 && <p>Belum ada data layanan yang tersedia.</p>}

          {services.map((service, index) => (
            <div key={service.layanan_id} className="col-lg-3 col-md-6">
              <div
                data-aos="fade-up"
                data-aos-delay={`${index * 80}`}
                className={`service-item ${
                  service.featured ? "featured" : ""
                }`}
              >
                {service.featured ? (
                  <div className="featured-tag">Featured</div>
                ) : null}

                <div className="icon-wrapper">
                  <i className={`bi ${service.ikon_layanan}`}></i>
                </div>

                <h4>{service.nama_layanan}</h4>
                <p>{service.deskripsi_layanan}</p>

                {service.link_layanan && service.link_layanan !== "#" && (
                  <a href={service.link_layanan} className="read-more">
                    <span>Selengkapnya</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="cta-box">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3>Siap untuk Memulai Proyek Bersama?</h3>
                  <p>
                    Mari kita diskusikan ide Anda dan ciptakan solusi terbaik
                    yang sesuai dengan kebutuhan Anda.
                  </p>
                </div>
                <div className="col-lg-4 text-lg-end text-center">
                  <a href="#contact" className="cta-btn">
                    Hubungi Saya
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
