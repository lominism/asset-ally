import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  QrCode,
  Users,
  FileText,
  Package,
  Monitor,
  Laptop,
  Headphones,
  Check,
  Lightbulb,
} from "lucide-react";
import Image from "next/image";
import { ClickableImage } from "@/components/ui/clickable-image";

export default function AssetAllyLanding() {
  return (
    <main className="flex-1">
      {" "}
      {/* Hero Section */}
      <section className="w-full py-6 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 max-w-4xl">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Streamline Your Asset Management with{" "}
                <span className="text-blue-600">AssetAlly</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                The complete solution for tracking, managing, and optimizing
                your company assets. From laptops to monitors, manage everything
                with QR codes, custom info cards, and powerful inventory tools.
              </p>
            </div>
            <div className="space-x-4 pt-6">
              <div className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-800 rounded-lg font-medium">
                🚀 Coming Soon - Currently in Beta Testing
              </div>
            </div>
            <Image
              src="/laptop-preview.png"
              alt="Laptop"
              width={600}
              height={360}
              className="mx-auto mt-4"
              priority
            />
          </div>
        </div>
      </section>
      {/* Key Features Section */}
      <section
        id="features"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Powerful Features for Modern Asset Management
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Everything you need to track, assign, and manage your company
              assets efficiently.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <QrCode className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">QR Code Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Generate and manage QR codes for instant asset identification
                  and tracking. Scan to access detailed asset information
                  instantly.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Asset Assignment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Easily assign assets to team members and track who has what.
                  Maintain accountability and streamline asset distribution.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Custom Info Cards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Create personalized information cards for each asset with
                  custom fields, specifications, and maintenance schedules.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <Package className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Comprehensive tracking with real-time updates, accurate stock
                  levels, and transparent history of changes made to inventory.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Screenshots & Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              See <span className="text-blue-600">AssetAlly</span> in Action
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Get a preview of our intuitive interface and powerful features
              designed for modern asset management.
            </p>
          </div>

          <div className="space-y-16">
            {/* Screenshot 1 - QR Code Management */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  QR Code Management
                </Badge>
                <h3 className="text-2xl font-bold">
                  Instant Asset Identification
                </h3>
                <p className="text-gray-600 text-lg">
                  Generate unique QR codes for every asset and access detailed
                  information instantly. Our QR code system makes asset tracking
                  effortless - simply scan to view specifications, assignment
                  history, and maintenance records.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Auto-generated QR codes for all assets
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Instant access to asset details via mobile scan
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Printable QR labels for physical attachment
                  </li>
                </ul>
              </div>
              <div className="bg-white p-1 rounded-lg shadow-lg lg:order-1">
                <ClickableImage
                  src="/qr-code-management.png"
                  alt="QR Code Management Interface"
                  width={1000}
                  height={640}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                  quality={95}
                />
              </div>
            </div>

            {/* Screenshot 2 - Asset Assignment */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="bg-white p-1 rounded-lg shadow-lg lg:order-1">
                <ClickableImage
                  src="/product.png"
                  alt="Product Assignment Page"
                  width={1000}
                  height={640}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                  quality={95}
                />
              </div>
              <div className="space-y-4 lg:order-2">
                <Badge variant="outline" className="w-fit">
                  Asset Assignment
                </Badge>
                <h3 className="text-2xl font-bold">
                  Streamlined Asset Distribution
                </h3>
                <p className="text-gray-600 text-lg">
                  Easily assign assets to team members and maintain complete
                  visibility over who has what. Track assignment history, set
                  return dates, and manage asset transfers with just a few
                  clicks.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Check-out and check-in functionality for assets
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Complete assignment history tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Automated notifications for returns
                  </li>
                </ul>
              </div>
            </div>

            {/* Screenshot 3 - Custom Info Cards */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <Badge variant="outline" className="w-fit">
                  Custom Info Cards
                </Badge>
                <h3 className="text-2xl font-bold">
                  Personalized Asset Profiles
                </h3>
                <p className="text-gray-600 text-lg">
                  Create detailed, customizable information cards for each
                  asset. Add specifications, photos, maintenance schedules, and
                  custom fields to build comprehensive asset profiles that meet
                  your organization's needs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Fully customizable field templates
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Photo attachments and documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Warranty expiration tracking and alerts
                  </li>
                </ul>
              </div>
              <div className="bg-white p-1 rounded-lg shadow-lg lg:order-1">
                <ClickableImage
                  src="/category-cards.png"
                  alt="Custom Info Cards"
                  width={1000}
                  height={640}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                  quality={95}
                />
              </div>
            </div>

            {/* Screenshot 4 - Inventory Dashboard */}
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div className="bg-white p-1 rounded-lg shadow-lg lg:order-1">
                <ClickableImage
                  src="/inventory.png"
                  alt="Inventory Management Dashboard"
                  width={1000}
                  height={640}
                  className="w-full h-auto object-contain rounded-lg"
                  priority
                  quality={95}
                />
              </div>
              <div className="space-y-4 lg:order-2">
                <Badge variant="outline" className="w-fit">
                  Inventory Management
                </Badge>
                <h3 className="text-2xl font-bold">
                  Complete Inventory Overview
                </h3>
                <p className="text-gray-600 text-lg">
                  Get a bird's-eye view of your entire product inventory with
                  our comprehensive dashboard. Monitor stock levels, track
                  locations, and monitor inventory changes.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Real-time inventory tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Advanced filtering and search
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    Transparent history of changes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Asset Types Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Manage Any Type of Asset
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              From IT equipment to office furniture, AssetAlly handles all your
              asset management needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Laptop className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Laptops & Computers</h3>
              <p className="text-sm text-gray-600 text-center">
                Track specifications, warranties, and assignments
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Monitor className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="font-semibold mb-2">Monitors & Displays</h3>
              <p className="text-sm text-gray-600 text-center">
                Manage screen sizes, resolutions, and locations
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Lightbulb className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="font-semibold mb-2">Building Equipments</h3>
              <p className="text-sm text-gray-600 text-center">
                Track building assets like lighting, HVAC, and more
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
              <Headphones className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="font-semibold mb-2">Accessories</h3>
              <p className="text-sm text-gray-600 text-center">
                Check out keyboards, mice, headsets, and more
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="bg-blue-900/10 p-1 rounded-lg shadow-lg max-w-[800px]">
              <ClickableImage
                src="/all-products.png"
                alt="All Products"
                width={400}
                height={240}
                priority
                quality={95}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Additional Features Section */}
      <section
        id="benefits"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-4">
                  More Features
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Everything You Need for Complete Asset Control
                </h2>
                <p className="text-gray-600 md:text-lg">
                  AssetAlly goes beyond basic tracking to provide comprehensive
                  asset lifecycle management with advanced features designed for
                  modern businesses.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">
                      Customized Units & Subunits Organization
                    </h3>
                    <p className="text-sm text-gray-600">
                      Easily create custom units and subunits (e.g.,
                      departments, teams, or projects) to organize assets in a
                      way that mirrors your real-world structure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Asset History Tracking</h3>
                    <p className="text-sm text-gray-600">
                      Track the complete lifecycle of each asset, including
                      purchase details, transfer changes, and warranty
                      expiration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Multi-Language Support</h3>
                    <p className="text-sm text-gray-600">
                      Switch between Thai and English interfaces so your entire
                      team can work comfortably in their preferred language.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Personnel List Management</h3>
                    <p className="text-sm text-gray-600">
                      Maintain a centralized list of personnel or customers and
                      easily assign assets to individuals for sales or tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Mobile App Access</h3>
                    <p className="text-sm text-gray-600">
                      Use the AssetAlly mobile app to scan QR codes, update
                      records, and manage assets on-the-go.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Role-Based Permissions</h3>
                    <p className="text-sm text-gray-600">
                      Assign specific permissions so only special admins can
                      make certain changes, ensuring secure and organized asset
                      management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">
                      Ready to Get Started?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Join our beta program and help shape the future of
                      AssetAlly.
                    </p>
                  </div>

                  {/* Tech Sauce Highlight */}
                  <div className="text-center p-6 bg-white rounded-lg border-2 border-blue-200 shadow">
                    <div className="text-lg font-semibold text-blue-800 mb-2">
                      Meet Us at Tech Sauce!
                    </div>
                    <div className="text-sm text-gray-600">
                      See our representatives at{" "}
                      <span className="font-medium text-gray-800">
                        Tech Sauce
                      </span>{" "}
                      to learn more about our platform and upcoming beta.
                    </div>
                  </div>

                  <div className="text-center p-4 bg-white rounded-lg border-2 border-orange-200">
                    <div className="text-lg font-semibold text-orange-800 mb-2">
                      🚀 Beta Launch
                    </div>
                    <div className="text-sm text-gray-600">
                      Currently in Beta Testing – Sign up to be an early
                      adopter!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Coming Soon Section */}
      <section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600"
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-orange-100 text-orange-800 border-orange-200"
              >
                Beta Testing in Progress
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                AssetAlly is Coming Soon
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                We're putting the finishing touches on AssetAlly to ensure it
                meets the highest standards for asset management. Stay tuned for
                our official launch!
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3 w-full max-w-2xl">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-white mb-2">Beta</div>
                <div className="text-blue-100 text-sm">Currently Testing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-white mb-2">
                  Q4 2025
                </div>
                <div className="text-blue-100 text-sm">Expected Launch</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="text-2xl font-bold text-white mb-2">500+</div>
                <div className="text-blue-100 text-sm">Assets in Testing</div>
              </div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg border-2 border-blue-200 shadow">
              <div className="text-lg font-semibold text-blue-800 mb-2">
                Get More Information!
              </div>
              <div className="text-sm text-gray-600">
                See our representatives at{" "}
                <span className="font-medium text-gray-800">Tech Sauce</span> to
                sign up for our mailing list. You'll be the first to know when{" "}
                <span className="text-blue-600">AssetAlly</span> is ready.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
