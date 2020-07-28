class CreateGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :genres do |t|
      t.string :name
      t.string :origin
      t.text :artists, array: true, default: []
      t.text :description

      t.timestamps
    end
  end
end
