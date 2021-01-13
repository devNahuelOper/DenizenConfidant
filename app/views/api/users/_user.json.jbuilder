json.extract! user, :id, :username, :email, :fname, :lname, :gender, :region, :language, :birthday, :events, :created_at

event_photos = []

user.events.each do |event|
  event_photos.push(json.photoUrl polymorphic_url(event.photo)) if event.photo.attached?
  # json.photoUrl polymorphic_url(event.photo) if event.photo.attached?
end
json.eventPhotosUrl event_photos