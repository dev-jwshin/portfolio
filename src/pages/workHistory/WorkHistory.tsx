import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function WorkHistory() {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div className="w-full h-full cursor-grab overflow-x-auto" {...events} ref={ref}>
      <div className="flex flex-col w-[120%] h-full text-white pt-2">
        <div className="grid grid-cols-5 w-full h-full">
          <div className="flex gap-4 h-full">
            <div className="w-full max-w-[1px] h-full bg-white"></div>
            <div className="relative flex flex-col gap-2 w-full h-full pb-18">
              <p className="text-sm">2016. 12 - 2017. 03</p>
              <div className="flex flex-col">
                <p className="text-lg">디앤디랩</p>
                <p className="text-sm">사원</p>
              </div>
              <div className="flex flex-col gap-1 text-sm pt-2">
                <p>쇼핑몰 제작 / 유지보수 위주의 웹 에이전시 회사로 학교에서 추천받아 입사하게 되었습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>한삼인몰 등 대규모 쇼핑몰 제작 및 유지보수 업무를 담당하였습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 에이전시</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 쇼핑몰</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 2,200만원</div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex gap-4 h-full">
            <div className="w-full max-w-[1px] h-full bg-white"></div>
            <div className="relative flex flex-col gap-2 w-full h-full pb-18">
              <p className="text-sm">2019. 11 - 2023. 09</p>
              <div className="flex flex-col">
                <p className="text-lg">그랜드바이오</p>
                <p className="text-sm">프리랜서</p>
              </div>
              <div className="flex flex-col gap-1 text-sm pt-2">
                <p>메이트 대표님에게 추천받아 외주을 받아 프리랜서로 시작하였습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>메이트 재직 중 건바이건으로 진행하였습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 제약</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># Case by case</div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex gap-4 h-full">
            <div className="w-full max-w-[1px] h-full bg-white"></div>
            <div className="relative flex flex-col gap-2 w-full h-full pb-18">
              <p className="text-sm">2023. 10 - 2024. 11</p>
              <div className="flex flex-col">
                <p className="text-lg">팀모노리스</p>
                <p className="text-sm">정규직</p>
              </div>
              <div className="flex flex-col gap-1 text-sm pt-2">
                <p>오퍼 제안으로 입사하게된 회사입니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>백엔드 위주의 개발을 담당하였으나 프론트엔드 일정이 많아 프론트엔드 개발도 함께 진행하였습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 애듀테크</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 6,720만원</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full max-h-[1px] bg-white"></div>
        <div className="grid grid-cols-5 w-full h-full">
          <div></div>
          <div className="flex gap-4 h-full">
            <div className="w-full max-w-[1px] h-full bg-white"></div>
            <div className="relative flex flex-col gap-2 w-full h-full pb-18 pt-5">
              <p className="text-sm">2017. 04 - 2023. 09</p>
              <div className="flex flex-col">
                <p className="text-lg">메이트(Mate)</p>
                <p className="text-sm">프리랜서 → 정규직 → 프리랜서</p>
              </div>
              <div className="flex flex-col gap-1 text-sm pt-2">
                <p>프리랜서로 시작하게된 회사입니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>1인 개발자로서 프로젝트의 모든 부분을 관리하였고 해외 인도 외주팀을 핸들링하였습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 제약</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 1인 개발</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 해외 팀 관리</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 4,400만원</div>
              </div>
            </div>
          </div>
          <div></div>
          <div className="flex gap-4 h-full">
            <div className="w-full max-w-[1px] h-full bg-white"></div>
            <div className="relative flex flex-col gap-2 w-full h-full pb-18 pt-5">
              <p className="text-sm">2019. 11 - 2023. 09</p>
              <div className="flex flex-col">
                <p className="text-lg">옥쇼</p>
                <p className="text-sm">프리랜서 → 정규직</p>
              </div>
              <div className="flex flex-col gap-1 text-sm pt-2">
                <p>프리랜서로 시작하여 업무 성과를 인정받아 정규직 제의를 받아 개발 리드로서 재직하였습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>백엔드 미드 / 프론트엔드 주니어 개발자를 리드하였습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 애드테크</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 개발 리드</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 5,800만원</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkHistory;