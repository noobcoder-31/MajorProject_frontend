import React from "react";

const ImageGallery = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1694475335011-c2d9e97b1714?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsZXIlMjBpbmRpYW58ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1693845609546-d92c85c078a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGVyJTIwaW5kaWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1693845804012-247c7995a74c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbGVyJTIwaW5kaWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1610045828351-3f9737ca7bd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyYXZlbGVyJTIwaW5kaWFufGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1566873535350-a3f5d4a804b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHx0cmF2ZWxlciUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1488861859915-4b5a5e57649f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHx0cmF2ZWxlciUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1534418984967-a2b9c7f3f0d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHx0cmF2ZWxlciUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1461237439866-5a557710c921?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIxfHx0cmF2ZWxlciUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1516477945789-dfb63fb7c350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHx0cmF2ZWxlciUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1528195135899-cf5d190bb3a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHx0cmF2ZWxlciUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1498712681408-fdcfb0eca86e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ1fHx0cmF2ZWxlciUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1590106988183-1770b81eb564?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgwfHx0cmF2ZWxlciUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1480440088897-579291f82dab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsZXIlMjBpbmRpYW58ZW58MHx8MHx8fDA%3D",
  ];
  return (
    <div className="py-8 ml-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Image Gallery</h2>
      <div className="grid grid-rows-3 gap-4">
        {[...Array(3)].map((_, rowIndex) => (
          <div
            key={rowIndex}
            className="flex overflow-x-auto pb-4 last:pb-0 space-x-4"
          >
            {images
              .slice(rowIndex * 4, rowIndex * 4 + 5)
              .map((image, index) => (
                <div
                  key={index}
                  className="relative group rounded-lg overflow-hidden shadow-md"
                >
                  <img
                    src={image}
                    alt={"some image"}
                    className="w-64 h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {image.caption}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
