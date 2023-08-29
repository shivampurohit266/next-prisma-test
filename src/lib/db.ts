// import { PrismaClient } from '@prisma/client'

// // const prismaClientSingleton = () => {
// //   return new PrismaClient()
// // }

// const globalForPrisma = globalThis as unknown as {
//     prisma: PrismaClient | undefined
// }

// // type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

// // const globalForPrisma = globalThis as unknown as {
// //   prisma: PrismaClient | undefined
// // }

// const prisma = globalForPrisma.prisma ?? PrismaClient()

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined
}

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export const db = prisma
