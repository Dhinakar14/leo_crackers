const nodemailer = require("nodemailer");
require("dotenv").config();

const hasEmailConfig = process.env.EMAIL && process.env.EMAIL_PASS;

// Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  },
  tls: { rejectUnauthorized: false }
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to send emails");
  }
});

const sendMail = (order) => {
  if (!hasEmailConfig) {
    console.log("📧 Email not configured. Order details:", order);
    return Promise.resolve();
  }

  // Items table
  let itemsHtml = "";
  if (Array.isArray(order.items)) {
    itemsHtml = order.items.map(item => `
      <tr>
        <td>${item.name || 'Unknown'}</td>
        <td align="center">${item.quantity || 1}</td>
        <td align="right">₹${item.price || 0}</td>
        <td align="right">₹${(item.price || 0) * (item.quantity || 1)}</td>
      </tr>
    `).join("");
  } else {
    itemsHtml = `<tr><td colspan="4">${order.items || 'No items'}</td></tr>`;
  }

  // ------------------------
  // Owner Email Template
  // ------------------------
  const ownerMailOptions = {
    from: `"Leo Crackers" <${process.env.EMAIL}>`,
    to: process.env.EMAIL, // owner
    bcc: "rgp2009ag@gmail.com", // always keep backup (change this email)
    subject: "🛒 New Customer Order - Leo Crackers",
    html: `
      <h2>New Order Received</h2>
      <p><strong>Name:</strong> ${order.name}</p>
      <p><strong>Mobile:</strong> ${order.mobile}</p>
      <p><strong>Email:</strong> ${order.email}</p>
      <p><strong>Address:</strong> ${order.address}, ${order.district}</p>

      <h3>Items</h3>
      <table border="1" cellspacing="0" cellpadding="8" width="100%">
        <tr><th>Product</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr>
        ${itemsHtml}
      </table>
      <h2>Total: ₹${order.total}</h2>
    `
  };

  // ------------------------
  // Customer Email Template
  // ------------------------
  const customerMailOptions = {
    from: `"Leo Crackers" <${process.env.EMAIL}>`,
    to: order.email, // customer
    bcc: "rgp2009ag@gmail.com", // same backup here also
    subject: "🎇 Thank You for Your Order - Leo Crackers",
    html: `
      <div style="font-family: Arial; line-height:1.6;">
        <h2 style="color:#2c3e50;">Hi ${order.name},</h2>
        <p>Thank you for placing your order with <strong>Leo Crackers</strong> 🎉.</p>
        <p>Here’s a summary of your order:</p>

        <table border="1" cellspacing="0" cellpadding="8" width="100%">
          <tr><th>Product</th><th>Qty</th><th>Price</th><th>Subtotal</th></tr>
          ${itemsHtml}
        </table>

        <h2 style="color:#27ae60;">Total: ₹${order.total}</h2>
        <p>Your order is being processed. You’ll receive updates soon.</p>

        <p style="margin-top:20px;">Best Regards,<br/>🎆 Leo Crackers Team</p>
      </div>
    `
  };

  return new Promise(async (resolve, reject) => {
    try {
      console.log("📧 Sending owner email...");
      const ownerInfo = await transporter.sendMail(ownerMailOptions);
      console.log("✅ Owner email sent:", ownerInfo.messageId);

      console.log("📧 Sending customer email...");
      const customerInfo = await transporter.sendMail(customerMailOptions);
      console.log("✅ Customer email sent:", customerInfo.messageId);

      resolve({ owner: ownerInfo, customer: customerInfo });
    } catch (err) {
      console.log("❌ Error sending email:", err.message);
      reject(err);
    }
  });
};

module.exports = sendMail;
