'use client';

import MyDocument from '@/components/Document';
import PDFViewer from '@/components/PDFViewer'; // Viewer
import datas from '../data';

/** 前端渲染显示 [id] 的信息 */
export default function Home({ params }: { params: { id: string } }) {
  const idx = Number(params.id);
  const data = datas[idx];
  // console.log(data);
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <PDFViewer>
        <MyDocument data={datas[idx]} />
      </PDFViewer>
    </main>
  );
}
