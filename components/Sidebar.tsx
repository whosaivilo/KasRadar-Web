"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LayoutGrid, ArrowRightLeft, FileSpreadsheet, Settings, LogOut } from "lucide-react";

const menuItems = [
    { name: "Dashboard", icon: LayoutGrid, path: "/" },
    { name: "Transaksi", icon: ArrowRightLeft, path: "/transaksi" },
    { name: "Laporan", icon: FileSpreadsheet, path: "/laporan" },
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 h-screen bg-[#111827] text-gray-300 flex flex-col sticky top-0 border-r border-gray-800">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3 border-b border-gray-800">
                <Image src="/logo (2).png" alt="KasRadar" width={50} height={50} className="object-contain" />
                <div className="font-bold text-xl tracking-tight text-white">
                    KasRadar
                </div>
            </div>

            {/* Navigasi */}
            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium ${isActive
                                    ? "bg-blue-700 text-white shadow-sm"
                                    : "hover:bg-gray-800 hover:text-white"
                                }`}
                        >
                            <item.icon className="w-4 h-4 opacity-80" />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>
            
            {/* Nav Footer */}
            <div className="p-4 border-t border-gray-800">
                <Link href="/pengaturan" className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-sm font-medium hover:bg-gray-800 hover:text-white mb-2">
                    <Settings className="w-4 h-4 opacity-80" />
                    Pengaturan
                </Link>
                <div className="px-3 py-2 flex items-center gap-3 mt-4">
                    <div className="h-8 w-8 rounded bg-gray-700 flex items-center justify-center text-xs font-semibold text-white">
                        UK
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <div className="text-sm font-medium text-white truncate">UMKM Kopi</div>
                        <div className="text-xs text-gray-500 truncate">Administrator</div>
                    </div>
                    <button className="text-gray-500 hover:text-white transition-colors">
                        <LogOut className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </aside>
    );
}