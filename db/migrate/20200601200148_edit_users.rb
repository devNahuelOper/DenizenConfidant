class EditUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :default_region, true
    change_column_null :users, :language, true
    change_column_null :users, :birthday, true
    change_column_null :users, :gender, true 
  end
end
