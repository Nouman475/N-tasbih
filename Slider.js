function Carousal() {
  return (
    <>
      <div id="carouselExample" className="carousel slide mt-1">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/021/773/953/small_2x/magnificent-mosque-illuminated-by-moonlight-during-full-moon-ai-generated-photo.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://myindianthings.com/cdn/shop/products/Mosque_Islamic_Wallpaper_mockup_e8c08625-2e84-4ca3-9faa-ef630c538ada_800x.jpg?v=1710480024" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://myindianthings.com/cdn/shop/products/Ayatul_Kursi_Islamic_Wallpaper_mockup_29095e99-c8e9-4d6e-81f0-ccb2f4b9a33b_800x.jpg?v=1710479989" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousal