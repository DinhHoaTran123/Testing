"use client";

import { useState } from "react";

interface InputFieldsProps {
    defaultInput: {
        name: string;
        email: string;
        message: string;
    };
}

const InputFields = ({ defaultInput }: InputFieldsProps) => {
    const [formData, setFormData] = useState(defaultInput);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        console.log("Submitted data:", formData);
        // Add your actual submit logic here (e.g. API call)
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-2xl shadow-lg space-y-6 border border-gray-200 text-black"
        >
            <h2 className="text-xl font-semibold text-gray-800">📝 Form nhập liệu</h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên</label>
                    <input
                        type="text"
                        placeholder="Nhập tên của bạn"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData?.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Email của bạn"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData?.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Lời nhắn</label>
                    <textarea
                        placeholder="Nhập lời nhắn..."
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData?.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                </div>
            </div>

            <button
                type="submit"
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition duration-200"
            >
                Gửi thông tin
            </button>

            {submitted && (
                <p className="text-green-600 text-sm mt-2">✅ Gửi thành công!</p>
            )}
        </form>
    );
};

export default InputFields;
