"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageModal } from "./image-modal";

interface ClickableImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
}

export function ClickableImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  quality,
}: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer transition-transform hover:scale-[1.02]"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
          quality={quality}
        />
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        src={src}
        alt={alt}
      />
    </>
  );
}
