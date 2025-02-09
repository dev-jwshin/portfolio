import { Close, SkipNext, SkipPrevious } from "@mui/icons-material"

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-b from-red-950 to-black text-white">
        <div className="flex justify-center items-center h-full max-w-screen mx-auto">
          <div className="flex gap-5">
            <div className="w-lg relative">
              <div className="relative">
                <img src="./me.jpg" alt="Freefall" className="w-full rounded-lg" />
                <div className="absolute inset-0 bg-black opacity-60 p-10 flex flex-col justify-between">
                  <div className="flex flex-col">
                    <span className="font-bold text-3xl">For</span>
                    <span className="font-bold text-3xl">Your</span>
                    <span className="font-bold text-3xl">Development</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="font-bold text-3xl">For</span>
                    <span className="font-bold text-3xl">Your</span>
                    <span className="font-bold text-3xl">Business</span>
                  </div>
                </div>
                <div className="absolute top-0 right-0 bg-white w-full h-full rounded-lg hidden">
                  <div className="flex justify-center items-center h-full">
                    <ul className="flex flex-col gap-2 p-2 text-center text-gray-500 text-2xl leading-10">
                      <li className="cursor-pointer font-bold text-red-950">HOME</li>
                      <li className="cursor-pointer hover:font-bold">SKILLS</li>
                      <li className="cursor-pointer hover:font-bold">PROJECTS</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold">신준원</p>
                <p className="text-xl mt-2">풀스택 개발자</p>
              </div>
              <div className="mt-2 flex gap-2">
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
                  {/* <MenuOutlined style={{ fontSize: 35 }} /> */}
                  <Close style={{ fontSize: 35 }} />
                </button>
                <button className="cursor-pointer">
                  <SkipNext style={{ fontSize: 40 }} />
                </button>
              </div>
              <div className="mt-8">
                  <div className="flex justify-around">
                    <button className="text-lg cursor-pointer text-gray-400 hover:text-white">인적사항</button>
                    <button className="text-lg cursor-pointer text-gray-400 hover:text-white">자기소개</button>
                    <button className="text-lg cursor-pointer text-gray-400 hover:text-white">지원동기</button>
                  </div>
              </div>
            </div>
            <div className="flex flex-col w-2xl gap-5">
              <div className="relative pt-7 border border-gray-400 rounded-lg bg-black/30">
                <div className="flex justify-between items-center border-b border-gray-400 pb-6 px-8">
                  <h1 className="text-xl font-bold">기본</h1>
                  <button className="text-lg cursor-pointer text-gray-400 hover:text-white">
                    <Close fontSize="medium" />
                  </button>
                </div>
                <div className="flex w-full px-8 p-5 items-center justify-center">
                  <div className="flex flex-col w-full gap-2.5">
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">이름</p>
                      <p className="text-md w-3/4 px-4 text-center">신준원</p>
                    </div>
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">생년월일</p>
                      <p className="text-md w-3/4 px-4 text-center">1998. 11. 18.</p>
                    </div>
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">전화번호</p>
                      <a href="tel:01091785864" className="text-md w-3/4 px-4 text-center">010-9178-5864</a>
                    </div>
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">이메일</p>
                      <a href="mailto:dev@foryourdev.com" className="text-md w-3/4 px-4 text-center">dev@foryourdev.com</a>
                    </div>
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">주소</p>
                      <p className="text-md w-3/4 px-4 text-center">서울특별시 관악구 신림동1길 20</p>
                    </div>
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">군대</p>
                      <p className="text-md w-3/4 px-4 text-center">산업기능요원 (척추)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative pt-7 border border-gray-400 rounded-lg bg-black/30">
                <div className="flex justify-between items-center border-b border-gray-400 pb-6 px-8">
                  <h1 className="text-xl font-bold">학력</h1>
                  <button className="text-lg cursor-pointer text-gray-400 hover:text-white">
                    <Close fontSize="medium" />
                  </button>
                </div>
                <div className="flex  w-full px-8 p-5">
                  <div className="flex flex-col w-full gap-2.5">
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">학교명</p>
                      <p className="text-md w-3/4 px-4 text-center">여수정보과학고등학교</p>
                    </div>
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">학과명</p>
                      <p className="text-md w-3/4 px-4 text-center">산업디자인</p>
                    </div>
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">활동</p>
                      <p className="text-md w-3/4 px-4 text-center">웹개발 / 기능경기대회</p>
                    </div>
                    <div className="flex py-2">
                      <p className="text-md border-r border-gray-400 w-1/4 text-center">졸업년도</p>
                      <p className="text-md w-3/4 px-4 text-center">2017</p>
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

export default App
