json.extract! user, :id, :username, :email, :fname, :lname, :gender, :region, :language, :birthday, :events, :created_at

json.events user.events do |event|
  json.(event, :id, :user_id, :name, :venue, :location, :date, :headliners, :description, :cost, :created_at)
  json.photoUrl polymorphic_url(event.photo) if event.photo.attached?
end

