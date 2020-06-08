class RenameUserColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :first_name, :fname
    rename_column :users, :last_name, :lname
    rename_column :users, :default_region, :region
    add_column :users, :email, :string
  end
end
