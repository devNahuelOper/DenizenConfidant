# == Schema Information
#
# Table name: genres
#
#  id          :bigint           not null, primary key
#  name        :string
#  origin      :string
#  artists     :text             default([]), is an Array
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  artist_ids  :text             default([]), is an Array
#
class Genre < ApplicationRecord
  validates :name, presence: true
  has_many_attached :photos
  has_one_attached :avatar
  # has_many_attached :songs

  after_initialize :add_artists

  def add_artists
    djs = Dj.all
    djs.each do |dj|
      genres = dj.genre.split
      if genres.include?(self.name)
        self.artists.push(dj.name)
        self.artist_ids.push(dj.id)
        dj.genre_ids.push(self.id)
      end
    end
  end

end
