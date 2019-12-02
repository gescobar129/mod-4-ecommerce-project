class CreateShoes < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.string :name
      t.integer :cost
      t.string :image
      t.string :category

      t.timestamps
    end
  end
end
