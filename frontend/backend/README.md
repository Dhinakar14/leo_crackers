# Backend Server Setup

## Prerequisites
- Node.js installed
- Gmail account for sending emails

## Setup Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create .env file:**
   Create a `.env` file in the backend directory with:
   ```
   EMAIL=your-email@gmail.com
   EMAIL_PASS=your-app-password
   PORT=5000
   ```

3. **Get Gmail App Password:**
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use this password in EMAIL_PASS

4. **Run the server:**
   ```bash
   # Development mode (with auto-restart)
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

- `GET /` - Health check
- `POST /checkout` - Process checkout orders

## Troubleshooting

- Make sure the server is running on port 5000
- Check that CORS is properly configured for your frontend origin
- Verify email credentials in .env file
- Check console logs for detailed error messages
