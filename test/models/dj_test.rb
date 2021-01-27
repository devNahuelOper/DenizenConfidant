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
require 'test_helper'

class DjTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
