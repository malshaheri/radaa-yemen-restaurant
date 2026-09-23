import { menu } from "@/data/menu";
import SabaeanDivider from "@/components/SabaeanDivider";
import Link from "next/link";
import Image from "next/image";
export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#140c08] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#0e0906]">
            <Image
              src="/images/ryr-logo.png"
              alt="Radaa Yemen Restaurant"
              className="h-full w-full object-contain"
            />
          </div>

          <p className="mt-5 text-sm uppercase tracking-[0.3em] text-[#d8ad61]">
            Radaa Yemen Restaurant
          </p>

          <p dir="rtl" className="mt-2 text-base text-[#f0d28b]">
            مطعم رداع اليمن
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Unsere <span className="text-[#d8ad61]">Speisekarte</span>
          </h1>

          <p dir="rtl" className="mt-3 text-2xl text-[#f0d28b]">
            قائمة الطعام
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/60">
            Entdecken Sie traditionelle jemenitische Gerichte, authentische
            Gewürze und den Geschmack des Yemen.
          </p>

          <p
            dir="rtl"
            className="mx-auto mt-2 max-w-2xl text-base leading-8 text-white/50"
          >
            اكتشفوا أشهى الأطباق اليمنية التقليدية بنكهات أصيلة ومذاق يمني مميز.
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg border border-[#d8ad61]/60 px-6 py-3 text-sm font-semibold text-[#f0d28b] transition hover:bg-[#d8ad61] hover:text-[#140c08]"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="mt-16 space-y-16">
          {menu.map((category) => (
            <section key={category.id}>
              <SabaeanDivider
                titleDe={category.titleDe}
                titleAr={category.titleAr}
              />

              <div className="grid gap-5 md:grid-cols-2">
                {category.items.map((item) => (
                  <article
                    key={`${category.id}-${item.number}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#d8ad61]/20 bg-[#0e0906] p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#d8ad61]/65 hover:shadow-[0_16px_40px_rgba(216,173,97,0.13)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full bg-[#d8ad61] px-2 font-bold text-[#140c08] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                        {item.number}
                      </span>

                      <span className="text-lg font-bold text-[#d8ad61] transition-all duration-300 group-hover:scale-105 group-hover:text-[#f0d28b]">
                        {item.price}
                      </span>
                    </div>

                    <p
                      dir="rtl"
                      className="mt-5 text-right text-2xl font-semibold text-[#f0d28b]"
                    >
                      {item.arabic}
                    </p>

                    <h3 className="mt-2 text-xl font-bold">{item.german}</h3>

                    {item.description && (
                      <p className="mt-3 text-sm leading-6 text-white/55">
                        {item.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-[#d8ad61]/20 pt-10 text-center">
          <p className="text-sm text-white/45">
            Radaa Yemen Restaurant · Authentic Yemeni Cuisine
          </p>

          <p dir="rtl" className="mt-2 text-sm text-white/35">
            مطعم رداع اليمن · نكهة اليمن الأصيلة
          </p>

          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-lg border border-[#d8ad61] px-7 py-3 font-semibold text-[#f0d28b] transition hover:bg-[#d8ad61] hover:text-[#140c08]"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    </main>
  );
}
