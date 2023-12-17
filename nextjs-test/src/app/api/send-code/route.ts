import { mkdirSync, writeFileSync } from 'fs';
import { dirname } from 'path';

export async function POST(request: Request) {
  const res = await request.json();

  const { path, code } = res;

  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, code);

  return Response.json({ status: 'ok' });
}
