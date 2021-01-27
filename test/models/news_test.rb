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
require 'test_helper'

class NewsTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
