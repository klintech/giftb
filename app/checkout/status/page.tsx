"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { CheckCircle, XCircle, ChevronLeft } from "lucide-react" 
import { Loader2 } from "lucide-react" 
import { Header } from "@/components/header"

import { Footer } from "@/components/footer"
const Link: React.FC<{ href: string; children: React.ReactNode; className?: string }> = ({ href, children, className }) => (
    <a href={href} className={className}>
        {children}
    </a>
);
const VERIFY_API_ENDPOINT = `https://preciousadedokun.com.ng/test23/paystack.php?action=status`; 

type Status = 'loading' | 'success' | 'failure';

interface TransactionDetails {
    reference: string;
    amount: number; // Amount in the smallest unit (e.g., kobo for NGN)
    email: string;
    status: 'success' | 'failed';
    currency: string;
    date: string;
}

export default function CheckoutStatusPage() {
    const [status, setStatus] = useState<Status>('loading');
    const [transactionDetails, setTransactionDetails] = useState<TransactionDetails | null>(null);
    const [error, setError] = useState<string | null>(null);

    const getQueryParam = (name: string): string | null => {
        if (typeof window === 'undefined') return null;
        const params = new URLSearchParams(window.location.search);
        return params.get(name) || null;
    };

    const verifyPayment = useCallback(async (reference: string) => {
        setStatus('loading');
        setError(null);
        
        try {
            const res = await fetch(`${VERIFY_API_ENDPOINT}&reference=${reference}`, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await res.json();
            
            console.log('Verification API Response:', data);
           if (res.ok && data.status === 'success' && data.data?.status === 'success') {
                const verificationData = data.data;

                const confirmedDetails: TransactionDetails = {
                    reference: verificationData.reference,
                    amount: verificationData.amount, 
                    email: verificationData.customer?.email || 'N/A',
                    status: 'success',
                    currency: verificationData.currency || 'NGN',
                    date: new Date(verificationData.paid_at).toLocaleDateString() || new Date().toLocaleDateString(),
                };

                setTransactionDetails(confirmedDetails);
                setStatus('success');
            } else {
                // Payment failure or verification script error
                setError(data.message || 'Payment verification failed. The transaction might have failed or been abandoned.');
                setStatus('failure');
            }
        } catch (e) {
            console.error('Verification Network Error:', e);
            setError('A network error occurred while attempting to verify the payment.');
            setStatus('failure');
        }
    }, []);

    useEffect(() => {
        const reference = getQueryParam('reference') || getQueryParam('trxref');
        
        if (reference) {
            verifyPayment(reference);
        } else {
            setError('No transaction reference found in the URL. Cannot verify payment status.');
            setStatus('failure');
        }
    }, [verifyPayment]);

    // --- UI RENDERING HELPERS ---

    const LoadingCard: React.FC = () => (
        <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-lg mx-auto border-t-4 border-indigo-500">
            <Loader2 className="w-16 h-16 text-indigo-500 mx-auto animate-spin mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Verifying Payment...</h2>
            <p className="text-gray-600 mb-4">
                Please wait while we securely confirm your transaction with your backend.
            </p>
            <p className="text-sm text-gray-400">Reference: {getQueryParam('reference') || getQueryParam('trxref') || 'N/A'}</p>
        </div>
    );

    const SuccessCard: React.FC = () => (
        <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-lg mx-auto border-t-4 border-green-500">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
            <p className="text-lg text-gray-600 mb-6">
                Your payment was successful and your order has been placed.
            </p>
            {transactionDetails && (
                <div className="text-left bg-green-50 p-4 rounded-lg space-y-2 border border-green-200">
                    <p className="text-sm font-medium text-gray-700 flex justify-between">
                        <span>Reference:</span> 
                        <span className="font-mono text-gray-900 truncate">{transactionDetails.reference}</span>
                    </p>
                    <p className="text-sm font-medium text-gray-700 flex justify-between">
                        <span>Customer Email:</span> 
                        <span className="font-medium text-gray-900 truncate">{transactionDetails.email}</span>
                    </p>
                    <p className="text-sm font-medium text-gray-700 flex justify-between border-t pt-2">
                        <span>Total Paid:</span> 
                        <span className="text-xl font-extrabold text-green-600">
                            {/* Format amount: convert from kobo/cent (smallest unit) to Naira/currency unit */}
                            {new Intl.NumberFormat('en-NG', { 
                                style: 'currency', 
                                currency: transactionDetails.currency || 'NGN',
                            }).format(transactionDetails.amount / 100)} 
                        </span>
                    </p>
                    <p className="text-xs text-gray-500">Verified on: {transactionDetails.date}</p>
                </div>
            )}
            <Link 
                href="/store" 
                className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
                Continue Shopping
            </Link>
        </div>
    );

    const FailureCard: React.FC = () => (
        <div className="bg-white p-10 rounded-xl shadow-2xl text-center max-w-lg mx-auto border-t-4 border-red-500">
            <XCircle className="w-20 h-20 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Verification Failed</h2>
            <p className="text-lg text-gray-600 mb-6">
                We could not confirm the transaction. Your order was not placed.
            </p>
            {error && (
                <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200 mb-4">{error}</p>
            )}
            <div className="space-y-3 mt-8">
                <Link 
                    href="/cart" 
                    className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Return to Cart to Try Again
                </Link>
                <p className="text-sm text-gray-500 pt-2">
                    Reference: {getQueryParam('reference') || getQueryParam('trxref') || 'N/A'}
                </p>
            </div>
        </div>
    );


    const Content = () => {
        switch (status) {
            case 'loading':
                return <LoadingCard />;
            case 'success':
                return <SuccessCard />;
            case 'failure':
                return <FailureCard />;
            default:
                return null;
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 font-sans text-gray-800">
            <script src="https://cdn.tailwindcss.com"></script>
            <style>{`body { font-family: "Inter", sans-serif; }`}</style>
            <Header />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {Content()}
            </div>
            <Footer />
        </main>
    );
}
