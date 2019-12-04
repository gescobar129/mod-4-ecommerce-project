class CreateJoiners < ActiveRecord::Migration[6.0]
  def change
    create_table :joiners do |t|
      t.belongs_to :shoe
      t.belongs_to :cart 
    end
  end
end
