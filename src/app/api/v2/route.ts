export async function GET(req: Request): Promise<Response> {
    return new Response(JSON.stringify({ message: "Coming Soon" }), {
      status: 200,
    });
  }
  