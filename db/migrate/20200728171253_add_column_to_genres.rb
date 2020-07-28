class AddColumnToGenres < ActiveRecord::Migration[5.2]
  def change
    add_column :genres, :artist_ids, :text, array: true, default: []
  end
end
