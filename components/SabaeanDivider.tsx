type SabaeanDividerProps = {
  titleDe: string;
  titleAr: string;
};

export default function SabaeanDivider({
  titleDe,
  titleAr,
}: Readonly<SabaeanDividerProps>) {
  return (
    <div className="my-10 flex w-full items-center justify-center gap-4 md:gap-6">
      <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-[#d8ad61]/60 to-[#d8ad61] sm:block" />

      <div className="group w-full max-w-[560px] overflow-hidden rounded-2xl border border-[#e6b955]/80 bg-gradient-to-b from-[#c38a2b] to-[#94621d] shadow-[0_14px_35px_rgba(0,0,0,0.35)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:scale-[1.015] hover:border-[#f0d28b] hover:shadow-[0_18px_45px_rgba(216,173,97,0.20)]">
        <div
          aria-hidden="true"
          className="select-none whitespace-nowrap px-4 py-3 text-center text-lg tracking-[0.45em] text-[#ffe09a]/90"
        >
          𐩣 𐩬 𐩪 𐩨 𐩱 𐩺 𐩣 𐩬
        </div>

        <div className="flex items-stretch">
          <div
            aria-hidden="true"
            className="flex w-7 shrink-0 flex-col justify-center overflow-hidden border-y border-[#d8ad61]/50 bg-[#180d09] sm:w-12"
          >
            <div className="h-3 bg-[#a62922]" />
            <div className="h-3 border-y border-[#d8ad61]/60 bg-[#0e0906]" />
            <div className="h-3 bg-[#a62922]" />
            <div className="h-3 border-y border-[#d8ad61]/60 bg-[#0e0906]" />
            <div className="h-3 bg-[#a62922]" />
          </div>

          <div className="flex min-h-[88px] flex-1 items-center justify-center rounded-xl border border-[#d8ad61]/60 bg-[#140c08] px-5 py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
              <h2 className="text-xl font-bold text-white md:text-2xl">
                {titleDe}
              </h2>

              <span
                aria-hidden="true"
                className="hidden h-8 w-px bg-[#d8ad61]/70 sm:block"
              />

              <p
                dir="rtl"
                className="text-xl font-semibold text-[#f0d28b] md:text-2xl"
              >
                {titleAr}
              </p>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="flex w-7 shrink-0 flex-col justify-center overflow-hidden border-y border-[#d8ad61]/50 bg-[#180d09] sm:w-12"
          >
            <div className="h-3 bg-[#a62922]" />
            <div className="h-3 border-y border-[#d8ad61]/60 bg-[#0e0906]" />
            <div className="h-3 bg-[#a62922]" />
            <div className="h-3 border-y border-[#d8ad61]/60 bg-[#0e0906]" />
            <div className="h-3 bg-[#a62922]" />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="select-none whitespace-nowrap px-4 py-3 text-center text-lg tracking-[0.45em] text-[#ffe09a]/90"
        >
          𐩣 𐩬 𐩪 𐩨 𐩱 𐩺 𐩣 𐩬
        </div>
      </div>

      <div className="hidden h-px flex-1 bg-gradient-to-l from-transparent via-[#d8ad61]/60 to-[#d8ad61] sm:block" />
    </div>
  );
}
