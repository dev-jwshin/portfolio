import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

function WorkHistory() {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div className="w-full h-full cursor-grab overflow-x-auto" {...events} ref={ref}>
      <div className="flex flex-col w-[2100px] h-full text-white pt-2">        <div className="flex w-full h-full">
          <div className="flex gap-4 min-w-[600px] h-full px-4">
            <div className="relative flex flex-col gap-2 w-full h-full pb-18">
              <p className="text-sm">2016. 12 - 2017. 03</p>
              <div className="flex flex-col">
                <p className="text-lg">디앤디랩</p>
                <p className="text-sm">정규직</p>
              </div>
              <div className="flex flex-col gap-1 text-sm pt-2">
                <p>고등학생 때 잠깐씩 외주를 받던 학교 연계 회사 입니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>소규모 쇼핑몰부터 한삼인몰같은 대규모 쇼핑몰 제작 및 유지보수 업무를 담당하였습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>에이전시가 아닌 자사 서비스를 개발하고 싶은 마음이 생겨 퇴사를 결심하였습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 에이전시</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 쇼핑몰</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 2,200만원</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 min-w-[600px] h-full px-4 border-l border-white">
            <div className="relative flex flex-col gap-2 w-full h-full pb-18">
              <p className="text-sm">2019. 11 - 2023. 09</p>
              <div className="flex flex-col">
                <p className="text-lg">그랜드바이오</p>
                <p className="text-sm">프리랜서</p>
              </div>
              <div className="flex flex-col gap-1 text-sm pt-2">
                <p>메이트 대표님에게 추천받아 외주을 받아 프리랜서로 시작하였습니다. 머크앤시그마 출신의 대표님이 창업하신 회사로 연구나 제약에 사용되는 물품을 취급하는 쇼핑몰을 개발하였습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>메이트 재직 중 건바이건으로 임금을 받았습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>임금 문제로 2023년 9월을 마지막으로 외주를 받고 있지 않습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 제약</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># Case by case</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 min-w-[600px] h-full px-4 border-l border-white">
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
                <p>온라인 코딩 교육 플랫폼의 백엔드 위주의 개발을 담당하였으나 프론트엔드 일정이 많거나 한사람이 풀스택으로 개발하는 것이 효율적이라고 판단될 때는 프론트엔드 개발도 함께 진행하였습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>오랜시간 앉아서 일한 결과 허리 건강이 급격하게 악화되어 퇴사하게 되었습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>현재는 수술 및 재활을 진행하여 거의 완치되었습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 애듀테크</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 6,720만원</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center min-w-[300px] border-l border-white">
            <span className="text-3xl">지금까지</span>
          </div>
        </div>
        <div className="w-full h-full max-h-[1px] bg-white"></div>
        <div className="flex w-full h-full">
          <div className="flex justify-center items-center min-w-[300px]">
            <span className="text-3xl">시작부터</span>
          </div>
          <div className="flex gap-4 min-w-[600px] h-full px-4 border-l border-white">
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
                <p>써모피셔 출신의 대표님이 창업하신 회사로 연구 공급자와 소비자를 중개하는 플랫폼을 개발하였습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>1인 개발자로서 프로젝트의 모든 부분을 관리하였고 해외 인도 외주팀을 핸들링하였습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>대표님이 미국으로 이민을 가시면서 다시 프리랜서로서 업무를 보았습니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>그러나, 시차로 인해 소통이 어려워 2023년 9월을 마지막으로 외주를 받고 있지 않습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 제약</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 1인 개발</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 해외 팀 관리</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 4,400만원</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 min-w-[600px] h-full px-4 border-l border-white">
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
              <div className="flex flex-col gap-1 text-sm">
                <p>대표님이 1인 사업을 진행하시던 초창기부터 30명에 가까운 회사가 되기까지 함께 하여 애착이 컷으나 회사의 사실상 도산으로 인해 퇴사하게 되었습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 애드테크</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 개발 리드</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 5,800만원</div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 min-w-[600px] h-full px-4 border-l border-white">
            <div className="relative flex flex-col gap-2 w-full h-full pb-18 pt-5">
              <p className="text-sm">2024. 12</p>
              <div className="flex flex-col">
                <p className="text-lg">마이티켓플렉스</p>
                <p className="text-sm">프리랜서 / 파트타임</p>
              </div>
              <div className="flex flex-col gap-1 text-sm pt-2">
                <p>허리 재활 중 일을 하고 싶어 프리랜서로서 시작한 회사입니다.</p>
              </div>
              <div className="flex flex-col gap-1 text-sm">
                <p>메인 개발보단 주로 개발 로드맵 / 인프라 설계 / 리뷰를 통한 코드 품질 유지 / 주니어 & 미드 개발자의 리드를 담당하고 있습니다.</p>
              </div>
              <div className="absolute bottom-0 left-0 pb-5 flex flex-wrap gap-2 text-sm">
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 티켓 거래</div>
                <div className="bg-white text-black px-2 p-1 rounded-sm"># 개발 리드</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkHistory;