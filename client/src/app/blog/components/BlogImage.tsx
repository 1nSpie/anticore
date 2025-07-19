"use client";

import { useState } from "react";
import { blogApiClient } from "../blogApi";

interface BlogImageProps {
  filename?: string;
  alt: string;
  width?: number | string;
  height?: number| string;
  className?: string;
  fill?: boolean;
  sizes?: string;
  fallbackSrc?: string;
}

export default function BlogImage({
  filename,
  alt,
  width,
  height,
  className = "",
  sizes,
  fallbackSrc,
}: BlogImageProps) {
  const [imageError, setImageError] = useState(false);

  const getImageSrc = () => {
    if (!filename || imageError) {
      return fallbackSrc || "/blog/placeholder-image.jpg";
    }

    // If filename already includes a full URL, use it as-is
    if (filename.startsWith("http") || filename.startsWith("/")) {
      return filename;
    }

    // Otherwise, construct the URL using the API client
    return blogApiClient.getBlogImageUrl(filename);
  };

  const handleError = () => {
    setImageError(true);
  };

  const FallbackImage = () => (
    <div
      className={`bg-gray-200 dark:bg-gray-600 flex items-center justify-center ${className}`}
    >
      <span className="text-gray-500 dark:text-gray-400 text-sm">
        {alt || "Изображение статьи"}
      </span>
    </div>
  );

  if ((!filename || imageError) && !fallbackSrc) {
    return <FallbackImage />;
  }

  const imageProps = {
    src: getImageSrc(),
    alt,
    className: `transition-opacity duration-300 ${className}`,
    onError: handleError,
    sizes,
    width,
    height,
  };

  // eslint-disable-next-line @next/next/no-img-element
  return <img {...imageProps} style={{ objectFit: "cover" }} alt={alt} />;
}

// Specialized components for common use cases
export function BlogThumbnail({
  filename,
  alt,
  className = "w-full h-48 object-cover",
}: {
  filename?: string;
  alt: string;
  className?: string;
}) {
  return (
    <BlogImage
      filename={filename}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
}

export function BlogHeroImage({
  filename,
  alt,
  className = "w-full h-64 md:h-96 object-cover",
}: {
  filename?: string;
  alt: string;
  className?: string;
}) {
  return (
    <BlogImage
      filename={filename}
      alt={alt}
      className={className}
      sizes="100vw"
    />
  );
}
