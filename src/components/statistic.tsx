export function Statistic() {
  return (
    <div className="bg-secondary my-8 md:my-12">
      <div className="flex flex-wrap items-center justify-center mx-auto py-8 px-4 md:py-12 md:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-start gap-16 md:gap-8 w-full">
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-2xl md:text-4xl font-bold text-center">
              100++
            </h4>
            <h4 className="text-xl md:text-2xl font-bold text-center">
              Users Registered
            </h4>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-2xl md:text-4xl font-bold text-center">
              10++
            </h4>
            <h4 className="text-xl md:text-2xl font-bold text-center">
              Templates Available to Use
            </h4>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className="text-2xl md:text-4xl font-bold text-center">
              50++
            </h4>
            <h4 className="text-xl md:text-2xl font-bold text-center">
              Components Ready to Customize
            </h4>
          </div>
        </div>        
      </div>
    </div>
  )
}