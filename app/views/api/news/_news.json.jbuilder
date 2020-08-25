json.extract! news, :id, :title, :blurb, :author, :category, :body
json.photoUrl polymorphic_url(news.photo) if news.photo.attached?