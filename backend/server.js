// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sendMail = require("./utils/sendEmail");

const app = express();

// CORS configuration - allow frontend origin
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://leocrackers-pgr.netlify.app/"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Body parser middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, {
    body: req.body,
    headers: req.headers['content-type']
  });
  next();
});

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running!" });
});

// Checkout API
app.post("/checkout", async (req, res) => {
  try {
    console.log("📦 Received checkout request:", req.body);
    console.log("📦 Items type:", typeof req.body.items);
    console.log("📦 Items value:", req.body.items);
    
    const { name, mobile, email, address, district, items, total } = req.body;

    // Validation
    if (!name || !mobile || !email || !address || !district || !items || !total) {
      console.log("❌ Missing required fields:", { name, mobile, email, address, district, items: !!items, total });
      return res.status(400).json({ 
        message: "Missing required fields",
        received: { name: !!name, mobile: !!mobile, email: !!email, address: !!address, district: !!district, items: !!items, total: !!total }
      });
    }

    // Try to send email, but don't fail if it doesn't work
    try {
      await sendMail({
        name,
        mobile,
        email,
        address,
        district,
        total,
        items: items // Pass the items array directly, let sendEmail handle the formatting
      });
      console.log("✅ Email sent successfully");
    } catch (emailError) {
      console.log("⚠️ Email failed, but order will still be processed:", emailError.message);
    }

    console.log("✅ Order processed successfully for:", name);
    res.json({ message: "Order placed successfully! Check your email for confirmation." });
    
  } catch (error) {
    console.error("❌ Error processing checkout:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Unhandled error:", err);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
