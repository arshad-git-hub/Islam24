import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import {
  allahNames,
  battleProfiles,
  battleSections,
  bookTitles,
  boysNames,
  companionProfiles,
  girlsNames,
  mosques,
  prophetNames,
  prophetProfiles,
} from "./islamicData";

const photos = {
  mosque:
    "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1400&q=85",
  desert:
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=85",
  library:
    "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=85",
  road: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
  friends:
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
  sunrise:
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85",
  sunset:
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85",
  quran:
    "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?auto=format&fit=crop&w=1400&q=85",
};

const categories = [
  ["📖", "Al-Quran", "quran"],
  ["🕌", "Pillars of Islam", "pillars-of-islam"],
  ["🌟", "Pillars of Imaan", "pillars-of-imaan"],
  ["🕌", "Namaz", "namaz"],
  ["✨", "99 Names of Allah", "allah-names"],
  ["🤲", "Donate", "donate"],
  ["🕰️", "Prayer times", "prayer"],
  ["🌙", "Prophets", "prophets"],
  ["📚", "Books", "books"],
  ["👑", "Caliphs", "caliphs"],
  ["🤝", "Sahaba", "sahaba"],
  ["⋯", "All", "other"],
];

const posts = [
  {
    tag: "Quran reflection",
    title: "Finding hope through patience",
    summary: "A gentle reminder to meet difficult moments with hope and trust.",
    time: "3 min read · Ash-Sharh 94:5–6",
    image: photos.road,
    content: [
      "Difficult moments can make the way ahead feel uncertain. The Quran reminds us that hardship is not the end of the story, and that hope can remain beside us as we take the next step.",
      "Patience does not mean ignoring pain or facing every burden alone. It can mean asking for support, taking practical steps, and trusting that ease may come in ways we do not yet see.",
    ],
    quote: "For indeed, with hardship [will be] ease.",
    reference: "The Holy Quran, 94:5–6",
  },
  {
    tag: "Daily character",
    title: "Kindness brings us close",
    summary: "Small acts of care can bring warmth to the people around us.",
    time: "4 min read · Sahih al-Bukhari 13",
    image: photos.friends,
    content: [
      "Kindness often appears in small choices: listening carefully, offering help, or speaking gently. These actions can make the people around us feel seen and valued.",
      "The Prophet ﷺ taught care for others as part of faith. A simple act of consideration can strengthen trust and bring warmth to a home or community.",
    ],
  },
  {
    tag: "Mindful living",
    title: "Make room for gratitude",
    summary: "Pause to notice everyday blessings that are easy to overlook.",
    time: "3 min read · Al-Baqarah 2:152",
    image: photos.sunrise,
    content: [
      "Gratitude begins with noticing what is already present: a moment of rest, a kind word, or the people who support us. Pausing to recognize these gifts can change how we meet an ordinary day.",
      "The Quran connects remembrance and gratitude. Make a little room to reflect on what you appreciate and to express thanks through words and good actions.",
    ],
  },
  {
    tag: "Daily practice",
    title: "Find calm in remembrance",
    summary: "Make a little space in a busy day to remember Allah.",
    time: "3 min read · Ar-Ra’d 13:28",
    image: photos.sunset,
    content: [
      "A busy day can leave little space to pause. Setting aside a few quiet moments for remembrance can help bring attention back to what matters most.",
      "Start with a manageable routine, such as a short supplication or a few minutes of reflection. Consistency matters more than making a practice difficult to maintain.",
    ],
  },
  ...[
    {
      tag: "Quran reflection",
      title: "Begin again with sincere intention",
      summary: "A renewed intention can give ordinary actions a meaningful direction.",
      image: photos.quran,
      reference: "Sahih al-Bukhari 1",
      quote: "Actions are judged by intentions.",
      content: [
        "A fresh start does not require a perfect plan. It can begin with a clear intention to seek what is good and to act with care.",
        "When a task feels ordinary, remember why you chose it. Renewing a sincere intention can bring purpose to work, learning, and service.",
      ],
    },
    {
      tag: "Daily character",
      title: "Choose gentle words",
      summary: "Thoughtful speech can protect dignity and strengthen relationships.",
      image: photos.friends,
      reference: "Quran 17:53",
      quote: "Tell My servants to say that which is best.",
      content: [
        "Words can comfort, encourage, or wound. Pausing before responding gives us a chance to choose language that is honest without being harsh.",
        "Gentleness does not mean avoiding every difficult conversation. It means speaking with respect and giving others room to be heard.",
      ],
    },
    {
      tag: "Mindful living",
      title: "Make time for reflection",
      summary: "A quiet pause can help you notice what deserves your attention.",
      image: photos.sunrise,
      reference: "Quran 59:18",
      quote: "Let every soul look to what it has put forth for tomorrow.",
      content: [
        "A few minutes of reflection can help you see where your time and energy are going. Consider what brought benefit and what you might do differently.",
        "Keep reflection balanced: acknowledge mistakes, make amends where possible, and choose one practical step for the day ahead.",
      ],
    },
    {
      tag: "Daily practice",
      title: "Keep good deeds consistent",
      summary: "Small acts done regularly can become a steady source of good.",
      image: photos.road,
      reference: "Sahih al-Bukhari 6464",
      quote: "The most beloved deeds are those done consistently.",
      content: [
        "It is easy to begin with a routine that is too demanding. A small practice that fits your life is more likely to continue.",
        "Choose one beneficial action you can repeat: a short reading, helping someone, or setting aside time for prayer and remembrance.",
      ],
    },
    {
      tag: "Quran reflection",
      title: "Trust Allah while taking action",
      summary: "Reliance and practical effort can go together.",
      image: photos.desert,
      reference: "Quran 3:159",
      quote: "Then when you have decided, rely upon Allah.",
      content: [
        "Trust does not ask us to ignore our responsibilities. We can seek advice, prepare carefully, and make a sound decision.",
        "After doing what is within our ability, we can place the outcome in Allah’s care and meet uncertainty with patience.",
      ],
    },
    {
      tag: "Daily character",
      title: "Honour the trust you are given",
      summary: "Reliability in small responsibilities helps build lasting trust.",
      image: photos.library,
      reference: "Quran 4:58",
      quote: "Allah commands you to render trusts to whom they are due.",
      content: [
        "A trust may be a responsibility at home, a promise to a friend, or something shared with you at work. Treating it carefully shows respect for others.",
        "If you cannot meet a commitment, communicate early and honestly. Taking responsibility is an important part of keeping trust.",
      ],
    },
    {
      tag: "Mindful living",
      title: "Let gratitude shape your day",
      summary: "Notice blessings and let appreciation lead to beneficial action.",
      image: photos.sunset,
      reference: "Quran 14:7",
      quote: "If you are grateful, I will surely increase you.",
      content: [
        "Gratitude can begin with noticing what is often taken for granted: safety, companionship, food, or the chance to learn.",
        "Let appreciation become action. Share what you can, thank those who help you, and use your abilities in ways that benefit others.",
      ],
    },
    {
      tag: "Daily practice",
      title: "Make room for the Quran",
      summary: "A small, steady reading habit can deepen understanding over time.",
      image: photos.quran,
      reference: "Quran 38:29",
      quote: "A blessed Book which We have revealed to you, that they might reflect upon its verses.",
      content: [
        "You do not need to read a large amount at once. Begin with a manageable passage and take time to consider its meaning.",
        "Use a reliable translation or commentary when you need help, and let learning lead to thoughtful practice rather than a race to finish.",
      ],
    },
    {
      tag: "Daily character",
      title: "Give people the benefit of care",
      summary: "Listening with patience can help us respond more fairly.",
      image: photos.friends,
      reference: "Quran 49:12",
      content: [
        "We rarely know every detail behind another person’s words or actions. Before assuming the worst, pause and consider whether a respectful question could clarify the situation.",
        "Good assumptions do not mean accepting harm or ignoring facts. They help us avoid unfair suspicion while still setting healthy boundaries.",
      ],
    },
    {
      tag: "Mindful living",
      title: "Patience is an active choice",
      summary: "Patience can mean continuing wisely through a difficult moment.",
      image: photos.road,
      reference: "Quran 2:153",
      quote: "Indeed, Allah is with the patient.",
      content: [
        "Patience is not the absence of sadness or the denial of hardship. It can include asking for help and taking the next responsible step.",
        "When a situation cannot be changed immediately, focus on what is within reach and seek support from people you trust.",
      ],
    },
    {
      tag: "Daily practice",
      title: "Make prayer a point of return",
      summary: "Prayer offers a regular moment to pause and turn toward Allah.",
      image: photos.mosque,
      reference: "Quran 29:45",
      content: [
        "The daily prayers mark moments of worship across the day. Preparing for them can help create a pause amid work, study, and family life.",
        "If you are building consistency, start with practical reminders and learn the essentials from a trusted teacher. Progress can be steady and compassionate.",
      ],
    },
    {
      tag: "Daily character",
      title: "Forgive without forgetting wisdom",
      summary: "Forgiveness can release resentment while still allowing wise boundaries.",
      image: photos.sunset,
      reference: "Quran 42:40",
      content: [
        "Forgiveness is a personal process and should not be demanded from someone who has been hurt. It can take time, and safety must come first.",
        "Where reconciliation is appropriate, honest accountability and changed behaviour matter. It is also possible to let go of bitterness while keeping necessary boundaries.",
      ],
    },
    {
      tag: "Mindful living",
      title: "Seek knowledge with humility",
      summary: "Learning grows when curiosity is joined with care and good sources.",
      image: photos.library,
      reference: "Quran 20:114",
      quote: "My Lord, increase me in knowledge.",
      content: [
        "A sincere learner asks questions, checks sources, and recognizes when a matter requires guidance from someone qualified.",
        "Knowledge is not only collected; it should shape conduct. Let what you learn encourage honesty, mercy, and service.",
      ],
    },
    {
      tag: "Daily character",
      title: "Care for your neighbours",
      summary: "Consideration and practical help can make a neighbourhood stronger.",
      image: photos.friends,
      reference: "Sahih al-Bukhari 6014",
      content: [
        "Neighbourly care may be simple: checking in, keeping shared spaces clean, or offering help when someone is unwell.",
        "People around us may have different needs and backgrounds. Ask respectfully what would help, and honour their privacy and comfort.",
      ],
    },
    {
      tag: "Quran reflection",
      title: "Use your words to reconcile",
      summary: "A fair and gentle conversation can help repair strained relationships.",
      image: photos.sunrise,
      reference: "Quran 49:10",
      content: [
        "When conflict arises, listening to each person and checking the facts can prevent misunderstanding from growing.",
        "Reconciliation should be pursued with fairness and without pressuring anyone to accept harm. A trusted mediator can sometimes help.",
      ],
    },
    {
      tag: "Daily practice",
      title: "Share what you can",
      summary: "Generosity includes time, attention, encouragement, and material help.",
      image: photos.road,
      reference: "Quran 2:261",
      content: [
        "Giving does not have to be large to matter. A useful skill, a kind message, or a little time can ease someone’s day.",
        "Give in a way that respects the recipient’s dignity. Avoid making help a source of embarrassment or expecting praise in return.",
      ],
    },
  ].map((post) => ({
    ...post,
    time: `3 min read · ${post.reference}`,
  })),
];
const postsPerPage = 8;
const postsPageCount = Math.ceil(posts.length / postsPerPage);

const prayers = [
  { icon: "🌅", name: "Fajr", time: "05:15 AM", minutes: 307 },
  { icon: "☀️", name: "Dhuhr", time: "01:15 PM", minutes: 726 },
  { icon: "🌤️", name: "Asr", time: "03:20 PM", minutes: 921 },
  { icon: "🌇", name: "Maghrib", time: "05:25 PM", minutes: 1065 },
  { icon: "🌙", name: "Isha", time: "08:00 PM", minutes: 1144 },
];

const pagePaths = {
  home: "/",
  prayer: "/prayer",
  quran: "/quran",
  mosques: "/mosques",
  "allah-names": "/allah-names",
  donate: "/donate",
  names: "/names",
  prophets: "/prophets",
  books: "/books",
  battles: "/battles",
  sahaba: "/sahaba",
  caliphs: "/caliphs",
  "pillars-of-islam": "/pillars-of-islam",
  "pillars-of-imaan": "/pillars-of-imaan",
  posts: "/posts",
  other: "/other",
  namaz: "/namaz",
  hajj: "/hajj",
  umrah: "/umrah",
  jannat: "/jannat",
  jahannum: "/jahannum",
  "history-of-islam": "/history-of-islam",
  muhaddis: "/muhaddis",
  miracles: "/miracles",
  "short-stories": "/short-stories",
};

const pageInfo = {
  prayer: ["DAILY WORSHIP", "Prayer times", photos.mosque],
  quran: ["THE HOLY QURAN", "The Holy Quran", photos.quran],
  mosques: ["PLACES OF WORSHIP", "Mosques around the world", photos.mosque],
  "allah-names": [
    "THE MOST BEAUTIFUL NAMES",
    "99 Names of Allah",
    photos.desert,
  ],
  donate: ["A LITTLE KINDNESS GOES A LONG WAY", "Donate", null],
  names: ["MEANINGS AND INSPIRATION", "Boys & Girls Names", null],
  prophets: ["MESSENGERS OF ALLAH", "Prophets in Islam", photos.desert],
  books: ["YOUR ISLAMIC LIBRARY", "Islamic Books", photos.library],
  battles: [
    "A JOURNEY THROUGH HISTORY",
    "Battles in Islamic History",
    photos.desert,
  ],
  sahaba: ["THE BEST OF GENERATIONS", "The Companions", photos.mosque],
  caliphs: [
    "A LEGACY OF LEADERSHIP",
    "The Rightly Guided Caliphs",
    photos.mosque,
  ],
  "pillars-of-islam": ["THE FOUNDATIONS OF PRACTICE", "Pillars of Islam", null],
  "pillars-of-imaan": ["CORE BELIEFS", "Pillars of Imaan", null],
  posts: ["READ · REFLECT · REMEMBER", "Daily Posts", null],
  other: ["EXPLORE ISLAM24", "All categories", null],
  namaz: ["DAILY WORSHIP", "Namaz (Salah)", photos.mosque],
  hajj: ["PILLAR OF ISLAM", "Hajj", photos.mosque],
  umrah: ["A JOURNEY OF WORSHIP", "Umrah", photos.mosque],
  jannat: ["THE HEREAFTER", "Jannat", photos.desert],
  jahannum: ["THE HEREAFTER", "Jahannum", photos.desert],
  "history-of-islam": ["PEOPLE AND EVENTS", "History of Islam", photos.library],
  muhaddis: ["PRESERVERS OF HADITH", "Muhaddis", photos.library],
  miracles: ["SIGNS BY ALLAH'S PERMISSION", "Miracles in Islam", photos.quran],
  "short-stories": ["AUTHENTIC NARRATIONS", "Short Stories", photos.library],
};

const pageDescriptions = {
  prayer:
    "A sample daily schedule. Prayer times vary by location and calculation method.",
  quran:
    "Read Arabic and English translations, and play recitation for each ayah.",
  mosques: "Explore notable mosques, their history, location, and photographs.",
  "allah-names": "Explore the beautiful names of Allah with English meanings.",
  donate:
    "Choose a trusted charitable organization and verify its details before donating.",
  names: "Browse names and their commonly used meanings.",
  prophets:
    "Quran-based notes are shown with references. Dates are included only when reliable.",
  books: "Open an available PDF or trusted online edition.",
  battles:
    "Select an event to see its date, sides, leaders, outcome, and location.",
  sahaba:
    "Biographical details are approximate where early historical sources differ.",
  caliphs: "Learn about the four Rightly Guided Caliphs.",
  "pillars-of-islam":
    "Explore the five pillars of Islam. Select a tile to read more.",
  "pillars-of-imaan":
    "Explore the six pillars of Imaan. Select a tile to read more.",
  posts: "Reflections and reminders for everyday life.",
  other: "Browse all learning topics and sections.",
  namaz: "A basic introduction to the five daily prayers and their form.",
  hajj: "An introductory guide to Hajj from the Quran and authentic Sunnah.",
  umrah: "An introductory guide to Umrah; ask a qualified guide about rulings.",
  jannat: "Quranic teachings about Paradise, without unsupported descriptions.",
  jahannum: "Quranic teachings about the Fire and accountability.",
  "history-of-islam":
    "A concise timeline; historical dates can vary between sources.",
  muhaddis:
    "Meet major hadith scholars and learn how hadith collections are studied.",
  miracles:
    "Examples explicitly described in the Quran, with their references.",
  "short-stories":
    "Brief stories from rigorously authenticated hadith, with source references.",
};

const allCategories = [
  ["📖", "Al-Quran", "quran"],
  ["🕰️", "Prayer times", "prayer"],
  ["🕌", "Namaz", "namaz"],
  ["🧒", "Muslim Names", "names"],
  ["📚", "Books", "books"],
  ["🕌", "Mosques", "mosques"],
  ["✨", "99 Names of Allah", "allah-names"],
  ["🌙", "Prophets", "prophets"],
  ["🤝", "Sahaba", "sahaba"],
  ["👑", "Caliphs", "caliphs"],
  ["🛡️", "Battles", "battles"],
  ["🌟", "Pillars of Islam", "pillars-of-islam"],
  ["🌟", "Pillars of Imaan", "pillars-of-imaan"],
  ["🕋", "Hajj", "hajj"],
  ["🕋", "Umrah", "umrah"],
  ["🌿", "Jannat", "jannat"],
  ["🔥", "Jahannum", "jahannum"],
  ["📜", "History of Islam", "history-of-islam"],
  ["📚", "Muhaddis", "muhaddis"],
  ["✨", "Miracles in Islam", "miracles"],
  ["📖", "Short Stories", "short-stories"],
  ["📝", "Posts", "posts"],
  ["🤲", "Donate", "donate"],
];

const topicContent = {
  namaz: [
    {
      title: "The five daily prayers",
      paragraphs: [
        "Salah is performed at five prescribed times: Fajr, Dhuhr, Asr, Maghrib, and Isha. The Quran instructs believers to establish prayer and teaches that prayer is prescribed at appointed times.",
      ],
      reference: "Quran 2:43; 4:103",
    },
    {
      title: "Preparing and praying",
      paragraphs: [
        "Preparation includes purification, facing the Qiblah when able, and praying within the correct time. The prayer includes standing, recitation, bowing, and prostration; the details are learned from the Prophet’s teaching.",
      ],
      reference: "Quran 5:6; Sahih al-Bukhari 631",
    },
    {
      title: "Learn with reliable guidance",
      paragraphs: [
        "Some practical details differ among recognized schools of Islamic law. Learn the prayer step by step from a trusted teacher or reliable guide, and ask a qualified scholar about personal circumstances.",
      ],
      reference: "The Prophet ﷺ said: “Pray as you have seen me praying.” Sahih al-Bukhari 631",
    },
  ],
  hajj: [
    {
      title: "What is Hajj?",
      paragraphs: [
        "Hajj is the pilgrimage to Makkah during its appointed days in Dhul-Hijjah. It is an obligation once in a lifetime for a Muslim who is physically and financially able to undertake it.",
      ],
      reference: "Quran 3:97; Sahih al-Bukhari 8",
    },
    {
      title: "Core rites",
      paragraphs: [
        "The rites include entering ihram, standing at Arafah, staying at Muzdalifah, the days at Mina, and tawaf and sa’i. The order and details matter; pilgrims should learn the rites from a reliable guide before travelling.",
      ],
      reference: "Quran 2:196–203; Sahih Muslim 1218",
    },
    {
      title: "Prepare responsibly",
      paragraphs: [
        "Hajj has practical and legal details that can vary by circumstance and school of law. Follow official health and travel guidance and consult a qualified scholar for personal questions.",
      ],
      reference: "For individual rulings, consult a qualified scholar.",
    },
  ],
  umrah: [
    {
      title: "What is Umrah?",
      paragraphs: [
        "Umrah is a pilgrimage to the Sacred Mosque involving ihram, tawaf around the Ka’bah, sa’i between Safa and Marwah, and cutting or shortening the hair to complete the rites.",
      ],
      reference: "Quran 2:196; Sahih al-Bukhari 1783",
    },
    {
      title: "Plan and learn",
      paragraphs: [
        "Learn the steps and ihram rules before travel, check current Saudi entry and health requirements, and use trusted guidance for questions about missed rites or special circumstances.",
      ],
      reference: "Rite details: Sahih Muslim 1218",
    },
  ],
  jannat: [
    {
      title: "Hope in Allah’s mercy",
      paragraphs: [
        "The Quran describes Paradise as the lasting home prepared by Allah for the people of faith and righteousness. Its blessings are greater than what people can fully imagine.",
      ],
      reference: "Quran 32:17; 9:72",
    },
    {
      title: "Faith and good deeds",
      paragraphs: [
        "Islam teaches hope in Allah’s mercy alongside sincere faith, repentance, and good deeds. No one should claim certainty about another person’s final judgment.",
      ],
      reference: "Quran 2:82; 39:53",
    },
  ],
  jahannum: [
    {
      title: "A serious warning",
      paragraphs: [
        "The Quran warns of the Fire and the consequences of rejecting guidance and persisting in wrongdoing. These warnings call people to accountability, repentance, and justice.",
      ],
      reference: "Quran 3:131; 99:7–8",
    },
    {
      title: "Balance fear with hope",
      paragraphs: [
        "The Quran also emphasizes that Allah is Most Merciful and forbids despairing of His mercy. Avoid declaring specific people destined for punishment; judgment belongs to Allah.",
      ],
      reference: "Quran 39:53; 6:164",
    },
  ],
  "history-of-islam": [
    {
      title: "The Prophetic mission",
      paragraphs: [
        "Islamic tradition dates the beginning of Quranic revelation to the early 7th century CE in Makkah. The Hijrah to Madinah in 622 CE marks the start of the Islamic calendar.",
      ],
      reference: "Quran 96:1–5; Sahih al-Bukhari 3",
    },
    {
      title: "The early Muslim community",
      paragraphs: [
        "After Prophet Muhammad’s ﷺ death in 11 AH / 632 CE, the Muslim community was led by the Rightly Guided Caliphs. Later Muslim societies developed across many regions, languages, and scholarly traditions.",
      ],
      reference: "Dates follow commonly used historical chronology.",
    },
    {
      title: "Read history critically",
      paragraphs: [
        "Historical chronicles can differ in dates and accounts. Compare reliable scholarship, distinguish primary reports from later retellings, and avoid treating disputed stories as established fact.",
      ],
      reference: "Specific events are described in the Battles and Caliphs sections.",
    },
  ],
  muhaddis: [
    {
      title: "Imam al-Bukhari",
      paragraphs: [
        "Muhammad ibn Isma’il al-Bukhari compiled Sahih al-Bukhari, a major Sunni hadith collection. His work is arranged in chapters and includes his selection of reports he considered authentic.",
      ],
      reference: "Sahih al-Bukhari; see its introduction and chapter headings.",
    },
    {
      title: "Imam Muslim",
      paragraphs: [
        "Muslim ibn al-Hajjaj compiled Sahih Muslim, another major collection of rigorously selected reports, often presenting related chains and wordings together.",
      ],
      reference: "Sahih Muslim; see its introduction.",
    },
    {
      title: "Abu Dawud and other compilers",
      paragraphs: [
        "Abu Dawud, al-Tirmidhi, al-Nasa’i, and Ibn Majah compiled widely studied Sunan collections. A report’s presence in a collection does not by itself mean every narration in it has the same grade; consult scholarly grading and context.",
      ],
      reference: "Sunan Abi Dawud; Jami’ al-Tirmidhi; Sunan al-Nasa’i; Sunan Ibn Majah.",
    },
  ],
  miracles: [
    {
      title: "A sign given to Musa عليه السلام",
      paragraphs: [
        "The Quran recounts that Musa’s staff became a manifest serpent by Allah’s permission, as a sign to Pharaoh and his chiefs.",
      ],
      reference: "Quran 7:106–108; 20:17–23",
    },
    {
      title: "Signs given to Isa عليه السلام",
      paragraphs: [
        "The Quran says Isa healed the blind and the leper and brought the dead to life by Allah’s permission. The repeated qualification makes clear that the signs occur only by Allah’s leave.",
      ],
      reference: "Quran 3:49; 5:110",
    },
    {
      title: "The Quran’s careful standard",
      paragraphs: [
        "When sharing accounts described as miracles, use Quranic verses or sound hadith and cite them. Popular stories without reliable sources should not be presented as established Islamic teaching.",
      ],
      reference: "Quran 17:36",
    },
  ],
  "short-stories": [
    {
      title: "The three travellers and the cave",
      paragraphs: [
        "Three men were trapped in a cave when a rock blocked its entrance. Each prayed to Allah, mentioning a sincere deed: caring for parents, refusing sin despite having the opportunity, and keeping a worker’s wages safe and growing. The rock moved a little after each prayer until they could leave.",
      ],
      reference: "Sahih al-Bukhari 2272; Sahih Muslim 2743",
    },
    {
      title: "The man who killed a hundred",
      paragraphs: [
        "A man who had killed many people sought a way to repent. A knowledgeable worshipper told him repentance was possible and advised him to leave his corrupt surroundings for a better community. He set out, died on the way, and Allah’s mercy was shown to him because he had turned sincerely toward good.",
      ],
      reference: "Sahih al-Bukhari 3470; Sahih Muslim 2766",
    },
    {
      title: "The leper, the bald man, and the blind man",
      paragraphs: [
        "Allah tested three men from the Children of Israel and restored their health. Each was later given wealth. Two denied the blessings and treated a needy visitor harshly; the third remembered his earlier hardship, acknowledged Allah’s favour, and gave generously. The story teaches gratitude and compassion.",
      ],
      reference: "Sahih al-Bukhari 3464; Sahih Muslim 2964",
    },
  ],
};

const prophetIcons = {
  Adam: "🌿",
  Idrees: "📜",
  Nuh: "⛵",
  Hood: "🌬️",
  Swaleh: "🐪",
  Ibraheem: "🕋",
  Loot: "🏘️",
  Ismaeel: "🕋",
  Ishaq: "🌟",
  Yaqoob: "👨‍👦",
  Yusuf: "🌙",
  Ayyub: "🌱",
  "Shu’ayb": "⚖️",
  Musa: "🌊",
  Harun: "🗣️",
  "Dhul-Kifl": "🌴",
  Dawud: "🛡️",
  Sulayman: "🐜",
  Ilyas: "⛰️",
  "Al-Yasa": "🌱",
  Yunus: "🐟",
  Zakariya: "🤲",
  Yahya: "📖",
  Eesa: "🕊️",
  Muhammad: "🕌",
};

const companions = Object.keys(companionProfiles);
const companionIcons = {
  "Abu Bakr as-Siddiq RA": "🕊️",
  "Umar ibn al-Khattab RA": "⚖️",
  "Uthman ibn Affan RA": "📖",
  "Ali ibn Abi Talib RA": "🦁",
  "Talha ibn Ubaydullah RA": "🛡️",
  "Zubayr ibn al-Awwam RA": "⚔️",
  "Abdurrahman ibn Awf RA": "🤲",
  "Sa’ad ibn Abi Waqqas RA": "🏹",
  "Sa’id ibn Zayd RA": "🌿",
  "Abu Ubaydah ibn Jarrah RA": "🔑",
};
const caliphProfiles = Object.fromEntries(
  [
    "Abu Bakr as-Siddiq RA",
    "Umar ibn al-Khattab RA",
    "Uthman ibn Affan RA",
    "Ali ibn Abi Talib RA",
  ].map((name) => [name, companionProfiles[name]]),
);
const caliphs = Object.keys(caliphProfiles);

const islamPillars = [
  {
    title: "Shahada · Declaration of faith",
    detail:
      "The testimony that none has the right to be worshipped but Allah, and that Muhammad is the Messenger of Allah. It is the foundation of a Muslim’s faith.",
    details: [
      "The first part affirms that worship is due to Allah alone. It rejects directing acts of worship to anyone else.",
      "The second part affirms Muhammad ﷺ as Allah’s Messenger and calls Muslims to follow his authentic teaching.",
      "The testimony is more than words: it is professed sincerely, understood, and reflected in belief and conduct.",
    ],
    practice:
      "Learn the meaning of the testimony, renew it sincerely, and use it as a guide when choosing what to worship and whose guidance to follow.",
    reference: "Sahih al-Bukhari 8; Sahih Muslim 16",
  },
  {
    title: "Salah · Prayer",
    detail:
      "The five prescribed daily prayers structure worship throughout the day and are performed facing the Ka'bah.",
    details: [
      "The five obligatory prayers are Fajr, Dhuhr, Asr, Maghrib, and Isha, each performed within its prescribed time.",
      "Prayer includes standing, recitation, bowing, and prostration, with the worshipper facing the Ka'bah when able.",
      "Ritual purification and the proper conditions of prayer are part of preparing for salah.",
    ],
    practice:
      "Plan around local prayer times, learn the essential recitations and movements, and ask a qualified teacher about details you are unsure of.",
    reference: "Quran 2:43; Sahih al-Bukhari 8",
  },
  {
    title: "Zakat · Obligatory charity",
    detail:
      "The obligatory giving of a prescribed share of qualifying wealth to eligible recipients, subject to its conditions.",
    details: [
      "Zakat is an act of worship and a right of eligible recipients, not simply an optional donation.",
      "Its calculation depends on the type of wealth, applicable threshold, and other conditions explained in Islamic jurisprudence.",
      "The Quran identifies categories of eligible recipients, including the poor and people in debt.",
    ],
    practice:
      "Keep clear records of qualifying assets and seek guidance from a knowledgeable scholar or a trusted zakat organization for your circumstances.",
    reference: "Quran 9:60; Sahih al-Bukhari 8",
  },
  {
    title: "Sawm · Fasting Ramadan",
    detail:
      "Fasting from dawn until sunset during Ramadan is an act of worship prescribed for Muslims, with exemptions described in Islamic law.",
    details: [
      "The fast includes abstaining from food, drink, and other specified acts from true dawn until sunset.",
      "The Quran describes fasting as a means toward developing taqwa and provides guidance for illness and travel.",
      "Fasting is accompanied by prayer, Quran recitation, charity, and good conduct; it is not only abstaining from food.",
    ],
    practice:
      "Check the local start and sunset times, prepare for the fast responsibly, and ask a qualified scholar about health needs or exemptions.",
    reference: "Quran 2:183–185; Sahih al-Bukhari 8",
  },
  {
    title: "Hajj · Pilgrimage",
    detail:
      "Pilgrimage to the Sacred House in Makkah is required once in a lifetime for those who are able to undertake it.",
    details: [
      "Hajj takes place at specific dates in Dhul-Hijjah and includes prescribed rites at Makkah, Mina, Arafat, and Muzdalifah.",
      "The obligation applies to a person who has the ability to perform it; scholars discuss what ability entails.",
      "Hajj commemorates devotion to Allah and brings pilgrims together in shared acts of worship.",
    ],
    practice:
      "Study the rites with a reliable guide before traveling, plan for health and safety, and follow current official travel instructions.",
    reference: "Quran 3:97; Sahih al-Bukhari 8",
  },
];

const imaanPillars = [
  {
    title: "Belief in Allah",
    detail:
      "Belief in Allah’s existence, oneness, lordship, and the names and attributes affirmed in the Quran and authentic Sunnah.",
    details: [
      "Allah alone is the Creator and Sustainer, and worship is directed to Him alone.",
      "Muslims affirm Allah’s names and attributes as taught in revelation, without likening Him to creation.",
      "This belief is the foundation for worship, reliance, gratitude, and accountability.",
    ],
    practice:
      "Learn about Allah through the Quran and sound teachings, call upon Him, and direct acts of worship to Him alone.",
    reference: "Quran 112:1–4; Sahih Muslim 8",
  },
  {
    title: "Belief in the angels",
    detail:
      "Belief that angels are real creations of Allah who carry out the duties assigned to them.",
    details: [
      "Angels are created by Allah and are not divine beings or objects of worship.",
      "Revelation names angels including Jibril, who brought revelation to the prophets.",
      "The Quran and Sunnah describe angels carrying out different tasks by Allah’s command.",
    ],
    practice:
      "Remember that knowledge of the angels comes from revelation; avoid presenting popular stories about them as established fact.",
    reference: "Quran 2:285; Sahih Muslim 8",
  },
  {
    title: "Belief in the revealed books",
    detail:
      "Belief in the scriptures Allah revealed to His messengers, including the Quran, which Muslims regard as the final revelation.",
    details: [
      "Muslims believe Allah sent revelation to guide people through His messengers.",
      "The Quran names earlier revelations including the Tawrah, Zabur, and Injil.",
      "The Quran is the final revelation and the criterion by which Muslims follow divine guidance.",
    ],
    practice:
      "Read and learn the Quran with a reliable translation and tafsir, and treat its guidance with respect and care.",
    reference: "Quran 2:285; Sahih Muslim 8",
  },
  {
    title: "Belief in the messengers",
    detail:
      "Belief in the messengers Allah sent to guide people, without rejecting any of those He named.",
    details: [
      "Messengers called their people to worship Allah and conveyed the guidance entrusted to them.",
      "Muslims believe in all the messengers named in revelation and do not reject any of them.",
      "Muhammad ﷺ is the final prophet and messenger in Islamic belief.",
    ],
    practice:
      "Learn from the Quranic accounts of the prophets and follow the authentic Sunnah of Muhammad ﷺ.",
    reference: "Quran 2:285; Sahih Muslim 8",
  },
  {
    title: "Belief in the Last Day",
    detail:
      "Belief in resurrection and the final return to Allah for judgment and recompense.",
    details: [
      "The Last Day includes resurrection and people being brought before Allah.",
      "Deeds are judged with perfect justice, and people receive their recompense by Allah’s judgment and mercy.",
      "The Quran repeatedly connects belief in Allah with belief in the Last Day.",
    ],
    practice:
      "Let accountability encourage repentance, fulfilling other people’s rights, and doing good without despairing of Allah’s mercy.",
    reference: "Quran 2:285; Sahih Muslim 8",
  },
  {
    title: "Belief in divine decree · Qadr",
    detail:
      "Belief in Allah’s knowledge and decree, while affirming human responsibility for choices and deeds.",
    details: [
      "Allah’s knowledge encompasses all things, and nothing occurs outside His will and decree.",
      "Islam also affirms that people make real choices and are accountable for what they intentionally do.",
      "Belief in Qadr is not a reason to abandon effort or excuse wrongdoing.",
    ],
    practice:
      "Take responsible steps, seek help, and place trust in Allah regarding outcomes beyond your control.",
    reference: "Quran 54:49; Sahih Muslim 8",
  },
];

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function getRoute(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const postMatch = path.match(/^\/posts\/([a-z0-9-]+)$/);
  if (postMatch) {
    const post = posts.find((item) => slugify(item.title) === postMatch[1]);
    return post ? { page: "article", post } : { page: "not-found" };
  }
  const route = Object.entries(pagePaths).find(
    ([, routePath]) => routePath === path,
  );
  return route ? { page: route[0] } : { page: "not-found" };
}

function formatTime(totalMinutes) {
  const date = new Date();
  date.setHours(Math.floor(totalMinutes / 60), totalMinutes % 60, 0, 0);
  return date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function getNextPrayer(now) {
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const nextPrayer = prayers.find((prayer) => prayer.minutes > currentMinutes);
  const prayer = nextPrayer || prayers[0];
  const minutes = prayer.minutes + (nextPrayer ? 0 : 24 * 60);
  return {
    ...prayer,
    azan: formatTime(minutes),
    jamaah: formatTime(minutes + 15),
  };
}

function getNightPrayerTimes() {
  const fajr = prayers.find((prayer) => prayer.name === "Fajr");
  const maghrib = prayers.find((prayer) => prayer.name === "Maghrib");
  const fajrNextDay = fajr.minutes + 24 * 60;
  const nightDuration = fajrNextDay - maghrib.minutes;
  return [
    {
      icon: "🌙",
      name: "Tahajjud",
      time: formatTime(maghrib.minutes + (nightDuration * 2) / 3),
    },
    {
      icon: "🌌",
      name: "Midnight",
      time: formatTime(maghrib.minutes + nightDuration / 2),
    },
  ];
}

function formatAudioTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function readProfile() {
  try {
    const savedProfile = JSON.parse(
      localStorage.getItem("islam24-profile") || "{}",
    );
    return {
      fullName: savedProfile.fullName || "Arsh",
      age: savedProfile.age || "",
      location: savedProfile.location || "",
      gender: savedProfile.gender || "",
      occupation: savedProfile.occupation || "",
      bio: savedProfile.bio || "",
    };
  } catch {
    return {
      fullName: "Arsh",
      age: "",
      location: "",
      gender: "",
      occupation: "",
      bio: "",
    };
  }
}

function App() {
  const [route, setRoute] = useState(() => getRoute(window.location.pathname));
  const [selectedProphet, setSelectedProphet] = useState("");
  const [selectedCompanion, setSelectedCompanion] = useState("");
  const [selectedBattle, setSelectedBattle] = useState("");
  const [selectedCaliph, setSelectedCaliph] = useState("");
  const [selectedMosque, setSelectedMosque] = useState(null);
  const [postsPage, setPostsPage] = useState(1);
  const [now, setNow] = useState(() => new Date());
  const [profile, setProfile] = useState(readProfile);
  const [profileOpen, setProfileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("islam24-theme") === "dark",
  );
  const [surahs, setSurahs] = useState([]);
  const [surahNumber, setSurahNumber] = useState(1);
  const [parahNumber, setParahNumber] = useState(0);
  const [readerAyahs, setReaderAyahs] = useState([]);
  const [quranLoading, setQuranLoading] = useState(false);
  const [quranError, setQuranError] = useState("");
  const [audioQueue, setAudioQueue] = useState([]);
  const [audioQueueIndex, setAudioQueueIndex] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [audioError, setAudioError] = useState("");
  const [shareMessage, setShareMessage] = useState("");
  const [savedPosts, setSavedPosts] = useState({});
  const audioRef = useRef(null);
  const article = route.post || posts[0];
  const nextPrayer = useMemo(() => getNextPrayer(now), [now]);
  const nightPrayerTimes = useMemo(() => getNightPrayerTimes(), []);
  const firstName = profile.fullName.trim().split(/\s+/)[0] || "Arsh";
  const arabicDate = now.toLocaleDateString("en-u-ca-islamic-umalqura", {
  day: "numeric",
  month: "long",
  year: "numeric",
});


const navigate = (page, path = pagePaths[page]) => {
  if (!path) {
    throw new Error(`No route is configured for "${page}".`);
  }
  window.history.pushState(null, "", path);
  setRoute({ page });
  setSelectedProphet("");
  setSelectedCompanion("");
  setSelectedBattle("");
  setSelectedCaliph("");
  setShareMessage("");
  if (page === "posts") setPostsPage(1);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const openArticle = (post) => {
  navigate("article", `/posts/${slugify(post.title)}`);
  setRoute({ page: "article", post });
};

useEffect(() => {
  const onPopState = () => {
    setRoute(getRoute(window.location.pathname));
    setSelectedProphet("");
    setSelectedCompanion("");
    setSelectedBattle("");
    setSelectedCaliph("");
  };
  window.addEventListener("popstate", onPopState);
  return () => window.removeEventListener("popstate", onPopState);
}, []);

useEffect(() => {
  const timer = window.setInterval(() => setNow(new Date()), 30_000);
  return () => window.clearInterval(timer);
}, []);

useEffect(() => {
  document.documentElement.dataset.theme = darkMode ? "dark" : "light";
  localStorage.setItem("islam24-theme", darkMode ? "dark" : "light");
}, [darkMode]);

useEffect(() => {
  if (route.page !== "quran") return undefined;
  const controller = new AbortController();
  fetch("https://api.alquran.cloud/v1/surah", { signal: controller.signal })
    .then((response) => {
      if (!response.ok) throw new Error("Could not load the surah list.");
      return response.json();
    })
    .then((result) => {
      if (result.code !== 200 || !Array.isArray(result.data)) {
        throw new Error(
          "The Quran service returned an unexpected surah list.",
        );
      }
      setSurahs(result.data);
    })
    .catch((error) => {
      if (error.name !== "AbortError") setQuranError(error.message);
    });
  return () => controller.abort();
}, [route.page]);

useEffect(() => {
  if (route.page !== "quran") return undefined;
  const controller = new AbortController();
  setQuranLoading(true);
  setQuranError("");
  setReaderAyahs([]);
  setAudioQueue([]);
  setAudioQueueIndex(0);
  setAudioPlaying(false);
  setAudioCurrentTime(0);
  setAudioDuration(0);

  const loadVerses = async () => {
    try {
      const editions = ["quran-uthmani", "en.sahih", "ar.alafasy"];
      let editionData;
      if (parahNumber) {
        editionData = await Promise.all(
          editions.map(async (edition) => {
            const response = await fetch(
              `https://api.alquran.cloud/v1/juz/${parahNumber}/${edition}`,
              { signal: controller.signal },
            );
            if (!response.ok) {
              throw new Error("Could not load Quran verses for this Parah.");
            }
            const result = await response.json();
            if (result.code !== 200 || !result.data?.ayahs) {
              throw new Error(
                "The Quran service returned incomplete Parah data.",
              );
            }
            return result.data;
          }),
        );
      } else {
        const response = await fetch(
          `https://api.alquran.cloud/v1/surah/${surahNumber}/editions/${editions.join(",")}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Could not load Quran verses.");
        const result = await response.json();
        if (result.code !== 200 || !Array.isArray(result.data)) {
          throw new Error(
            "The Quran service returned incomplete verse data.",
          );
        }
        editionData = result.data;
      }

      const [arabic, translation, recitation] = editionData;
      if (
        !arabic?.ayahs?.length ||
        !translation?.ayahs ||
        !recitation?.ayahs
      ) {
        throw new Error("The Quran service returned incomplete verse data.");
      }
      const verses = arabic.ayahs.map((ayah, index) => ({
        ...ayah,
        translation: translation.ayahs[index]?.text || "",
        audio: recitation.ayahs[index]?.audio || "",
      }));
      setReaderAyahs(verses);
      const playableAyahs = verses.filter((ayah) => ayah.audio);
      setAudioQueue(playableAyahs);
      setAudioQueueIndex(0);
      if (!playableAyahs.length) {
        setAudioError(
          "Recitation audio is not available for this selection.",
        );
      } else {
        setAudioError("");
      }
    } catch (error) {
      if (error.name !== "AbortError") setQuranError(error.message);
    } finally {
      if (!controller.signal.aborted) setQuranLoading(false);
    }
  };
  loadVerses();

  return () => controller.abort();
}, [route.page, surahNumber, parahNumber]);

useEffect(() => {
  const audio = audioRef.current;
  if (!audio || !audioQueue[audioQueueIndex]) return;
  if (!audioPlaying) {
    audio.pause();
    return;
  }
  audio.play().catch(() => {
    setAudioPlaying(false);
    setAudioError(
      "Audio could not start. Use the player controls to try again.",
    );
  });
}, [audioQueue, audioQueueIndex, audioPlaying]);

useEffect(() => {
  if (!profileOpen) return undefined;
  const closeOnEscape = (event) => {
    if (event.key === "Escape") setProfileOpen(false);
  };
  window.addEventListener("keydown", closeOnEscape);
  return () => window.removeEventListener("keydown", closeOnEscape);
}, [profileOpen]);

const showHero = (page, title) => {
  const [eyebrow, defaultTitle, image] = pageInfo[page] || [];
  return (
    <header
      className={`page-hero ${page}`}
      style={image ? { "--hero-image": `url("${image}")` } : undefined}
    >
      <button className="back-link" onClick={() => navigate("home")}>
        ← Home
      </button>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title || defaultTitle}</h1>
      <p>{pageDescriptions[page]}</p>
    </header>
  );
};

const handleProfileSave = (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const updatedProfile = Object.fromEntries(formData.entries());
  try {
    localStorage.setItem("islam24-profile", JSON.stringify(updatedProfile));
  } catch {
    window.alert("Could not save your profile on this device.");
    return;
  }
  setProfile(updatedProfile);
  setProfileOpen(false);
};

const shareArticle = async () => {
  if (!navigator.share) {
    setShareMessage("Sharing is not supported here. Use Copy link instead.");
    return;
  }
  try {
    await navigator.share({
      title: article.title,
      text: `${article.tag}: ${article.title}`,
      url: window.location.href,
    });
    setShareMessage("Article shared.");
  } catch (error) {
    if (error.name !== "AbortError") {
      setShareMessage("Could not share this article. Please try again.");
    }
  }
};

const copyArticleLink = async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    setShareMessage("Article link copied.");
  } catch {
    setShareMessage(
      "Could not copy the link. Check browser clipboard permissions.",
    );
  }
};

const toggleAudioPlayback = () => {
  if (!audioQueue.length) return;
  setAudioError("");
  setAudioPlaying((playing) => !playing);
};

const skipAudio = (offset) => {
  const nextIndex = audioQueueIndex + offset;
  if (nextIndex < 0 || nextIndex >= audioQueue.length) return;
  setAudioError("");
  setAudioCurrentTime(0);
  setAudioDuration(0);
  setAudioQueueIndex(nextIndex);
  setAudioPlaying(true);
};

const handleAudioEnded = () => {
  if (audioQueueIndex + 1 >= audioQueue.length) {
    setAudioPlaying(false);
    return;
  }
  setAudioCurrentTime(0);
  setAudioDuration(0);
  setAudioQueueIndex((index) => index + 1);
  setAudioPlaying(true);
};

const dateTime = (
  <time dateTime={now.toISOString()}>

    <strong className="welcome-time">
      {now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </strong>

    <span className="date-value">
      {now.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })}
    </span>

    <span className="date-value islamic-date" lang="ar" dir="rtl">
      {arabicDate}
    </span>
    
  </time>
);

  return (
    <div className="app-shell">
      <header className="topbar">
        <button
          className="brand"
          onClick={() => navigate("home")}
          aria-label="Go to home"
        >
          <span className="brand-mark" aria-hidden="true">
            ☾
          </span>
          <span>
            Islam<span className="brand-light">24</span>
          </span>
        </button>
        <nav className="top-links" aria-label="Main navigation">
          {[
            ["quran", "Quran", "▤"],
            ["prayer", "Prayer times", "◷", true],
            ["posts", "Posts", "✦"],
            ["donate", "Donate", "♡"],
          ].map(([page, label, icon, desktopOnly]) => (
            <button
              key={page}
              onClick={() => navigate(page)}
              aria-label={label}
              aria-current={route.page === page ? "page" : undefined}
              className={desktopOnly ? "desktop-only-nav" : ""}
            >
              <span className="top-nav-label">{label}</span>
              <span className="top-nav-icon" aria-hidden="true">
                {icon}
              </span>
            </button>
          ))}
        </nav>
        <button
          className="theme-toggle"
          onClick={() => setDarkMode((enabled) => !enabled)}
          aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          aria-pressed={darkMode}
          title={`Switch to ${darkMode ? "light" : "dark"} mode`}
        >
          <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
        </button>
      </header>

      <main className="main-content">
        {route.page === "home" && (
          <>
            <section
              className="welcome-strip"
              style={{ "--welcome-image": `url("${photos.sunrise}")` }}
            >
              <button
                className="welcome-user"
                onClick={() => setProfileOpen(true)}
                aria-label="Open your user profile"
              >
                <span className="avatar" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <circle cx="12" cy="8" r="3.5" />
                    <path d="M5 20c.5-3.7 3-5.7 7-5.7s6.5 2 7 5.7" />
                  </svg>
                </span>
                <span>
                  <small>ASSALAMU ALAIKUM</small>
                  <strong>Hello! {firstName}</strong>
                </span>
              </button>
              <div className="welcome-datetime">{dateTime}</div>
            </section>

            <section className="section-block prayer-home-section">
              <div className="section-heading">
                <h2>Next Prayer</h2>
                <button onClick={() => navigate("prayer")}>
                  All prayer times →
                </button>
              </div>
              <PrayerHighlight
                prayer={nextPrayer}
                onClick={() => navigate("prayer")}
              />
            </section>

            <section
              className="section-block"
              aria-label="Categories"
            >
              <div className="section-heading">
                <h2>Categories</h2>
                <button onClick={() => navigate("other")}>Explore all →</button>
              </div>
              <div className="category-grid">
                {categories.map(([icon, label, page]) => (
                  <button
                    className="category-card"
                    key={page}
                    onClick={() => navigate(page)}
                  >
                    <span className="category-icon" aria-hidden="true">
                      {icon}
                    </span>
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </section>

            <section className="daily-highlights" aria-label="Daily reminders">
              <article
                className="daily-card ayat-card"
                style={{ "--card-image": `url("${photos.road}")` }}
              >
                <span className="eyebrow">AYAT OF THE DAY</span>
                <p>“Indeed, with hardship comes ease.”</p>
                <small>Ash-Sharh 94:5–6</small>
              </article>
              <DailyHadith />
            </section>
          </>
        )}

        {route.page === "prayer" && (
          <>
            {showHero("prayer")}
            <p className="location-note">
              Sample schedule shown in India local time. Actual prayer times
              depend on your location and calculation method. Midnight is
              halfway between Maghrib and the next Fajr; Tahajjud begins at the
              start of the final third.
            </p>

            {/* PRAYER TIMINGs */}

            <h2 className="prayer-list-heading">
              5 Prayer Timings:
            </h2>
            <section className="prayer-list" aria-label="Daily prayer times">
              {prayers.map((prayer) => (
                <div className="prayer-row" key={prayer.name}>
                  <span className="prayer-emoji" aria-hidden="true">
                    {prayer.icon}
                  </span>
                  <strong>{prayer.name}</strong>
                  <span>{prayer.time}</span>
                </div>
              ))}
            </section>

            {/* OTHER TIMINGs */}

            <h2 className="prayer-list-heading">
              Other Timings:
            </h2>
            <section
              className="prayer-auxiliary-grid"
              aria-label="Sunrise, sunset, and night prayer times"
            >
              <div className="prayer-row auxiliary-prayer">
                <span className="prayer-emoji" aria-hidden="true">
                  🌄
                </span>
                <strong>Sunrise</strong>
                <span>05:58 AM</span>
              </div>
              <div className="prayer-row auxiliary-prayer">
                <span className="prayer-emoji" aria-hidden="true">
                  🌅
                </span>
                <strong>Sunset</strong>
                <span>05:22 PM</span>
              </div>
              {nightPrayerTimes.map((prayer) => (
                <div className="prayer-row auxiliary-prayer" key={prayer.name}>
                  <span className="prayer-emoji" aria-hidden="true">
                    {prayer.icon}
                  </span>
                  <strong>{prayer.name}</strong>
                  <span>{prayer.time}</span>
                </div>
              ))}
            </section>
          </>
        )}

        {route.page === "quran" && (
          <>
            {showHero("quran")}
            <section className="panel quran-controls">
              <div className="select-row">
                <label>
                  Surah
                  <select
                    value={parahNumber ? "" : surahNumber}
                    onChange={(event) => {
                      setParahNumber(0);
                      setSurahNumber(Number(event.target.value));
                    }}
                  >
                    {surahs.map((surah) => (
                      <option key={surah.number} value={surah.number}>
                        {surah.number}. {surah.englishName}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Parah
                  <select
                    value={parahNumber}
                    onChange={(event) =>
                      setParahNumber(Number(event.target.value))
                    }
                  >
                    <option value={0}>Choose Parah</option>
                    {Array.from({ length: 30 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        Parah {index + 1}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              {quranLoading && (
                <p className="inline-note">Loading Quran verses…</p>
              )}
              {quranError && (
                <p className="error-message" role="alert">
                  {quranError} Check your internet connection and try again.
                </p>
              )}
              {audioError && (
                <p className="error-message" role="alert">
                  {audioError}
                </p>
              )}
              {audioQueue.length > 0 && (
                <div className="quran-player">
                  <div className="player-status">
                    <span>
                      Ayah {audioQueueIndex + 1} of {audioQueue.length}
                    </span>
                    <span className="player-actions">
                      <button
                        className="player-icon-button"
                        onClick={() => skipAudio(-1)}
                        disabled={audioQueueIndex === 0}
                        aria-label="Previous ayah"
                        title="Previous ayah"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M6 5v14M19 6l-9 6 9 6z" />
                        </svg>
                      </button>
                      <button
                        className="player-icon-button player-toggle-button"
                        onClick={toggleAudioPlayback}
                        aria-label={
                          audioPlaying ? "Pause recitation" : "Play recitation"
                        }
                        title={audioPlaying ? "Pause" : "Play"}
                      >
                        {audioPlaying ? (
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8 5h3v14H8zM15 5h3v14h-3z" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" aria-hidden="true">
                            <path d="m8 5 12 7-12 7z" />
                          </svg>
                        )}
                      </button>
                      <button
                        className="player-icon-button"
                        onClick={() => skipAudio(1)}
                        disabled={audioQueueIndex >= audioQueue.length - 1}
                        aria-label="Next ayah"
                        title="Next ayah"
                      >
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18 5v14M5 6l9 6-9 6z" />
                        </svg>
                      </button>
                    </span>
                  </div>
                  <audio
                    ref={audioRef}
                    src={audioQueue[audioQueueIndex]?.audio}
                    onEnded={handleAudioEnded}
                    onPlay={() => setAudioPlaying(true)}
                    onTimeUpdate={(event) =>
                      setAudioCurrentTime(event.currentTarget.currentTime)
                    }
                    onLoadedMetadata={(event) =>
                      setAudioDuration(event.currentTarget.duration)
                    }
                    onError={() =>
                      setAudioError(
                        "This recitation could not be loaded. Try another ayah or check your connection.",
                      )
                    }
                  >
                    Your browser does not support audio playback.
                  </audio>
                  <input
                    type="range"
                    className="audio-progress"
                    min="0"
                    max={audioDuration || 0}
                    step="0.1"
                    value={Math.min(audioCurrentTime, audioDuration)}
                    disabled={!audioDuration}
                    onChange={(event) => {
                      const nextTime = Number(event.target.value);
                      audioRef.current.currentTime = nextTime;
                      setAudioCurrentTime(nextTime);
                    }}
                    aria-label="Recitation progress"
                  />
                  <div className="audio-time-labels" aria-live="off">
                    <span>{formatAudioTime(audioCurrentTime)}</span>
                    <span>{formatAudioTime(audioDuration)}</span>
                  </div>
                </div>
              )}
            </section>
            {!quranLoading && readerAyahs.length > 0 && (
              <section className="panel surah-panel">
                <h2>
                  {parahNumber
                    ? `Parah ${parahNumber}`
                    : `${surahNumber}. ${
                        surahs.find((surah) => surah.number === surahNumber)
                          ?.englishName || "Surah"
                      }`}
                </h2>
                {readerAyahs.map((ayah) => (
                  <article className="verse" key={ayah.number}>
                    <div className="verse-heading">
                      <span className="ayah-number">
                        {ayah.surah?.englishName
                          ? `${ayah.surah.englishName} · ${ayah.numberInSurah}`
                          : ayah.numberInSurah}
                      </span>
                    </div>
                    <p className="arabic" lang="ar" dir="rtl">
                      {ayah.text}
                    </p>
                    <p>{ayah.translation}</p>
                  </article>
                ))}
              </section>
            )}
          </>
        )}

        {route.page === "mosques" && (
          <>
            {showHero("mosques")}
            <div className="mosque-grid">
              {mosques.map((mosque) => (
                <button
                  className={`mosque-card mosque-select ${
                    selectedMosque?.name === mosque.name ? "selected" : ""
                  }`}
                  key={mosque.name}
                  onClick={() => setSelectedMosque(mosque)}
                  aria-pressed={selectedMosque?.name === mosque.name}
                >
                  <img src={mosque.url} alt="" loading="lazy" />
                  <span className="mosque-select-name">{mosque.name}</span>
                  <span className="mosque-select-location">
                    {mosque.city}, {mosque.country}
                  </span>
                </button>
              ))}
            </div>
            {selectedMosque ? (
              <article className="mosque-detail-card panel">
                <img
                  src={selectedMosque.url}
                  alt={selectedMosque.name}
                  loading="lazy"
                />
                <div className="mosque-copy">
                  <h2>{selectedMosque.name}</h2>
                  <p className="mosque-location">
                    {selectedMosque.city}, {selectedMosque.country}
                  </p>
                  <p>{selectedMosque.detail}</p>
                  <small>{selectedMosque.period}</small>
                  <a
                    href={selectedMosque.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Image: {selectedMosque.credit} · {selectedMosque.license}
                  </a>
                </div>
              </article>
            ) : (
              <SelectionPanel
                empty="Choose a mosque"
                description="Select a mosque above to see its image, location, history, and dates."
              />
            )}
          </>
        )}

        {route.page === "allah-names" && (
          <>
            {showHero("allah-names")}
            <div className="names-grid allah-grid">
              {allahNames.map(([name, meaning], index) => (
                <article className="name-card" key={name}>
                  <span className="name-index">{index + 1}</span>
                  <h2>{name}</h2>
                  <p>{meaning}</p>
                </article>
              ))}
            </div>
          </>
        )}

        {route.page === "names" && (
          <>
            {showHero("names")}
            <NameList title="Boys' names" names={boysNames} />
            <NameList title="Girls' names" names={girlsNames} />
          </>
        )}

        {route.page === "donate" && (
          <>
            {showHero("donate")}
            <section className="panel donation-panel">
              <span className="donation-icon" aria-hidden="true">
                🤲
              </span>
              <h2>Give with care</h2>
              <p>
                Use the bank details below to make a donation. This site does
                not process payments; please verify the details before sending
                money.
              </p>
              <dl className="detail-list donation-details">
                <DetailRow label="Account number" value="3681152474" />
                <DetailRow label="IFSC code" value="CBIN0257416" />
                <DetailRow label="Branch" value="Naugarh" />
                <DetailRow label="Account type" value="Savings" />
                <DetailRow label="Account name" value="Arshad Waseem" />
              </dl>
              <div className="demo-payment-qr">
                <DemoQrCode />
                <strong>Demo QR code</strong>
                <span>Not scannable for payment</span>
              </div>
              <div className="accepted-cards">
                <strong>Cards accepted</strong>
                <span>VISA · Mastercard · RuPay · Other major cards</span>
                <small>This page does not process card payments.</small>
              </div>
            </section>
          </>
        )}

        {route.page === "books" && (
          <>
            {showHero("books")}
            <p className="intro-copy">
              Select a book to open its available PDF or trusted online edition.
            </p>
            {[
              ["Hadith", bookTitles.filter((book) => book.subject === "Hadith")],
              ["Quran", bookTitles.filter((book) => book.subject !== "Hadith")],
            ].map(([category, books]) => (
              <section className="book-category" key={category}>
                <h2>{category}</h2>
                <div className="book-grid">
                  {books.map((book) => (
                    <a
                      className="book-card panel"
                      href={book.url}
                      key={book.title}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="book-icon" aria-hidden="true">
                        📖
                      </span>
                      <span className="book-subject">{book.subject}</span>
                      <h3>{book.title}</h3>
                      <span className="book-open">Open {book.format} ↗</span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </>
        )}

        {route.page === "battles" && (
          <>
            {showHero("battles")}
            {battleSections.map((section) => (
              <section className="list-section" key={section.title}>
                <h2>{section.title}</h2>
                <div className="simple-grid compact-list-grid">
                  {section.events.map((battle) => (
                    <button
                      className={`simple-card ${
                        selectedBattle === battle ? "selected" : ""
                      }`}
                      key={battle}
                      onClick={() => setSelectedBattle(battle)}
                    >
                      <span>{battle}</span>
                      <span className="chevron">›</span>
                    </button>
                  ))}
                </div>
              </section>
            ))}
            {selectedBattle ? (
              <BattleDetails
                name={selectedBattle}
                profile={battleProfiles[selectedBattle]}
              />
            ) : (
              <SelectionPanel
                empty="Choose a battle or campaign"
                description="Select an event to view its historical details."
              />
            )}
          </>
        )}

        {route.page === "prophets" && (
          <>
            {showHero("prophets")}
            <section className="list-section">
              <h2>The 25 prophets named in the Quran</h2>
              <p className="intro-copy">
                The Quran does not preserve a biography for every prophet. We
                show documented notes and references rather than add unsupported
                details to reach a number.
              </p>
              <div className="simple-grid compact-list-grid">
                {prophetNames.map((name) => (
                  <button
                    className={`simple-card prophet-card ${
                      selectedProphet === name ? "selected" : ""
                    }`}
                    key={name}
                    onClick={() => setSelectedProphet(name)}
                  >
                    <span className="prophet-icon" aria-hidden="true">
                      {prophetIcons[name] || "🌙"}
                    </span>
                    <span>
                      Hazrat {name}{" "}
                      <span className="arabic-small" lang="ar">
                        عليه السلام
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </section>
            {selectedProphet ? (
              <ProphetDetails
                name={selectedProphet}
                profile={prophetProfiles[selectedProphet]}
              />
            ) : (
              <SelectionPanel
                empty="Choose a prophet"
                description="Select a name to see the sourced profile."
              />
            )}
          </>
        )}

        {route.page === "sahaba" && (
          <>
            {showHero("sahaba")}
            <section className="list-section">
              <h2>The ten companions</h2>
              <div className="simple-grid compact-list-grid">
                {companions.map((name) => (
                  <button
                    className={`simple-card ${
                      selectedCompanion === name ? "selected" : ""
                    }`}
                    key={name}
                    onClick={() => setSelectedCompanion(name)}
                  >
                    <span className="sahaba-icon" aria-hidden="true">
                      {companionIcons[name] || "🌙"}
                    </span>
                    <span>{name}</span>
                  </button>
                ))}
              </div>
            </section>
            {selectedCompanion ? (
              <CompanionDetails
                name={selectedCompanion}
                profile={companionProfiles[selectedCompanion]}
              />
            ) : (
              <SelectionPanel
                empty="Choose a companion"
                description="Select a name to see biographical details."
              />
            )}
          </>
        )}

        {route.page === "caliphs" && (
          <>
            {showHero("caliphs")}
            <section className="list-section">
              <h2>The four Rightly Guided Caliphs</h2>
              <div className="simple-grid">
                {caliphs.map((name) => (
                  <button
                    className={`simple-card ${
                      selectedCaliph === name ? "selected" : ""
                    }`}
                    key={name}
                    onClick={() => setSelectedCaliph(name)}
                  >
                    {name}
                    <span className="chevron">›</span>
                  </button>
                ))}
              </div>
            </section>
            {selectedCaliph ? (
              <CompanionDetails
                name={selectedCaliph}
                profile={caliphProfiles[selectedCaliph]}
              />
            ) : (
              <SelectionPanel
                empty="Choose a caliph"
                description="Select a tile to see the caliph’s father, birth, death, age, nicknames, and important notes."
              />
            )}
          </>
        )}

        {(route.page === "pillars-of-islam" ||
          route.page === "pillars-of-imaan") && (
          <PillarsPage
            page={route.page}
            showHero={showHero}
            items={
              route.page === "pillars-of-islam" ? islamPillars : imaanPillars
            }
          />
        )}

        {route.page === "other" && (
          <>
            {showHero("other")}
            <div className="category-grid all-category-grid">
              {allCategories.map(([icon, label, page]) => (
                <button
                  className="category-card"
                  key={page}
                  onClick={() => navigate(page)}
                >
                  <span className="category-icon" aria-hidden="true">
                    {icon}
                  </span>
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {topicContent[route.page] && (
          <TopicPage
            page={route.page}
            showHero={showHero}
            sections={topicContent[route.page]}
          />
        )}

        {route.page === "posts" && (
          <>
            {showHero("posts")}
            <div className="section-heading posts-heading">
              <h2>Stories for the heart</h2>
              <span className="sparkle" aria-hidden="true">
                ✦
              </span>
            </div>
            <PostGrid
              posts={posts.slice(
                (postsPage - 1) * postsPerPage,
                postsPage * postsPerPage,
              )}
              onSelect={openArticle}
            />
            <nav className="posts-pagination" aria-label="Posts pages">
              <button
                onClick={() => setPostsPage((page) => Math.max(1, page - 1))}
                disabled={postsPage === 1}
                aria-label="Previous posts page"
              >
                Previous
              </button>
              {Array.from(
                { length: postsPageCount },
                (_, index) => index + 1,
              ).map((page) => (
                <button
                  key={page}
                  className={postsPage === page ? "selected" : ""}
                  onClick={() => {
                    setPostsPage(page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  aria-current={postsPage === page ? "page" : undefined}
                  aria-label={`Posts page ${page}`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() =>
                  setPostsPage((page) =>
                    Math.min(postsPageCount, page + 1),
                  )
                }
                disabled={postsPage === postsPageCount}
                aria-label="Next posts page"
              >
                Next
              </button>
            </nav>
          </>
        )}

        {route.page === "article" && (
          <>
            {showHero("posts", article.title)}
            <article className="article-content panel">
              <img className="article-image" src={article.image} alt="" />
              <span className="article-tag">{article.tag}</span>
              <p className="article-summary">{article.summary}</p>
              <small>{article.time}</small>
              {article.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {article.quote && (
                <blockquote>
                  “{article.quote}”<cite> — {article.reference}</cite>
                </blockquote>
              )}
              <button
                className={`save-button ${
                  savedPosts[article.title] ? "saved" : ""
                }`}
                onClick={() =>
                  setSavedPosts((current) => ({
                    ...current,
                    [article.title]: !current[article.title],
                  }))
                }
              >
                {savedPosts[article.title]
                  ? "✓ Saved for later"
                  : "♡ Save reflection"}
              </button>
              <section
                className="article-sharing"
                aria-label="Share this article"
              >
                <h2>Share this reflection</h2>
                <div className="share-actions">
                  <button onClick={shareArticle}>Share</button>
                  <button onClick={copyArticleLink}>Copy link</button>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(
                      `${article.title} ${window.location.href}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
                {shareMessage && (
                  <p className="share-message" role="status">
                    {shareMessage}
                  </p>
                )}
              </section>
            </article>
          </>
        )}

        {route.page === "not-found" && (
          <section className="panel not-found">
            <h1>Page not found</h1>
            <p>This page does not exist or may have moved.</p>
            <button className="primary-button" onClick={() => navigate("home")}>
              Return home
            </button>
          </section>
        )}
      </main>

      {/* <nav className="bottom-nav" aria-label="Quick navigation">
        {[
          ["posts", "Posts", "▤"],
          ["donate", "Donate", "♡"],
          ["quran", "Quran", "▤"],
        ].map(([page, label, icon]) => (
          <button
            className={`nav-item ${route.page === page ? "active" : ""}`}
            key={page}
            onClick={() => navigate(page)}
            aria-label={label}
            aria-current={route.page === page ? "page" : undefined}
          >
            <span aria-hidden="true">{icon}</span>
            <small>{label}</small>
          </button>
        ))}
      </nav> */}

      {profileOpen && (
        <div
          className="profile-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setProfileOpen(false);
          }}
        >
          <section
            className="profile-modal panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
          >
            <div className="modal-heading">
              <div>
                <span className="eyebrow">YOUR ACCOUNT</span>
                <h2 id="profile-title">Your profile</h2>
              </div>
              <button
                className="modal-close"
                onClick={() => setProfileOpen(false)}
                aria-label="Close profile"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleProfileSave} className="profile-form">
              <label>
                Full name
                <input
                  name="fullName"
                  defaultValue={profile.fullName}
                  required
                />
              </label>
              <label>
                Age
                <input
                  name="age"
                  type="number"
                  min="1"
                  max="120"
                  defaultValue={profile.age}
                />
              </label>
              <label>
                Location
                <input name="location" defaultValue={profile.location} />
              </label>
              <label>
                Gender
                <select name="gender" defaultValue={profile.gender}>
                  <option value="">Prefer not to say</option>
                  <option value="Woman">Woman</option>
                  <option value="Man">Man</option>
                  <option value="Non-binary">Non-binary</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label>
                Occupation
                <input name="occupation" defaultValue={profile.occupation} />
              </label>
              <label className="profile-full-width">
                About you
                <textarea name="bio" rows="3" defaultValue={profile.bio} />
              </label>
              <div className="profile-actions profile-full-width">
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setProfileOpen(false)}
                >
                  Cancel
                </button>
                <button className="primary-button" type="submit">
                  Save profile
                </button>
              </div>
              <p className="profile-privacy profile-full-width">
                Your profile is stored only in this browser.
              </p>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

function PrayerHighlight({ prayer, onClick }) {
  return (
    <button className="prayer-highlight" onClick={onClick}>
      <span className="prayer-highlight-main">
        <span className="prayer-highlight-icon" aria-hidden="true">
          {prayer.icon}
        </span>
        <span>
          <small>UP NEXT</small>
          <strong>{prayer.name}</strong>
        </span>
      </span>
      <span>
        <small>AZAN</small>
        <strong>{prayer.azan}</strong>
      </span>
      <span>
        <small>JAMAAH</small>
        <strong>{prayer.jamaah}</strong>
      </span>
    </button>
  );
}

function PillarsPage({ page, showHero, items }) {
  const [selectedPillar, setSelectedPillar] = useState(items[0]);
  const pillarTabRefs = useRef([]);
  const selectedIndex = items.indexOf(selectedPillar);

  return (
    <>
      {showHero(page)}
      <div
        className={`pillar-grid ${
          items.length === 5 ? "pillar-grid-islam" : "pillar-grid-imaan"
        }`}
        role="tablist"
        aria-label="Pillars"
      >
        {items.map((item, index) => (
          <button
            className={`pillar-tile ${
              selectedPillar?.title === item.title ? "selected" : ""
            }`}
            key={item.title}
            onClick={() => setSelectedPillar(item)}
            id={`pillar-tab-${index}`}
            role="tab"
            aria-selected={selectedPillar?.title === item.title}
            aria-controls="pillar-details"
            tabIndex={selectedPillar?.title === item.title ? 0 : -1}
            ref={(element) => {
              pillarTabRefs.current[index] = element;
            }}
            onKeyDown={(event) => {
              let nextIndex;
              if (event.key === "ArrowRight") {
                nextIndex = (index + 1) % items.length;
              } else if (event.key === "ArrowLeft") {
                nextIndex = (index - 1 + items.length) % items.length;
              } else if (event.key === "Home") {
                nextIndex = 0;
              } else if (event.key === "End") {
                nextIndex = items.length - 1;
              } else {
                return;
              }
              event.preventDefault();
              setSelectedPillar(items[nextIndex]);
              pillarTabRefs.current[nextIndex]?.focus();
            }}
          >
            <span className="pillar-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong>{item.title}</strong>
            <span className="chevron" aria-hidden="true">
              ›
            </span>
          </button>
        ))}
      </div>
      <section
        className="panel detail-panel pillar-detail"
        id="pillar-details"
        role="tabpanel"
        aria-labelledby={`pillar-tab-${selectedIndex}`}
        aria-live="polite"
      >
        <h2>{selectedPillar.title}</h2>
        <p>{selectedPillar.detail}</p>
        <h3>Key details</h3>
        <ul className="profile-points">
          {selectedPillar.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <h3>Putting it into practice</h3>
        <p>{selectedPillar.practice}</p>
        <p className="detail-reference">
          Reference: {selectedPillar.reference}
        </p>
      </section>
    </>
  );
}

function TopicPage({ page, showHero, sections }) {
  return (
    <>
      {showHero(page)}
      <div className="topic-grid">
        {sections.map((section) => (
          <section className="panel detail-panel topic-card" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="detail-reference">{section.reference}</p>
          </section>
        ))}
      </div>
    </>
  );
}

function DailyHadith() {
  return (
    <article
      className="daily-card hadith-card"
      style={{ "--card-image": `url("${photos.mosque}")` }}
    >
      <span className="eyebrow">HADITH OF THE DAY</span>
      <p>“Make things easy and do not make them difficult.”</p>
      <small>Sahih al-Bukhari 69 · Sahih Muslim 1734</small>
    </article>
  );
}

function DemoQrCode() {
  const modules = Array.from({ length: 21 }, (_, y) =>
    Array.from({ length: 21 }, (_, x) => {
      const finder = [
        [0, 0],
        [14, 0],
        [0, 14],
      ].find(
        ([left, top]) =>
          x >= left && x < left + 7 && y >= top && y < top + 7,
      );

      if (finder) {
        const localX = x - finder[0];
        const localY = y - finder[1];
        return (
          localX === 0 ||
          localX === 6 ||
          localY === 0 ||
          localY === 6 ||
          (localX >= 2 &&
            localX <= 4 &&
            localY >= 2 &&
            localY <= 4)
        );
      }

      return (x * 17 + y * 31 + x * y * 7) % 11 < 5;
    }),
  );

  return (
    <div className="demo-qr-frame">
      <div
        className="demo-qr-code"
        role="img"
        aria-label="Decorative demo QR code. It cannot be scanned for payment."
      >
        {modules.flatMap((row, y) =>
          row.map((isDark, x) => (
            <span
              className={isDark ? "demo-qr-module is-dark" : "demo-qr-module"}
              key={`${x}-${y}`}
            />
          )),
        )}
      </div>
    </div>
  );
}

function PostGrid({ posts, onSelect }) {
  return (
    <div className="post-grid">
      {posts.map((post) => (
        <button
          className="post-card"
          key={post.title}
          onClick={() => onSelect(post)}
          aria-label={`Read ${post.title}, tagged ${post.tag}`}
        >
          <img src={post.image} alt="" loading="lazy" />
          <span className="post-tag">{post.tag}</span>
          <div className="post-card-copy">
            <h3>{post.title}</h3>
          </div>
        </button>
      ))}
    </div>
  );
}

function BattleDetails({ name, profile }) {
  if (!profile) {
    return (
      <SelectionPanel
        selected={name}
        empty=""
        description="No verified details are available for this event."
      />
    );
  }
  return (
    <section className="panel detail-panel">
      <h2>{name}</h2>
      <dl className="detail-list">
        <DetailRow label="Year" value={profile.year} />
        <DetailRow label="Against" value={profile.against} />
        <DetailRow label="Leaders" value={profile.leaders} />
        <DetailRow label="Outcome" value={profile.winner} />
        <DetailRow label="Location" value={profile.location} />
      </dl>
      <p>{profile.summary}</p>
      <p className="detail-reference">Sources: {profile.reference}</p>
    </section>
  );
}

function ProphetDetails({ name, profile }) {
  if (!profile) {
    return (
      <SelectionPanel
        selected={name}
        empty=""
        description="No sourced profile is available."
      />
    );
  }
  return (
    <section className="panel detail-panel">
      <h2>
        <span className="prophet-icon" aria-hidden="true">
          {prophetIcons[name] || "🌙"}
        </span>
        Hazrat {name} عليه السلام
      </h2>
      <dl className="detail-list">
        <DetailRow label="Birth" value={profile.birth} />
        <DetailRow label="Death" value={profile.death} />
      </dl>
      <p>{profile.summary}</p>
      <h3>Quran-based notes ({profile.points.length})</h3>
      <ul className="profile-points">
        {profile.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="detail-reference">
        Quran references: {profile.references}. The Quran gives limited
        biographical details for some prophets, so available note counts vary.
        Dates and details not established by reliable sources are not guessed.
      </p>
    </section>
  );
}

function CompanionDetails({ name, profile }) {
  if (!profile) {
    return (
      <SelectionPanel
        selected={name}
        empty=""
        description="No sourced profile is available."
      />
    );
  }
  return (
    <section className="panel detail-panel">
      <h2>{name}</h2>
      <dl className="detail-list">
        <DetailRow label="Father" value={profile.father} />
        <DetailRow label="Birth" value={profile.birth} />
        <DetailRow label="Death" value={profile.death} />
        <DetailRow label="Total age" value={profile.age} />
        <DetailRow label="Nicknames" value={profile.nicknames} />
      </dl>
      <h3>Important notes</h3>
      <ul className="profile-points">
        {profile.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="detail-reference">
        Early historical sources sometimes differ; dates and ages are
        approximate where appropriate.
      </p>
    </section>
  );
}

function NameList({ title, names }) {
  return (
    <section className="list-section">
      <h2>{title}</h2>
      <div className="names-grid">
        {names.map(([name, meaning]) => (
          <article className="name-card" key={name}>
            <h3>{name}</h3>
            <p>{meaning}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SelectionPanel({ selected, empty, description }) {
  return (
    <section className="panel selection-panel">
      <h2>{selected || empty}</h2>
      <p>{description}</p>
    </section>
  );
}

function DetailRow({ label, value }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value || "Not reliably recorded"}</dd>
    </div>
  );
}

export default App;
