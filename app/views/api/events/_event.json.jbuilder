json.extract! event, :id,:name, :venue, :location, :date, :headliners, :description, :cost, :local, :created_at, :get_djs
json.photoUrl polymorphic_url(event.photo) if event.photo.attached?
json.user_id event.user_id if event.user_id?
# json.get_djs event.get_djs if event.get_djs?