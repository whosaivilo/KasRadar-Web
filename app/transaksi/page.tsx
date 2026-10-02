import { Search, Filter, Download } from "lucide-react";

const transaksiData = [
  { id: "TRX-1092", tanggal: "25 Okt 2023", nama: "Penjualan Produk (Invoice #42)", tipe: "Pemasukan", kategori: "Pendapatan Usaha", nominal: 12500000, status: "Selesai" },
  { id: "TRX-1091", tanggal: "25 Okt 2023", nama: "Pembelian Bahan Baku (Vendor A)", tipe: "Pengeluaran", kategori: "Biaya Bahan Baku", nominal: 3500000, status: "Selesai" },
  { id: "TRX-1090", tanggal: "24 Okt 2023", nama: "Pendapatan Jasa Konsultasi", tipe: "Pemasukan", kategori: "Pendapatan Usaha", nominal: 5000000, status: "Selesai" },
  { id: "TRX-1089", tanggal: "24 Okt 2023", nama: "Gaji Karyawan (Periode Okt)", tipe: "Pengeluaran", kategori: "Biaya Gaji", nominal: 8200000, status: "Diproses" },
  { id: "TRX-1088", tanggal: "23 Okt 2023", nama: "Tagihan Server & Listrik", tipe: "Pengeluaran", kategori: "Biaya Operasional", nominal: 1350000, status: "Selesai" },
];

export default function TransaksiPage() {
  return (
    <div className="space-y-6 max-w-[1200px] mx-auto pb-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Transaksi</h1>
          <p className="text-sm text-gray-500 mt-1">Kelola pergerakan arus kas bisnis Anda.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="mr-2 h-4 w-4 text-gray-500" />
            Ekspor
          </button>
          <button className="inline-flex items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 transition-colors shadow-sm">
            Catat Transaksi
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        {/* Toolbar Filter & Search */}
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row gap-4 items-center justify-between bg-white">
          <div className="relative w-full md:max-w-xs">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-md border border-gray-300 py-1.5 pl-9 pr-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
              placeholder="Cari transaksi..."
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4 text-gray-500" />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500">Tanggal</th>
                <th className="px-6 py-3 font-medium text-gray-500">Deskripsi</th>
                <th className="px-6 py-3 font-medium text-gray-500">Kategori</th>
                <th className="px-6 py-3 font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 font-medium text-gray-500 text-right">Nominal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {transaksiData.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-3">
                    <span className="text-gray-900">{item.tanggal}</span>
                  </td>
                  <td className="px-6 py-3">
                    <div className="font-medium text-gray-900">{item.nama}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.id}</div>
                  </td>
                  <td className="px-6 py-3">
                    <span className="text-gray-600">
                      {item.kategori}
                    </span>
                  </td>
                  <td className="px-6 py-3">
                    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${item.status === 'Selesai' ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20' : 'bg-amber-50 text-amber-700 ring-1 ring-amber-600/20'}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-right">
                    <span className={`font-medium ${item.tipe === "Pemasukan" ? "text-emerald-700" : "text-gray-900"}`}>
                      {item.tipe === "Pemasukan" ? "+" : "-"}Rp {item.nominal.toLocaleString('id-ID')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
