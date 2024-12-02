interface MediaItem {
  id: number;
  type: "photo" | "video";
  src: string;
  alt?: string;
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "photo",
    src: "https://i.ibb.co.com/gzQT8b4/pexels-riciardus-307008.jpg",
    alt: "Beautiful Mountain View",
  },
  {
    id: 2,
    type: "photo",
    src: "https://i.ibb.co.com/db8KZHm/pexels-andreimike-1271619.jpg",
    alt: "Sunset at the Beach",
  },
  {
    id: 3,
    type: "video",
    src: "https://www.youtube.com/embed/Mf_nGEPIsQ8?si=AjMwTsmzRk3PmOXi",
    alt: "Travel Highlights",
  },
//   {
//     id: 4,
//     type: "photo",
//     src: "https://via.placeholder.com/400",
//     alt: "City Skyline",
//   },
  {
    id: 5,
    type: "video",
    src: "https://www.youtube.com/embed/qLh99Cxb1e0?si=98qL0j7DPU9_vbUw",
    alt: "Adventure Video",
  },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-16" id="gallery">
      <div className="container mx-auto px-6 text-center">
        <h2 className="md:text-4xl font-popins text-3xl font-bold text-gray-800 mb-6">
          Photo & Video Gallery
        </h2>
        <p className="text-secondary text-xl font-medium font-barlow mb-12">
          Experience the beauty of our destinations through these stunning
          visuals.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {mediaItems.map((item) => (
            <div key={item.id} className="relative">
              {item.type === "photo" ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-72 object-cover rounded-lg shadow-md"
                />
              ) : (
                <iframe
                  src={item.src}
                  title={item.alt}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-72 rounded-lg shadow-md"
                ></iframe>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
