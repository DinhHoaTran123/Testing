'use client'

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

export default function PdfViewer() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

    const [numPages, setNumPages] = useState<number | null>(null);

    return (

        <div className="p-4">
            <div>
                <h1>Preview PDF</h1>
                <iframe src="/sample.pdf" width="100%" height="600px" />
            </div>
            <Document
                file="/sample.pdf"
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            >
                <>
                    {Array.from({ length: numPages || 0 }, (_, i) => (
                        <Page key={i + 1} pageNumber={i + 1} />
                    ))}
                </>
            </Document>
        </div>
    );
}
