const quizData = [
    {
        question: "Aşağıdakilerden hangisi bir Java editor programı değildir?",
        a: "Eclipse",
        b: "JBuilder",
        c: "NetBeans",
        d: "JDK",
        correct: "d",
    },
    {
        question: "Java dili yazım kuralları olarak hangi programlama dilinin gramer yapısını kullanır?",
        a: "Pascal",
        b: "C",
        c: "Basic",
        d: "PHP",
        correct: "b",
    },
    {
        question: "Java programlama dili ile ilgili olarak hangisi söylenebilir? ",
        a: "Hepsi",
        b: "Mobil uygulamalar geliştirilebilir",
        c: "Web tabanlı uygulamalar geliştirilebilir",
        d: "Masaüstü uygulamalar geliştirilebilir",
        correct: "a",
    },
    {
        question: "Java dili günümüzde hangi firma tarafından geliştirilmektedir? ",
        a: "Microsoft",
        b: "Oracle",
        c: "Sun System",
        d: "IEEE",
        correct: "b",
    },
    {
        question:"Kod satırının ekran çıktısı nedir? System.out.print(Math.ceil(9.4));",
        a:"10.0",
        b:"9.4",
        c:"9.0",
        d:"9.5",
        correct:"a",
    },
    {
        question:" Aşağıdaki belirteçlerinden hangisi,farklı paket ve sınıflardan erişilebilirliği belirtir?",
        a:"protected",
        b:"default",
        c:"public",
        d:"private",
        correct:"c",
    },
    {
        question:"Bir sınıftan new komutu ile bellekte bir kopya oluşturulduğunda bu kopyaya ne ad verilir?",
        a:"sınıf",
        b:"metot",
        c:"paket",
        d:"nesne",
        correct:"d",
    },
    {
        question:"Nesnenin kendisini referans etmesini sağlayarak nesnelere ait global değişkenlere erişmede kullanılan deyim aşağıdakilerden hangisidir?",
        a:"this",
        b:"void",
        c:"extend",
        d:"super",
        correct:"a",
    },
    {
        question:"Bir alt sınıf içerisinden üst sınıfta tanımlı olan yapılandırıcı metodun çağrılması için hangi deyim kullanılır?",
        a:"new",
        b:"this",
        c:"super",
        d:"void",
        correct:"c",


    },
    {
        question:"Farklı kaynaklarda paketleme veya kapsülleme olarak da isimlendirilen bir sınıf içeriğinin, veri alanlarının saklanması işlemine ne ad verilir?",
        a:"encapsulation",
        b:"class",
        c:"inheritance",
        d:"Polymorhism",
        correct:"a",
    },


];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2> ${score}/${quizData.length} soruyu doğru cevapladınız .</h2>
                
                <button onclick="location.reload()">Yeniden Yükle</button>
            `;
        }
    }
});