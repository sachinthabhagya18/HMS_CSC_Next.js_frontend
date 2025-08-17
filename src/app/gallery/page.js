import styles from './Gallery.module.css';
import Image from 'next/image';

export default function GalleryPage() {
  const images = [
    '/images/gallery-square/1.webp',
    '/images/gallery-square/2.webp',
    '/images/gallery-square/3.webp',
    '/images/gallery-square/4.webp',
    '/images/gallery-square/5.webp',
    '/images/gallery-square/6.webp',
  ];

  return (
    <div className="container-fluid p-0">
      <section
        className="position-relative"
        style={{
          height: '50vh',
          backgroundImage: 'url("/images/gallery-mix/pool.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="d-flex flex-column justify-content-center align-items-center text-white text-center h-100">
          <h1 className="display-3 mb-2">Gallery</h1>
          <p className="h4">Home / Gallery</p>
        </div>
      </section>

      {/* Header Section */}
      <div className="bg-light py-4 mb-4">
        <div className="container">
          <h1 className="display-5 mb-3">Our Gallery</h1>
          <p className="lead text-muted">Explore our luxurious facilities and accommodations</p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container py-4">
        <div className="row">
          {images.map((src, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className={styles['gallery-item']}>
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  layout="responsive"
                  width={600}
                  height={400}
                  className="img-fluid"
                />
                <div className={`${styles.overlay} d-flex justify-content-center align-items-center`}>
                  <p className={`${styles['overlay-text']} mb-0`}>View</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}