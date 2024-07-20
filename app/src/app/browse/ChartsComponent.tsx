"use client"
import { Tooltip, YAxis, Area, Label } from 'recharts';

import dynamic from 'next/dynamic'
const AreaChart = dynamic(() => import('recharts').then((mod) => mod.AreaChart), { ssr: false })

export default function ChartsComponent({ stock_data, title, yDataKey, xDataKey }: {
  stock_data: Array<object>
  title: string,
  xDataKey: string,
  yDataKey: string
}) {
  return (
    <div className='bg-gray-900 p-5 rounded-lg my-5 sm:mx-5'>
      <h4 className='text-xl font-bold text-white mb-5 text-center'>{title}</h4>
      <div className="w-auto flex justify-center">
        <AreaChart width={window.innerWidth > 640 ? 580 : window.innerWidth - 60} height={200} data={stock_data}

          margin={{ top: 0, right: 0, left: 30, bottom: 0 }} className='bg-gray-900 rounded-lg'>
          <defs>
            <linearGradient id="colorZv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1E90FF" stopOpacity={0.5} />
              <stop offset="95%" stopColor="#1E90FF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis dataKey={yDataKey}>
            <Label value="Price ($USD)" position="insideLeft" angle={-90} dx={-20} style={{ textAnchor: 'middle' }} />
          </YAxis>
          <Tooltip />
          <Area type="monotone" dataKey={yDataKey} stroke="#1E90FF" fillOpacity={1} fill="url(#colorZv)" />
          <Area type="monotone" dataKey={xDataKey} stroke="#000000" fillOpacity={1} />
        </AreaChart>
      </div>
    </div>
  )
}
