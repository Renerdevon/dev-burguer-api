import app from './app.js'
import './database/index.js'

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`🔥 DevBurger API running on port ${PORT}`)
})
