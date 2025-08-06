"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TableView from "@/app/components/TableView";
import InputFields from "@/app/components/InputFields";
import CategorizedList from "@/app/components/CategorizedList";
import data from "../app/mockData.json";

export default function HomePage() {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeTabPath, setActiveTabPath] = useState<[number, number] | null>(null);
    const router = useRouter();

    const activeCategory = data.categories[activeCategoryIndex];
    const activeTab = activeTabPath
        ? data.categories[activeTabPath[0]].tabs[activeTabPath[1]]
        : null;

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
            <aside className="w-1/5 min-w-[220px] border-r border-gray-200 bg-gradient-to-b from-blue-100 to-blue-200 shadow-lg p-5 overflow-y-auto">
                <h2 className="text-xl font-bold mb-6 text-blue-800 tracking-wide">📁 Danh mục</h2>
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
            <main className="flex-1 flex flex-col p-6 overflow-y-auto bg-white/60 rounded-l-3xl">
                {activeTabPath ? (
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Left: Form or Table */}
                        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 border border-blue-100 transition duration-300 hover:shadow-2xl">
                            {renderTabContent()}
                        </div>

                        {/* Right: PDF Viewer */}
                        <div className="w-full lg:w-1/3 h-[600px] rounded-2xl border border-green-200 shadow-lg overflow-hidden">
                            <iframe
                                src={activeTab?.pdfUrl}
                                className="w-full h-full rounded-xl"
                                title="PDF Viewer"
                            />
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
