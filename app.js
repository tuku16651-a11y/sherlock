/* =============================================
   SHERLOCK SUSHI — APP.JS
   ============================================= */

'use strict';

// ─── Constants ───────────────────────────────
const WA_NUMBER = '994559406018';
const PAGE_SCROLL_MAP = {};
let currentPage = 'home';
let currentModalProduct = null;
let currentVacancy = null;
let cart = [];

// ─── MENU DATA ────────────────────────────────
// All menu items use sushi-food.jpg as product image

const FOOD_IMG = 'images/sushi-food.jpg';

const menuData = {
  boxes: [
    {
      id: 'box1',
      name: 'Small Box',
      desc: 'California Roll, Alaska Roll, Salmon Maki Roll — 24 ədəd.',
      price: 20.90,
      weight: '24 əd.',
      img: FOOD_IMG,
      badge: 'Populyar'
    },
    {
      id: 'box2',
      name: 'Tələbə Box',
      desc: 'California Roll, Chips Chicken Roll, Hot Crab Roll — 26 ədəd.',
      price: 20.90,
      weight: '26 əd.',
      img: FOOD_IMG,
      badge: 'Sərfəli'
    },
    {
      id: 'box3',
      name: 'Mix Box',
      desc: 'California Roll, Philadelphia Roll, Kappa Maki Roll, Salmon Maki Roll, Hot Mix Roll — 26 ədəd.',
      price: 20.90,
      weight: '26 əd.',
      img: FOOD_IMG
    },
    {
      id: 'box4',
      name: 'Love Box',
      desc: 'Philadelphia Roll, California Roll, Ebi Maki Roll — 24 ədəd.',
      price: 21.90,
      weight: '24 əd.',
      img: FOOD_IMG
    },
    {
      id: 'box5',
      name: 'Sakura Box',
      desc: 'California Roll, Alaska Roll, Crab Maki Roll, Hot Crab Roll — 34 ədəd.',
      price: 23.90,
      weight: '34 əd.',
      img: FOOD_IMG
    },
    {
      id: 'box6',
      name: 'Tokio Box',
      desc: 'Cheese Roll, Chips Chicken Roll, Baked Salmon Roll, Hot Crab Roll — 34 ədəd.',
      price: 24.90,
      weight: '34 əd.',
      img: FOOD_IMG
    },
    {
      id: 'box7',
      name: 'Maki Box',
      desc: 'Crab Maki Roll, Ebi Maki Roll, Salmon Maki Roll, Chicken Maki Roll, Cappa Maki Roll — 40 ədəd.',
      price: 25.90,
      weight: '40 əd.',
      img: FOOD_IMG
    },
    {
      id: 'box8',
      name: 'Baked Box',
      desc: 'Baked Salmon Maki Roll, Baked Hot Crab Roll, Baked Ebi Roll, Baked California Roll — 32 ədəd.',
      price: 26.90,
      weight: '32 əd.',
      img: FOOD_IMG
    },
    {
      id: 'box9',
      name: 'Work Lunch Box',
      desc: 'California Roll, Chips Chicken Roll, Bonita Salmon Roll, Hot Chicken Roll, Hot Crab Roll — 44 ədəd.',
      price: 27.90,
      weight: '44 əd.',
      img: FOOD_IMG,
      badge: 'İş Günü'
    }
  ],

  rolls: [
    // ROLL
    { id: 'rl1',  name: 'Philadelphia Roll',      desc: 'Krem pendir, somon, avokado ilə klassik uramaki roll.',             price: 11, weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl2',  name: 'California Roll',         desc: 'Krab əti, avokado, salatalıq, tobiko kürüsü ilə klassik roll.',    price: 10, weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl3',  name: 'Cheese Roll',             desc: 'Kremli pendir içlikli, xüsusi sous ilə servis edilən roll.',        price: 9,  weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl4',  name: 'Alaska Roll',             desc: 'Somon, krem pendir, avokado ilə hazırlanmış Alaska roll.',          price: 9,  weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl5',  name: 'Chicken Roll',            desc: 'Toyuq əti, salatalıq, sous ilə hazırlanmış roll.',                 price: 8,  weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl6',  name: 'Dragon Roll',             desc: 'Karides tempura, avokado, unagi sousu ilə zəngin roll.',            price: 12, weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl7',  name: 'California Ebi Roll',     desc: 'Ebi (karides) əlavəli California roll.',                           price: 11, weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl8',  name: 'California Salmon Roll',  desc: 'Somon əlavəli California roll.',                                    price: 11, weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl9',  name: 'Ebi Roll',                desc: 'Karides (ebi) içlikli, wasabi mayonezi ilə servis edilən roll.',   price: 11, weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl10', name: 'Tuna Roll',               desc: 'Ton balığı ilə hazırlanmış klassik roll.',                         price: 14, weight: '8 əd.', img: FOOD_IMG },
    { id: 'rl11', name: 'Bonito Roll',             desc: 'Bonito balığı ilə hazırlanmış xüsusi roll.',                       price: 12, weight: '8 əd.', img: FOOD_IMG },
    // HOT ROLL
    { id: 'rl12', name: 'Hot Salmon Roll',         desc: 'Qızardılmış somon içlikli, wasabi mayonezi ilə isti roll.',        price: 11, weight: '8 əd.', img: FOOD_IMG, badge: 'İsti' },
    { id: 'rl13', name: 'Hot California Roll',     desc: 'İsti qızardılmış California roll, xüsusi sous ilə.',               price: 10, weight: '8 əd.', img: FOOD_IMG, badge: 'İsti' },
    { id: 'rl14', name: 'Hot Dragon Roll',         desc: 'İsti Dragon roll, ədviyyatlı sous ilə servis.',                    price: 12, weight: '8 əd.', img: FOOD_IMG, badge: 'İsti' },
    { id: 'rl15', name: 'Hot Ebi Roll',            desc: 'İsti qızardılmış karides içlikli roll.',                           price: 12, weight: '8 əd.', img: FOOD_IMG, badge: 'İsti' },
    { id: 'rl16', name: 'Hot Caesar Roll',         desc: 'Caesar sousu ilə hazırlanmış isti roll.',                          price: 9,  weight: '8 əd.', img: FOOD_IMG, badge: 'İsti' },
    { id: 'rl17', name: 'Hot Crab Roll',           desc: 'İsti qızardılmış krab içlikli, xüsusi Sherlock sousu ilə.',       price: 9,  weight: '8 əd.', img: FOOD_IMG, badge: 'İsti' },
    { id: 'rl18', name: 'Hot Chicken Roll',        desc: 'İsti toyuq əti içlikli, ədviyyatlı sous ilə servis edilən roll.',  price: 9,  weight: '8 əd.', img: FOOD_IMG, badge: 'İsti' },
    // BAKED ROLL
    { id: 'rl19', name: 'Baked California Roll',   desc: 'Fırında bişirilmiş California roll, kremli sous ilə.',             price: 14, weight: '8 əd.', img: FOOD_IMG, badge: 'Baked' },
    { id: 'rl20', name: 'Baked Sake Maki',         desc: 'Fırında bişirilmiş somon maki roll.',                              price: 14, weight: '8 əd.', img: FOOD_IMG, badge: 'Baked' },
    { id: 'rl21', name: 'Baked Tuna Maki',         desc: 'Fırında bişirilmiş ton balığı maki.',                              price: 13, weight: '8 əd.', img: FOOD_IMG, badge: 'Baked' },
    { id: 'rl22', name: 'Baked Ebi Roll',          desc: 'Fırında bişirilmiş karides roll.',                                 price: 13, weight: '8 əd.', img: FOOD_IMG, badge: 'Baked' },
    { id: 'rl23', name: 'Baked Alaska Salmon Roll',desc: 'Fırında bişirilmiş Alaska somon roll.',                            price: 12, weight: '8 əd.', img: FOOD_IMG, badge: 'Baked' },
    // MAKI ROLL
    { id: 'rl24', name: 'Sake Maki Salmon Roll',   desc: 'Təzə somon ilə klassik maki roll.',                                price: 9,  weight: '10 əd.', img: FOOD_IMG },
    { id: 'rl25', name: 'Kappa Maki Cucumber',     desc: 'Xiyar ilə vegetarian maki roll.',                                  price: 7,  weight: '10 əd.', img: FOOD_IMG },
    { id: 'rl26', name: 'Tuna Maki Roll',          desc: 'Ton balığı ilə klassik maki roll.',                                price: 10, weight: '10 əd.', img: FOOD_IMG },
    { id: 'rl27', name: 'Ebi Maki Roll',           desc: 'Karides ilə maki roll.',                                           price: 9,  weight: '10 əd.', img: FOOD_IMG },
    { id: 'rl28', name: 'Avocado Maki Roll',       desc: 'Avokado ilə vegetarian maki roll.',                                price: 7,  weight: '10 əd.', img: FOOD_IMG },
    // DESSERT ROLL
    { id: 'rl29', name: 'Chocolate Roll',          desc: 'Şokolad sousu ilə hazırlanmış desert roll.',                       price: 7,  weight: '6 əd.', img: FOOD_IMG, badge: 'Desert' },
    { id: 'rl30', name: 'White Chocolate Roll',    desc: 'Ağ şokolad ilə hazırlanmış desert roll.',                          price: 7,  weight: '6 əd.', img: FOOD_IMG, badge: 'Desert' },
    { id: 'rl31', name: "Chef's Dessert Roll",     desc: 'Aşpazın xüsusi desert roll resepti.',                              price: 9,  weight: '6 əd.', img: FOOD_IMG, badge: 'Desert' },
    // EXOTIC ROLL
    { id: 'rl32', name: 'Salmon Avocado Roll',     desc: 'Somon və avokado ilə ekzotik roll.',                               price: 16, weight: '8 əd.', img: FOOD_IMG, badge: 'Ekzotik' },
    { id: 'rl33', name: 'Tuna Mango Roll',         desc: 'Ton balığı və mango ilə ekzotik roll.',                            price: 15, weight: '8 əd.', img: FOOD_IMG, badge: 'Ekzotik' },
    { id: 'rl34', name: 'Salmon Tuna Roll',        desc: 'Somon və ton balığı birlikdə hazırlanmış ekzotik roll.',           price: 18, weight: '8 əd.', img: FOOD_IMG, badge: 'Ekzotik' },
    { id: 'rl35', name: 'Ebi Mango Roll',          desc: 'Karides və mango ilə ekzotik roll.',                               price: 15, weight: '8 əd.', img: FOOD_IMG, badge: 'Ekzotik' },
    { id: 'rl36', name: 'California Maki Roll',    desc: 'California stilind maki roll.',                                    price: 13, weight: '8 əd.', img: FOOD_IMG, badge: 'Ekzotik' },
    // BLACK ROLL
    { id: 'rl37', name: 'Philadelphia Black Roll',    desc: 'Qara nori, krem pendir, somon ilə Philadelphia black roll.',    price: 16, weight: '8 əd.', img: FOOD_IMG, badge: 'Black' },
    { id: 'rl38', name: 'California Mix Black Roll',  desc: 'Qara nori ilə hazırlanmış California Mix roll.',                price: 14, weight: '8 əd.', img: FOOD_IMG, badge: 'Black' },
    { id: 'rl39', name: 'Ebi Philadelphia Black Roll',desc: 'Qara nori, ebi, krem pendir ilə Philadelphia black roll.',      price: 17, weight: '8 əd.', img: FOOD_IMG, badge: 'Black' },
    { id: 'rl40', name: 'Dragon Black Roll',          desc: 'Qara nori ilə hazırlanmış Dragon roll.',                       price: 18, weight: '8 əd.', img: FOOD_IMG, badge: 'Black' },
    { id: 'rl41', name: 'Mango Avocado Black Roll',   desc: 'Qara nori, mango, avokado ilə ekzotik black roll.',            price: 13, weight: '8 əd.', img: FOOD_IMG, badge: 'Black' }
  ],

  nigiri: [
    // NIGIRI
    { id: 'ni1', name: 'Salmon Nigiri', desc: 'Təzə somon ilə əl ilə yoğurulmuş pirinc üzərində nigiri.', price: 8, weight: '2 əd.', img: FOOD_IMG },
    { id: 'ni2', name: 'Tuna Nigiri',  desc: 'Premium ton balığı ilə nigiri.',                              price: 8, weight: '2 əd.', img: FOOD_IMG },
    { id: 'ni3', name: 'Ebi Nigiri',   desc: 'Bişirilmiş böyük karides (ebi) ilə nigiri.',                 price: 7, weight: '2 əd.', img: FOOD_IMG },
    // GUNKAN
    { id: 'gk1', name: 'Ebi Günkan',               desc: 'Karides ilə hazırlanmış günkan.',                price: 3, weight: '2 əd.', img: FOOD_IMG },
    { id: 'gk2', name: 'Salmon Günkan',             desc: 'Somon ilə hazırlanmış günkan.',                  price: 3, weight: '2 əd.', img: FOOD_IMG },
    { id: 'gk3', name: 'Tuna Günkan',               desc: 'Ton balığı ilə hazırlanmış günkan.',             price: 4, weight: '2 əd.', img: FOOD_IMG },
    { id: 'gk4', name: 'Mango Avocado Spicy Günkan',desc: 'Mango, avokado, ədviyyat ilə günkan.',          price: 3, weight: '2 əd.', img: FOOD_IMG },
    { id: 'gk5', name: 'Crab Günkan',               desc: 'Krab əti ilə hazırlanmış günkan.',               price: 3, weight: '2 əd.', img: FOOD_IMG }
  ],

  soup: [
    { id: 'sp1', name: 'Tom Yum Salmon',    desc: 'Somon ilə hazırlanmış ənənəvi Tom Yum şorbası.',          price: 13, weight: '350ml', img: FOOD_IMG },
    { id: 'sp2', name: 'Tom Yum with Ebi',  desc: 'Karides (Ebi) ilə hazırlanmış Tom Yum şorbası.',          price: 14, weight: '350ml', img: FOOD_IMG },
    { id: 'sp3', name: 'Tom Yum with Seafood', desc: 'Dəniz məhsulları ilə zəngin Tom Yum şorbası.',         price: 12, weight: '350ml', img: FOOD_IMG },
    { id: 'sp4', name: 'Ramen Soup',         desc: 'Ənənəvi Yapon ramen şorbası, toyuq suyu bazasında.',      price: 15, weight: '400ml', img: FOOD_IMG }
  ],

  salad: [
    { id: 'sl1', name: 'Tuna Salad',    desc: 'Ton balığı, göyərti, xüsusi sous ilə təzə salat.',           price: 8, weight: '200q', img: FOOD_IMG },
    { id: 'sl2', name: 'Salmon Salad',  desc: 'Somon, avokado, göyərti, limon sousu ilə salat.',             price: 7, weight: '200q', img: FOOD_IMG },
    { id: 'sl3', name: 'Crab Salad',    desc: 'Krab əti, xiyar, mayonez ilə dadlı salat.',                   price: 8, weight: '200q', img: FOOD_IMG },
    { id: 'sl4', name: 'Asian Salad',   desc: 'Yapon stili müxtəlif tərəvəzlər ilə Asiya salatı.',           price: 6, weight: '200q', img: FOOD_IMG },
    { id: 'sl5', name: 'Hot Ebi Salad', desc: 'İsti karides (Ebi) ilə qızardılmış salat.',                   price: 9, weight: '200q', img: FOOD_IMG, badge: 'İsti' }
  ],

  snack: [
    { id: 'sn1', name: 'Calamari Rings',         desc: 'Qızardılmış kalamar halqaları, limon sousu ilə.',     price: 7, weight: '150q', img: FOOD_IMG },
    { id: 'sn2', name: 'Ebi Asian Tempura',       desc: 'Xəmirdə qızardılmış Asiya stili karides tempura.',   price: 9, weight: '150q', img: FOOD_IMG },
    { id: 'sn3', name: 'Chicken Nuggets Tempura', desc: 'Xəmirdə qızardılmış toyuq nuggets tempura.',         price: 6, weight: '150q', img: FOOD_IMG },
    { id: 'sn4', name: 'Salmon Sticks',           desc: 'Qızardılmış somon çubuqları.',                        price: 7, weight: '150q', img: FOOD_IMG },
    { id: 'sn5', name: 'Cheese Sticks',           desc: 'Qızardılmış pendir çubuqları, sous ilə.',             price: 6, weight: '150q', img: FOOD_IMG },
    { id: 'sn6', name: 'Free',                    desc: 'Pulsuz snack — hər sifarişə əlavə.',                  price: 4, weight: '100q', img: FOOD_IMG, badge: 'Pulsuz' }
  ],

  noodles: [
    { id: 'nd1', name: 'Funchoza Salmon',    desc: 'Somon ilə hazırlanmış funchoza.',                          price: 12, weight: '300q', img: FOOD_IMG },
    { id: 'nd2', name: 'Funchoza Ebi',       desc: 'Karides (Ebi) ilə hazırlanmış funchoza.',                 price: 13, weight: '300q', img: FOOD_IMG },
    { id: 'nd3', name: 'Funchoza Seafood',   desc: 'Dəniz məhsulları ilə funchoza.',                          price: 14, weight: '300q', img: FOOD_IMG },
    { id: 'nd4', name: 'Noodles Salmon',     desc: 'Somon ilə hazırlanmış Yapon noodles.',                    price: 9,  weight: '300q', img: FOOD_IMG },
    { id: 'nd5', name: 'Noodles Ebi',        desc: 'Karides (Ebi) ilə hazırlanmış noodles.',                  price: 10, weight: '300q', img: FOOD_IMG },
    { id: 'nd6', name: 'Noodles Chicken',    desc: 'Toyuq əti ilə hazırlanmış noodles.',                      price: 8,  weight: '300q', img: FOOD_IMG },
    { id: 'nd7', name: 'Noodles Seafood',    desc: 'Dəniz məhsulları ilə zəngin noodles.',                    price: 11, weight: '300q', img: FOOD_IMG }
  ],

  burger: [
    { id: 'bg1', name: 'Salmon Burger',            desc: 'Somon ilə hazırlanmış xüsusi burger.',              price: 12, weight: '250q', img: FOOD_IMG },
    { id: 'bg2', name: 'Ebi Burger',               desc: 'Karides (Ebi) ilə hazırlanmış burger.',             price: 12, weight: '250q', img: FOOD_IMG },
    { id: 'bg3', name: 'Tuna Burger',              desc: 'Ton balığı ilə hazırlanmış burger.',                 price: 13, weight: '250q', img: FOOD_IMG },
    { id: 'bg4', name: 'Salmon Special Sandwich',  desc: 'Somon ilə xüsusi sandwich.',                        price: 9,  weight: '200q', img: FOOD_IMG },
    { id: 'bg5', name: 'California Sandwich',      desc: 'California stili sandwich.',                        price: 10, weight: '200q', img: FOOD_IMG },
    { id: 'bg6', name: 'Tuna Sandwich',            desc: 'Ton balığı ilə sandwich.',                          price: 8,  weight: '200q', img: FOOD_IMG }
  ]
};

const faqData = [
  {
    q: 'Çatdırılma müddəti nə qədərdir?',
    a: 'Bakı daxilindəki sifarişlər üçün ortalama çatdırılma müddəti 30-60 dəqiqədir. Sifariş verildikdən sonra kuryerimiz sizinlə əlaqə saxlayır.'
  },
  {
    q: 'Minimum sifariş məbləği nədir?',
    a: 'Minimum sifariş məbləği 10 AZN-dir. Çatdırılma xidmətimiz pulsuzdur (müəyyən rayonlar üçün şərtlər tətbiq oluna bilər).'
  },
  {
    q: 'Rezervasiya üçün depozit tələb olunurmu?',
    a: 'Xeyr, rezervasiya tamamilə pulsuzdur. Masa saxlamaq üçün heç bir ödəniş tələb edilmir. Sadəcə gəlmədiyiniz halda xəbər verməyinizi rica edirik.'
  },
  {
    q: 'Allergenləri nəzərə alırsınızmı?',
    a: 'Bəli, biz allergen məlumatlarını çox ciddi qəbul edirik. Sifarişinizi verərkən xüsusi diet tələblərinizi qeyd etdikdə aşpazımız uyğun hazırlayacaq.'
  },
  {
    q: 'Ödəniş üsulları hansılardır?',
    a: 'Nağd pul, bank kartı (Kapital Bank, ABB, PASHA Bank), ANSAN və onlayn ödəniş sistemləri qəbul edilir.'
  },
  {
    q: 'Korporativ sifarişlər mümkündürmü?',
    a: 'Bəli! Şirkətlər, tədbirlər və böyük qruplar üçün xüsusi korporativ menyu və endirim proqramlarımız mövcuddur. WhatsApp vasitəsilə bizimlə əlaqə saxlayın.'
  },
  {
    q: 'Qablaşdırma necədir? Eco-friendlydir?',
    a: 'Biz ekoloji cəhətdən təmiz, geri dönüşümlü qablaşdırma materiallarından istifadə edirik. Soyuducu paketlər suşini çatdırılma zamanı ən təzə vəziyyətdə saxlayır.'
  },
  {
    q: 'Restoranın iş saatları necədir?',
    a: 'B.E – Cümə: 10:00–23:00 | Şənbə: 10:00–24:00 | Bazar: 11:00–23:00. Çatdırılma xidməti restoran iş saatları daxilindədir.'
  }
];

const vacanciesData = [
  {
    id: 'v1',
    icon: '🍱',
    title: 'Suşi Ustad (Itamae)',
    type: 'Tam Ştat',
    salary: '800 – 1200 AZN',
    schedule: 'Dəyişən növbə (2/2)',
    requirements: 'Ən az 1 il suşi hazırlama təcrübəsi, gigiyena sertifikatı',
    desc: 'Sherlock Sushi mütbəxinə peşəkar suşi ustad axtarırıq. Kreativlik, dəqiqlik və komanda ruhu vacibdir.',
    duties: 'Menyu maddələrinin hazırlanması, freshness nəzarəti, müştəri sifarişlərinin icrası'
  },
  {
    id: 'v2',
    icon: '🛵',
    title: 'Kuryer',
    type: 'Yarım / Tam Ştat',
    salary: '500 – 800 AZN + bonus',
    schedule: 'Çevik qrafik',
    requirements: 'Sürücülük vəsiqəsi (B kateqoriyası), Bakı ərazisinə bələdlik',
    desc: 'Sürətli, etibarlı kuryer işə qəbul edirik. Öz nəqliyyatı olan üçün əlavə bonus nəzərdə tutulur.',
    duties: 'Sifarişlərin vaxtında çatdırılması, müştəri ilə ünsiyyət'
  },
  {
    id: 'v3',
    icon: '👩‍💼',
    title: 'Kassir / Operator',
    type: 'Tam Ştat',
    salary: '600 – 900 AZN',
    schedule: 'Dəyişən növbə',
    requirements: 'Kompüter savadlılığı, ünsiyyət bacarığı, 18+ yaş',
    desc: 'Müştəri xidmətləri üzrə kassir/operator axtarırıq.',
    duties: 'Sifarişlərin qəbulu, ödəniş əməliyyatları, müştəri məmnuniyyəti'
  },
  {
    id: 'v4',
    icon: '🧹',
    title: 'Sanitar Texnik',
    type: 'Tam Ştat',
    salary: '500 – 650 AZN',
    schedule: 'Günlük, 09:00–18:00',
    requirements: 'Gigiyena standartları bilikləri, fiziki hazırlıq',
    desc: 'Mətbəx və restoran sahəsinin gigiyena standartlarına uyğun saxlanılması üçün işçi axtarırıq.',
    duties: 'Restoran sahəsinin təmizliyi, sanitariya standartlarına riayət'
  }
];

// ─── PAGE NAVIGATION ───────────────────────────

function showPage(pageId) {
  const oldPage = document.getElementById('page-' + currentPage);
  if (oldPage) {
    PAGE_SCROLL_MAP[currentPage] = window.scrollY;
    oldPage.classList.remove('active');
  }
  currentPage = pageId;
  const newPage = document.getElementById('page-' + pageId);
  if (!newPage) return;
  newPage.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
  const savedScroll = PAGE_SCROLL_MAP[pageId] || 0;
  window.scrollTo({ top: savedScroll, behavior: 'instant' });
}

function goBack() {
  PAGE_SCROLL_MAP[currentPage] = window.scrollY;
  showPage('home');
}

// ─── MOBILE MENU ───────────────────────────────
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('mobileOverlay');
  const isOpen = menu.classList.contains('open');
  menu.classList.toggle('open', !isOpen);
  overlay.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

// ─── CART ─────────────────────────────────────

function toggleCart() {
  const panel = document.getElementById('cartPanel');
  const backdrop = document.getElementById('cartBackdrop');
  const isOpen = panel.classList.contains('open');
  panel.classList.toggle('open', !isOpen);
  backdrop.classList.toggle('visible', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function addToCart(productId) {
  const product = findProduct(productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  renderCart();
  bumpCartCount();
  showToast(`${product.name} səbətə əlavə edildi!`);
}

function addToCartFromModal() {
  if (!currentModalProduct) return;
  addToCart(currentModalProduct.id);
  closeProductModalBtn();
}

function findProduct(id) {
  for (const cat of Object.values(menuData)) {
    const found = cat.find(p => p.id === id);
    if (found) return found;
  }
  return null;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else renderCart();
}

function renderCart() {
  const itemsEl  = document.getElementById('cartItems');
  const emptyEl  = document.getElementById('cartEmpty');
  const footerEl = document.getElementById('cartFooter');
  const countEl  = document.getElementById('cartCount');
  const totalEl  = document.getElementById('cartTotal');

  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  countEl.textContent = totalItems;
  totalEl.textContent = totalPrice.toFixed(2) + ' AZN';

  const isEmpty = cart.length === 0;
  emptyEl.style.display = isEmpty ? 'flex' : 'none';
  footerEl.style.display = isEmpty ? 'none' : 'block';

  itemsEl.querySelectorAll('.cart-item').forEach(el => el.remove());

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/sushi-food.jpg'" />
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(item.name)}</div>
        <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} AZN</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" onclick="changeQty('${item.id}',-1)" aria-label="Azalt">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="qty-btn" onclick="changeQty('${item.id}',1)" aria-label="Artır">+</button>
      </div>
    `;
    itemsEl.insertBefore(div, emptyEl);
  });
}

function bumpCartCount() {
  const el = document.getElementById('cartCount');
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 300);
}

function sendOrder() {
  if (cart.length === 0) return;
  let msg = '🍱 *YENİ SİFARİŞ — Sherlock Sushi*\n\n';
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. ${item.name}\n   ${item.qty} × ${item.price.toFixed(2)} AZN = ${(item.qty * item.price).toFixed(2)} AZN\n`;
  });
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  msg += '━━━━━━━━━━━━━━━━━━━━\n';
  msg += `💰 *CƏMİ: ${total.toFixed(2)} AZN*\n\n`;
  msg += '📍 Çatdırılma ünvanınızı yazın.';
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

// ─── MENU RENDERING ───────────────────────────

function renderMenuGrids() {
  Object.entries(menuData).forEach(([cat, items]) => {
    const grid = document.getElementById('grid-' + cat);
    if (!grid) return;
    grid.innerHTML = '';
    items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', item.name);

      const badgeHtml = item.badge
        ? `<div style="position:absolute;top:10px;left:10px;background:var(--accent);color:#fff;font-size:11px;font-weight:700;padding:3px 9px;border-radius:100px;z-index:1;">${escHtml(item.badge)}</div>`
        : '';

      card.innerHTML = `
        <div class="menu-card-img">
          ${badgeHtml}
          <img src="${item.img}" alt="${escHtml(item.name)}" loading="lazy" onerror="this.src='images/sushi-food.jpg'" />
        </div>
        <div class="menu-card-body">
          <div class="menu-card-name">${escHtml(item.name)}</div>
          <div class="menu-card-desc">${escHtml(item.desc)}</div>
          <div class="menu-card-footer">
            <span class="menu-card-price">${item.price.toFixed(2)} AZN</span>
            <button class="add-btn" onclick="event.stopPropagation();addToCart('${item.id}')" aria-label="Səbətə əlavə et">+</button>
          </div>
        </div>
      `;
      card.addEventListener('click', () => openProductModal(item));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openProductModal(item); });
      grid.appendChild(card);
    });
  });
}

function switchTab(tabId) {
  document.querySelectorAll('.menu-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabId);
  });
  document.querySelectorAll('.menu-section').forEach(s => {
    s.classList.toggle('active', s.id === 'tab-' + tabId);
  });
}

// ─── PRODUCT MODAL ────────────────────────────

function openProductModal(product) {
  currentModalProduct = product;
  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalImg').alt = product.name;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;
  document.getElementById('modalPrice').textContent = product.price.toFixed(2) + ' AZN';
  document.getElementById('modalWeight').textContent = product.weight;
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal(e) {
  if (e.target === document.getElementById('productModal')) closeProductModalBtn();
}
function closeProductModalBtn() {
  document.getElementById('productModal').classList.remove('open');
  currentModalProduct = null;
  document.body.style.overflow = '';
}

// ─── FAQ RENDERING ────────────────────────────

function renderFaq() {
  const list = document.getElementById('faqList');
  faqData.forEach(item => {
    const el = document.createElement('div');
    el.className = 'faq-item';
    el.innerHTML = `
      <div class="faq-q" onclick="toggleFaq(this)">
        <span>${escHtml(item.q)}</span>
        <span class="faq-icon">+</span>
      </div>
      <div class="faq-a">
        <div class="faq-a-inner">${escHtml(item.a)}</div>
      </div>
    `;
    list.appendChild(el);
  });
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ─── VACANCIES RENDERING ──────────────────────

function renderVacancies() {
  const grid = document.getElementById('vacancyGrid');
  vacanciesData.forEach(v => {
    const card = document.createElement('div');
    card.className = 'vacancy-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <div class="vacancy-card-icon">${v.icon}</div>
      <div class="vacancy-card-title">${escHtml(v.title)}</div>
      <div class="vacancy-card-type">${escHtml(v.type)}</div>
      <div class="vacancy-card-desc">${escHtml(v.desc)}</div>
      <div class="vacancy-card-arrow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>
    `;
    card.addEventListener('click', () => openVacancyModal(v));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openVacancyModal(v); });
    grid.appendChild(card);
  });
}

// ─── VACANCY MODAL ────────────────────────────

function openVacancyModal(v) {
  currentVacancy = v;
  document.getElementById('vacancyModalIcon').textContent = v.icon;
  document.getElementById('vacancyModalTitle').textContent = v.title;
  document.getElementById('vacancyModalType').textContent = v.type;
  const detailsEl = document.getElementById('vacancyModalDetails');
  detailsEl.innerHTML = `
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">💰 Maaş:</span><span class="vacancy-detail-value">${escHtml(v.salary)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">⏰ Qrafik:</span><span class="vacancy-detail-value">${escHtml(v.schedule)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📋 Tələblər:</span><span class="vacancy-detail-value">${escHtml(v.requirements)}</span></div>
    <div class="vacancy-detail-row"><span class="vacancy-detail-label">📝 Vəzifələr:</span><span class="vacancy-detail-value">${escHtml(v.duties)}</span></div>
  `;
  document.getElementById('vacancyModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeVacancyModal(e) {
  if (e.target === document.getElementById('vacancyModal')) closeVacancyModalBtn();
}
function closeVacancyModalBtn() {
  document.getElementById('vacancyModal').classList.remove('open');
  currentVacancy = null;
  document.body.style.overflow = '';
}

function applyVacancy() {
  if (!currentVacancy) return;
  const msg = `👋 *Vakansiyaya Müraciət — Sherlock Sushi*\n\n🔹 *Vəzifə:* ${currentVacancy.title}\n🔹 *İş rejimi:* ${currentVacancy.type}\n\nSalam! Bu vakansiya ilə maraqlanıram. Əlaqə saxlamaq istəyirəm.`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── RESERVATION ─────────────────────────────

function submitReservation(e) {
  e.preventDefault();
  const name   = document.getElementById('resName').value.trim();
  const phone  = document.getElementById('resPhone').value.trim();
  const date   = document.getElementById('resDate').value;
  const time   = document.getElementById('resTime').value;
  const guests = document.getElementById('resGuests').value;
  const note   = document.getElementById('resNote').value.trim();

  if (!name || !phone || !date || !time || !guests) {
    showToast('Zəhmət olmasa bütün məcburi xanaları doldurun!');
    return;
  }

  const formattedDate = formatDate(date);
  let msg = `📅 *REZERVASIYA — Sherlock Sushi*\n\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Ad, Soyad:* ${name}\n`;
  msg += `📞 *Telefon:* ${phone}\n`;
  msg += `📅 *Tarix:* ${formattedDate}\n`;
  msg += `⏰ *Saat:* ${time}\n`;
  msg += `👥 *Nəfər sayı:* ${guests}\n`;
  if (note) msg += `📝 *Qeyd:* ${note}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
}

// ─── GALLERY LIGHTBOX ─────────────────────────

function openLightbox(img) {
  const lb = document.getElementById('lightbox');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightboxImg').alt = img.alt;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── TOAST ────────────────────────────────────

function showToast(msg) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// ─── UTILS ────────────────────────────────────

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString('az-AZ', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

// ─── KEYBOARD ACCESSIBILITY ───────────────────

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (document.getElementById('productModal').classList.contains('open')) {
      closeProductModalBtn();
    } else if (document.getElementById('vacancyModal').classList.contains('open')) {
      closeVacancyModalBtn();
    } else if (document.getElementById('lightbox').classList.contains('open')) {
      closeLightbox();
    } else if (document.getElementById('cartPanel').classList.contains('open')) {
      toggleCart();
    } else if (document.getElementById('mobileMenu').classList.contains('open')) {
      toggleMenu();
    }
  }
});

// ─── INIT ─────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {
  renderMenuGrids();
  renderFaq();
  renderVacancies();
  renderCart();

  const today = new Date().toISOString().split('T')[0];
  const resDate = document.getElementById('resDate');
  if (resDate) resDate.min = today;
});
