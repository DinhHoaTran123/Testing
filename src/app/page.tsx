"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TableView from "@/app/components/TableView";
import InputFields from "@/app/components/InputFields";
import CategorizedList from "@/app/components/CategorizedList";
import data from "../app/mockData.json";

export default function HomePage() {
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [activeTabPath, setActiveTabPath] = useState<[number, number] | null>(null); // [categoryIndex, tabIndex]
    const router = useRouter();

    const activeCategory = data.categories[activeCategoryIndex];
    const activeTab = activeTabPath
        ? data.categories[activeTabPath[0]].tabs[activeTabPath[1]]
        : null;

    const renderTabContent = () => {
        if (!activeTab) return null;
        if (activeTab.type === "table") {
            return <TableView data={activeTab.data} tabName={activeTab.name} />;
        } else if(activeTab.type === "input"){
            return <InputFields defaultInput={activeTab.defaultInput} tabName={activeTab.name} />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/5 border-r border-gray-300 p-4 bg-white shadow-md overflow-y-auto">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">Danh mục</h2>
                <CategorizedList
                    categories={data.categories}
                    activeCategoryIndex={activeCategoryIndex}
                    onCategorySelect={(catIndex) => {
                        setActiveCategoryIndex(catIndex);
                        setActiveTabPath(null); // reset tab path
                    }}
                    onTabSelect={(catIndex, tabIndex) => {
                        setActiveCategoryIndex(catIndex);
                        setActiveTabPath([catIndex, tabIndex]);
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="w-4/5 flex flex-col p-6 space-y-6 overflow-y-auto">
                {activeTabPath ? (
                    <>
                        <div className="flex space-x-6">
                            <div className="flex-1 bg-white rounded-xl shadow-md p-6 overflow-x-auto">
                                {renderTabContent()}
                            </div>
                            <div className="w-1/3 h-[600px]">
                                <iframe
                                    src={activeTab?.pdfUrl}
                                    className="w-full h-full border rounded-lg shadow"
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-gray-500 italic">Chọn một tab con để xem nội dung.</div>
                )}
            </div>
        </div>
    );
}
