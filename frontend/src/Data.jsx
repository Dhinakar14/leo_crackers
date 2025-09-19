import React from 'react'
import { Container, Table, Row, Col, Card, Button } from 'react-bootstrap';

const crackerData = [
{ category: "One Sound Crackers", items: [
    { sNo: 1, name: "4\" Ganesh Mega Dlx Crackers", unit: "1 Pkt", price: 40 },
    { sNo: 2, name: "4\" Gold Lakshmi Crackers", unit: "1 Pkt", price: 36 },
    { sNo: 3, name: "4\" Dlx Lakshmi Crackers", unit: "1 Pkt", price: 25 },
    { sNo: 4, name: "4\" Lakshmi Crackers", unit: "1 Pkt", price: 18 },
    { sNo: 5, name: "3½\" Lakshmi Crackers", unit: "1 Pkt", price: 13 },
    { sNo: 6, name: "2¾\" Kuruvi Crackers", unit: "1 Pkt", price: 10 },
    { sNo: 7, name: "4\" Kuruvi Crackers", unit: "1 Pkt", price: 28 },
    { sNo: 8, name: "2 Sound Crackers", unit: "1 Pkt", price: 32 },
    { sNo: 9, name: "3 Sound Crackers", unit: "1 Pkt", price: 35 },
  ]},
  // SPARKLERS
  { category: "Sparklers", items: [
    { sNo: 10, name: "7cm Electric Sparklers", unit: "1 Box", price: 10 },
    { sNo: 11, name: "7cm Colour Sparklers", unit: "1 Box", price: 12 },
    { sNo: 12, name: "7cm Green Sparklers", unit: "1 Box", price: 19 },
    { sNo: 13, name: "7cm Red Sparklers", unit: "1 Box", price: 20 },
    { sNo: 14, name: "10cm Electric Sparklers", unit: "1 Box", price: 22 },
    { sNo: 15, name: "10cm Colour Sparklers", unit: "1 Box", price: 25 },
    { sNo: 16, name: "10cm Green Sparklers", unit: "1 Box", price: 29 },
    { sNo: 17, name: "10cm Red Sparklers", unit: "1 Box", price: 33 },
    { sNo: 18, name: "15cm Electric Sparklers", unit: "1 Box", price: 58 },
    { sNo: 19, name: "15cm Colour Sparklers", unit: "1 Box", price: 64 },
    { sNo: 20, name: "15cm Green Sparklers", unit: "1 Box", price: 73 },
    { sNo: 21, name: "15cm Red Sparklers", unit: "1 Box", price: 68 },
    { sNo: 22, name: "15cm Sona Sparklers", unit: "1 Box", price: 60 },
    { sNo: 23, name: "15cm Super Mix Sparklers", unit: "1 Box", price: 75 },
    { sNo: 24, name: "30cm Electric Sparklers", unit: "1 Box", price: 58 },
    { sNo: 25, name: "30cm Colour Sparklers", unit: "1 Box", price: 64 },
    { sNo: 26, name: "30cm Green Sparklers", unit: "1 Box", price: 73 },
    { sNo: 27, name: "30cm Red Sparklers", unit: "1 Box", price: 68 },
    { sNo: 28, name: "30cm Super Mix (Tube)", unit: "1 Tube", price: 80 },
    { sNo: 29, name: "50cm Super Mix (Tube)", unit: "1 Tube", price: 200 },
    { sNo: 30, name: "Dancing Umbrella (Rotating Sparklers)", unit: "1 Tube", price: 180 },
  ]},
  // FLOWER POTS
  { category: "Flower Pots", items: [
    { sNo: 31, name: "Flower Pots Big (10 Pcs)", unit: "1 Box", price: 70 },
    { sNo: 32, name: "Flower Pots Special (10 Pcs)", unit: "1 Box", price: 140 },
    { sNo: 33, name: "Flower Pots Ashoka (10 Pcs)", unit: "1 Box", price: 100 },
    { sNo: 34, name: "Flower Pots Giant (10 Pcs)", unit: "1 Box", price: 225 },
    { sNo: 35, name: "Flower Pots Deluxe (5 Pcs)", unit: "1 Box", price: 250 },
    { sNo: 36, name: "Flower Pots Super Deluxe (10 Pcs)", unit: "1 Box", price: 550 },
    { sNo: 37, name: "Colour Koti (10 Pcs)", unit: "1 Box", price: 200 },
    { sNo: 38, name: "Colour Koti Deluxe (10 Pcs)", unit: "1 Box", price: 330 },
    { sNo: 39, name: "Popye Tri Colour Pots (5 Pcs)", unit: "1 Box", price: 220 },
  ]},

  {
  category: "Ground Chakkar",
  items: [
    { sNo: 40, name: "Ground Chakkar Big (10 Pcs)", unit: "1 Box", price: 40 },
    { sNo: 41, name: "Ground Chakkar Ashoka (10 Pcs)", unit: "1 Box", price: 60 },
    { sNo: 42, name: "Ground Chakkar Special (10 Pcs)", unit: "1 Box", price: 70 },
    { sNo: 43, name: "Ground Chakkar Deluxe (10 Pcs)", unit: "1 Box", price: 140 },
    { sNo: 44, name: "Ground Chakkar Super Deluxe (10 Pcs)", unit: "1 Box", price: 200 },
  ]},
  // ... Continue for Ground Chakkar, Rocket, Bomb, Bijili, Peacock, Kid’s Special, etc. (see PDF[1])
  // Example for next category:
  { category: "Rocket", items: [
    { sNo: 48, name: "Rocket Bomb (10 Pcs)", unit: "1 Box", price: 60 },
    { sNo: 49, name: "Colour Rocket (10 Pcs)", unit: "1 Box", price: 60 },
    { sNo: 50, name: "Lunik Rocket (10 Pcs)", unit: "1 Box", price: 120 },
    { sNo: 51, name: "Whistling Rocket (5 Pcs)", unit: "1 Box", price: 100 },
    { sNo: 52, name: "Whistling Rocket (10 Pcs)", unit: "1 Box", price: 200 },
  ]},
{
  category: "Bomb Items",
  items: [
    { sNo: 53, name: "Hydro Bomb (10 Pcs)", unit: "1 Box", price: 70 },
    { sNo: 54, name: "King Bomb (10 Pcs)", unit: "1 Box", price: 100 },
    { sNo: 55, name: "Classic Bomb (10 Pcs)", unit: "1 Box", price: 120 },
    { sNo: 56, name: "Digital Bomb (10 Pcs)", unit: "1 Box", price: 220 },
    { sNo: 57, name: "Paper Bomb 1/4 kg", unit: "1 Box", price: 45 },
  ]
},
{
  category: "Bijili Crackers",
  items: [
    { sNo: 58, name: "Red Bijili Crackers (100 Pcs)", unit: "1 Bag", price: 54 },
    { sNo: 59, name: "Stripped Bijili Crackers (100 Pcs)", unit: "1 Bag", price: 54 },
    { sNo: 60, name: "Red Bijili Crackers (50 Pcs)", unit: "1 Bag", price: 30 },
  ]
},
{
  category: "Kids Torches",
  items: [
    { sNo: 61, name: "Sea Laser Red (3 Pcs)", unit: "1 Box", price: 135 },
    { sNo: 62, name: "Sea Laser Green (3 Pcs)", unit: "1 Box", price: 130 },
    { sNo: 63, name: "Hi Light (3 Pcs)", unit: "1 Box", price: 170 },
    { sNo: 64, name: "Water Light (3 Pcs)", unit: "1 Box", price: 170 },
    { sNo: 65, name: "Star Light (3 Pcs)", unit: "1 Box", price: 170 },
    { sNo: 66, name: "Fire Light (3 Pcs)", unit: "1 Box", price: 170 },
    { sNo: 67, name: "Waterfall Pencil (5 Pcs)", unit: "1 Box", price: 210 },
    { sNo: 68, name: "Popcorn Pencil (5 Pcs)", unit: "1 Box", price: 210 },
    { sNo: 69, name: "Bazooka (2 Pcs)", unit: "1 Box", price: 280 },
    { sNo: 70, name: "Tornado (2 Pcs)", unit: "1 Box", price: 280 },
    { sNo: 71, name: "Short Gun M1887", unit: "1 Box", price: 210 },
  ]
},
{
  category: "Siren",
  items: [
    { sNo: 72, name: "Saxony Mini Siren (2 Pcs)", unit: "1 Box", price: 65 },
    { sNo: 73, name: "Whistle Podu (5 Pcs)", unit: "1 Box", price: 130 },
    { sNo: 74, name: "Big Siren (3 Pcs)", unit: "1 Box", price: 220 },
  ]
},
{
  category: "Peacock",
  items: [
    { sNo: 75, name: "Belly Dance Red Peacock", unit: "1 Box", price: 180 },
    { sNo: 76, name: "Belly Dance Green Peacock", unit: "1 Box", price: 180 },
    { sNo: 77, name: "Belly Dance Silver Peacock", unit: "1 Box", price: 180 },
    { sNo: 78, name: "Belly Dance Gold Peacock", unit: "1 Box", price: 180 },
    { sNo: 79, name: "Magic Peacock Red & Green", unit: "1 Box", price: 180 },
    { sNo: 80, name: "Dhandiya Peacock", unit: "1 Box", price: 450 },
  ]},

{
  category: "Kids Special",
  items: [
    { sNo: 81, name: "Chitu Put Small (10 Pcs)", unit: "1 Box", price: 25 },
    { sNo: 82, name: "Kit Kat Colour (10 Pcs)", unit: "1 Box", price: 40 },
    { sNo: 83, name: "Panda DLX (10 Pcs)", unit: "1 Box", price: 56 },
    { sNo: 84, name: "Jigarthanda Crackling (3 Pcs)", unit: "1 Box", price: 140 },
    { sNo: 85, name: "Asarafi Big (5 Pcs)", unit: "1 Box", price: 40 },
    { sNo: 86, name: "Green & White Showers (5 Pcs)", unit: "1 Box", price: 100 },
    { sNo: 87, name: "5 in 1 Showers (5 Pcs)", unit: "1 Box", price: 100 },
    { sNo: 88, name: "Peacock Feather (5 Pcs)", unit: "1 Box", price: 100 },
    { sNo: 89, name: "Colour Rain (5 Pcs)", unit: "1 Box", price: 100 },
    { sNo: 90, name: "Teddy Colour Mix (5 Pcs)", unit: "1 Box", price: 280 },
    { sNo: 91, name: "Photo Flash (5 Pcs)", unit: "1 Box", price: 60 },
    { sNo: 92, name: "Red Flash (5 Pcs)", unit: "1 Box", price: 80 },
    { sNo: 93, name: "Power Rangers (5 Pcs)", unit: "1 Box", price: 180 },
    { sNo: 94, name: "My First Love", unit: "1 Box", price: 130 },
    { sNo: 95, name: "Tin Showers", unit: "1 Box", price: 120 },
    { sNo: 96, name: "Butterfly (10 Pcs)", unit: "1 Box", price: 120 },
    { sNo: 97, name: "Helicopter (5 Pcs)", unit: "1 Box", price: 80 },
    { sNo: 98, name: "Spinner/ Bambaram (5 Pcs)", unit: "1 Box", price: 90 },
    { sNo: 99, name: "Shappy / Hiphop", unit: "1 Box", price: 35 },
    { sNo: 100, name: "Decon Chargers (6 Pcs)", unit: "1 Box", price: 140 },
    { sNo: 101, name: "White Phoenix (6 Pcs)", unit: "1 Box", price: 140 },
  ]
},
{
  category: "Fancy Fountains",
  items: [
    { sNo: 102, name: "Formula 1 (6 Pcs)", unit: "1 Box", price: 140 },
    { sNo: 103, name: "Jolly Bobby (3 Pcs)", unit: "1 Box", price: 350 },
    { sNo: 104, name: "Welcome Show Fountain", unit: "1 Box", price: 300 },
    { sNo: 105, name: "Emu Egg (2 Pcs)", unit: "1 Box", price: 200 },
    { sNo: 106, name: "Water Queen", unit: "1 Box", price: 180 },
    { sNo: 107, name: "Pop Corn Crackling Shower (5 Pcs)", unit: "1 Box", price: 220 },
    { sNo: 108, name: "Naragasura", unit: "1 Box", price: 250 },
    { sNo: 109, name: "Indian Fantastic Tree - 3 Step Fountain", unit: "1 Box", price: 375 },
    { sNo: 110, name: "Ludo King - 4 Step Fountain", unit: "1 Box", price: 375 },
  ]
},
{
  category: "Fancy Chakkars",
  items: [
    { sNo: 111, name: "Jungle Mix (5 Pcs)", unit: "1 Box", price: 280 },
    { sNo: 112, name: "Sun Flower Wheel (5 Pcs)", unit: "1 Box", price: 85 },
    { sNo: 113, name: "Whistling Wheel (5 Pcs)", unit: "1 Box", price: 240 },
    { sNo: 114, name: "Planet Chakkar Crackling (2 Pcs)", unit: "1 Box", price: 180 },
    { sNo: 115, name: "Motu Patlu (2 Pcs)", unit: "1 Box", price: 200 },
    { sNo: 116, name: "Wire Chakkar", unit: "1 Box", price: 80 },
  ]
},
{
  category: "Cartoon",
  items: [
    { sNo: 117, name: "Assorted Cartoons", unit: "1 Box", price: 40 },
    { sNo: 118, name: "Snake Cartoons", unit: "1 Box", price: 40 },
  ]
},
{
  category: "Money Bomb",
  items: [
    { sNo: 119, name: "Money In The Bank (3 Pcs)", unit: "1 Box", price: 200 },
    { sNo: 120, name: "Rupee Confetti (2 Pcs)", unit: "1 Box", price: 280 },
  ]
},
{
  category: "Sky Shots",
  items: [
    { sNo: 121, name: "Air Rider (5 Pcs)", unit: "1 Box", price: 50 },
    { sNo: 122, name: "Force Mix (2 Pcs)", unit: "1 Box", price: 70 },
    { sNo: 123, name: "7 Shot (5 Pcs)", unit: "1 Box", price: 100 },
    { sNo: 124, name: "Penta Magic (5 Pcs)", unit: "1 Box", price: 140 },
  ]
},
{
  category: "Aerial Outs / Fancy",
  items: [
    { sNo: 125, name: "1¼\" Chotta Aerial Out", unit: "1 Box", price: 40 },
    { sNo: 126, name: "1\" Lovely Music", unit: "1 Box", price: 140 },
    { sNo: 127, name: "2\" Aerial Out Single", unit: "1 Box", price: 140 },
    { sNo: 128, name: "2\" Aerial Out (3 Pcs)", unit: "1 Box", price: 280 },
    { sNo: 129, name: "3¼\" Aerial Out Single", unit: "1 Box", price: 280 },
    { sNo: 130, name: "3½\" Aerial Out Single", unit: "1 Box", price: 300 },
    { sNo: 131, name: "3½\" Try Me (2 Pcs)", unit: "1 Box", price: 800 },
    { sNo: 132, name: "4\" Aerial Double Ball", unit: "1 Box", price: 450 },
    { sNo: 133, name: "4\" Aerial Out Lovely (2 Pcs)", unit: "1 Box", price: 850 },
    { sNo: 134, name: "4\" Aerial Out Nayagara Falls", unit: "1 Box", price: 320 },
    { sNo: 135, name: "5\" Mega Aerial Out", unit: "1 Box", price: 1000 },
  ]
},
{
  category: "Repeating Shots",
  items: [
    { sNo: 136, name: "12 Shot Red & Green", unit: "1 Box", price: 170 },
    { sNo: 137, name: "12 Shot Rider", unit: "1 Box", price: 180 },
    { sNo: 138, name: "12 Shot Crackling", unit: "1 Box", price: 250 },
    { sNo: 139, name: "15 Shot Multi Colour", unit: "1 Box", price: 270 },
    { sNo: 140, name: "25 Shot Crackling", unit: "1 Box", price: 200 },
    { sNo: 141, name: "30 Shot Multi Colour", unit: "1 Box", price: 450 },
    { sNo: 142, name: "30 Shot Multi Colour & Crackling", unit: "1 Box", price: 550 },
    { sNo: 143, name: "60 Shot Multi Colour", unit: "1 Box", price: 900 },
    { sNo: 144, name: "60 Shot Multi Colour & Crackling", unit: "1 Box", price: 1110 },
    { sNo: 145, name: "120 Shot Multi Colour", unit: "1 Box", price: 1800 },
    { sNo: 146, name: "120 Shot Multi Colour & Crackling", unit: "1 Box", price: 2100 },
    { sNo: 147, name: "240 Shot Multi Colour & Crackling", unit: "1 Box", price: 2800 },
  ]
},
{
  category: "Elite Shots",
  items: [
    { sNo: 148, name: "12 Shot Arabian Nights", unit: "1 Box", price: 500 },
    { sNo: 149, name: "5x5 Green Parrot", unit: "1 Box", price: 550 },
    { sNo: 150, name: "10 x 10 Showtime", unit: "1 Box", price: 2700 },
  ]
},
{
  category: "Smoke",
  items: [
    { sNo: 151, name: "Multi Colour Smoke (3 Pcs)", unit: "1 Box", price: 180 },
    { sNo: 152, name: "Smoke Sticks (10 Pcs)", unit: "1 Box", price: 70 },
    { sNo: 153, name: "Bat & Ball", unit: "1 Box", price: 250 },
  ]
},
{
  category: "Roll Cap",
  items: [
    { sNo: 154, name: "Roll Cap", unit: "1 Box", price: 50 },
    { sNo: 155, name: "Ring Cap With Gun", unit: "1 Box", price: 250 },
  ]
},
{
  category: "Colour Matches",
  items: [
    { sNo: 156, name: "Flash 2000 - (3 in 1)", unit: "1 Box", price: 80 },
    { sNo: 157, name: "Butterfly - (8 in 1)", unit: "1 Box", price: 90 },
    { sNo: 158, name: "Torch - (3 in 1)", unit: "1 Box", price: 100 },
    { sNo: 159, name: "Dashara - (10 in 1)", unit: "1 Box", price: 200 },
  ]
},
{
  category: "Snake Tablets",
  items: [
    { sNo: 160, name: "Serpant Eggs Big", unit: "1 Box", price: 25 },
    { sNo: 161, name: "Anaconda", unit: "1 Box", price: 90 },
  ]
}



  // ... Add all further categories and products as in PDF[1].
];

// Terms & payment info
const terms = [
  "The Price given is Factory Outlet Price - No Discount.",
  "Quantity Discount: For purchase above ₹10,000 – ₹20,000: 5% Discount.",
  "For purchase above ₹20,100 and above: 10% Discount.",
  "GOODS SOLD CANNOT BE TAKEN BACK.",
  "Price is Ex. SIVAKASI, Transport up to your destination will be extra.",
  "GST will be applicable as per Govt. Notification.",
];

// Bank & contact info
const bankInfo = [
  { label: "Name", value: "PATHMA GURU RAJA A M N" },
  { label: "A/c Number", value: "34937296503" },
  { label: "Bank Name", value: "STATE BANK OF INDIA" },
  { label: "Branch", value: "SIVAKASI TOWN" },
  { label: "IFSC Code", value: "SBIN0009664" },
  { label: "GPay & Paytm", value: "97913 70913" },
  { label: "UPI ID", value: "pathmaguru1999@oksbi" },
];
const Data = () => {
   const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.sNo === item.sNo);
      if (existing) {
        return prev.map((p) =>
          p.sNo === item.sNo ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };
  return (
    <div>
        <Container className="my-5">
          <Row className="mb-4 text-center">
            <Col>
              <h2 className="fw-bold text-danger">Leo Crackers – Full Price List 2024</h2>
              <p className="lead">Retail Supply at <strong>Factory Outlet Price</strong> of Quality Crackers<br />Sivakasi, Tamil Nadu</p>
            </Col>
          </Row>
          {crackerData.map((section, idx) => (
            <Card className="mb-4" key={idx}>
              <Card.Header className="bg-warning fw-bold">{section.category}</Card.Header>
              <Card.Body className="p-0">
                <Table bordered hover responsive size="sm" className="m-0">
                  <thead>
                    <tr style={{ background: "#ffe4b5" }}>
                      <th>S.No.</th>
                      <th>Product Name</th>
                      <th>Units</th>
                      <th>Price (₹)</th>
                       <th>Add</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.items.map(item => (
                      <tr key={item.sNo}>
                        <td>{item.sNo}</td>
                        <td>{item.name}</td>
                        <td>{item.unit}</td>
                        <td>{item.price}</td>
                             <td>
                              <Button
                                variant="success"
                                size="sm"
                                onClick={() => addToCart(item)}
                              >
                                Add to Cart
                              </Button>
                            </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          ))}
      
          <Row className="mb-4">
            <Col>
              <Card>
                <Card.Header className="bg-info fw-bold text-white">Discounts & Payment Details</Card.Header>
                <Card.Body>
                  {terms.map((term, i) => <li key={i}>{term}</li>)}
                  <hr />
                  <h5>Bank Details</h5>
                  <Table bordered size="sm">
                    <tbody>
                      {bankInfo.map((info, i) => (
                        <tr key={i}>
                          <td className="fw-bold">{info.label}</td>
                          <td>{info.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  <p>
                    For bulk orders: <strong>74186 28592</strong>, <strong>97913 70913</strong> <br />
                    Order via WhatsApp, GPay, Paytm, or Bank Transfer.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      
          <Row>
            <Col>
              <Card bg="success" text="white" className="text-center mb-5">
                <Card.Body>
                  <h5>🎇 Celebrate this festive season with Leo Crackers – Direct from Sivakasi! 🎇</h5>
                  <Button variant="warning" size="lg" className="mt-3">
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
    </div>
  )
}

export default Data
