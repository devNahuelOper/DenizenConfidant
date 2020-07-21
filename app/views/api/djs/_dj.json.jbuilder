json.extract! dj, :id, :name, :genre, :nationality, :bio
json.photoUrl polymorphic_url(dj.photo) if dj.photo.attached?

song_arr = []

if dj.songs.attached?
  dj.songs.each do |song|
    song_arr.push(json.songUrl polymorphic_url(song)) 
  end
  json.songsUrl song_arr
end