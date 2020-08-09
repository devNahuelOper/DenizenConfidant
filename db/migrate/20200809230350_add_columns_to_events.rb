class AddColumnsToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :cost, :string
    add_column :events, :local, :boolean, default: false
  end
end
