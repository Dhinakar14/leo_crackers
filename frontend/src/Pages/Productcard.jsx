import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form, Pagination } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Maqrquee from './Marquee'
// Your actual cracker data from the price list
const crackerData = [
  {
    "category": "Gift Boxs",
    "items": [
      { "sNo": 183, "name": "Classic 25+ Varieties", "unit": "1 Box", "price": 2700, image: "public/assets/gf1.jpeg"},
      { "sNo": 184, "name": "Premium 30+ Varieties", "unit": "1 Box", "price": 3600, image:"/public/assets/premiumgf.jpeg" },
      { "sNo": 185, "name": "Elite 40+ Varieties", "unit": "1 Box", "price": 4500, image:"/public/assets/gf3.jpeg" },
      { "sNo": 186, "name": "Gold 50+ Varieties", "unit": "1 Box", "price": 6300, image:"/public/assets/gf4.jpeg" }
    ]
  },
  {
    "category": "One Sound Crackers",
    "items": [
      { "sNo": 1, "name": "4\" Ganesh Mega Dlx Crackers", "unit": "1 Box", "price": 50 ,image: "public/assets/2 sound.png"},
      { "sNo": 2, "name": "4\" Gold Lakshmi Crackers", "unit": "1 Box", "price": 53, image: "public/assets/3 sound.png" },
      { "sNo": 3, "name": "4\" Dlx Lakshmi Crackers", "unit": "1 Box", "price": 101, image: "public/assets/lakshmi.png"},
      { "sNo": 4, "name": "4\" Lakshmi Crackers", "unit": "1 Box", "price": 29, image: "public/assets/gold lakshmi.png"},
      { "sNo": 5, "name": "3 1/2\" Lakshmi Crackers", "unit": "1 Box", "price": 22, image: "public/assets/lakshmi.png" },
      { "sNo": 6, "name": "2 3/3\" Kuruvi Crackers", "unit": "1 Box", "price": 29, image: "public/assets/kuruvi.png"},
      { "sNo": 7, "name": "4\" Kuruvi Crackers", "unit": "1 Box", "price": 367, image: "public/assets/kuruvi.png" },
      { "sNo": 8, "name": "5\" Hulk Crackers", "unit": "1 Box", "price": 115, image: "public/assets/2 sound.png"},
      { "sNo": 9, "name": "2 Sound Crackers", "unit": "1 Box", "price": 58, image: "public/assets/3 sound.png"  },
      { "sNo": 10, "name": "3 Sound Crackers", "unit": "1 Box", "price": 197, image: "public/assets/3 sound.png" }
    ]
  },
  {
    "category": "Sparklers",
    "items": [
      { "sNo": 11, "name": "7 cm Electric Sparklers", "unit": "1 Box", "price": 29, image: "public/assets/10cm electric.png" },
      { "sNo": 12, "name": "7 cm Colour Sparklers", "unit": "1 Box", "price": 17, image: "public/assets/7cm colour.png" },
      { "sNo": 13, "name": "7 cm Green Sparklers", "unit": "1 Box", "price": 46, image: "public/assets/10cm green.png" },
      { "sNo": 14, "name": "7 cm Red Sparklers", "unit": "1 Box", "price": 24, image: "public/assets/10cm red.png" },
      { "sNo": 15, "name": "10 cm Electric Sparklers", "unit": "1 Box", "price": 26, image: "public/assets/15cm electric.png" },
      { "sNo": 16, "name": "10 cm Colour Sparklers", "unit": "1 Box", "price": 30, image: "public/assets/10cm colour.png" },
      { "sNo": 17, "name": "10 cm Green Sparklers", "unit": "1 Box", "price": 35, image: "public/assets/10cm green.png"  },
      { "sNo": 18, "name": "10 cm Red Sparklers", "unit": "1 Box", "price": 39, image: "public/assets/10cm red.png" },
      { "sNo": 19, "name": "Rainbow Sparklers (50 pcs)", "unit": "1 Box", "price": 211, image: "public/assets/15cm electric.png" },
      { "sNo": 20, "name": "15 cm Electric Sparklers", "unit": "1 Box", "price": 70, image: "public/assets/10cm colour.png" },
      { "sNo": 21, "name": "15 cm Colour Sparklers", "unit": "1 Box", "price": 77, image: "public/assets/15cm green.png" },
      { "sNo": 22, "name": "15 cm Green Sparklers", "unit": "1 Box", "price": 88, image: "public/assets/10cm red.png" },
      { "sNo": 23, "name": "15 cm Red Sparklers", "unit": "1 Box", "price": 82, image: "public/assets/10cm electric.png" },
      { "sNo": 24, "name": "15 cm Sona Sparklers", "unit": "1 Box", "price": 74, image: "public/assets/15cm electric.png" },
      { "sNo": 25, "name": "15 cm Super Mix Sparklers", "unit": "1 Box", "price": 74, image: "public/assets/30cm colour.png" },
      { "sNo": 26, "name": "15 cm Super Mix tube (30 pcs)", "unit": "1 Box", "price": 470, image: "public/assets/15cm green.png" },
      { "sNo": 27, "name": "15 cm American Diamonds Sparklers", "unit": "1 Box", "price": 74, image: "public/assets/30cm red.png" },
      { "sNo": 28, "name": "30 cm Electric Sparklers", "unit": "1 Box", "price": 130, image: "public/assets/30 shot multicolor.png" },
      { "sNo": 29, "name": "30 cm Colour Sparklers", "unit": "1 Box", "price": 77, image: "public/assets/10cm electric.png" },
      { "sNo": 30, "name": "30 cm Green Sparklers", "unit": "1 Box", "price": 88, image: "public/assets/15cm electric.png" },
      { "sNo": 31, "name": "30 cm Red Sparklers", "unit": "1 Box", "price": 165, image: "public/assets/15cm electric.png"},
      { "sNo": 32, "name": "30 cm Super Mix Tube", "unit": "1 Box", "price": 165, image: "public/assets/10cm red.png" },
      { "sNo": 33, "name": "50 cm Super Mix Tube", "unit": "1 Box", "price": 240, image: "public/assets/15cm electric.png" }
    ]
  },
  {
    "category": "Chakkars",
    "items": [
      { "sNo": 34, "name": "Merry Go Round Sparklers", "unit": "1 Box", "price": 456, image: "public/assets/fp special.png" },
      { "sNo": 35, "name": "Metro Ground Chakkar Big (10 pcs)", "unit": "1 Box", "price": 125, image: "public/assets/flowerbig.png"},
      { "sNo": 36, "name": "Metro Ground Chakkar Big (25 pcs)", "unit": "1 Box", "price": 288, image: "public/assets/flowerpot.png" },
      { "sNo": 37, "name": "Metro Ground Chakkar Ashoka (10 pcs)", "unit": "1 Box", "price": 178, image: "public/assets/mp redia.png" },
      { "sNo": 38, "name": "Metro Ground Chakkar Special (10 pcs)", "unit": "1 Box", "price": 120, image: "public/assets/deluxe.png" },
      { "sNo": 39, "name": "Hayagrivar Ground Chakkar Spinner (10 Pcs)", "unit": "1 Box", "price": 187, image: "public/assets/koti.png"  }
    ]
  },
  {
    "category": "Fancy Wheels",
    "items": [
      { "sNo": 40, "name": "Sunflower Wheel (5 pcs)", "unit": "1 Box", "price": 120, image: "/public/assets/arabian.png" },
      { "sNo": 41, "name": "Honeybee Wheel (5 pcs)", "unit": "1 Box", "price": 108, image: "/public/assets/saxony.png" },
      { "sNo": 42, "name": "Ayyan Lotus Wheel", "unit": "1 Box", "price": 216, image: "/public/assets/welcome.png" },
      { "sNo": 43, "name": "Ayyan Rio Wheel Pink", "unit": "1 Box", "price": 276, image: "/public/assets/waterqueen.png" },
      { "sNo": 44, "name": "Wire Chakkar (10 pcs)", "unit": "1 Box", "price": 216,  image: "/public/assets/papcorn.png" },
      { "sNo": 45, "name": "Whistling Wheel (10 pcs)", "unit": "1 Box", "price": 192, image: "/public/assets/arabian.png" },
      { "sNo": 46, "name": "Ayyan Zodiac Spinner", "unit": "1 Box", "price": 252, image: "/public/assets/waterqueen.png" },
      { "sNo": 47, "name": "Ayyan Cocktail Spinner", "unit": "1 Box", "price": 89, image: "/public/assets/arabian.png"  }
    ]
  },
  {
    "category": "Fountains",
    "items": [
      { "sNo": 48, "name": "Hayagrivar Flowerpots Big (10 pcs)", "unit": "1 Box", "price": 103, image: "/public/assets/arabian.png" },
      { "sNo": 49, "name": "Hayagrivar Flowerpots Special (10 pcs)", "unit": "1 Box", "price": 132, image: "/public/assets/saxony.png" },
      { "sNo": 50, "name": "Hayagrivar Flowerpots Giant (10 pcs)", "unit": "1 Box", "price": 199, image: "/public/assets/welcome.png" },
      { "sNo": 51, "name": "Hayagrivar Flowerpots Colour Koti (10 pcs)", "unit": "1 Box", "price": 300, image: "/public/assets/emu.png" },
      { "sNo": 52, "name": "Varshini Colour Koti Pink (10 pcs)", "unit": "1 Box", "price": 600, image: "/public/assets/waterqueen.png" },
      { "sNo": 53, "name": "Metro Colour Koti DLX (10 pcs)", "unit": "1 Box", "price": 1080, image: "/public/assets/papcorn.png" },
      { "sNo": 54, "name": "Metro Mega Colour Koti Super DLX (10 pcs)", "unit": "1 Box", "price": 840, image: "/public/assets/naragasura-1.png" },
      { "sNo": 55, "name": "Lassi (5 pcs)", "unit": "1 Box", "price": 156, image: "/public/assets/arabian.png" },
      { "sNo": 56, "name": "Tricolour Pots (5 pcs)", "unit": "1 Box", "price": 348, image: "/public/assets/waterqueen.png" },
      { "sNo": 57, "name": "Mayajal 5 in 1 (5 pcs)", "unit": "1 Box", "price": 696, image: "/public/assets/chitu.png" },
      { "sNo": 58, "name": "Ayyan Jadugar (4 pcs)", "unit": "1 Box", "price": 420, image: "/public/assets/chitu.png" },
      { "sNo": 59, "name": "Ayyan Purple Dove", "unit": "1 Box", "price": 192, image: "/public/assets/red-color.png" },
      { "sNo": 60, "name": "Ayyan Fire Drops", "unit": "1 Box", "price": 96, image: "/public/assets/red-color.png" },
      { "sNo": 61, "name": "Ayyan Snow Patrol", "unit": "1 Box", "price": 192, image: "/public/assets/red-color.png" },
      { "sNo": 62, "name": "Ayyan Lemon Tree Yellow", "unit": "1 Box", "price": 360, image: "/public/assets/chitu.png" },
      { "sNo": 63, "name": "Ayyan Lemon Tree Purple", "unit": "1 Box", "price": 360, image: "/public/assets/chitu.png" },
      { "sNo": 64, "name": "Ayyan Lemon Tree Silver", "unit": "1 Box", "price": 360, image: "/public/assets/chitu.png" },
      { "sNo": 65, "name": "Ayyan Lemon Tree Amber", "unit": "1 Box", "price": 360, image: "/public/assets/chitu.png" }
    ]
  },
  {
    "category": "Twinkling Stars",
    "items": [
      { "sNo": 66, "name": "1 1/2\" Twinkling Stars", "unit": "1 Box", "price": 46, image: "/public/assets/1.5twinklingstar.png" },
      { "sNo": 67, "name": "4\" Twinkling Stars", "unit": "1 Box", "price": 216, image: "/public/assets/paperbomb.png" },
      { "sNo": 68, "name": "Iron Man (10 pcs)", "unit": "1 Box", "price": 180, image: "public/assets/air rider.png" }
    ]
  },
  {
    "category": "Torches",
    "items": [
      { "sNo": 69, "name": "10\" Metro Pencil", "unit": "1 Box", "price": 103, image: "/public/assets/chituput.png" },
      { "sNo": 70, "name": "Sea Laser Red/Green", "unit": "1 Box", "price": 168, image: "/public/assets/colorsrain.png" },
      { "sNo": 71, "name": "Cascade Torch", "unit": "1 Box", "price": 180, image: "/public/assets/hilight.png" },
      { "sNo": 72, "name": "Chikoo/Bunty", "unit": "1 Box", "price": 528, image: "/public/assets/waterlight.png" },
      { "sNo": 73, "name": "Popcorn/Waterfalls", "unit": "1 Box", "price": 576, image: "/public/assets/spinners.png" },
      { "sNo": 74, "name": "Multicolour Smoke (3 pcs)", "unit": "1 Box", "price": 456, image: "/public/assets/firelingt.png" }
    ]
  },
  {
    "category": "Bombs",
    "items": [
      { "sNo": 75, "name": "Sholay Bomb", "unit": "1 Box", "price": 72, image: "public/assets/flowerbig.png" },
      { "sNo": 76, "name": "Hydro Bomb", "unit": "1 Box", "price": 96, image: "public/assets/fp special.png" },
      { "sNo": 77, "name": "King Bomb", "unit": "1 Box", "price": 259, image: "public/assets/mp redia.png" },
      { "sNo": 78, "name": "Classic Bomb", "unit": "1 Box", "price": 3, image: "public/assets/3 sound.png" },
      { "sNo": 79, "name": "Agni Bomb", "unit": "1 Box", "price": 216, image: "public/assets/koti.png" },
      { "sNo": 80, "name": "Digital Bomb", "unit": "1 Box", "price": 264, image: "public/assets/flowerbig.png" },
      { "sNo": 81, "name": "Paper Bomb 1 1/4\" kg", "unit": "1 Box", "price": 54, image: "public/assets/popoye.png" },
      { "sNo": 82, "name": "Paper Bomb (10 pcs)", "unit": "1 Box", "price": 1080, image: "/public/assets/short-gun.png" }
    ]
  },
  {
    "category": "Bijili Crackers",
    "items": [
      { "sNo": 83, "name": "Red Bijili (50 pcs)", "unit": "1 Box", "price": 26, image: "/public/assets/colorsrain.png" },
      { "sNo": 84, "name": "Red Bijili (100 pcs)", "unit": "1 Box", "price": 60, image: "/public/assets/colorsrain.png" },
      { "sNo": 85, "name": "Stripped Bijili (100 pcs)", "unit": "1 Box", "price": 65, image: "/public/assets/asarafibig.png" }
    ]
  },
  {
    "category": "Rockets",
    "items": [
      { "sNo": 86, "name": "Rocket Bomb (10 pcs)", "unit": "1 Box", "price": 168, image: "public/assets/color rocket.png" },
      { "sNo": 87, "name": "Lunik Rocket (10 pcs)", "unit": "1 Box", "price": 144, image: "public/assets/whistling rocket 10.png" },
      { "sNo": 88, "name": "Whistling Rocket (10 pcs)", "unit": "1 Box", "price": 264, image: "public/assets/lunik.png" },
      { "sNo": 89, "name": "Ayyan Akash Thoran", "unit": "1 Box", "price": 276, image: "public/assets/wr.png" },
      { "sNo": 90, "name": "Ayyan Sky Diver", "unit": "1 Box", "price": 582, image: "public/assets/color rocket.png" }
    ]
  },
  {
    "category": "Money Bomb",
    "items": [
      { "sNo": 91, "name": "Lucky Money (3 pcs)", "unit": "1 Box", "price": 252, image: "/public/assets/1.5twinklingstar.png" },
      { "sNo": 92, "name": "Mankatha (5 pcs)", "unit": "1 Box", "price": 288, image: "/public/assets/paperbomb.png" }
    ]
  },
  {
    "category": "Fancy Novelties",
    "items": [
      { "sNo": 93, "name": "Kit Kat (10 pcs)", "unit": "1 Box", "price": 29, image: "/public/assets/chitu.png" },
      { "sNo": 94, "name": "Jurassic Colour (10 pcs)", "unit": "1 Box", "price": 46, image: "/public/assets/wf.png" },
      { "sNo": 95, "name": "Panda (10 pcs)", "unit": "1 Box", "price": 83, image: "/public/assets/kpan.png" },
      { "sNo": 96, "name": "Asarafi Big (5 pcs)", "unit": "1 Box", "price": 84, image: "/public/assets/Jigarthanda.png" },
      { "sNo": 97, "name": "Electric Stone (10 pcs)", "unit": "1 Box", "price": 24, image: "/public/assets/asafi.png" },
      { "sNo": 98, "name": "Assorted Cartoons (10 pcs)", "unit": "1 Box", "price": 36, image: "public/assets/15cm green.png" },
      { "sNo": 99, "name": "Snake Cartoons (10 pcs)", "unit": "1 Box", "price": 48, image: "/public/assets/5in1 shower.png" },
      { "sNo": 100, "name": "Multi-shower 5in1 (5 pcs)", "unit": "1 Box", "price": 132, image: "/public/assets/pfe.png" },
      { "sNo": 101, "name": "Coco Colour Shower (5 pcs)", "unit": "1 Box", "price": 156, image: "/public/assets/colorrain.png" },
      { "sNo": 102, "name": "Colour Falls (5 pcs)", "unit": "1 Box", "price": 156, image: "/public/assets/red-color.png" },
      { "sNo": 103, "name": "Magic Gold (5 pcs)", "unit": "1 Box", "price": 156, image: "/public/assets/red-color.png" },
      { "sNo": 104, "name": "Peacock Feather Gold (5 pcs)", "unit": "1 Box", "price": 156, image: "/public/assets/chitu.png" },
      { "sNo": 105, "name": "Photoflash (5 pcs)", "unit": "1 Box", "price": 72, image: "/public/assets/redkid.png" },
      { "sNo": 106, "name": "Googly 5in1 (5 pcs)", "unit": "1 Box", "price": 241, image: "/public/assets/pr.png" },
      { "sNo": 107, "name": "Deccan Chargers (5 pcs)", "unit": "1 Box", "price": 190, image: "/public/assets/try me love.png" },
      { "sNo": 108, "name": "Mini Siren (5 pcs)", "unit": "1 Box", "price": 180, image: "/public/assets/short-gun.png" },
      { "sNo": 109, "name": "Big Siren (3 pcs)", "unit": "1 Box", "price": 264, image: "/public/assets/Jigarthanda.png" },
      { "sNo": 110, "name": "Crackling Fountain (3 pcs)", "unit": "1 Box", "price": 92, image: "/public/assets/hilight.png" },
      { "sNo": 111, "name": "Top Gun (5 pcs)", "unit": "1 Box", "price": 336, image: "/public/assets/spiner.png" },
      { "sNo": 112, "name": "Drone (5 pcs)", "unit": "1 Box", "price": 288, image: "/public/assets/kpan.png" },
      { "sNo": 113, "name": "Helicopter (5 pcs)", "unit": "1 Box", "price": 182, image: "/public/assets/egg.png" },
      { "sNo": 114, "name": "Butterfly (10 pcs)", "unit": "1 Box", "price": 120, image: "/public/assets/wf.png" },
      { "sNo": 115, "name": "Bambara (10 pcs)", "unit": "1 Box", "price": 120, image: "/public/assets/Jigarthanda.png" },
      { "sNo": 116, "name": "Candy Crush", "unit": "1 Box", "price": 386, image: "/public/assets/arabian.png" }
    ]
  },
  {
    "category": "3\" & 4\" Colourful Novelties",
    "items": [
      { "sNo": 117, "name": "Red Apple (5 pcs)", "unit": "1 Box", "price": 240, image: "public/assets/120 shot.png" },
      { "sNo": 118, "name": "Carnival Funfair (5 pcs)", "unit": "1 Box", "price": 240, image: "public/assets/30 shot multicolor.png" },
      { "sNo": 119, "name": "Mr. Big (5 pcs)", "unit": "1 Box", "price": 240, image: "public/assets/240 shot.png" },
      { "sNo": 120, "name": "Tooty Frooty (5 pcs)", "unit": "1 Box", "price": 240, image: "public/assets/60 shot.png" },
      { "sNo": 121, "name": "Bingo Music (5 pcs)", "unit": "1 Box", "price": 480, image: "public/assets/120 shot.png" },
      { "sNo": 122, "name": "Party Time (5 pcs)", "unit": "1 Box", "price": 240, image: "public/assets/30 shot multicolor.png" },
      { "sNo": 123, "name": "Honey Comb (5 pcs)", "unit": "1 Box", "price": 216, image: "public/assets/240 shot.png" },
      { "sNo": 124, "name": "Paris Tower (5 pcs)", "unit": "1 Box", "price": 216, image: "public/assets/60 shot.png" },
      { "sNo": 125, "name": "Genie (5 pcs)", "unit": "1 Box", "price": 216, image: "public/assets/120 shot.png" },
      { "sNo": 126, "name": "Buddy (5 pcs)", "unit": "1 Box", "price": 216, image: "public/assets/120 shot.png" },
      { "sNo": 127, "name": "Hot Show 5in1 (5 pcs)", "unit": "1 Box", "price": 600, image: "public/assets/30 shot multicolor.png" },
      { "sNo": 128, "name": "4\" Crackling Tin", "unit": "1 Box", "price": 386, image: "public/assets/240 shot.png" }
    ]
  },
  {
    "category": "Peacock",
    "items": [
      { "sNo": 129, "name": "Small Peacock", "unit": "1 Box", "price": 168, image: "/public/assets/peacockfather.png" },
      { "sNo": 130, "name": "Magic Peacock", "unit": "1 Box", "price": 240, image: "/public/assets/short-gun.png" },
      { "sNo": 131, "name": "Ayyan Golden Dawn", "unit": "1 Box", "price": 300, image: "/public/assets/bazooka.png" },
      { "sNo": 132, "name": "Smoke Peacock", "unit": "1 Box", "price": 240, image: "/public/assets/hilight.png" },
      { "sNo": 133, "name": "Spooky", "unit": "1 Box", "price": 540, image: "/public/assets/spinners.png" },
      { "sNo": 134, "name": "Bada Peacock", "unit": "1 Box", "price": 588, image: "/public/assets/peacockfather.png" }
    ]
  },
  {
    "category": "Sky Shots",
    "items": [
      { "sNo": 135, "name": "7 Shots (5 pcs)", "unit": "1 Box", "price": 192, image: "public/assets/air rider.png" },
      { "sNo": 136, "name": "ARD Sky Shots (10 pcs)", "unit": "1 Box", "price": 96, image: "public/assets/force mix.png" },
      { "sNo": 137, "name": "Astro Boy (5 pcs)", "unit": "1 Box", "price": 180, image: "public/assets/7 shots.png" },
      { "sNo": 138, "name": "Force Mix (2 pcs)", "unit": "1 Box", "price": 96, image: "public/assets/panda mix.png" },
      { "sNo": 139, "name": "Penta Dhamaka (5 pcs)", "unit": "1 Box", "price": 216, image: "public/assets/panda mix.png"}
    ]
  },
  {
    "category": "Aerial Shells",
    "items": [
      { "sNo": 140, "name": "1\" Chota fancy", "unit": "1 Box", "price": 60, image: "public/assets/chotta.png" },
      { "sNo": 141, "name": "2\" Aerial Out", "unit": "1 Box", "price": 168, image: "public/assets/lovely.png" },
      { "sNo": 142, "name": "1 3/4\" Aerial Out (3 pcs)", "unit": "1 Box", "price": 384, image: "public/assets/aerial out single.png" },
      { "sNo": 143, "name": "2\" Aerial Out (3 pcs)", "unit": "1 Box", "price": 480, image: "public/assets/aerial out single.png" },
      { "sNo": 144, "name": "3 1/2\" Aerial Out", "unit": "1 Box", "price": 360, image: "public/assets/niagara.png" },
      { "sNo": 145, "name": "4\" Aerial Out", "unit": "1 Box", "price": 456, image: "public/assets/chotta.png" },
      { "sNo": 146, "name": "4\" Aerial Out Double Ball", "unit": "1 Box", "price": 540, image: "public/assets/5x5 parrot.png" },
      { "sNo": 147, "name": "4\" Aerial Out (2 pcs)", "unit": "1 Box", "price": 960, image: "public/assets/lovely.png" },
      { "sNo": 148, "name": "4\" Niagara Falls", "unit": "1 Box", "price": 504, image: "public/assets/try me love.png" },
      { "sNo": 149, "name": "4\" Ayyan Violet Dance", "unit": "1 Box", "price": 720, image: "public/assets/aerial out single.png" },
      { "sNo": 150, "name": "4\" Ayyan Baby Pink", "unit": "1 Box", "price": 720, image: "public/assets/niagara.png" },
      { "sNo": 151, "name": "5\" Aerial Out", "unit": "1 Box", "price": 948, image: "public/assets/5x5 parrot.png" },
      { "sNo": 152, "name": "6\" Sonny Pyro Barbie", "unit": "1 Box", "price": 1000, image: "public/assets/30 shot multicolor.png" },
      { "sNo": 153, "name": "6\" Sonny Bumble Bee", "unit": "1 Box", "price": 1000, image: "public/assets/60 shot.png" }
    ]
  },
  {
    "category": "Repeating Shots",
    "items": [
      { "sNo": 154, "name": "12 Shots Rider", "unit": "1 Box", "price": 240, image: "public/assets/120 shot.png" },
      { "sNo": 155, "name": "12 Shots Colour", "unit": "1 Box", "price": 216, image: "public/assets/30 shot multicolor.png" },
      { "sNo": 156, "name": "15 Shots Multicolour", "unit": "1 Box", "price": 348, image: "public/assets/240 shot.png" },
      { "sNo": 157, "name": "25 Shots Crackling", "unit": "1 Box", "price": 360, image: "public/assets/60 shot.png" },
      { "sNo": 158, "name": "30 Shots Normal", "unit": "1 Box", "price": 540, image: "public/assets/120 shot.png" },
      { "sNo": 159, "name": "30 Shots Peacock Dance", "unit": "1 Box", "price": 600, image: "public/assets/30 shot multicolor.png" },
      { "sNo": 160, "name": "30 Shots Multicolour Crackling", "unit": "1 Box", "price": 660, image: "public/assets/240 shot.png" },
      { "sNo": 161, "name": "60 Shots Normal", "unit": "1 Box", "price": 1080, image: "public/assets/60 shot.png" },
      { "sNo": 162, "name": "60 Shots Multicolour Crackling", "unit": "1 Box", "price": 1320, image: "public/assets/120 shot.png" },
      { "sNo": 163, "name": "100 Shots Multicolour Crackling", "unit": "1 Box", "price": 2640, image: "public/assets/30 shot multicolor.png" },
      { "sNo": 164, "name": "120 Shots Multicolour Crackling", "unit": "1 Box", "price": 2760, image: "public/assets/240 shot.png" },
      { "sNo": 165, "name": "240 Shots Multicolour Crackling", "unit": "1 Box", "price": 4560, image: "public/assets/60 shot.png" }
    ]
  },
  {
    "category": "Mega Celebration",
    "items": [
      { "sNo": 166, "name": "Aura 5X10 Queen Stars", "unit": "1 Box", "price": 660, image: "public/assets/240 shot.png"},
      { "sNo": 167, "name": "Aura 10X10 Fun Cake", "unit": "1 Box", "price": 1740, image: "public/assets/120 shot.png" },
      { "sNo": 168, "name": "Liya 10X10 Sizzling", "unit": "1 Box", "price": 2100, image: "public/assets/30 shot multicolor.png" },
      { "sNo": 169, "name": "Liya 10X10 Taillight", "unit": "1 Box", "price": 2700, image: "public/assets/240 shot.png" },
      { "sNo": 170, "name": "Liya 10X10 Lights of Thunder", "unit": "1 Box", "price": 3200, image: "public/assets/60 shot.png" }
    ]
  },
  {
    "category": "Set Outs",
    "items": [
      { "sNo": 171, "name": "2\" 20 Set out", "unit": "1 Box", "price": 1296, image: "public/assets/2 sound.png" },
      { "sNo": 172, "name": "2\" 30 Set out", "unit": "1 Box", "price": 3360, image: "public/assets/flowerpot.png" },
      { "sNo": 173, "name": "2\" 40 Set out", "unit": "1 Box", "price": 2880, image: "public/assets/mp redia.png" }
    ]
  },
  {
    "category": "Colour Matches",
    "items": [
      { "sNo": 174, "name": "Butterfly 8in1", "unit": "1 Box", "price": 65, image: "public/assets/60 shot.png" },
      { "sNo": 175, "name": "Dhasara 10in1", "unit": "1 Box", "price": 134, image: "public/assets/60 shot.png" },
      { "sNo": 176, "name": "Superheroes 10in1", "unit": "1 Box", "price": 171, image: "public/assets/30 shot multicolor.png" }
    ]
  },
  {
    "category": "Snake Tablets",
    "items": [
      { "sNo": 177, "name": "Serpent Eggs Big", "unit": "1 Box", "price": 15, image: "public/assets/15cm green.png" },
      { "sNo": 178, "name": "Anaconda", "unit": "1 Box", "price": 54, image: "public/assets/30cm electric.png" }
    ]
  },
  {
    "category": "Roll Caps & Guns",
    "items": [
      { "sNo": 179, "name": "Roll Caps", "unit": "1 Box", "price": 116, image: "public/assets/3 sound.png" },
      { "sNo": 180, "name": "Ring Caps", "unit": "1 Box", "price": 15, image: "public/assets/lakshmi.png" },
      { "sNo": 181, "name": "Metal Roll Cap Gun", "unit": "1 Box", "price": 200, image: "public/assets/gold lakshmi.png" },
      { "sNo": 182, "name": "Metal Ring Cap Gun", "unit": "1 Box", "price": 320, image: "public/assets/10cm electric.png" }
    ]
  }
];

// Flatten all products into a single array
const allProducts = crackerData.flatMap(section =>
  section.items.map(item => ({ ...item, category: section.category }))
);

// Get unique categories for filter
const categories = crackerData.map(section => section.category);

const ProductPage = ({ cart = {}, addToCart, removeFromCart }) => {
  const { state } = useLocation();
  const [sortByPrice, setSortByPrice] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    if (state?.categoryName) {
      setSelectedCategories([state.categoryName]);
    }
  }, [state]);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handlePriceSortChange = (e) => {
    setSortByPrice(e.target.value);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSortByPrice("");
    setCurrentPage(1);
  };

  // Filter products
  const filteredProducts = allProducts
    .filter(product => {
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortByPrice === "lowToHigh") return a.price - b.price;
      if (sortByPrice === "highToLow") return b.price - a.price;
      return 0;
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate pagination items
  const getPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        items.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    } else {
      // First page
      items.push(
        <Pagination.Item
          key={1}
          active={1 === currentPage}
          onClick={() => handlePageChange(1)}
        >
          1
        </Pagination.Item>
      );

      // Ellipsis if needed
      if (currentPage > 3) {
        items.push(<Pagination.Ellipsis key="start-ellipsis" />);
      }

      // Middle pages
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          items.push(
            <Pagination.Item
              key={i}
              active={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </Pagination.Item>
          );
        }
      }

      // Ellipsis if needed
      if (currentPage < totalPages - 2) {
        items.push(<Pagination.Ellipsis key="end-ellipsis" />);
      }

      // Last page
      if (totalPages > 1) {
        items.push(
          <Pagination.Item
            key={totalPages}
            active={totalPages === currentPage}
            onClick={() => handlePageChange(totalPages)}
          >
            {totalPages}
          </Pagination.Item>
        );
      }
    }

    return items;
  };

  return (
    <><Maqrquee />
    <section className="product-section mt-4">
      
    
      <Container>
        {/* Header */}
       
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="text-danger fw-bold">Leo Crackers Products</h2>
                <p className="text-muted mb-0">
                  Showing {currentProducts.length} of {filteredProducts.length} products
                </p>
              </div>
              <div>
                <Button variant="outline-secondary" onClick={clearFilters}>
                  Clear All
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          {/* Sidebar Filters */}
          <Col lg={3} className="mb-4">
            <Card className="sticky-top" style={{ top: '7rem',zIndex: 0 }}>
              <Card.Header className="bg-warning">
                <h5 className="mb-0">Filters</h5>
              </Card.Header>
              <Card.Body>
                {/* Sort by Price */}
                <div className="mb-4">
                  <h6 className="mb-3">Sort by Price</h6>
                  <Form>
                    <Form.Check
                      type="radio"
                      name="priceSort"
                      label="Low to High"
                      value="lowToHigh"
                      onChange={handlePriceSortChange}
                      checked={sortByPrice === "lowToHigh"}
                    />
                    <Form.Check
                      type="radio"
                      name="priceSort"
                      label="High to Low"
                      value="highToLow"
                      onChange={handlePriceSortChange}
                      checked={sortByPrice === "highToLow"}
                    />
                  </Form>
                </div>

                {/* Categories */}
                <div className="mb-4">
                  <h6 className="mb-3">Categories</h6>
                  <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {categories.map((category) => (
                      <Form.Check
                        key={category}
                        type="checkbox"
                        label={`${category} (${allProducts.filter(p => p.category === category).length})`}
                        onChange={() => handleCategoryChange(category)}
                        checked={selectedCategories.includes(category)}
                        className="mb-2"
                      />
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Product Grid */}
          <Col lg={9}>
  {currentProducts.length > 0 ? (
    <>
      <Row className="g-4 mb-4">
        {currentProducts.map((product) => (
          <Col key={product.sNo} lg={4} md={6}>
            <Card className="h-100 shadow-sm product-card">
              <div className="position-relative">
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/200x200/FF6B6B/FFFFFF?text=${encodeURIComponent(
                      product.name.substring(0, 10)
                    )}`;
                  }}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
                  }}
                />
                <div className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1 small">
                  {product.category}
                </div>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="h6 mb-2" style={{ minHeight: "48px" }}>
                  {product.name}
                </Card.Title>
                <Card.Text className="mb-2">
                  <small className="text-muted">Unit: {product.unit}</small>
                </Card.Text>

                {/* ✅ Price with strikethrough */}
                <Card.Text className="mb-3">
                  <del className="text-muted me-2">₹{product.price * 2}</del>
                  <strong className="text-success fs-5">₹{product.price}</strong>
                </Card.Text>

                <div className="mt-auto">
                  {cart?.[product.sNo] ? (
                    <div className="d-flex justify-content-center align-items-center">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(product.sNo)}
                      >
                        −
                      </button>
                      <span className="mx-3">
                        {cart[product.sNo]?.quantity || 0}
                      </span>
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-primary w-100"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      {totalPages > 1 && (
        <Row>
          <Col className="d-flex justify-content-center">
            <Pagination>
              <Pagination.Prev
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              />
              {getPaginationItems()}
              <Pagination.Next
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              />
            </Pagination>
          </Col>
        </Row>
      )}
    </>
  ) : (
    <Row>
      <Col className="text-center py-5">
        <div className="text-muted">
          <h4>No products found</h4>
          <p>Try adjusting your filters</p>
          <Button variant="primary" onClick={clearFilters}>
            Clear All Filters
          </Button>
        </div>
      </Col>
    </Row>
  )}
</Col>

        </Row>
      </Container>

      <style jsx>{`
        .product-card {
          transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
        }
        .sticky-top {
          position: sticky;
          z-index: -1;
        }
      `}</style>
    </section></>
  );
};

export default ProductPage;