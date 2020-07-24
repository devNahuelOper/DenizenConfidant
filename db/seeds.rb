# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri-s3'
require 'open-uri'

User.destroy_all
Event.destroy_all
Dj.destroy_all

# Users
deadmau5 = User.create({username: 'deadmau5', password: 'stereo', fname: 'Joel', lname: 'Zimmerman', email: 'mau5trap@deadmau5.com', region: 'Canada', language: 'English', birthday: 19810105, gender: 'Male'})

# Events
untold = Event.create({name: 'Untold', venue: 'Cluj-Arena', location: '🇷🇴 Cluj-Napoca, Romania', date: 20210804, headliners: 'Alan Walker, Boney M, Charli XCX, Culture Beat Don Diablo, Dillon Francis, Dimitri Vegas & Like Mike, Duke Dumont, Fatman Scoop, Fedde Le Grand, John Digweed, John Newman, Lost Frequencies, Patrice, Sasha, Sunnery James & Ryan Marciano, Tinie Tempah, Tom Odell, Tujamo', description: 'Untold Festival is the largest electronic music festival held in Romania, taking place in Cluj-Napoca at the Cluj Arena. It is held annually and has been designated Best Major Festival within European Festival Awards 2015. Guests include a vast range of European countries, as well as Asia and North America.'})
untold_photo = open('https://denizen-confidant-seeds.s3.amazonaws.com/untold.png')
untold.photo.attach(io: untold_photo, filename: 'untold.png')

tomorrowland = Event.create({name: 'Tomorrowland', venue: 'PRC de Schorre', location: '🇧🇪 Antwerp, Belgium', date: 20210716, headliners: 'Tiesto, Martin Garrix, Dimitri Vegas & Like Mike, Armin van Buuren, Carl Cox, Martin Solveig, Afrojack, DJ Snake', description: 'Taking place in Belgium Tomorrowland is the largest electronic music festival held in the world. Incredible decorations and ten metre tulips tower over the worlds biggest DJs playing to the worlds best crowd.'})
tomorrowland_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/tomorrowland.jpeg')
tomorrowland.photo.attach(io: tomorrowland_photo, filename: 'tomorrowland.jpeg')

sonar = Event.create({name: 'Sonar', venue: 'Fira Gran Via L Hospitalet', location: '🇪🇸 Barcelona, Spain', date: 20210617, headliners: '2acid arab live, actress + young paint live ai/av, afrodeutsche, aleesha, alvva, amelie lens, andy c, anger, anna vs june, arca, artwork, bad bunny, bad gyal, desert + desilence, deva, diego navarro, disclosure dj set, dixon, dj koze, karcelen, k á r y y n, katarzia, nicola cruz, nistra, obongjayar, octavian, sho madjozi, skepta, $kyhook, slikback, titi calor, tutu, underworld, vince staples, virgen maria, yakamoto kotzuga, ylia, 700 Bliss', description: 'Created in 1994, Sónar is a pioneering cultural event with a unique format and content. Its first class reputation as a leading reference for international festivals is thanks to its attention in curation, combining a playful nature, the avant-garde, and experimentation with newest trends in dance and electronic music.'})
sonar_photo = open('https://denizen-confidant-seeds.s3.amazonaws.com/sonar.png')
sonar.photo.attach(io: sonar_photo, filename: 'sonar.png')

ultra = Event.create({name: 'Ultra', venue: 'Bayfront Park', location: '🇺🇸 Miami, FL', date: 20210326, headliners: 'Eric Prydz, Gesaffelstein, Kayzo, Armin Van Buuren, Afrojack, Cirez D Markus Schulz, Nicky Romero, Kaskade', description: 'Ultra Music Festival (UMF) is an annual outdoor electronic music festival that occurs in March in the city of Miami, Florida, United States. It also streams live coverage of the festival via YouTube, thereby providing a FOMO antidote to all those people who perhaps missed being there in person.'})
ultra_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/ultra.jpeg')
ultra.photo.attach(io: ultra_photo, filename: 'ultra.jpeg')

timewarp = Event.create({name: 'Time Warp', venue: 'TBD', location: '🇩🇪 Mannheim, Germany', date: 20210406, headliners: 'Adam Beyer, Adriatique, Âme, Amelie Lens, Baba Stiltz, Ben Klock, Boris Brejcha, Carl Cox, Charlotte de Witte, Chris Liebing, Craig Richards, Dixon, Dorian Paic, Dubfire, Fabe, Jamie Jones, Joseph Capriati, Joy Orbison, Karotte, Kölsch, Laurent Garnier, Len Faki, Loco Dice, Luciano, Maceo Plex, Magda, Marco Carola, Margaret Dygas, Monika Kruse, Nick Curly, Nina Kraviz b2b Helena Hauff, Pan-Pot, Peggy Gou, Recondite, Ricardo Villalobos b2b Craig Richards, Ricardo Villalobos, Richie Hawtin, Seebase, Seth Troxler, Solomun b2b Tale Of Us b2b Dixon, Solomun, Steffen Baumann, Sven Väth, Tale Of Us, The Martinez Brothers, tINI', description: 'Time Warp is an annual electronic music festival in Mannheim, Germany. The festival was introduced in 1994 on the other side of the river Rhine in Ludwigshafen. As a cultural festival, the main sponsor was TDK Marketing Europe from 2005 to 2007.' })
timewarp_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/timewarp.png')
timewarp.photo.attach(io: timewarp_photo, filename: 'timewarp.png')

edc = Event.create({name: 'EDC', venue: 'Las Vegas Speedway', location: '🇺🇸 Las Vegas, NV', date: 20201003, headliners: 'Above and Beyond, Black Tiger Sex Machine, David Guetta, Deadmau5, Eric Prydz, Infected Mushroom, Nero, No Mana, Paul Oakenfold, Rezz, Steve Aoki' , description: 'EDC is a unique multi-day festival pushing the boundaries of imagination, and setting standards in the live entertainment industry. By incorporating carnival themes and attractions, cutting-edge stage production, world-class talent, and innovative art and technology, EDC is more than an electronic music festival - it is an unparalleled multi-sensory experience unlike any other.The foundation upon which the phenomenon was built is one of unity, love, self expression, and respect for one another.'})
edc_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/edc.jpeg')
edc.photo.attach(io: edc_photo, filename: 'edc.jpeg')

ezoo = Event.create({name: 'Electric Zoo', venue: 'Randalls Island', location: '🇺🇸 New York, NY', date: 20200904, headliners: 'Above and Beyond, Alison Wonderland, Benny Benassi, Dog Blood, Diplo, Eric Prydz, Flux Pavillion, Kaskade, Nora En Pure, Seven Lions', description: 'Electric Zoo Festival is one of New York Citys largest music festivals and features the top names in electronic music, bringing a wide variety of acts from around the world and across the spectrum of electronic musics various sub-genres. International editions of Electric Zoo have taken place in Mexico City, Tokyo, Shanghai and São Paulo.'})
ezoo_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/ezoo.jpeg')
ezoo.photo.attach(io: ezoo_photo, filename: 'ezoo.jpeg')

transmission = Event.create({name: 'Transmission', venue: 'O2 Arena', location: '🇨🇿 Prague, Czechia', date: 20201024, headliners: 'Above and Beyond, Blastoyz, Cosmic Gate, Marlo, Markus Schulz, Paul Van Dyk', description: 'Transmission is undoubtedly the biggest and most recognised festival in Europe thats dedicated solely to trance music.'})
transmission_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/transmission.jpeg')
transmission.photo.attach(io: transmission_photo, filename: 'transmission.jpeg')

# Djs
aboveandbeyond = Dj.create({name: 'Above and Beyond', genre: 'Trance', nationality: 'UK 🇬🇧', bio: 'Above & Beyond are an English electronic music group consisting of Jono Grant, Tony McGuinness, and Paavo Siljamäki. Formed in 2000, they are the owners of London-based electronic dance music labels Anjunabeats and Anjunadeep, and also host a weekly radio show titled Group Therapy Radio. The trio has been consistently ranked among DJ Magazines Top 100 DJs Poll, having placed at No. 6 in 2007, No. 4 in 2008 & 2009, No. 5 in 2010 & 2011, No. 51 in 2018, and most recently No. 22 in 2019.'})
aboveandbeyond.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Anjunafamily.mp3'), filename: 'Anjunafamily.mp3')
aboveandbeyond.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Blue+Monday+(New+Order+Remix).mp3'), filename: 'Blue+Monday+(New+Order+Remix).mp3')
aboveandbeyond.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/There\'s+Only+You.mp3'), filename: 'There\'s+Only+You.mp3')

afrojack = Dj.create({name: 'Afrojack', genre: 'Electro-House Moombahton', nationality: 'Netherlands 🇳🇱',  bio: 'Nick van de Wall (Dutch: [ˈnɪk fɑn də ˈʋɑl]; born 9 September 1987), better known as Afrojack, is a Dutch DJ, record producer, and remixer from Spijkenisse. In 2007, he founded the record label Wall Recordings; his debut album Forget the World was released in 2014. Afrojack regularly features as one of the ten best artists in the Top 100 DJs published by DJ Mag. He is also the CEO of LDH Europe.'})
afrojack.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Daft+Sound.mp3'), filename: 'Daft+Sound.mp3')
afrojack.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Make+Her+Say+(Kid+Cudi+Remix).mp3'), filename: 'Make+Her+Say+(Kid+Cudi+Remix).mp3')
afrojack.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Wrecking+Ball+(Miley+Cyrus+Remix).mp3'), filename: 'Wrecking+Ball+(Miley+Cyrus+Remix).mp3')

alisonwonderland = Dj.create({name: 'Alison Wonderland', genre: 'EDM Electropop', nationality: 'Australia 🇦🇺', bio: 'Alexandra Sholler (born 27 September 1986), who performs as Alison Wonderland, is an Australian electronic dance music producer, DJ, and singer. Her debut album, Run, was released on 20 March 2015, which peaked at No. 6 on the ARIA Albums Chart and was certified gold by ARIA. Her second album, Awake, debuted at No. 1 on Billboards Top Dance/Electronic Albums. She was listed at No. 96 on DJ Mags Top 100 DJs in October 2018. She is also the highest billed female DJ in Coachella history. Outside of being well-known for her music, shes outspoken about her support for mental health and frequently shares her experiences with her fans.'})
alisonwonderland.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Easy.mp3'), filename: 'Easy.mp3')
alisonwonderland.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Ignore.mp3'), filename: 'Ignore.mp3')
alisonwonderland.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Run.mp3'), filename: 'Run.mp3')

ambassador21 = Dj.create({name: 'Ambassador21', genre: 'Industrial Techno', nationality: 'Belarus 🇧🇾', bio: 'AMBASSADOR21, the often imitated but never equaled industrial duo from Belarus. Throughout the past years, Natasha A Twentyone and Alexey Protasov have clearly put their mark on the industrial scene with their harsh, relentless sound and their explosive live performances.'})
ambassador21.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Fear+Level+Red.mp3'), filename: 'Fear+Level+Red.mp3')
ambassador21.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Revelation.mp3'), filename: 'Revelation.mp3')
ambassador21.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/We+Are+Legion.mp3'), filename: 'We+Are+Legion.mp3')

aphextwin = Dj.create({name: 'Aphex Twin', genre: 'Techno Experimental', nationality: 'Ireland 🇮🇪', bio: 'Richard David James (born 18 August 1971), best known by the stage name Aphex Twin, is an English musician. He is best known for his idiosyncratic work in electronic styles such as techno and ambient music in the 1990s, and has also been associated with the electronic subgenre known as intelligent dance music.'})
aphextwin.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Breathe+(Prodigy+Remix).mp3'), filename: 'Breathe+(Prodigy+Remix).mp3')
aphextwin.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/We+Have+Arrived+(QQT).mp3'), filename: 'We+Have+Arrived+(QQT).mp3')
aphextwin.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Window+Licker.mp3'), filename: 'Window+Licker.mp3')

arminvanbuuren = Dj.create({name: 'Armin Van Buuren', genre: 'Trance', nationality: 'Netherlands 🇳🇱', bio: 'Armin van Buuren was born in Leiden, on 25 December 1976, but grew up in Koudekerk aan den Rijn. He was inspired by French electronic music composer Jean-Michel Jarre. Van Buuren graduated from the Stedelijk Gymnasium Leiden in 1995, and studied law at Leiden University. Van Buuren has won a number of accolades. He has been ranked the number one DJ by DJ Mag a record of five times, four years in a row. He was ranked fourth on the DJ Mag Top 100 DJs list in 2015, 2016, and 2019, and third in 2017. In 2014, he was nominated for a Grammy Award for Best Dance Recording for his single "This Is What It Feels Like" featuring Trevor Guthrie, which makes him the fourth trance artist ever to receive a Grammy Award nomination. In the United States, he holds the record for most entries, twenty-one, on the Billboard Dance/Electronic Albums chart.'})
arminvanbuuren.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Jump+(Van+Halen+Remix).mp3'), filename: 'Jump+(Van+Halen+Remix).mp3')
arminvanbuuren.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Shadow+Of+The+Day+(Linkin+Park+Tribute).mp3'), filename: 'Shadow+Of+The+Day+(Linkin+Park+Tribute).mp3')
arminvanbuuren.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stickup.mp3'), filename: 'Stickup.mp3')

bassnectar = Dj.create({name: 'Bassnectar', genre: 'Dubstep Electronica', nationality: 'USA 🇺🇸', bio: 'Lorin Ashton, better known under his stage name Bassnectar, is an American DJ and record producer. Ashton grew up in the San Francisco Bay Area and initially identified with visual arts rather than music, creating movies with his dads camera at the age of ten. When he was 16 years old he played in a death metal band named Pale Existence. He experienced an immediate sense of welcome and comfort going to raves in the mid-nineties, which led to the confluence of his heavy and electronic style of music.  In the following years, he became increasingly more involved in the scene, promoting shows, distributing food and assistance to concertgoers, buying records and eventually learning to DJ after studying electronic music production. He began creating music in the 1990s, using Opcode Systems Studio Vision Pro. In the mid-90s, he briefly toured with Exhumed as a bass player. Bassnectar finished in fourth place in the 2013 Americas Best DJ competition conducted by DJ Times magazine and Pioneer DJ.'})
bassnectar.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/808.mp3'), filename: '808.mp3')
bassnectar.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/In+Bloom+vs+Paper+Planes+(Mashup).mp3'), filename: 'In+Bloom+vs+Paper+Planes+(Mashup).mp3')
bassnectar.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Prince+(Deftones+Remix).mp3'), filename: 'Prince+(Deftones+Remix).mp3')
bassnectar.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Seek+And+Destroy+(Metallica+Remix).mp3'), filename: 'Seek+And+Destroy+(Metallica+Remix).mp3')
bassnectar.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Vava+Voom.mp3'), filename: 'Vava+Voom.mp3')
bassnectar.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Where+Is+My+Mind+(Pixies+Remix).mp3'), filename: 'Where+Is+My+Mind+(Pixies+Remix).mp3')

blacktigersexmachine = Dj.create({name: 'Black Tiger Sex Machine', genre: 'Dubstep Electro', nationality: 'UK 🇬🇧', bio: 'Black Tiger Sex Machine, often abbreviated BTSM, are a Canadian electronic music trio based in Montreal, Quebec. The trio are the label heads for Kannibalen Records, which has signed such artists as Kai Wachi, Apashe, Dabin and Lektrique. BTSM specialize in aggressive, dark electronic music, as well as a live show that extends beyond a DJ performance. The trio are Marc Chagnon, Julien Maranda and Patrick Barry. The group wear illuminated tiger helmets during their live shows.'})
blacktigersexmachine.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Beast.mp3'), filename: 'Beast.mp3')
blacktigersexmachine.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/KILLZONE.mp3'), filename: 'KILLZONE.mp3')
blacktigersexmachine.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/War.mp3'), filename: 'War.mp3')

blastoyz = Dj.create({name: 'Blastoyz', genre: 'Trance Dance Electronic', nationality: 'Israel 🇮🇱', bio: 'Kobi Nigreker (Hebrew: קובי ניגרקר) commonly known by his stage name Blastoyz, is an Israeli. international trance music DJ and producer specialising in the sub-genre of psychedelic trance (Psytrance). Early life. Kobi (born 27 June 1990). in Israel, to a Jewish family and grew up in a small village Beit-Ezra'})
blastoyz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Fire+Age.mp3'), filename: 'Fire+Age.mp3')
blastoyz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Gazpacho.mp3'), filename: 'Gazpacho.mp3')
blastoyz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Heal+The+World.mp3'), filename: 'Heal+The+World.mp3')

bloodybeetroots = Dj.create({name: 'Bloody Beetroots', genre: 'Electro-House Dubstep', nationality: 'Italy 🇮🇹', bio: 'The Bloody Beetroots is an Italian electronic dance music project of musician and producer Bob Rifo (also Sir Bob Cornelius Rifo and SBCR, born Simone Cogo). Established in late 2006, The Bloody Beetroots were initially a duo consisting of Bob Rifo and Tommy Tea, who later left in 2012.'})
bloodybeetroots.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Escape.mp3'), filename: 'Escape.mp3')
bloodybeetroots.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Keep+On+Dancing.mp3'), filename: 'Keep+On+Dancing.mp3')
bloodybeetroots.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Kill+Or+Be+Killed.mp3'), filename: 'Kill+Or+Be+Killed.mp3')
bloodybeetroots.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Second+Lives+(Vitalic+Remix).mp3'), filename: 'Second+Lives+(Vitalic+Remix).mp3')
bloodybeetroots.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/She\'s+A+Maniac+(Flashdance+Remix).mp3'), filename: 'She\'s+A+Maniac+(Flashdance+Remix).mp3')
bloodybeetroots.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Spider.mp3'), filename: 'Spider.mp3')
bloodybeetroots.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Volevo+Un+Gatto+Nero.mp3'), filename: 'Volevo+Un+Gatto+Nero.mp3')

calvinharris = Dj.create({name: 'Calvin Harris', genre: 'Electronic Dance', nationality: 'Scotland 🏴󠁧󠁢󠁳󠁣󠁴󠁿', bio: 'Adam Richard Wiles (born 17 January 1984), known professionally as Calvin Harris, is a Scottish DJ, record producer, singer, and songwriter. He is known for his singles "We Found Love", "This Is What You Came For", "Summer", "Feel So Close", "Outside", "Feels", and "One Kiss".'})
calvinharris.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Iron.mp3'), filename: 'Iron.mp3')
calvinharris.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Sweet+Nothing+Remix.mp3'), filename: 'Sweet+Nothing+Remix.mp3')
calvinharris.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/When+You+Were+Young+(The+Killers+Remix).mp3'), filename: 'When+You+Were+Young+(The+Killers+Remix).mp3')

carlcox = Dj.create({name: 'Carl Cox', genre: 'House Techno', nationality: 'UK 🇬🇧', bio: 'Carl Cox (born 29 July 1962) is a British house and techno record producer and DJ. Carl played at the 1st night of Danny Ramplings Shoom night after his return from Ibiza in the summer of 1987, largely seen as the original Balearic / Acid House night in London / the UK.'})
carlcox.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Inferno.mp3'), filename: 'Inferno.mp3')
carlcox.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Pure.mp3'), filename: 'Pure.mp3')
carlcox.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Song+2+(Blur+Remix).mp3'), filename: 'Song+2+(Blur+Remix).mp3')

celldweller = Dj.create({name: 'Celldweller', genre: 'Industrial Electronica Metal', nationality: 'USA 🇺🇸', bio: 'Celldweller is an electronic rock project by multi-musician Klayton. Celldweller songs have been featured in many films, movie trailers, television shows and video games.'})
celldweller.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/A+Matter+of+Time.mp3'), filename: 'A+Matter+of+Time.mp3')
celldweller.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Into+The+Void+Komor+Remix.mp3'), filename: 'Into+The+Void+Komor+Remix.mp3')
celldweller.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Switchback.mp3'), filename: 'Switchback.mp3')

chemicalbrothers = Dj.create({name: 'Chemical Brothers', genre: 'Techno Electronica House', nationality: 'UK 🇬🇧', bio: 'The Chemical Brothers are a British electronic music duo composed of Tom Rowlands and Ed Simons, originating in Manchester in 1989. Along with the Prodigy, Fatboy Slim, and other fellow acts, they were pioneers at bringing the big beat genre to the forefront of pop culture. They achieved widespread success when their second album Dig Your Own Hole topped the UK charts in 1997. In the United Kingdom they have had six number one albums and thirteen Top Twenty singles, including two number ones. In the United States they have won six Grammy Awards including "Best Rock Instrumental Performance", "Best Dance Recording" and "Best Dance/Electronic Album" of the year as recently as 2020.'})
chemicalbrothers.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Bring+The+Pain+(Method+Man+Remix).mp3'), filename: 'Bring+The+Pain+(Method+Man+Remix).mp3')
chemicalbrothers.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Galvanize.mp3'), filename: 'Galvanize.mp3')
chemicalbrothers.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Hey+Boy+Hey+Girl.mp3'), filename: 'Hey+Boy+Hey+Girl.mp3')

cirezd = Dj.create({name: 'Cirez D', genre: 'Techno House Progressive-House', nationality: 'Sweden 🇸🇪', bio: 'The dark, hardcore alias of Eric Prydz. On Mouseville Records, started in 2002, he releases techno tracks as Cirez D.'})
cirezd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Black+Hole.mp3'), filename: 'Black+Hole.mp3')
cirezd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Glow.mp3'), filename: 'Glow.mp3')
cirezd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/On+Off.mp3'), filename: 'On+Off.mp3')
cirezd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Ruby.mp3'), filename: 'Ruby.mp3')
cirezd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Glitch.mp3'), filename: 'The+Glitch.mp3')
cirezd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Valborg.mp3'), filename: 'Valborg.mp3')

colleendagostino = Dj.create({name: 'Colleen D Agostino', genre: 'Electropop Electronic', nationality: 'USA 🇺🇸', bio: 'Colleen Marie DAgostino is an American musician and singer-songwriter from Simi Valley, California. In 2005, while attending San Diego State University she formed The Material. They released their first EP entitled Tomorrow on September 1, 2007.'})
colleendagostino.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Collide.mp3'), filename: 'Collide.mp3')
colleendagostino.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Seeya.mp3'), filename: 'Seeya.mp3')
colleendagostino.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stay.mp3'), filename: 'Stay.mp3')

cosmicgate = Dj.create({name: 'Cosmic Gate', genre: 'Trance Progressive-House', nationality: 'Germany 🇩🇪', bio: 'Cosmic Gate is a German DJ duo consisting of trance music producers Claus Terhoeven (born 1972) and Stefan Bossems (born 1967). Both hail from Krefeld, Germany. On October 28, 2009, DJ Magazine announced the results of their annual Top 100 DJ Poll, with Ultra Records artist Cosmic Gate placed #19, 43 spots above the groups ranking the year before. For the 2010 DJ Magazine Top 100 DJ Poll, Cosmic Gate moved to #24.'})
cosmicgate.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Body+Of+Conflict.mp3'), filename: 'Body+Of+Conflict.mp3')
cosmicgate.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Find+Yourself.mp3'), filename: 'Find+Yourself.mp3')
cosmicgate.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Drums.mp3'), filename: 'The+Drums.mp3')

crystalcastles = Dj.create({name: 'Crystal Castles', genre: 'Electroclash Synth-Pop', nationality: 'Canada 🇨🇦', bio: 'Crystal Castles is a Canadian electronic music group formed in 2006 in Toronto, Ontario, by songwriter-producer Ethan Kath and singer-songwriter Alice Glass. The current band members are Ethan Kath and Edith Frances. Crystal Castles are known for their chaotic live shows and lo-fi melancholic homemade productions.'})
crystalcastles.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Baptism.mp3'), filename: 'Baptism.mp3')
crystalcastles.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Crimewave.mp3'), filename: 'Crimewave.mp3')
crystalcastles.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Not+In+Love.mp3'), filename: 'Not+In+Love.mp3')

daftpunk = Dj.create({name: 'Daft Punk', genre: 'Dance Electronic House', nationality: 'France 🇫🇷', bio: 'Daft Punk are a French electronic music duo formed in Paris in 1993 by Guy-Manuel de Homem-Christo and Thomas Bangalter. They achieved popularity in the late 1990s as part of the French house movement; they also had success in the years following, combining elements of house music with funk, techno, disco, rock and synthpop. They have worn ornate helmets and gloves to assume robot personas in most public appearances since 1999 and rarely grant interviews or appear on television. The duo were managed from 1996 to 2008 by Pedro Winter (also known as Busy P), the head of Ed Banger Records. After Bangalter and Homem-Christo\’s indie rock band Darlin disbanded, they began experimenting with drum machines and synthesisers. Their debut studio album Homework was released by Virgin Records in 1997 to positive reviews, backed by singles "Around the World" and "Da Funk". Their second album, Discovery, had further success, supported by hit singles "One More Time", "Digital Love" and "Harder, Better, Faster, Stronger". In March 2005, Daft Punk released their third album, Human After All, to mixed reviews, though the singles "Robot Rock" and "Technologic" achieved success in the United Kingdom. Daft Punk toured throughout 2006 and 2007 and released the live album Alive 2007, which won a Grammy Award for Best Electronic/Dance Album. In 2013, Daft Punk left Virgin for Columbia Records, and released their fourth album, Random Access Memories, to acclaim; lead single "Get Lucky" reached the top 10 in the charts of 32 countries. Random Access Memories won five Grammy Awards in 2014, including Album of the Year and Record of the Year for "Get Lucky". In 2016, Daft Punk gained their first number one on the Billboard Hot 100 with the song "Starboy", a collaboration with The Weeknd. As of 2015, Daft Punk had sold over 12 million albums worldwide.'})
daftpunk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Alive.mp3'), filename: 'Alive.mp3')
daftpunk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Crescendolls.mp3'), filename: 'Crescendolls.mp3')
daftpunk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Doin+It+Right+Remix.mp3'), filename: 'Doin+It+Right+Remix.mp3')
daftpunk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Fresh.mp3'), filename: 'Fresh.mp3')
daftpunk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Human+After+All.mp3'), filename: 'Human+After+All.mp3')
daftpunk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Superheroes.mp3'), filename: 'Superheroes.mp3')

dancewiththedead = Dj.create({name: 'Dance With The Dead', genre: 'Dance  Darksynth Electronic', nationality: 'USA 🇺🇸', bio: 'Dance With The Dead, is a duo formed by Justin and Tony. They previously played in different metal bands. That metal background is very apparent in their music, which is a vibrant blend of metal and synths inspired by 80s John Carpenter horror.'})
dancewiththedead.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Around+The+Word+(Daft+Punk+Remix).mp3'), filename: 'Around+The+Word+(Daft+Punk+Remix).mp3')
dancewiththedead.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Master+Of+Puppets+(Metallica+Remix).mp3'), filename: 'Master+Of+Puppets+(Metallica+Remix).mp3')
dancewiththedead.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/We+Will+Rock+You+(Queen+Remix).mp3'), filename: 'We+Will+Rock+You+(Queen+Remix).mp3')

danterminus = Dj.create({name: 'Dan Terminus', genre: 'Darksynth Electronic', nationality: 'France 🇫🇷', bio: 'Synthwave maven Dan Terminus got his start on debut, Stratospheric Cannon Symphony, an album originally meant to score an as-yet-released video game. Response was so overwhelming to the eventually-released Stratospheric Cannon Symphony that Terminus realized he had something official to preoccupy his time and creative energy.'})
danterminus.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Angelus.mp3'), filename: 'Angelus.mp3')
danterminus.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Death+By+Distortion.mp3'), filename: 'Death+By+Distortion.mp3')
danterminus.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Wrath+Of+Code.mp3'), filename: 'The+Wrath+Of+Code.mp3')

davidguetta = Dj.create({name: 'David Guetta', genre: 'Dance Electronic House', nationality: 'France 🇫🇷', bio: 'Pierre David Guetta (French pronunciation: ​[pjɛʁ david ɡɛta]; /ˈɡɛtə/; born 7 November 1967) is a French DJ, record producer and songwriter. He has sold over nine million albums and thirty million singles worldwide. In 2011, Guetta was voted as the number one DJ in the DJ Mag Top 100 DJs poll.'})
davidguetta.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Alphabeat.mp3'), filename: 'Alphabeat.mp3')
davidguetta.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Kill+Me+Slow.mp3'), filename: 'Kill+Me+Slow.mp3')
davidguetta.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/What+The+Fuck.mp3'), filename: 'What+The+Fuck.mp3')

deadmau5 = Dj.create({name: 'Deadmau5', genre: 'Progressive House Techno', nationality: 'Canada 🇨🇦', bio: 'Joel Thomas Zimmerman (born January 5, 1981), known professionally as Deadmau5 (stylized as deadmau5; pronounced "dead mouse"), is a Canadian electronic music producer, DJ, and musician. Zimmerman mainly produces progressive house music, though he also produces and DJs other genres of electronic music, including techno under the alias Testpilot. Zimmerman has received six Grammy Award nominations for his work.Zimmerman was born in Niagara Falls, Ontario, Canada. His mother, Nancy (née Johnson), is a visual artist, and his father, Rodney Thomas "Rod" Zimmerman, is a General Motors plant worker. He has two siblings, Jennifer (older) and Chris (younger). His ancestry includes German, Swiss, and English. He received his first keyboard for Christmas when he was a teenager. His music career began in the late 1990s, with a chiptune and demoscene movements-influenced sound with the Impulse Tracker. Zimmerman graduated from Westlane Secondary School in Niagara Falls. He then worked with an online music licensing company and as a programmer. He adopted the name Deadmau5, which referred to a dead mouse he found in his computer.'})
deadmau5.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/2448.mp3'), filename: '2448.mp3')
deadmau5.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Coasted.mp3'), filename: 'Coasted.mp3')
deadmau5.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Killing+In+The+Name+(RATM+Remix).mp3'), filename: 'Killing+In+The+Name+(RATM+Remix).mp3')
deadmau5.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Rope+(Foo+Fighters+Remix).mp3'), filename: 'Rope+(Foo+Fighters+Remix).mp3')
deadmau5.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stereo+Fidelity.mp3'), filename: 'Stereo+Fidelity.mp3')
deadmau5.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stereo+Fidelity+(Unorganized+Mix).mp3'), filename: 'Stereo+Fidelity+(Unorganized+Mix).mp3')
deadmau5.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stranger+Things+Theme+Remix.mp3'), filename: 'Stranger+Things+Theme+Remix.mp3')
deadmau5.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Tiny+Dancer+(Elton+John+Remix).mp3'), filename: 'Tiny+Dancer+(Elton+John+Remix).mp3')

digitalism = Dj.create({name: 'Digitalism', genre: 'Electro-House Electronic', nationality: 'Germany 🇩🇪', bio: 'Digitalism are a German electronic music duo formed in Hamburg in 2004, consisting of Jens "Jence" Moelle and İsmail "Isi" Tüfekçi. The duo are signed to French label Kitsuné, as well as Virgin Records and Astralwerks in other parts of the world.'})
digitalism.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Blitz.mp3'), filename: 'Blitz.mp3')
digitalism.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Circles.mp3'), filename: 'Circles.mp3')
digitalism.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Power+Station.mp3'), filename: 'Power+Station.mp3')

dimitrivegas = Dj.create({name: 'Dimitri Vegas & Like Mike', genre: 'Electro-House', nationality: 'Belgium/Greece 🇧🇪🇬🇷 ', bio: 'Dimitri Vegas & Like Mike are Belgian DJs and are record production duos, composed of brothers Dimitri Thivaios and Michael Thivaios. They were ranked No. 1 in 2015 and 2019, and were ranked No. 2 in 2014, 2016, 2017 and 2018 on DJ Mags Top 100 DJs list.'})
dimitrivegas.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Happy+Together.mp3'), filename: 'Happy+Together.mp3')
dimitrivegas.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Turn+Up.mp3'), filename: 'Turn+Up.mp3')
dimitrivegas.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Unity.mp3'), filename: 'Unity.mp3')

diplo = Dj.create({name: 'Diplo', genre: 'EDM Dance', nationality: 'USA 🇺🇸', bio: 'Thomas Wesley Pentz (born November 10, 1978), known professionally as Diplo, is an American DJ, songwriter, and record producer based in Los Angeles, California. He is the co-creator and lead member of the electronic dancehall music project Major Lazer, a member of the supergroup LSD with Sia and Labrinth, a member of electronic duo Jack Ü with producer and DJ Skrillex, and a member of Silk City with Mark Ronson. He founded and manages record company Mad Decent, as well as co-founding the non-profit organization Heaps Decent. Among other jobs, he has worked as an English teacher in Japan and a school teacher in Philadelphia. His 2013 EP, Revolution, debuted at number 68 on the US Billboard 200. The EPs title track was later featured in a commercial for Hyundai and is featured on the WWE 2K16 soundtrack.'})
diplo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/8000.mp3'), filename: '8000.mp3')
diplo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Hey!.mp3'), filename: 'Hey!.mp3')
diplo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Hip+Hop+(Dead+Prez+Remix).mp3'), filename: 'Hip+Hop+(Dead+Prez+Remix).mp3')

dirtyphonics = Dj.create({name: 'Dirtyphonics', genre: 'Dubstep DrumnBass', nationality: 'France 🇫🇷', bio: 'Dirtyphonics is a French electronic music band from Paris, consisting of members Charly Barranger and Julien "PitchIn" Corrales. Their music style is based on Hybrid, dubstep, drum and bass, drumstep.'})
dirtyphonics.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Evil+Inside.mp3'), filename: 'Evil+Inside.mp3')
dirtyphonics.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Sight+Of+Your+Soul.mp3'), filename: 'Sight+Of+Your+Soul.mp3')
dirtyphonics.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/WARP+(Bloody+Beetroots+Remix).mp3'), filename: 'WARP+(Bloody+Beetroots+Remix).mp3')


ericprydz = Dj.create({name: 'Eric Prydz', genre: 'Trance', nationality: 'Sweden 🇸🇪', bio: 'Eric Sheridan Prydz (/prɪdz/, Swedish pronunciation: [ˈêːrɪk ˈɕeːˌrɪdan ˈprʏts]; born 19 July 1976), also known by his aliases Pryda (Swedish pronunciation: [prʏta]) and Cirez D (/ˈsaɪrɛz/) among a number of others, is a Swedish DJ, record producer, and musician. He rose to fame with his 2004 hit single "Call on Me", and saw continued chart success with "Proper Education" in 2007, and "Pjanoo" in 2008. In 2016, he released his debut studio album, Opus. In 2017, he won DJ of the Year at the Electronic Music Awards and was also nominated for Live Act of the Year. Prydz is perhaps best known for his 2004 hit single "Call on Me", which samples the Steve Winwood hit "Valerie". It topped the UK singles chart for five weeks and was number one on the German Top 100 for six consecutive weeks. Although this track made him immensely popular, Prydz has stopped playing it in his shows in an attempt to distance himself from it. In some respects he has succeeded, and with his newer songs, Prydz has gained recognition from both underground and mainstream fans.'})
ericprydz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Another+Brick+In+The+Wall+(Pink+Floyd+Remix).mp3'), filename: 'Another+Brick+In+The+Wall+(Pink+Floyd+Remix).mp3')
ericprydz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Midnight+City+(M83+Remix).mp3'), filename: 'Midnight+City+(M83+Remix).mp3')
ericprydz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Opus.mp3'), filename: 'Opus.mp3')
ericprydz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Terminal+5.mp3'), filename: 'Terminal+5.mp3')
ericprydz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Thriller+Remix.mp3'), filename: 'Thriller+Remix.mp3')
ericprydz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Tribute+to+Stockholm.mp3'), filename: 'Tribute+to+Stockholm.mp3')


excision = Dj.create({name: 'Excision', genre: 'Dubstep', nationality: 'Canada 🇨🇦', bio: 'Jeff Abel (born 29 April 1986), better known by his stage name Excision, is a Canadian producer and DJ. He is the founder of Rottun Recordings. Active since 2006, his first release "Warning" was in 2007. He released an annual "Shambhala" mix album in the third quarter of each year up until 2016, where he started his own music festival (Lost Lands) the following year and releases annual mixes. A producer of dubstep, drum and bass, trap and breakbeat, Excision is known for his dark, bass-heavy sounds created using bass and drums, the aggressiveness of metal, and hip-hop vibes. He is also known for his tours with immense sound systems and huge visual productions.'})
excision.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Generator.mp3'), filename: 'Generator.mp3')
excision.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Resistance.mp3'), filename: 'Resistance.mp3')
excision.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Vault.mp3'), filename: 'Vault.mp3')

fearoftigers = Dj.create({name: 'Fear of Tigers', genre: 'Electronica', nationality: 'UK 🇬🇧', bio: 'Fear of Tigers is a dreamwave act from London, United Kingdom formed by producer and big cat expert Benjamin Berry. He released his first studio album, Cossus Snufsigalonica, as a free download in 2009. More recent releases include Zoipa and Hypnerotomachia Poliphili. Fear of Tigers is also known for his remixes, including ones for Kylie Minogue, Ellie Goulding, Does It Offend You, Yeah? and The Sound of Arrows.'})
fearoftigers.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Lights+(Ellie+Goulding+Remix).mp3'), filename: 'Lights+(Ellie+Goulding+Remix).mp3')
fearoftigers.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Please+Dont+Leave.mp3'), filename: 'Please+Dont+Leave.mp3')
fearoftigers.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/When+We+Say+Goodbye.mp3'), filename: 'When+We+Say+Goodbye.mp3')


feedme = Dj.create({name: 'Feed Me', genre: 'Dubstep Electro-House', nationality: 'UK 🇬🇧', bio: 'Jonathan Gooch (born 22 August 1984 in Hertfordshire, England), more commonly known by his stage names Feed Me and Spor, is a British drum and bass, dubstep and electro house producer and DJ. He is currently managed by Three Six Zero Group.'})
feedme.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/One+Click+Headshot.mp3'), filename: 'One+Click+Headshot.mp3')
feedme.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Strobe+(Deadmau5+Remix).mp3'), filename: 'Strobe+(Deadmau5+Remix).mp3')
feedme.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Survive.mp3'), filename: 'Survive.mp3')

fehrplay = Dj.create({name: 'Fehrplay', genre: 'Dance Electronic', nationality: 'Norway 🇳🇴', bio: 'What do Billboard and the sleepless city of New York hold in common? For one, they have all bowed to the uplifting talents of Norwegian breakout Fehrplay. With his name cemented to the lifeblood of progressive house and the global club circuit adding to his 360-degree explosion, 2013 set the young European trailblazer into one of his most prolific streaks to date.'})
fehrplay.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Every+Day+(Eric+Prydz+Remix).mp3'), filename: 'Every+Day+(Eric+Prydz+Remix).mp3')
fehrplay.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Lotus.mp3'), filename: 'Lotus.mp3')
fehrplay.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Renegade.mp3'), filename: 'Renegade.mp3')

ferrycorsten = Dj.create({name: 'Ferry Corsten', genre: 'Trance Progressive-House', nationality: 'Netherlands 🇳🇱', bio: 'Ferry Corsten (Dutch pronunciation: [ˈfɛri ˈkɔrstə(n)]; born 4 December 1973) is a Dutch DJ, record producer and remixer from Rotterdam. He is well known for producing many pioneering trance tracks during the 1990s–2000s under his numerous aliases, including System F, Moonman, Pulp Victim and Gouryella. In recent years, he has shifted to a broader electronic music style, playing everything from progressive house to uplifting trance; and hosts his own weekly radio show, Corstens Countdown. Corsten routinely plays at events and festivals all over the world including Electric Daisy Carnival, Tomorrowland, and many others, and has been consistently ranked among DJ Mags Top 100 DJs poll, having placed at rank 5 in 2004 and 2005, 6 in 2006 and 2008; and most recently at 90 for 2017.'})
ferrycorsten.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Anahera.mp3'), filename: 'Anahera.mp3')
ferrycorsten.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Madagascar.mp3'), filename: 'Madagascar.mp3')
ferrycorsten.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Trust.mp3'), filename: 'Trust.mp3')

figure = Dj.create({name: 'Figure', genre: 'Dubstep', nationality: 'USA 🇺🇸', bio: 'Josh Gard, better known by his stage name Figure, is an American electronic music producer and DJ. Figure is largely known for his Monsters series, which features drumstep tracks mixed with horror movie samples. As of 2018, he has released 9 volumes in the series. Since 2012 Universal Studios have enlisted him to supply the soundtrack for their annual event Halloween Horror Nights.'})
figure.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Addams+Family+Theme.mp3'), filename: 'Addams+Family+Theme.mp3')
figure.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Beetlejuice.mp3'), filename: 'Beetlejuice.mp3')
figure.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Candyman.mp3'), filename: 'Candyman.mp3')
figure.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Childs+Play.mp3'), filename: 'Childs+Play.mp3')
figure.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/This+Is+Halloween.mp3'), filename: 'This+Is+Halloween.mp3')
figure.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Twilight+Zone.mp3'), filename: 'Twilight+Zone.mp3')

fluxpavillion = Dj.create({name: 'Flux Pavillion', genre: 'Dubstep Electronica', nationality: 'UK 🇬🇧', bio: 'Joshua Steele, better known by his stage name Flux Pavilion, is an English EDM producer, DJ, singer-songwriter and label owner who has been performing since 2008. Flux Pavilion has headlined three US tours, two UK tours, and several festival DJ sets, including Glastonbury, Reading, Coachella, and EDC Vegas.'})
fluxpavillion.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Hold+Me+Close.mp3'), filename: 'Hold+Me+Close.mp3')
fluxpavillion.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Ironheart.mp3'), filename: 'Ironheart.mp3')
fluxpavillion.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Pogo+People.mp3'), filename: 'Pogo+People.mp3')
fluxpavillion.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Saviour.mp3'), filename: 'Saviour.mp3')
fluxpavillion.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Somebody+Else.mp3'), filename: 'Somebody+Else.mp3')
fluxpavillion.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Survive.mp3'), filename: 'Survive.mp3')

gammer = Dj.create({name: 'Gammer', genre: 'Hardstyle Dubstep House', nationality: 'UK 🇬🇧', bio: 'Matthew Lee (born 1985 in Northampton), known professionally by his stage name Gammer, is an English music producer and DJ. He is best known for his association with UK hardcore, of which he is described as an icon. He is also the co-founder of the Together We Rise record label, which is dedicated to hardcore music.'})
gammer.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Blow+This.mp3'), filename: 'Blow+This.mp3')
gammer.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Forever.mp3'), filename: 'Forever.mp3')
gammer.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Drop.mp3'), filename: 'The+Drop.mp3')

gesaffelstein = Dj.create({name: 'Gesaffelstein', genre: 'Techno', nationality: 'France 🇫🇷', bio: 'Mike Lévy (French pronunciation: ​[majk levi]; born 13 June 1987), known professionally as Gesaffelstein (German pronunciation: [ɡəˈzafl̩ʃtaɪ̯n]), is a French musician, DJ, songwriter and record producer from Lyon. He has worked alongside artists as varied as The Weeknd, Miss Kittin, Daft Punk, A$AP Rocky, Phoenix, Kanye West, Jean-Michel Jarre and Pharrell Williams. Mixmag describes Gesaffelsteins style as being a "dark and threatening techno, though enchanting"; The Inrocks see it as "black, ultra-violent music, which revives the techno fundamentals, the intransigence of Underground Resistance , the mental and obsessive structures of Drexciya , the contemporary power and more" . Megan Buerger from the Washington Post describes his style has a mixture of dark and underground music, and notes that a specialty of the artist is his use of silences to create a "tension" before a "raucous explosion of bass and percussion". Rolling Stone magazine sees his music as being "a little more aggressive and punk-rock than normal".'})
gesaffelstein.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Atmosphere.mp3'), filename: 'Atmosphere.mp3')
gesaffelstein.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Belgium.mp3'), filename: 'Belgium.mp3')
gesaffelstein.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Hate+or+Glory.mp3'), filename: 'Hate+or+Glory.mp3')
gesaffelstein.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Les+Enfants+(Cassius+Remix).mp3'), filename: 'Les+Enfants+(Cassius+Remix).mp3')
gesaffelstein.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Novo+Sonic+System.mp3'), filename: 'Novo+Sonic+System.mp3')
gesaffelstein.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Pursuit.mp3'), filename: 'Pursuit.mp3')

glitchmob = Dj.create({name: 'Glitch Mob', genre: 'Glitch Electronica Industrial', nationality: 'USA 🇺🇸', bio: 'The Glitch Mob is an American-based electronic music group from Los Angeles, California. It consists of edIT (Edward Ma), Boreta (Justin Boreta) and Ooah (Josh Mayer). Chris Martins of LA Weekly noted that they "have undoubtedly found the largest audience of any L.A. beat scene artist yet."'})
glitchmob.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Can\'t+Kill+Us.mp3'), filename: 'Can\'t+Kill+Us.mp3')
glitchmob.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Go+Light.mp3'), filename: 'Go+Light.mp3')
glitchmob.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Seven+Nation+Army+(White+Stripes+Remix).mp3'), filename: 'Seven+Nation+Army+(White+Stripes+Remix).mp3')

gost = Dj.create({name: 'Gost', genre: 'Electronic', nationality: 'USA 🇺🇸', bio: 'GosT is a darksynth producer from the United States. And it came to pass, as soon as Gideon was dead, that the children of Israel turned again, and went a whoring after Baalim, and made Baalberith their god.'})
gost.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Cursed.mp3'), filename: 'Cursed.mp3')
gost.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Head+like+a+Hole+(Nine+Inch+Nails+cover).mp3'), filename: 'Head+like+a+Hole+(Nine+Inch+Nails+cover).mp3')
gost.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Manic.mp3'), filename: 'Manic.mp3')

greenvelvet = Dj.create({name: 'Green Velvet', genre: 'Techno House', nationality: 'USA 🇺🇸', bio: 'Curtis Alan Jones (born April 26, 1968), better known by his stage name Green Velvet, is an American singer, record producer, and DJ. DJ Mag described him as "a stalwart figure in both house and techno". He is also known as Cajmere, Geo Vogt, Half Pint, Curan Stone, and Gino Vittori.'})
greenvelvet.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Deceiver.mp3'), filename: 'Deceiver.mp3')
greenvelvet.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Flash+Remix.mp3'), filename: 'Flash+Remix.mp3')
greenvelvet.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Space+Date.mp3'), filename: 'Space+Date.mp3')

headhunterz = Dj.create({name: 'Headhunterz', genre: 'Hardstyle Electro-House', nationality: 'Netherlands 🇳🇱', bio: 'Willem Rebergen (born 12 September 1985), better known by his stage name Headhunterz, is a Dutch DJ and record producer. He also is a voice actor, dubbing for several movies and TV series. He began his career in 2005, working on hardstyle music. He has performed at Qlimax, Defqon.'})
headhunterz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Dragonborn.mp3'), filename: 'Dragonborn.mp3')
headhunterz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Home.mp3'), filename: 'Home.mp3')
headhunterz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Our+Church.mp3'), filename: 'Our+Church.mp3')

hardwell = Dj.create({name: 'Hardwell', genre: 'Dance Electronic', nationality: 'Netherlands 🇳🇱', bio: 'Robbert van de Corput (Dutch pronunciation: [ˈrɔbərt fɑn də ˈkɔrpʏt]; born 7 January 1988), known professionally as Hardwell, is a Dutch DJ, record producer and remixer from Breda, North Brabant. Hardwell was voted the worlds number one DJ on DJ Mag in 2013 and again in 2014.'})
hardwell.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Bella+Ciao.mp3'), filename: 'Bella+Ciao.mp3')
hardwell.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Retrograde+(Extended+Mix).mp3'), filename: 'Retrograde+(Extended+Mix).mp3')
hardwell.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Without+Me+(Eminem+Remix).mp3'), filename: 'Without+Me+(Eminem+Remix).mp3')

hernancattaneo = Dj.create({name: 'Hernan Cattaneo', genre: 'Progressive-House', nationality: 'Argentina 🇦🇷', bio: 'If ever there was an artist who doesn’t need an introduction, it has to be the man known to music lovers the world over simply as El Maestro. Throughout his rise to become both a foundation and a founding father of the underground house scene, the name Hernán Cattáneo has become synonymous with dedication, passion and an unwavering commitment to championing a unique quality of music that is hard to define, but instantly recognisable as his signature sound.'})
hernancattaneo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/A+Major+Minor.mp3'), filename: 'A+Major+Minor.mp3')
hernancattaneo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Fereek.mp3'), filename: 'Fereek.mp3')
hernancattaneo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Me+Llama+Una+Voz.mp3'), filename: 'Me+Llama+Una+Voz.mp3')

heyz = Dj.create({name: 'HEYZ', genre: 'Electronic Progressive-House Techno', nationality: 'USA 🇺🇸', bio: 'HEYZ produces an eclectic style of techno that fuses dark, driving beats with melodic electronica. After just 3 months of producing and writing music in North Carolina, DJ/producer HEYZ caught the eye of mau5trap, deadmau5s widely acclaimed imprint.HEYZ got his first international radio play on deadmau5s BBC Radio 1 residency preceding his debut single on the label, titled "Quietly", which released in September of 2017 on Foar Moar Vol. 3. HEYZs second single with the label, "Only Now", released December 8th 2017 on mau5traps We Are Friends 007 compilation. He is slated to release his debut mau5trap EP in 2018.'})
heyz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Corruption.mp3'), filename: 'Corruption.mp3')
heyz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Darkest+Little+Friend.mp3'), filename: 'Darkest+Little+Friend.mp3')
heyz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Quietly.mp3'), filename: 'Quietly.mp3')

ilanbluestone = Dj.create({name: 'Ilan Bluestone', genre: 'Dance Electronic Trance', nationality: 'UK 🇬🇧', bio: 'Ilan Bluestone is a pioneer at the forefront of the international dance music scene with his world class talent in progressive house and melodic trance.'})
ilanbluestone.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Black+and+Blue.mp3'), filename: 'Black+and+Blue.mp3')
ilanbluestone.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Frozen+Ground.mp3'), filename: 'Frozen+Ground.mp3')
ilanbluestone.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Mama+Africa.mp3'), filename: 'Mama+Africa.mp3')

infectedmushroom = Dj.create({name: 'Infected Mushroom', genre: 'Psytrance Electro-House', nationality: 'Israel 🇮🇱', bio: 'Infected Mushroom is an Israeli musical duo formed in Haifa in 1996 by producers Erez Eisen and Amit Duvdevani. They produce and perform psytrance, electronica, dream trance and psychedelic music. They are one of the best-selling groups in Israeli music history in terms of both domestic and international sales.'})
infectedmushroom.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Breaking+The+Habit+(Linkin+Park+Cover).mp3'), filename: 'Breaking+The+Habit+(Linkin+Park+Cover).mp3')
infectedmushroom.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Now+Is+Gold.mp3'), filename: 'Now+Is+Gold.mp3')
infectedmushroom.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Riders+On+The+Storm+(The+Doors+Remix).mp3'), filename: 'Riders+On+The+Storm+(The+Doors+Remix).mp3')
infectedmushroom.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Pretender+(Foo+Fighters+Remix).mp3'), filename: 'The+Pretender+(Foo+Fighters+Remix).mp3')
infectedmushroom.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Where+Do+I+Belong.mp3'), filename: 'Where+Do+I+Belong.mp3')

juliangray = Dj.create({name: 'Julian Gray', genre: 'Dance Electronic Techno', nationality: 'USA 🇺🇸', bio: 'Julian Gray is a techno, electro and progressive house artist based in Los Angeles, CA. Born and raised outside of Washington, DC, with a musician father and a mother familiar with the 80s New-Wave scene, music was naturally the center of Julians life from day one.'})
juliangray.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Cloud+Generator.mp3'), filename: 'Cloud+Generator.mp3')
juliangray.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Let+Go+(Deadmau5+Remix).mp3'), filename: 'Let+Go+(Deadmau5+Remix).mp3')
juliangray.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Static.mp3'), filename: 'Static.mp3')

justice = Dj.create({name: 'Justice', genre: 'Electro-House', nationality: 'France 🇫🇷', bio: 'Justice is a French electronic music duo consisting of Gaspard Augé and Xavier de Rosnay.[2] The duos label is Ed Banger Records, managed by Pedro Winter. Justice is known for incorporating a strong rock and indie influence into its music and image. The bands debut album Cross was released in June 2007 to critical acclaim.[5] The album was later nominated for a Grammy Award for Best Electronic/Dance Album and came in at number 15 on Pitchforks Top 50 Albums of 2007[6] and number 18 on Blenders "25 Best Albums of 2007" list. It was nominated for the 2007 Shortlist Prize, losing out to The Reminder by Feist. The bands remix of the MGMT song "Electric Feel" won the Grammy Award for Best Remixed Recording, Non-Classical in 2009.'})
justice.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Chorus+(WWW).mp3'), filename: 'Chorus+(WWW).mp3')
justice.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Electric+Feel+(MGMT+Remix).mp3'), filename: 'Electric+Feel+(MGMT+Remix).mp3')
justice.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stress.mp3'), filename: 'Stress.mp3')

karma = Dj.create({name: 'Karma Fields', genre: 'Dance Electronica', nationality: 'UK 🇬🇧', bio: 'Karma Fields is an electronic music producer of uncertain origins. He made his debut on Monstercat with their song "Build the Cities", which features Kerli and was premiered during the Monstercat Podcast.'})
karma.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/An+Underground+System+of+Forgotten+Machines.mp3'), filename: 'An+Underground+System+of+Forgotten+Machines.mp3')
karma.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Build+The+Cities.mp3'), filename: 'Build+The+Cities.mp3')
karma.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/You+and+Me.mp3'), filename: 'You+and+Me.mp3')

kayzo = Dj.create({name: 'Kayzo', genre: 'Dubstep Hardstyle', nationality: 'USA 🇺🇸', bio: 'Hayden Capuozzo (born October 8, 1991), better known by his stage name Kayzo, is an American DJ and producer based in Los Angeles, California. He is best known for remixing songs and incorporating trap and hardstyle genres into his remixes. His collaboration with Riot "Wake Up" received more than 200,000 plays in less than 24 hours.'})
kayzo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Antidance.mp3'), filename: 'Antidance.mp3')
kayzo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Chop+Suey+(System+of+a+Down+Remix).mp3'), filename: 'Chop+Suey+(System+of+a+Down+Remix).mp3')
kayzo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Dragula+(Rob+Zombie+Remix).mp3'), filename: 'Dragula+(Rob+Zombie+Remix).mp3')
kayzo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Last+Resort+(Papa+Roach+Remix).mp3'), filename: 'Last+Resort+(Papa+Roach+Remix).mp3')
kayzo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Right+On+Time.mp3'), filename: 'Right+On+Time.mp3')
kayzo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/This+Time.mp3'), filename: 'This+Time.mp3')

killthenoise = Dj.create({name: 'Kill The Noise', genre: 'Dubstep DrumnBass Jungle', nationality: 'USA 🇺🇸', bio: 'Jacob Stanczak, known professionally as Kill the Noise, is an American DJ and record producer from Rochester, New York. His collaboration with Skrillex, Fatman Scoop and Michael Angelakos, "Recess", entered the UK Singles Chart at number 57.'})
killthenoise.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Front+2+Back.mp3'), filename: 'Front+2+Back.mp3')
killthenoise.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/I+Do+Coke.mp3'), filename: 'I+Do+Coke.mp3')
killthenoise.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Rockers.mp3'), filename: 'Rockers.mp3')

knifeparty = Dj.create({name: 'Knife Party', genre: 'Dubstep Electro-House', nationality: 'Australia 🇦🇺', bio: 'Knife Party is an Australian electronic music duo consisting of Rob Swire and Gareth McGrillen, two members of the drum and bass band Pendulum. The duo has worked with artists such as Swedish House Mafia, Steve Aoki, MistaJam, Foreign Beggars, I See MONSTAS, Tom Staar, Pegboard Nerds and Tom Morello.'})
knifeparty.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/404.mp3'), filename: '404.mp3')
knifeparty.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/EDM+Death+Machine.mp3'), filename: 'EDM+Death+Machine.mp3')
knifeparty.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/No+Saint.mp3'), filename: 'No+Saint.mp3')

kshmr = Dj.create({name: 'Kshmr', genre: 'Electro-House Psytrance', nationality: 'USA 🇺🇸', bio: 'Niles Hollowell-Dhar (born October 6, 1988), better known by his stage name Kshmr (pronounced "Kashmir"; stylized as KSHMR), is an American musician,record producer and DJ of Indian heritage. He was ranked at 23rd on DJ Mags 2015 Top 100 DJs and was awarded "The Highest New Entry".'})
kshmr.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Dhoom.mp3'), filename: 'Dhoom.mp3')
kshmr.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Jungle+Whistle.mp3'), filename: 'Jungle+Whistle.mp3')
kshmr.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Spook.mp3'), filename: 'The+Spook.mp3')

kygo = Dj.create({name: 'Kygo', genre: 'Deep-house Tropical-House', nationality: 'Norway 🇳🇴', bio: 'Kyrre Gørvell-Dahll (born 11 September 1991), better known by his stage name Kygo (Norwegian: [ˈkỳːɡuː]), is a Norwegian DJ, singer, songwriter, and record producer. He garnered international attention with his December 2013 remix of the track "I See Fire" by Ed Sheeran and his December 2014 single "Firestone".'})
kygo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Broken+Glass.mp3'), filename: 'Broken+Glass.mp3')
kygo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Firestone.mp3'), filename: 'Firestone.mp3')
kygo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/What\'s+Love+Got+to+Do+with+It.mp3'), filename: 'What\'s+Love+Got+to+Do+with+It.mp3')

lnytnz = Dj.create({name: 'Lny Tnz', genre: 'Electronic Hardstyle', nationality: 'Netherlands 🇳🇱', bio: 'LNY TNZ started releasing underground bootlegs, remixes and original music, and was quickly noticed in the Dutch music scene, known for a total unique sound combining different styles of music. Even then, LNY TNZ was trying to push the genre boundaries and gained immediate support from leading artists.'})
lnytnz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Highest+Gear.mp3'), filename: 'Highest+Gear.mp3')
lnytnz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Paranoia.mp3'), filename: 'Paranoia.mp3')
lnytnz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/We+Go+Up.mp3'), filename: 'We+Go+Up.mp3')

lostfrequencies = Dj.create({name: 'Lost Frequencies', genre: 'Deep-House Dance', nationality: 'Belgium 🇧🇪', bio: 'Felix De Laet, better known by his moniker Lost Frequencies, has soared to success in the international music industry over the past half-decade. Releasing his global smash hit ‘Are You With Me’ back in 2014 with the track rapidly ascended by hitting multi-platinum status, taking the #1 spot in 18 countries and becoming the first Belgian artist to hit #1 in the UK. Proving that he is no one-trick pony in the studio, ‘Reality’ evidenced as another major smash hit from that, and flew to platinum status in no less than 7 territories, before the release of his debut album ‘Less Is More’ (2016), and sophomore follow-up ‘Alive And Feeling Fine’ (2019), showcased his enthusiasm, dedication to craft and sheer skill all whilst playing the long game.'})
lostfrequencies.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Crazy.mp3'), filename: 'Crazy.mp3')
lostfrequencies.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Reality.mp3'), filename: 'Reality.mp3')
lostfrequencies.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/What+Goes+Around+Comes+Around.mp3'), filename: 'What+Goes+Around+Comes+Around.mp3')

markuschulz = Dj.create({name: 'Markus Schulz', genre: 'Trance Electronic', nationality: 'Germany 🇩🇪', bio: 'Markus Schulz (/ˈmɑːrkəs ˈʃʊlts/; German: [ˈmaʁkʊs ˈʃʊlts]; born 3 February 1975) is a German-American DJ and music producer based in Miami, Florida. Best known for his weekly radio show titled "Global DJ Broadcast" that airs on Digitally Imported radio, After Hours FM and other online stations, Schulz is also the founder of the label Coldharbour Recordings and Schulz Music Group (SMG), an artist management company that manages rising stars in the industry including Nifra, Fisherman & Hawkins, Mr. Pit, Grube and Hovsepian and eventual wife Adina Butar. In September 2012, Schulz was crowned Americas Number 1 DJ by DJ Times.'})
markuschulz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Ave+Maria.mp3'), filename: 'Ave+Maria.mp3')
markuschulz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Edonismo.mp3'), filename: 'Edonismo.mp3')
markuschulz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/In+The+End+(Linkin+Park+Tribute).mp3'), filename: 'In+The+End+(Linkin+Park+Tribute).mp3')

marlo = Dj.create({name: 'MaRlo', genre: 'Trance', nationality: 'Australia 🇦🇺', bio: 'Leaving a mark on charts, dance floors and music enthusiasts the world over, Dutch born MaRLo backs up the #1 Best Trance DJ and #2 overall DJ in Australia with no justification required. From Beatport #1’s escaping the studio to headlining some of the most sought after dance events in the world, MaRLo is influencing trance music like no other.Dutch Born, Australian raised, MaRLo has truly earnt his stripes in the studio. He has risen to striking heights claiming top chart spots. Signed to Armin van Buuren’s Armada Music, And is currently taking the world by storm, with Armin personally noting that MaRLo “programs the best lead sounds” - (Armin interview with MTV). His style can be best described as powerful Tech influenced Trance with plenty of hands in the air action.'})
marlo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Blast+Off.mp3'), filename: 'Blast+Off.mp3')
marlo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Smack+My+Bitch+Up+(Prodigy+Remix).mp3'), filename: 'Smack+My+Bitch+Up+(Prodigy+Remix).mp3')
marlo.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/You+And+Me.mp3'), filename: 'You+And+Me.mp3')

martingarrix = Dj.create({name: 'Martin Garrix', genre: 'Progressive-House', nationality: 'Netherlands 🇳🇱', bio: 'Martijn Gerard Garritsen (Dutch: [mɑrˈtɛiŋ ɣəˈrɑrt ˈxɑrɪtsə(n)]), professionally known as Martin Garrix, is a Dutch DJ and record producer from Amstelveen. His most known singles are "Animals", "In the Name of Love", and "Scared to Be Lonely".'})
martingarrix.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Access.mp3'), filename: 'Access.mp3')
martingarrix.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Hold+On.mp3'), filename: 'Hold+On.mp3')
martingarrix.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/In+The+Name+Of+Love.mp3'), filename: 'In+The+Name+Of+Love.mp3')

martinezbrothers = Dj.create({name: 'Martinez Brothers', genre: 'House Hip-Hop Moombahton', nationality: 'USA 🇺🇸', bio: 'The Martinez Brothers are a house DJ/producer duo born and raised in the New York borough known as the Bronx. Steven and Chris Martinez were introduced to music from a young age, when their father took it upon himself to provide a musical upbringing, involving the boys in the church band.'})
martinezbrothers.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Bappi.mp3'), filename: 'Bappi.mp3')
martinezbrothers.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Dreaming+about+Paprica+2003+(2players+Remix).mp3'), filename: 'Dreaming+about+Paprica+2003+(2players+Remix).mp3')
martinezbrothers.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/My+Way.mp3'), filename: 'My+Way.mp3')

masterbootrecord = Dj.create({name: 'Master Boot Record', genre: 'Darksynth Industrial', nationality: 'Italy 🇮🇹', bio: 'MASTER BOOT RECORD. Rome, Italy. I am a 486DX-33MHz-64MB processing avant-garde chiptune, synthesized heavy metal & classical symphonic music.'})
masterbootrecord.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Irq+0+System+Clock.mp3'), filename: 'Irq+0+System+Clock.mp3')
masterbootrecord.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Irq+2+Cascade.mp3'), filename: 'Irq+2+Cascade.mp3')
masterbootrecord.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Shadow+Of+The+Beast.mp3'), filename: 'Shadow+Of+The+Beast.mp3')

mordfustang = Dj.create({name: 'Mord Fustang', genre: 'Electro-House Progressive-House', nationality: 'Estonia 🇪🇪', bio: 'Mord Fustang (born Rauno Roosnurm; 21 February 1991) is an [[Estonian DJ and music producer. He is regarded as a pioneer in the complextro genre.]'})
mordfustang.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/A+New+Dawn.mp3'), filename: 'A+New+Dawn.mp3')
mordfustang.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Gaia.mp3'), filename: 'Gaia.mp3')
mordfustang.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/In+The+Air.mp3'), filename: 'In+The+Air.mp3')

nero = Dj.create({name: 'Nero', genre: 'Dubstep Electronica', nationality: 'UK 🇬🇧', bio: 'Nero (stylised as NERO) are a British electronic music trio composed of members Dan Stephens, Joe Ray and Alana Watson. On 12 August 2011, they released their debut studio album, Welcome Reality, which reached number one in the UK Albums Chart. In August 2012, "Promises" received a Gold certification in the United States. On 10 February 2013, Nero won a Grammy Award for their collaborative remix of "Promises" with Skrillex. Their second studio album, Between II Worlds, was released on 11 September 2015.'})
nero.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Crush+On+You+Remix.mp3'), filename: 'Crush+On+You+Remix.mp3')
nero.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Into+the+Night.mp3'), filename: 'Into+the+Night.mp3')
nero.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/My+Eyes.mp3'), filename: 'My+Eyes.mp3')
nero.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Satisfy.mp3'), filename: 'Satisfy.mp3')
nero.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Thrill.mp3'), filename: 'The+Thrill.mp3')

nickyromero = Dj.create({name: 'Nicky Romero', genre: 'Electro-House', nationality: 'Netherlands 🇳🇱', bio: 'Nick Rotteveel (Dutch pronunciation: [nɪk rɔtəveːl]; born 6 January 1989), professionally known as Nicky Romero, is a Dutch DJ, record producer and remixer from Amerongen, Utrecht Province. He has worked with, and received support from DJs, such as Tiësto, Fedde le Grand, Sander van Doorn, David Guetta, Calvin Harris, Armand van Helden, Avicii and Hardwell. He currently ranks at number 37 on DJ Mags annual Top 100 DJs poll. He is known for his viral hit song "Toulouse".'})
nickyromero.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Dynamite.mp3'), filename: 'Dynamite.mp3')
nickyromero.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stay.mp3'), filename: 'Stay.mp3')
nickyromero.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Time.mp3'), filename: 'Time.mp3')

ninakraviz = Dj.create({name: 'Nina Kraviz', genre: 'Techno Acid-House Electronica', nationality: 'Russia 🇷🇺', bio: 'Nina Kraviz (Russian: Нина Кравиц, romanized: Nina Kravits) is a Russian DJ, music producer and singer. After moving to Moscow in 2000 to study dentistry, Kraviz worked in a number of roles in the early 2000s before her music career took off, including fixing "cosmonauts teeth", hosting a local Irkutsk radio show and writing for a fanzine. She was accepted into the Red Bull Music Academy in Seattle in 2005, however couldnt attend as she couldnt obtain a visa, attending the following year in Melbourne instead. By 2008 she was playing a regular night at the Propaganda Club in Moscow.'})
ninakraviz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Ghetto+Kraviz.mp3'), filename: 'Ghetto+Kraviz.mp3')
ninakraviz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stranno+Neobjatno.mp3'), filename: 'Stranno+Neobjatno.mp3')
ninakraviz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/x3.mp3'), filename: 'x3.mp3')

noisufx = Dj.create({name: 'Noisuf X', genre: 'Electronic Industrial Techno', nationality: 'Germany 🇩🇪', bio: 'An apocalyptic and fearful view of the world is what Noisuf-X, the side-project of X-Fusion, is dealing with. It describes a cold and hopeless atmosphere musically with harsh distorted beats, experimental sounds and pushing sequences. The recurrent soundstructures and its simple monotony build a catchy opposite to X-Fusion.'})
noisufx.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Banzai.mp3'), filename: 'Banzai.mp3')
noisufx.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Fake.mp3'), filename: 'Fake.mp3')
noisufx.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Hit+Me+Hard.mp3'), filename: 'Hit+Me+Hard.mp3')
noisufx.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Let\'s+Rock.mp3'), filename: 'Let\'s+Rock.mp3')
noisufx.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/PSD.mp3'), filename: 'PSD.mp3')
noisufx.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Satisfaction.mp3'), filename: 'Satisfaction.mp3')

nomana = Dj.create({name: 'No Mana', genre: 'Dance Electro-House', nationality: 'USA 🇺🇸', bio: 'As the production wizard from Southern California, No Mana has been practising musical alchemy and sculpting a craft that has never seen the light of day. However, with the work let loose in the recent days, his music has gotten to the best of Eric Prydz, Dillon Francis and many more. In just under a year, he begins to release his material under mau5trap and shows the world what he’s all about – voltaic electro house with influences from various four-to-the-floor genres, and styles from different years and stages of electronic music.'})
nomana.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Melody3.mp3'), filename: 'Melody3.mp3')
nomana.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Millenium+Bug.mp3'), filename: 'Millenium+Bug.mp3')
nomana.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Motorcycle.mp3'), filename: 'Motorcycle.mp3')
nomana.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Nostalgia+Drive.mp3'), filename: 'Nostalgia+Drive.mp3')
nomana.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Slow+Motion.mp3'), filename: 'Slow+Motion.mp3')
nomana.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/VVR.mp3'), filename: 'VVR.mp3')

noraenpure = Dj.create({name: 'Nora En Pure', genre: 'Deep House', nationality: 'Africa South 🇿🇦', bio: 'Daniela Niederer (born July 20, 1990), better known by her stage name Nora En Pure, is a South African-Swiss DJ and deep house producer. She first received recognition for her 2013 single "Come With Me". Further popular releases are "Morning Dew", "Lake Arrowhead", and "Tears In Your Eyes." In July 2016, she was invited to put together a two-hour long mix for Pete Tongs radio show: "BBCs Essential Mix".'})
noraenpure.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Fibonacci.mp3'), filename: 'Fibonacci.mp3')
noraenpure.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/In+The+Air+Tonight.mp3'), filename: 'In+The+Air+Tonight.mp3')
noraenpure.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Polynesia.mp3'), filename: 'Polynesia.mp3')

oliversmith = Dj.create({name: 'Oliver Smith', genre: 'Trance Electronic', nationality: 'UK 🇬🇧', bio: ' Oliver Smith has been described as "an excellent DJ" by Armin van Buuren, "the best thing to happen in trance" by Mixmag and "sensational" by DJ Magazine. ... Oliver is also a regular presenter of Anjunabeats Worldwide Radio, which is broadcast on over 100 FM stations across the planet.'})
oliversmith.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Java.mp3'), filename: 'Java.mp3')
oliversmith.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Over+You.mp3'), filename: 'Over+You.mp3')
oliversmith.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Shapes.mp3'), filename: 'Shapes.mp3')

owlvision = Dj.create({name: 'Owl Vision', genre: 'Dark Electro', nationality: 'UK 🇬🇧', bio: 'Owl Vision started releasing dark electronic music in 2007. He has among many things collaborated with The Bloody Beetroots and together they made two songs on Steve Aokis legendary label Dim Mak. You can find some of his remixes and original songs on Kannibalen Records, the home of Snails, Apashe and Black Tiger Sex Machine. Most of his music is released through his own indie label Comorbid Records, named after the first of his many albums called Comorbid. He is the lord of death electro, a genre originally summoned alongside his first musical creations.'})
owlvision.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Armz.mp3'), filename: 'Armz.mp3')
owlvision.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Transfix.mp3'), filename: 'Transfix.mp3')
owlvision.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Zepulchre.mp3'), filename: 'Zepulchre.mp3')

pauloakenfold = Dj.create({name: 'Paul Oakenfold', genre: 'Electronica Trance Acid-House', nationality: 'UK 🇬🇧', bio: 'Paul Mark Oakenfold (born 30 August 1963), formerly known mononymously as Oakenfold, is an English record producer and trance DJ. He is a three-time Grammy Award and two-time World Music Awards nominee. He was voted the No. 1 DJ in the World twice in 1998 and 1999 by DJ Magazine.'})
pauloakenfold.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Cafe+Del+Mar.mp3'), filename: 'Cafe+Del+Mar.mp3')
pauloakenfold.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Only+Road+(Cosmic+Gate+Remix).mp3'), filename: 'Only+Road+(Cosmic+Gate+Remix).mp3')
pauloakenfold.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Send+Me+An+Angel+(Scorpions+Remix).mp3'), filename: 'Send+Me+An+Angel+(Scorpions+Remix).mp3')

paulvandyk = Dj.create({name: 'Paul Van Dyk', genre: 'Trance Progressive-House', nationality: 'Germany 🇩🇪', bio: 'Matthias Paul (German: [maˈtiːas ˈpaʊ̯l]; born 16 December 1971),[3][4] known professionally as Paul van Dyk (/daɪk/; German: [fan ˈdʏk]) is a German DJ, record producer and musician. One of the first true renowned DJs, van Dyk was the first artist to receive a Grammy Award nomination in the newly added category of Best Dance/Electronic album for his 2003 release Reflections. He was named the Worlds number one DJ in both 2005 and 2006, something few DJs have ever achieved. He was the first ever DJ to be named number one by Mixmag in 2005. By 2008, he had sold over 3 million albums worldwide.'})
paulvandyk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Duality.mp3'), filename: 'Duality.mp3')
paulvandyk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/First+Contact.mp3'), filename: 'First+Contact.mp3')
paulvandyk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/You+Are.mp3'), filename: 'You+Are.mp3')

peggygou = Dj.create({name: 'Peggy Gou', genre: 'Deep-House Neo-Trance', nationality: 'Korea South 🇰🇷', bio: 'Peggy Gou is a Berlin-based South Korean DJ, record producer, and fashion designer. She has released seven EPs on record labels including Ninja Tune and Phonica. In 2019, she launched her own independent record label, Gudu Records, and released a DJ-Kicks compilation, DJ-Kicks.'})
peggygou.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Han+Pan.mp3'), filename: 'Han+Pan.mp3')
peggygou.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/It+Makes+You+Forget.mp3'), filename: 'It+Makes+You+Forget.mp3')
peggygou.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Travelling+Without+Arriving.mp3'), filename: 'Travelling+Without+Arriving.mp3')

perturbator = Dj.create({name: 'Perturbator', genre: 'Darksynth Industrial', nationality: 'France 🇫🇷', bio: 'James Kent (born 1993), known by his stage name Perturbator, is a French synthwave musician from Paris. Kent has a background as a guitarist in several black metal[3] bands. Since 2012, he has produced electronic music inspired by cyberpunk culture and with inspiration from movies such as Akira, Ghost in the Shell, and the Running Man. He uses a variety of software synths in his productions, such as the emulators of old vintage synths like the OB-X or the CS-80. Since his debut EP Night Driving Avenger he has released four full-length albums, the latest of which is New Model on the Blood Music label, and has performed several live shows. Several of his tracks were featured in the 2012 game Hotline Miami and its 2015 sequel Hotline Miami 2: Wrong Number. Perturbators EP Sexualizer was released in part to officially release the song "Miami Disco" and as a way to thank the developers of Hotline Miami. The success of the Hotline Miami games resulted in a greater amount of exposure to a mainstream audience.'})
perturbator.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Body+Prison.mp3'), filename: 'Body+Prison.mp3')
perturbator.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Miami+Disco.mp3'), filename: 'Miami+Disco.mp3')
perturbator.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Sexualizer.mp3'), filename: 'Sexualizer.mp3')

prettylights = Dj.create({name: 'Pretty Lights', genre: 'Psytrance Electronic', nationality: 'USA 🇺🇸', bio: 'Derek Vincent Smith (born November 25, 1981), known by his stage name Pretty Lights, is an American electronic music producer. Pretty Lights was originally a music project consisting of him and Michal Menert, who left after the release of their first album. Rick Rubin once described Pretty Lights as "the face and voice of the new American electronic music scene".'})
prettylights.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/All+Of+The+Lights+(Kanye+West+Remix).mp3'), filename: 'All+Of+The+Lights+(Kanye+West+Remix).mp3')
prettylights.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Country+Roads+(John+Denver+Remix).mp3'), filename: 'Country+Roads+(John+Denver+Remix).mp3')
prettylights.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/I+Can+See+It+In+Your+Face.mp3'), filename: 'I+Can+See+It+In+Your+Face.mp3')
prettylights.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/It\'s+Tricky+(Run+DMC+Remix).mp3'), filename: 'It\'s+Tricky+(Run+DMC+Remix).mp3')
prettylights.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Let\'s+Get+Busy.mp3'), filename: 'Let\'s+Get+Busy.mp3')
prettylights.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Time+(Pink+Floyd+Remix).mp3'), filename: 'Time+(Pink+Floyd+Remix).mp3')

prodigy = Dj.create({name: 'Prodigy', genre: 'Techno Industrial Electronica', nationality: 'UK 🇬🇧', bio: 'The Prodigy are an English electronic dance music band from Braintree, Essex, formed in 1990 by keyboardist and songwriter Liam Howlett. The line-up of the band has included MC and vocalist Maxim, dancer and vocalist Keith Flint (until his death in March 2019), dancer and live keyboardist Leeroy Thornhill (who left to pursue a solo career in 1999), and dancer and vocalist Sharky (1990–1991). Along with the Chemical Brothers and Fatboy Slim, The Prodigy are credited as pioneers of the breakbeat-influenced genre big beat, which achieved mainstream popularity in the 1990s. Howletts rock-inspired drum rhythms infused with electronic rave music beats/breaks were combined with Maxims omnipresent mystique, Thornhills shuffle dancing style and Flints modern punk appearance.'})
prodigy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Minefields.mp3'), filename: 'Minefields.mp3')
prodigy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Day+Is+My+Enemy.mp3'), filename: 'The+Day+Is+My+Enemy.mp3')
prodigy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Voodoo+People.mp3'), filename: 'Voodoo+People.mp3')

quintino = Dj.create({name: 'Quintino', genre: 'Electro-House Progressive-House', nationality: 'Netherlands 🇳🇱', bio: 'Quinten van den Berg (Dutch pronunciation: [kwɪnˈtɛn vɑn dɛn ˈbɛrx]; born September 21, 1985), known professionally as Quintino, is a Dutch DJ and record producer. Notable releases include a remix of "Rap das Armas", "Selecta", "Go Hard" and "Fatality". In 2019 he was named No. 25 in the Top 100 DJs list put out by DJ Magazine. At the age of 18, Quintino was discovered by Dutch DJ Laidback Luke, who assisted him developing a career. His breakthrough followed in 2011 with his remix of stairs hit "Rap Das Armas" in the Netherlands, and the release of Epic. That same year Quintino co-produced the Afrojack track "Selecta". In 2013 he worked with DJs Tiësto and Alvaro to produce the anthem of Ultra Music Festival. In August, he launched his radio show on Radio SupersoniQ international station SiriusXMs Electric Area.'})
quintino.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Carnival.mp3'), filename: 'Carnival.mp3')
quintino.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Go+Hard.mp3'), filename: 'Go+Hard.mp3')
quintino.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Inferno.mp3'), filename: 'Inferno.mp3')

r3hab = Dj.create({name: 'R3hab', genre: 'Electro-House Progressive-House', nationality: 'Netherlands 🇳🇱', bio: 'Fadil El Ghoul (Arabic: فضيل الغول‎ ; born 2 April 1986 in Den Bosch), better known by his stage name R3hab (sylized as R3HAB; pronounced "rehab"), is a Dutch DJ, record producer and re-mixer from Breda, North Brabant. R3hab has produced two full studio albums, Trouble and The Wave, and in 2018 R3hab was ranked at number 12 on the DJ Mag Top 100 DJs in the world. R3hab practices a keto diet while on tour. R3hab began his career in late 2007 while producing the track "Mrkrstft" which was remixed by fellow Breda DJ Hardwell. His connection with what was then a small scene of Dutch DJs helped him to grow. His plan b was leveraging his business education into the corporate world, which came in handy when he grew internationally to become one of the hardest working artists. Earlier in his career, he was known for his mixes, with one being a mix of "Alive" by Vinni Vicci. After his breakout song Prutataaa with Afrojack, he signed with Afrojack’s label.'})
r3hab.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Back+To+You.mp3'), filename: 'Back+To+You.mp3')
r3hab.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Creep+(Radiohead+Remix).mp3'), filename: 'Creep+(Radiohead+Remix).mp3')
r3hab.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Marrakech.mp3'), filename: 'Marrakech.mp3')

rabbitjunk = Dj.create({name: 'Rabbit Junk', genre: 'Electropunk Industrial', nationality: 'USA 🇺🇸', bio: 'Rabbit Junk is a Seattle-based industrial rock, electropunk, and digital hardcore band that formed in 2004 by former The Shizit frontman JP Anderson and his wife Jennifer "Sum Grrl" Bernert. Taking influences from such diverse music genres such as hip hop, nu metal and new wave, JP has called this sound "Hardclash".'})
rabbitjunk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Crutch+2014.mp3'), filename: 'Crutch+2014.mp3')
rabbitjunk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Reveal.mp3'), filename: 'Reveal.mp3')
rabbitjunk.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Metro.mp3'), filename: 'The+Metro.mp3')

ranD = Dj.create({name: 'Ran D', genre: 'Hardstyle', nationality: 'Netherlands 🇳🇱', bio: 'Randy "Ran-D" Wieland (18 May 1981 in Zeeland) is a Dutch DJ and music producer. Ran-D has been active in hardstyle music since 2006, when he released his first track “D-Pression” on Special Records. After his debut release, Ran-D moved on to release his music on the large Hardstyle Record Label A2 Records, which is a sub-label of Scantraxx Recordz. After releasing on A2 Records for seven years, in March 2015 and alongside Frequencerz, Adaro and B-Front, Ran-D founded a new hardstyle record label, “Roughstate Music”. Roughstate is now regarded as a well-known record label within Hardstyle and now has a catalogue of over 100 releases.'})
ranD.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Bella+Ciao+(Money+Heist+Tribute).mp3'), filename: 'Bella+Ciao+(Money+Heist+Tribute).mp3')
ranD.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Bolivia.mp3'), filename: 'Bolivia.mp3')
ranD.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/MGFY.mp3'), filename: 'MGFY.mp3')
ranD.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/No+Guts+No+Glory.mp3'), filename: 'No+Guts+No+Glory.mp3')
ranD.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Not+An+Addict.mp3'), filename: 'Not+An+Addict.mp3')
ranD.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Zombie+(Gammer+Flip).mp3'), filename: 'Zombie+(Gammer+Flip).mp3')

rezz = Dj.create({name: 'Rezz', genre: 'Techno Electronica Dance', nationality: 'Ukraine 🇺🇦', bio: 'Isabelle Rezazadeh, (born March 28, 1995; Ukraine) known by her stage name Rezz (stylized as REZZ), is a Canadian DJ and record producer from Niagara Falls, Ontario. She released her debut EP, Insurrection in 2015 through OWSLAs sub-label Nest HQ.'})
rezz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Alien.mp3'), filename: 'Alien.mp3')
rezz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Criminals.mp3'), filename: 'Criminals.mp3')
rezz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Delusion.mp3'), filename: 'Delusion.mp3')
rezz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/LIVID.mp3'), filename: 'LIVID.mp3')
rezz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Paranoid.mp3'), filename: 'Paranoid.mp3')
rezz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Purple+Gusher.mp3'), filename: 'Purple+Gusher.mp3')

robinschulz = Dj.create({name: 'Robin Schulz', genre: 'Deep-House Tropical-House', nationality: 'Germany 🇩🇪', bio: 'Robin Schulz (German pronunciation: [ʁobɪn ʃʊlts]; born 28 April 1987) is a German musician, DJ and record producer. Most of his songs use manual guitar riffs. On 4 February 2014, he released the first single from his debut album, a remix of "Waves" by Dutch hip hop artist Mr Probz.'})
robinschulz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Changes.mp3'), filename: 'Changes.mp3')
robinschulz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Prayer+In+C.mp3'), filename: 'Prayer+In+C.mp3')
robinschulz.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Willst+Du.mp3'), filename: 'Willst+Du.mp3')

savoy = Dj.create({name: 'Savoy', genre: 'Electronica', nationality: 'USA 🇺🇸', bio: 'Savoy is a musical group from Boulder, now living in Brooklyn, consisting of producer Gray Smith, guitarist Ben Eberdt, and drummer Mike Kelly. Savoys musical style fuses the classic sound of rock n roll with techno, dance, and bass music, a genre theyve championed known as ERM (Electronic Rock Music). Savoys performances feature live instrumentation (drums and guitar), extensive lighting and laser production, as well as vocals from grammy nominated artist Heather Bright, Chali 2na, and more.'})
savoy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Cata.mp3'), filename: 'Cata.mp3')
savoy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Guesswork.mp3'), filename: 'Guesswork.mp3')
savoy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Kidz.mp3'), filename: 'Kidz.mp3')
savoy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Neon+Nebraska.mp3'), filename: 'Neon+Nebraska.mp3')
savoy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Welcome+To+Jamrock+(Damien+Marley+Remix).mp3'), filename: 'Welcome+To+Jamrock+(Damien+Marley+Remix).mp3')

sevenlions = Dj.create({name: 'Seven Lions', genre: 'Dubstep Electro-House', nationality: 'USA 🇺🇸', bio: 'Jeff Montalvo (born March 31, 1987), known professionally as Seven Lions, is an American DJ, record producer, instrumentalist and remixer from Santa Barbara, California. Active musically since 2010, his music combines styles as diverse as trance, melodic dubstep, drum and bass, glitch hop, and electro house. He has released six EPs, multiple singles, and official remixes for record labels such as Casablanca Records, OWSLA, Viper Recordings, Anjunabeats, Republic Records and Monstercat.'})
sevenlions.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Fractals.mp3'), filename: 'Fractals.mp3')
sevenlions.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Remember.mp3'), filename: 'Remember.mp3')
sevenlions.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Steps+Of+Deep+Slumber.mp3'), filename: 'Steps+Of+Deep+Slumber.mp3')

skrillex = Dj.create({name: 'Skrillex', genre: 'Dubstep Electro-House', nationality: 'USA 🇺🇸', bio: 'Sonny John Moore (born January 15, 1988), known professionally as Skrillex, is an American DJ, record producer, musician, singer and songwriter. Growing up in Northeast Los Angeles and in Northern California, he joined the American post-hardcore band From First to Last as the lead singer in 2004, and recorded two studio albums with the band (Dear Diary, My Teen Angst Has a Body Count, 2004, and Heroine, 2006) before leaving to pursue a solo career in 2007. He began his first tour as a solo artist in late 2007. After recruiting a new band lineup, Moore joined the Alternative Press Tour to support bands such as All Time Low and The Rocket Summer, and appeared on the cover of Alternative Press annual "100 Bands You Need to Know" issue.'})
skrillex.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/All+I+Ask+Of+You.mp3'), filename: 'All+I+Ask+Of+You.mp3')
skrillex.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Cinema.mp3'), filename: 'Cinema.mp3')
skrillex.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Kill+Everybody.mp3'), filename: 'Kill+Everybody.mp3')
skrillex.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Reptile.mp3'), filename: 'Reptile.mp3')
skrillex.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Ruffneck+(Flex).mp3'), filename: 'Ruffneck+(Flex).mp3')
skrillex.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/WEEKENDS.mp3'), filename: 'WEEKENDS.mp3')

stonebank = Dj.create({name: 'Stonebank', genre: 'Dance Electronica', nationality: 'UK 🇬🇧', bio: 'Michael Stonebank is an English electronic music producer. He made his debut on Monstercat with his track Eagle Eyes (feat. EMEL), which is included on Monstercat 017 - Ascension.'})
stonebank.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/All+Night.mp3'), filename: 'All+Night.mp3')
stonebank.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Dark.mp3'), filename: 'Dark.mp3')
stonebank.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/SOS.mp3'), filename: 'SOS.mp3')
stonebank.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stronger.mp3'), filename: 'Stronger.mp3')
stonebank.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+Government.mp3'), filename: 'The+Government.mp3')
stonebank.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/What+Are+You+Waiting+For.mp3'), filename: 'What+Are+You+Waiting+For.mp3')

testpilot = Dj.create({name: 'Testpilot', genre: 'Techno Electro-House', nationality: 'Canada 🇨🇦', bio: 'Testpilot is the techno based alias of Joel Zimmerman. However, he has only ever released one track under this name, and mainly uses Testpilot for performing sets at live shows.'})
testpilot.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Fall.mp3'), filename: 'Fall.mp3')
testpilot.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Headroom.mp3'), filename: 'Headroom.mp3')
testpilot.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Space+Sailors.mp3'), filename: 'Space+Sailors.mp3')
testpilot.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Sunspot.mp3'), filename: 'Sunspot.mp3')

tinlicker = Dj.create({name: 'Tinlicker', genre: 'House Electronic', nationality: 'Netherlands 🇳🇱', bio: 'Based out of Utrecht, Jordi van Achthoven and Micha Heyboer make u the Tinlicker duo. Always honing their progressive sounds, continually shaping their destination, creating their new ideal in electronic music. Crafted by an expression of computerised soul, Tinlicker are the modern face of Dutch electronic dance music.'})
tinlicker.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Donderdag.mp3'), filename: 'Donderdag.mp3')
tinlicker.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Sleepwalker.mp3'), filename: 'Sleepwalker.mp3')
tinlicker.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Waschmachine.mp3'), filename: 'Waschmachine.mp3')

tiesto = Dj.create({name: 'Tiësto', genre: 'Trance', nationality: 'Netherlands 🇳🇱', bio: 'Tijs Michiel Verwest OON (Dutch: [ˈtɛis miˈxil vərˈʋɛst]; born 17 January 1969), better known by his stage name Tiësto (/tiˈɛstoʊ/ tee-ES-toh; Dutch: [ˈcɛstoː]), is a Dutch DJ and record producer from Breda. He was named "the Greatest DJ of All Time" by Mix magazine in a poll voted by the fans.'})
tiesto.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Adagio+For+Strings.mp3'), filename: 'Adagio+For+Strings.mp3')
tiesto.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Bad+Guy+(Billie+Eilish+Remix).mp3'), filename: 'Bad+Guy+(Billie+Eilish+Remix).mp3')
tiesto.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Goldrush.mp3'), filename: 'Goldrush.mp3')
tiesto.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/In+The+Dark.mp3'), filename: 'In+The+Dark.mp3')
tiesto.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Lethal+Industry.mp3'), filename: 'Lethal+Industry.mp3')
tiesto.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Louder+Than+Boom.mp3'), filename: 'Louder+Than+Boom.mp3')

underworld = Dj.create({name: 'Underworld', genre: 'Progressive-House Techno Trance', nationality: 'UK 🇬🇧', bio: 'Underworld are a British electronic music group formed in 1980 in Cardiff, Wales and the principal name of Karl Hyde and Rick Smith recording together. Prominent former members include Darren Emerson, from 1991 to 2001, and Darren Price, as part of the live band from 2005 to 2016. After performing as a funk and synth-pop band, resulting in two albums between 1988 and 1989, Underworld gained prominence, after reshaping in 1993, into the progressive house and techno band and releasing seven subsequent albums, including Dubnobasswithmyheadman (1994), Second Toughest in the Infants (1996), and the 1996 single "Born Slippy .NUXX". Known for visual style and dynamic live performances, Underworld have influenced a wide range of artists and been featured in soundtracks and scores for films, television, and the 2012 Summer Olympics in London.'})
underworld.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Born+Slippy.mp3'), filename: 'Born+Slippy.mp3')
underworld.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Dark+Train.mp3'), filename: 'Dark+Train.mp3')
underworld.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Rez.mp3'), filename: 'Rez.mp3')

vintageculture = Dj.create({name: 'Vintage Culture', genre: 'House Electronica', nationality: 'Brazil 🇧🇷', bio: 'Lukas Ruiz, known as Vintage Culture (born July 7, 1993), is a Brazilian DJ and producer. n 2015, Vintage Culture appeared in #118 in the Top DJs list of British magazine DJ MAG and #2 on the list of best Brazilian DJs House Mag. In 2016, he achieved the 54º position and in 2017, he climbed the rank up to hold the best position of his career, being considered the #31 best DJ of the year. In 2016, he released the EP Hollywood by Ganza Seal Skol Music in partnership with Spinnin Records. Soon after he charted his remix of "Drinkee" for double Sofi Tukker released by Ultra Music at # 4 Dance chart of Beatport and even after a month of release has remained in the Top 10 with it. But it was with "Wild Kidz" released by Spinnin Records that Vintage Culture began to gain international recognition, the song entered the "Global Viral" Spotify and received support Oliver Heldens, EDX and Sam Feldt.'})
vintageculture.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Descontrol.mp3'), filename: 'Descontrol.mp3')
vintageculture.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Enjoy+The+Silence+(Depeche+Mode+Remix).mp3'), filename: 'Enjoy+The+Silence+(Depeche+Mode+Remix).mp3')
vintageculture.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Love+Goes.mp3'), filename: 'Love+Goes.mp3')

virtualself = Dj.create({name: 'Virtual Self', genre: 'Electro-House Synthpop', nationality: 'USA 🇺🇸', bio: 'Virtual Self is the debut extended play (EP) by American electronic music producer Porter Robinson under the alias Virtual Self. The EP was released on November 29, 2017, as the first release on the eponymous record label Virtual Self. Virtual Self is a departure from the sounds of Robinsons debut album Worlds, in favor of a more techno sound inspired by late 90s-early 2000s dance music. Upon announcement, previews of the EPs tracks became available on a website announced by the Virtual Self Twitter page. Virtual Selfs first live performance debuted on December 8, 2017 in Brooklyn, New York. The show consisted of an elaborate light show and in tandem with Robinson playing a DJ set. The set included songs from the game Dance Dance Revolution as well as unreleased Virtual Self music and songs from the EP.'})
virtualself.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/ANGEL+VOICES.mp3'), filename: 'ANGEL+VOICES.mp3')
virtualself.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Eon+Break.mp3'), filename: 'Eon+Break.mp3')
virtualself.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Ghost+Voices+(Raito+Remix).mp3'), filename: 'Ghost+Voices+(Raito+Remix).mp3')
virtualself.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/I\'m+With+You+(Avril+Lavigne+Remix).mp3'), filename: 'I\'m+With+You+(Avril+Lavigne+Remix).mp3')
virtualself.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Key.mp3'), filename: 'Key.mp3')
virtualself.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Particle+Arts.mp3'), filename: 'Particle+Arts.mp3')

vitalic = Dj.create({name: 'Vitalic', genre: 'Electro-House Techno', nationality: 'France 🇫🇷', bio: 'Pascal Arbez-Nicolas (French pronunciation: ​[paskal aʁbɛz nikɔla]; born 18 May 1976), better known by his stage name Vitalic (/ˈvɪtəlɪk/), is a French electronic music producer. His first singles were released in 1996 and 1997, but were confined to underground electronic music scene. However, he became good friends with techno producer The Hacker, whom he met in Le Rex Club, the "techno temple" of Laurent Garnier. "The Hacker" suggested he should send his new tracks to DJ Hell, head of International DeeJay Gigolo Records in Munich. Pascal did so, and International DeeJay Gigolo Records released the well known Poney EP in 2001, which was a huge success shortly after its release. With the track "La Rock 01", Vitalic created a club anthem which was a hit in the summer of 2001. The track was also included on many compilation albums, even rock compilations. Miss Kittin included "La Rock 01" on her DJ mix album On the Road.'})
vitalic.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Lucky+Star.mp3'), filename: 'Lucky+Star.mp3')
vitalic.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Nozomi.mp3'), filename: 'Nozomi.mp3')
vitalic.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Second+Lives.mp3'), filename: 'Second+Lives.mp3')
vitalic.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Trahison.mp3'), filename: 'Trahison.mp3')
vitalic.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Tu+Conmigo.mp3'), filename: 'Tu+Conmigo.mp3')
vitalic.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Under+Your+Sun.mp3'), filename: 'Under+Your+Sun.mp3')

waff = Dj.create({name: 'wAFF', genre: 'House', nationality: 'UK 🇬🇧', bio: 'Co-founder of long established Northern clubnight Koala, wAFF has played host to DJs the likes of Matt Tolfrey, Yaya, Glimpse, Subb-an, Nico Lahs and Jordan Peak in his mission to bring quality techno and house music to his native East Yorkshire.'})
waff.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Carunda.mp3'), filename: 'Carunda.mp3')
waff.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Groover.mp3'), filename: 'Groover.mp3')
waff.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Panwa.mp3'), filename: 'Panwa.mp3')

warface = Dj.create({name: 'Warface', genre: 'Hardstyle', nationality: 'Netherlands 🇳🇱', bio: 'Leading listeners through a journey of complete sonic savagery, Raw Hardstyle phenomenon Warface holds, without a doubt, one of the most impressive success stories. From lurking the underground to the claiming mainstages, this End of Line Recordings representative has sparked a musical insurgence that’s captivated the attention of Raw Hardstyle connoisseurs.'})
warface.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Enforce+The+Beat.mp3'), filename: 'Enforce+The+Beat.mp3')
warface.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Extortionist.mp3'), filename: 'Extortionist.mp3')
warface.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/FTP.mp3'), filename: 'FTP.mp3')
warface.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/No+Paradise.mp3'), filename: 'No+Paradise.mp3')
warface.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Robot+Gangbang.mp3'), filename: 'Robot+Gangbang.mp3')
warface.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stan+(Eminem+Remix).mp3'), filename: 'Stan+(Eminem+Remix).mp3')

wildstylez = Dj.create({name: 'Wildstylez', genre: 'Hardstyle', nationality: 'Netherlands 🇳🇱', bio: 'Joram Metekohy (born 7 January 1983), better known by his stage name Wildstylez, is a Dutch hardstyle DJ and record producer. Having previously released hardstyle records under the alias ''Seizure'', Joram Metekohy had his first solo release as Wildstylez in 2007 on the Scantraxx sub-label Scantraxx Reloaded.'})
wildstylez.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Children+Of+Drums.mp3'), filename: 'Children+Of+Drums.mp3')
wildstylez.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Great+Spirit+(Armin+Van+Buuren+Remix).mp3'), filename: 'Great+Spirit+(Armin+Van+Buuren+Remix).mp3')
wildstylez.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Play+My+Record.mp3'), filename: 'Play+My+Record.mp3')
wildstylez.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Roots.mp3'), filename: 'Roots.mp3')
wildstylez.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Take+Control.mp3'), filename: 'Take+Control.mp3')
wildstylez.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/The+World+Is+Yours.mp3'), filename: 'The+World+Is+Yours.mp3')

xhin = Dj.create({name: 'Xhin', genre: 'Dance Electronic', nationality: 'Singapore 🇸🇬', bio: 'Xhin (pronounced as "sheen") has been crafting ominous cuts of cutting-edge electronic music since 1997. Building a forte in sound design, he is best described as a sound futurist. His identical rhythmic structure and compositional techniques which inc.. Xhins biography.'})
xhin.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Fixing+The+Error.mp3'), filename: 'Fixing+The+Error.mp3')
xhin.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Teeth.mp3'), filename: 'Teeth.mp3')
xhin.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/You+Against+Yourself.mp3'), filename: 'You+Against+Yourself.mp3')

yellowclaw = Dj.create({name: 'Yellow Claw', genre: 'Dubstep Hardstyle', nationality: 'Netherlands 🇳🇱', bio: 'Yellow Claw is a Dutch DJ and record production duo from Amsterdam consisting of Jim Aasgier (born Jim Taihuttu) and Nizzle (born Nils Rondhuis). The duos music is a mix of a wide range of genres and often incorporates elements from trap, hip hop, dubstep, big room house, hardstyle and moombahton.'})
yellowclaw.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Amsterdamned.mp3'), filename: 'Amsterdamned.mp3')
yellowclaw.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Danger+Days.mp3'), filename: 'Danger+Days.mp3')
yellowclaw.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Reckless.mp3'), filename: 'Reckless.mp3')

zedd = Dj.create({name: 'Zedd', genre: 'House', nationality: 'Russia 🇷🇺', bio: 'Anton Zaslavski (Russian: Антон Заславский; born 2 September 1989), known professionally as Zedd (/zɛd/), is a Russian-German DJ, record producer and songwriter. He primarily produces and performs electro house music, but has diversified his genre and musical style, drawing influences from progressive house, dubstep, and classical music.'})
zedd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Bumble+Bee.mp3'), filename: 'Bumble+Bee.mp3')
zedd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Codec.mp3'), filename: 'Codec.mp3')
zedd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/One+More+Time+(Daft+Punk+Remix).mp3'), filename: 'One+More+Time+(Daft+Punk+Remix).mp3')
zedd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Stache.mp3'), filename: 'Stache.mp3')
zedd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Straight+Into+The+Fire.mp3'), filename: 'Straight+Into+The+Fire.mp3')
zedd.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Transmission.mp3'), filename: 'Transmission.mp3')

zedsdead = Dj.create({name: 'Zeds Dead', genre: 'Deep-House DrumnBass', nationality: 'Canada 🇨🇦', bio: 'Zeds Dead is a Canadian electronic music duo from Toronto, Canada. Dylan Mamid, also known as DC, and Zachary Rapp-Rovan, also known as Hooks, rose to prominence releasing original music and remixes from 2009–10 before becoming a staple on the international touring circuit thereafter. Today, they are known for their exploration of a diverse variety of genres that combine aspects of UK garage, house, electro house, hip-hop, glitch, drum and bass, and more.'})
zedsdead.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/DNA.mp3'), filename: 'DNA.mp3')
zedsdead.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Ether.mp3'), filename: 'Ether.mp3')
zedsdead.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Me+No+Care.mp3'), filename: 'Me+No+Care.mp3')

zomboy = Dj.create({name: 'Zomboy', genre: 'Dubstep Electro-House', nationality: 'UK 🇬🇧', bio: 'Joshua Mellody, professionally known as Zomboy, is an English dubstep music producer, songwriter, and DJ whose mascot is a zombie. Zomboy debuted in 2011 with the track Organ Donor, which was released on Never Say Die Records Game Time EP. His debut EP was in top 5 of the Beatport dubstep charts for over 8 weeks. At the end of the year, his music and remixes were licensed to compilations on labels like Warner and Ministry of Sound.'})
zomboy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Airborne.mp3'), filename: 'Airborne.mp3')
zomboy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Bad+Intentions.mp3'), filename: 'Bad+Intentions.mp3')
zomboy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Mind+Control.mp3'), filename: 'Mind+Control.mp3')
zomboy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Outbreak.mp3'), filename: 'Outbreak.mp3')
zomboy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/Raptor.mp3'), filename: 'Raptor.mp3')
zomboy.songs.attach(io: open('https://denizen-confidant-seeds.s3.amazonaws.com/songs/WTF.mp3'), filename: 'WTF.mp3')

