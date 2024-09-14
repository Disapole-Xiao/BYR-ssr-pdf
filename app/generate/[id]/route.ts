import datas from "../../data";
import Document from "@/components/Document"; // MyDocument
import { renderToBuffer } from "@react-pdf/renderer";


// 提供 [id] 的 pdf 下载
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    const item = datas[id];

    console.log(id);
    console.log(item);

    const buffer = await renderToBuffer(Document({ "data": item }));

    // 设置响应头
    const headers = new Headers();
    headers.append("Content-Disposition", `attachment; filename="${item.user.id}.pdf"`); // 作为下载，文件名 id.pdf
    headers.append("Content-Type", "application/pdf");

    return new Response(buffer, {
      headers,
    });

  } catch (e) {
    return new Response("", { status: 404 });
  }
}
