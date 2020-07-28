json.extract! genre, :id,:name, :origin, :artists, :description
# json.photoUrl polymorphic_url(genre.photo) if genre.photo.attached?

photo_arr = []

if genre.photos.attached?
  genre.photos.each do |photo|
    photo_arr.push(json.photoUrl polymorphic_url(photo))
  end
  json.photosUrl photo_arr
end