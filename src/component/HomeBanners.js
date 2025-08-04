'use client';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";

export default function HomeBanners() {
  const [bannerList, setBannerList] = useState(null); // Initialize as null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:8000/api/banners');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setBannerList(data);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div className="text-center py-5">Loading banners...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;
  if (!bannerList?.results?.length) return <div className="alert alert-info">No banners available</div>;

  return (
    <Carousel 
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      showStatus={false}
    >
      {bannerList.results.map((item, index) => (
        <div key={index} className="carousel-slide">
          <Image 
            src={item.image} 
            alt={item.title || `Banner ${index + 1}`}
            className="carousel-image"
            onError={(e) => {
              e.target.src = '/default-banner.jpg';
              e.target.alt = 'Default banner';
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}