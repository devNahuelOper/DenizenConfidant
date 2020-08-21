class AddGenreIdsToDjs < ActiveRecord::Migration[5.2]
  def change
    add_column :djs, :genre_ids, :text, array: true, default: []
  end
end
