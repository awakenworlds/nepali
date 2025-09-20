const quizData = 
[
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
    {"devanagari":"११","roman":"eghaar","english":"eleven","sort":"number"},
    {"devanagari":"१२","roman":"baahra","english":"twelve","sort":"number"},
    {"devanagari":"१३","roman":"tehra","english":"thirteen","sort":"number"},
    {"devanagari":"१४","roman":"chaudha","english":"fourteen","sort":"number"},
    {"devanagari":"१५","roman":"pandra","english":"fifteen","sort":"number"},
    {"devanagari":"१६","roman":"sohra","english":"sixteen","sort":"number"},
    {"devanagari":"१७","roman":"satra","english":"seventeen","sort":"number"},
    {"devanagari":"१८","roman":"athaar","english":"eighteen","sort":"number"},
    {"devanagari":"१९","roman":"unnaais","english":"nineteen","sort":"number"},
    {"devanagari":"२०","roman":"bis","english":"twenty","sort":"number"},
    {"devanagari":"२१","roman":"ekais","english":"twenty-one","sort":"number"},
    {"devanagari":"२२","roman":"bais","english":"twenty-two","sort":"number"},
    {"devanagari":"२३","roman":"teis","english":"twenty-three","sort":"number"},
    {"devanagari":"२४","roman":"choubis","english":"twenty-four","sort":"number"},
    {"devanagari":"२५","roman":"pachchis","english":"twenty-five","sort":"number"},
    {"devanagari":"२६","roman":"chhabis","english":"twenty-six","sort":"number"},
    {"devanagari":"२७","roman":"sattaris","english":"twenty-seven","sort":"number"},
    {"devanagari":"२८","roman":"atthais","english":"twenty-eight","sort":"number"},
    {"devanagari":"२९","roman":"unantis","english":"twenty-nine","sort":"number"},
    {"devanagari":"३०","roman":"tis","english":"thirty","sort":"number"},
    {"devanagari":"३१","roman":"ektis","english":"thirty-one","sort":"number"},
    {"devanagari":"३२","roman":"battis","english":"thirty-two","sort":"number"},
    {"devanagari":"३३","roman":"tehtis","english":"thirty-three","sort":"number"},
    {"devanagari":"३४","roman":"chautis","english":"thirty-four","sort":"number"},
    {"devanagari":"३५","roman":"paitis","english":"thirty-five","sort":"number"},
    {"devanagari":"३६","roman":"chhattis","english":"thirty-six","sort":"number"},
    {"devanagari":"३७","roman":"sainttis","english":"thirty-seven","sort":"number"},
    {"devanagari":"३८","roman":"aatthis","english":"thirty-eight","sort":"number"},
    {"devanagari":"३९","roman":"unachalis","english":"thirty-nine","sort":"number"},
    {"devanagari":"४०","roman":"chalis","english":"forty","sort":"number"},
    {"devanagari":"४१","roman":"ektalis","english":"forty-one","sort":"number"},
    {"devanagari":"४२","roman":"bayaalis","english":"forty-two","sort":"number"},
    {"devanagari":"४३","roman":"chyaalis","english":"forty-three","sort":"number"},
    {"devanagari":"४४","roman":"chawalis","english":"forty-four","sort":"number"},
    {"devanagari":"४५","roman":"paitaalish","english":"forty-five","sort":"number"},
    {"devanagari":"४६","roman":"chayalis","english":"forty-six","sort":"number"},
    {"devanagari":"४७","roman":"sataalis","english":"forty-seven","sort":"number"},
    {"devanagari":"४८","roman":"adtaalis","english":"forty-eight","sort":"number"},
    {"devanagari":"४९","roman":"unanchaas","english":"forty-nine","sort":"number"},
    {"devanagari":"५०","roman":"pachaas","english":"fifty","sort":"number"},
    {"devanagari":"५१","roman":"ekanna","english":"fifty-one","sort":"number"},
    {"devanagari":"५२","roman":"baawanna","english":"fifty-two","sort":"number"},
    {"devanagari":"५३","roman":"trippanna","english":"fifty-three","sort":"number"},
    {"devanagari":"५४","roman":"chowanna","english":"fifty-four","sort":"number"},
    {"devanagari":"५५","roman":"pachpanna","english":"fifty-five","sort":"number"},
    {"devanagari":"५६","roman":"chhapanna","english":"fifty-six","sort":"number"},
    {"devanagari":"५७","roman":"sataunna","english":"fifty-seven","sort":"number"},
    {"devanagari":"५८","roman":"anthawanna","english":"fifty-eight","sort":"number"},
    {"devanagari":"५९","roman":"unansathi","english":"fifty-nine","sort":"number"},
    {"devanagari":"६०","roman":"saathi","english":"sixty","sort":"number"},
    {"devanagari":"६१","roman":"ekasathi","english":"sixty-one","sort":"number"},
    {"devanagari":"६२","roman":"bahasathi","english":"sixty-two","sort":"number"},
    {"devanagari":"६३","roman":"terasathi","english":"sixty-three","sort":"number"},
    {"devanagari":"६४","roman":"chausathi","english":"sixty-four","sort":"number"},
    {"devanagari":"६५","roman":"paisathi","english":"sixty-five","sort":"number"},
    {"devanagari":"६६","roman":"chayasathi","english":"sixty-six","sort":"number"},
    {"devanagari":"६७","roman":"satasathi","english":"sixty-seven","sort":"number"},
    {"devanagari":"६८","roman":"adasathi","english":"sixty-eight","sort":"number"},
    {"devanagari":"६९","roman":"unansattari","english":"sixty-nine","sort":"number"},
    {"devanagari":"७०","roman":"sattari","english":"seventy","sort":"number"},
    {"devanagari":"७१","roman":"ekahattar","english":"seventy-one","sort":"number"},
    {"devanagari":"७२","roman":"bahattar","english":"seventy-two","sort":"number"},
    {"devanagari":"७३","roman":"tihattara","english":"seventy-three","sort":"number"},
    {"devanagari":"७४","roman":"chauhattar","english":"seventy-four","sort":"number"},
    {"devanagari":"७५","roman":"pachahattar","english":"seventy-five","sort":"number"},
    {"devanagari":"७६","roman":"chhehattari","english":"seventy-six","sort":"number"},
    {"devanagari":"७७","roman":"satahattari","english":"seventy-seven","sort":"number"},
    {"devanagari":"७८","roman":"athahattari","english":"seventy-eight","sort":"number"},
    {"devanagari":"७९","roman":"unasi","english":"seventy-nine","sort":"number"},
    {"devanagari":"८०","roman":"asi","english":"eighty","sort":"number"},
    {"devanagari":"८१","roman":"ekasi","english":"eighty-one","sort":"number"},
    {"devanagari":"८२","roman":"bayasi","english":"eighty-two","sort":"number"},
    {"devanagari":"८३","roman":"triyasi","english":"eighty-three","sort":"number"},
    {"devanagari":"८४","roman":"chaurasi","english":"eighty-four","sort":"number"},
    {"devanagari":"८५","roman":"pachasi","english":"eighty-five","sort":"number"},
    {"devanagari":"८६","roman":"chayasi","english":"eighty-six","sort":"number"},
    {"devanagari":"८७","roman":"satasi","english":"eighty-seven","sort":"number"},
    {"devanagari":"८८","roman":"athasi","english":"eighty-eight","sort":"number"},
    {"devanagari":"८९","roman":"unanabbe","english":"eighty-nine","sort":"number"},
    {"devanagari":"९०","roman":"nabbe","english":"ninety","sort":"number"},
    {"devanagari":"९१","roman":"ekannabbe","english":"ninety-one","sort":"number"},
    {"devanagari":"९२","roman":"bhanabbe","english":"ninety-two","sort":"number"},
    {"devanagari":"९३","roman":"tiranabbe","english":"ninety-three","sort":"number"},
    {"devanagari":"९४","roman":"churanabbe","english":"ninety-four","sort":"number"},
    {"devanagari":"९५","roman":"pachanabbe","english":"ninety-five","sort":"number"},
    {"devanagari":"९६","roman":"chayanabbe","english":"ninety-six","sort":"number"},
    {"devanagari":"९७","roman":"satanabbe","english":"ninety-seven","sort":"number"},
    {"devanagari":"९८","roman":"athanabbe","english":"ninety-eight","sort":"number"},
    {"devanagari":"९९","roman":"unansaya","english":"ninety-nine","sort":"number"},
    {"devanagari":"१००","roman":"saya","english":"one hundred","sort":"number"},
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
    {"devanagari":"ल" ,"roman":"la","english":"la","sort":"letter"},
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
    {"devanagari":"जित्नु","roman":"jitnu","english":"to win","sort":"verb"},
    {"devanagari":"हार्नु","roman":"haarnu","english":"to lose","sort":"verb"},
    {"devanagari":"भेट्नु","roman":"bhetnu","english":"to meet","sort":"verb"},
    {"devanagari":"पठाउनु","roman":"pathaunu","english":"to send","sort":"verb"},
    {"devanagari":"समाउनु","roman":"samaunu","english":"to catch/hold","sort":"verb"},
    {"devanagari":"सजाय दिनु","roman":"sajay dinu","english":"to punish","sort":"verb"},
    {"devanagari":"लुकाउनु","roman":"lukaunu","english":"to hide","sort":"verb"},
    {"devanagari":"खोज्नु","roman":"khojnu","english":"to search","sort":"verb"},
    {"devanagari":"भत्काउनु","roman":"bhatkaunu","english":"to demolish","sort":"verb"},
    {"devanagari":"बनाउनु","roman":"banaunu","english":"to make/build","sort":"verb"},
    {"devanagari":"रङ्ग लगाउनु","roman":"rang lagaunu","english":"to paint","sort":"verb"},
    {"devanagari":"उडाउनु","roman":"udaunu","english":"to fly (transitive)","sort":"verb"},
    {"devanagari":"चल्नु","roman":"chalnu","english":"to walk/move","sort":"verb"},
    {"devanagari":"फर्कनु","roman":"pharkanu","english":"to return","sort":"verb"},
    {"devanagari":"सुधार गर्नु","roman":"sudhaar garnu","english":"to improve","sort":"verb"},
    {"devanagari":"चिन्ता गर्नु","roman":"chinta garnu","english":"to worry","sort":"verb"},
    {"devanagari":"सम्झनु","roman":"samjhanu","english":"to remember","sort":"verb"},
    {"devanagari":"बिर्सनु","roman":"birsanu","english":"to forget","sort":"verb"},
    {"devanagari":"पुग्नु","roman":"pugnu","english":"to arrive","sort":"verb"},
    {"devanagari":"छाड्नु","roman":"chhadnu","english":"to leave","sort":"verb"},
    {"devanagari":"बिताउनु","roman":"bitaunu","english":"to spend time","sort":"verb"},
    {"devanagari":"गन्नु","roman":"gannu","english":"to count","sort":"verb"},
    {"devanagari":"तौलनु","roman":"taulanu","english":"to weigh","sort":"verb"},
    {"devanagari":"फ्याँक्नु","roman":"phyaknu","english":"to throw","sort":"verb"},
    {"devanagari":"उठाउनु","roman":"uthaunu","english":"to lift","sort":"verb"},
    {"devanagari":"छुनु","roman":"chhunu","english":"to touch","sort":"verb"},
    {"devanagari":"नाप्नु","roman":"napnu","english":"to measure","sort":"verb"},
    {"devanagari":"चिर्नु","roman":"chirnu","english":"to cut","sort":"verb"},
    {"devanagari":"जोड्नु","roman":"jodnu","english":"to connect/add","sort":"verb"},
    {"devanagari":"घटाउनु","roman":"ghataunu","english":"to subtract","sort":"verb"},
    {"devanagari":"गुणा गर्नु","roman":"guna garnu","english":"to multiply","sort":"verb"},
    {"devanagari":"भाग गर्नु","roman":"bhag garnu","english":"to divide","sort":"verb"},
    {"devanagari":"मद्दत गर्नु","roman":"maddat garnu","english":"to help","sort":"verb"},
    {"devanagari":"कम्ती गर्नु","roman":"kamti garnu","english":"to decrease","sort":"verb"},
    {"devanagari":"बढी गर्नु","roman":"badhi garnu","english":"to increase","sort":"verb"},
    {"devanagari":"सफा गर्नु","roman":"safaa garnu","english":"to clean","sort":"verb"},
    {"devanagari":"फोहोर गर्नु","roman":"phohor garnu","english":"to make dirty","sort":"verb"},
    {"devanagari":"चोर्नु","roman":"chornu","english":"to steal","sort":"verb"},
    {"devanagari":"बिताउनु","roman":"bitaunu","english":"to spend (money)","sort":"verb"},
    {"devanagari":"कमाउनु","roman":"kamaunu","english":"to earn","sort":"verb"},
    {"devanagari":"बचाउनु","roman":"bachaunu","english":"to save","sort":"verb"},
    {"devanagari":"हराउनु","roman":"haraunu","english":"to lose (something)","sort":"verb"},
    {"devanagari":"पाइला चाल्नु","roman":"paila chalnu","english":"to take a step","sort":"verb"},
    {"devanagari":"गल्ती गर्नु","roman":"galti garnu","english":"to make a mistake","sort":"verb"},
    {"devanagari":"आराम गर्नु","roman":"aram garnu","english":"to rest","sort":"verb"},
    {"devanagari":"चलाउनु","roman":"chalaunu","english":"to operate","sort":"verb"},
    {"devanagari":"अन्त गर्नु","roman":"antya garnu","english":"to end","sort":"verb"},
    {"devanagari":"सुरु गर्नु","roman":"suru garnu","english":"to begin","sort":"verb"},
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
    {"devanagari":"गाँस","roman":"gaans","english":"mouthful","sort":"noun"},
    {"devanagari":"चट्टान","roman":"chattan","english":"rock","sort":"noun"},
    {"devanagari":"बाँस","roman":"baans","english":"bamboo","sort":"noun"},
    {"devanagari":"हात","roman":"haat","english":"hand","sort":"noun"},
    {"devanagari":"खुट्टा","roman":"khutta","english":"leg","sort":"noun"},
    {"devanagari":"आँखा","roman":"ankha","english":"eye","sort":"noun"},
    {"devanagari":"कान","roman":"kan","english":"ear","sort":"noun"},
    {"devanagari":"नाक","roman":"naak","english":"nose","sort":"noun"},
    {"devanagari":"मुख","roman":"mukh","english":"mouth","sort":"noun"},
    {"devanagari":"टाउको","roman":"tauko","english":"head","sort":"noun"},
    {"devanagari":"कपाल","roman":"kapal","english":"hair","sort":"noun"},
    {"devanagari":"काग","roman":"kaag","english":"crow","sort":"noun"},
    {"devanagari":"भ्यागुतो","roman":"bhyaguto","english":"frog","sort":"noun"},
    {"devanagari":"चप्पल","roman":"chappal","english":"sandal","sort":"noun"},
    {"devanagari":"टोपी","roman":"topi","english":"hat","sort":"noun"},
    {"devanagari":"घुम्टो","roman":"ghumto","english":"veil","sort":"noun"},
    {"devanagari":"झोला","roman":"jhola","english":"bag","sort":"noun"},
    {"devanagari":"बटुवा","roman":"batuwa","english":"wallet","sort":"noun"},
    {"devanagari":"घडी","roman":"ghadi","english":"watch/clock","sort":"noun"},
    {"devanagari":"कालो","roman":"kalo","english":"black","sort":"adjective"},
    {"devanagari":"रातो","roman":"rato","english":"red","sort":"adjective"},
    {"devanagari":"सेतो","roman":"seto","english":"white","sort":"adjective"},
    {"devanagari":"नीलो","roman":"nilo","english":"blue","sort":"adjective"},
    {"devanagari":"हरियो","roman":"hariyo","english":"green","sort":"adjective"},
    {"devanagari":"पहेंलो","roman":"pahenlo","english":"yellow","sort":"adjective"},
    {"devanagari":"सुन्तले","roman":"suntale","english":"orange","sort":"adjective"},
    {"devanagari":"गुलाबी","roman":"gulabi","english":"pink","sort":"adjective"},
    {"devanagari":"खैरो","roman":"khairo","english":"brown","sort":"adjective"},
    {"devanagari":"बैजनी","roman":"baijani","english":"purple","sort":"adjective"},
    {"devanagari":"धुलो","roman":"dhulo","english":"dust","sort":"noun"},
    {"devanagari":"हावा","roman":"hawa","english":"wind","sort":"noun"},
    {"devanagari":"बादल","roman":"baadal","english":"cloud","sort":"noun"},
    {"devanagari":"घाम","roman":"ghama","english":"sunlight","sort":"noun"},
    {"devanagari":"अन्त","roman":"anta","english":"end","sort":"noun"},
    {"devanagari":"सुरु","roman":"suru","english":"beginning","sort":"noun"},
    {"devanagari":"समय","roman":"samaya","english":"time","sort":"noun"},
    {"devanagari":"क्षण","roman":"chhan","english":"moment","sort":"noun"},
    {"devanagari":"वर्ष","roman":"barsha","english":"year","sort":"noun"},
    {"devanagari":"महिना","roman":"mahina","english":"month","sort":"noun"},
    {"devanagari":"हप्ता","roman":"hapta","english":"week","sort":"noun"},
    {"devanagari":"मिनेट","roman":"minet","english":"minute","sort":"noun"},
    {"devanagari":"घण्टा","roman":"ghanta","english":"hour","sort":"noun"},
    {"devanagari":"सगरमाथा","roman":"sagarmāthā","english":"Mount Everest","sort":"noun"},
    {"devanagari":"हिमाल","roman":"himaal","english":"snowy mountain","sort":"noun"},
    {"devanagari":"झरना","roman":"jharnaa","english":"waterfall","sort":"noun"},
    {"devanagari":"गुफा","roman":"gupha","english":"cave","sort":"noun"},
    {"devanagari":"जङ्गल","roman":"jangal","english":"forest","sort":"noun"},
    {"devanagari":"मैदान","roman":"maidaan","english":"field/plain","sort":"noun"},
    {"devanagari":"खोला","roman":"kholaa","english":"stream","sort":"noun"},
    {"devanagari":"पोखरी","roman":"pokhari","english":"pond","sort":"noun"},
    {"devanagari":"ताल","roman":"taal","english":"lake","sort":"noun"},
    {"devanagari":"सागर","roman":"saagar","english":"ocean","sort":"noun"},
    {"devanagari":"समुद्र","roman":"samudra","english":"sea","sort":"noun"},
    {"devanagari":"होटल","roman":"hotel","english":"hotel","sort":"noun"},
    {"devanagari":"बैंक","roman":"bank","english":"bank","sort":"noun"},
    {"devanagari":"विद्यालय","roman":"vidyalaya","english":"school","sort":"noun"},
    {"devanagari":"अस्पताल","roman":"aspataal","english":"hospital","sort":"noun"},
    {"devanagari":"डाकघर","roman":"dakghar","english":"post office","sort":"noun"},
    {"devanagari":"पुलिस चौकी","roman":"pulish chauki","english":"police station","sort":"noun"},
    {"devanagari":"चिया पसल","roman":"chiya pasal","english":"tea shop","sort":"noun"},
    {"devanagari":"सपिङ्ग सेन्टर","roman":"shopping center","english":"shopping center","sort":"noun"},
    {"devanagari":"बजार","roman":"bazaar","english":"market","sort":"noun"},
    {"devanagari":"मंदिर","roman":"mandir","english":"temple","sort":"noun"},
    {"devanagari":"चर्च","roman":"church","english":"church","sort":"noun"},
    {"devanagari":"मस्जिद","roman":"masjid","english":"mosque","sort":"noun"},
    {"devanagari":"चिडियाघर","roman":"chidiya ghar","english":"zoo","sort":"noun"},
    {"devanagari":"संग्रहालय","roman":"sangrahalaya","english":"museum","sort":"noun"},
    {"devanagari":"पार्क","roman":"park","english":"park","sort":"noun"},
    {"devanagari":"अङ्ग्रेजी","roman":"angreji","english":"English","sort":"noun"},
    {"devanagari":"नेपाली","roman":"nepali","english":"Nepali","sort":"noun"},
    {"devanagari":"भाषा","roman":"bhasha","english":"language","sort":"noun"},
    {"devanagari":"शब्द","roman":"shabda","english":"word","sort":"noun"},
    {"devanagari":"वाक्य","roman":"wakya","english":"sentence","sort":"noun"},
    {"devanagari":"प्रश्न","roman":"prashna","english":"question","sort":"noun"},
    {"devanagari":"उत्तर","roman":"uttar","english":"answer","sort":"noun"},
    {"devanagari":"शिर","roman":"shir","english":"head","sort":"noun"},
    {"devanagari":"पेट","roman":"pet","english":"stomach","sort":"noun"},
    {"devanagari":"ढाड","roman":"dhad","english":"back","sort":"noun"},
    {"devanagari":"औंला","roman":"aola","english":"finger","sort":"noun"},
    {"devanagari":"हातको हत्केला","roman":"haatko hatkela","english":"palm","sort":"noun"},
    {"devanagari":"खुट्टाको पैतला","roman":"khuttako paitila","english":"sole","sort":"noun"},
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
    {"devanagari":"तिम्रो","roman":"timro","english":"you (informal)","sort":"popular"},
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
    {"devanagari":"सुख","roman":"sukha","english":"happiness","sort":"popular"},
    {"devanagari":"पहिले","roman":"pahile","english":"before","sort":"adverb"},
    {"devanagari":"पछि","roman":"pachhi","english":"after","sort":"adverb"},
    {"devanagari":"आजकल","roman":"aajakal","english":"nowadays","sort":"adverb"},
    {"devanagari":"सधैं","roman":"sadain","english":"always","sort":"adverb"},
    {"devanagari":"कहिलेकाहीं","roman":"kahilekahi","english":"sometimes","sort":"adverb"},
    {"devanagari":"बिस्तारै","roman":"bistari","english":"slowly","sort":"adverb"},
    {"devanagari":"चाँडो","roman":"chado","english":"quickly","sort":"adverb"},
    {"devanagari":"धेरै","roman":"dherai","english":"very","sort":"adverb"},
    {"devanagari":"अहिले","roman":"ahile","english":"now","sort":"adverb"},
    {"devanagari":"पछि","roman":"pachhi","english":"later","sort":"adverb"},
    {"devanagari":"सबै","roman":"sabai","english":"all","sort":"pronoun"},
    {"devanagari":"कोही","roman":"kohi","english":"someone","sort":"pronoun"},
    {"devanagari":"केही","roman":"kehi","english":"something","sort":"pronoun"},
    {"devanagari":"कसैलाई","roman":"kasailai","english":"to someone","sort":"pronoun"},
    {"devanagari":"यहाँ","roman":"yaha","english":"here","sort":"adverb"},
    {"devanagari":"त्यहाँ","roman":"tyaha","english":"there","sort":"adverb"},
    {"devanagari":"वरिपरि","roman":"waripari","english":"around","sort":"adverb"},
    {"devanagari":"भित्र","roman":"bhitra","english":"inside","sort":"adverb"},
    {"devanagari":"बाहिर","roman":"bahira","english":"outside","sort":"adverb"},
    {"devanagari":"माथि","roman":"mathi","english":"up/above","sort":"adverb"},
    {"devanagari":"तल","roman":"tala","english":"down/below","sort":"adverb"},
    {"devanagari":"राम्रो","roman":"ramro","english":"well","sort":"adverb"},
    {"devanagari":"जति","roman":"jati","english":"as much as","sort":"conjunction"},
    {"devanagari":"र","roman":"ra","english":"and","sort":"conjunction"},
    {"devanagari":"या","roman":"ya","english":"or","sort":"conjunction"},
    {"devanagari":"तर","roman":"tara","english":"but","sort":"conjunction"},
    {"devanagari":"किनकि","roman":"kinaki","english":"because","sort":"conjunction"},
    {"devanagari":"जब","roman":"jaba","english":"when","sort":"conjunction"},
    {"devanagari":"यदि","roman":"yadi","english":"if","sort":"conjunction"},
    {"devanagari":"पनि","roman":"pani","english":"also","sort":"conjunction"},
    {"devanagari":"को","roman":"ko","english":"of/for","sort":"preposition"},
    {"devanagari":"देखि","roman":"dekhi","english":"from","sort":"preposition"},
    {"devanagari":"सम्म","roman":"samma","english":"until","sort":"preposition"},
    {"devanagari":"मा","roman":"ma","english":"in/at","sort":"preposition"},
    {"devanagari":"ले","roman":"le","english":"by","sort":"preposition"},
    {"devanagari":"सँग","roman":"sanga","english":"with","sort":"preposition"},
    {"devanagari":"बाट","roman":"bata","english":"from","sort":"preposition"},
    {"devanagari":"लागि","roman":"lagi","english":"for","sort":"preposition"},
    {"devanagari":"माथि","roman":"mathi","english":"on/upon","sort":"preposition"},
    {"devanagari":"तल","roman":"tala","english":"under","sort":"preposition"}
];



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
const englishFieldGroup = document.getElementById('english-field-group');

let currentCardIndex = 0;
let filteredQuizData = [];
let isRomanCorrect = false;
let isEnglishCorrect = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayCard() {
    if (filteredQuizData.length === 0) {
        questionEl.textContent = 'Oops! No flashcards found for this category. Please choose a different one.';
        answerEl.textContent = '';
        answerEl.classList.add('hidden');
        romanizedInput.value = '';
        englishInput.value = '';
        englishFieldGroup.style.display = 'none';
        return;
    }

    const currentCard = filteredQuizData[currentCardIndex];
    questionEl.textContent = currentCard.devanagari;
    answerEl.textContent = `${currentCard.roman} | ${currentCard.english}`;
    answerEl.classList.add('hidden');
    feedbackEl.textContent = '';
    romanizedInput.value = '';
    englishInput.value = '';

    const isSingleAnswer = currentCard.roman.toLowerCase().trim() === currentCard.english.toLowerCase().trim();
    if (isSingleAnswer) {
        englishFieldGroup.style.display = 'none';
        romanizedInput.placeholder = "Enter the answer";
    } else {
        englishFieldGroup.style.display = 'flex';
        romanizedInput.placeholder = "Romanized Answer";
    }

    isRomanCorrect = false;
    isEnglishCorrect = false;
    romanizedInput.focus();
}

function checkRomanizedAnswer() {
    const userAnswer = romanizedInput.value.toLowerCase().trim();
    const currentCard = filteredQuizData[currentCardIndex];
    const correctAnswer = currentCard.roman.toLowerCase().trim();
    const isSingleAnswer = currentCard.roman.toLowerCase().trim() === currentCard.english.toLowerCase().trim();

    // Create a version of the user's answer with k/ch swapped
    let kChSwappedUserAnswer = '';
    if (userAnswer.includes('ch')) {
        kChSwappedUserAnswer = userAnswer.replace(/ch/g, 'k');
    } else if (userAnswer.includes('k')) {
        kChSwappedUserAnswer = userAnswer.replace(/k/g, 'ch');
    }

    const isCorrect = (
        userAnswer === correctAnswer ||
        (kChSwappedUserAnswer && kChSwappedUserAnswer === correctAnswer) ||
        userAnswer.replace(/h/g, '') === correctAnswer.replace(/h/g, '') ||
        (kChSwappedUserAnswer && kChSwappedUserAnswer.replace(/h/g, '') === correctAnswer.replace(/h/g, ''))
    );
    
    if (isCorrect) {
        isRomanCorrect = true;
        feedbackEl.classList.remove('incorrect');
        feedbackEl.classList.add('correct');
        answerEl.classList.remove('hidden');
        
        if (isSingleAnswer) {
            feedbackEl.textContent = "Amazing! You got it perfect! ✨";
            answerEl.textContent = `${currentCard.roman}`;
        }
        else if (isEnglishCorrect) {
            feedbackEl.textContent = "Fantastic! Both answers are spot-on! 🎉";
            answerEl.textContent = `${currentCard.roman} | ${currentCard.english}`;
        }
        else {
            feedbackEl.textContent = "Correct! Now, please enter the English translation.";
            answerEl.textContent = `${currentCard.roman}`;
            englishInput.focus();
        }
    } else {
        isRomanCorrect = false;
        feedbackEl.textContent = "Not quite. Let's try that Romanized spelling again.";
        feedbackEl.classList.remove('correct');
        feedbackEl.classList.add('incorrect');
        answerEl.classList.add('hidden');
    }
}

function checkEnglishAnswer() {
    const userAnswer = englishInput.value.toLowerCase().trim();
    const currentCard = filteredQuizData[currentCardIndex];
    
    const rawEnglish = currentCard.english.toLowerCase().trim();
    const noBrackets = rawEnglish.replace(/\s*\(.*\)/, '');
    const acceptableAnswers = noBrackets.split('/').map(ans => ans.trim());
    
    const isCorrect = acceptableAnswers.includes(userAnswer);

    if (isCorrect) {
        isEnglishCorrect = true;
        feedbackEl.classList.remove('incorrect');
        feedbackEl.classList.add('correct');
        answerEl.classList.remove('hidden');

        if (isRomanCorrect) {
            feedbackEl.textContent = "Fantastic! Both answers are spot-on! 🎉";
            answerEl.textContent = `${currentCard.roman} | ${currentCard.english}`;
        }
        else {
            feedbackEl.textContent = "Correct! Now, what about the Romanized spelling?";
            answerEl.textContent = `${currentCard.english}`;
        }
    } else {
        isEnglishCorrect = false;
        feedbackEl.textContent = "That's not the correct English translation. Give it another shot!";
        feedbackEl.classList.remove('correct');
        feedbackEl.classList.add('incorrect');
        answerEl.classList.add('hidden');
    }
}

submitRomanizedBtn.addEventListener('click', checkRomanizedAnswer);
submitEnglishBtn.addEventListener('click', checkEnglishAnswer);

romanizedInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const isSingleAnswer = filteredQuizData[currentCardIndex].roman.toLowerCase().trim() === filteredQuizData[currentCardIndex].english.toLowerCase().trim();
        if ((isRomanCorrect && isEnglishCorrect) || (isRomanCorrect && isSingleAnswer)) {
            nextBtn.click();
        } else {
            checkRomanizedAnswer();
        }
    }
});
englishInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        if (isRomanCorrect && isEnglishCorrect) {
            nextBtn.click();
        } else {
            checkEnglishAnswer();
        }
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        showAnswerBtn.click();
    }
    if (event.key === 'ArrowRight') {
        nextBtn.click();
    }
    if (event.key === 'ArrowLeft') {
        prevBtn.click();
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
    const currentCard = filteredQuizData[currentCardIndex];
    const isSingleAnswer = currentCard.roman.toLowerCase().trim() === currentCard.english.toLowerCase().trim();
    if (isSingleAnswer) {
        answerEl.textContent = `${currentCard.roman}`;
    } else {
        answerEl.textContent = `${currentCard.roman} | ${currentCard.english}`;
    }
    answerEl.classList.remove('hidden');
});

resetBtn.addEventListener('click', () => {
    displayCard();
});

categorySelect.addEventListener('change', applyFilterAndLoad);

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

applyFilterAndLoad();