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
#### 기획 및 디자인 컨셉 & 주요 구현기능
- 연말을 맞아 주위 사람들에게 안부를 전하는 모바일 연하장 제작
- 눈 내리는 효과로 분위기 있는 연출
- 스크롤에 맞춰 요소가 나타나도록 함
- 이미지 슬라이드 버튼으로 이미지 전환
- 서로 안부와 덕담을 나눌 수 있는 미니게시판 작성 
    - 새 글 입력시 글 목록에 추가되고, 서버 DB에 저장됨
    - 작성된 글은 한 줄만 노출되고, 여러 줄 작성된 글은 클릭시 전체 내용을 확인할 수 있음
        - 확대된 글을 다시 클릭하거나 다른 글 클릭시 다시 줄어듦 (토글 기능)
    - 글 삭제시 글 목록에서 제거되고, 서버 DB에서 삭제됨
        - 글 삭제시 비밀번호 체크 기능, 최초 등록시 입력한 비밀번호와 일치하면 삭제
    - 글 수정시 글 목록에 수정한 내용이 입력되고, 서버 DB에도 동일하게 수정됨
        - 글 수정시 비밀번호 체크 기능, 최초 등록시 입력한 비밀번호와 일치하면 글이 수정됨
        - 비밀번호 일치하지 않으면 경고창 나타남

---
#### 화면구현 예시

<img src="https://github.com/chunjaeilu/ny_card/blob/master/public/images/%EC%BA%A1%EC%B3%90%EC%9D%B4%EB%AF%B8%EC%A7%80/page1.png?raw=true" height="480"> <img src="https://github.com/chunjaeilu/ny_card/blob/master/public/images/%EC%BA%A1%EC%B3%90%EC%9D%B4%EB%AF%B8%EC%A7%80/page2.png?raw=true" height="480"> <img src="https://github.com/chunjaeilu/ny_card/blob/master/public/images/%EC%BA%A1%EC%B3%90%EC%9D%B4%EB%AF%B8%EC%A7%80/page3.png?raw=true" height="480">

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
---

#### Update Note

- 22.12.26(월)  
  - 폰트 수정 (@fontface 방식 >> web폰트로 수정) (모바일에서 폰트 적용 안 되는 문제 해결)
  - page1 오버스크롤 제거(최초 로딩시 스크롤 멈춤 문제 해결)
  - page3 글목록 더보기 방식 수정 (더보기 버튼 클릭시 펼침 >> 영역 제한 후 스크롤 방식)

- 22.12.28(수)  
  - page2 이미지 슬라이드 수정
    - next/prev 버튼 클릭시 하단 pagination 버튼 활성
    - img3에서 img2로 슬라이드시 반대방향으로 슬라이드 되는 오류 수정 (inline style 조작 >> 클래스로 좌표값 고정)
  - page3 글 삭제/수정 비밀번호 틀렸을 때 경고창 띄움
    - 경고문구 한글로 입력시 글자 깨짐 현상
  - page3 버튼 호버시 마우스포인터 변경
  - page3 반복문 추가요소 id 유일값으로 수정 (index값 참조)
     
- 22.12.29(목)  
  - page3 form 요소 label for값과 input id값 일치시키기
  
---
#### 향후 업데이트 방향
- [ ] 글 입력, 수정, 삭제시 page1로 돌아감 >> page3만 수정되도록(페이지 분리? fetch? 추가학습 필요)
- [ ] 경고창 한글 깨짐현상. (스크립트에 "charset=utf-8" 추가해도 안됨. 추가학습 필요)
