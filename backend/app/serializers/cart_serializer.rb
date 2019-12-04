class CartSerializer < ActiveModel::Serializer
  attributes :id, :total_cost, :total_items
  has_many :products

  def total_items
    self.products.length
  end 

  def total_cost
    self.products.map do |s|
      s.cost.sum
    end 
  end 
end
