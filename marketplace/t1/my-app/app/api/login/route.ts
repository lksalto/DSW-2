export async function POST(req: Request) {
    const { email, password } = await req.json();
  
    // Buscar usuário pelo e-mail no json-server
    const response = await fetch(`http://localhost:5000/usuarios?email=${email}`);
    const users = await response.json();
  
    if (users.length === 0) {
      return new Response(JSON.stringify({ error: "Usuário não encontrado" }), { status: 404 });
    }
  
    const user = users[0]; // Como o email deve ser único, pegamos o primeiro resultado
  
    // Verificar se a senha está correta
    if (user.senha !== password) {
      return new Response(JSON.stringify({ error: "Credenciais inválidas" }), { status: 401 });
    }
  
    return new Response(JSON.stringify({ message: "Login bem-sucedido!", user }), { status: 200 });
  }
  