import express from 'express'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      budget,
      message,
      services
    } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // TODO:
    // - Save to DB
    // - Send email (Resend / Nodemailer)
    // - Send Slack/Discord notification

    console.log('New quote request:', req.body)

    res.status(200).json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
