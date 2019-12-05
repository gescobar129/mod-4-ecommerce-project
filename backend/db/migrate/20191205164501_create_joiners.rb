class CreateJoiners < ActiveRecord::Migration[6.0]
  def change
    create_table :joiners do |t|
      t.belongs_to :shoes
      t.belongs_to :orders
    end
  end
end
