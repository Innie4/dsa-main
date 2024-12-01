'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {  Check, Eye, EyeOff, Save } from 'lucide-react'
import Header from '@/app/default/signed-inheader'
import { Footer } from '@/app/default/footer'

interface NavItem {
  label: string
  href: string
  hasDropdown?: boolean
}

interface TabItem {
  label: string
  href: string
  isActive?: boolean
}

// List of all nationalities
const nationalities = [
    "Afghan", "Albanian", "Algerian", "American", "Andorran", "Angolan", "Antiguan", "Argentine", "Armenian", "Australian",
    "Austrian", "Azerbaijani", "Bahamian", "Bahraini", "Bangladeshi", "Barbadian", "Belarusian", "Belgian", "Belizean", "Beninese",
    "Bhutanese", "Bolivian", "Bosnian", "Botswanan", "Brazilian", "British", "Bruneian", "Bulgarian", "Burkinabe", "Burmese",
    "Burundian", "Cambodian", "Cameroonian", "Canadian", "Cape Verdean", "Central African", "Chadian", "Chilean", "Chinese", "Colombian",
    "Comoran", "Congolese", "Costa Rican", "Croatian", "Cuban", "Cypriot", "Czech", "Danish", "Djibouti", "Dominican",
    "Dutch", "East Timorese", "Ecuadorian", "Egyptian", "Emirian", "Equatorial Guinean", "Eritrean", "Estonian", "Ethiopian", "Fijian",
    "Filipino", "Finnish", "French", "Gabonese", "Gambian", "Georgian", "German", "Ghanaian", "Greek", "Grenadian",
    "Guatemalan", "Guinean", "Guinean-Bissauan", "Guyanese", "Haitian", "Honduran", "Hungarian", "Icelandic", "Indian", "Indonesian",
    "Iranian", "Iraqi", "Irish", "Israeli", "Italian", "Ivorian", "Jamaican", "Japanese", "Jordanian", "Kazakhstani",
    "Kenyan", "Kiribati", "Kuwaiti", "Kyrgyz", "Laotian", "Latvian", "Lebanese", "Lesotho", "Liberian", "Libyan",
    "Liechtenstein", "Lithuanian", "Luxembourg", "Macedonian", "Malagasy", "Malawian", "Malaysian", "Maldivian", "Malian", "Maltese",
    "Marshallese", "Mauritanian", "Mauritian", "Mexican", "Micronesian", "Moldovan", "Monacan", "Mongolian", "Montenegrin", "Moroccan",
    "Mozambican", "Namibian", "Nauruan", "Nepalese", "New Zealand", "Nicaraguan", "Nigerian", "Nigerien", "North Korean", "Norwegian",
    "Omani", "Pakistani", "Palauan", "Palestinian", "Panamanian", "Papua New Guinean", "Paraguayan", "Peruvian", "Polish", "Portuguese",
    "Qatari", "Romanian", "Russian", "Rwandan", "Saint Kitts and Nevis", "Saint Lucian", "Saint Vincent and the Grenadines", "Salvadoran", "Samoan", "San Marinese",
    "Sao Tomean", "Saudi", "Senegalese", "Serbian", "Seychellois", "Sierra Leonean", "Singaporean", "Slovak", "Slovenian", "Solomon Islands",
    "Somali", "South African", "South Korean", "South Sudanese", "Spanish", "Sri Lankan", "Sudanese", "Surinamese", "Swazi", "Swedish",
    "Swiss", "Syrian", "Tajik", "Tanzanian", "Thai", "Togolese", "Tongan", "Trinidadian", "Tunisian", "Turkish",
    "Turkmen", "Tuvaluan", "Ugandan", "Ukrainian", "Uruguayan", "Uzbek", "Vanuatuan", "Vatican", "Venezuelan", "Vietnamese",
    "Yemeni", "Zambian", "Zimbabwean"
  ]

  export default function EditProfilePage() {
    const [showPassword, setShowPassword] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nationality, setNationality] = useState('')
    const router = useRouter()
 

  const navItems: NavItem[] = [
    { label: 'Essentials', href: '#', hasDropdown: true },
    { label: 'Dashboards', href: '#', hasDropdown: true },
    { label: 'Teams', href: '#' },
    { label: 'Players', href: '#' },
    { label: 'Scouts', href: '#' },
    { label: 'Competitions', href: '#' },
  ]

  const tabItems: TabItem[] = [
    { label: 'My Profile', href: '#', isActive: true },
    { label: 'Subscription Plan', href: 'pricing' },
    { label: 'Billing History', href: 'billing-history' },
  ]

  const handleEditProfile = () => {
    router.push('/my-profile')
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated profile data to your backend
    console.log('Profile saved:', { firstName, lastName, email, password, nationality })
    router.push('/')
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header/>
      {/* Sub Navigation */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center space-x-4">
            {tabItems.map((tab, index) => (
              <a
                key={index}
                href={tab.href}
                className={`py-4 text-xs ${
                  tab.isActive
                    ? 'text-blue-900 font-small'
                    : 'text-blue-200 hover:text-blue-300'
                }`}
              >
                {tab.label}
                {index < tabItems.length - 1 && (
                  <span className="ml-4 text-blue-200">•</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 ">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <p className="text-gray-600 mb-8">
            You can view and edit your profile here.
          </p>

          <div className=" overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Left column with full-height image */}
              <div className="md:w-1/2 relative">
                <div className="absolute inset-0">
                  <Image
                    src="/samson.png"
                    alt="Profile"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>

              {/* Right column with form */}
              <div className="md:w-1/2 p-8">
                <div className="mb-8">
                  <h1 className="text-3xl font-bold text-blue-900 mb-2">
                    Samson Adenuga
                  </h1>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      User
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Nigeria
                    </span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      defaultValue="Samson"
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      defaultValue="Adenuga"
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        defaultValue="SamsongAde123@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      {email && <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500" />}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        defaultValue="Samson111oa"
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nationality
                    </label>
                    <select
                      defaultValue="Nigerian"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    >
                      {nationalities.map((nationality) => (
                        <option key={nationality} value={nationality}>
                          {nationality}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-8">
                <button 
                    onClick={handleEditProfile}
                    className="w-full px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 flex items-center justify-center"
                  >
                    <Save className="h-5 w-5 mr-2" />
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer/>
          </div>
  )
}

