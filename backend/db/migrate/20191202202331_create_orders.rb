class CreateOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :orders do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :shoe, null: false, foreign_key: true

      t.timestamps
    end
  end
end
