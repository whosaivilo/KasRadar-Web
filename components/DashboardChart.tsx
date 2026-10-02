"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

export default function DashboardChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
        <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#f1f5f9" />
        <XAxis 
          dataKey="date" 
          stroke="#94a3b8" 
          fontSize={11} 
          fontWeight={500}
          tickLine={false}
          axisLine={false}
          dy={10}
        />
        <YAxis 
          stroke="#94a3b8" 
          fontSize={11}
          fontWeight={500}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value / 1000000}M`}
          dx={-10}
        />
        <Tooltip 
          contentStyle={{ 
            borderRadius: '16px', 
            border: '1px solid #f1f5f9', 
            backgroundColor: 'rgba(255, 255, 255, 0.95)', 
            backdropFilter: 'blur(10px)',
            color: '#0f172a', 
            boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
            padding: '12px 16px',
            fontWeight: 600
          }}
          formatter={(value: number) => [`Rp ${value.toLocaleString('id-ID')}`, '']}
          cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
        />
        <Legend 
          wrapperStyle={{ fontSize: '12px', fontWeight: 500, paddingTop: '15px' }} 
          iconType="circle"
        />
        <Line 
          name="Aktual"
          type="monotone" 
          dataKey="aktual" 
          stroke="#1e40af" 
          strokeWidth={4}
          dot={{ r: 4, strokeWidth: 2, fill: '#ffffff', stroke: '#1e40af' }}
          activeDot={{ r: 6, strokeWidth: 0, fill: '#1e40af' }}
        />
        <Line 
          name="Prediksi AI"
          type="monotone" 
          dataKey="prediksi" 
          stroke="#94a3b8" 
          strokeWidth={3} 
          strokeDasharray="6 6"
          dot={false}
          activeDot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
