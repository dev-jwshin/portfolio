function Resume() {
  return (
    <div className="flex flex-col w-full h-full text-white pt-10 px-10">
      <div className="flex gap-40">
        <div className="flex flex-col gap-2 min-w-[200px]">
          <p className="text-6xl">신준원</p>
          <p className="tracking-tighter text-2xl">Junwon Shin</p>
        </div>
        <div className="flex flex-col font-thin w-full">
          안녕하세요. 웹/앱 풀스택 개발자 신준원입니다. 현실에 안주하지 않고 끊임없이 성장하는 개발자로서 어제보다 나은 오늘을 추구하며 살아가고 있습니다. 비즈니스 도메인을 파악하고 프로젝트를 진행하며 문제를 해결하는 것을 좋아합니다. 또한 협업을 중요하게 생각하고 팀원들과 함께 성장하는 것을 중요하게 생각합니다.
        </div>
      </div>
      <div className="relative flex pt-5 z-10 h-[400px]">
        <div className="flex flex-col gap-2 min-w-[200px] pt-5">
          <p className="text-base font-thin">9년차 웹/앱 풀스택 개발자</p>
          <div className="absolute -bottom-10 -left-20 w-4/8 h-68 bg-white flex justify-start items-center z-0 pl-20">
            <div className="flex flex-col gap-2 text-[#333] py-10 tracking-tighter leading-snug">
              <p><span className="font-bold">주소</span>: 서울특별시 관악구 신림동1길 20-6</p>
              <p><span className="font-bold">연락처</span>: <a href="tel:01091785864" className="underline">010-9178-5864</a></p>
              <p><span className="font-bold">이메일</span>: <a href="mailto:dev@foryourdev.com" className="underline">dev@foryourdev.com</a></p>
              <p><span className="font-bold">깃허브</span>: <a href="https://github.com/dev-jwshin" target="_blank" rel="noopener noreferrer" className="underline">https://github.com/dev-jwshin</a></p>
            </div>
          </div>
        </div>
        <div className="relative flex flex-col font-thin min-w-96 left-40">
          <img src="./resume.png" alt="resume" />
        </div>
        <div className="relative flex flex-col gap-2 pl-54 text-white">
          <p className="text-2xl font-bold">학력</p>
          <div className="flex flex-col">
            <p className="text-lg">여수정보과학고등학교</p>
            <p className="text-sm">2014.03 ~ 2017.02</p>
            <p className="text-base pt-2">
              중학교 시절부터 개발에 관심이 많아 독학으로 C언어를 배웠고, 
              고등학교 입학 시점부터 정규 수업 대신 웹/앱 프로그래밍 취업/대회 특성화 과정을 시작하였습니다.
            </p>
            <p className="text-base pt-2">
              처음엔 대회를 목표로 하여 지방 기능경기대회에서 금상을 입상하였으나, 
              실무보단 암기에 치중되어 있는 대회 문제에 회의감이 들었습니다.
            </p>
            <p className="text-base pt-2">
              이후 실무에 가까운 공부를 위해 쇼핑몰 업체들이 모인 카페에서 쇼핑몰을 유지보수 요청을 받아 무료로 진행하였습니다.
            </p>
            <p className="text-base pt-2">
              독학으로 습득하기 어려운 실무자들의 노하우는 아르바이트를 하여 비용을 마련해서 오프라인 강의를 듣고 습득하였습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[650px] h-[120px] bg-white flex justify-center items-center z-0">
        <p className="text-4xl font-bold text-[#333]">FOR YOUR BUSINESS</p>
      </div>
    </div>
  );
}

export default Resume;