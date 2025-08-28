import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8">
                <svg viewBox="0 0 390.03 257.09" className="w-full h-full">
                  <path
                    className="fill-[#ce2a4d]"
                    d="M170.78.27c13.75-1.98,15.47,7.23,17.12,18.36,3.04,20.49-3.97,40.43-2.93,59.91.48,8.93,8.86,11.98,9.12,17.99s-5.46,6.86-6.12,13.93c-2.2,23.81,6.8,47.22,7.62,70.62-36.55,9.1-32.43-42.11-38.07-65.07-2.14-8.72-4.75-15.41-15.14-15.94-26.51-1.33-12.45,38.38-12.3,53.4.02,2.22-.86,13.3-1.99,14.1-2.29,1.62-10.05-.33-12.85-1.28-21.82-7.38-17.75-41.75-19.23-59.77-.42-5.1-3.03-11.41-3.06-16.02-.03-6.23,4.15-13.12,4.15-19,.01-17.22-6.96-45.17,3.7-60.21,7.48-10.55,29.39-7.53,32,5.45,1.51,7.52-7.04,29.46-7.64,39.89-.37,6.35.58,16.78,6.14,20.61,4.17,2.87,18.07,5.94,21.64,1.17,6.55-8.74,3.2-45.59,4.05-57.95.69-9.95,2.34-18.55,13.8-20.2Z"
                  />
                  <path
                    className="fill-[#2d549b]"
                    d="M289.03,216.01c4.79-3.25,6.75-17.82,14.45-17.02,1.42.15,3.39,1.41,3.13,3.07-.63,3.91-7.09,13.07-8.79,17.25-2.13,5.24-2.08,10.52-3.49,15.51-2.47,8.69-8.35,23.4-19.61,20-4.01-1.21-6.26-12.09-.18-11.91,3.3.1,5.55,4.93,8.72-2.16,4.38-9.78-.93-12.67-2.17-20.29-.47-2.88-1.58-17.8-.92-19.8s4.3-2.13,6.19-1.48c4.28,1.46,2.19,13,2.68,16.84Z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold font-serif">HO Factory Pet</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Productos premium para mascotas con diseños exclusivos y calidad superior.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold mb-4 font-serif">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="text-slate-400 hover:text-white transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-slate-400 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 font-serif">Contacto</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>11 4477-5070</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hofactorypetcar@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold mb-4 font-serif">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="https://instagram.com/ho_factory_pet" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-slate-600 text-slate-400 hover:text-white hover:border-white bg-transparent hover:bg-slate-800"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://facebook.com/Hofactorypet" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-slate-600 text-slate-400 hover:text-white hover:border-white bg-transparent hover:bg-slate-800"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-400">
          <p>© 2024 HO Factory Pet. Desarrollado y diseñado por Nexium Solutions y Ditiero.</p>
        </div>
      </div>
    </footer>
  )
}
