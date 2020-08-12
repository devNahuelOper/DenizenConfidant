class ChangeUniqueStatusOnUserId < ActiveRecord::Migration[5.2]
  def change
    remove_index :events, :user_id
    add_index :events, :user_id
  end
end
