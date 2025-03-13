const data = [
    {
        "kanji": "大切",
        "hiragana": "たいせつ",
        "english": "important"
    },
    {
        "kanji": "花火",
        "hiragana": "はなび",
        "english": "firework"
    },
    {
        "kanji": "顔",
        "hiragana": "かお",
        "english": "face"
    },
    {
        "kanji": "料理",
        "hiragana": "りょうり",
        "english": "cooking"
    },
    {
        "kanji": "世界",
        "hiragana": "せかい",
        "english": "world"
    },
    {
        "kanji": "家族",
        "hiragana": "かぞく",
        "english": "family  "
    },
    {
        "kanji": "赤",
        "hiragana": "あか",
        "english": "red"
    },
    {
        "kanji": "銀行",
        "hiragana": "ぎんこう",
        "english": "bank"
    },
    {
        "kanji": "小学校",
        "hiragana": "しょうがっこう",
        "english": "elementary school"
    },
    {
        "kanji": "朝",
        "hiragana": "あさ",
        "english": "morning"
    },
    {
        "kanji": "日曜日",
        "hiragana": "にちようび",
        "english": "sunday"
    },
    {
        "kanji": "色",
        "hiragana": "いろ",
        "english": "color"
    },
    {
        "kanji": "天気",
        "hiragana": "てんき",
        "english": "weather"
    },
    {
        "kanji": "写真",
        "hiragana": "しゃしん",
        "english": "photograph"
    },
    {
        "kanji": "紙",
        "hiragana": "かみ",
        "english": "paper"
    },
    {
        "kanji": "英語",
        "hiragana": "えいご",
        "english": "english"
    },
    {
        "kanji": "動画",
        "hiragana": "どうが",
        "english": "video"
    },
    {
        "kanji": "肉",
        "hiragana": "にく",
        "english": "meat"
    },
    {
        "kanji": "音楽",
        "hiragana": "おんがく",
        "english": "music"
    },
    {
        "kanji": "果物",
        "hiragana": "くだもの",
        "english": "fruit"
    },
    {
        "kanji": "新聞",
        "hiragana": "しんぶん",
        "english": "newspaper"
    },
    {
        "kanji": "夏",
        "hiragana": "なつ",
        "english": "summer"
    },
    {
        "kanji": "水曜日",
        "hiragana": "すいようび",
        "english": "wednesday"
    },
    {
        "kanji": "教室",
        "hiragana": "きょうしつ",
        "english": "classroom"
    },
    {
        "kanji": "兄",
        "hiragana": "あに",
        "english": "older brother"
    },
    {
        "kanji": "地図",
        "hiragana": "ちず",
        "english": "map"
    },
    {
        "kanji": "明日",
        "hiragana": "あした",
        "english": "tomorrow"
    },
    {
        "kanji": "病院",
        "hiragana": "びょういん",
        "english": "hospital"
    },
    {
        "kanji": "門",
        "hiragana": "もん",
        "english": "gate"
    },
    {
        "kanji": "旅行",
        "hiragana": "りょこう",
        "english": "trip"
    },
    {
        "kanji": "言葉",
        "hiragana": "ことば",
        "english": "word"
    },
    {
        "kanji": "姉",
        "hiragana": "あね",
        "english": "older sister"
    },
    {
        "kanji": "学生",
        "hiragana": "がくせい",
        "english": "student"
    },
    {
        "kanji": "漫画家",
        "hiragana": "まんがか",
        "english": "manga artist"
    },
    {
        "kanji": "頭",
        "hiragana": "あたま",
        "english": "head"
    },
    {
        "kanji": "友達",
        "hiragana": "ともだち",
        "english": "friend"
    },
    {
        "kanji": "勝利",
        "hiragana": "しょうり",
        "english": "victory"
    },
    {
        "kanji": "風",
        "hiragana": "かぜ",
        "english": "wind"
    },
    {
        "kanji": "勉強",
        "hiragana": "べんきょう",
        "english": "study"
    },
    {
        "kanji": "仕方",
        "hiragana": "しかた",
        "english": "method"
    },
    {
        "kanji": "子供",
        "hiragana": "こども",
        "english": "children"
    },
    {
        "kanji": "医者",
        "hiragana": "いしゃ",
        "english": "doctor"
    },
    {
        "kanji": "町",
        "hiragana": "まち",
        "english": "town"
    },
    {
        "kanji": "建物",
        "hiragana": "たてもの",
        "english": "building"
    },
    {
        "kanji": "週末",
        "hiragana": "しゅうまつ",
        "english": "weekend"
    },
    {
        "kanji": "鳥",
        "hiragana": "とり",
        "english": "bird"
    },
    {
        "kanji": "質問",
        "hiragana": "しつもん",
        "english": "question"
    },
    {
        "kanji": "木曜日",
        "hiragana": "もくようび",
        "english": "thursday"
    },
    {
        "kanji": "公園",
        "hiragana": "こうえん",
        "english": "park"
    },
    {
        "kanji": "足",
        "hiragana": "あし",
        "english": "leg"
    },
    {
        "kanji": "名前",
        "hiragana": "なまえ",
        "english": "name"
    },
    {
        "kanji": "外",
        "hiragana": "そと",
        "english": "outside"
    },
    {
        "kanji": "図書館",
        "hiragana": "としょかん",
        "english": "library"
    },
    {
        "kanji": "番号",
        "hiragana": "ばんごう",
        "english": "number"
    },
    {
        "kanji": "電話",
        "hiragana": "でんわ",
        "english": "phone"
    },
    {
        "kanji": "青",
        "hiragana": "あお",
        "english": "blue"
    },
    {
        "kanji": "来年",
        "hiragana": "らいねん",
        "english": "next year"
    },
    {
        "kanji": "自由",
        "hiragana": "じゆう",
        "english": "freedom"
    },
    {
        "kanji": "弟",
        "hiragana": "おとうと",
        "english": "younger brother"
    },
    {
        "kanji": "彼女",
        "hiragana": "かのじょ",
        "english": "girlfriend"
    },
    {
        "kanji": "椅子",
        "hiragana": "いす",
        "english": "chair"
    },
    {
        "kanji": "最後",
        "hiragana": "さいご",
        "english": "last"
    },
    {
        "kanji": "駅",
        "hiragana": "えき",
        "english": "station"
    },
    {
        "kanji": "火曜日",
        "hiragana": "かようび",
        "english": "tuesday"
    },
    {
        "kanji": "階段",
        "hiragana": "かいだん",
        "english": "stairs"
    },
    {
        "kanji": "村",
        "hiragana": "むら",
        "english": "village"
    },
    {
        "kanji": "財布",
        "hiragana": "さいふ",
        "english": "wallet"
    },
    {
        "kanji": "最近",
        "hiragana": "さいきん",
        "english": "recently"
    },
    {
        "kanji": "文",
        "hiragana": "ぶん",
        "english": "sentence"
    },
    {
        "kanji": "両親",
        "hiragana": "りょうしん",
        "english": "parents"
    },
    {
        "kanji": "出口",
        "hiragana": "でぐち",
        "english": "exit"
    },
    {
        "kanji": "大人",
        "hiragana": "おとな",
        "english": "adult"
    },
    {
        "kanji": "北",
        "hiragana": "きた",
        "english": "north"
    },
    {
        "kanji": "真夜中",
        "hiragana": "まよなか",
        "english": "midnight"
    },
    {
        "kanji": "近所",
        "hiragana": "きんじょ",
        "english": "neighborhood"
    },
    {
        "kanji": "鞄",
        "hiragana": "かばん",
        "english": "bag"
    },
    {
        "kanji": "食堂",
        "hiragana": "しょくどう",
        "english": "cafeteria"
    },
    {
        "kanji": "部屋",
        "hiragana": "へや",
        "english": "room"
    },
    {
        "kanji": "妹",
        "hiragana": "いもうと",
        "english": "younger sister"
    },
    {
        "kanji": "練習",
        "hiragana": "れんしゅう",
        "english": "practice"
    },
    {
        "kanji": "金曜日",
        "hiragana": "きんようび",
        "english": "friday"
    },
    {
        "kanji": "最初",
        "hiragana": "さいしょ",
        "english": "first"
    },
    {
        "kanji": "例",
        "hiragana": "れい",
        "english": "example"
    },
    {
        "kanji": "昨日",
        "hiragana": "きのう",
        "english": "yesterday"
    },
    {
        "kanji": "授業",
        "hiragana": "じゅぎょう",
        "english": "lesson"
    },
    {
        "kanji": "眼鏡",
        "hiragana": "めがね",
        "english": "glasses"
    },
    {
        "kanji": "会社",
        "hiragana": "かいしゃ",
        "english": "company"
    },
    {
        "kanji": "車",
        "hiragana": "くるま",
        "english": "car"
    },
    {
        "kanji": "野菜",
        "hiragana": "やさい",
        "english": "vegetable"
    },
    {
        "kanji": "猫",
        "hiragana": "ねこ",
        "english": "cat"
    },
    {
        "kanji": "服屋",
        "hiragana": "ふくや",
        "english": "clothing store"
    },
    {
        "kanji": "敵",
        "hiragana": "てき",
        "english": "enemy"
    },
    {
        "kanji": "土地",
        "hiragana": "とち",
        "english": "land"
    },
    {
        "kanji": "映画館",
        "hiragana": "えいがかん",
        "english": "cinema"
    },
    {
        "kanji": "半分",
        "hiragana": "はんぶん",
        "english": "half"
    },
    {
        "kanji": "虫",
        "hiragana": "むし",
        "english": "insect"
    },
    {
        "kanji": "工場",
        "hiragana": "こうじょう",
        "english": "factory"
    },
    {
        "kanji": "便利",
        "hiragana": "べんり",
        "english": "convenient"
    },
    {
        "kanji": "歌",
        "hiragana": "うた",
        "english": "song"
    },
    {
        "kanji": "数学",
        "hiragana": "すうがく",
        "english": "math"
    },
    {
        "kanji": "西門",
        "hiragana": "にしもん",
        "english": "west gate"
    },
    {
        "kanji": "試験",
        "hiragana": "しけん",
        "english": "test"
    },
    {
        "kanji": "土曜日",
        "hiragana": "どようび",
        "english": "saturday"
    },
    {
        "kanji": "魚",
        "hiragana": "さかな",
        "english": "fish"
    },
    {
        "kanji": "火山",
        "hiragana": "かざん",
        "english": "volcano"
    },
    {
        "kanji": "鉛筆",
        "hiragana": "えんぴつ",
        "english": "pencil"
    },
    {
        "kanji": "心",
        "hiragana": "こころ",
        "english": "heart"
    },
    {
        "kanji": "仕事",
        "hiragana": "しごと",
        "english": "work"
    },
    {
        "kanji": "店員",
        "hiragana": "てんいん",
        "english": "clerk"
    },
    {
        "kanji": "酒",
        "hiragana": "さけ",
        "english": "alcohol"
    },
    {
        "kanji": "時計",
        "hiragana": "とけい",
        "english": "clock"
    },
    {
        "kanji": "自転車",
        "hiragana": "じてんしゃ",
        "english": "bicycle"
    },
    {
        "kanji": "正解",
        "hiragana": "せいかい",
        "english": "correct"
    },
    {
        "kanji": "薬",
        "hiragana": "くすり",
        "english": "medicine"
    },
    {
        "kanji": "砂",
        "hiragana": "すな",
        "english": "sand"
    },
    {
        "kanji": "試合",
        "hiragana": "しあい",
        "english": "match"
    },
    {
        "kanji": "左手",
        "hiragana": "ひだりて",
        "english": "left hand"
    },
    {
        "kanji": "南",
        "hiragana": "みなみ",
        "english": "south"
    },
    {
        "kanji": "先月",
        "hiragana": "せんげつ",
        "english": "last month"
    },
    {
        "kanji": "辞書",
        "hiragana": "じしょ",
        "english": "dictionary"
    },
    {
        "kanji": "結婚式",
        "hiragana": "けっこんしき",
        "english": "wedding"
    },
    {
        "kanji": "東門",
        "hiragana": "ひがしもん",
        "english": "east gate"
    },
    {
        "kanji": "春",
        "hiragana": "はる",
        "english": "spring"
    },
    {
        "kanji": "切手",
        "hiragana": "きって",
        "english": "stamp"
    },
    {
        "kanji": "声",
        "hiragana": "こえ",
        "english": "voice"
    },
    {
        "kanji": "茶色",
        "hiragana": "ちゃいろ",
        "english": "brown"
    },
    {
        "kanji": "靴",
        "hiragana": "くつ",
        "english": "shoes"
    },
    {
        "kanji": "大変",
        "hiragana": "たいへん",
        "english": "hard"
    },
    {
        "kanji": "空港",
        "hiragana": "くうこう",
        "english": "airport"
    },
    {
        "kanji": "動物",
        "hiragana": "どうぶつ",
        "english": "animal"
    },
    {
        "kanji": "温度",
        "hiragana": "おんど",
        "english": "temperature"
    },
    {
        "kanji": "神社",
        "hiragana": "じんじゃ",
        "english": "shrine"
    },
    {
        "kanji": "洗濯機",
        "hiragana": "せんたっき",
        "english": "washing machine"
    },
    {
        "kanji": "秋",
        "hiragana": "あき",
        "english": "fall"
    },
    {
        "kanji": "心配",
        "hiragana": "しんぱい",
        "english": "worry"
    },
    {
        "kanji": "意味",
        "hiragana": "いみ",
        "english": "meaning"
    },
    {
        "kanji": "社長",
        "hiragana": "しゃちょう",
        "english": "manager"
    },
    {
        "kanji": "犬",
        "hiragana": "いぬ",
        "english": "dog"
    },
    {
        "kanji": "過去",
        "hiragana": "かこ",
        "english": "past"
    },
    {
        "kanji": "光",
        "hiragana": "ひかり",
        "english": "light"
    },
    {
        "kanji": "砂糖",
        "hiragana": "さとう",
        "english": "sugar"
    },
    {
        "kanji": "次",
        "hiragana": "つぎ",
        "english": "next"
    },
    {
        "kanji": "平和",
        "hiragana": "へいわ",
        "english": "peace"
    },
    {
        "kanji": "誕生日",
        "hiragana": "たんじょうび",
        "english": "birthday"
    },
    {
        "kanji": "本当",
        "hiragana": "ほんとう",
        "english": "really"
    },
    {
        "kanji": "港",
        "hiragana": "みなと",
        "english": "port"
    },
    {
        "kanji": "美術",
        "hiragana": "びじゅつ",
        "english": "art"
    },
    {
        "kanji": "科学",
        "hiragana": "かがく",
        "english": "science"
    },
    {
        "kanji": "絵",
        "hiragana": "え",
        "english": "painting"
    },
    {
        "kanji": "全体",
        "hiragana": "ぜんたい",
        "english": "whole"
    },
    {
        "kanji": "植物",
        "hiragana": "しょくぶつ",
        "english": "plant"
    },
    {
        "kanji": "毎日",
        "hiragana": "まいにち",
        "english": "every day"
    },
    {
        "kanji": "宿題",
        "hiragana": "しゅくだい",
        "english": "homework"
    },
    {
        "kanji": "花瓶",
        "hiragana": "かびん",
        "english": "vase"
    },
    {
        "kanji": "席",
        "hiragana": "せき",
        "english": "seat"
    },
    {
        "kanji": "小麦粉",
        "hiragana": "こむぎこ",
        "english": "flour"
    },
    {
        "kanji": "体",
        "hiragana": "からだ",
        "english": "body"
    },
    {
        "kanji": "午前",
        "hiragana": "ごぜん",
        "english": "AM"
    },
    {
        "kanji": "言語",
        "hiragana": "げんご",
        "english": "language"
    },
    {
        "kanji": "緑",
        "hiragana": "みどり",
        "english": "green"
    },
    {
        "kanji": "救急車",
        "hiragana": "きゅうきゅうしゃ",
        "english": "ambulance"
    },
    {
        "kanji": "患者",
        "hiragana": "かんじゃ",
        "english": "patient"
    },
    {
        "kanji": "腕",
        "hiragana": "うで",
        "english": "arm"
    },
    {
        "kanji": "場所",
        "hiragana": "ばしょ",
        "english": "place"
    },
    {
        "kanji": "味",
        "hiragana": "あじ",
        "english": "flavor"
    },
    {
        "kanji": "文化",
        "hiragana": "ぶんか",
        "english": "culture"
    },
    {
        "kanji": "男性",
        "hiragana": "だんせい",
        "english": "man"
    },
    {
        "kanji": "冬",
        "hiragana": "ふゆ",
        "english": "winter"
    },
    {
        "kanji": "不便",
        "hiragana": "ふべん",
        "english": "inconvenient"
    },
    {
        "kanji": "法律",
        "hiragana": "ほうりつ",
        "english": "law"
    },
    {
        "kanji": "住所",
        "hiragana": "じゅうしょ",
        "english": "address"
    },
    {
        "kanji": "髪",
        "hiragana": "かみ",
        "english": "hair"
    },
    {
        "kanji": "時代",
        "hiragana": "じだい",
        "english": "period"
    },
    {
        "kanji": "人生",
        "hiragana": "じんせい",
        "english": "life"
    },
    {
        "kanji": "月曜日",
        "hiragana": "げつようび",
        "english": "monday"
    },
    {
        "kanji": "草",
        "hiragana": "くさ",
        "english": "grass"
    },
    {
        "kanji": "事故",
        "hiragana": "じこ",
        "english": "accident"
    },
    {
        "kanji": "格好",
        "hiragana": "かっこう",
        "english": "appearance"
    },
    {
        "kanji": "娘",
        "hiragana": "むすめ",
        "english": "daughter"
    },
    {
        "kanji": "親切",
        "hiragana": "しんせつ",
        "english": "kindness"
    },
    {
        "kanji": "女性",
        "hiragana": "じょせい",
        "english": "woman"
    },
    {
        "kanji": "午後",
        "hiragana": "ごご",
        "english": "PM"
    },
    {
        "kanji": "白",
        "hiragana": "しろ",
        "english": "white"
    },
    {
        "kanji": "息子",
        "hiragana": "むすこ",
        "english": "son"
    },
    {
        "kanji": "駐車場",
        "hiragana": "ちゅうしゃじょう",
        "english": "parking lot"
    },
    {
        "kanji": "受付",
        "hiragana": "うけつけ",
        "english": "reception"
    },
    {
        "kanji": "指",
        "hiragana": "ゆび",
        "english": "finger"
    },
    {
        "kanji": "予約",
        "hiragana": "よやく",
        "english": "reservation"
    },
    {
        "kanji": "島",
        "hiragana": "しま",
        "english": "island"
    },
    {
        "kanji": "簡単",
        "hiragana": "かんたん",
        "english": "easy"
    },
    {
        "kanji": "誰",
        "hiragana": "だれ",
        "english": "who"
    },
    {
        "kanji": "地理",
        "hiragana": "ちり",
        "english": "geography"
    },
    {
        "kanji": "田舎",
        "hiragana": "いなか",
        "english": "country side"
    },
    {
        "kanji": "星",
        "hiragana": "ほし",
        "english": "star"
    },
    {
        "kanji": "研究室",
        "hiragana": "けんきゅうしつ",
        "english": "laboratory"
    },
    {
        "kanji": "空気",
        "hiragana": "くうき",
        "english": "air"
    },
    {
        "kanji": "教会",
        "hiragana": "きょうかい",
        "english": "church"
    },
    {
        "kanji": "森",
        "hiragana": "もり",
        "english": "forest"
    },
    {
        "kanji": "背中",
        "hiragana": "せなか",
        "english": "back"
    },
    {
        "kanji": "品物",
        "hiragana": "しなもの",
        "english": "goods"
    }
]

function shuffleArray(array) {
    let shuffled = [...array]; 
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

export default shuffleArray(data);