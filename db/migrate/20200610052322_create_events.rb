class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :venue, null: false
      t.string :location, null: false
      t.date :date
      t.text :headliners
      t.text :description

      t.timestamps
    end
  end
end
