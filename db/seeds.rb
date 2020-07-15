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

deadmau5 = User.create({username: 'deadmau5', password: 'stereo', fname: 'Joel', lname: 'Zimmerman', email: 'mau5trap@deadmau5.com', region: 'Canada', language: 'English', birthday: 19810105, gender: 'Male'})


untold = Event.create({name: 'Untold', venue: 'Cluj-Arena', location: '🇷🇴 Cluj-Napoca, Romania', date: 20210804, headliners: 'Alan Walker, Boney M, Charli XCX, Culture Beat Don Diablo, Dillon Francis, Dimitri Vegas & Like Mike, Duke Dumont, Fatman Scoop, Fedde Le Grand, John Digweed, John Newman, Lost Frequencies, Patrice, Sasha, Sunnery James & Ryan Marciano, Tinie Tempah, Tom Odell, Tujamo', description: 'Untold Festival is the largest electronic music festival held in Romania, taking place in Cluj-Napoca at the Cluj Arena. It is held annually and has been designated Best Major Festival within European Festival Awards 2015. Guests include a vast range of European countries, as well as Asia and North America.'})
untold_photo = open('https://denizen-confidant-seeds.s3.amazonaws.com/untold.png')
untold.photo.attach(io: untold_photo, filename: 'untold.png')

tomorrowland = Event.create({name: 'Tomorrowland', venue: 'PRC de Schorre', location: '🇧🇪 Antwerp, Belgium', date: 20210716, headliners: 'Tiesto, Martin Garrix, Dimitri Vegas & Like Mike, Armin van Buuren, Carl Cox, Martin Solveig, Afrojack, DJ Snake', description: 'Taking place in Belgium Tomorrowland is the largest electronic music festival held in the world. Incredible decorations and ten metre tulips tower over the worlds biggest DJs playing to the worlds best crowd.'})
tomorrowland_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/tomorrowland.jpeg')
tomorrowland.photo.attach(io: tomorrowland_photo, filename: 'tomorrowland.jpeg')
# file = open('s3://denizen-confidant-seeds/tomorrowland.jpeg')
# tomorrowland.photo.attach(io: file, filename: 'tomorrowland.jpeg')

sonar = Event.create({name: 'Sonar', venue: 'Fira Gran Via L Hospitalet', location: '🇪🇸 Barcelona, Spain', date: 20210617, headliners: '2acid arab live, actress + young paint live ai/av, afrodeutsche, aleesha, alvva, amelie lens, andy c, anger, anna vs june, arca, artwork, bad bunny, bad gyal, desert + desilence, deva, diego navarro, disclosure dj set, dixon, dj koze, karcelen, k á r y y n, katarzia, nicola cruz, nistra, obongjayar, octavian, sho madjozi, skepta, $kyhook, slikback, titi calor, tutu, underworld, vince staples, virgen maria, yakamoto kotzuga, ylia, 700 Bliss', description: 'Created in 1994, Sónar is a pioneering cultural event with a unique format and content. Its first class reputation as a leading reference for international festivals is thanks to its attention in curation, combining a playful nature, the avant-garde, and experimentation with newest trends in dance and electronic music.'})
sonar_photo = open('https://denizen-confidant-seeds.s3.amazonaws.com/sonar.png')
sonar.photo.attach(io: sonar_photo, filename: 'sonar.png')

ultra = Event.create({name: 'Ultra', venue: 'Bayfront Park', location: '🇺🇸 Miami, FL', date: 20210326, headliners: 'Eric Prydz, Gesaffelstein, Kayzo, Armin Van Buuren, Afrojack, Cirez D Markus Schulz, Nicky Romero, Kaskade', description: 'Ultra Music Festival (UMF) is an annual outdoor electronic music festival that occurs in March in the city of Miami, Florida, United States. It also streams live coverage of the festival via YouTube, thereby providing a FOMO antidote to all those people who perhaps missed being there in person.'})
ultra_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/ultra.jpeg')
ultra.photo.attach(io: ultra_photo, filename: 'ultra.jpeg')
# file = open('s3://denizen-confidant-seeds/ultra.jpeg')
# ultra.photo.attach(io: file, filename: 'ultra.jpeg')

timewarp = Event.create({name: 'Time Warp', venue: 'TBD', location: '🇩🇪 Mannheim, Germany', date: 20210406, headliners: 'Adam Beyer, Adriatique, Âme, Amelie Lens, Baba Stiltz, Ben Klock, Boris Brejcha, Carl Cox, Charlotte de Witte, Chris Liebing, Craig Richards, Dixon, Dorian Paic, Dubfire, Fabe, Jamie Jones, Joseph Capriati, Joy Orbison, Karotte, Kölsch, Laurent Garnier, Len Faki, Loco Dice, Luciano, Maceo Plex, Magda, Marco Carola, Margaret Dygas, Monika Kruse, Nick Curly, Nina Kraviz b2b Helena Hauff, Pan-Pot, Peggy Gou, Recondite, Ricardo Villalobos b2b Craig Richards, Ricardo Villalobos, Richie Hawtin, Seebase, Seth Troxler, Solomun b2b Tale Of Us b2b Dixon, Solomun, Steffen Baumann, Sven Väth, Tale Of Us, The Martinez Brothers, tINI', description: 'Time Warp is an annual electronic music festival in Mannheim, Germany. The festival was introduced in 1994 on the other side of the river Rhine in Ludwigshafen. As a cultural festival, the main sponsor was TDK Marketing Europe from 2005 to 2007.' })
timewarp_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/timewarp.png')
timewarp.photo.attach(io: timewarp_photo, filename: 'timewarp.png')


edc = Event.create({name: 'EDC', venue: 'Las Vegas Speedway', location: '🇺🇸 Las Vegas, NV', date: 20201003, headliners: 'Above and Beyond, Black Tiger Sex Machine, David Guetta, Deadmau5, Eric Prydz, Infected Mushroom, Nero, No Mana, Paul Oakenfold, Rezz, Steve Aoki' , description: 'EDC is a unique multi-day festival pushing the boundaries of imagination, and setting standards in the live entertainment industry. By incorporating carnival themes and attractions, cutting-edge stage production, world-class talent, and innovative art and technology, EDC is more than an electronic music festival - it is an unparalleled multi-sensory experience unlike any other.The foundation upon which the phenomenon was built is one of unity, love, self expression, and respect for one another.'})
edc_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/edc.jpeg')
edc.photo.attach(io: edc_photo, filename: 'edc.jpeg')
# file = open('s3://denizen-confidant-seeds/edc.jpeg')
# edc.photo.attach(io: file, filename: 'edc.jpeg')

ezoo = Event.create({name: 'Electric Zoo', venue: 'Randalls Island', location: '🇺🇸 New York, NY', date: 20200904, headliners: 'Above and Beyond, Alison Wonderland, Benny Benassi, Dog Blood, Diplo, Eric Prydz, Flux Pavillion, Kaskade, Nora En Pure, Seven Lions', description: 'Electric Zoo Festival is one of New York City’s largest music festivals and features the top names in electronic music, bringing a wide variety of acts from around the world and across the spectrum of electronic music’s various sub-genres. International editions of Electric Zoo have taken place in Mexico City, Tokyo, Shanghai and São Paulo.'})
ezoo_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/ezoo.jpeg')
ezoo.photo.attach(io: ezoo_photo, filename: 'ezoo.jpeg')
# file = open('s3://denizen-confidant-seeds/ezoo.jpeg')
# ezoo.photo.attach(io: file, filename: 'ezoo.jpeg')

transmission = Event.create({name: 'Transmission', venue: 'O2 Arena', location: '🇨🇿 Prague, Czechia', date: 20201024, headliners: 'Above and Beyond, Blastoyz, Cosmic Gate, Marlo, Markus Schulz, Paul Van Dyk', description: 'Transmission is undoubtedly the biggest and most recognised festival in Europe thats dedicated solely to trance music.'})
transmission_photo = open('https://denizen-confidant-seeds.s3.us-east-1.amazonaws.com/transmission.jpeg')
transmission.photo.attach(io: transmission_photo, filename: 'transmission.jpeg')
# file = open('s3://denizen-confidant-seeds/transmission.jpeg')
# transmission.photo.attach(io: file, filename: 'transmission.jpeg')

# sensation = Event.create({name: 'Sensation', venue: , location: 'Amsterdam', date: , headliners: , description: })
# global_gathering = Event.create({name: 'Global Gathering', venue: , location: 'UK', date: , headliners: , description: })

# ['Above and Beyond', 'Black Tiger Sex Machine', 'David Guetta', 'Deadmau5', 'Eric Prydz', 'Infected Mushroom', 'Nero', 'No Mana' 'Paul Oakenfold', 'Rezz', 'Steve Aoki']
# ultra.photo.attach(io: File.open('app/assets/images/ultra.jpeg'), filename: 'ultra.jpeg')


