"use client"

import type React from "react"
import { useState, useMemo } from "react" // Imported useMemo for robust validation
import Link from "next/link"
import { ChevronLeft, AlertCircle, Loader2 } from "lucide-react" // Added Loader2 for loading state
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useCart } from "@/hooks/use-cart"

const ORDER_API_ENDPOINT = `https://preciousadedokun.com.ng/test23/paystack.php?action=initiate`

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCart()
  const total = getTotalPrice()
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientEmail: "",
    recipientPhone: "",
    recipientAddress: "",
    recipientCity: "",
    recipientCountry: "",
    senderName: "",
    senderEmail: "", // CRITICAL FIELD
    message: "",
  })
  
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // --- Robust Client-Side Validation ---
  const isFormValid = useMemo(() => {
    const requiredFields = [
        formData.recipientName,
        formData.recipientEmail,
        formData.recipientPhone,
        formData.recipientAddress,
        formData.recipientCity,
        formData.recipientCountry,
        formData.senderName,
        formData.senderEmail, // CRITICAL: Must be checked
    ];
    
    const allRequiredFieldsFilled = requiredFields.every(val => val.trim() !== "");
    
    // CRITICAL: Total must be greater than zero, and all required fields must be filled
    return allRequiredFieldsFilled && total > 0;
  }, [formData, total]);
  // -------------------------------------

  const initiatePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isFormValid) {
        setError("Please fill out all required fields and ensure your cart is not empty.");
        return;
    }

    setError(null)
    setIsLoading(true)

    // 1. Prepare Order Payload for the Backend
    // CRITICAL FIX: Flattened the structure to ensure 'total' and 'senderEmail' are at the root
    const orderData = {
        // --- CRITICAL FIELDS (Required by your PHP handler) ---
        total: total, // FIX 1: PHP expects 'total', not 'total_amount'
        senderEmail: formData.senderEmail, // FIX 2: PHP expects 'senderEmail' at the root
        
        // Paystack needs a redirect URL to send the user back after payment attempt
        statusUrl: window.location.origin + "/checkout/status", 
        // ----------------------------------------------------

        // --- Other data for backend processing/storage ---
        recipientName: formData.recipientName,
        recipientEmail: formData.recipientEmail,
        recipientPhone: formData.recipientPhone,
        recipientAddress: formData.recipientAddress,
        recipientCity: formData.recipientCity,
        recipientCountry: formData.recipientCountry,
        senderName: formData.senderName,
        message: formData.message,

        // Cart items for metadata
        items: items.map(item => ({
            product_id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
        })),
    }

    try {
      const res = await fetch(ORDER_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const data = await res.json()

      // Paystack response check
      // Note: Paystack responses often return the authorization URL under data.authorization_url,
      // but if your PHP handler flattens it, it might be at the root. We check both based on the
      // common Paystack pattern in your previous code: data.data?.authorization_url
      const authUrl = data.data?.authorization_url || data.authorization_url;

      if (res.ok && data.status === 'success' && authUrl) {
        clearCart() 
        window.location.href = authUrl

      } else {
        // Log the full response to the browser console for debugging the PHP output
        console.error('Paystack Init Failed Response:', data); 
        setError(data.message || 'Failed to initialize payment. Please check console for details.')
      }

    } catch (err) {
      console.error('Checkout API Network Error:', err)
      setError('A network error occurred. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass = "px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 shadow-sm w-full";
  const primaryColor = "text-indigo-600";
  const primaryBg = "bg-indigo-600";
  const cardClass = "p-6 border border-gray-200 rounded-xl bg-white shadow-xl"; // Adjusted for better aesthetics

  if (items.length === 0 || total === 0) {
    return (
      <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
        {/* Tailwind CSS import for consistent styling */}
        <script src="https://cdn.tailwindcss.com"></script>
        <style>{`body { font-family: "Inter", sans-serif; }`}</style>
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Your Cart Is Empty</h1>
          <p className="text-gray-600 mb-6">You need to add items to your cart before proceeding to checkout.</p>
          <Link href="/store" className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white ${primaryBg} hover:bg-indigo-700`}>
            Return to store
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        body { font-family: "Inter", sans-serif; }
        .sticky-top-20 { top: 5rem; }
      `}</style>
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/cart"
          className={`flex items-center gap-2 ${primaryColor} hover:text-indigo-500 transition-colors mb-8 text-lg font-medium`}
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Cart
        </Link>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-12">Secure Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={initiatePayment} className="space-y-8">
              {/* Recipient Information */}
              <div className={cardClass}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">1. Recipient Information *</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="recipientName"
                    placeholder="Recipient Name *"
                    value={formData.recipientName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="recipientEmail"
                    placeholder="Recipient Email *"
                    value={formData.recipientEmail}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    name="recipientPhone"
                    placeholder="Recipient Phone *"
                    value={formData.recipientPhone}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="text"
                    name="recipientCountry"
                    placeholder="Country *"
                    value={formData.recipientCountry}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="text"
                    name="recipientCity"
                    placeholder="City *"
                    value={formData.recipientCity}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <textarea
                    name="recipientAddress"
                    placeholder="Delivery Address *"
                    value={formData.recipientAddress}
                    onChange={handleChange}
                    required
                    rows={3}
                    className={`${inputClass} md:col-span-2`}
                  />
                </div>
              </div>

              {/* Sender Information */}
              <div className={cardClass}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">2. Your Information (Payer) *</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="senderName"
                    placeholder="Your Name *"
                    value={formData.senderName}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="senderEmail"
                    placeholder="Your Email (for payment) *"
                    value={formData.senderEmail}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                  <textarea
                    name="message"
                    placeholder="Personal Message (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputClass} md:col-span-2`}
                  />
                </div>
              </div>

              {/* Payment Notice */}
              <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-xl flex gap-3 shadow-sm">
                <AlertCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Secure Payment via Paystack</p>
                  <p className="text-gray-600 text-sm">
                    Ensure the email provided in Section 2 is correct, as Paystack requires it to initiate the transaction.
                  </p>
                </div>
              </div>
              
              {/* Error Display */}
              {error && (
                <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-xl flex gap-3 shadow-md">
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <p className="text-sm font-medium">{error}</p>
                </div>
              )}

              <button
                type="submit"
                // Disable if loading OR if the form is invalid
                disabled={isLoading || !isFormValid}
                className={`w-full text-white py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                    isLoading || !isFormValid 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : `bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200`
                }`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Connecting to Paystack...
                  </>
                ) : (
                  <>
                    Proceed to Paystack (₦{total.toLocaleString()})
                  </>
                )}
              </button>

              {!isFormValid && (
                    <p className="text-red-500 text-center text-sm font-medium pt-2">
                        * Please fill all fields marked with * and ensure the cart total is greater than zero.
                    </p>
                )}
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className={`${cardClass} sticky-top-20`}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-gray-600 text-sm">
                    <span className="truncate pr-2">
                      {item.name} x{item.quantity}
                    </span>
                    <span className="font-medium">₦{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-500 text-base">
                  <span>Subtotal</span>
                  <span className="font-medium">₦{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-500 text-base">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">Free</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-extrabold text-gray-900 text-xl">Total Due</span>
                <span className={`text-3xl font-extrabold ${primaryColor}`}>₦{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
