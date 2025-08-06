export interface Tab {
    name: string;
    type: "table" | "input";
    data?: any[]; // Cho table
    defaultInput?: { name: string; value: string }[]; // Cho input
    pdfUrl?: string;
}

export interface Category {
    name: string;
    pdfUrl: string;
    tabs: Tab[];
}

type Props = {
    categories: Category[];
    activeCategoryIndex: number;
    onCategorySelect: (index: number) => void;
    onTabSelect: (catIndex: number, tabIndex: number) => void;
};

export default function CategorizedList({
                                            categories,
                                            activeCategoryIndex,
                                            onCategorySelect,
                                            onTabSelect,
                                        }: Props) {
    return (
        <div className="space-y-4">
            {categories.map((category, catIdx) => (
                <div key={catIdx}>
                    {/* Category Name */}
                    <div
                        className={`cursor-pointer px-2 py-1 rounded-md font-semibold transition-all
                            ${
                            activeCategoryIndex === catIdx
                                ? "bg-blue-100 text-blue-700 border-l-4 border-blue-500"
                                : "text-gray-800 hover:bg-blue-50"
                        }`}
                        onClick={() => onCategorySelect(catIdx)}
                    >
                        {category.name}
                    </div>

                    {/* Tabs under each Category */}
                    {activeCategoryIndex === catIdx && (
                        <div className="ml-4 mt-1 space-y-1">
                            {category.tabs.map((tab, tabIdx) => (
                                <div
                                    key={tabIdx}
                                    className="cursor-pointer px-2 py-1 text-sm text-gray-700 rounded-md hover:bg-blue-100 hover:text-blue-700 transition-all"
                                    onClick={() => onTabSelect(catIdx, tabIdx)}
                                >
                                    • {tab.name}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}