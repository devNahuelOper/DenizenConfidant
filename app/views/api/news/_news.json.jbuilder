json.extract! news, :id, :title, :blurb, :author, :category, :body, :created_at
json.photoUrl polymorphic_url(news.photo) if news.photo.attached?