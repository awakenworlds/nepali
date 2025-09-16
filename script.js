const quizData = [
    {"devanagari":"१","roman":"ek","english":"one","sort":"number"},
    {"devanagari":"२","roman":"dui","english":"two","sort":"number"},
    {"devanagari":"३","roman":"tin","english":"three","sort":"number"},
    {"devanagari":"४","roman":"char","english":"four","sort":"number"},
    {"devanagari":"५","roman":"paanch","english":"five","sort":"number"},
    {"devanagari":"६","roman":"chha","english":"six","sort":"number"},
    {"devanagari":"७","roman":"saat","english":"seven","sort":"number"},
    {"devanagari":"८","roman":"aath","english":"eight","sort":"number"},
    {"devanagari":"९","roman":"nau","english":"nine","sort":"number"},
    {"devanagari":"१०","roman":"das","english":"ten","sort":"number"},
    {"devanagari":"अ","roman":"a","english":"a","sort":"letter"},
    {"devanagari":"आ","roman":"aa","english":"aa","sort":"letter"},
    {"devanagari":"इ","roman":"i","english":"i","sort":"letter"},
    {"devanagari":"ई","roman":"ee","english":"ee","sort":"letter"},
    {"devanagari":"उ","roman":"u","english":"u","sort":"letter"},
    {"devanagari":"ऊ","roman":"oo","english":"oo","sort":"letter"},
    {"devanagari":"ऋ","roman":"ri","english":"ri","sort":"letter"},
    {"devanagari":"ए","roman":"e","english":"e","sort":"letter"},
    {"devanagari":"ऐ" ,"roman":"ai","english":"ai","sort":"letter"},
    {"devanagari":"ओ" ,"roman":"o","english":"o","sort":"letter"},
    {"devanagari":"औ" ,"roman":"au","english":"au","sort":"letter"},
    {"devanagari":"अं" ,"roman":"am","english":"am","sort":"letter"},
    {"devanagari":"अः" ,"roman":"ah","english":"ah","sort":"letter"},
    {"devanagari":"क" ,"roman":"ka","english":"ka","sort":"letter"},
    {"devanagari":"ख" ,"roman":"kha","english":"kha","sort":"letter"},
    {"devanagari":"ग" ,"roman":"ga","english":"ga","sort":"letter"},
    {"devanagari":"घ" ,"roman":"gha","english":"gha","sort":"letter"},
    {"devanagari":"ङ" ,"roman":"nga","english":"nga","sort":"letter"},
    {"devanagari":"च" ,"roman":"cha","english":"cha","sort":"letter"},
    {"devanagari":"छ" ,"roman":"chha","english":"chha","sort":"letter"},
    {"devanagari":"ज" ,"roman":"ja","english":"ja","sort":"letter"},
    {"devanagari":"झ" ,"roman":"jha","english":"jha","sort":"letter"},
    {"devanagari":"ञ" ,"roman":"nya","english":"nya","sort":"letter"},
    {"devanagari":"ट" ,"roman":"ta","english":"ta","sort":"letter"},
    {"devanagari":"ठ" ,"roman":"tha","english":"tha","sort":"letter"},
    {"devanagari":"ड" ,"roman":"da","english":"da","sort":"letter"},
    {"devanagari":"ढ" ,"roman":"dha","english":"dha","sort":"letter"},
    {"devanagari":"ण" ,"roman":"na","english":"na","sort":"letter"},
    {"devanagari":"त" ,"roman":"ta","english":"ta","sort":"letter"},
    {"devanagari":"थ" ,"roman":"tha","english":"tha","sort":"letter"},
    {"devanagari":"द" ,"roman":"da","english":"da","sort":"letter"},
    {"devanagari":"ध" ,"roman":"dha","english":"dha","sort":"letter"},
    {"devanagari":"न" ,"roman":"na","english":"na","sort":"letter"},
    {"devanagari":"प" ,"roman":"pa","english":"pa","sort":"letter"},
    {"devanagari":"फ" ,"roman":"pha","english":"pha","sort":"letter"},
    {"devanagari":"ब" ,"roman":"ba","english":"ba","sort":"letter"},
    {"devanagari":"भ" ,"roman":"bha","english":"bha","sort":"letter"},
    {"devanagari":"म" ,"roman":"ma","english":"ma","sort":"letter"},
    {"devanagari":"य" ,"roman":"ya","english":"ya","sort":"letter"},
    {"devanagari":"र" ,"roman":"ra","english":"ra","sort":"letter"},
    {"devanagari":"ल" ,"roman":"la","english":"la","la":"letter"},
    {"devanagari":"व","roman":"wa","english":"wa","sort":"letter"},
    {"devanagari":"श","roman":"sha","english":"sha","sort":"letter"},
    {"devanagari":"ष","roman":"sha","english":"sha","sort":"letter"},
    {"devanagari":"स","roman":"sa","english":"sa","sort":"letter"},
    {"devanagari":"ह","roman":"ha","english":"ha","sort":"letter"},
    {"devanagari":"जानु","roman":"janu","english":"to go","sort":"verb","popular":true},
    {"devanagari":"गर्नु","roman":"garnu","english":"to do","sort":"verb","popular":true},
    {"devanagari":"खानु","roman":"khanu","english":"to eat","sort":"verb"},
    {"devanagari":"सुत्नु","roman":"sutnu","english":"to sleep","sort":"verb"},
    {"devanagari":"उठ्नु","roman":"uthnu","english":"to wake up","sort":"verb"},
    {"devanagari":"पिउनु","roman":"piunu","english":"to drink","sort":"verb"},
    {"devanagari":"सिक्नु","roman":"siknu","english":"to learn","sort":"verb","popular":true},
    {"devanagari":"लेख्नु","roman":"lekhnu","english":"to write","sort":"verb","popular":true},
    {"devanagari":"पढ्नु","roman":"padhnu","english":"to read","sort":"verb","popular":true},
    {"devanagari":"बोल्नु","roman":"bolnu","english":"to speak","sort":"verb","popular":true},
    {"devanagari":"सुन्नु","roman":"sunnu","english":"to listen","sort":"verb","popular":true},
    {"devanagari":"हेर्नु","roman":"hernu","english":"to see","sort":"verb","popular":true},
    {"devanagari":"आउनु","roman":"aunu","english":"to come","sort":"verb","popular":true},
    {"devanagari":"हिँड्नु","roman":"hidnu","english":"to walk","sort":"verb","popular":true},
    {"devanagari":"दिनु","roman":"dinu","english":"to give","sort":"verb"},
    {"devanagari":"लिनु","roman":"linu","english":"to take","sort":"verb"},
    {"devanagari":"लाउनु","roman":"launu","english":"to wear","sort":"verb"},
    {"devanagari":"झर्नु","roman":"jharnu","english":"to descend","sort":"verb"},
    {"devanagari":"चाहनु","roman":"chahanu","english":"to want","sort":"verb"},
    {"devanagari":"बनाउनु","roman":"banaunu","english":"to make","sort":"verb"},
    {"devanagari":"बाच्नु","roman":"bachnu","english":"to live","sort":"verb"},
    {"devanagari":"खेल्नु","roman":"khelnu","english":"to play","sort":"verb"},
    {"devanagari":"हाँस्नु","roman":"hasnu","english":"to laugh","sort":"verb"},
    {"devanagari":"रुनु","roman":"runu","english":"to cry","sort":"verb"},
    {"devanagari":"घुम्नु","roman":"ghumnu","english":"to roam","sort":"verb"},
    {"devanagari":"धुने","roman":"dhunu","english":"to wash","sort":"verb"},
    {"devanagari":"सोच्नु","roman":"sochnu","english":"to think","sort":"verb"},
    {"devanagari":"सोध्नु","roman":"sodhnu","english":"to ask","sort":"verb"},
    {"devanagari":"जान्नु","roman":"jannu","english":"to know","sort":"verb"},
    {"devanagari":"बुझ्नु","roman":"bujhnu","english":"to understand","sort":"verb"},
    {"devanagari":"बन्नु","roman":"bannu","english":"to become","sort":"verb"},
    {"devanagari":"पकाउनु","roman":"pakaunu","english":"to cook","sort":"verb"},
    {"devanagari":"चुप लाग्नु","roman":"chup lagna","english":"to be quiet","sort":"verb"},
    {"devanagari":"थाक्नु","roman":"thaknu","english":"to get tired","sort":"verb"},
    {"devanagari":"बिर्सनु","roman":"birsanu","english":"to forget","sort":"verb"},
    {"devanagari":"पाउनु","roman":"paunu","english":"to get","sort":"verb"},
    {"devanagari":"सक्नु","roman":"saknu","english":"to be able to","sort":"verb"},
    {"devanagari":"खोज्नु","roman":"khojnu","english":"to search","sort":"verb"},
    {"devanagari":"पुकार्नु","roman":"pukarnu","english":"to call","sort":"verb"},
    {"devanagari":"भाग्नु","roman":"bhagnu","english":"to run away","sort":"verb"},
    {"devanagari":"बस्नु","roman":"basnu","english":"to sit","sort":"verb"},
    {"devanagari":"उभिनु","roman":"ubhinu","english":"to stand","sort":"verb"},
    {"devanagari":"चलाउनु","roman":"chalaunu","english":"to drive","sort":"verb"},
    {"devanagari":"भर्नु","roman":"bharnu","english":"to fill","sort":"verb"},
    {"devanagari":"घटाउनु","roman":"ghataunu","english":"to decrease","sort":"verb"},
    {"devanagari":"बढाउनु","roman":"badhaunu","english":"to increase","sort":"verb"},
    {"devanagari":"लगाउनु","roman":"lagaunu","english":"to apply","sort":"verb"},
    {"devanagari":"खुल्नु","roman":"khulnu","english":"to open","sort":"verb"},
    {"devanagari":"बन्द गर्नु","roman":"banda garnu","english":"to close","sort":"verb"},
    {"devanagari":"लडाउनु","roman":"ladaunu","english":"to fight","sort":"verb"},
    {"devanagari":"मान्छे","roman":"manchhe","english":"person","sort":"noun"},
    {"devanagari":"घर","roman":"ghar","english":"house","sort":"noun","popular":true},
    {"devanagari":"रुख","roman":"rukh","english":"tree","sort":"noun"},
    {"devanagari":"पानी","roman":"pani","english":"water","sort":"noun","popular":true},
    {"devanagari":"आगो","roman":"aago","english":"fire","sort":"noun"},
    {"devanagari":"किताब","roman":"kitab","english":"book","sort":"noun"},
    {"devanagari":"कलम","roman":"kalam","english":"pen","sort":"noun"},
    {"devanagari":"सडक","roman":"sadak","english":"road","sort":"noun"},
    {"devanagari":"शहर","roman":"sahar","english":"city","sort":"noun"},
    {"devanagari":"गाउँ","roman":"gaun","english":"village","sort":"noun"},
    {"devanagari":"पहाड","roman":"pahaad","english":"mountain","sort":"noun"},
    {"devanagari":"नदी","roman":"nadi","english":"river","sort":"noun"},
    {"devanagari":"खाना","roman":"khana","english":"food","sort":"noun","popular":true},
    {"devanagari":"भाँडा","roman":"bhanda","english":"vessel","sort":"noun"},
    {"devanagari":"चिया","roman":"chiya","english":"tea","sort":"noun"},
    {"devanagari":"कफी","roman":"kafi","english":"coffee","sort":"noun"},
    {"devanagari":"समय","roman":"samaya","english":"time","sort":"noun"},
    {"devanagari":"दिन","roman":"din","english":"day","sort":"noun","popular":true},
    {"devanagari":"रात","roman":"raat","english":"night","sort":"noun","popular":true},
    {"devanagari":"सूर्य","roman":"surya","english":"sun","sort":"noun"},
    {"devanagari":"चन्द्रमा","roman":"chandrama","english":"moon","sort":"noun"},
    {"devanagari":"तारा","roman":"tara","english":"star","sort":"noun"},
    {"devanagari":"आकाश","roman":"aakash","english":"sky","sort":"noun"},
    {"devanagari":"जमिन","roman":"jamin","english":"land","sort":"noun"},
    {"devanagari":"ढोका","roman":"dhoka","english":"door","sort":"noun"},
    {"devanagari":"झ्याल","roman":"jhyal","english":"window","sort":"noun"},
    {"devanagari":"कोठा","roman":"kotha","english":"room","sort":"noun"},
    {"devanagari":"पर्दा","roman":"parda","english":"curtain","sort":"noun"},
    {"devanagari":"कुर्सी","roman":"kursi","english":"chair","sort":"noun"},
    {"devanagari":"टेबल","roman":"tebal","english":"table","sort":"noun"},
    {"devanagari":"ओछ्यान","roman":"ochhyan","english":"bed","sort":"noun"},
    {"devanagari":"लुगा","roman":"luga","english":"clothes","sort":"noun"},
    {"devanagari":"जुत्ता","roman":"jutta","english":"shoes","sort":"noun"},
    {"devanagari":"पैसा","roman":"paisaa","english":"money","sort":"noun","popular":true},
    {"devanagari":"मोबाइल","roman":"mobail","english":"mobile","sort":"noun"},
    {"devanagari":"कम्प्यूटर","roman":"computer","english":"computer","sort":"noun"},
    {"devanagari":"चस्मा","roman":"chasma","english":"glasses","sort":"noun"},
    {"devanagari":"झोला","roman":"jola","english":"bag","sort":"noun"},
    {"devanagari":"गाडी","roman":"gadi","english":"car","sort":"noun"},
    {"devanagari":"बस","roman":"bas","english":"bus","sort":"noun"},
    {"devanagari":"हवाई जहाज","roman":"hawai jahaj","english":"airplane","sort":"noun"},
    {"devanagari":"रेल","roman":"rel","english":"train","sort":"noun"},
    {"devanagari":"साइकल","roman":"saikal","english":"bicycle","sort":"noun"},
    {"devanagari":"पशु","roman":"pashu","english":"animal","sort":"noun"},
    {"devanagari":"चरा","roman":"chara","english":"bird","sort":"noun"},
    {"devanagari":"माछा","roman":"machha","english":"fish","sort":"noun"},
    {"devanagari":"फूल","roman":"phool","english":"flower","sort":"noun"},
    {"devanagari":"फल","roman":"phal","english":"fruit","sort":"noun"},
    {"devanagari":"तरकारी","roman":"tarkari","english":"vegetable","sort":"noun"},
    {"devanagari":"दूध","roman":"dudh","english":"milk","sort":"noun"},
    {"devanagari":"दही","roman":"dahi","english":"curd","sort":"noun"},
    {"devanagari":"मासु","roman":"masu","english":"meat","sort":"noun"},
    {"devanagari":"अण्डा","roman":"anda","english":"egg","sort":"noun"},
    {"devanagari":"नुन","roman":"nun","english":"salt","sort":"noun"},
    {"devanagari":"चिनी","roman":"chini","english":"sugar","sort":"noun"},
    {"devanagari":"तेल","roman":"tel","english":"oil","sort":"noun"},
    {"devanagari":"घिउ","roman":"ghiu","english":"ghee","sort":"noun"},
    {"devanagari":"मह","roman":"mah","english":"honey","sort":"noun"},
    {"devanagari":"आलु","roman":"aalu","english":"potato","sort":"noun"},
    {"devanagari":"प्याज","roman":"pyaj","english":"onion","sort":"noun"},
    {"devanagari":"लसुन","roman":"lasun","english":"garlic","sort":"noun"},
    {"devanagari":"अदुवा","roman":"aduwa","english":"ginger","sort":"noun"},
    {"devanagari":"खुर्सानी","roman":"khursani","english":"chili","sort":"noun"},
    {"devanagari":"नक्सा","roman":"naksa","english":"map","sort":"noun"},
    {"devanagari":"डाक","roman":"daak","english":"mail","sort":"noun"},
    {"devanagari":"चिठ्ठी","roman":"chiththi","english":"letter","sort":"noun"},
    {"devanagari":"बाटो","roman":"bato","english":"path","sort":"noun"},
    {"devanagari":"फूलबारी","roman":"phoolbari","english":"garden","sort":"noun"},
    {"devanagari":"खेत","roman":"khet","english":"field","sort":"noun"},
    {"devanagari":"सिँचाइ","roman":"sinchai","english":"irrigation","sort":"noun"},
    {"devanagari":"पाहुना","roman":"pahuna","english":"guest","sort":"noun"},
    {"devanagari":"साथी","roman":"sathi","english":"friend","sort":"noun"},
    {"devanagari":"शत्रु","roman":"shatru","english":"enemy","sort":"noun"},
    {"devanagari":"राजा","roman":"raja","english":"king","sort":"noun"},
    {"devanagari":"रानी","roman":"rani","english":"queen","sort":"noun"},
    {"devanagari":"सिपाही","roman":"sipahi","english":"soldier","sort":"noun"},
    {"devanagari":"पुलिस","roman":"pulish","english":"police","sort":"noun"},
    {"devanagari":"डाक्टर","roman":"daktar","english":"doctor","sort":"noun"},
    {"devanagari":"इन्जिनियर","roman":"enjinier","english":"engineer","sort":"noun"},
    {"devanagari":"शिक्षक","roman":"shikshak","english":"teacher","sort":"noun"},
    {"devanagari":"विद्यार्थी","roman":"vidyarthi","english":"student","sort":"noun"},
    {"devanagari":"भाइ","roman":"bhai","english":"brother","sort":"noun"},
    {"devanagari":"बहिनी","roman":"bahini","english":"sister","sort":"noun"},
    {"devanagari":"बा","roman":"ba","english":"father","sort":"noun"},
    {"devanagari":"आमा","roman":"aama","english":"mother","sort":"noun"},
    {"devanagari":"परिवार","roman":"pariwar","english":"family","sort":"noun"},
    {"devanagari":"सन्तान","roman":"santan","english":"children","sort":"noun"},
    {"devanagari":"पत्नी","roman":"patni","english":"wife","sort":"noun"},
    {"devanagari":"श्रीमान","roman":"shriman","english":"husband","sort":"noun"},
    {"devanagari":"ज्याकेट","roman":"jyaket","english":"jacket","sort":"noun"},
    {"devanagari":"दौड","roman":"daud","english":"race","sort":"noun"},
    {"devanagari":"खेल","roman":"khel","english":"game","sort":"noun"},
    {"devanagari":"गीत","roman":"git","english":"song","sort":"noun"},
    {"devanagari":"नाच","roman":"naach","english":"dance","sort":"noun"},
    {"devanagari":"रङ्ग","roman":"rang","english":"color","sort":"noun"},
    {"devanagari":"चाहना","roman":"chahana","english":"desire","sort":"noun"},
    {"devanagari":"प्रेम","roman":"prem","english":"love","sort":"noun"},
    {"devanagari":"डर","roman":"dar","english":"fear","sort":"noun"},
    {"devanagari":"खुशी","roman":"khushi","english":"happiness","sort":"noun"},
    {"devanagari":"दुःख","roman":"duhkha","english":"sadness/pain","sort":"noun","popular":true},
    {"devanagari":"गुस्सा","roman":"gussa","english":"anger","sort":"noun"},
    {"devanagari":"राम्रो","roman":"ramro","english":"good","sort":"adjective","popular":true},
    {"devanagari":"नराम्रो","roman":"naramro","english":"bad","sort":"adjective","popular":true},
    {"devanagari":"ठूलो","roman":"thulo","english":"big","sort":"adjective","popular":true},
    {"devanagari":"सानो","roman":"sano","english":"small","sort":"adjective","popular":true},
    {"devanagari":"मिठो","roman":"mitho","english":"tasty","sort":"adjective","popular":true},
    {"devanagari":"अमिलो","roman":"amilo","english":"sour","sort":"adjective"},
    {"devanagari":"गहिरो","roman":"gahiro","english":"deep","sort":"adjective"},
    {"devanagari":"उज्यालो","roman":"ujyalo","english":"bright","sort":"adjective"},
    {"devanagari":"अँध्यारो","roman":"andhyaro","english":"dark","sort":"adjective"},
    {"devanagari":"सफा","roman":"sapha","english":"clean","sort":"adjective"},
    {"devanagari":"फोहोर","roman":"phohor","english":"dirty","sort":"adjective"},
    {"devanagari":"पातलो","roman":"patalo","english":"thin","sort":"adjective"},
    {"devanagari":"मोटो","roman":"moto","english":"fat","sort":"adjective"},
    {"devanagari":"लामो","roman":"lamo","english":"long","sort":"adjective"},
    {"devanagari":"छोटो","roman":"choto","english":"short","sort":"adjective"},
    {"devanagari":"चिसो","roman":"chiso","english":"cold","sort":"adjective"},
    {"devanagari":"तातो","roman":"tato","english":"hot","sort":"adjective"},
    {"devanagari":"गरम","roman":"garam","english":"hot","sort":"adjective"},
    {"devanagari":"मीठो","roman":"mitho","english":"sweet","sort":"adjective"},
    {"devanagari":"खुसी","roman":"khusi","english":"happy","sort":"adjective"},
    {"devanagari":"दुखी","roman":"dukhi","english":"sad","sort":"adjective"},
    {"devanagari":"धनी","roman":"dhani","english":"rich","sort":"adjective"},
    {"devanagari":"गरिब","roman":"garib","english":"poor","sort":"adjective"},
    {"devanagari":"सुन्दर","roman":"sundar","english":"beautiful","sort":"adjective"},
    {"devanagari":"कुरुप","roman":"kurup","english":"ugly","sort":"adjective"},
    {"devanagari":"सजिलो","roman":"sajilo","english":"easy","sort":"adjective"},
    {"devanagari":"गाह्रो","roman":"gahro","english":"difficult","sort":"adjective"},
    {"devanagari":"सत्य","roman":"satya","english":"true","sort":"adjective"},
    {"devanagari":"झूटो","roman":"jhuto","english":"false","sort":"adjective"},
    {"devanagari":"स्वस्थ","roman":"swastha","english":"healthy","sort":"adjective"},
    {"devanagari":"अस्वस्थ","roman":"aswastha","english":"unhealthy","sort":"adjective"},
    {"devanagari":"उल्टो","roman":"ulto","english":"opposite","sort":"adjective"},
    {"devanagari":"सिधा","roman":"sidha","english":"straight","sort":"adjective"},
    {"devanagari":"नजिक","roman":"najik","english":"near","sort":"adjective"},
    {"devanagari":"टाढा","roman":"tadhaa","english":"far","sort":"adjective"},
    {"devanagari":"हल्का","roman":"halka","english":"light (weight)","sort":"adjective"},
    {"devanagari":"भारी","roman":"bhari","english":"heavy","sort":"adjective"},
    {"devanagari":"नमस्ते","roman":"namaste","english":"hello","sort":"popular"},
    {"devanagari":"हाम्रो","roman":"hamro","english":"our","sort":"popular"},
    {"devanagari":"तिम्रो","roman":"timro","english":"your (informal)","sort":"popular"},
    {"devanagari":"आज","roman":"aaj","english":"today","sort":"popular"},
    {"devanagari":"भोलि","roman":"bholi","english":"tomorrow","sort":"popular"},
    {"devanagari":"काम","roman":"kaam","english":"work","sort":"popular"},
    {"devanagari":"किन्नु","roman":"kinnu","english":"to buy","sort":"popular"},
    {"devanagari":"बेच्नु","roman":"bechnu","english":"to sell","sort":"popular"},
    {"devanagari":"छ","roman":"chha","english":"is/has","sort":"popular"},
    {"devanagari":"हो","roman":"ho","english":"is (affirmative)","sort":"popular"},
    {"devanagari":"के","roman":"ke","english":"what","sort":"popular"},
    {"devanagari":"किन","roman":"kina","english":"why","sort":"popular"},
    {"devanagari":"कसरी","roman":"kasari","english":"how","sort":"popular"},
    {"devanagari":"को","roman":"ko","english":"who","sort":"popular"},
    {"devanagari":"कहाँ","roman":"kahaa","english":"where","sort":"popular"},
    {"devanagari":"कहिले","roman":"kahile","english":"when","sort":"popular"},
    {"devanagari":"यहाँ","roman":"yaha","english":"here","sort":"popular"},
    {"devanagari":"त्यहाँ","roman":"tyaha","english":"there","sort":"popular"},
    {"devanagari":"म","roman":"ma","english":"I","sort":"popular"},
    {"devanagari":"तपाईं","roman":"tapai","english":"you (formal)","sort":"popular"},
    {"devanagari":"तिमी","roman":"timi","english":"you (informal)","sort":"popular"},
    {"devanagari":"उनी","roman":"uni","english":"he/she (respectful)","sort":"popular"},
    {"devanagari":"ऊ","roman":"u","english":"he/she","sort":"popular"},
    {"devanagari":"यो","roman":"yo","english":"this","sort":"popular"},
    {"devanagari":"त्यो","roman":"tyo","english":"that","sort":"popular"},
    {"devanagari":"धेरै","roman":"dherai","english":"many/much","sort":"popular"},
    {"devanagari":"थोरै","roman":"thorai","english":"few/little","sort":"popular"},
    {"devanagari":"रमाइलो","roman":"ramailo","english":"fun","sort":"popular"},
    {"devanagari":"दु:ख","roman":"dukha","english":"sadness/pain","sort":"popular"},
    {"devanagari":"सुख","roman":"sukha","english":"happiness","sort":"popular"}
];

// All of your application's logic goes here
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const romanizedInput = document.getElementById('romanized-answer-input');
const englishInput = document.getElementById('english-answer-input');
const submitRomanizedBtn = document.getElementById('submit-romanized-btn');
const submitEnglishBtn = document.getElementById('submit-english-btn');
const feedbackEl = document.getElementById('feedback');
const prevBtn = document.getElementById('prev-card-btn');
const showAnswerBtn = document.getElementById('show-answer-btn');
const resetBtn = document.getElementById('reset-btn');
const nextBtn = document.getElementById('next-card-btn');
const categorySelect = document.getElementById('category-select');

let currentCardIndex = 0;
let filteredQuizData = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayCard() {
    if (filteredQuizData.length === 0) {
        questionEl.textContent = 'No cards found for this category.';
        answerEl.textContent = '';
        answerEl.classList.add('hidden');
        return;
    }

    const currentCard = filteredQuizData[currentCardIndex];
    questionEl.textContent = currentCard.devanagari;
    answerEl.textContent = `Romanized: ${currentCard.roman} | English: ${currentCard.english}`;
    answerEl.classList.add('hidden');
    feedbackEl.textContent = '';
    romanizedInput.value = '';
    englishInput.value = '';
}

function checkRomanizedAnswer() {
    const userAnswer = romanizedInput.value.toLowerCase().trim();
    const correctAnswer = filteredQuizData[currentCardIndex].roman.toLowerCase().trim();
    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = "Correct! ✅";
        feedbackEl.classList.remove('incorrect', 'partial');
        feedbackEl.classList.add('correct');
        answerEl.classList.remove('hidden');
    } else {
        feedbackEl.textContent = "Incorrect Romanized. Try again.";
        feedbackEl.classList.remove('correct', 'partial');
        feedbackEl.classList.add('incorrect');
    }
}

function checkEnglishAnswer() {
    const userAnswer = englishInput.value.toLowerCase().trim();
    const correctAnswer = filteredQuizData[currentCardIndex].english.toLowerCase().trim();
    if (userAnswer === correctAnswer) {
        feedbackEl.textContent = "Correct! ✅";
        feedbackEl.classList.remove('incorrect', 'partial');
        feedbackEl.classList.add('correct');
        answerEl.classList.remove('hidden');
    } else {
        feedbackEl.textContent = "Incorrect English. Try again.";
        feedbackEl.classList.remove('correct', 'partial');
        feedbackEl.classList.add('incorrect');
    }
}

function applyFilterAndLoad() {
    const selectedCategory = categorySelect.value;
    if (selectedCategory === 'all') {
        filteredQuizData = [...quizData];
    } else if (selectedCategory === 'popular') {
        filteredQuizData = quizData.filter(card => card.popular === true);
    } else {
        filteredQuizData = quizData.filter(card => card.sort === selectedCategory);
    }
    shuffle(filteredQuizData);
    currentCardIndex = 0;
    displayCard();
}

submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
submitEnglishBtn.addEventListener('click', checkEnglishAnswer);

// Enter key event listeners
romanizedInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkRomanizedAnswer();
    }
});
englishInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkEnglishAnswer();
    }
});

nextBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex + 1) % filteredQuizData.length;
    displayCard();
});

prevBtn.addEventListener('click', () => {
    currentCardIndex = (currentCardIndex - 1 + filteredQuizData.length) % filteredQuizData.length;
    displayCard();
});

showAnswerBtn.addEventListener('click', () => {
    answerEl.classList.remove('hidden');
});

resetBtn.addEventListener('click', () => {
    displayCard();
});

categorySelect.addEventListener('change', applyFilterAndLoad);

// Initial load
applyFilterAndLoad();
