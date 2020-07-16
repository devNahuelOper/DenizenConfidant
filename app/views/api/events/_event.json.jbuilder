json.extract! event, :id,:name, :venue, :location, :date, :headliners, :description
# json.photoUrl url_for(event.photo) if event.photo.attached?
json.photoUrl polymorphic_url(event.photo)