import path from 'path';
import { NextResponse } from 'next/server';
import fs from 'fs';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public/CV_Minsun Jung.docx');
  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx MIME 타입
        'Content-Disposition': 'attachment; filename="CV_Minsun Jung.docx"', // 다운로드될 파일 이름 설정
      },
  });
}
