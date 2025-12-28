// --------------------------------------------
// IMPORT IMAGES
// --------------------------------------------
import diwali from "../assets/Diwali.jpg";
import holi from "../assets/Holi.jpg";
import durga from "../assets/Durga Puja.jpg";
import ganesh from "../assets/Ganesh Chaturthi.jpg";
import pongal from "../assets/Pongal.jpg";
import onam from "../assets/Onam.jpg";
import navratri from "../assets/Navratri.avif";
import eid from "../assets/Eid.jpg";
import christmas from "../assets/Christmas.jpg";
import baisakhi from "../assets/Baisakhi.jpg";
import dussehra from "../assets/Dussehra.jpg";
import janmashtami from "../assets/Janmashtami.avif";
import kumbh from "../assets/Kumbh Mela.jpeg";
import republic from "../assets/Republic Day.webp";
import independence from "../assets/Independence Day.webp";

// --------------------------------------------
// FULL FESTIVAL PACKAGES DATA
// --------------------------------------------
const festivalData = [
  {
    id: 1,
    name: "Diwali",
    days: "3 Days / 2 Nights",
    price: "₹12,999",
    location: "Varanasi, Uttar Pradesh",
    image: diwali,
    description:
      "Diwali, or Deepavali (row of lamps), is a magnificent, multi-day Hindu festival that symbolizes the ultimate victory of light over darkness, good over evil, and knowledge over ignorance.The spiritual core of the festival is often linked to the triumphant return of Lord Rama to Ayodhya after defeating the demon king Ravana, celebrated with the lighting of lamps to guide his path. It also honors Goddess Lakshmi, the deity of wealth and prosperity, and Lord Ganesha, the remover of obstacles.The preparation for Diwali is a communal effort. Homes are meticulously cleaned, renovated, and whitewashed in a tradition known as shubh labh (good fortune), symbolizing a fresh, pure start for the new year.The atmosphere is one of unbridled joy and vibrant energy. Every street, market, and home is transformed by the soft, golden glow of thousands of tiny earthen lamps (diyas) and strings of electric lights."
  },

  {
    id: 2,
    name: "Holi",
    days: "3 Days / 2 Nights",
    price: "₹10,499",
    location: "Mathura & Vrindavan",
    image: holi,
    description:
      "Holi is a spectacular, two-day Hindu festival that heralds the arrival of spring, celebrating fertility, colour, and the victory of divine good over demonic evil. It is arguably India's most joyous and boisterous celebration.The festival has deep mythological roots, primarily commemorating the story of Prahlada and the demoness Holika, from whose pyre Prahlada emerged unharmed, symbolizing devotion's triumph over malice.The celebration begins on the evening of the full moon with Holika Dahan, where massive bonfires are lit. This ritual symbolizes the burning of the evil figure Holika and the casting out of evil spirits.The main day, Dhulandi or Rangwali Holi, is a carnival of color and unrestrained glee. It is a day when social barriers of caste, age, and status are momentarily dissolved, as everyone is equalized under a shower of pigment.The streets, parks, and courtyards become battlegrounds for friendly chaos. People chase each other, laughing and drenching friends and strangers alike with vibrant, dry colored powders (gulal) and colored water thrown from water guns (pichkaris).The colours themselves hold meaning: red for love and fertility, green for new beginnings, and yellow for devotion. The air is thick with pigment and the joyous cry of Bura Na Mano, Holi Hai! (Don't mind, it's Holi!)."
  },

  {
    id: 3,
    name: "Durga Puja",
    days: "3 Days / 2 Nights",
    price: "₹11,999",
    location: "Kolkata, West Bengal",
    image: durga,
    description:
      "Durga Puja is a magnificent, annual Hindu festival that is not merely a religious observance but a colossal socio-cultural event celebrating the power of the divine feminine and the triumph of good over cosmic evil.The festival spans five or six days, traditionally celebrating the Goddess Durga's successful battle against the shape-shifting demon Mahishasura, symbolizing her victory and the restoration of Dharma (righteous order).The preparations are vast and meticulous, centered around the creation of elaborate, temporary shrines called pandals. These pandals are architectural marvels, often mimicking famous temples, historical buildings, or abstract art concepts.At the heart of every pandal is the awe-inspiring idol of Goddess Durga. She is depicted slaying the demon, typically flanked by her four children: Lakshmi, Saraswati, Ganesha, and Kartikeya, representing a complete cosmic family.The atmosphere in Kolkata, the epicenter of the festival, is electric. The city is awake for five continuous days, becoming one massive, illuminated street carnival, with millions of people participating in pandal-hopping.The cultural celebration is rich and vibrant, featuring traditional Bengali rituals, musical performances, dances, and theater. The air is filled with the rhythmic drumming of the dhaak, which provides the unforgettable soundtrack to the festival."
  },

  {
    id: 4,
    name: "Ganesh Chaturthi",
    days: "3 Days / 2 Nights",
    price: "₹9,999",
    location: "Mumbai, Maharashtra",
    image: ganesh,
    description:
      "Ganesh Chaturthi is a grand, ten-day Hindu festival that commemorates the birth of Lord Ganesha, one of the most revered and auspicious deities, known as Vighnaharta (the remover of obstacles).The festival is particularly celebrated with immense enthusiasm and public fervor in the states of Maharashtra, Gujarat, and Karnataka, where it transforms cities like Mumbai and Pune into massive celebratory hubs.The central focus is the ritual installation of a beautifully crafted clay idol of Lord Ganesha, known as the Ganesh murti, in homes, societies, and elaborate public community pandals (temporary shrines).The atmosphere is instantly joyous and electric. The installation is marked by loud chants of Ganpati Bappa Morya!, music, and rhythmic drumming, welcoming the deity with devotion and high spirits.For ten days, Lord Ganesha is treated as a highly honored guest. Devotees perform daily puja (worship), offering flowers, lights, incense, and, most famously, his favorite sweet: the delicate, steamed dumpling called modak.The festival is a significant time for community gathering and cultural expression. Public pandals organize cultural programs, traditional music and dance performances, and community service activities.The decorations are spectacular, with pandals often designed with intricate themes, lighting, and floral arrangements, drawing millions of visitors who come to seek the deity's blessings (darshan)."
  },

  {
    id: 5,
    name: "Pongal",
    days: "3 Days / 2 Nights",
    price: "₹8,999",
    location: "Tamil Nadu",
    image: pongal,
    description:
      "Pongal is a magnificent, four-day Tamil harvest festival celebrated with immense enthusiasm and gratitude, coinciding with the winter solstice and marking the beginning of the auspicious Tamil month of Thai.The name Pongal literally means to boil over or overflowing, symbolizing prosperity and abundance. The festival is a deep expression of thanks to nature for a bountiful harvest.Bhogi Pongal: Dedicated to Lord Indra (the Rain God), this day involves a great spring cleaning where old, unnecessary household articles are discarded or burned in a bonfire, symbolizing the start of a fresh cycle.Mattu Pongal: This day is dedicated to cattle (Maattu), which are essential for farming. Cows and bulls are decorated with colorful garlands, bells, and painted horns, revered, and fed the sweet Pongal dish as a sign of respect and gratitude for their labor.Kaanum Pongal: The final day is for family and community bonding. Families visit relatives, and people express thanks to their elders, while youngsters often play traditional outdoor games."
  },

  {
    id: 6,
    name: "Onam",
    days: "3 Days / 2 Nights",
    price: "₹11,499",
    location: "Kerala",
    image: onam,
    description:
      "Onam is the most important and joyous annual festival in Kerala, a magnificent ten-day celebration that beautifully combines harvest thanksgiving, cultural artistry, and deep mythological reverence.The festival is celebrated to welcome the mythical, benevolent King Mahabali, whose spirit is believed to return to Kerala during this time to visit his beloved subjects. The celebration is marked by an unparalleled spirit of unity and communal goodwill.The preparations begin ten days in advance, with the daily creation of elaborate, intricate floral carpets called Pookalam. These beautiful, multicolored designs are laid out in front of homes and public spaces, growing larger and more complex each day.The main day of the festival, Thiruvonam, is the day of grand celebration. Homes are meticulously cleaned, people wear new traditional clothing (Onakkodi), and the entire state immerses itself in festivity.The culinary center of Onam is the spectacular Onam Sadya. This traditional feast is a massive vegetarian banquet featuring 20 to 30 distinct dishes, served ceremoniously on a fresh banana leaf, representing the abundance of the harvest.."
  },

  {
    id: 7,
    name: "Navratri",
    days: "3 Days / 2 Nights",
    price: "₹10,999",
    location: "Ahmedabad, Gujarat",
    image: navratri,
    description:
      "Navratri is a profoundly sacred, nine-night, ten-day Hindu festival that is dedicated to honoring the warrior Goddess Durga and her nine powerful forms (Navadurga), celebrating the triumph of the cosmic feminine energy, Shakti.The festival occurs four times a year, but the post-monsoon Sharada Navratri (typically in September/October) is the most prominent, culminating in Dussehra or Vijayadashami (the tenth day).First Three Days: Dedicated to Goddess Durga (the warrior form) to destroy all impurities and vices.Next Three Days: Dedicated to Goddess Lakshmi (the goddess of wealth and peace) to bestow material and spiritual prosperity.Final Three Days: Dedicated to Goddess Saraswati (the goddess of knowledge, arts, and wisdom) to grant intellectual enlightenment.Regional celebrations are distinct and vibrant. In Gujarat, Navratri is famous for its massive, energetic community folk dances: the circular Garba and the stick dance called Dandiya Raas, performed nightly around a centrally placed lamp or idol."
  },

  {
    id: 8,
    name: "Eid",
    days: "3 Days / 2 Nights",
    price: "₹9,999",
    location: "Delhi & Agra",
    image: eid,
    description:
      "Eid is the collective name for the two most significant annual festivals in Islam, universally celebrated by Muslims as days of joy, gratitude, prayer, and communal feasting, marking the culmination of sacred periods.Eid al-Fitr (The Festival of Breaking the Fast): This is celebrated at the end of Ramadan, the holy month of dawn-to-dusk fasting. It marks the successful completion of a month dedicated to spiritual reflection, piety, and self-control.Eid al-Adha (The Festival of Sacrifice): This is considered the greater of the two Eids, honoring the prophet Ibrahim’s devotion and willingness to sacrifice his son (Ismail), a supreme act of faith. It also marks the end of the annual Hajj pilgrimage to Mecca.The key practice is the exchange of greetings (Eid Mubarak) and the donning of new, often traditional, clothes. Children traditionally receive gifts or money, known as Eidi.A core principle is charity. Before Eid al-Fitr, a mandatory donation (Zakat al-Fitr) is given to the needy, ensuring everyone can participate in the celebration. For Eid al-Adha, meat from the ritual sacrifice is distributed among family, friends, and the poor.The atmosphere is one of profound happiness, unity, and generosity. Families and friends gather for elaborate, traditional feasts, spending the day visiting homes, sharing meals, and celebrating together."
  },

  {
    id: 9,
    name: "Christmas",
    days: "3 Days / 2 Nights",
    price: "₹13,499",
    location: "Goa",
    image: christmas,
    description:
      "Christmas is the annual, universally celebrated Christian festival that marks the birth of Jesus Christ, the central figure of Christianity. It is a time defined by themes of hope, peace, and divine love.The religious celebration centers on the observance of Christmas Eve (December 24th) and Christmas Day (December 25th). Many attend special candlelight services or midnight mass, where the story of Christ's nativity is recounted.The atmosphere is one of profound goodwill, community spirit, and warm anticipation. Streets and homes worldwide are transformed by decorations, twinkling lights, and the cheerful sounds of carols.The iconic Christmas Tree is a focal point of decoration, often an evergreen symbolizing eternal life. It is elaborately adorned with lights, ornaments, tinsel, and a star or angel placed at the very top.A central tradition is the exchange of gifts, inspired by the three Wise Men (Magi) who brought gifts of gold, frankincense, and myrrh to the infant Jesus. This custom emphasizes generosity and thoughtful giving.For children, the holiday is magical, dominated by the folklore figure of Santa Claus (St. Nicholas), who is believed to deliver presents on Christmas Eve, emphasizing the spirit of generosity and secrecy.The culinary center of the holiday is the grand Christmas dinner, a lavish feast featuring roasted meats, seasonal vegetables, and traditional desserts like Christmas pudding or Yule log, shared joyfully with family and friends."
  },

  {
    id: 10,
    name: "Baisakhi",
    days: "2 Days / 1 Night",
    price: "₹9,499",
    location: "Amritsar, Punjab",
    image: baisakhi,
    description:
      "Baisakhi is an exuberant and profoundly significant festival, celebrated with immense zeal in the Punjab region, symbolizing both the agricultural abundance of the harvest and a pivotal moment in Sikh history.Agriculturally, Baisakhi marks the traditional Solar New Year and is the time for the annual harvest of the rabi (winter) crops, particularly wheat. Farmers celebrate their hard work and pray for future prosperity.The atmosphere is one of unbridled joy and cultural expression. Fields are cleared, and celebratory community fairs (melas) are organized, featuring traditional Punjabi folk music, wrestling matches, and delicious seasonal food.The heart of the cultural celebration is the lively dance known as Bhangra (for men) and Gidda (for women). These energetic dances, performed to the rhythmic beat of the dhol drum, express the joy of the successful harvest.Historically and spiritually, Baisakhi is a crucial day for Sikhism. In 1699, on this day, the tenth Sikh Guru, Guru Gobind Singh, established the Khalsa Panth—the collective body of initiated Sikhs.The main observance for Sikhs involves visiting the Gurdwara (Sikh temple), which are elaborately decorated. Special morning prayers and kirtan (devotional singing) are held to commemorate the formation of the Khalsa.A key ceremonial event is the Nagar Kirtan—a religious procession led by the Panj Pyare (The Five Beloved Ones), who carry the sacred scripture, the Guru Granth Sahib, through the streets in a display of faith and community unity."
  },

  {
    id: 11,
    name: "Dussehra",
    days: "3 Days / 2 Nights",
    price: "₹11,999",
    location: "Mysore, Karnataka",
    image: dussehra,
    description:
      "Dussehra, or Vijayadashami (the Tenth Day of Victory), is a monumental Hindu festival that marks the triumph of good over evil, celebrated with immense cultural and spiritual fervor across India.Lord Rama’s Victory: It celebrates the day when Lord Rama vanquished the demon king Ravana after a ten-day battle, marking the end of evil and the restoration of dharma (righteousness).Goddess Durga’s Victory: In other regions, particularly in the East and South, it marks the tenth day when Goddess Durga finally defeated the powerful, shape-shifting demon Mahishasura, concluding the Navratri celebrations.The celebration is intensely dramatic and public. The central event in North India involves staging elaborate, open-air theatrical performances called Ramleela, which depict the entire epic of the Ramayana over the preceding nine nights.On Dussehra itself, the culmination is the spectacular burning of massive, towering effigies of Ravana, along with his brothers Meghnad and Kumbhakarna. This act symbolizes the destruction of all forms of vice and evil.The atmosphere is joyous and communal. Thousands gather to witness the burning of the effigies, often accompanied by fireworks, music, and the loud cheers of the crowd, celebrating the victory of divine justice.n many parts of the country, it is considered an auspicious day to begin new ventures, such as starting a new business, undertaking important journeys, or launching educational pursuits.In the South, the day is known for Ayudha Puja, where tools, weapons, vehicles, and instruments are cleaned, decorated, and worshipped, recognizing their role in sustaining life and livelihood."
  },

  {
    id: 12,
    name: "Janmashtami",
    days: "3 Days / 2 Nights",
    price: "₹10,499",
    location: "Mathura & Vrindavan",
    image: janmashtami,
    description:
      "Janmashtami is a vibrant and deeply spiritual Hindu festival that celebrates the birth of Lord Krishna, the eighth incarnation of Lord Vishnu, whose life and teachings form the core of the Bhagavad Gita.The festival is particularly celebrated with great enthusiasm in places associated with his early life, most notably Mathura (his birthplace) and Vrindavan (where he spent his childhood), attracting millions of devotees.The observance is unique because it takes place at midnight, the exact moment Krishna is believed to have been born to his mother Devaki, under the cover of darkness to evade the tyrannical King Kamsa.Devotees observe a strict day-long fast, often consuming only fruits and water, which is broken precisely at midnight after the birth ceremonies are completed and prayers are offered.The atmosphere in homes and temples is transformed into a miniature replica of the birth scene. Elaborate decorations are made, including a cradle (jhoola) for the baby Krishna (Laddu Gopal) and miniature representations of the village of Gokul.A key ceremonial act is the Abhishekam, where the small idol of baby Krishna is bathed in milk, yogurt, honey, clarified butter (ghee), and holy water, signifying purification and respect.Immediately following the birth ritual, devotees engage in joyful celebrations, with the singing of devotional songs (bhajans) and the serving of special sweets and prasad, especially butter and mishri (rock sugar), symbolizing Krishna's love for butter."
  },

  {
    id: 13,
    name: "Kumbh Mela",
    days: "3 Days / 2 Nights",
    price: "₹14,999",
    location: "Haridwar / Prayagraj",
    image: kumbh,
    description:
      "The Kumbh Mela is the largest religious gathering in the world, a cyclical Hindu pilgrimage of extraordinary scale and spiritual significance, celebrated over approximately 55 days at one of four sacred river sites in IndiaThe Mela occurs every twelve years (Maha Kumbh) at one of four locations—Haridwar (Ganges River), Prayagraj/Allahabad (confluence of Ganges, Yamuna, and mythical Saraswati), Nashik (Godavari River), and Ujjain (Shipra River)—based on specific astrological alignments of the sun, moon, and Jupiter.The spiritual core of the Mela is the belief that bathing in the holy river during the auspicious time cleanses sins and grants Moksha (liberation) from the cycle of rebirth, a concept rooted in ancient mythology about the elixir of immortality (Amrita).The atmosphere is unlike any other event on Earth: a temporary, meticulously planned city erupts on the river banks, complete with pontoon bridges, vast tents, and public utilities, often accommodating tens of millions of people.The most spectacular sight is the Shahi Snan (Royal Bath), the central, most auspicious bathing day. It is led by the various Akharas (sects) of Naga Sadhus (ascetics), who process in magnificent, often elaborate processions before entering the water.These Naga Sadhus are a defining image of the Mela—ascetics who live a life of renunciation, often nude and covered in ash, attracting immense awe and curiosity from pilgrims and visitors alike."
  },

  {
    id: 14,
    name: "Republic Day",
    days: "2 Days / 1 Night",
    price: "₹7,999",
    location: "New Delhi",
    image: republic,
    description:
      "Republic Day, celebrated annually on January 26th, is one of the three most important national holidays in India, commemorating the day in 1950 when the Constitution of India came into effect, completing the country's transition to a sovereign republic.This date officially replaced the Government of India Act (1935) as the governing document and is a profound celebration of Indian democracy, sovereignty, and constitutional values.The centerpiece of the national celebration is the grand parade held in New Delhi on the Kartavya Path (formerly Rajpath). This event is a spectacular display of India's military might, cultural diversity, and scientific progress.The ceremonies begin with the President of India, who is the constitutional head of the nation, unfurling the national flag, followed by the playing of the national anthem. This is a moment of deep national reverence and pride.The parade showcases the armed forces—the Army, Navy, and Air Force—marching in impeccable formation, followed by a dazzling display of military hardware, including tanks and missiles, demonstrating the nation's defense capability.A key highlight is the cultural tableau procession. Floats representing each state and union territory travel down the avenue, depicting unique aspects of their regional culture, history, and achievements, symbolizing the unity in India's diversity.The ceremony also includes a tribute to national heroes, with the President awarding the Param Vir Chakra (India's highest wartime gallantry award) and other gallantry medals to deserving personnel.The celebration culminates with a thrilling flypast by the Indian Air Force, leaving trails of smoke in the colors of the national flag—saffron, white, and green—over the India Gate."
  },

  {
    id: 15,
    name: "Independence Day",
    days: "2 Days / 1 Night",
    price: "₹7,499",
    location: "New Delhi",
    image: independence,
    description:
      "Independence Day, celebrated annually on August 15th, is the most significant national festival in India, commemorating the pivotal day in 1947 when the nation achieved freedom from nearly two centuries of British colonial rule.The day marks the culmination of the tireless efforts and profound sacrifices made by countless freedom fighters who struggled to secure the nation's liberation. It is a time for solemn remembrance and immense national pride.The centerpiece of the nationwide celebration is the ceremony held at the Red Fort (Lal Qila) in Old Delhi. The Prime Minister of India hoists the tricolour national flag on the fort's ramparts amidst a 21-gun salute.Following the flag hoisting, the Prime Minister delivers a televised national address to the country, highlighting the past year's achievements, discussing future challenges, and paying tribute to the architects of India's freedom.The atmosphere is charged with patriotic fervor and celebratory joy. Schools, offices, and public spaces participate by hoisting flags, singing the national anthem (Jana Gana Mana), and holding cultural programs.The day is a profound celebration of India's rich, diverse identity and its successful journey as the world's largest democracy. It reaffirms the nation's commitment to the values of pluralism, unity, and progress.In schools and local communities, there are parades, cultural performances, and competitions focused on themes of nationalism and history, ensuring that the legacy of the freedom struggle is passed on to new generations.The evening often sees major government buildings, including the Parliament House and India Gate, brilliantly illuminated in the colors of the national flag—saffron, white, and green—creating a magnificent display.Independence Day is more than just a holiday; it is a spiritual and political commemoration—a powerful moment for all citizens to reflect on the hard-won gift of self-rule and to pledge their duty to the nation's future."
  }
];

export default festivalData;
