class AddEventsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :events, :text, array: true, default: []
  end
end
