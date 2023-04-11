json.extract! user, :id, :username, :email, :fname, :lname, :gender, :region, :language, :birthday, :events, :created_at

json.events user.events do |event|
  json.(event, :id, :user_id, :name, :venue, :location, :date, :headliners, :description, :cost, :created_at)
  json.photoUrl polymorphic_url(event.photo) if event.photo.attached?
end

json.djs user.djs do |dj|
  json.(dj, :id, :user_id, :name, :genre, :nationality, :bio)
  json.photoUrl polymorphic_url(dj.photo) if dj.photo.attached?

  song_arr = []
  if dj.songs.attached?
    dj.songs.each do |song|
      song_arr.push(json.songUrl polymorphic_url(song))
    end
    json.songsUrl song_arr
  end
end