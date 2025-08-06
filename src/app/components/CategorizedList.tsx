import data from "../mockData.json";

const CategorizedList = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">📂 Danh mục sản phẩm</h2>
            <div className="space-y-6">
                {data.categories.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-lg font-semibold text-blue-700 mb-2">{category.name}</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            {category.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorizedList;
