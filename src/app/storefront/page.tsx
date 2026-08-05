"use client";

import { useState } from "react";
import Link from "next/link";

// Mock Data
const MOCK_VENDOR = {
  name: "Oppo Store",
  logoUrl: "https://via.placeholder.com/150",
  colorPrimary: "#00875A",
  colorSecondary: "#00B8D9",
};

const MOCK_CATEGORIES = [
  { id: "all", name: "All Products" },
  { id: "1", name: "Televisions" },
  { id: "2", name: "Mobile Phones" },
  { id: "3", name: "Speakers" },
];

const MOCK_PRODUCTS = [
  {
    id: "101",
    categoryId: "2",
    name: "Oppo Find N3 Flip",
    price: 999,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "102",
    categoryId: "2",
    name: "Oppo Reno 10 Pro",
    price: 599,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "103",
    categoryId: "1",
    name: 'Oppo Smart TV 55"',
    price: 799,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "104",
    categoryId: "3",
    name: "Oppo Enco Wireless Speaker",
    price: 120,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "105",
    categoryId: "2",
    name: "Oppo A78 5G",
    price: 299,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "106",
    categoryId: "2",
    name: "Oppo Find X6 Pro",
    price: 1099,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "107",
    categoryId: "1",
    name: 'Oppo Ultra HD TV 65"',
    price: 999,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "108",
    categoryId: "3",
    name: "Oppo Studio Soundbar",
    price: 250,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "109",
    categoryId: "2",
    name: "Oppo Reno 8 Pro",
    price: 499,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "110",
    categoryId: "3",
    name: "Oppo Mini Bluetooth Speaker",
    price: 80,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "111",
    categoryId: "1",
    name: 'Oppo QLED TV 50"',
    price: 650,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "112",
    categoryId: "2",
    name: "Oppo K11x",
    price: 249,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "113",
    categoryId: "3",
    name: "Oppo Bass Boost Speaker",
    price: 150,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "114",
    categoryId: "2",
    name: "Oppo Find N2 Fold",
    price: 1399,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "115",
    categoryId: "1",
    name: 'Oppo Smart LED TV 43"',
    price: 450,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "116",
    categoryId: "2",
    name: "Oppo A98 5G",
    price: 320,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "117",
    categoryId: "3",
    name: "Oppo Party Speaker 100W",
    price: 350,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "118",
    categoryId: "2",
    name: "Oppo Reno 11 Pro",
    price: 649,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "119",
    categoryId: "1",
    name: 'Oppo OLED TV 75"',
    price: 1499,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "120",
    categoryId: "3",
    name: "Oppo Pocket Speaker",
    price: 45,
    image: "https://via.placeholder.com/200",
  },
];

export default function StorefrontPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? MOCK_PRODUCTS
      : MOCK_PRODUCTS.filter((p) => p.categoryId === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dynamic Header */}
      <header
        className="shadow-md bg-white border-b"
        style={{ borderTop: `6px solid ${MOCK_VENDOR.colorPrimary}` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{ backgroundColor: MOCK_VENDOR.colorPrimary }}
            >
              {MOCK_VENDOR.name[0]}
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              {MOCK_VENDOR.name}
            </h1>
          </div>
          <button
            className="px-4 py-2 text-white font-medium rounded-lg shadow transition hover:opacity-90"
            style={{ backgroundColor: MOCK_VENDOR.colorPrimary }}
          >
            Cart (0)
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {MOCK_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition ${
                selectedCategory === cat.id
                  ? "text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-200 border"
              }`}
              style={{
                backgroundColor:
                  selectedCategory === cat.id
                    ? MOCK_VENDOR.colorPrimary
                    : undefined,
              }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow border overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-400 font-medium">
                Product Image ({product.id})
              </div>
              <div className="p-4">
                <h3 className="font-bold text-gray-800 text-lg mb-1">
                  {product.name}
                </h3>
                <p
                  className="text-xl font-extrabold mb-4"
                  style={{ color: MOCK_VENDOR.colorPrimary }}
                >
                  ${product.price}
                </p>
                <Link
                  href={`/storefront/product/${product.id}`}
                  className="block text-center w-full py-2 rounded-lg font-semibold border transition hover:bg-gray-50"
                  style={{
                    color: MOCK_VENDOR.colorPrimary,
                    borderColor: MOCK_VENDOR.colorPrimary,
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
