import { createUser, getUsers } from "./actions";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const users = await getUsers()

  async function handleCreate(formData: FormData) {
    'use server'
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    await createUser({email, name})
  }
  return (
    <div>
      <h1>Usuários</h1>

      <form action={handleCreate}>
        <input name="email" placeholder="Digite seu email" type="text" required/>
        <input name="name" placeholder="Digite seu nome" type="text" required/>
        <button type="submit">Criar</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
