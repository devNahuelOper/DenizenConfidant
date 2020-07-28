json.extract! event, :id,:name, :venue, :location, :date, :headliners, :description
json.photoUrl polymorphic_url(event.photo)