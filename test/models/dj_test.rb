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
require 'test_helper'

class DjTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
