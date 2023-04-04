import { PrismaClient } from "@prisma/client"

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    if (!data.firstName || !data.lastName || !data.reviewText) {
      return res.status(400).json({ message: 'Bad Request' })
    } else {
      return await addReview(req, res)
    }
  } else if (req.method === 'GET') {
    return await readReview(req, res)
  }

  return res.status(400).json({ message: 'Bad Request' })
}

const addReview = async (req, res) => {
  const prisma = new PrismaClient()
  const body = req.body
  try {
    const newEntry = await prisma.review.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        reviewText: body.reviewText,
      }
    })
    return res.status(200).json(newEntry, { success: true })
  } catch (e) {
    console.log('Request Error', e)
    return res.status(500).json({ error: 'Error Creating Review', success: false })
  }
}

const readReview = async (req, res) => {
  const prisma = new PrismaClient()
  const body = req.body
  try {
    const reviews = await prisma.review.findMany()
    return res.status(200).json(reviews, { success: true })
  } catch (e) {
    console.log(e)
    return res.status(500).json({ error: 'Error reading from database', success: false })
  }
}

export default handler