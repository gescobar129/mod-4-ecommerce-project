class CreateShoes < ActiveRecord::Migration[6.0]
  def change
    create_table :shoes do |t|
      t.string :name
      t.string :brand
      t.string :image
      t.integer :cost
      
      t.belongs_to :category     
    end
  end
end
