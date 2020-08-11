# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  venue       :string           not null
#  location    :string           not null
#  date        :date
#  headliners  :text
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Event < ApplicationRecord
  # validates :name, :venue, :location, presence: true
  validates :name, presence: { message: " Please add the Title of this event"}
  validates :location, presence: { message: " Please provide a location"}
  validates :venue, presence: { message: " Please select a venue"}
  # validates_attachment :image, content_type: {content_type: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']}

  has_one_attached :photo 
end
