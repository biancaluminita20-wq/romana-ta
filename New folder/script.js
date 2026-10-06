const supabaseClient = window.supabase.createClient(
  'https://grvqjbyinporyssnqlac.supabase.co',
  'sb_publishable_2J5iFSTsDM4TNvux1AnEqg_JR9W56Y4'
);

const chapters = [
  {
    id: 'substantiv',
    name: 'Substantiv',
    desc: 'Felul, genul, numărul și cazul',
    icon: 'S',
    questions: [
      {q:'În enunțul „Cartea este pe masă”, ce parte de vorbire este „cartea”?',a:['adjectiv','substantiv','pronume','adverb'],c:1},
      {q:'Care dintre următoarele substantive este de genul neutru?',a:['fată','copac','scaun','mamă'],c:2},
      {q:'Forma „copiilor” este la cazul:',a:['nominativ','acuzativ','genitiv-dativ','vocativ'],c:2}
    ]
  },

  {
    id: 'pronume',
    name: 'Pronume',
    desc: 'Tipuri, valori și funcții',
    icon: 'P',
    questions: [
      {q:'Care dintre următoarele este un pronume personal?',a:['acesta','eu','al meu','fiecare'],c:1},
      {q:'În enunțul „Aceasta este cartea mea”, „aceasta” este:',a:['pronume demonstrativ','adjectiv pronominal demonstrativ','pronume posesiv','pronume relativ'],c:0},
      {q:'Care este un pronume posesiv?',a:['cine','nostru','care','acela'],c:1}
    ]
  },

  {
    id: 'numeral',
    name: 'Numeral',
    desc: 'Tipuri și valori morfologice',
    icon: 'N',
    questions: [
      {q:'În „Am citit două cărți”, cuvântul „două” este:',a:['numeral cardinal','numeral ordinal','adjectiv','pronume'],c:0},
      {q:'„Al treilea” este un numeral:',a:['cardinal','ordinal','colectiv','fracționar'],c:1},
      {q:'Care dintre următoarele este numeral colectiv?',a:['doi','al doilea','amândoi','douăzeci'],c:2}
    ]
  },

  {
    id: 'adjectiv',
    name: 'Adjectiv',
    desc: 'Grade de comparație și acord',
    icon: 'A',
    questions: [
      {q:'În „o fată harnică”, adjectivul se acordă cu substantivul în:',a:['gen și număr','caz','persoană','timp'],c:0},
      {q:'Forma „mai frumos” exprimă gradul:',a:['pozitiv','comparativ','superlativ absolut','superlativ relativ'],c:1}
    ]
  },

  {
    id: 'verb',
    name: 'Verb',
    desc: 'Moduri, timpuri și conjugări',
    icon: 'V',
    questions: [
      {q:'În „Eu citesc”, verbul este la modul:',a:['indicativ','conjunctiv','imperativ','condițional-optativ'],c:0},
      {q:'Forma „să merg” este la modul:',a:['indicativ','conjunctiv','infinitiv','gerunziu'],c:1}
    ]
  },

  {
    id: 'adverb',
    name: 'Adverb',
    desc: 'Feluri și grade de comparație',
    icon: 'D',
    questions: [
      {q:'În „El aleargă repede”, „repede” este:',a:['adverb','adjectiv','substantiv','prepoziție'],c:0},
      {q:'Care este un adverb de loc?',a:['ieri','aici','foarte','bine'],c:1}
    ]
  },

  {
    id: 'sintaxa',
    name: 'Sintaxă',
    desc: 'Părți de propoziție și relații',
    icon: 'X',
    questions: [
      {q:'În „Maria citește o carte”, „Maria” este:',a:['subiect','predicat','complement','atribut'],c:0},
      {q:'În „El este medic”, „medic” este:',a:['complement direct','nume predicativ','atribut','subiect'],c:1}
    ]
  },

  {
    id: 'ortografie',
    name: 'Ortografie & vocabular',
    desc: 'Scriere corectă și vocabular',
    icon: 'O',
    questions: [
      {q:'Care variantă este scrisă corect?',a:['nici un','niciun','nici-un','nici Un'],c:1},
      {q:'Cuvintele „eminenst” și „iminent” sunt:',a:['sinonime','antonime','paronime','omonime'],c:2}
    ]
  },

  {
    id: 'fonetica',
    name: 'Fonetica',
    desc: 'Sunete, silabe, diftongi și accent',
    icon: 'F',
    questions: [
      {q:'Stabiliţi numărul semnelor de ortografie, respectiv de punctuaţie, din enunţul: Între orele 22-24, în noaptea de 23/24 iulie, s-au petrecut mai multe accidente din cauza „viteziştilor” care-au circulat pe şoseaua Bacău-Piatra-Neamț cu mai mult de 100 km/h.',a:['7 de punctuaţie, 4 de ortografie','6 de punctuaţie, 4 de ortografie','6 de punctuaţie, 5 de ortografie','8 de punctuaţie, 3 de ortografie'],c:0},
      {q:'Indicaţi seria în care cuvintele sunt corect ordonate alfabetic:',a:['amărât, amărăciune, amândoi, auxiliar','individ, invidia, manieră, manierat','prevede, prezice, ruşine, whisky','vârstă, vidră, watt, zână'],c:3},
      {q:'Indicaţi seria în care toate cuvintele sunt corect despărţite în silabe:',a:['a-bo-ri-gen, a-bro-ga, ab-rupt, a-di-a-cent, abs-tract','a-dop-ta, banc-ru-tă, o-bi-ect, pros-pect, su-bi-ect','alt-fel, ast-fel, feld-ma-re-şal, port-mo-neu, post-fa-ţă','pust-nic, stâlp-nic, a-ghi-o-tant, am-plu, i-gu-a-nă'],c:2},
      {q:'Cuvântul „traumatizat” conţine:',a:['cinci silabe','patru silabe','trei silabe','şase silabe'],c:2},
      {q:'Cuvintele „căl-du-ră”, „no-tă”, „măr” sunt:',a:['bisilabic, trisilabic, bisilabic','toate bisilabice','bisilabic, bisilabic, monosilabic','trisilabic, bisilabic, monosilabic'],c:3},
      {q:'Litera e are cele mai multe valori în seria:',a:['mei, mea, ea, eşti, geam','piept, re-ce, leu, ve-che, es-te','iu-te, leoar-că, li-ce-an, a-ce-ea, cre-ea-ză','li-ghean, e-ra, mie-re, boj-deu-că, bă-ieţi'],c:0},
      {q:'Litera i are patru valori în seria:',a:['mei, fru-moşi, pai, şchiopi','pi-rat, mingi, ni-meni, pi-cior','iu-te, pis-ci-nă, vechi, a-poi','bă-ieţi, chiu-lan-giu, mie-re, oa-ie'],c:3},
      {q:'Cei trei „i” din cuvântul ciocoii sunt, în ordine:',a:['semivocală, semivocală, vocală','semivocală, vocală, semivocală','semn grafic, semn grafic, vocală','semn grafic, vocală, semivocală'],c:2},
      {q:'În cuvântul mieii există:',a:['1 triftong','2 diftongi şi 1 hiat','1 triftong şi 1 hiat','1 diftong și 1 hiat'],c:3},
      {q:'Indicaţi cuvântul care conţine patru sunete:',a:['regi [reğ]','chiar [k’ar]','chix [k’iks]','bo-xă [boksă]'],c:2},
      {q:'Indicaţi cuvântul care conţine numai diftongi suitori:',a:['ploa-ie','fru-moa-sei','pu-iu-lui','pâi-nea'],c:0},
      {q:'Precizaţi câţi diftongi sunt în enunţul E pre-o-cu-pat cui i-a dat şi ci-ne-a câş-ti-gat.',a:['patru','unu','doi','trei'],c:1},
      {q:'Există triftongi în toate cuvintele din seria:',a:['a-ri-cioai-că, chioa-ră, oa-ie, bu-to-iaş','le-au, iau, mi-ai, a-ri-pioa-ră','li-ghi-oa-nă, mi-oa-ră, mun-ceau, ve-deau','le-oai-că, a-gheas-mă, ghioa-gă, mu-iat'],c:1},
      {q:'Precizaţi seria formată numai din cuvinte care conţin exclusiv hiat:',a:['ais-berg, con-şt i - in-cios, e-vla-v i - os, ge-run-ziu','e-va-z i - o-nist, fas-t u - os, in-va-z i - e, mu-ch i - e','a - i-do-ma, e-li-z i - u-ne, ho-lo-caust, u-ra-niu','li-ti-giu, ter-ţ i - ar, her-me-n e - u-ti-că, au-gust'],c:1},
      {q:'Indică seria în care cuvintele conţin numai vocale: (fără semivocale, adică, fără diftongi, triftongi)',a:['dic-ţi-o-nar, dez-gheţ, mi-cro-bi-an, pro-pri-e-tar','gea-nă, di-op-tri-e, a-e-rat, fo-ios','a-prig, flă-că-ru-ie, du-el, e-chi-noc-ţiu','mi-o-pi-e, lu-mi-na-ţi-e, e-cher, a-lei'],c:0},
      {q:'Litera „i” este semivocală în următoarea serie de cuvinte:',a:['i-e, al-bi-e, iar-nă','iar-bă, iu-li-e, ia-tă','cla-ie, fi-ind-că, fi-e-ca-re','in-dus-tri-e, cu-vi-in-cios, in-de-cent'],c:1},
      {q:'Litera u notează semivocală în toată seria de cuvinte:',a:['u-nu, șnur, ur-ban','u-lei, li-ceu, no-uă','do-uă, unt, u-ri-aș','ro-uă, r-ă-u, m-i-a-u'],c:3},
      {q:'Indicaţi cuvintele care conţin sunetul i semivocalic: 1. unchi [unk’] 2. este [ies-te] 3. aceea [a-ce-ia] 4. fiasco [fias-co] 5. geamgii [ğam-gii] 6. ciorbă [čor-bă]',a:['4, 5','2, 3, 4, 5','2, 4','1, 4, 6'],c:1},
      {q:'În cuvintele ţea-pă, ie-puri, trea-bă, co-er-ci-tiv, litera e notează:',a:['semivocală, vocală, vocală, semivocală','semivocală, semivocală, semivocală, vocală','semivocală, vocală, semivocală, vocală','semivocală, vocală, vocală, vocală'],c:2},
      {q:'Cuvântul „ghi-veci” (g’i-več) este alcătuit din:',a:['7 litere, 7 sunete','7 litere, 6 sunete','7 litere, 5 sunete','7 litere şi 8 sunete'],c:3},
      {q:'Câte litere şi câte sunete sunt în cuvântul „xerox” (kseroks)?',a:['cinci litere şi şapte sunete','cinci litere şi şase sunete','cinci litere şi cinci sunete','cinci litere şi patru sunete'],c:1},
      {q:'Litera x este redată prin sunetele gz, în seria:',a:['Alexia, exil, exod','expert, expune, axă','xerox, executa, extremitate','examen, exerciţiu, exact'],c:3},
      {q:'Precizaţi seria de cuvinte în care x se pronunţă cs:',a:['exact, hexagon, galaxie, lexic','exerciţiu, expoziţie, expresie, fix','axiomă, box, exemplu, claxon','anexă, ax, exod, asfixia'],c:3},
      {q:'Precizează în câte cuvinte din seria următoare „e” şi „i” sunt litere ajutătoare, nerealizându-se fonetic: ci-ber-ne-ti-ci-an, chei, po-ma-na-giu, giu-va-ier, cio-ban, ghea-ţă, ghi-o-cel.',a:['trei','patru','cinci','şase'],c:0},
      {q:'Literele ce şi gi redau un singur sunet în toată seria de cuvinte:',a:['cer-cei, ge-o-lo-gi-e','ghi-o-cei, gin-gaşi','li-ceu, tragi','cea-tă, giu-va-ier'],c:3},
      {q:'Grupul de litere ge nu are valoarea unui sunet în toate cuvintele din seria:',a:['geam, gean-tă, a-ger, in-ge-ni-os','coş-co-gea-mi-te, pin-gea, măr-ge-le, gem','nin-ge, de-ge-tar, tra-ge-re, re-ge','ge-o-me-tri-e, gea-măt, geam-baş, geam-giu'],c:2},
      {q:'Precizează câte cuvinte din seria următoare trebuie pronunţate cum se scriu: Chicago, eu, aisberg, trosni, erbivore, disident, prerie, Densusianu.',a:['toate','cinci','patru','trei'],c:1},
      {q:'Sunt accentuate corect cuvintele:',a:['avárie, adultér, áfină','avaríe, adúlter, afínă','avaríe, adultér, áfină şi afínă','avárie, adúlter, áfină'],c:0},
      {q:'Accentul distinge forme gramaticale în varianta:',a:['batem/bătem; (prima formă e corectă)','încuie (prezent)/încuie (perfect simplu)','modem/modem; (a doua formă e corectă)','profesor/profesor; (prima formă e corectă)'],c:1},
      {q:'Au accentul pe a doua silabă toate cuvintele din seria:',a:['do-rin-ţă, va-can-ţă, e-mo-ţi-e','săr-bă-tori, co-zo-naci, va-can-ţă','po-le-ia-lă, glo-buri, ghir-lan-de','ghe-ţuş, der-de-luş, sa-ni-e'],c:0}
    ]
  }
];


/* =========================================================
   STARE
   ========================================================= */

let state = JSON.parse(
  localStorage.getItem('romanaV1') ||
  '{"answered":0,"correct":0,"byChapter":{},"progressByChapter":{}}'
);

state.byChapter ??= {};
state.progressByChapter ??= {};

/*
  Dacă utilizatoarea are deja date salvate din versiunea
  anterioară, acestea rămân intacte.
*/

function save() {
  localStorage.setItem(
    'romanaV1',
    JSON.stringify(state)
  );
}


let current = null;
let qi = 0;
let locked = false;
let accessApproved = false;


/* =========================================================
   MOD MANUAL / AUTOMAT
   ========================================================= */

let quizMode =
  localStorage.getItem('romanaQuizMode') || 'manual';

const quizModeToggle =
  document.getElementById('quizModeToggle');


function updateQuizModeToggle() {

  quizModeToggle.classList.toggle(
    'active',
    quizMode === 'auto'
  );

  quizModeToggle.setAttribute(
    'aria-label',
    quizMode === 'auto'
      ? 'Mod automat activ'
      : 'Mod manual activ'
  );
}


quizModeToggle.addEventListener(
  'click',
  () => {

    quizMode =
      quizMode === 'manual'
        ? 'auto'
        : 'manual';

    localStorage.setItem(
      'romanaQuizMode',
      quizMode
    );

    updateQuizModeToggle();

  }
);


updateQuizModeToggle();


/* =========================================================
   SELECTOR
   ========================================================= */

const $ = s => document.querySelector(s);


/* =========================================================
   PAGINI
   ========================================================= */

function show(view) {

  document
    .querySelectorAll('.view')
    .forEach(x =>
      x.classList.remove('active-view')
    );

  $('#' + view).classList.add('active-view');

  document
    .querySelectorAll('.nav-btn')
    .forEach(x =>
      x.classList.toggle(
        'active',
        x.dataset.view === view
      )
    );

  if (view === 'stats') {
    renderStats();
  }
}


/* =========================================================
   CAPITOLE
   ========================================================= */

function cards(target, limit) {

  $(target).innerHTML =
    chapters
      .slice(0, limit || chapters.length)
      .map(c => `
        <div class="chapter" data-id="${c.id}">
          <span class="arrow">→</span>
          <div class="chapter-icon">${c.icon}</div>
          <h4>${c.name}</h4>
          <p>${c.desc} · ${c.questions.length} grile</p>
        </div>
      `)
      .join('');

  document
    .querySelectorAll('.chapter')
    .forEach(el => {

      el.onclick = () =>
        startQuiz(el.dataset.id);

    });
}


/* =========================================================
   AMESTECARE
   ========================================================= */

function shuffleQuestions(questions) {

  const copy = [...questions];

  for (
    let i = copy.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(Math.random() * (i + 1));

    [copy[i], copy[j]] =
      [copy[j], copy[i]];
  }

  return copy;
}


/* =========================================================
   PORNIRE GRILE
   ========================================================= */

function startQuiz(id) {

  if (!accessApproved) {

    alert(
      'Accesul la grile nu este încă aprobat.'
    );

    return;
  }


  const chapter =
    chapters.find(c => c.id === id);

  if (!chapter) return;


  let savedProgress =
    state.progressByChapter[id];


  /*
    Dacă nu există progres, generăm o ordine nouă.
  */

  if (
    !savedProgress ||
    !Array.isArray(savedProgress.order) ||
    savedProgress.order.length !==
      chapter.questions.length
  ) {

    savedProgress = {

      index: 0,

      order: shuffleQuestions(
        chapter.questions.map(
          (_, index) => index
        )
      )

    };

    state.progressByChapter[id] =
      savedProgress;

    save();
  }


  /*
    Refacem exact ordinea în care au fost
    generate întrebările.
  */

  current = {

    ...chapter,

    questions:
      savedProgress.order.map(
        index => chapter.questions[index]
      )

  };


  qi =
    Number.isInteger(savedProgress.index)
      ? savedProgress.index
      : 0;


  if (
    qi < 0 ||
    qi >= current.questions.length
  ) {

    qi = 0;

    savedProgress.index = 0;

    save();
  }


  show('quiz');

  renderQuestion();
}


/* =========================================================
   AFIȘARE ÎNTREBARE
   ========================================================= */

function renderQuestion() {

  locked = false;

  const q =
    current.questions[qi];


  $('#quizChapter').textContent =
    current.name.toUpperCase();


  $('#quizTitle').textContent =
    'Grile';


  $('#counter').textContent =
    `${qi + 1} / ${current.questions.length}`;


  $('#questionNumber').textContent =
    `ÎNTREBAREA ${String(qi + 1).padStart(2, '0')}`;


  $('#questionText').textContent =
    q.q;


  $('#progressBar').style.width =
    ((qi + 1) /
      current.questions.length *
      100) + '%';


  $('#feedback').className =
    'feedback hidden';


  $('#nextBtn').classList.add(
    'hidden'
  );


  $('#nextBtn').textContent =
    'Următoarea întrebare →';


  $('#answers').innerHTML =
    q.a
      .map((a, i) => `
        <button
          class="answer"
          data-i="${i}"
        >
          ${String.fromCharCode(65 + i)}. ${a}
        </button>
      `)
      .join('');


  document
    .querySelectorAll('.answer')
    .forEach(b => {

      b.onclick = () =>
        answer(+b.dataset.i);

    });
}


/* =========================================================
   RĂSPUNS
   ========================================================= */

function answer(i) {

  if (locked) return;

  locked = true;


  const q =
    current.questions[qi];

  const ok =
    i === q.c;


  /*
    STATISTICI GENERALE
  */

  state.answered++;

  if (ok) {
    state.correct++;
  }


  /*
    STATISTICI CAPITOL
  */

  state.byChapter[current.id] ??= {
    answered: 0,
    correct: 0
  };


  state.byChapter[current.id].answered++;


  if (ok) {
    state.byChapter[current.id].correct++;
  }


  /*
    PROGRESUL ESTE SALVAT IMEDIAT.
    Dacă întrebarea a fost rezolvată,
    indexul următor este qi + 1.
  */

  const progress =
    state.progressByChapter[current.id];


  if (progress) {

    progress.index =
      qi + 1;

  }


  save();


  /*
    CORECT / GREȘIT
  */

  document
    .querySelectorAll('.answer')
    .forEach((b, n) => {

      if (n === q.c) {
        b.classList.add('correct');
      }

      if (
        n === i &&
        !ok
      ) {
        b.classList.add('wrong');
      }

    });


  $('#feedback').textContent =
    ok
      ? '✓ Corect! Foarte bine.'
      : `✕ Nu este corect. Varianta corectă este ${String.fromCharCode(65 + q.c)}.`;


  $('#feedback').className =
    'feedback ' +
    (ok ? 'correct' : 'wrong');


  /*
    DACĂ MAI EXISTĂ ÎNTREBĂRI
  */

  if (
    qi <
    current.questions.length - 1
  ) {

    if (quizMode === 'manual') {

      /*
        MOD MANUAL:
        așteaptă apăsarea butonului.
      */

      $('#nextBtn').textContent =
        'Următoarea întrebare →';

      $('#nextBtn').classList.remove(
        'hidden'
      );

    } else {

      /*
        MOD AUTOMAT:
        așteaptă puțin ca utilizatoarea
        să vadă răspunsul și apoi trece singur.
      */

      setTimeout(() => {

        if (!locked) return;

        qi++;

        if (
          state.progressByChapter[current.id]
        ) {

          state.progressByChapter[current.id].index =
            qi;

          save();

        }

        renderQuestion();

      }, 1000);

    }

  } else {

    /*
      ULTIMA ÎNTREBARE
    */

    if (quizMode === 'manual') {

      $('#nextBtn').textContent =
        'Finalizează capitolul →';

      $('#nextBtn').classList.remove(
        'hidden'
      );

    } else {

      /*
        În modul automat, după ultima
        întrebare așteptăm o secundă,
        apoi terminăm capitolul.
      */

      setTimeout(() => {

        if (!locked) return;

        delete state.progressByChapter[
          current.id
        ];

        save();

        show('stats');

      }, 1000);

    }

  }
}


/* =========================================================
   BUTON URMĂTOAREA ÎNTREBARE
   ========================================================= */

$('#nextBtn').onclick = () => {

  /*
    Dacă încă există întrebări:
    trecem manual la următoarea.
  */

  if (
    qi <
    current.questions.length - 1
  ) {

    qi++;


    if (
      state.progressByChapter[current.id]
    ) {

      state.progressByChapter[
        current.id
      ].index = qi;

      save();

    }


    renderQuestion();

    return;
  }


  /*
    Dacă am ajuns aici înseamnă că
    ultima întrebare a fost terminată.
  */

  delete state.progressByChapter[
    current.id
  ];

  save();

  show('stats');
};


/* =========================================================
   ÎNAPOI LA CAPITOLE
   ========================================================= */

$('#backToChapters').onclick = () => {

  /*
    Dacă utilizatoarea a apăsat răspunsul,
    progresul a fost deja salvat ca qi + 1.

    Dacă nu a răspuns încă, păstrăm
    întrebarea curentă.
  */

  if (
    current &&
    !locked &&
    state.progressByChapter[current.id]
  ) {

    state.progressByChapter[
      current.id
    ].index = qi;

    save();

  }


  show('chapters');
};


/* =========================================================
   BUTOANE PRINCIPALE
   ========================================================= */

$('#startBtn').onclick = () => {

  startQuiz('pronume');

};


document
  .querySelectorAll('.nav-btn')
  .forEach(b => {

    b.onclick = () =>
      show(b.dataset.view);

  });


document
  .querySelectorAll('[data-view-target]')
  .forEach(b => {

    b.onclick = () =>
      show(b.dataset.viewTarget);

  });


/* =========================================================
   STATISTICI
   ========================================================= */

function renderStats() {

  const answered =
    Number(state.answered) || 0;


  const correct =
    Number(state.correct) || 0;


  /*
    Întrebările greșite sunt toate
    întrebările rezolvate care nu au
    fost corecte.
  */

  const wrong =
    Math.max(
      0,
      answered - correct
    );


  /*
    PROCENTE GENERALE
  */

  const correctPct =
    answered
      ? Math.round(
          correct /
          answered *
          100
        )
      : 0;


  const wrongPct =
    answered
      ? Math.round(
          wrong /
          answered *
          100
        )
      : 0;


  /*
    CARD 1 — ÎNTREBĂRI REZOLVATE
  */

  $('#statAnswered').textContent =
    answered;


  /*
    CARD 2 — ÎNTREBĂRI CORECTE
  */

  $('#statCorrect').textContent =
    correct;


  $('#statCorrectPercent').textContent =
    correctPct + '%';


  /*
    CARD 3 — ÎNTREBĂRI GREȘITE
  */

  $('#statWrong').textContent =
    wrong;


  $('#statWrongPercent').textContent =
    wrongPct + '%';


  /*
    PROGRES PE CAPITOLE
  */

  $('#statsChapters').innerHTML =
    chapters
      .map(c => {

        const s =
          state.byChapter[c.id] ||
          {
            answered: 0,
            correct: 0
          };


        const chapterAnswered =
          Number(s.answered) || 0;


        const chapterCorrect =
          Number(s.correct) || 0;


        const p =
          chapterAnswered
            ? Math.round(
                chapterCorrect /
                chapterAnswered *
                100
              )
            : 0;


        return `
          <div class="stat-row">
            <strong>${c.name}</strong>

            <div class="bar">
              <div style="width:${p}%"></div>
            </div>

            <span>
              ${chapterCorrect}/${chapterAnswered}
            </span>
          </div>
        `;

      })
      .join('');
}


/* =========================================================
   CAPITOLE
   ========================================================= */

cards('#homeChapters', 6);

cards('#allChapters');


/* =========================================================
   AUTENTIFICARE
   ========================================================= */

const loginForm =
  document.getElementById('loginForm');


loginForm.addEventListener(
  'submit',
  async (e) => {

    e.preventDefault();


    const email =
      document.getElementById(
        'loginEmail'
      ).value;


    const password =
      document.getElementById(
        'loginPassword'
      ).value;


    const message =
      document.getElementById(
        'loginMessage'
      );


    const { error } =
      await supabaseClient.auth
        .signInWithPassword({

          email: email,

          password: password

        });


    if (error) {

      message.textContent =
        error.message;

      return;
    }


    await checkAccess();


    document.getElementById(
      'authScreen'
    ).style.display = 'none';

  }
);


/* =========================================================
   CREARE CONT
   ========================================================= */

const showSignupBtn =
  document.getElementById(
    'showSignupBtn'
  );


const signupForm =
  document.getElementById(
    'signupForm'
  );


showSignupBtn.addEventListener(
  'click',
  () => {

    loginForm.style.display =
      'none';

    showSignupBtn.style.display =
      'none';

    signupForm.style.display =
      'flex';

  }
);


signupForm.addEventListener(
  'submit',
  async (e) => {

    e.preventDefault();


    const email =
      document.getElementById(
        'signupEmail'
      ).value;


    const password =
      document.getElementById(
        'signupPassword'
      ).value;


    const passwordConfirm =
      document.getElementById(
        'signupPasswordConfirm'
      ).value;


    const message =
      document.getElementById(
        'signupMessage'
      );


    if (
      password !== passwordConfirm
    ) {

      message.textContent =
        'Parolele nu coincid.';

      return;
    }


    const { error } =
      await supabaseClient.auth
        .signUp({

          email: email,

          password: password

        });


    if (error) {

      message.textContent =
        error.message;

      return;
    }


    message.textContent =
      'Contul a fost creat. Se deschide site-ul...';


    await checkAccess();


    document.getElementById(
      'authScreen'
    ).style.display = 'none';

  }
);


/* =========================================================
   VERIFICARE ACCES
   ========================================================= */

async function checkAccess() {

  const {
    data: { session }
  } =
    await supabaseClient.auth
      .getSession();


  if (!session) {

    document.getElementById(
      'authScreen'
    ).style.display = 'flex';

    return;
  }


  const { data: access } =
    await supabaseClient
      .from('access_requests')
      .select('approved')
      .eq('id', session.user.id)
      .single();


  accessApproved =
    !!access?.approved;


  document.getElementById(
    'authScreen'
  ).style.display = 'none';
}


checkAccess();


/* =========================================================
   MENIU
   ========================================================= */

const menuToggle =
  document.getElementById(
    'menuToggle'
  );


const menuOverlay =
  document.getElementById(
    'menuOverlay'
  );


menuToggle.addEventListener(
  'click',
  () => {

    document.body.classList.toggle(
      'menu-open'
    );

  }
);


menuOverlay.addEventListener(
  'click',
  () => {

    document.body.classList.remove(
      'menu-open'
    );

  }
);


document
  .querySelectorAll('.nav-btn')
  .forEach(button => {

    button.addEventListener(
      'click',
      () => {

        document.body.classList.remove(
          'menu-open'
        );

      }
    );

  });


/* =========================================================
   LIGHT / DARK MODE
   ========================================================= */

const themeToggle =
  document.getElementById(
    'themeToggle'
  );


const savedTheme =
  localStorage.getItem(
    'romanaTheme'
  );


if (savedTheme === 'dark') {

  document.body.classList.add(
    'dark'
  );

  themeToggle.textContent =
    '☀️';

} else {

  themeToggle.textContent =
    '🌙';

}


themeToggle.addEventListener(
  'click',
  () => {

    document.body.classList.toggle(
      'dark'
    );


    const isDark =
      document.body.classList.contains(
        'dark'
      );


    localStorage.setItem(
      'romanaTheme',
      isDark
        ? 'dark'
        : 'light'
    );


    themeToggle.textContent =
      isDark
        ? '☀️'
        : '🌙';

  }
);


/* =========================================================
   MENIU DESKTOP
   ========================================================= */

const desktopMenuToggle =
  document.getElementById(
    'menuToggle'
  );


desktopMenuToggle.addEventListener(
  'click',
  () => {

    if (
      window.innerWidth > 1000
    ) {

      document.body.classList.remove(
        'menu-open'
      );

      document.body.classList.toggle(
        'menu-closed'
      );

    }

  }
);


document.addEventListener(
  'click',
  (event) => {

    const sidebar =
      document.getElementById(
        'sidebar'
      );


    const menuButton =
      document.getElementById(
        'menuToggle'
      );


    if (
      window.innerWidth > 1000 &&
      document.body.classList.contains(
        'menu-closed'
      ) === false &&
      !sidebar.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {

      document.body.classList.add(
        'menu-closed'
      );

    }

  }
);