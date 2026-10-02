import { ArrowDown, ArrowUp, AlertCircle, FileText, Wallet } from "lucide-react";
import DashboardChart from "@/components/DashboardChart";
import pool from "../lib/db";

const formatRupiah = (angka: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(angka);
};

export default async function Home() {
  let totalMasuk = 0;
  let totalKeluar = 0;
  let chartData: any[] = [];

  try {
    const [rows]: any = await pool.query(
      "SELECT SUM(total_masuk) as totalMasuk, SUM(total_keluar) as totalKeluar FROM ringkasan_kas_harian"
    );
    if (rows && rows.length > 0) {
      totalMasuk = Number(rows[0].totalMasuk) || 0;
      totalKeluar = Number(rows[0].totalKeluar) || 0;
    }

    const [chartRows]: any = await pool.query(
      "SELECT tanggal, total_masuk, total_keluar FROM ringkasan_kas_harian ORDER BY tanggal ASC LIMIT 7"
    );
    if (chartRows && chartRows.length > 0) {
      chartData = chartRows.map((row: any) => ({
        date: new Date(row.tanggal).toLocaleDateString("id-ID", { month: "short", day: "numeric" }),
        aktual: Number(row.total_masuk),
        prediksi: Number(row.total_keluar),
      }));
    }
  } catch (error) {
    console.error("Database connection failed:", error);
    chartData = [
      { date: "1 Okt", aktual: 10000000, prediksi: 10000000 },
      { date: "5 Okt", aktual: 15000000, prediksi: 14000000 },
      { date: "10 Okt", aktual: 12000000, prediksi: 18000000 },
      { date: "15 Okt", aktual: 25000000, prediksi: 22000000 },
      { date: "Hari Ini", aktual: 18000000, prediksi: 26000000 },
      { date: "1 Nov", aktual: 0, prediksi: 35000000 },
    ];
    totalMasuk = 12400000;
    totalKeluar = 8200000;
  }

  const laba = totalMasuk - totalKeluar;

  return (
    <div className="space-y-6 max-w-[1200px] mx-auto pb-8">
      {/* Header */}
      <div className="border-b border-gray-200 pb-5">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Ringkasan aktivitas finansial periode ini.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Pemasukan */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Pemasukan</h3>
            <ArrowDown className="h-4 w-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">{formatRupiah(totalMasuk)}</div>
          <p className="text-xs text-gray-500 mt-1">
            <span className="text-emerald-600 font-medium">+12.5%</span> vs bulan lalu
          </p>
        </div>

        {/* Pengeluaran */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Pengeluaran</h3>
            <ArrowUp className="h-4 w-4 text-rose-600" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">{formatRupiah(totalKeluar)}</div>
          <p className="text-xs text-gray-500 mt-1">
            <span className="text-rose-600 font-medium">-2.4%</span> vs bulan lalu
          </p>
        </div>

        {/* Laba */}
        <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-500">Laba Bersih</h3>
            <Wallet className="h-4 w-4 text-blue-700" />
          </div>
          <div className="text-2xl font-semibold text-gray-900">{formatRupiah(laba)}</div>
          <p className="text-xs text-gray-500 mt-1">Status arus kas sehat</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Chart */}
        <div className="lg:col-span-2 rounded-lg border border-gray-200 bg-white shadow-sm flex flex-col">
          <div className="p-5 border-b border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Arus Kas Harian</h3>
              <p className="text-sm text-gray-500">Aktual vs Prediksi (30 Hari)</p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1.5 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-blue-700"></span> Aktual
              </div>
              <div className="flex items-center gap-1.5 text-gray-600">
                <span className="w-2 h-2 rounded-full bg-gray-300"></span> Prediksi
              </div>
            </div>
          </div>
          <div className="p-5 flex-1 w-full h-[300px]">
            <DashboardChart data={chartData} />
          </div>
        </div>

        {/* Metrics & Nudge */}
        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm flex flex-col items-center">
            <h3 className="text-sm font-medium text-gray-900 mb-4 self-start">Health Score</h3>
            <div className="relative flex items-center justify-center">
              <svg width="140" height="140" className="transform -rotate-90">
                <circle cx="70" cy="70" r="60" stroke="#f3f4f6" strokeWidth="12" fill="transparent" />
                <circle
                  cx="70"
                  cy="70"
                  r="60"
                  stroke="#1d4ed8"
                  strokeWidth="12"
                  strokeDasharray="377"
                  strokeDashoffset="56"
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-3xl font-semibold text-gray-900">85</span>
              </div>
            </div>
            <p className="text-sm font-medium text-emerald-600 mt-4">Kondisi Sehat</p>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 shadow-sm">
            <div className="flex gap-3">
              <AlertCircle className="h-5 w-5 text-blue-700 shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-blue-900">AI Insight</h4>
                <p className="text-sm text-blue-800 mt-1">
                  Arus kas berisiko menurun akhir minggu ini. Disarankan menunda pembelian inventaris non-esensial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}