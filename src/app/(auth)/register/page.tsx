export default function RegisterPage() {
    return (
      <form>
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <input
          type="text"
          placeholder="Nome de Usuário"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Senha"
          className="w-full p-2 mb-6 border rounded"
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Entrar</button>
      </form>
    );
  }
  