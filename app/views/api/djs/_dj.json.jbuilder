json.extract! dj, :id, :name, :genre, :nationality, :bio
json.photoUrl polymorphic_url(dj.photo) if dj.photo.attached?