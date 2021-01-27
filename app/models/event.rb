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
#  cost        :string
#  local       :boolean          default(FALSE)
#  user_id     :integer
#
class Event < ApplicationRecord
  validates :name, presence: { message: " Please add the Title of this event"}
  validates :location, presence: { message: " Please provide a location"}
  validates :venue, presence: { message: " Please select a venue"}
  # validates :user_id, allow_nil: true
  # validates_attachment :image, content_type: {content_type: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']}

  belongs_to :user, foreign_key: :user_id, class_name: :User
  has_one_attached :photo 

  def get_djs
    dj_hash = {}
    own_djs = self.headliners.split(',').map{|dj| dj.strip.downcase}
    djs = Dj.all

    djs.each do |dj|
      if own_djs.include?(dj.name.downcase) 
        dj_hash[dj.name.downcase] = dj.id
      end
    end
    dj_hash
  end
end
