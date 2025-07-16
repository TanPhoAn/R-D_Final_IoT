import React from "react";

const Documentation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">🐝 Beekeeping Documentation</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-3xl">
        Explore detailed guides, tutorials, and resources about bees,
        beekeeping, and hive management.
      </p>

      {/* Embedded YouTube Video - Bigger and More Prominent */}
      <div className="w-full max-w-5xl aspect-video mb-10">
        <iframe
          className="w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/HdBkgBSjFXM?autoplay=1&controls=1"
          title="Beekeeping Guide"
          frameBorder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Special Masonry Image Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="col-span-2">
          <img
            src="https://plus.unsplash.com/premium_photo-1661851293346-dfd1f54773bc?q=80&w=1896&auto=format&fit=crop"
            alt="Beekeeping"
            className="rounded-xl shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://plus.unsplash.com/premium_photo-1661434742944-35443ccf610b?q=80&w=2069&auto=format&fit=crop"
            alt="Beehive"
            className="rounded-xl shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="col-span-1">
          <img
            src="https://images.unsplash.com/photo-1508432116762-1f883098ed41?q=80&w=2072&auto=format&fit=crop"
            alt="Beekeeper"
            className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="col-span-2">
          <img
            src="https://images.unsplash.com/photo-1508432116762-1f883098ed41?q=80&w=2072&auto=format&fit=crop"
            alt="Honey Production"
            className="rounded-xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
