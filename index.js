const express = require("express");
const app = express();
const ejs = require("ejs");
const dateFns = require("date-fns");

// post 사용 모듈 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ejs를 view 엔진으로 설정
app.set("view engine", ejs);

// 정적파일 경로 지정
app.use(express.static("public"));

// post 읽고 쓰기
const fs = require("fs"); // 파일 읽고쓰기 위한 node.js 내장모듈
let posts = [];

// data 파일 불러오기
const readFile = fs.readFileSync("data.json", "utf-8");

// readFile 데이터(string)를 객체(object)로 변환(파싱)
const jsonData = JSON.parse(readFile);

posts = [...jsonData];

var check = "";
// home 화면 불러오기
app.get("/", function (req, res) {
  res.render("index.ejs", { posts });
});

// 글쓰기 요청 처리
app.post("/create", function (req, res) {
  const greeting = req.body.greeting;
  const name = req.body.name;
  const pwd = req.body.pwd;

  const date = new Date();
  const dFormat = dateFns.format(date, "yy.MM.dd");
  console.log(dFormat);

  const post = { greeting: greeting, name: name, pwd: pwd, date: dFormat };
  // posts에 입력한 글 추가
  posts.push(post);
  console.log(posts);
  // postDB.json 파일에 입력한 글 저장
  fs.writeFileSync("data.json", JSON.stringify(posts));

  res.redirect("/");
});

// 글 삭제 요청 처리
app.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  const pwdCheck = req.body.pwd_check;
  console.log(id);
  console.log(pwdCheck);
  console.log(posts[id].pwd);

  if (pwdCheck == posts[id].pwd) {
    posts.splice(id, 1);
    // 배열의 인덱스번호(id)부터 1개 삭제 >> 선택한 인덱스만 삭제된다.

    // posts 배열 업데이트 (삭제 목록 반영)
    fs.writeFileSync("data.json", JSON.stringify(posts));

    // 화면 새로고침
    res.redirect("/");
  } else {
    res.write("<script>alert('Passwords do not match')</script>");
    res.write('<script>window.location="/"</script>');
  }
});

// 글 수정 요청 처리
app.post("/edit/:id", (req, res) => {
  const id = req.params.id;
  const pwdCheck = req.body.pwd_check;

  if (pwdCheck == posts[id].pwd) {
    const greetingEd = req.body.greeting_edit;
    const nameEd = req.body.name_edit;
    const pwdCh = req.body.pwd_check;

    const dateEd = new Date();
    const dFormat = dateFns.format(dateEd, "yy.MM.dd");

    const postEd = {
      greeting: greetingEd,
      name: nameEd,
      pwd: pwdCh,
      date: dFormat,
    };

    posts.splice(id, 1, postEd);

    // posts 배열 업데이트 (삭제 목록 반영)
    fs.writeFileSync("data.json", JSON.stringify(posts));
    // 화면 새로고침
    res.redirect("/");
  } else {
    res.write("<script>alert('Passwords do not match')</script>");
    res.write('<script>window.location="/"</script>');
  }
});

// 포트 지정 & 서버 오픈
const port = 3001;
app.listen(port, () => {
  console.log(`server running at ${port}`);
});
