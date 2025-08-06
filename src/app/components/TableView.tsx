interface TableViewProps {
    data: { name: string }[];
    tabName: string;
}

const TableView = ({ data = [], tabName }: TableViewProps) => {
    return (
        <table className="text-black min-w-full table-auto border border-gray-300 rounded-md overflow-hidden text-sm">
            <thead className="bg-gray-100 text-black">
            <tr>
                <th className="border px-4 py-2 text-left text-black">STT</th>
                <th className="border px-4 py-2 text-left text-black">{tabName}</th>
            </tr>
            </thead>
            <tbody>
            {data.length === 0 ? (
                <tr>
                    <td colSpan={2} className="text-center p-4 text-gray-500">
                        Không có dữ liệu.
                    </td>
                </tr>
            ) : (
                data.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{row.name}</td>
                    </tr>
                ))
            )}
            </tbody>
        </table>
    );
};

export default TableView;
