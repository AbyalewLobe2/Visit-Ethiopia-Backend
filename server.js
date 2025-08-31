import dotenv from 'dotenv'
import app from './app.js'
import connectDB from './config/db.js'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './config.env' })
}

// ✅ Connect to MongoDB once
connectDB()

// ✅ Use Render's assigned port
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
})
