export async function POST(req: Request) {
    const newUser = await req.json();
  
    // Verificar se o e-mail já existe
    const existingUserResponse = await fetch(`http://localhost:5000/usuarios?email=${newUser.email}`);
    const existingUsers = await existingUserResponse.json();
  
    if (existingUsers.length > 0) {
      return new Response(JSON.stringify({ error: "E-mail já cadastrado" }), { status: 400 });
    }
  
    // Criar novo usuário
    const response = await fetch("http://localhost:5000/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
  
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Erro ao registrar usuário" }), { status: 500 });
    }
  
    return new Response(JSON.stringify({ message: "Usuário cadastrado com sucesso!" }), { status: 201 });
  }
  