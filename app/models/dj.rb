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
  validates :name, presence: true
  has_one_attached :photo
  has_many_attached :songs
end
