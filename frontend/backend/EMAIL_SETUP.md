# 📧 Gmail SMTP Email Setup Guide

## Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled

## Step 2: Generate App Password
1. In Security settings, find "App passwords"
2. Click "App passwords"
3. Select "Mail" as the app
4. Select "Other" as device
5. Enter a name like "Crackers Store"
6. Click "Generate"
7. **Copy the 16-character password** (this is your EMAIL_PASS)

## Step 3: Create .env File
Create a file named `.env` in the backend directory with:

```env
EMAIL=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=5000
```

## Step 4: Restart Server
```bash
npm start
```

## Step 5: Test Email
Try placing an order through the frontend - you should receive emails!

## Troubleshooting

### Common Issues:
- **"Invalid login"**: Check your app password is correct
- **"Less secure app access"**: Use app passwords instead
- **"Connection timeout"**: Check firewall/network settings

### Alternative Email Services:
If Gmail doesn't work, you can use:
- Outlook/Hotmail
- Yahoo Mail
- Custom SMTP server

## Security Notes:
- Never commit .env file to git
- App passwords are more secure than regular passwords
- Each app should have its own app password
