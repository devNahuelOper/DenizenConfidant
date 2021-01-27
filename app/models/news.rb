# == Schema Information
#
# Table name: news
#
#  id         :bigint           not null, primary key
#  title      :string
#  blurb      :string
#  author     :string
#  category   :string
#  body       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class News < ApplicationRecord
  has_one_attached :photo
end
