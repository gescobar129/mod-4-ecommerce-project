class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts do |t|
      # t.integer :total_products
      # t.integer :total_cost
    end
  end
end
