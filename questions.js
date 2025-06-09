const questions = [
    {
        question: "Kas jādara pie šīs zīmes?",
        image: "https://celuaprikojums.lv/wp-content/uploads/2018/10/206.jpg",
        answers: [
            {text: "Jādod ceļš", correct: true},
            {text: "Jābrauc pirmajam", correct: false},
            {text: "Jāgaida zaļais signāls", correct: false},
            {text: "Jāuzmanās no remontdarbiem", correct: false},
        ]
    },
    {
        question: "Kāds ir atļautais braukšanas ātrums pilsētā?",
        image: null,
        answers: [
            {text: "50 km/h", correct: true},
            {text: "60 km/h", correct: false},
            {text: "70 km/h", correct: false},
            {text: "80 km/h", correct: false},
        ]
    },
    {
        question: "Tu esi pie gājēju pārejas, taču vista cenšas pāriet pāri. Ko darīt?",
        image: "resources/chicken.png",
        answers: [
            {text: "Palielināt ātrumu, jo vistas taču ir ātras", correct: false},
            {text: "Zvanīt dzīvnieku kontrolei", correct: false},
            {text: "Apstāties un ļaut vistai pāriet pāri", correct: true},
            {text: "Pajautāt vistai, kāpēc viņa vēlas iet pāri", correct: false},
        ]
    },
    {
        question: "Vai ir atļauts sacensties ar zirgiem uz lauku ceļa?",
        image: "resources/horse.png",
        answers: [
            {text: "Jā, ja abiem šoferiem ir ķiveres", correct: false},
            {text: "Nē", correct: true},
            {text: "Tikai Jāņu laikā", correct: false},
            {text: null, correct: null},
        ]
    },
    {
        question: "Kurš gadījums NAV iemesls, lai ieslēgtu avārijas signālu?",
        answers: [
            {text: "Tava mašīna beidz darboties", correct: false},
            {text: "Tevi velk cita mašīna", correct: false},
            {text: "Tu apstājies pie veikala, lai paņemtu kebabu", correct: true},
            {text: "Tu pasaki 'paldies' citam vadītājam", correct: false},
        ]
    },
    {
        question: "NLO nolaižas uz lielceļa tev priekšā. Kāda ir drošākā reakcija?",
        image: "resources/nlo.png",
        answers: [
            {text: "Mēģināt komunicēt, pīpinot", correct: false},
            {text: "Piedāvāt braucienu uz Rīgu", correct: false},
            {text: "Nobremzēt, ieturēt drošu distanci, paziņot autoritātēm", correct: true},
            {text: "Apsteigt ap kreiso pusi", correct: false},
        ]
    },
    {
        question: "Vai tu drīksti braukt pilnās bruņinieka bruņās?",
        image: "resources/armor.png",
        answers: [
            {text: "Jā, ja tas netraucē drošai vadīšanai", correct: true},
            {text: "Nē, jo bruņas nav ES sertificētas drošības ierīces", correct: false},
            {text: null, correct: null},
            {text: null, correct: null},
        ]
    },
    {
        question: "Tu brauc pa nakti un uz ceļa sastopi vienradzi. Ko darīt?",
        image: "resources/unicorn.png",
        answers: [
            {text: "Strauji bremzēt un uztaisīt selfiju", correct: false},
            {text: "Samazināt ātrumu un ļaut dzīvniekam aiziet", correct: true},
            {text: "Signalizēt, lai dzīvnieku nobiedētu", correct: false},
            {text: "Sekot tam, lai redzētu, vai tas aizved pie dārgumiem", correct: false},
        ]
    },
    {
        question: "Ko nozīmē mirgojošs dzeltens signāls?",
        image: "https://imgs.search.brave.com/278ODUWunHaPIhWMTw96Y-EpW7SyK0l23XK5toHoGbc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgz/NTg4MDg5L3Bob3Rv/L3llbGxvdy1saWdo/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9STRMSjdiZFRi/ZkVBUUJnenVpc2dH/ZnB4SzBWd3lSQUJx/ak1kMklzQlFrQT0",
        answers: [
            {text: "Party time", correct: false},
            {text: "Luksofors ir salūzis, tāpēc tas jāignorē", correct: false},
            {text: "Turpināt ceļu uzmanīgi", correct: true},
            {text: "Palielināt ātrumu, lai paspētu pirms sarkanā signāla", correct: false},
        ]
    },
    {
        question: "Vai pasažieris drīkst atrasties mašīnā, ja tam ir uzvilkts milzīgs dinozaura kostīms?",
        image: "resources/dinosaur.png",
        answers: [
            {text: "Jā, ja tas netraucē drošai vadīšanai un pasažieris ir piesprādzējies", correct: true},
            {text: "Jā, ja dinozaurs ir ļoti rets", correct: false},
            {text: "Nē, jo dinozauri jau ir izmiruši", correct: false},
            {text: "Tikai ceturtdienās", correct: false},
        ]
    },
]; 