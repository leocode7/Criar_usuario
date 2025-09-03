'use server'

import { revalidatePath } from "next/cache";
import db from "../../prisma/db"

// Criar usuário
export async function createUser(data: {email: string; name: string}) {
  const user = await db.user.create({data})
  //return user
  revalidatePath('/')
}

// Listar usuários
export async function getUsers() {
  return await db.user.findMany()
}
