import { Download, FileText } from "lucide-react";

export default function LaporanPage() {
  return (
    <div className="space-y-6 max-w-[1000px] mx-auto pb-8">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Laporan Laba Rugi</h1>
          <p className="text-sm text-gray-500 mt-1">Laporan keuangan standar SIAPIK (Oktober 2023).</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
            <Download className="mr-2 h-4 w-4 text-gray-500" />
            Unduh Laporan
          </button>
        </div>
      </div>

      {/* Laba Rugi Sederhana */}
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        <div className="p-5 border-b border-gray-200 bg-gray-50 flex items-center gap-3">
            <FileText className="h-5 w-5 text-gray-400" />
            <h2 className="text-base font-semibold text-gray-900">Ringkasan Bulan Ini</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {/* Pendapatan Section */}
            <div>
              <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-200 pb-2 mb-3">Pendapatan</h3>
              <div className="space-y-3 pl-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Pendapatan Usaha</span>
                  <span className="text-gray-900 font-medium text-sm">Rp 25.500.000</span>
                </div>
              </div>
            </div>
            
            {/* Beban Section */}
            <div>
              <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide border-b border-gray-200 pb-2 mb-3">Beban Pokok & Biaya</h3>
              <div className="space-y-3 pl-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Biaya Bahan Baku</span>
                  <span className="text-gray-900 font-medium text-sm">Rp 7.500.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Biaya Operasional</span>
                  <span className="text-gray-900 font-medium text-sm">Rp 1.800.000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Biaya Gaji</span>
                  <span className="text-gray-900 font-medium text-sm">Rp 3.000.000</span>
                </div>
              </div>
            </div>

            {/* Total Beban */}
            <div className="flex justify-between items-center pl-2 pt-2 border-t border-dashed border-gray-200">
                <span className="text-gray-600 font-medium text-sm">Total Beban</span>
                <span className="text-rose-600 font-medium text-sm">Rp 12.300.000</span>
            </div>
          </div>
        </div>

        {/* Footer/Total */}
        <div className="bg-gray-50 p-6 flex justify-between items-center border-t border-gray-200">
          <span className="font-semibold text-gray-900">Laba Bersih</span>
          <span className="font-semibold text-xl text-emerald-600">Rp 13.200.000</span>
        </div>
      </div>
    </div>
  );
}
