# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# deadmau5 = User.create({username: 'deadmau5', password: 'stereo', fname: 'Joel', lname: 'Zimmerman', email: 'mau5trap@deadmau5.com', region: 'Canada', language: 'English', birthday: 19810105, gender: 'M'})

tomorrowland = Event.create({name: 'Tomorrowland', venue: 'PRC de Schorre', location: 'Belgium', date: 20210716, headliners: 'Martin Garrix, Dimitri Vegas & Like Mike, Armin van Buuren, Martin Solveig, Afrojack, DJ Snake', description: 'Taking place in Belgium Tomorrowland is the largest electronic music festival held in the world. Incredible decorations and ten metre tulips tower over the worlds biggest DJs playing to the worlds best crowd.'})
ultra = Event.create({name: 'Ultra', venue: 'Bayfront Park', location: 'Miami', date: 20210326, headliners: 'Eric Prydz, Gesaffelstein, Kayzo, Armin Van Buuren, Afrojack, Cirez D Markus Schulz, Nicky Romero, Kaskade', description: 'Ultra Music Festival (UMF) is an annual outdoor electronic music festival that occurs in March in the city of Miami, Florida, United States. It also streams live coverage of the festival via YouTube thereby aiding to all those people who perhaps missed being there in person.'})
edc = Event.create({name: 'EDC', venue: 'Las Vegas Speedway', location: 'Las Vegas', date: 20201003, headliners: 'Above and Beyond, Black Tiger Sex Machine, David Guetta, Deadmau5, Eric Prydz, Infected Mushroom, Nero, No Mana, Paul Oakenfold, Rezz, Steve Aoki' , description: 'Electronic Daisy Carnival is a music festival held in spring, summer, and fall months in the United States. Arguably it is the largest electronic music festival in North America.'})
ezoo = Event.create({name: 'Electric Zoo', venue: 'Randalls Island', location: 'New York', date: 20200904, headliners: 'Above and Beyond, Alison Wonderland, Benny Benassi, Dog Blood, Diplo, Eric Prydz, Flux Pavillion, Kaskade, Nora En Pure, Seven Lions', description: 'The Electric Zoo Festival is an annual electronic music festival held over Labor Day weekend in New York City on Randalls Island.'})
transmission = Event.create({name: 'Transmission', venue: 'O2 Arena', location: 'Prague', date: 20201024, headliners: 'Above and Beyond, Blastoyz, Cosmic Gate, Marlo, Markus Schulz, Paul Van Dyk', description: 'Transmission is undoubtedly the biggest and most recognised festival in Europe thats dedicated solely to trance music.'})
# sensation = Event.create({name: 'Sensation', venue: , location: 'Amsterdam', date: , headliners: , description: })
# global_gathering = Event.create({name: 'Global Gathering', venue: , location: 'UK', date: , headliners: , description: })

# ['Above and Beyond', 'Black Tiger Sex Machine', 'David Guetta', 'Deadmau5', 'Eric Prydz', 'Infected Mushroom', 'Nero', 'No Mana' 'Paul Oakenfold', 'Rezz', 'Steve Aoki']