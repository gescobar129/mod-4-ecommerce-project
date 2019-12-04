class CartSerializer < ActiveModel::Serializer
  attributes :id
  # :total_cost, :total_items
  has_many :shoes, through: :joiner

  # def total_items
  #   self.oject.shoes.length
  # end 

  # def total_cost
  #   self.object.shoes.map do |s|
  #     s.cost.sum
  #   end 
  # end 
end
