export async function GET(request: Request) {
  return Response.json({ version: '1.0.0' });
}
