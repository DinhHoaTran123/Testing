"use client";

import { useState, useEffect } from "react";
import data from "../mockData.json";

interface InputFieldsProps {
    tab: number;
}

const InputFields = ({ tab }: InputFieldsProps) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Load lại dữ liệu form mỗi khi đổi tab
    useEffect(() => {
        const defaultForm = data.inputDefaults[tab] || { name: "", email: "", message: "" };
        setForm(defaultForm);
    }, [tab]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
                📝 Nhập liệu - {data.tabNames[tab]}
            </h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
                <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nhập tên"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm
                    placeholder-gray-400 text-base font-semibold text-black"
                />
                <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Nhập email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm
                    placeholder-gray-400 text-base font-medium text-black"
                />
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tin nhắn"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow-sm
                    placeholder-gray-400 text-base font-medium text-black"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition"
                >
                    🚀 Gửi đi
                </button>
            </form>
        </div>
    );
};

export default InputFields;
