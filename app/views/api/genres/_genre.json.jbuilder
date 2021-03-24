json.extract! genre, :id,:name, :origin, :artists, :artist_ids, :description

photo_arr = []

if genre.photos.attached?
  genre.photos.each do |photo|
    photo_arr.push(json.photoUrl polymorphic_url(photo))
  end
  json.photosUrl photo_arr
end