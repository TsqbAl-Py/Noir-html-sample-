const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// <-- (BARU) Tambahkan kode ini sebelum app.listen -->
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
// <-------------------------------------------------->

// Menjalankan Server

// Data Dummy Produk NOIR
const products = [
    {
        id: 1,
        category: "Essential",
        name: "Signature Black",
        price: "Rp299.000",
        imageShapeClass: "product-shape"
    },
    {
        id: 2,
        category: "Premium",
        name: "Midnight Edition",
        price: "Rp449.000",
        imageShapeClass: "product-shape"
    },
    {
        id: 3,
        category: "Limited",
        name: "Dark Collection",
        price: "Rp599.000",
        imageShapeClass: "product-shape"
    },
    {
        id: 4,
        category: "Limited",
        name: "Noir x YB",
        price: "Rp799.000",
        imageShapeClass: "product-shape"
    }
];

// Endpoint untuk mendapatkan semua produk
app.get('/api/products', (req, res) => {
    res.json({
        success: true,
        message: "Data produk berhasil diambil",
        data: products
    });
});

// Menjalankan Server
module.exports = app;
