import Link from 'next/link'
import { VolinkLogo } from '@/components/volink-logo'

export function SiteFooter() {
  return (
    <footer id="about" className="border-t border-border bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <VolinkLogo textClassName="text-white" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Volink تربط المتطوعين الشغوفين بالمؤسسات الهادفة في عدن. تخصصك هو
            المفتاح، ونحن الرابط. مجتمع واحد، فرص متعددة، تأثير أكبر.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>
              <Link href="/opportunities" className="hover:text-cyan">
                استكشف الفرص
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-cyan">
                لوحة المتطوع
              </Link>
            </li>
            <li>
              <Link href="/organization" className="hover:text-cyan">
                لوحة المؤسسة
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-bold">تواصل معنا</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>عدن، اليمن</li>
            <li>info@volink.com</li>
            <li>www.volink.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Volink. جميع الحقوق محفوظة.
      </div>
    </footer>
  )
}
