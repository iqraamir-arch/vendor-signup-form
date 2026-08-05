"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

// Dynamic Branding Mock Data
const MOCK_VENDOR = {
  name: "Oppo Store",
  colorPrimary: "#00875A",
};

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Vendor Branding */}
      <header
        className="shadow-md bg-white border-b"
        style={{ borderTop: `6px solid ${MOCK_VENDOR.colorPrimary}` }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/storefront"
            className="text-xl font-bold text-gray-800 flex items-center gap-2 hover:opacity-80 transition"
          >
            ← Back to {MOCK_VENDOR.name}
          </Link>
          <button
            className="px-4 py-2 text-white font-medium rounded-lg shadow transition hover:opacity-90"
            style={{ backgroundColor: MOCK_VENDOR.colorPrimary }}
          >
            Cart (0)
          </button>
        </div>
      </header>

      {/* Main Product Detail Section */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 p-6 border">
          {/* Product Image Placeholder */}
          <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 font-semibold border">
            Product Image (#{productId})
          </div>

          {/* Product Details & Actions */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-green-100 text-green-800 rounded-full">
                In Stock
              </span>

              <h1 className="text-3xl font-extrabold text-gray-900 mt-4 mb-2">
                Oppo Product #{productId}
              </h1>

              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                High-quality product offered exclusively by {MOCK_VENDOR.name}.
                Features premium design, official brand warranty, and durable
                build quality.
              </p>

              <div
                className="text-3xl font-extrabold mb-6"
                style={{ color: MOCK_VENDOR.colorPrimary }}
              >
                $599.00
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                className="w-full py-3 text-white font-bold rounded-lg shadow-md hover:opacity-90 transition text-lg"
                style={{ backgroundColor: MOCK_VENDOR.colorPrimary }}
              >
                Add to Cart
              </button>

              <Link
                href="/storefront"
                className="block text-center w-full py-2 text-gray-600 font-medium hover:underline text-sm"
              >
                Back to Storefront
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
