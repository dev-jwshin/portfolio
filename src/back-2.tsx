import { Close, PlayArrow, SkipNext, SkipPrevious } from "@mui/icons-material"

function Index() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-red-950 to-black text-white">
        <div className="flex justify-center items-center h-full max-w-screen mx-auto">
          <div className="flex gap-5 justify-center items-stretch">
            <div className="flex w-lg justify-center items-center">
              <div className="relative w-full">
                <div className="relative w-full h-[512px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-60 p-10 flex flex-col justify-between w-full h-full">
                    <span className="text-[100px] font-light w-full h-full flex justify-center items-center">?</span>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold">For Your Dev</p>
                  <p className="text-xl mt-2">플레이 리스트를 선택해주세요.</p>
                </div>
                <div className="mt-2 flex gap-2 hidden">
                  <span className="text-sm"># 효율중시</span>
                  <span className="text-sm"># 스타트업</span>
                  <span className="text-sm"># 사고방식</span>
                  <span className="text-sm"># 개발</span>
                  <span className="text-sm"># 외길인생</span>
                </div>
                <div className="mt-8 flex justify-around border border-gray-400 border-r-0 border-l-0 py-6 px-1.5">
                  <button className="cursor-pointer">
                    <SkipPrevious style={{ fontSize: 40 }} />
                  </button>
                  <button className="cursor-pointer bg-white text-black rounded-full p-3">
                    <Close style={{ fontSize: 35 }} />
                  </button>
                  <button className="cursor-pointer">
                    <SkipNext style={{ fontSize: 40 }} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-2xl justify-center items-center">
              <div className="bg-black/60 rounded-lg p-8 w-full h-full">
                <p className="text-3xl font-bold">PlayList</p>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 40 }} className="text-white" />
                      </div>
                      <img src="./me.jpg" alt="Freefall" className="w-full" />
                    </div>
                    <div className="mt-2">
                      <p className="">신준원에 대해</p>
                      <p className="text-sm text-gray-400">3곡 수록</p>
                    </div>
                  </div>

                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 40 }} className="text-white" />
                      </div>
                      <img src="./me.jpg" alt="Freefall" className="w-full" />
                    </div>
                    <div className="mt-2">
                      <p className="">신준원에 대해</p>
                      <p className="text-sm text-gray-400">3곡 수록</p>
                    </div>
                  </div>

                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 40 }} className="text-white" />
                      </div>
                      <img src="./me.jpg" alt="Freefall" className="w-full" />
                    </div>
                    <div className="mt-2">
                      <p className="">신준원에 대해</p>
                      <p className="text-sm text-gray-400">3곡 수록</p>
                    </div>
                  </div>
                  
                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 40 }} className="text-white" />
                      </div>
                      <img src="./me.jpg" alt="Freefall" className="w-full" />
                    </div>
                    <div className="mt-2">
                      <p className="">신준원에 대해</p>
                      <p className="text-sm text-gray-400">3곡 수록</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
