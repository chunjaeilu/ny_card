# ny_card

22.12.22(목) ~ 12.23(금)

URL : https://port-0-ny-card-fyyf25lbohiha7.gksl2.cloudtype.app/

## 개인과제 :: 스마트웹앱 서버프로그램 만들기 (모바일 연하장)

#### 과제 내용
- node.js와 템플릿엔진(ejs) 기반으로 클라이언트 + 백엔드 웹앱 제작
- 제공된 와이어프레임 참고하여 개별적으로 디자인
- 화면규격 : 모바일 디바이스 환경에 반응
- 글쓰기 기능 DB file 생성하여 구현 및 관리
- 제출기한 : 2일
---
#### 기획 및 디자인 컨셉
- 연말을 맞은 모바일 연하장 제작
- 눈 내리는 효과로 분위기 있는 연출
- 삭제 및 수정 버튼 클릭시 비밀번호 체크 기능
- 스크롤에 맞춰 요소가 나타나도록 함
    
#### 주요 구현기능
- 배경에 눈 내리는 효과
- 글 입력시 글 목록에 추가되고, 서버 DB에 저장됨
- 글 삭제시 글 목록에서 제거되고, 서버 DB에서 삭제됨
  - 글 삭제시 비밀번호 체크 기능, 최초 등록시 입력한 비밀번호와 일치하면 삭제
- 글 수정시 글 목록에 수정한 내용이 입력되고, 서버 DB에도 동일하게 수정됨
  - 글 수정시 비밀번호 체크 기능, 최초 등록시 입력한 비밀번호와 일치하면 글이 수정됨

---
#### 화면구현 예시

<img src="https://github.com/chunjaeilu/ny_card/blob/master/public/images/%EC%BA%A1%EC%B3%90%EC%9D%B4%EB%AF%B8%EC%A7%80/page1.png?raw=true" width="300"> <img src="https://github.com/chunjaeilu/ny_card/blob/master/public/images/%EC%BA%A1%EC%B3%90%EC%9D%B4%EB%AF%B8%EC%A7%80/page2.png?raw=true" width="300"> <img src="https://github.com/chunjaeilu/ny_card/blob/master/public/images/%EC%BA%A1%EC%B3%90%EC%9D%B4%EB%AF%B8%EC%A7%80/page3.png?raw=true" width="300">


---
#### 향후 업데이트 방향
- [ ] 글 입력, 수정, 삭제시 page1로 돌아감 >> page3만 수정되도록(페이지 분리? fetch? 추가학습 필요)
- [x] 모바일 접속시 폰트 적용 안 되는 문제
- [ ] next/prev 버튼으로 슬라이드시 하단 버튼 스타일 
---

#### Time Table

- 22.12.22(목)
  - 디자인 시안
  - 레이아웃 구성
  - 기능구현(눈 내리기 효과, 글 DB에 읽고 쓰기, 삭제시 비밀번호 체크하기)
  
- 22.12.23(금)
  - 기능구현 (글 수정기능, 스크롤 애니메이션 효과, 이미지 슬라이드)
  - 서버 배포
  - 1차 제출
  
- 22.12.26(월)  
  - 폰트 수정 (@fontface 방식 >> web폰트로 수정)
  - page1 오버스크롤 제거(최초 로딩시 스크롤 멈춤 문제 해결)
  - page3 글목록 더보기 방식 수정 (더보기 버튼 클릭시 펼침 >> 영역 제한 후 스크롤 방식)
