"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/default/signed-inheader";
import { Footer } from "@/app/default/footer";
import { getRequest } from "@/helpers/api";

// Define a type for billing data
type Billing = {
  id: string; // or number, depending on your data structure
  createdAt: string; // or Date, depending on your data structure
  amount: string; // or number, depending on your data structure
  status: string; // or any other type that fits your data
};

export default function BillingHistoryPage() {
  const router = useRouter();
  const [billingData, setBillingData] = useState<Billing[]>([]);
  const [loading, setLoading] = useState(true);

  const handleSubscriptionPlanClick = () => {
    router.push("/pricing");
  };

  useEffect(() => {
    const fetchBillingHistory = async () => {
      const userId = localStorage.getItem("userId");
      if (userId) {
        try {
          const response = await getRequest(`/billing/user/${userId}`);
          setBillingData(response);
        } catch (error) {
          console.error("Error fetching billing history:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchBillingHistory();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex space-x-2 text-sm mb-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              onClick={handleSubscriptionPlanClick}
            >
              Subscription plan
            </a>
            <span className="text-gray-500">•</span>
            <span className="text-blue-700 font-medium">Billing History</span>
          </nav>

          <h1 className="text-xl font-medium mb-6">
            You can see your billing history here
          </h1>

          {/* Loading Indicator */}
          {loading ? (
            <div className="shimmer-loader">Loading...</div>
          ) : (
            <div className="bg-blue-50 rounded-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 font-medium text-sm">
                <div>DATE</div>
                <div>PLAN</div>
                <div>PAYMENT METHOD</div>
                <div>ACTION</div>
              </div>

              {/* Billing Table */}
              {billingData.length > 0 ? (
                billingData.map((billing: Billing) => (
                  <div
                    key={billing.id}
                    className="grid grid-cols-4 gap-4 p-4 border-b"
                  >
                    <div>
                      {new Date(billing.createdAt).toLocaleDateString()}
                    </div>
                    <div>{billing.amount}</div>
                    <div>{billing.status}</div>
                    <div>
                      <button className="text-blue-600 hover:underline">
                        View
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white p-12 flex flex-col items-center justify-center text-center border rounded-lg">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-medium mb-2">
                    No billing data available.
                  </p>
                  <p className="text-gray-500">
                    Subscribe to your first ever Pro plan today!
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
