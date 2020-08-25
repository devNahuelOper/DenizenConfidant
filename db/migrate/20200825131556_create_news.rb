class CreateNews < ActiveRecord::Migration[5.2]
  def change
    create_table :news do |t|
      t.string :title
      t.string :blurb
      t.string :author
      t.string :category
      t.text :body

      t.timestamps
    end
  end
end
