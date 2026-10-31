"use strict";
const EPISODES = [
  {
    "id": "k2-1",
    "season": 2,
    "episode": 1,
    "title": "ילדים בפנימיות",
    "description": "הפרק מפגיש ילדים שחיים בפנימיות ומציג את השגרה מחוץ לבית המשפחה. השאלות נוגעות לחוקים במסגרת, לגעגועים הביתה ולאפשרות שילד ירצה לעזוב את הפנימייה.",
    "grade": 5,
    "level": 3,
    "warnings": [
      "פרידה מהבית",
      "משפחה"
    ],
    "topic": "משפחה",
    "videoId": "jJuZ9y2XGTI",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם ניסיתם לברוח מהפנימייה? אילו חוקים יש שם? האם אתם מתגעגעים הביתה?",
    "date": "2021-05-02",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8374950",
    "videoVerified": true
  },
  {
    "id": "k2-2",
    "season": 2,
    "episode": 2,
    "title": "ילדים עם תסמונת טורט",
    "description": "ילדים עם תסמונת טורט משתתפים בפרק ומשיבים לשאלות ישירות על חייהם. התקציר הזמין מאשר את נושא הפרק, אך אינו מפרט שאלות מסוימות, ולכן אין כאן ייחוס של אמירות או חוויות ספציפיות למשתתפים.",
    "grade": 4,
    "level": 2,
    "warnings": [
      "לעג",
      "דעות קדומות"
    ],
    "topic": "נגישות",
    "videoId": "10JO2bt4hvo",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "שאלות אישיות על החיים עם תסמונת טורט. אין פירוט שאלות מאומת בתקציר הזמין.",
    "date": "2021-05-09",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8374951",
    "videoVerified": false
  },
  {
    "id": "k2-3",
    "season": 2,
    "episode": 3,
    "title": "אלרגיות מסכנות חיים",
    "description": "ילדים עם אלרגיות מסכנות חיים מספרים על ההתמודדות היומיומית עם אוכל ומצבים חברתיים. הפרק עוסק גם בחומרת התגובה האלרגית, בהזמנות לימי הולדת ובמאכלים שאינם יכולים לאכול.",
    "grade": 4,
    "level": 3,
    "warnings": [
      "סכנת מוות",
      "מחלה"
    ],
    "topic": "בריאות",
    "videoId": "EB6_d2MtypE",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "עד כמה האלרגיה מסוכנת? האם מזמינים אתכם לימי הולדת? מה הייתם רוצים לאכול?",
    "date": "2021-05-16",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8374952",
    "videoVerified": false
  },
  {
    "id": "k2-4",
    "season": 2,
    "episode": 4,
    "title": "חרדים",
    "description": "ילדים חרדים משיבים לשאלות על כללי החיים והאמונה שלהם. בין הנושאים: לבוש בחום הקיץ, מנהגים וקושי אפשרי לשמור על כללים דתיים.",
    "grade": 4,
    "level": 2,
    "warnings": [
      "זהות דתית"
    ],
    "topic": "זהות ותרבות",
    "videoId": "3HK-lNtx6S4",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם קשה לשמור על חלק מהכללים? איך מסתדרים עם בגדים ארוכים בקיץ? מאיפה נובעת האמונה?",
    "date": "2021-05-23",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8374953",
    "videoVerified": false
  },
  {
    "id": "k2-5",
    "season": 2,
    "episode": 5,
    "title": "ילדים ממוצא אתיופי",
    "description": "ילדים ממוצא אתיופי משיבים לשאלות על זהות, צבע עור וסטריאוטיפים. בפרק עולות שאלות ישירות על יחס המשטרה ליוצאי אתיופיה ועל תפיסות מוקדמות הנוגעות למנהגים.",
    "grade": 5,
    "level": 3,
    "warnings": [
      "גזענות",
      "אפליה"
    ],
    "topic": "זהות ותרבות",
    "videoId": "1j03mmEH4P8",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "איך אתם מרגישים עם צבע העור שלכם? למה עולות טענות על יחס המשטרה? אילו סטריאוטיפים אתם פוגשים?",
    "date": "2021-05-30",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8374954",
    "videoVerified": false
  },
  {
    "id": "k2-6",
    "season": 2,
    "episode": 6,
    "title": "קורונה",
    "description": "ילדים שנפגעו בתקופת הקורונה מספרים על השפעת המגפה על חייהם. התקציר מזכיר בדידות, קושי כלכלי בבית ולמידה מרחוק, כולל שאלות על מבחנים בזום.",
    "grade": 4,
    "level": 3,
    "warnings": [
      "בדידות",
      "מצוקה כלכלית"
    ],
    "topic": "בריאות",
    "videoId": "mhWrQ5nX64U",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "איך הרגשתם בתקופת הבידוד? האם היו קשיים כלכליים בבית? מה השתנה בלמידה ובמבחנים?",
    "date": "2021-06-06",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8392620",
    "videoVerified": false
  },
  {
    "id": "k2-7",
    "season": 2,
    "episode": 7,
    "title": "ילדים שמתמודדים עם פחד וחרדה",
    "description": "ילדים שמתמודדים עם פחד וחרדה משיבים לשאלות על החוויה האישית שלהם. השיחה מתמקדת בזיכרון של התקף החרדה הראשון, בהסתרת החרדה מהסביבה ובדרכים שבהן אחרים יכולים לעזור.",
    "grade": 6,
    "level": 4,
    "warnings": [
      "חרדה",
      "מצוקה נפשית"
    ],
    "topic": "בריאות",
    "videoId": "qLuHEKqwoec",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "מתי הרגשתם חרדה לראשונה? האם אתם מסתירים אותה? מה יכול לעזור לכם?",
    "date": "2021-06-13",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8392621",
    "videoVerified": false
  },
  {
    "id": "k2-8",
    "season": 2,
    "episode": 8,
    "title": "נוער גאה",
    "description": "בני ובנות נוער גאים עונים לשאלות על זהות, שיתוף משפחותיהם ותגובות חברים. התקציר מתייחס גם לריחוק שחלקם עשויים לחוות ולשאלות על העתיד.",
    "grade": 7,
    "level": 3,
    "warnings": [
      "דחייה חברתית",
      "זהות"
    ],
    "topic": "זהות ותרבות",
    "videoId": "tYva8ZSaYYo",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "איך סיפרתם להורים? האם חברים התרחקו? אילו שאלות שואלים אתכם על הזהות שלכם?",
    "date": "2021-06-20",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8392622",
    "videoVerified": true
  },
  {
    "id": "k2-9",
    "season": 2,
    "episode": 9,
    "title": "ילדים להורים גרושים",
    "description": "ילדים להורים גרושים מדברים על החיים בין שני בתים ועל היחסים עם שני ההורים. השאלות נוגעות לבחירת מקום השהות, למפגשים בין ההורים ולתקווה אפשרית שיחזרו להיות יחד.",
    "grade": 4,
    "level": 3,
    "warnings": [
      "גירושים",
      "מצוקה משפחתית"
    ],
    "topic": "משפחה",
    "videoId": "JFzR8NOf47U",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "אצל מי אתם מעדיפים להיות? מה קורה כשההורים נפגשים? האם הייתם רוצים שיחזרו?",
    "date": "2021-06-27",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8500661",
    "videoVerified": false
  },
  {
    "id": "k3-1",
    "season": 3,
    "episode": 1,
    "title": "ילדים שנולדו מתרומת זרע",
    "description": "ילדים שנולדו מתרומת זרע עונים על שאלות על המשפחה והקשר למוצא הביולוגי. הם נשאלים מה ידוע להם על תורם הזרע, האם היו רוצים לפגוש אותו והאם ייתכנו אחים שאינם מכירים.",
    "grade": 6,
    "level": 3,
    "warnings": [
      "הורות",
      "זהות משפחתית"
    ],
    "topic": "משפחה",
    "videoId": "yk5J_9gps8o",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "מה אתם יודעים על התורם? האם הייתם רוצים להכיר אותו? האם יכולים להיות לכם אחים לא מוכרים?",
    "date": "2022-02-03",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8954536",
    "videoVerified": false
  },
  {
    "id": "k3-2",
    "season": 3,
    "episode": 2,
    "title": "שונות במראה",
    "description": "ילדים עם שונות במראה בגלל לבקנות, כווייה, אלופציה או ויטיליגו משתפים בחוויות הקשורות למראה שלהם. השאלות עוסקות ביחס בבית הספר, במבט במראה ובקשר האפשרי בין מראה חיצוני לתחושת הזהות.",
    "grade": 4,
    "level": 3,
    "warnings": [
      "כוויות",
      "לעג",
      "דימוי גוף"
    ],
    "topic": "חברה ובריונות",
    "videoId": "SekGZ1M1T3k",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם מציקים לכם בבית הספר? איך אתם מרגישים מול המראה? האם המראה משפיע על האופן שבו אתם רואים את עצמכם?",
    "date": "2022-02-10",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8954537",
    "videoVerified": true
  },
  {
    "id": "k3-3",
    "season": 3,
    "episode": 3,
    "title": "מחלימים מסרטן",
    "description": "ילדים שהחלימו מסרטן משתפים בנושאים הקשורים למחלה ולהחלמה. התקציר מציין נשירת שיער, התייחסות להומור סביב סרטן ופחד ממוות בזמן המחלה.",
    "grade": 7,
    "level": 4,
    "warnings": [
      "סרטן",
      "פחד ממוות"
    ],
    "topic": "בריאות",
    "videoId": "1D6PO4XJkcY",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם נשר לכם השיער? האם אפשר לצחוק על המחלה? האם פחדתם למות?",
    "date": "2022-02-17",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8954538",
    "videoVerified": true
  },
  {
    "id": "k3-4",
    "season": 3,
    "episode": 4,
    "title": "נערים עובדים",
    "description": "בני נוער שעובדים מספרים על העבודה ועל היחס שהם מקבלים. הפרק בוחן כמה הם מרוויחים, האם הם עובדים מתוך צורך כלכלי וכיצד מנהלים מתייחסים אליהם.",
    "grade": 5,
    "level": 2,
    "warnings": [
      "קושי כלכלי"
    ],
    "topic": "חברה ובריונות",
    "videoId": null,
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "כמה אתם מרוויחים? האם אתם חייבים לעבוד? האם צועקים עליכם בעבודה?",
    "date": "2022-02-24",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8954539",
    "videoVerified": false
  },
  {
    "id": "k3-5",
    "season": 3,
    "episode": 5,
    "title": "ילדים להורים עם מגבלה",
    "description": "ילדים להורים עם מוגבלות מספרים על חיי המשפחה ועל היחסים בבית. השאלות נוגעות לרגע שבו הבחינו בשונות של ההורה, לתחושת אחריות ולנוחות בהזמנת חברים הביתה.",
    "grade": 5,
    "level": 3,
    "warnings": [
      "מוגבלות",
      "משפחה"
    ],
    "topic": "משפחה",
    "videoId": "Vq9SE1M5Lf8",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "מתי הבנתם שלהורה יש מגבלה? האם ההורים תלויים בכם? האם נוח לכם להזמין חברים?",
    "date": "2022-03-03",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8954540",
    "videoVerified": false
  },
  {
    "id": "k3-6",
    "season": 3,
    "episode": 6,
    "title": "נמוכים",
    "description": "ילדים נמוכים עונים לשאלות על הגובה והדרך שבה אחרים מתייחסים אליהם. הם מדברים על הצקות אפשריות, על משחקי ספורט ועל הבדלים בציפיות החברתיות מבנים ומבנות.",
    "grade": 3,
    "level": 2,
    "warnings": [
      "לעג",
      "דימוי גוף"
    ],
    "topic": "חברה ובריונות",
    "videoId": "qLOv9-CpmZ4",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם צוחקים עליכם בגלל הגובה? איך משחקים כדורסל? האם היחס שונה לבנים ולבנות?",
    "date": "2022-03-10",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8954541",
    "videoVerified": true
  },
  {
    "id": "k3-7",
    "season": 3,
    "episode": 7,
    "title": "ילדים להורים מפורסמים",
    "description": "ילדים להורים מפורסמים משיבים לשאלות על החיים לצד הורה מוכר לציבור. הם נשאלים על מבוכה כשרואים את ההורה בטלוויזיה, על חוויות מיוחדות ועל הרצון לקבל הכרה עצמאית.",
    "grade": 3,
    "level": 1,
    "warnings": [
      "פרטיות"
    ],
    "topic": "משפחה",
    "videoId": null,
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "מביך לראות את ההורה בטלוויזיה? אילו חוויות מיוחדות היו לכם? האם הייתם מעדיפים שלא יזהו אתכם לפי ההורה?",
    "date": "2022-03-17",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/8954542",
    "videoVerified": false
  },
  {
    "id": "k4-1",
    "season": 4,
    "episode": 1,
    "title": "אהבה ראשונה",
    "description": "זוגות צעירים שחווים אהבה ראשונה עונים לשאלות על תחילת הקשר והרגשות שלהם. הם מתייחסים לזיהוי עניין הדדי, להתאהבות ולאפשרות שייפרדו בעתיד.",
    "grade": 6,
    "level": 2,
    "warnings": [
      "זוגיות",
      "פרידה"
    ],
    "topic": "משפחה",
    "videoId": "qLpOZiY9-aI",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "איך יודעים שהצד השני מעוניין? האם אתם מאוהבים? האם אתם חושבים שתיפרדו יום אחד?",
    "date": "2024-02-29",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10062726",
    "videoVerified": true
  },
  {
    "id": "k4-2",
    "season": 4,
    "episode": 2,
    "title": "ילדים מגמגמים",
    "description": "ילדים מגמגמים משיבים לשאלות על הדיבור שלהם במצבים שונים. השאלות נוגעות לשירה, להעדפה לשתוק בחלק מהמצבים ולדיבור בפני קהל, כולל בבר מצווה.",
    "grade": 3,
    "level": 2,
    "warnings": [
      "מבוכה",
      "לעג"
    ],
    "topic": "נגישות",
    "videoId": "mZaOqEOT7WY",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם שירה משנה את הגמגום? האם לפעמים מעדיפים לשתוק? איך מרגישים כשמדברים באירוע חשוב?",
    "date": "2024-03-07",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10062727",
    "videoVerified": true
  },
  {
    "id": "k4-3",
    "season": 4,
    "episode": 3,
    "title": "סוכרת נעורים",
    "description": "ילדים ובני נוער עם סוכרת נעורים משיבים לשאלות על ההתמודדות עם המחלה. הפרק עוסק בתפיסות מוטעות לגבי אכילת ממתקים, בהזרקות וביחס של הסביבה למחלה.",
    "grade": 4,
    "level": 3,
    "warnings": [
      "זריקות",
      "מחלה"
    ],
    "topic": "בריאות",
    "videoId": "YAOhm8C6Nw0",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם הסוכרת נגרמה מאכילת ממתקים? האם מפחיד להזריק לעצמכם? מה אחרים לא מבינים על ההתמודדות?",
    "date": "2024-03-14",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10062728",
    "videoVerified": false
  },
  {
    "id": "k4-4",
    "season": 4,
    "episode": 4,
    "title": "אחים חורגים",
    "description": "ילדים החיים במשפחות משולבות מדברים על יחסים בין אחים חורגים ועל החיים בבית משותף. השאלות נוגעות למגורים עם מי שלא הכירו קודם, לסמכות של הורה נוסף ולתחושת האחאות.",
    "grade": 4,
    "level": 2,
    "warnings": [
      "משפחה מורכבת"
    ],
    "topic": "משפחה",
    "videoId": "r78jfNpeI9w",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "איך זה לגור עם בן משפחה חדש? האם ההורה הנוסף יכול להציב כללים? האם אתם מרגישים כמו אחים?",
    "date": "2024-03-21",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10062729",
    "videoVerified": false
  },
  {
    "id": "k4-5",
    "season": 4,
    "episode": 5,
    "title": "ילדים אוטיסטים",
    "description": "ילדים אוטיסטים עונים לשאלות על האופן שבו הם חווים את עצמם ואת היחסים החברתיים שלהם. התקציר כולל שאלות על תחושת שונות ועל חברות עם ילדים אוטיסטים ולא אוטיסטים.",
    "grade": 3,
    "level": 2,
    "warnings": [
      "דעות קדומות"
    ],
    "topic": "נגישות",
    "videoId": "phqemcjiWkA",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם אתם מרגישים שונים? האם הייתם רוצים שישנו בכם משהו? האם כל החברים שלכם אוטיסטים?",
    "date": "2024-03-28",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067558",
    "videoVerified": false
  },
  {
    "id": "k4-6",
    "season": 4,
    "episode": 6,
    "title": "תאונות דרכים",
    "description": "ילדים ובני נוער שחוו תאונות דרכים מדברים על הפגיעה ועל הזיכרונות מהאירוע. השאלות נוגעות לכאב, לחלומות או לסיוטים בעקבות התאונה ולתחושת אשמה אפשרית.",
    "grade": 7,
    "level": 4,
    "warnings": [
      "פציעות",
      "תאונות",
      "סיוטים"
    ],
    "topic": "בריאות",
    "videoId": "pNx6gIQ15kg",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם זו החוויה הכואבת ביותר שלכם? האם אתם חולמים על התאונה? האם הרגשתם אשמים?",
    "date": "2024-04-04",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067559",
    "videoVerified": true
  },
  {
    "id": "k4-7",
    "season": 4,
    "episode": 7,
    "title": "חינוך ביתי",
    "description": "ילדים בחינוך ביתי מספרים על הדרך שבה הם לומדים ועל שגרת היומיום. הפרק מתייחס לתפיסות לגבי לימודים מחוץ לבית הספר, להרגלי למידה ולחברויות.",
    "grade": 3,
    "level": 1,
    "warnings": [
      "שונות חינוכית"
    ],
    "topic": "לימודים",
    "videoId": "RkxC0g_MbLE",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם לומדים בבית כמו בבית ספר? לומדים בפיג׳מה? איך מכירים חברים?",
    "date": "2024-04-11",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067560",
    "videoVerified": true
  },
  {
    "id": "k4-8",
    "season": 4,
    "episode": 8,
    "title": "ילדים שאיבדו הורה",
    "description": "ילדים שאיבדו אב או אם מספרים על החיים אחרי מותו של ההורה. השיחה נוגעת לתגובות של ילדים אחרים, להשתתפות בהלוויה ולרגעים שבהם הגעגוע מורגש במיוחד.",
    "grade": 7,
    "level": 5,
    "warnings": [
      "מות הורה",
      "אבל",
      "הלוויה"
    ],
    "topic": "שכול ומלחמה",
    "videoId": "s9nWU5f-VGU",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "איך חברים מגיבים כשמספרים להם? האם השתתפתם בהלוויה? מתי ההורה הכי חסר לכם?",
    "date": "2024-04-18",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067561",
    "videoVerified": true
  },
  {
    "id": "k4-9",
    "season": 4,
    "episode": 9,
    "title": "לקויות למידה",
    "description": "ילדים עם לקויות למידה משיבים לשאלות על החוויה שלהם בבית הספר. השאלות עוסקות בתפיסות שגויות לגבי יכולת שכלית, בהארכת זמן במבחנים ובכתיבה בהודעות.",
    "grade": 3,
    "level": 2,
    "warnings": [
      "עלבונות",
      "קשיי למידה"
    ],
    "topic": "לימודים",
    "videoId": "ARQwfacaA7Q",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם אנשים חושבים שאתם פחות חכמים? איך מקבלים התאמות במבחנים? איך אתם מתכתבים?",
    "date": "2024-04-25",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067562",
    "videoVerified": false
  },
  {
    "id": "k4-10",
    "season": 4,
    "episode": 10,
    "title": "גיימרים",
    "description": "גיימרים צעירים מדברים על משחקי מחשב ווידאו ועל המקום שלהם בשגרה. הפרק בוחן שימוש ממושך במשחקים, קשרים חברתיים והוצאות כספיות על משחקים.",
    "grade": 4,
    "level": 2,
    "warnings": [
      "זמן מסך",
      "כסף"
    ],
    "topic": "לימודים",
    "videoId": "GeGT0ynHOUE",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם אתם מרגישים מכורים למשחקים? יש לכם חברים מחוץ לרשת? כמה כסף אתם מוציאים?",
    "date": "2024-05-02",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067563",
    "videoVerified": true
  },
  {
    "id": "k4-11",
    "season": 4,
    "episode": 11,
    "title": "ילדים יחידים",
    "description": "ילדים יחידים במשפחה משיבים לשאלות על החיים בלי אחים. השאלות עוסקות בבדידות, בחופשות עם ההורים וברצון האפשרי שיהיו להם אחים בעתיד.",
    "grade": 3,
    "level": 1,
    "warnings": [
      "בדידות"
    ],
    "topic": "משפחה",
    "videoId": "aTd4gnAam44",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם אתם מרגישים בודדים? איך נראות חופשות משפחתיות? כמה אחים הייתם רוצים?",
    "date": "2024-05-16",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067564",
    "videoVerified": false
  },
  {
    "id": "k4-12",
    "season": 4,
    "episode": 12,
    "title": "בריונות ברשת",
    "description": "ילדים ובני נוער שחוו בריונות ברשת מספרים על הפגיעה ועל ההשפעה שלה. השאלות מתייחסות למעורבות של חברים, להתפשטות הפגיעה גם לאנשים זרים ולהמשך פרסום תוכן ברשת.",
    "grade": 6,
    "level": 4,
    "warnings": [
      "בריונות ברשת",
      "השפלה"
    ],
    "topic": "חברה ובריונות",
    "videoId": "5qMp2d5m-As",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם חברים השתתפו בפגיעה? האם היא הגיעה לזרים? האם אתם עדיין מפרסמים ברשת?",
    "date": "2024-05-23",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067565",
    "videoVerified": false
  },
  {
    "id": "k4-13",
    "season": 4,
    "episode": 13,
    "title": "פליטי מלחמה מאוקראינה",
    "description": "ילדים שנמלטו מהמלחמה באוקראינה מספרים על הבריחה ועל חייהם בישראל. השאלות נוגעות לדרך שבה הצליחו לצאת מאזורי הלחימה, לסיוטים בלילה ולתחושת השייכות בבית החדש.",
    "grade": 7,
    "level": 4,
    "warnings": [
      "מלחמה",
      "פליטות",
      "סיוטים"
    ],
    "topic": "שכול ומלחמה",
    "videoId": "57pb7cbaL7M",
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "איך הצלחתם לברוח? האם יש סיוטים בלילה? האם אתם מרגישים בבית בישראל?",
    "date": "2024-05-30",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067566",
    "videoVerified": false
  },
  {
    "id": "k4-14",
    "season": 4,
    "episode": 14,
    "title": "הורים",
    "description": "הפעם הורים עונים לשאלות שילדים נוהגים להפנות אליהם. השאלות נוגעות ליעילות של עונשים, לפרטיות של ילדים ולהעדפה אפשרית של ילד מסוים במשפחה.",
    "grade": 3,
    "level": 1,
    "warnings": [
      "מתחים משפחתיים"
    ],
    "topic": "משפחה",
    "videoId": null,
    "sourceUrl": "https://www.kan.org.il/kids/content/kids/hinuchit-main/p-11681/",
    "questions": "האם עונשים עובדים? האם ההורים מחטטים בדברים של הילדים? יש ילד מועדף?",
    "date": "2024-06-06",
    "catalogSource": "https://thetvdb.com/series/you-cant-ask-that-kids/episodes/10067567",
    "videoVerified": false
  }
];
