json.extract! dj, :id, :name, :genre, :nationality, :bio
json.photoUrl url_for(dj.photo) if dj.photo.attached?