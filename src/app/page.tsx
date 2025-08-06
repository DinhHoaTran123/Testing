"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TableView from "@/app/components/TableView";
import InputFields from "@/app/components/InputFields";
import CategorizedList from "@/app/components/CategorizedList";
import data from "../app/mockData.json";


export default function HomePage() {
    const [activeTab, setActiveTab] = useState(1);
    const router = useRouter();


    const renderTabContent = () => {
        if (activeTab <= 2) return <TableView tab={activeTab} />;
        return <InputFields tab={activeTab} />;
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <div className="w-1/3 border-r border-gray-200 p-6 bg-white shadow-sm overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Danh mục</h2>
                <CategorizedList />

                <button
                    onClick={() => router.push("/pdf")}
                    className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-lg shadow transition duration-200"
                >
                    Xem PDF
                </button>
            </div>

            <div className="w-2/3 p-6">
                <div className="flex space-x-2 mb-6">
                    {data.tabNames.map((tab, index) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 rounded-lg font-medium transition duration-200 ${
                                activeTab === index
                                    ? "bg-blue-600 text-white shadow"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="bg-white shadow rounded-lg p-6">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
}
