"use client";

import Link from "next/link";
import Image from "next/image";

import newYork from "../public/images/newyork.jpg";
import tokyo from "../public/images/tokyo.jpg";
import paris from "../public/images/paris.jpg";
import switzerland from "../public/images/switzerland.jpg";
import dubai from "../public/images/dubai.jpg";
import india from "../public/images/india.jpg";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <NavBar />

      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex flex-col items-center justify-center text-white text-center">
        <div
          className="absolute inset-5 w-full h-full opacity-50"
          style={{
            backgroundImage: "url('/images/background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Plan Your Perfect Trip
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black">
            Discover destinations, book stays, and create itineraries with ease.
          </p>

          <div className="mt-6 bg-white rounded-lg shadow-lg px-6 py-4 w-full max-w-2xl mx-auto">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="mt-12 w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-black text-center">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { name: "Paris", image: paris },
            { name: "Tokyo", image: tokyo },
            { name: "New York", image: newYork },
            { name: "Switzerland", image: switzerland },
            { name: "Dubai", image: dubai },
            { name: "India", image: india },
          ].map(({ name, image }) => (
            <Link key={name} href={`/explore?query=${name}`}>
              <div className="cursor-pointer bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition transform hover:scale-105">
                <Image
                  src={image}
                  alt={name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-cover rounded-md"
                />
                <h3 className="text-xl font-bold text-gray-900 mt-3 text-center">
                  {name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mt-12 w-full max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-black text-center">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            {
              label: "Search & Explore",
              desc: "Find destinations and plan your trip easily.",
              href: "/explore",
            },
            {
              label: "Book & Save",
              desc: "Book flights, hotels, and activities in one place.",
              href: "/bookings",
            },
            {
              label: "Itinerary Planning",
              desc: "Create and share your perfect travel itinerary.",
              href: "/itinerary",
            },
          ].map(({ label, desc, href }) => (
            <Link key={label} href={href}>
              <div className="bg-white shadow-lg rounded-lg p-6 text-center cursor-pointer hover:shadow-xl transition transform hover:scale-105">
                <h3 className="text-xl font-bold text-gray-900">{label}</h3>
                <p className="mt-2 text-gray-900 font-medium">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-12 w-full text-center bg-blue-500 py-12 text-white">
        <h2 className="text-3xl font-semibold">Start Your Journey Now!</h2>
        <p className="mt-2 text-lg">
          Create an itinerary and explore amazing places.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mt-6 w-full flex justify-center">
        <Link href="/faq">
          <button className="bg-gray-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
            View FAQs
          </button>
        </Link>
      </section>
    </main>
  );
}
