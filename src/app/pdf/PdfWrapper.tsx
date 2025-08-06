// src/app/pdf/PdfWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { ComponentType } from "react";

// 👇 dynamic import trong Client Component
const PdfViewer = dynamic(() => import("../../app/components/PdfViewer") as Promise<{ default: ComponentType }>, {
    ssr: false,
});

export default function PdfWrapper() {
    return <PdfViewer />;
}
