import { prisma } from '@/services/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email } = req.body

    const userAlreadyExists = await prisma.user.findFirst({
      where: { email: email },
    })

    if (userAlreadyExists) {
      return res.status(500).json({ message: 'Usuário já inscrito.' })
    }

    try {
      const newUser = await prisma.user.create({
        data: {
          email: email,
        },
      })

      return res
        .status(201)
        .json({ message: 'Usuário inscrito com sucesso!', newUser })
    } catch (error) {
      console.log(error)
      return res.status(500).json(error)
    }
  }

  const users = await prisma.user.findMany()

  return res.status(200).json(users)
}
