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
#  genre_ids   :text             default([]), is an Array
#  user_id     :bigint
#
class Dj < ApplicationRecord
  # validates :name, :genre, :nationality, presence: true
  validates :name, presence: { message: " Name must be entered"}
  validates :genre, presence: { message: " Enter at least 1 genre"}
  validates :nationality, presence: { message: " Please enter where you're from"}
  
  has_one_attached :photo
  has_many_attached :songs
  has_one_attached :track
  belongs_to :user

  # belongs_to_and_has_many :genres

 

  def get_genres
    genre_hash = {}
    own_genres = self.genre.split.map { |gen| gen.strip }

    own_genres.each do |genre|
      matched_genre = Genre.where(name: genre)
      genre_hash[genre] = matched_genre.ids[0]
    end

    genre_hash
  end

  
end
