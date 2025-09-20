const express = require("express");
const cors = require("cors");

const app = express();

// CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5000",
    "http://localhost:3000", 
    "https://leocrackers-pgr.netlify.app"
  ],
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

// JSON parsing
app.use(express.json());

// Import sendMail safely
let sendMail = null;
try {
  sendMail = require("./utils/sendEmail");
  console.log("Email service loaded");
} catch (error) {
  console.log("Email service not available");
}

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running!" });
});

app.get("/health", (req, res) => {
  res.json({ 
    status: "OK",
    timestamp: new Date().toISOString()
  });
});

app.post("/checkout", async (req, res) => {
  try {
    console.log("Checkout request:", req.body);
    
    const { name, mobile, email, address, district, pincode, items, total } = req.body;

    // Simple validation
    if (!name || !mobile || !email || !address || !district || !items || !total) {
      return res.status(400).json({ 
        message: "Missing required fields"
      });
    }

    // Send email if available
    if (sendMail) {
      try {
        await sendMail({
          name, mobile, email, address, district, pincode, total, items
        });
        console.log("Email sent");
      } catch (emailError) {
        console.log("Email failed:", emailError.message);
      }
    }

    res.json({ 
      success: true,
      message: "Order placed successfully!",
      orderId: `ORDER_${Date.now()}`
    });
    
  } catch (error) {
    console.error("Checkout error:", error);
    res.status(500).json({ 
      message: "Internal server error"
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
