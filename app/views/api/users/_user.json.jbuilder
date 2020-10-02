json.extract! user, :id, :username, :email, :fname, :lname, :gender, :region, :language, :birthday, :events, :created_at

user.events.each do |event|
  json.photoUrl polymorphic_url(event.photo) if event.photo.attached?
end