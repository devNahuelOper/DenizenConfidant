class AddUserReferenceToDj < ActiveRecord::Migration[5.2]
  def change
    add_reference(:djs, :user, foreign_key: true)
  end
end
