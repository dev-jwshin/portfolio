import { Close, PlayArrow, PlusOne, SkipNext, SkipPrevious } from "@mui/icons-material"

function Index() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-red-950 to-black text-white">
        <div className="flex justify-center items-center h-full max-w-screen mx-auto">
          <div className="flex gap-5 justify-center items-stretch">
            <div className="flex w-6xl h-screen py-10 justify-center items-center">
              <div className="w-full">
                <p className="text-4xl font-bold">PlayList</p>
                <div className="grid grid-cols-4 gap-4 mt-10">
                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 50 }} className="text-white" />
                      </div>
                      <img src="./me.jpg" alt="Freefall" className="w-full" />
                    </div>
                    <div className="mt-2">
                      <p>기본정보</p>
                      <p className="text-sm text-gray-400">저의 인적사항 입니다.</p>
                    </div>
                  </div>

                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 50 }} className="text-white" />
                      </div>
                      <img src="./about.png" alt="Freefall" className="w-full" />
                    </div>
                    <div className="mt-2">
                      <p>자기소개</p>
                      <p className="text-sm text-gray-400">저를 소개 합니다.</p>
                    </div>
                  </div>

                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 50 }} className="text-white" />
                      </div>
                      <img src="./edu.png" alt="Freefall" className="w-full" />
                    </div>
                    <div className="mt-2">
                      <p>학력에 대해</p>
                      <p className="text-sm text-gray-400">저의 학력 입니다.</p>
                    </div>
                  </div>

                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 flex flex-col justify-between p-5 opacity-40">
                        <p className="text-white text-4xl font-bold">시작부터</p>
                        <p className="text-white text-4xl font-bold text-right">오늘까지</p>
                      </div>
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 50 }} className="text-white" />
                      </div>
                      <img src="./company.jpg" alt="Freefall" className="w-full" />
                    </div>
                    <div className="mt-2">
                      <p>경력에 대해</p>
                      <p className="text-sm text-gray-400">9년간의 경력 수록</p>
                    </div>
                  </div>

                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 50 }} className="text-white" />
                      </div>
                      <div className="grid grid-cols-2">
                        <img src="./language/golang.png" alt="Freefall" className="w-full" />
                        <img src="./language/ruby.png" alt="Freefall" className="w-full" />
                        <img src="./language/js.png" alt="Freefall" className="w-full" />
                        <div className="w-[138px] h-[138px] bg-gray-500 flex justify-center items-center">
                          + 20
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p>스킬에 대해</p>
                      <p className="text-sm text-gray-400">29개의 스킬 수록</p>
                    </div>
                  </div>
                  
                  <div className="cursor-pointer group">
                    <div className="w-full rounded-lg overflow-hidden relative">
                      <div className="absolute inset-0 opacity-0 bg-black/60 group-hover:opacity-100 transition-all duration-300 flex justify-center items-center">
                        <PlayArrow style={{ fontSize: 50 }} className="text-white" />
                      </div>
                      <div className="grid grid-cols-2">
                        <img src="./service/codle.png" alt="Freefall" className="w-full border-r border-b border-gray-500" />
                        <img src="./service/aucshow.png" alt="Freefall" className="w-full" />
                        <img src="./service/aidt.png" alt="Freefall" className="w-full" />
                        <div className="w-[138px] h-[138px] bg-gray-500 flex justify-center items-center">
                          + 9
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p>포트폴리오</p>
                      <p className="text-sm text-gray-400">29개의 서비스 수록</p>
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
