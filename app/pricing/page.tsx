"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, Mail, Settings, Users } from "lucide-react";
import { useState } from "react";

const pricingTiers = [
  {
    name: "Free",
    monthlyPrice: "฿0",
    yearlyPrice: "฿0",
    period: "Forever",
    description: "For individuals looking to manage their things",
    features: {
      users: "1 user",
      products: "Up to 5 products",
      units: "Up to 3 unit",
      subunits: "Up to 3 subunits",
      categoryCards: "Maximum 3 category cards",
      inventoryManagement: true,
      qrCodes: true,
      mobileApp: true,
      basicSupport: true,
      customFields: true,
      productTracking: false,
      assetAssignment: false,
      exportData: false,
      analyticsDashboard: false,
    },
    popular: false,
    cta: "Get Started Free",
    ctaVariant: "outline" as const,
  },
  {
    name: "Starter",
    monthlyPrice: "฿1,199",
    yearlyPrice: "฿999",
    period: "per month",
    description: "Ideal for growing teams and small businesses",
    features: {
      users: "Up to 5 users",
      products: "Up to 10 products",
      units: "Up to 5 units",
      subunits: "Up to 10 subunits",
      categoryCards: "Maximum 10 category cards",
      inventoryManagement: true,
      qrCodes: true,
      mobileApp: true,
      basicSupport: true,
      customFields: true,
      productTracking: true,
      assetAssignment: false,
      exportData: false,
      analyticsDashboard: false,
    },
    popular: false,
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
  },
  {
    name: "Standard",
    monthlyPrice: "฿2,999",
    yearlyPrice: "฿2,699",
    period: "per month",
    description: "Best for medium-sized organizations",
    features: {
      users: "Up to 10 users",
      products: "Up to 20 products",
      units: "Up to 10 units",
      subunits: "Up to 20 subunits",
      categoryCards: "Maximum 25 category cards",
      inventoryManagement: true,
      qrCodes: true,
      mobileApp: true,
      basicSupport: true,
      customFields: true,
      productTracking: true,
      assetAssignment: true,
      exportData: true,
      analyticsDashboard: false,
    },
    popular: true,
    cta: "Start Free Trial",
    ctaVariant: "default" as const,
  },
  {
    name: "Business",
    monthlyPrice: "฿5,999",
    yearlyPrice: "฿5,499",
    period: "per month",
    description: "For large teams with advanced needs",
    features: {
      users: "Up to 25 users",
      products: "Up to 50 products",
      units: "Up to 30 units",
      subunits: "Up to 50 subunits",
      categoryCards: "Maximum 50 category cards",
      inventoryManagement: true,
      qrCodes: true,
      mobileApp: true,
      basicSupport: true,
      customFields: true,
      productTracking: true,
      assetAssignment: true,
      exportData: true,
      analyticsDashboard: true,
    },
    popular: false,
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Choose the Perfect Plan for{" "}
                  <span className="text-blue-600">AssetAlly</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Start free and scale as you grow. All plans include our core
                  features with increasing limits and advanced capabilities.
                </p>
              </div>
              <div className="inline-flex items-center px-6 py-3 bg-green-100 text-green-800 rounded-lg font-medium">
                🎉 One month free trial on all paid plans
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            {/* Billing Toggle */}
            <div className="flex flex-col items-center space-y-4 mb-12">
              <div className="flex items-center space-x-4">
                <span
                  className={`text-sm font-medium ${
                    !isYearly ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  Monthly
                </span>
                <button
                  onClick={() => setIsYearly(!isYearly)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isYearly ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isYearly ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
                <span
                  className={`text-sm font-medium ${
                    isYearly ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  Yearly
                </span>
              </div>
              <p className="text-xs text-gray-500 text-center max-w-md">
                * Yearly plans must be paid in full upfront
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={tier.name}
                  className={`relative border-2 transition-all duration-300 hover:shadow-lg ${
                    tier.popular
                      ? "border-blue-500 shadow-lg"
                      : "border-gray-200 hover:border-blue-200"
                  }`}
                >
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2 flex-wrap">
                      <span>{tier.name}</span>
                      {tier.popular && (
                        <Badge className="bg-blue-600 text-white px-2 py-1 text-xs">
                          Popular
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">
                        {isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-1">
                        {tier.name === "Free" ? tier.period : "/per month"}
                      </span>
                    </div>
                    <CardDescription className="mt-2">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">
                          {tier.features.users}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">
                          {tier.features.products}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">
                          {tier.features.units}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">
                          {tier.features.subunits}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium">
                          {tier.features.categoryCards}
                        </span>
                      </div>

                      <div className="border-t pt-3 mt-4">
                        <div className="space-y-2">
                          {tier.features.inventoryManagement && (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-sm">
                                Inventory Management
                              </span>
                            </div>
                          )}
                          {tier.features.qrCodes && (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-sm">
                                QR Code Generation
                              </span>
                            </div>
                          )}
                          {tier.features.mobileApp && (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-sm">Mobile App</span>
                            </div>
                          )}
                          {tier.features.customFields ? (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-sm">Custom Fields</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-400">
                                Custom Fields
                              </span>
                            </div>
                          )}
                          {tier.features.productTracking ? (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-sm">Product Tracking</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-400">
                                Product Tracking
                              </span>
                            </div>
                          )}
                          {tier.features.assetAssignment ? (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-sm">Asset Assignment</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-400">
                                Asset Assignment
                              </span>
                            </div>
                          )}
                          {tier.features.exportData ? (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-sm">Export Data</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-400">
                                Export Data
                              </span>
                            </div>
                          )}
                          {tier.features.analyticsDashboard ? (
                            <div className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-600" />
                              <span className="text-sm">
                                Analytics Dashboard
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <X className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-400">
                                Analytics Dashboard
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        className={`w-full ${
                          tier.popular
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : ""
                        }`}
                        variant={tier.ctaVariant}
                      >
                        {tier.cta}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-500 mx-auto text-center max-w-md mt-8 mb-0">
            * Price and features are subject to change during the beta period.
          </p>
        </section>

        {/* Enterprise CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-4">
                Enterprise Solutions
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Need Something More?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Looking for unlimited users, custom integrations, dedicated
                support, or special features? Our Enterprise team can create a
                tailored solution that fits your organization's unique
                requirements.
              </p>

              <div className="grid gap-6 md:grid-cols-3 mb-8">
                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Get priority support with dedicated account management
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <Settings className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Custom Features</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Tailored features and integrations for your workflow
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="bg-purple-100 p-3 rounded-full mb-4">
                    <Badge className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Volume Pricing</h3>
                  <p className="text-sm text-gray-600 text-center">
                    Special pricing for large organizations and teams
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gray-800 hover:bg-gray-900 text-white"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contact Enterprise Sales
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Can I change plans anytime?
                </h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time.
                  Changes take effect immediately, and we'll prorate any billing
                  adjustments.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  What happens to my data if I cancel?
                </h3>
                <p className="text-gray-600">
                  Your data remains accessible for 30 days after cancellation.
                  You can export all your data during this period or reactivate
                  your account.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Do you offer discounts for annual billing?
                </h3>
                <p className="text-gray-600">
                  Yes! If you pay for the annual plan upfront, you save on the
                  monthly rate. The discount is applied automatically at
                  checkout.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Is there a setup fee?</h3>
                <p className="text-gray-600">
                  There are no setup fees. You only pay the monthly or annual
                  subscription fee for your chosen plan. However, if you need
                  help with onboarding or custom setup, we offer professional
                  services at an additional cost. Please contact our sales team
                  for more details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-white">
                  Ready to Transform Your Asset Management?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                  Join thousands of organizations already using AssetAlly to
                  streamline their asset tracking and management.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
