'use server'

import { revalidatePath } from "next/cache";
import db from "../../prisma/db"
import { redirect } from "next/navigation";

// Criar usuário
export async function createUser(data: {email: string; name: string}) {
  const user = await db.user.create({data})
  return user
  revalidatePath('/')
  redirect('/')
}

// Listar usuários
export async function getUsers() {
  return await db.user.findMany()
}
