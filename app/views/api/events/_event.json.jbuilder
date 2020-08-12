json.extract! event, :id,:name, :venue, :location, :date, :headliners, :description, :cost, :local, :created_at
json.photoUrl polymorphic_url(event.photo) if event.photo.attached?
json.user_id event.user_id if event.user_id?