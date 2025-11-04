"use client"

import { useEffect, useState } from "react"
import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"

export default function UnderConstructionPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 80
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      setProgress(currentStep)

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full">
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen relative flex flex-col items-center justify-center p-4 gap-8">
        {/* Blurred background */}
        <div
          className="fixed inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/tlo-landing.page.webp)",
            filter: "blur(12px)",
            transform: "scale(1.1)",
          }}
        />

        {/* Overlay for better contrast */}
        <div className="fixed inset-0 bg-black/30" />

        <div className="relative z-10 float-animation">
          <Image
            src="/logo-wieksze.webp"
            alt="Kolorowe Smaki Logo"
            width={200}
            height={200}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Main content container */}
        <div className="relative z-10 w-full max-w-2xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-6">
            {/* Site name */}
            <h1 className="text-3xl md:text-4xl font-bold text-center" style={{ color: "rgb(26, 121, 65)" }}>
              kolorowesmakidobczyce.pl
            </h1>

            {/* Under construction message */}
            <p className="text-xl md:text-2xl text-center text-gray-700 font-medium">Nowa strona w budowie</p>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-100 ease-out rounded-full"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: "rgb(26, 121, 65)",
                    }}
                  />
                </div>
                <span className="text-lg font-semibold min-w-[3rem] text-right" style={{ color: "rgb(26, 121, 65)" }}>
                  {progress}%
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-center text-lg md:text-xl text-gray-800 font-medium pt-4">
              Smakuj tyle ile potrzebujesz - produkty na wagę najwyższej jakości
            </p>

            <div className="pt-4 border-t border-gray-200">
              <p className="text-center text-gray-700 mb-3 text-xs">
                Aby złożyć zamówienie online, skontaktuj się z nami przez Facebook lub Instagram:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://www.facebook.com/kolorowesmakidobczyce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "rgb(26, 121, 65)" }}
                >
                  <Facebook className="w-5 h-5" />
                  Odwiedź nas na Facebooku
                </a>
                <a
                  href="https://www.instagram.com/kolorowesmaki_official/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-white transition-all hover:opacity-90"
                  style={{ backgroundColor: "rgb(26, 121, 65)" }}
                >
                  <Instagram className="w-5 h-5" />
                  Odwiedź nas na Instagramie
                </a>
              </div>
            </div>
          </div>

          {/* Store location */}
          <div className="mt-8 bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-center mb-4" style={{ color: "rgb(26, 121, 65)" }}>
              Lokalizacja sklepu
            </h2>
            <p className="text-center text-gray-700 mb-4 text-lg">Zarabie 4J, 32-410 Dobczyce</p>

            {/* Google Maps embed */}
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.8!2d20.0897!3d49.8764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716449e7c7c7c7d%3A0x7c7c7c7c7c7c7c7c!2sZarabie%204J%2C%2032-410%20Dobczyce!5e0!3m2!1spl!2spl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokalizacja sklepu"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
