class CreateDjs < ActiveRecord::Migration[5.2]
  def change
    create_table :djs do |t|
      t.string :name, null: false
      t.string :genre
      t.string :nationality
      t.text :bio

      t.timestamps
    end
  end
end
