export default function YemeniPatternDivider() {
  return (
    <div className="relative -mt-10 flex w-full items-center justify-center overflow-hidden pb-5 pt-2">
      {/* الخط الأيسر */}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d8ad61]/50 to-[#d8ad61]" />

      <div className="mx-4 flex items-center gap-5 md:mx-7 md:gap-7">
        {/* زخرفة حمراء يسار */}
        <div aria-hidden="true" className="hidden items-center gap-1.5 sm:flex">
          <span className="h-2.5 w-2.5 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />
          <span className="h-2.5 w-2.5 rotate-45 border border-[#d8ad61]/70 bg-[#140c08]" />
          <span className="h-2.5 w-2.5 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />
        </div>

        {/* حروف المسند */}
        <div
          aria-hidden="true"
          className="select-none whitespace-nowrap text-xl font-semibold tracking-[0.48em] text-[#e2b75e]/90 md:text-2xl"
        >
          𐩣 𐩬 𐩪 𐩨 𐩱 𐩺 𐩣 𐩬
        </div>

        {/* زخرفة حمراء يمين */}
        <div aria-hidden="true" className="hidden items-center gap-1.5 sm:flex">
          <span className="h-2.5 w-2.5 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />
          <span className="h-2.5 w-2.5 rotate-45 border border-[#d8ad61]/70 bg-[#140c08]" />
          <span className="h-2.5 w-2.5 rotate-45 border border-[#d8ad61]/70 bg-[#a62922]" />
        </div>
      </div>

      {/* الخط الأيمن */}
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d8ad61]/50 to-[#d8ad61]" />
    </div>
  );
}
