export type MenuItem = {
  number: string;
  arabic: string;
  german: string;
  description?: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  titleDe: string;
  titleAr: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "vorspeisen",
    titleDe: "Vorspeisen",
    titleAr: "المقبلات",
    items: [
      {
        number: "1",
        arabic: "شوربة عدس",
        german: "Linsensuppe",
        price: "4,00 €",
      },
      {
        number: "2",
        arabic: "متبل",
        german: "Moutabel",
        description:
          "Gegrillte Auberginen, Sesampaste, Joghurt, Knoblauch und Olivenöl",
        price: "6,00 €",
      },
      {
        number: "3",
        arabic: "حمص",
        german: "Hummus",
        description:
          "Kichererbsen, Sesampaste, Knoblauch, Olivenöl und Zitronen-Dressing",
        price: "6,50 €",
      },
      {
        number: "4",
        arabic: "مشكل مقبلات",
        german: "Mix Vorspeise",
        description: "Moutabel - Hummus - Fatousch Salat mit Moulawah Brot",
        price: "13,50 €",
      },
      {
        number: "5",
        arabic: "طبق فلافل مع سلطة",
        german: "Falafelteller mit Salat",
        price: "7,50 €",
      },
    ],
  },

  {
    id: "salate",
    titleDe: "Salate",
    titleAr: "السلطات",
    items: [
      {
        number: "11",
        arabic: "تبولة",
        german: "Tabouleh",
        description:
          "Mit Petersilie, Bulgur, Tomaten, Zwiebeln, grünem Salat und Olivenöl-Zitronen-Dressing",
        price: "7,00 €",
      },
      {
        number: "12",
        arabic: "فتوش",
        german: "Fatousch",
        description:
          "Mit Eisbergsalat, Gurken, Tomaten, Olivenöl-Zitronen-Dressing und Granatapfel-Sauce mit frittiertem Fladenbrot",
        price: "7,00 €",
      },
      {
        number: "13",
        arabic: "سلطة يمنية",
        german: "Jemenitischer Salat",
        description:
          "Mit Eisbergsalat, Gurken, Tomaten und Olivenöl-Zitronen-Dressing",
        price: "6,00 €",
      },
    ],
  },

  {
    id: "lammgerichte",
    titleDe: "Lammgerichte",
    titleAr: "أطباق اللحم",
    items: [
      {
        number: "21",
        arabic: "لحم مندي",
        german: "Mandy Lamm 400-350g",
        description:
          "Zart gegartes, würzig mariniertes Lammfleisch auf aromatischem Reis",
        price: "20,00 €",
      },
      {
        number: "22",
        arabic: "لحم حنيذ",
        german: "Haneeth Lamm 400-350g",
        description:
          "Zart langsam gegartes in Haneeth Spezialgewürzen mariniertes Lammfleisch mit Reis",
        price: "20,00 €",
      },
      {
        number: "23",
        arabic: "زربيان لحم",
        german: "Lamm Zerbian 400-350g",
        description:
          "Zartgegartes Lammfleisch mit speziell gekochtem Zurbian Reis",
        price: "20,00 €",
      },
      {
        number: "24",
        arabic: "لحم بدون رز",
        german: "Fleisch ohne Reis 400-350g",
        price: "15,00 €",
      },
      {
        number: "25",
        arabic: "ربع ذبيحة",
        german: "Ein Viertel Lamm",
        price: "140,00 €",
      },
      {
        number: "26",
        arabic: "نصف ذبيحة",
        german: "Ein halbes Lamm",
        price: "270,00 €",
      },
      {
        number: "27",
        arabic: "ذبيحة كاملة",
        german: "Ein ganzes Lamm",
        price: "480,00 €",
      },
      {
        number: "28",
        arabic: "منسف لحم ٤ أشخاص",
        german: "Mansaf Lamm nach Wahl für 4 Personen",
        description:
          "Mit jemenitischem Salat, Jogurtsoße, Spezialsauce und Getränke",
        price: "100,00 €",
      },
      {
        number: "29",
        arabic: "منسف دجاج ٤ أشخاص",
        german: "Mansaf Hähnchen nach Wahl für 4 Personen",
        description:
          "Mit jemenitischem Salat, Jogurtsoße, Spezialsauce und Getränke",
        price: "70,00 €",
      },
    ],
  },

  {
    id: "haehnchengerichte",
    titleDe: "Hähnchengerichte",
    titleAr: "أطباق الدجاج",
    items: [
      {
        number: "32",
        arabic: "دجاج حنيذ",
        german: "Haneeth Hähnchen",
        description:
          "Zart langsam gegartes in Haneeth Spezialgewürzen mariniertes halbes Hähnchen mit Reis",
        price: "13,00 €",
      },
      {
        number: "33",
        arabic: "زربيان دجاج",
        german: "Zerbian Hähnchen",
        description:
          "Zartgegartes halbes Hähnchen mit speziell gekochtem Zurbian Reis",
        price: "13,00 €",
      },
      {
        number: "34",
        arabic: "دجاج بدون أرز",
        german: "Hähnchen ohne Reis",
        price: "8,90 €",
      },
    ],
  },
  {
    id: "topfgerichte",
    titleDe: "Topfgerichte",
    titleAr: "محروقات",
    items: [
      {
        number: "41",
        arabic: "فحسة لحم",
        german: "Fahsa",
        description:
          "Würziger Eintopf mit geschmortem, fein geschnittenem Rindfleisch mit Moulawah Brot, auf Wunsch mit Bocksdornklee",
        price: "16,00 €",
      },
      {
        number: "42",
        arabic: "سلتة",
        german: "Salta",
        description:
          "Eine köstliche Kombination von gehacktem Rindfleischeintopf mit verschiedenem Gemüse, dazu Moulawah Brot, auf Wunsch mit Bocksdornklee",
        price: "15,00 €",
      },
      {
        number: "43",
        arabic: "صانونة سمك سلمون",
        german: "Sanouna Fisch",
        description:
          "Spezialgewürzter Eintopf mit Lachsfisch, Tomatensauce, Paprika, dazu Moulawah Brot",
        price: "16,00 €",
      },
      {
        number: "44",
        arabic: "صانونة لحم",
        german: "Sanouna Lamm",
        description:
          "Ein Eintopf mit geschmortem Lammfleisch, Tomatensauce, Paprika und Gewürzen, dazu Moulawah Brot",
        price: "15,00 €",
      },
      {
        number: "45",
        arabic: "صانونة دجاج",
        german: "Sanouna Hähnchen",
        description:
          "Ein Eintopf mit gewürztem geschmortem Hähnchenfleisch, Tomatensauce und Paprika, dazu Moulawah Brot",
        price: "13,00 €",
      },
      {
        number: "46",
        arabic: "بامية",
        german: "Bamia",
        description:
          "Ein Eintopf mit Okraschoten, Zwiebeln, Chilis, Tomatensauce und Spezialgewürzen, dazu Moulawah Brot",
        price: "12,00 €",
      },
      {
        number: "47",
        arabic: "مكس محروقات",
        german: "Geschnetzeltes Mix",
        description:
          "Eine Mischung aus Lammleber, Hackfleisch, Lammgeschnetzeltem, Paprika, Zwiebeln und Tomaten in der Pfanne zusammengebraten, mit Brot",
        price: "14,00 €",
      },
    ],
  },

  {
    id: "pfannengerichte",
    titleDe: "Pfannengerichte",
    titleAr: "أطباق المقلاة",
    items: [
      {
        number: "53",
        arabic: "عقدة لحم",
        german: "Akda Lamm",
        description:
          "Gebratene Lammfleischstücke mit Gemüse, Zwiebeln, Knoblauch, Tomaten, Kartoffeln, Akda Gewürzen und Spezialgewürzen, dazu Moulawah Brot",
        price: "15,00 €",
      },
      {
        number: "54",
        arabic: "عقدة سمك",
        german: "Akda Lachsfisch",
        description:
          "Zart gebratener Lachsfisch mit Gemüse, Zwiebeln, Knoblauch, Tomaten, Paprika und traditionellen Akdah-Gewürzen. Serviert mit frischem Moulawah-Brot.",
        price: "16,00 €",
      },
      {
        number: "55",
        arabic: "فاصوليا حرضية",
        german: "Bohnen im Steintopf",
        description:
          "Im Steintopf gekochte Kidneybohnen mit Gemüse und Moulawah Brot",
        price: "11,00 €",
      },
      {
        number: "56",
        arabic: "فول حرضي",
        german: "Foul im Steintopf",
        description:
          "Gekochte Favabohnen mit Tomaten und Zwiebeln, dazu Moulawah Brot",
        price: "11,00 €",
      },
      {
        number: "57",
        arabic: "كبدة غنمي",
        german: "Leber Lamm",
        description:
          "Gebratene Lammleber mit Gemüse, Kartoffeln und Petersilie, dazu Moulawah Brot",
        price: "13,00 €",
      },
      {
        number: "58",
        arabic: "لحم صغار",
        german: "Fleischstücke",
        description:
          "Gebratenes, dünn geschnittenes Lammfleisch mit Gemüse, Kartoffeln und Petersilie, dazu Moulawah Brot",
        price: "13,00 €",
      },
      {
        number: "59",
        arabic: "لحم مفروم",
        german: "Hackfleisch",
        description:
          "Gebratenes Lammhackfleisch mit Gemüse und Spezialgewürzen, dazu Moulawah Brot",
        price: "13,00 €",
      },
      {
        number: "60",
        arabic: "فاصوليا لحم",
        german: "Bohnen",
        description:
          "Gebratene Kidneybohnen mit Gemüse und Spezialgewürzen, dazu Moulawah Brot",
        price: "11,00 €",
      },
      {
        number: "61",
        arabic: "فاصوليا بالبيض",
        german: "Bohnen mit Ei",
        description:
          "Gebratene Kidneybohnen mit Gemüse und Ei, dazu Moulawah Brot",
        price: "12,00 €",
      },
      {
        number: "62",
        arabic: "بيض شكشوكة",
        german: "Shakshuka Eier",
        description:
          "Arabisches Eier-Omelett mit Tomaten, Zwiebel, Paprika, Spezialgewürzen und Moulawah Brot",
        price: "11,00 €",
      },
    ],
  },

  {
    id: "beilagen",
    titleDe: "Beilagen",
    titleAr: "أطباق جانبية",
    items: [
      {
        number: "65",
        arabic: "ملوح سحاوق",
        german: "Einzelnes Moulawah-Brot",
        description: "Jemenitisches Brot mit Schwarzkümmel verschönert",
        price: "2,00 €",
      },
      {
        number: "66",
        arabic: "أرز مندي",
        german: "Mandy Reis",
        description: "Lockerer, langkörniger, arabischer Reis",
        price: "5,00 €",
      },
      {
        number: "67",
        arabic: "أرز زربيان",
        german: "Zurbian Reis",
        description:
          "Lockerer, langkörniger Reis mit fein gebratenen Zwiebeln und Gewürzen",
        price: "5,00 €",
      },
      {
        number: "68",
        arabic: "سحاوق بالجبن",
        german: "Käse Sahawoq",
        description: "Leicht scharfe Tomaten-Soße mit salzigem Käse",
        price: "2,90 €",
      },
      {
        number: "69",
        arabic: "لبن بالخيار",
        german: "Gurkensalat mit Joghurt",
        price: "2,50 €",
      },
      {
        number: "70",
        arabic: "زبادي",
        german: "Naturjoghurt",
        price: "2,00 €",
      },
      {
        number: "71",
        arabic: "بطاطس",
        german: "Pommes mit Ketchup oder Mayo",
        price: "4,00 €",
      },
    ],
  },
  {
    id: "fischgerichte",
    titleDe: "Fischgerichte",
    titleAr: "ماكولات بحرية",
    items: [
      {
        number: "75",
        arabic: "صانونة روبيان",
        german: "Sanouna Garnelen",
        description:
          "Eintopf mit Garnelen, Zwiebeln, Chilis, Tomatensauce und Spezialgewürze, dazu Moulawah Brot",
        price: "16,00 €",
      },
      {
        number: "76",
        arabic: "صانونة سمك",
        german: "Sanouna Fisch",
        description:
          "Eintopf mit Lachsfisch, Tomatensauce und Spezialgewürze, dazu Moulawah Brot",
        price: "16,00 €",
      },
      {
        number: "77",
        arabic: "سمك موفا",
        german: "Dorade Mofa",
        description: "Dorade im Mofa gegrillt, dazu Moulawah Brot 400g",
        price: "19,00 €",
      },
    ],
  },

  {
    id: "desserts",
    titleDe: "Desserts",
    titleAr: "الحلويات",
    items: [
      {
        number: "81",
        arabic: "فتة عسل",
        german: "Honig Fattah",
        description: "Zerkleinertes Moulawah Brot mit Honig und Schwarzkümmel",
        price: "8,50 €",
      },
      {
        number: "82",
        arabic: "فتة بالموز",
        german: "Bananen Fattah",
        description:
          "Bananenringe mit Brotkrumen, Schwarzkümmel und mit Honig oder ohne",
        price: "8,50 €",
      },
      {
        number: "83",
        arabic: "فتة بالتمر",
        german: "Datteln Fattah",
        description:
          "Datteln mit zerkleinertem Moulawah Brot und mit Honig oder ohne",
        price: "8,50 €",
      },
      {
        number: "84",
        arabic: "عريكة ملكي",
        german: "Arykah Malaki",
        description:
          "Zerkleinertes Moulawah Brot mit Datteln, Käse, Mandel-Nuss-Splittern, Creme und Honig",
        price: "12,50 €",
      },
      {
        number: "85",
        arabic: "معصوب ملكي",
        german: "Masoub Malaki",
        description:
          "Zerkleinertes Moulawah Brot mit Bananen, Sahne, Käse und Schwarzkümmel",
        price: "11,00 €",
      },
    ],
  },
  {
    id: "getraenke",
    titleDe: "Getränke",
    titleAr: "المشروبات",
    items: [
      {
        number: "G1",
        arabic: "عيران",
        german: "Ayran",
        price: "2,00 €",
      },
      {
        number: "G2",
        arabic: "فريتز كولا",
        german: "Fritz Kola 0,33l",
        price: "3,00 €",
      },
      {
        number: "G3",
        arabic: "فريتز بدون لايت",
        german: "Fritz Light 0,33l",
        price: "3,00 €",
      },
      {
        number: "G4",
        arabic: "فريتز تفاح غازي",
        german: "Fritz Apfelschorle 0,33l",
        price: "3,00 €",
      },
      {
        number: "G5",
        arabic: "فريتز برتقال",
        german: "Fritz Orange 0,33l",
        price: "3,00 €",
      },
      {
        number: "G6",
        arabic: "فريتز كولا زيرو",
        german: "Fritz Kola Zero 0,33l",
        price: "3,00 €",
      },
      {
        number: "G7",
        arabic: "فريتز ليم",
        german: "Fritz Limette 0,33l",
        price: "3,00 €",
      },
      {
        number: "G8",
        arabic: "فريتز شراب عنب غازي",
        german: "Fritz Traubenschorle 0,33l",
        price: "3,00 €",
      },
      {
        number: "G9",
        arabic: "ماء",
        german: "Stilles Wasser 0,33l",
        price: "2,00 €",
      },
      {
        number: "G10",
        arabic: "ماء غازي",
        german: "Wasser mit Kohlensäure 0,33l",
        price: "2,00 €",
      },
      {
        number: "G11",
        arabic: "شاي يمني",
        german: "Jemenitischer Tee",
        description: "Schwarztee – keine Lieferung / nur im Restaurant",
        price: "2,00 €",
      },
      {
        number: "G12",
        arabic: "شاي عدني",
        german: "Adeni Tee",
        description: "Tee mit Milch – keine Lieferung / nur im Restaurant",
        price: "2,50 €",
      },
    ],
  },

  {
    id: "saefte",
    titleDe: "Frische Säfte",
    titleAr: "العصائر الطبيعية",
    items: [
      {
        number: "S1",
        arabic: "مانجو بالحليب",
        german: "Mangosaft mit Milch 0,3l",
        price: "6,00 €",
      },
      {
        number: "S2",
        arabic: "فراولة بالحليب",
        german: "Erdbeersaft mit Milch 0,3l",
        price: "6,00 €",
      },
      {
        number: "S3",
        arabic: "عرايسي كوكتيل",
        german: "Araysi-Cocktail 0,3l",
        price: "7,00 €",
      },
      {
        number: "S4",
        arabic: "عصير البرتقال",
        german: "Orangensaft 0,3l",
        price: "5,00 €",
      },

      {
        number: "S5",
        arabic: "ليمون بالنعناع",
        german: "Zitronensaft mit Minze 0,3l",
        price: "4,00 €",
      },
    ],
  },
];
