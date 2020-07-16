class Dj < ApplicationRecord
  validates :name, presence: true
  has_one_attached :photo
  has_many_attached :songs
end
