"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
  alt: string;
}

export function ImageModal({ isOpen, onClose, src, alt }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] p-0 bg-transparent border-0">
        <div className="relative w-full max-h-[90vh] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="w-full h-auto object-contain"
            quality={100}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
