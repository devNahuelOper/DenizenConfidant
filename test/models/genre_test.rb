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
require 'test_helper'

class GenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
