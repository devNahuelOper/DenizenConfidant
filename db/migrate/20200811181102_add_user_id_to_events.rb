class AddUserIdToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :user_id, :integer
    add_index :events, :user_id, unique: true
  end
end
