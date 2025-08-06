import data from "../mockData.json";


interface TableViewProps {
    tab: number;
}

const TableView = ({ tab }: TableViewProps) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-extrabold mb-6 text-blue-700 flex items-center space-x-2">
                <span>📊</span>
                <span>Dữ liệu bảng:</span>
                <span className="italic underline decoration-dashed text-gray-900">        {data.tabNames[tab]}
</span>
            </h2>
            <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full border-collapse bg-white text-sm">
                    <thead className="bg-gray-100 text-left text-gray-600">
                    <tr>
                        <th className="p-4 border-b border-gray-200">#</th>
                        <th className="p-4 border-b border-gray-200">Tên</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.tableData.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50 transition-all">
                            <td className="p-4 border-b text-black">{row.id}</td>
                            <td className="p-4 border-b font-medium text-gray-700">{row.name}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableView;
