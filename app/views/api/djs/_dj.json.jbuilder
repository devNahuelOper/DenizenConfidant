json.extract! dj, :id, :name, :genre, :nationality, :bio, :get_genres, :user_id, :songs
json.photoUrl polymorphic_url(dj.photo) if dj.photo.attached?
json.trackUrl polymorphic_url(dj.track) if dj.track.attached?

song_arr = []
song_files = []

if dj.songs.attached?
  dj.songs.each do |song|
    song_arr.push(json.songUrl polymorphic_url(song)) 
    song_files.push(json.songFile song.blob)
  end
  json.songsUrl song_arr
  json.songFiles song_files
end