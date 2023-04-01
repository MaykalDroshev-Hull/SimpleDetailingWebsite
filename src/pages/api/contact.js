import { mailOption, transporter } from '../../config/nodemailer.js'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body
    if (!data.firstName || !data.lastName || !data.email) {
      return res.status(400).json({ message: 'Bad Request' })
    }
    
    try {
      await transporter.sendMail({
        ...mailOption,
        subject: 'New Request Received',
        text: 'This is test string',
        html: '<h1>Test</h1><p>Some body text<p>',
      })

      return res.status(200).json({ success: true })
    } catch (e) {
      console.log(e)
      return res.status(400).json({ message: e.message })
    }
  }

  console.log(req.body)
  return res.status(400).json({ message: 'Bad Request' })
}

export default handler
