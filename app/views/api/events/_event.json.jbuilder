json.extract! event, :id,:name, :venue, :location, :date, :headliners, :description, :cost, :local
json.photoUrl polymorphic_url(event.photo) if event.photo.attached?