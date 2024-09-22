import datas from '@/app/data';
import MyDocument from '@/components/Document';
import { renderToBuffer } from '@react-pdf/renderer';

/** 提供 [id] 的 pdf 下载 */
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const item = datas[id];

    console.log(id);
    // console.log(item);

    const buffer = await renderToBuffer(MyDocument({ data: item }));

    // 设置响应头
    const headers = new Headers();
    headers.append(
      'Content-Disposition',
      `attachment; filename="${item.user.student_id}.pdf"` // 文件名 学号.pdf
    );
    headers.append('Content-Type', 'application/pdf');

    return new Response(buffer, {
      headers,
    });
  } catch (e) {
    console.error(e);
    return new Response('', { status: 404 });
  }
}
