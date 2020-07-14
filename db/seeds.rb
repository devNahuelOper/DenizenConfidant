# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Event.destroy_all

# deadmau5 = User.create({username: 'deadmau5', password: 'stereo', fname: 'Joel', lname: 'Zimmerman', email: 'mau5trap@deadmau5.com', region: 'Canada', language: 'English', birthday: 19810105, gender: 'M'})
deadmau5 = User.create({username: 'deadmau5', password: 'stereo'})

tomorrowland = Event.create({name: 'Tomorrowland', venue: 'PRC de Schorre', location: '🇧🇪 Antwerp, Belgium', date: 20210716, headliners: 'Martin Garrix, Dimitri Vegas & Like Mike, Armin van Buuren, Martin Solveig, Afrojack, DJ Snake', description: 'Taking place in Belgium Tomorrowland is the largest electronic music festival held in the world. Incredible decorations and ten metre tulips tower over the worlds biggest DJs playing to the worlds best crowd.'})
tomorrowland.photo.attach(io: File.open('app/assets/images/tomorrowland.png'), filename: 'tomorrowland.png')
# tomorrowland.photo.attach(io: File.open('/Users/nahuelgorosito/Desktop/tomorrowland.jpg'), filename: 'tomorrowland.jpg')
# tomorrowland.photo.attach(io: open('https://denizen-confidant-dev.s3.amazonaws.com/tomorrowland.jpg'), filename: 'tomorrowland.jpg', content_type: 'image/jpeg')

ultra = Event.create({name: 'Ultra', venue: 'Bayfront Park', location: '🇺🇸 Miami, FL', date: 20210326, headliners: 'Eric Prydz, Gesaffelstein, Kayzo, Armin Van Buuren, Afrojack, Cirez D Markus Schulz, Nicky Romero, Kaskade', description: 'Ultra Music Festival (UMF) is an annual outdoor electronic music festival that occurs in March in the city of Miami, Florida, United States. It also streams live coverage of the festival via YouTube, thereby providing a FOMO antidote to all those people who perhaps missed being there in person.'})
ultra.photo.attach(io: File.open('app/assets/images/ultra.png'), filename: 'ultra.png')
# ultra.photo.attach(io: open('https://denizen-confidant-dev.s3.amazonaws.com/ultra.png'), filename: 'ultra.png')

edc = Event.create({name: 'EDC', venue: 'Las Vegas Speedway', location: '🇺🇸 Las Vegas, NV', date: 20201003, headliners: 'Above and Beyond, Black Tiger Sex Machine, David Guetta, Deadmau5, Eric Prydz, Infected Mushroom, Nero, No Mana, Paul Oakenfold, Rezz, Steve Aoki' , description: 'EDC is a unique multi-day festival pushing the boundaries of imagination, and setting standards in the live entertainment industry. By incorporating carnival themes and attractions, cutting-edge stage production, world-class talent, and innovative art and technology, EDC is more than an electronic music festival - it is an unparalleled multi-sensory experience unlike any other.The foundation upon which the phenomenon was built is one of unity, love, self expression, and respect for one another.'})
edc.photo.attach(io: File.open('app/assets/images/edc.png'), filename: 'edc.png')
# edc.photo.attach(io: open('https://denizen-confidant-dev.s3.amazonaws.com/edc.png'), filename: 'edc.png')

ezoo = Event.create({name: 'Electric Zoo', venue: 'Randalls Island', location: '🇺🇸 New York, NY', date: 20200904, headliners: 'Above and Beyond, Alison Wonderland, Benny Benassi, Dog Blood, Diplo, Eric Prydz, Flux Pavillion, Kaskade, Nora En Pure, Seven Lions', description: 'Electric Zoo Festival is one of New York City’s largest music festivals and features the top names in electronic music, bringing a wide variety of acts from around the world and across the spectrum of electronic music’s various sub-genres. International editions of Electric Zoo have taken place in Mexico City, Tokyo, Shanghai and São Paulo.'})
ezoo.photo.attach(io: File.open('app/assets/images/ezoo.png'), filename: 'ezoo.png')
# ezoo.photo.attach(io: open('https://denizen-confidant-dev.s3.amazonaws.com/ezoo.png'), filename: 'ezoo.png')

transmission = Event.create({name: 'Transmission', venue: 'O2 Arena', location: '🇨🇿 Prague, Czechia', date: 20201024, headliners: 'Above and Beyond, Blastoyz, Cosmic Gate, Marlo, Markus Schulz, Paul Van Dyk', description: 'Transmission is undoubtedly the biggest and most recognised festival in Europe thats dedicated solely to trance music.'})
transmission.photo.attach(io: File.open('app/assets/images/transmission.png'), filename: 'transmission.png')
# transmission.photo.attach(io: open('https://denizen-confidant-dev.s3.amazonaws.com/transmission.png'), filename: 'transmission.png')

# sensation = Event.create({name: 'Sensation', venue: , location: 'Amsterdam', date: , headliners: , description: })
# global_gathering = Event.create({name: 'Global Gathering', venue: , location: 'UK', date: , headliners: , description: })

# ['Above and Beyond', 'Black Tiger Sex Machine', 'David Guetta', 'Deadmau5', 'Eric Prydz', 'Infected Mushroom', 'Nero', 'No Mana' 'Paul Oakenfold', 'Rezz', 'Steve Aoki']
# ultra.photo.attach(io: File.open('app/assets/images/ultra.png'), filename: 'ultra.png')

