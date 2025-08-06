"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import TableView from "@/app/components/TableView";
import InputFields from "@/app/components/InputFields";
import CategorizedList from "@/app/components/CategorizedList";
import data from "../app/mockData.json";

export default function HomePage() {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeTabPath, setActiveTabPath] = useState<[number, number] | null>(null);
    const [pdfExists, setPdfExists] = useState<boolean>(true);
    const router = useRouter();

    const activeTab = activeTabPath
        ? data.categories[activeTabPath[0]].tabs[activeTabPath[1]]
        : null;

    // Check PDF exists or not
    useEffect(() => {
        const checkPDF = async () => {
            if (activeTab?.pdfUrl) {
                try {
                    const res = await fetch(activeTab.pdfUrl, { method: 'HEAD' });
                    setPdfExists(res.ok);
                } catch (err) {
                    setPdfExists(false);
                }
            } else {
                setPdfExists(false);
            }
        };

        checkPDF();
    }, [activeTab?.pdfUrl]);

    const renderTabContent = () => {
        if (!activeTab) return null;
        if (activeTab.type === "table") {
            return <TableView data={activeTab.data} tabName={activeTab.name} />;
        } else if (activeTab.type === "input") {
            return <InputFields defaultInput={activeTab.defaultInput} tabName={activeTab.name} />;
        }
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-800">
            {/* Sidebar */}
            <aside className="w-1/5 min-w-[240px] border-r border-gray-200 bg-gradient-to-b from-blue-100 to-blue-200 shadow-xl p-5 overflow-y-auto">
                <h2 className="text-xl font-extrabold mb-6 text-blue-800 tracking-wide">📁 Danh mục</h2>
                <CategorizedList
                    categories={data.categories}
                    activeCategoryIndex={activeCategoryIndex}
                    onCategorySelect={(catIndex) => {
                        setActiveCategoryIndex(catIndex);
                        setActiveTabPath(null);
                    }}
                    onTabSelect={(catIndex, tabIndex) => {
                        setActiveCategoryIndex(catIndex);
                        setActiveTabPath([catIndex, tabIndex]);
                    }}
                />
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col p-6 overflow-y-auto bg-white/70 rounded-l-3xl">
                {activeTabPath ? (
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Main Content */}
                        <div className="flex-1 bg-white rounded-2xl shadow-2xl p-6 border border-blue-100 transition duration-300 hover:shadow-blue-300">
                            {renderTabContent()}
                        </div>

                        {/* PDF Viewer */}
                        <div className="w-full lg:w-1/3 h-[600px] rounded-2xl border border-green-200 shadow-lg overflow-hidden flex items-center justify-center bg-white transition duration-300 hover:shadow-green-300">
                            {pdfExists ? (
                                <iframe
                                    src={activeTab?.pdfUrl}
                                    className="w-full h-full rounded-xl"
                                    title="PDF Viewer"
                                />
                            ) : (
                                <div className="text-center text-gray-500 p-6 space-y-2">
                                    <div className="text-4xl">📄</div>
                                    <div className="text-lg font-medium">Không tìm thấy tài liệu PDF</div>
                                    <p className="text-sm text-gray-400">Vui lòng chọn tab khác hoặc kiểm tra đường dẫn tài liệu.</p>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-600 text-center mt-32 italic text-lg">
                        👉 Hãy chọn một loại và tab để bắt đầu nhập dữ liệu hoặc xem bảng.
                    </div>
                )}
            </main>
        </div>
    );
}
