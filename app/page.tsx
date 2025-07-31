import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { QrCode, Users, FileText, Package, Monitor, Laptop, Smartphone, Headphones, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AssetAllyLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="AssetAlly Logo" width={180} height={40} className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Benefits
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Badge variant="secondary" className="mb-4">
                Asset Management Made Simple
              </Badge>
              <div className="space-y-2 max-w-4xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Streamline Your Asset Management with <span className="text-blue-600">AssetAlly</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  The complete solution for tracking, managing, and optimizing your company assets. From laptops to
                  monitors, manage everything with QR codes, custom info cards, and powerful inventory tools.
                </p>
              </div>
              <div className="space-x-4 pt-6">
                <div className="inline-flex items-center px-6 py-3 bg-orange-100 text-orange-800 rounded-lg font-medium">
                  🚀 Coming Soon - Currently in Beta Testing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                Powerful Features for Modern Asset Management
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Everything you need to track, assign, and manage your company assets efficiently.
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
                    Generate and manage QR codes for instant asset identification and tracking. Scan to access detailed
                    asset information instantly.
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
                    Easily assign assets to team members and track who has what. Maintain accountability and streamline
                    asset distribution.
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
                    Create personalized information cards for each asset with custom fields, specifications, and
                    maintenance schedules.
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
                    Comprehensive inventory tracking with real-time updates, stock levels, and automated alerts for
                    maintenance and replacements.
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">See AssetAlly in Action</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Get a preview of our intuitive interface and powerful features designed for modern asset management.
              </p>
            </div>

            <div className="space-y-16">
              {/* Screenshot 1 - QR Code Management */}
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <Badge variant="outline" className="w-fit">
                    QR Code Management
                  </Badge>
                  <h3 className="text-2xl font-bold">Instant Asset Identification</h3>
                  <p className="text-gray-600 text-lg">
                    Generate unique QR codes for every asset and access detailed information instantly. Our QR code
                    system makes asset tracking effortless - simply scan to view specifications, assignment history, and
                    maintenance records.
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
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="QR Code Management Interface"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Screenshot 2 - Asset Assignment */}
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg lg:order-1">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Asset Assignment Dashboard"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4 lg:order-2">
                  <Badge variant="outline" className="w-fit">
                    Asset Assignment
                  </Badge>
                  <h3 className="text-2xl font-bold">Streamlined Asset Distribution</h3>
                  <p className="text-gray-600 text-lg">
                    Easily assign assets to team members and maintain complete visibility over who has what. Track
                    assignment history, set return dates, and manage asset transfers with just a few clicks.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Drag-and-drop asset assignment interface
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
                  <h3 className="text-2xl font-bold">Personalized Asset Profiles</h3>
                  <p className="text-gray-600 text-lg">
                    Create detailed, customizable information cards for each asset. Add specifications, photos,
                    maintenance schedules, and custom fields to build comprehensive asset profiles that meet your
                    organization's needs.
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
                      Maintenance scheduling integration
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Custom Info Cards Builder"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Screenshot 4 - Inventory Dashboard */}
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="bg-white p-6 rounded-lg shadow-lg lg:order-1">
                  <img
                    src="/placeholder.svg?height=300&width=500"
                    alt="Inventory Management Dashboard"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4 lg:order-2">
                  <Badge variant="outline" className="w-fit">
                    Inventory Management
                  </Badge>
                  <h3 className="text-2xl font-bold">Complete Inventory Overview</h3>
                  <p className="text-gray-600 text-lg">
                    Get a bird's-eye view of your entire asset inventory with our comprehensive dashboard. Monitor stock
                    levels, track asset locations, and receive alerts for maintenance or replacement needs.
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
                      Automated low-stock alerts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asset Types Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Manage Any Type of Asset</h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                From IT equipment to office furniture, AssetAlly handles all your asset management needs.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <Laptop className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="font-semibold mb-2">Laptops & Computers</h3>
                <p className="text-sm text-gray-600 text-center">Track specifications, warranties, and assignments</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <Monitor className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="font-semibold mb-2">Monitors & Displays</h3>
                <p className="text-sm text-gray-600 text-center">Manage screen sizes, resolutions, and locations</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <Smartphone className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="font-semibold mb-2">Mobile Devices</h3>
                <p className="text-sm text-gray-600 text-center">Track phones, tablets, and mobile accessories</p>
              </div>

              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
                <Headphones className="h-12 w-12 text-orange-600 mb-4" />
                <h3 className="font-semibold mb-2">Accessories</h3>
                <p className="text-sm text-gray-600 text-center">Manage keyboards, mice, headsets, and more</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-white">
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
                    AssetAlly goes beyond basic tracking to provide comprehensive asset lifecycle management with
                    advanced features designed for modern businesses.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Automated Maintenance Alerts</h3>
                      <p className="text-sm text-gray-600">
                        Get notified when assets need maintenance or warranty renewals
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Advanced Reporting & Analytics</h3>
                      <p className="text-sm text-gray-600">
                        Generate detailed reports on asset utilization, costs, and lifecycle
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Multi-Location Support</h3>
                      <p className="text-sm text-gray-600">
                        Manage assets across multiple offices, warehouses, and remote locations
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Integration Ready</h3>
                      <p className="text-sm text-gray-600">
                        Connect with your existing HR, IT, and procurement systems
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Mobile App Access</h3>
                      <p className="text-sm text-gray-600">
                        Scan QR codes and manage assets on-the-go with our mobile app
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Role-Based Permissions</h3>
                      <p className="text-sm text-gray-600">
                        Control who can view, edit, and manage different types of assets
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:pl-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                  <div className="space-y-6">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
                      <p className="text-gray-600 mb-6">
                        Join hundreds of companies already using AssetAlly to streamline their asset management.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">500+</div>
                        <div className="text-sm text-gray-600">Companies Trust Us</div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">50K+</div>
                        <div className="text-sm text-gray-600">Assets Managed</div>
                      </div>
                    </div>

                    <div className="text-center p-4 bg-white rounded-lg border-2 border-orange-200">
                      <div className="text-lg font-semibold text-orange-800 mb-2">🚀 Coming Soon</div>
                      <div className="text-sm text-gray-600">Currently in Beta Testing</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
                  Beta Testing in Progress
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  AssetAlly is Coming Soon
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                  We're putting the finishing touches on AssetAlly to ensure it meets the highest standards for asset
                  management. Stay tuned for our official launch!
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 w-full max-w-2xl">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white mb-2">Beta</div>
                  <div className="text-blue-100 text-sm">Currently Testing</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white mb-2">Q2 2024</div>
                  <div className="text-blue-100 text-sm">Expected Launch</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                  <div className="text-2xl font-bold text-white mb-2">500+</div>
                  <div className="text-blue-100 text-sm">Assets in Testing</div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-blue-100 text-sm mb-4">Want to be notified when we launch?</p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
                  />
                  <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Notify Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="AssetAlly Logo" width={120} height={30} className="h-6 w-auto" />
          </div>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} AssetAlly. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
