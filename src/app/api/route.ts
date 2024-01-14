export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const todo = await res.json();

  return Response.json({ todo });
}
