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

  def get_genres
    genre_hash = {}
    genres = Genre.all
    own_genres = self.genre.split.map {|gen| gen.strip}

    genres.each do |genre|
      if own_genres.include?(genre.name)
        genre_hash[genre.name] = genre.id
      end
    end
    genre_hash
  end
end
