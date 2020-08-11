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
require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
