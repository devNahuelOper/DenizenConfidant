# == Schema Information
#
# Table name: djs
#
#  id          :bigint           not null, primary key
#  name        :string
#  genre       :string
#  nationality :string
#  bio         :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Dj < ApplicationRecord
  # validates :name, :genre, :nationality, presence: true
  validates :name, presence: { message: " Name must be entered"}
  validates :genre, presence: { message: " Enter at least 1 genre"}
  validates :nationality, presence: { message: " Please enter where you're from"}
  has_one_attached :photo
  has_many_attached :songs
  has_one_attached :track

  # after_initialize :add_genres

  def add_genres
    genres = Genre.all
    own_genre = self.genre.split
    genres.each do |genre|
      if own_genre.include?(genre)
        self.genre_ids.push(genre.id)
      end
    end
  end
end
