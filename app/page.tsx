import { menu } from "@/data/menu";

import {
  FaInstagram,
  FaTiktok,
  FaArrowUp,
  FaChevronDown,
} from "react-icons/fa";
import YemeniPatternDivider from "@/components/YemeniPatternDivider";

function getRestaurantStatus() {
  const now = new Date();

  const formatter = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);

  const weekday =
    parts.find((part) => part.type === "weekday")?.value.toLowerCase() || "";

  const hour = Number(parts.find((part) => part.type === "hour")?.value || 0);

  const minute = Number(
    parts.find((part) => part.type === "minute")?.value || 0
  );

  const currentMinutes = hour * 60 + minute;

  const openingHours: Record<
    string,
    { open: number; close: number; openText: string; closeText: string }
  > = {
    montag: {
      open: 16 * 60,
      close: 22 * 60,
      openText: "16:00",
      closeText: "22:00",
    },
    dienstag: {
      open: 16 * 60,
      close: 22 * 60,
      openText: "16:00",
      closeText: "22:00",
    },
    mittwoch: {
      open: 16 * 60,
      close: 22 * 60,
      openText: "16:00",
      closeText: "22:00",
    },
    donnerstag: {
      open: 16 * 60,
      close: 22 * 60,
      openText: "16:00",
      closeText: "22:00",
    },
    freitag: {
      open: 15 * 60,
      close: 23 * 60,
      openText: "15:00",
      closeText: "23:00",
    },
    samstag: {
      open: 15 * 60,
      close: 23 * 60,
      openText: "15:00",
      closeText: "23:00",
    },
    sonntag: {
      open: 15 * 60,
      close: 22 * 60,
      openText: "15:00",
      closeText: "22:00",
    },
  };

  const days = [
    "montag",
    "dienstag",
    "mittwoch",
    "donnerstag",
    "freitag",
    "samstag",
    "sonntag",
  ];

  const today = openingHours[weekday];

  if (!today) {
    return {
      isOpen: false,
      text: "Jetzt geschlossen",
      detail: "",
    };
  }

  if (currentMinutes >= today.open && currentMinutes < today.close) {
    return {
      isOpen: true,
      text: "Jetzt geöffnet",
      detail: `Heute bis ${today.closeText}`,
    };
  }

  if (currentMinutes < today.open) {
    return {
      isOpen: false,
      text: "Jetzt geschlossen",
      detail: `Öffnet heute um ${today.openText}`,
    };
  }

  const todayIndex = days.indexOf(weekday);
  const tomorrowIndex = (todayIndex + 1) % days.length;
  const tomorrow = openingHours[days[tomorrowIndex]];

  return {
    isOpen: false,
    text: "Jetzt geschlossen",
    detail: `Öffnet morgen um ${tomorrow.openText}`,
  };
}

export default function Home() {
  const restaurantStatus = getRestaurantStatus();

  return (
    <main id="top" className="min-h-screen bg-[#140c08] text-white">
      <header className="absolute left-0 top-0 z-50 w-full border-b border-white/10 bg-[#140c08]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#140c08]">
              <img
                src="/images/sanaa-logo.jpg"
                alt="Sana'a Yemen Restaurant Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="leading-tight">
              <span className="block text-xl font-bold text-[#d8ad61]">
                Sana&apos;a Yemen
              </span>

              <span className="text-xs tracking-[0.2em] text-white/60">
                RESTAURANT
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="/" className="text-[#d8ad61]">
              Startseite
            </a>

            <a href="/menu" className="transition hover:text-[#d8ad61]">
              Speisekarte
            </a>

            <a href="#about" className="transition hover:text-[#d8ad61]">
              Über uns
            </a>

            <a href="#contact" className="transition hover:text-[#d8ad61]">
              Kontakt
            </a>
          </nav>

          {/* Desktop Phone */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:+491738911970"
              className="rounded-md bg-[#d8ad61] px-4 py-2 text-sm font-semibold text-[#140c08] transition hover:bg-[#f0d28b]"
            >
              +49 173 8911970
            </a>
          </div>

          {/* Mobile Menu */}
          <details className="group relative md:hidden">
            <summary
              aria-label="Menü öffnen"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-[#d8ad61]/40 text-[#d8ad61] transition hover:border-[#d8ad61] [&::-webkit-details-marker]:hidden"
            >
              <span className="text-2xl leading-none group-open:hidden">☰</span>
              <span className="hidden text-2xl leading-none group-open:block">
                ×
              </span>
            </summary>

            <div className="absolute right-0 top-14 w-64 overflow-hidden rounded-xl border border-[#d8ad61]/25 bg-[#140c08]/95 shadow-2xl backdrop-blur-xl">
              <nav className="flex flex-col p-2 text-sm">
                <a
                  href="/"
                  className="rounded-lg px-4 py-3 font-semibold text-[#d8ad61] transition hover:bg-white/5"
                >
                  Startseite
                </a>

                <a
                  href="/menu"
                  className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-[#d8ad61]"
                >
                  Speisekarte
                </a>

                <a
                  href="#about"
                  className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-[#d8ad61]"
                >
                  Über uns
                </a>

                <a
                  href="#contact"
                  className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-[#d8ad61]"
                >
                  Kontakt
                </a>

                <div className="my-2 h-px bg-[#d8ad61]/15" />

                <a
                  href="tel:+491738911970"
                  className="m-2 rounded-lg bg-[#d8ad61] px-4 py-3 text-center font-semibold text-[#140c08] transition hover:bg-[#f0d28b]"
                >
                  +49 173 8911970
                </a>
              </nav>
            </div>
          </details>
        </div>
      </header>
      <section className="relative flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#d8ad61]">
            Sana&apos;a Yemen Restaurant
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-7xl">
            Authentische jemenitische Küche
            <span className="block text-[#d8ad61]">in Heidelberg</span>
          </h1>

          <p
            dir="rtl"
            className="mt-6 text-3xl font-semibold text-[#f0d28b] md:text-5xl"
          >
            نكهة اليمن الأصيلة في هايدلبرغ
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
            Traditionelle Gerichte, authentischer Geschmack und jemenitische
            Gastfreundschaft.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#menu"
              className="rounded-lg bg-[#d8ad61] px-6 py-3 font-semibold text-[#140c08] transition hover:opacity-90"
            >
              Speisekarte ansehen
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Tiergartenstraße+124+69120+Heidelberg"
              target="_blank"
              className="rounded-lg border border-[#d8ad61] px-6 py-3 font-semibold text-[#f0d28b] transition hover:bg-[#d8ad61]/10"
            >
              Route starten
            </a>
          </div>
        </div>

        <a
          href="#about"
          aria-label="Zum nächsten Abschnitt"
          className="absolute bottom-12 left-1/2 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[#d8ad61]/50 bg-[#140c08]/80 text-[#d8ad61] transition-all duration-300 hover:-translate-y-1 hover:border-[#f0d28b] hover:text-[#f0d28b] hover:shadow-[0_0_18px_rgba(216,173,97,0.20)]"
        >
          <FaChevronDown size={20} />
        </a>
      </section>
      <YemeniPatternDivider />
      <section
        id="about"
        className="border-t border-[#d8ad61]/20 bg-[#0e0906] px-6 py-20"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* الصورة */}
          <div className="group overflow-hidden rounded-2xl border border-[#d8ad61]/20 transition-all duration-500 hover:border-[#d8ad61]/50 hover:shadow-[0_18px_45px_rgba(216,173,97,0.10)]">
            <img
              src="/images/restaurant.jpg"
              alt="Innenbereich des Sana'a Yemen Restaurants in Heidelberg"
              className="h-full min-h-[360px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
          </div>

          {/* النص */}
          <div className="text-center">
            {/* نقش يمني صغير */}
            <div
              aria-hidden="true"
              className="mb-5 flex items-center justify-center gap-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d8ad61]/60" />

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />

                <span className="select-none text-lg tracking-[0.28em] text-[#d8ad61]/75">
                  𐩣 𐩬 𐩪 𐩨
                </span>

                <span className="h-2 w-2 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />
              </div>

              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d8ad61]/60" />
            </div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8ad61]">
              Willkommen
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Ein Stück Yemen
              <span className="block text-[#d8ad61]">mitten in Heidelberg</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
              Entdecken Sie die Vielfalt der jemenitischen Küche mit
              traditionellen Gerichten, authentischen Gewürzen und herzlicher
              Gastfreundschaft.
            </p>

            <p
              dir="rtl"
              className="mx-auto mt-6 max-w-2xl text-center text-xl leading-10 text-[#f0d28b]"
            >
              نرحب بكم في مطعم صنعاء اليمن، حيث نكهة المطبخ اليمني الأصيل وأجواء
              الضيافة اليمنية في قلب هايدلبرغ.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span
                dir="rtl"
                className="rounded-full border border-[#d8ad61]/30 px-4 py-2 text-sm text-white/70 transition hover:border-[#d8ad61]/60 hover:text-[#f0d28b]"
              >
                مطبخ يمني
              </span>

              <span className="rounded-full border border-[#d8ad61]/30 px-4 py-2 text-sm text-white/70 transition hover:border-[#d8ad61]/60 hover:text-[#f0d28b]">
                Traditionelle Gerichte
              </span>

              <span className="rounded-full border border-[#d8ad61]/30 px-4 py-2 text-sm text-white/70 transition hover:border-[#d8ad61]/60 hover:text-[#f0d28b]">
                Heidelberg
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="menu"
        className="border-t border-[#d8ad61]/20 bg-[#140c08] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* نقش صغير */}
            <div
              aria-hidden="true"
              className="mb-5 flex items-center justify-center gap-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d8ad61]/60" />

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />

                <span className="select-none text-lg tracking-[0.28em] text-[#d8ad61]/75">
                  𐩣 𐩬 𐩪 𐩨
                </span>

                <span className="h-2 w-2 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />
              </div>

              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d8ad61]/60" />
            </div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8ad61]">
              Speisekarte
            </p>

            <p dir="rtl" className="mt-2 text-base text-[#f0d28b]">
              قائمة الطعام
            </p>

            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Unsere <span className="text-[#d8ad61]">Spezialitäten</span>
            </h2>

            <p dir="rtl" className="mt-3 text-2xl text-[#f0d28b]">
              من أطباقنا المميزة
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-white/60">
              Eine Auswahl traditioneller jemenitischer Gerichte aus unserer
              Speisekarte.
            </p>

            <p
              dir="rtl"
              className="mx-auto mt-2 max-w-2xl text-base leading-8 text-white/50"
            >
              مجموعة مختارة من الأطباق اليمنية التقليدية من قائمة الطعام لدينا.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {menu
              .flatMap((category) => category.items)
              .filter((item) =>
                ["21", "22", "23", "32", "41", "42"].includes(item.number)
              )
              .map((item) => (
                <article
                  key={item.number}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#d8ad61]/20 bg-[#0e0906] p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#d8ad61]/65 hover:shadow-[0_16px_40px_rgba(216,173,97,0.12)]"
                >
                  {/* لمعة خفيفة أعلى الكرت */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8ad61]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d8ad61] font-bold text-[#140c08] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      {item.number}
                    </span>

                    <span className="text-lg font-bold text-[#d8ad61] transition-all duration-300 group-hover:scale-105 group-hover:text-[#f0d28b]">
                      {item.price}
                    </span>
                  </div>

                  <p
                    dir="rtl"
                    className="mt-4 text-center text-2xl font-semibold text-[#f0d28b] transition-colors duration-300 group-hover:text-[#ffe09a]"
                  >
                    {item.arabic}
                  </p>

                  <h3 className="mt-4 min-h-[40px] text-xl font-bold">
                    {item.german}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.description}
                  </p>
                </article>
              ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="/menu"
              className="inline-flex flex-col items-center rounded-lg border border-[#d8ad61] px-7 py-3 font-semibold text-[#f0d28b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8ad61] hover:text-[#140c08] hover:shadow-[0_10px_25px_rgba(216,173,97,0.16)]"
            >
              <span>Ganze Speisekarte ansehen</span>

              <span dir="rtl" className="mt-1 text-sm font-normal">
                عرض قائمة الطعام كاملة
              </span>
            </a>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="border-t border-[#d8ad61]/20 bg-[#0e0906] px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            {/* نقش صغير */}
            <div
              aria-hidden="true"
              className="mb-5 flex items-center justify-center gap-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d8ad61]/60" />

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />

                <span className="select-none text-lg tracking-[0.28em] text-[#d8ad61]/75">
                  𐩣 𐩬 𐩪 𐩨
                </span>

                <span className="h-2 w-2 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />
              </div>

              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#d8ad61]/60" />
            </div>

            <p className="text-sm uppercase tracking-[0.3em] text-[#d8ad61]">
              Kontakt & Öffnungszeiten
            </p>

            <p dir="rtl" className="mt-2 text-lg text-[#f0d28b]">
              التواصل وأوقات العمل
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Besuchen Sie <span className="text-[#d8ad61]">uns</span>
            </h2>

            <p dir="rtl" className="mt-3 text-2xl text-[#f0d28b]">
              زورونا
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Adresse */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d8ad61]/20 bg-[#140c08] p-6 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#d8ad61]/60 hover:shadow-[0_16px_40px_rgba(216,173,97,0.10)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8ad61]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="text-xl font-bold text-[#d8ad61]">Adresse</h3>

              <p dir="rtl" className="mt-1 text-base text-[#f0d28b]">
                العنوان
              </p>

              <p className="mt-4 leading-7 text-white/70">
                Tiergartenstraße 124
                <br />
                69120 Heidelberg
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Tiergartenstraße+124+69120+Heidelberg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg border border-[#d8ad61] px-5 py-3 font-semibold text-[#f0d28b] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8ad61] hover:text-[#140c08]"
              >
                Route starten
              </a>
            </div>

            {/* Öffnungszeiten */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d8ad61]/20 bg-[#140c08] p-6 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#d8ad61]/60 hover:shadow-[0_16px_40px_rgba(216,173,97,0.10)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8ad61]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="text-xl font-bold text-[#d8ad61]">
                Öffnungszeiten
              </h3>

              <p dir="rtl" className="mt-1 text-base text-[#f0d28b]">
                أوقات العمل
              </p>

              <div
                className={`mx-auto mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                  restaurantStatus.isOpen
                    ? "bg-green-500/10 text-green-300"
                    : "bg-red-500/10 text-red-300"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    restaurantStatus.isOpen ? "bg-green-400" : "bg-red-400"
                  }`}
                ></span>

                {restaurantStatus.text}
              </div>

              <p className="mt-2 text-sm text-white/55">
                {restaurantStatus.detail}
              </p>

              <div className="mx-auto mt-5 max-w-sm space-y-3 text-white/70">
                <div className="flex justify-between gap-4">
                  <span>Montag</span>
                  <span>16:00 – 22:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Dienstag</span>
                  <span>16:00 – 22:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Mittwoch</span>
                  <span>16:00 – 22:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Donnerstag</span>
                  <span>16:00 – 22:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Freitag</span>
                  <span>15:00 – 23:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Samstag</span>
                  <span>15:00 – 23:00</span>
                </div>

                <div className="flex justify-between gap-4">
                  <span>Sonntag</span>
                  <span>15:00 – 22:00</span>
                </div>
              </div>
            </div>

            {/* Kontakt */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#d8ad61]/20 bg-[#140c08] p-6 text-center transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#d8ad61]/60 hover:shadow-[0_16px_40px_rgba(216,173,97,0.10)]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8ad61]/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <h3 className="text-xl font-bold text-[#d8ad61]">Kontakt</h3>

              <p dir="rtl" className="mt-1 text-base text-[#f0d28b]">
                التواصل
              </p>

              <p className="mt-4 text-white/70">Rufen Sie uns direkt an.</p>

              <p dir="rtl" className="mt-1 text-sm text-white/55">
                تواصلوا معنا مباشرة
              </p>

              <a
                href="tel:+491738911970"
                className="mt-5 block text-2xl font-bold text-[#f0d28b] transition-colors duration-300 hover:text-[#d8ad61]"
              >
                +49 173 8911970
              </a>

              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href="https://www.instagram.com/sanaa.yemen.restaurant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8ad61]/30 text-[#f0d28b] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8ad61] hover:bg-[#d8ad61] hover:text-[#140c08]"
                >
                  <FaInstagram size={21} />
                </a>

                <a
                  href="https://www.tiktok.com/@sanaa.yemen.resta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8ad61]/30 text-[#f0d28b] transition-all duration-300 hover:-translate-y-1 hover:border-[#d8ad61] hover:bg-[#d8ad61] hover:text-[#140c08]"
                >
                  <FaTiktok size={21} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#140c08] px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-2xl border border-[#d8ad61]/20">
            <iframe
              title="Sana'a Yemen Restaurant Heidelberg"
              src="https://www.google.com/maps?q=Tiergartenstraße+124,+69120+Heidelberg&output=embed"
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>
      <footer className="relative border-t border-[#d8ad61]/20 bg-[#0e0906] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 pr-16 md:flex-row md:items-center md:justify-between">
          {/* الجهة اليسرى */}
          <div className="text-center">
            <div
              aria-hidden="true"
              className="mb-4 flex items-center justify-center gap-3"
            >
              <span className="h-2 w-2 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />

              <span className="select-none text-sm tracking-[0.28em] text-[#d8ad61]/65">
                𐩣 𐩬 𐩪 𐩨
              </span>

              <span className="h-2 w-2 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />
            </div>

            <p className="font-semibold text-[#f0d28b]">
              Sana&apos;a Yemen Restaurant
            </p>

            <p dir="rtl" className="mt-1 text-sm text-[#f0d28b]/80">
              مطعم صنعاء اليمن
            </p>

            <p className="mt-2 text-sm text-white/50">
              Authentische jemenitische Küche in Heidelberg
            </p>

            <p dir="rtl" className="mt-1 text-sm text-white/40">
              نكهة يمنية أصيلة في هايدلبرغ
            </p>
          </div>

          {/* الجهة اليمنى */}
          <div className="text-center text-sm text-white/40">
            <p>© 2026 Sana&apos;a Yemen Restaurant. Alle Rechte vorbehalten.</p>

            <p dir="rtl" className="mt-1">
              جميع الحقوق محفوظة
            </p>

            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#d8ad61]/40 to-transparent" />
          </div>
        </div>

        {/* زر الرجوع للأعلى */}
        <a
          href="#top"
          aria-label="Nach oben"
          className="group absolute right-6 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#d8ad61]/50 bg-[#140c08] text-[#d8ad61] shadow-lg transition-all duration-300 hover:-translate-y-[55%] hover:border-[#f0d28b] hover:bg-[#d8ad61] hover:text-[#140c08] hover:shadow-[0_10px_25px_rgba(216,173,97,0.16)]"
        >
          <FaArrowUp
            size={18}
            className="transition-transform duration-300 group-hover:-translate-y-0.5"
          />
        </a>
      </footer>
    </main>
  );
}
