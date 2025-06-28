// Quiz verileri - Resim isimlerine göre otomatik marka belirleme
// Resim isimleri: "car" = Cartier, "tif" = Tiffany, "dior" = Dior, "cha" = Chanel, "guc" = Gucci, "pra" = Prada

// Function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Marka belirleme fonksiyonu
const getBrandFromImageName = (imageName) => {
  const lowerName = imageName.toLowerCase();
  
  if (lowerName.startsWith('car')) return "Cartier";
  if (lowerName.startsWith('tif')) return "Tiffany & Co.";
  if (lowerName.startsWith('dior')) return "Dior";
  if (lowerName.startsWith('cha')) return "Chanel";
  if (lowerName.startsWith('guc')) return "Gucci";
  if (lowerName.startsWith('pra')) return "Prada";
  
  return "Unknown Brand"; // Varsayılan marka
};

// Tüm markalar listesi
const allBrands = [
  "Tiffany & Co.",
  "Cartier", 
  "Chanel",
  "Dior",
  "Bvlgari",
  "Van Cleef & Arpels",
  "Gucci",
  "Prada",
  "Versace",
  "Fendi",
  "Yves Saint Laurent",
  "Givenchy"
];

// Seçenek oluşturma fonksiyonu
const createOptions = (correctBrand) => {
  const otherBrands = allBrands.filter(brand => brand !== correctBrand);
  const shuffledOthers = shuffleArray(otherBrands).slice(0, 3);
  const options = [correctBrand, ...shuffledOthers];
  return shuffleArray(options); // Seçenekleri karıştır
};

// Public klasöründeki resimlerin listesi
// Bu listeyi kendi resimlerinizle güncelleyin
const imageList = [
  // Cartier resimleri
  "carr1.png", "carr2.png", "carr3.png", "carr4.png", "carr5.png", "carr6.png", "carr7.png", "carr8.png", "carr9.png", "carr10.png", "carr11.png", "carr12.png",
  "carbra1.png", "carbra2.png", "carbra3.png", "carbra4.png", "carbra5.png", "carbra6.png", "carbra7.png", "carbra8.png", "carbra9.png", "carbra10.png", "carbra11.png", "carbra12.png", "carbra13.png", "carbra14.png",
  "care1.png", "care2.png", "care3.png", "care4.png", "care5.png", "care6.png", "care7.png", "care8.png", "care9.png", "care10.png", "care11.png", "care12.png",
  "carn1.png", "carn2.png", "carn3.png", "carn4.png", "carn5.png", "carn6.png", "carn7.png", "carn8.png", "carn9.png", "carn10.png", "carn11.png", "carn12.png",
  
  // Tiffany resimleri
  "tifbra1.png", "tifbra2.png", "tifbra3.png", "tifbra4.png", "tifbra5.png", "tifbra6.png", "tifbra7.png", "tifbra8.png", "tifbra9.png", "tifbra10.png",
  "tifbro1.png", "tifbro2.png", "tifbro3.png", "tifbro4.png", "tifbro5.png", "tifbro6.png", "tifbro7.png", "tifbro8.png", "tifbro9.png", "tifbro10.png",
  "tifear1.png", "tifear2.png", "tifear3.png", "tifear4.png", "tifear5.png", "tifear6.png", "tifear7.png", "tifear8.png", "tifear9.png", "tifear10.png",
  "tifnec1.png", "tifnec2.png", "tifnec3.png", "tifnec4.png", "tifnec5.png", "tifnec6.png", "tifnec7.png", "tifnec8.png", "tifnec9.png", "tifnec10.png",
  "tifr1.png", "tifr2.png", "tifr3.png", "tifr4.png", "tifr5.png", "tifr6.png", "tifr7.png", "tifr8.png", "tifr9.png", "tifr10.png",
  
  // Dior resimleri
  "diorr1.webp", "diorr2.webp", "diorr3.webp", "diorr4.webp", "diorr5.webp", "diorr6.webp", "diorr7.webp", "diorr8.webp",
  "diorbra1.webp", "diorbra2.webp", "diorbra3.webp", "diorbra4.webp", "diorbra5.webp", "diorbra6.webp", "diorbra7.webp", "diorbra8.webp", "diorbra9.webp", "diorbra10.webp",
  "diorbro1.webp", "diorbro2.webp", "diorbro3.webp", "diorbro4.webp", "diorbro5.webp", "diorbro6.webp",
  "diorn1.webp", "diorn2.webp", "diorn3.webp", "diorn4.webp", "diorn5.webp", "diorn6.webp", "diorn7.webp", "diorn8.webp", "diorn9.webp", "diorn10.webp", "diorn11.webp",
  "diore1.webp", "diore2.webp", "diore3.webp", "diore4.webp", "diore5.webp", "diore6.webp", "diore7.webp", "diore8.webp", "diore9.webp", "diore10.webp", "diore11.webp", "diore12.webp", "diore13.webp", "diore14.webp",
  
  // Chanel resimleri
  "chabro1.webp", "chabro2.webp", "chabro3.webp", "chabro4.webp",
  "chan1.webp", "chan2.webp", "chan3.webp", "chan4.webp", "chan5.webp", "chan6.webp", "chan7.webp", "chan8.webp", "chan9.webp", "chan10.webp", "chan11.webp", "chan12.webp",
  "chae1.webp", "chae2.webp", "chae3.webp", "chae4.webp", "chae5.webp", "chae6.webp", "chae7.webp", "chae8.webp", "chae9.webp", "chae10.webp", "chae11.webp", "chae12.webp",
  "chabra1.webp", "chabra2.webp", "chabra3.webp", "chabra4.webp", "chabra5.webp", "chabra6.webp", "chabra7.webp", "chabra8.webp", "chabra9.webp", "chabra10.webp",
  "char1.webp", "char2.webp", "char3.webp", "char4.webp", "char5.webp", "char6.webp", "char7.webp", "char8.webp", "char9.webp", "char10.webp", "char11.webp", "char12.webp",
  // Chanel AVIF dosyaları
  "char1.avif", "char2.avif",
  
  // Gucci resimleri
  "gucr1.avif", "gucr2.avif", "gucr3.avif", "gucr4.avif", "gucr5.avif", "gucr6.avif", "gucr7.avif", "gucr8.avif", "gucr9.avif", "gucr10.avif",
  "gucbra1.avif", "gucbra2.avif", "gucbra3.avif", "gucbra4.jpg", "gucbra5.avif", "gucbra6.avif", "gucbra7.jpg", "gucbra8.avif", "gucbra9.avif", "gucbra10.avif",
  "guce1.jpg", "guce2.avif", "guce3.avif", "guce4.avif", "guce5.avif", "guce6.avif", "guce7.avif", "guce8.avif", "guce9.avif", "guce10.avif",
  "gucn1.jpg", "gucn2.avif", "gucn3.avif", "gucn4.avif", "gucn5.avif", "gucn6.avif", "gucn7.avif", "gucn8.avif", "gucn9.avif", "gucn10.avif",
  
  // Prada resimleri
  "prar1.avif", "prar2.avif", "prar3.avif", "prar4.avif", "prar5.avif", "prar6.avif",
  "prabra1.avif", "prabra2.avif", "prabra3.avif", "prabra4.avif", "prabra5.avif", "prabra6.avif", "prabra7.avif", "prabra8.avif",
  "prae1.avif", "prae2.avif", "prae3.avif", "prae4.avif", "prae5.avif", "prae6.avif", "prae7.avif",
  "pran1.avif", "pran2.avif", "pran3.avif", "pran4.avif", "pran5.avif", "pran6.avif", "pran7.avif"
];

// Otomatik quiz verisi oluşturma
export const generateQuizData = () => {
  return imageList.map((imageName, index) => {
    const correctBrand = getBrandFromImageName(imageName);
    return {
      id: index + 1,
      image: `/${imageName}`,
      correctBrand: correctBrand,
      options: createOptions(correctBrand),
      description: `Fashion accessory - ${correctBrand}`
    };
  });
};

// Manuel quiz verisi (şu anda kullanılıyor)
export const quizData = [
  // Buraya kendi resimlerinizi ekleyin
  // Örnek format:
  // {
  //   id: 1,
  //   image: "/car_bracelet1.webp",
  //   correctBrand: "Cartier",
  //   options: ["Cartier", "Tiffany & Co.", "Chanel", "Dior"],
  //   description: "Cartier bracelet"
  // },
];

// Function to get random quiz items
export const getRandomQuizItems = (count = 5) => {
  const shuffled = shuffleArray(quizData);
  return shuffled.slice(0, count);
}; 